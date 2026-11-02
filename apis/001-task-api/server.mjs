import http from 'node:http';
import { randomUUID } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, renameSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BODY = 16 * 1024;
const MAX_TASKS = 5000;
const priorities = ['low', 'medium', 'high'];
const fields = ['title', 'description', 'priority', 'done'];
class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
const fail = (status, message) => { throw new ApiError(status, message); };

function validate(input, patch = false) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) fail(400, 'Envie um objeto JSON.');
  const keys = Object.keys(input);
  if (keys.some(key => !fields.includes(key))) fail(400, 'Campo desconhecido. Use title, description, priority e done.');
  if (patch && !keys.length) fail(400, 'Informe pelo menos um campo para atualizar.');
  const out = {};
  if (!patch || 'title' in input) {
    if (typeof input.title !== 'string' || !input.title.trim() || input.title.trim().length > 120) {
      fail(400, 'title deve conter de 1 a 120 caracteres.');
    }
    out.title = input.title.trim();
  }
  if ('description' in input) {
    if (typeof input.description !== 'string' || input.description.length > 1000) fail(400, 'description deve ser texto de até 1000 caracteres.');
    out.description = input.description.trim();
  } else if (!patch) out.description = '';
  if ('priority' in input) {
    if (!priorities.includes(input.priority)) fail(400, 'priority deve ser low, medium ou high.');
    out.priority = input.priority;
  } else if (!patch) out.priority = 'medium';
  if ('done' in input) {
    if (typeof input.done !== 'boolean') fail(400, 'done deve ser true ou false, sem aspas.');
    out.done = input.done;
  } else if (!patch) out.done = false;
  return out;
}

function createStore(file) {
  const dataFile = resolve(file);
  mkdirSync(dirname(dataFile), { recursive: true });
  let tasks = [];
  try {
    tasks = JSON.parse(readFileSync(dataFile, 'utf8'));
    if (!Array.isArray(tasks) || tasks.length > MAX_TASKS) throw new Error('Formato de dados inválido.');
    const ids = new Set();
    for (const task of tasks) {
      if (!task || typeof task.id !== 'string' || ids.has(task.id) ||
          !Number.isFinite(Date.parse(task.createdAt)) || !Number.isFinite(Date.parse(task.updatedAt))) {
        throw new Error('Tarefa persistida inválida.');
      }
      validate(Object.fromEntries(fields.map(key => [key, task[key]])));
      ids.add(task.id);
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw new Error('O arquivo de dados é inválido; restaure um backup antes de iniciar.', { cause: error });
  }
  function save(next) {
    // Mutations run synchronously in one process: a response only succeeds after persistence.
    const temporary = `${dataFile}.tmp`;
    writeFileSync(temporary, `${JSON.stringify(next, null, 2)}\n`, { mode: 0o600 });
    renameSync(temporary, dataFile);
    tasks = next;
  }
  return {
    list: () => tasks,
    create(values) {
      if (tasks.length >= MAX_TASKS) fail(409, 'Limite de 5000 tarefas atingido.');
      const now = new Date().toISOString();
      const task = { id: randomUUID(), ...values, createdAt: now, updatedAt: now };
      save([task, ...tasks]);
      return task;
    },
    find(id) {
      const task = tasks.find(item => item.id === id);
      if (!task) fail(404, 'Tarefa não encontrada.');
      return task;
    },
    update(id, values) {
      const task = { ...this.find(id), ...values, updatedAt: new Date().toISOString() };
      save(tasks.map(item => item.id === id ? task : item));
      return task;
    },
    remove(id) { this.find(id); save(tasks.filter(item => item.id !== id)); }
  };
}

async function readJson(req) {
  if (req.headers['content-type']?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    fail(415, 'Use Content-Type: application/json.');
  }
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    if (size <= MAX_BODY) chunks.push(chunk);
    else fail(413, 'O corpo JSON deve ter no máximo 16 KiB.');
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { fail(400, 'JSON inválido.'); }
}

function integer(value, fallback, min, max, name) {
  if (value === null) return fallback;
  if (!/^\d+$/.test(value) || Number(value) < min || Number(value) > max) {
    fail(400, `${name} deve ser um inteiro entre ${min} e ${max}.`);
  }
  return Number(value);
}

export function createTaskServer({ dataFile = resolve('data/tasks.json') } = {}) {
  const store = createStore(dataFile);
  const docs = readFileSync(new URL('./docs.html', import.meta.url));
  const spec = readFileSync(new URL('./openapi.json', import.meta.url));
  const server = http.createServer(async (req, res) => {
    const send = (status, body, extra = {}) => {
      res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...extra });
      res.end(status === 204 ? undefined : JSON.stringify(body));
    };
    try {
      const { pathname, searchParams: query } = new URL(req.url, 'http://localhost');
      if (req.method === 'GET' && pathname === '/health') return send(200, { status: 'ok', api: 'PeraDev Task API', version: '1.0.0' });
      if (req.method === 'GET' && ['/','/docs','/openapi.json'].includes(pathname)) {
        res.writeHead(200, { 'Content-Type': pathname === '/openapi.json' ? 'application/json; charset=utf-8' : 'text/html; charset=utf-8', 'X-Content-Type-Options': 'nosniff' });
        return res.end(pathname === '/openapi.json' ? spec : docs);
      }
      if (pathname === '/tasks') {
        if (req.method === 'GET') {
          if ([...query.keys()].some(key => !['done','q','priority','limit','offset'].includes(key))) fail(400, 'Filtro desconhecido.');
          for (const key of query.keys()) if (query.getAll(key).length > 1) fail(400, `Não repita o filtro ${key}.`);
          const done = query.get('done');
          if (done !== null && !['true', 'false'].includes(done)) fail(400, 'done deve ser true ou false.');
          const priority = query.get('priority');
          if (priority !== null && !priorities.includes(priority)) fail(400, 'priority inválida.');
          const term = (query.get('q') || '').trim().toLocaleLowerCase('pt-BR');
          if (term.length > 100) fail(400, 'q deve ter até 100 caracteres.');
          const limit = integer(query.get('limit'), 20, 1, 100, 'limit');
          const offset = integer(query.get('offset'), 0, 0, MAX_TASKS, 'offset');
          const found = store.list().filter(task => (done === null || task.done === (done === 'true')) &&
            (priority === null || task.priority === priority) && `${task.title} ${task.description}`.toLocaleLowerCase('pt-BR').includes(term));
          return send(200, { data: found.slice(offset, offset + limit), total: found.length, limit, offset });
        }
        if (req.method === 'POST') {
          const task = store.create(validate(await readJson(req)));
          return send(201, task, { Location: `/tasks/${task.id}` });
        }
        return send(405, { error: 'Método não permitido.' }, { Allow: 'GET, POST' });
      }
      const match = /^\/tasks\/([0-9a-f-]{36})$/.exec(pathname);
      if (match) {
        const id = match[1];
        if (req.method === 'GET') return send(200, store.find(id));
        if (req.method === 'PATCH') return send(200, store.update(id, validate(await readJson(req), true)));
        if (req.method === 'DELETE') { store.remove(id); return send(204); }
        return send(405, { error: 'Método não permitido.' }, { Allow: 'GET, PATCH, DELETE' });
      }
      return send(404, { error: 'Rota não encontrada.' });
    } catch (error) {
      if (!error.status) console.error('Falha interna:', error.code || error.name);
      if (!res.headersSent && !res.destroyed) send(error.status || 500, { error: error.status ? error.message : 'Falha interna ao processar a solicitação.' });
    }
  });
  server.requestTimeout = 10_000;
  server.headersTimeout = 10_000;
  server.maxHeadersCount = 50;
  return server;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 3000);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT inválida.');
  const host = process.env.HOST || '127.0.0.1';
  const server = createTaskServer({ dataFile: process.env.DATA_FILE || resolve('data/tasks.json') });
  server.listen(port, host, () => console.log(`PeraDev Task API: http://${host}:${port}/docs`));
  for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => server.close());
}
