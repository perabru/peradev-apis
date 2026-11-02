import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { once } from 'node:events';
import { createTaskServer } from '../server.mjs';

async function setup(t) {
  const dir = mkdtempSync(join(tmpdir(), 'peradev-'));
  const file = join(dir, 'tasks.json');
  let server;
  async function start() {
    server = createTaskServer({ dataFile: file });
    server.listen(0, '127.0.0.1');
    await once(server, 'listening');
    return `http://127.0.0.1:${server.address().port}`;
  }
  const stop = () => new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  let base = await start();
  t.after(async () => { if (server.listening) await stop(); rmSync(dir, { recursive: true, force: true }); });
  return {
    async request(path, method = 'GET', body) {
      return fetch(base + path, { method, headers: body === undefined ? {} : { 'Content-Type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) });
    },
    async restart() { await stop(); base = await start(); },
    url: () => base,
    file
  };
}

test('CRUD completo e persistência depois de reiniciar', async t => {
  const app = await setup(t);
  const created = await app.request('/tasks', 'POST', { title: '  Publicar API  ', priority: 'high' });
  assert.equal(created.status, 201);
  const task = await created.json();
  assert.equal(created.headers.get('location'), `/tasks/${task.id}`);
  assert.equal(task.title, 'Publicar API');
  assert.equal(task.done, false);
  assert.equal((await app.request(`/tasks/${task.id}`)).status, 200);
  await app.restart();
  assert.equal((await (await app.request(`/tasks/${task.id}`)).json()).title, 'Publicar API');
  const updated = await app.request(`/tasks/${task.id}`, 'PATCH', { done: true });
  assert.equal((await updated.json()).done, true);
  assert.equal((await app.request(`/tasks/${task.id}`, 'DELETE')).status, 204);
  await app.restart();
  assert.equal((await app.request(`/tasks/${task.id}`)).status, 404);
});

test('filtros combinados e paginação preservam o total', async t => {
  const app = await setup(t);
  await app.request('/tasks', 'POST', { title: 'Estudar redes', priority: 'high' });
  await app.request('/tasks', 'POST', { title: 'Estudar API', priority: 'high', done: true });
  await app.request('/tasks', 'POST', { title: 'Ler livro', priority: 'low' });
  let result = await (await app.request('/tasks?q=ESTUDAR&priority=high&limit=1')).json();
  assert.equal(result.total, 2);
  assert.equal(result.data.length, 1);
  result = await (await app.request('/tasks?q=estudar&priority=high&done=false')).json();
  assert.equal(result.total, 1);
  assert.equal(result.data[0].title, 'Estudar redes');
  assert.equal((await (await app.request('/tasks?offset=3')).json()).data.length, 0);
});

test('rejeita tipos incorretos, campos extras, JSON quebrado e mídia incorreta', async t => {
  const app = await setup(t);
  for (const body of [null, [], {}, {title:''}, {title:'x', done:'false'}, {title:'x', priority:'urgent'}, {title:'x', id:'escolhido'}]) {
    assert.equal((await app.request('/tasks', 'POST', body)).status, 400);
  }
  let response = await fetch(app.url() + '/tasks', {method:'POST', headers:{'Content-Type':'application/json'}, body:'{broken'});
  assert.equal(response.status, 400);
  response = await fetch(app.url() + '/tasks', {method:'POST', body:'title=x'});
  assert.equal(response.status, 415);
  response = await app.request('/tasks', 'POST', {title:'x', description:'x'.repeat(17000)});
  assert.equal(response.status, 413);
  assert.equal((await (await app.request('/tasks')).json()).total, 0);
});

test('rejeita consultas ambíguas e atualização vazia', async t => {
  const app = await setup(t);
  for (const query of ['limit=0','limit=1.5','offset=-1','done=yes','priority=urgent','done=true&done=false','extra=1']) {
    assert.equal((await app.request(`/tasks?${query}`)).status, 400);
  }
  const task = await (await app.request('/tasks','POST',{title:'x'})).json();
  assert.equal((await app.request(`/tasks/${task.id}`,'PATCH',{})).status,400);
  const response = await app.request('/tasks','PUT');
  assert.equal(response.status,405);
  assert.equal(response.headers.get('allow'),'GET, POST');
});

test('requisições concorrentes não perdem tarefas persistidas', async t => {
  const app = await setup(t);
  const responses = await Promise.all(Array.from({length:20}, (_,i) => app.request('/tasks','POST',{title:`Tarefa ${i}`})));
  assert.ok(responses.every(response => response.status === 201));
  await app.restart();
  const result = await (await app.request('/tasks?limit=100')).json();
  assert.equal(result.total,20);
  assert.equal(new Set(result.data.map(task => task.id)).size,20);
});

test('arquivo corrompido não é silenciosamente sobrescrito', async t => {
  const dir = mkdtempSync(join(tmpdir(),'peradev-corrupt-'));
  t.after(() => rmSync(dir,{recursive:true,force:true}));
  const file = join(dir,'tasks.json');
  writeFileSync(file,'{invalid');
  assert.throws(() => createTaskServer({dataFile:file}), /arquivo de dados é inválido/);
});

test('health, documentação e contrato estão disponíveis', async t => {
  const app = await setup(t);
  assert.equal((await (await app.request('/health')).json()).status,'ok');
  const docs = await app.request('/docs');
  assert.match(docs.headers.get('content-type'), /text\/html/);
  assert.match(await docs.text(), /PeraDev/);
  const spec = await (await app.request('/openapi.json')).json();
  assert.equal(spec.openapi,'3.0.3');
  assert.ok(spec.paths['/tasks'].post);
});
