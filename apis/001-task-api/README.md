# 001 · Task API

Organize tarefas de um aplicativo, painel ou projeto de estudos com uma API REST em Node.js, sem dependências externas.

## Executar

Requer Node.js 22 ou superior.

```bash
git clone https://github.com/perabru/peradev-apis.git
cd peradev-apis/apis/001-task-api
npm start
```

Abra http://127.0.0.1:3000/docs. O contrato OpenAPI está em `/openapi.json`.
Não é preciso executar `npm install`.

## Criar uma tarefa

```bash
curl -i http://127.0.0.1:3000/tasks \
  -H 'Content-Type: application/json' \
  -d '{"title":"Estudar APIs REST","priority":"high"}'
```

O retorno `201 Created` inclui um UUID em `id` e o endereço da tarefa no cabeçalho `Location`.

## Rotas

| Método | Rota | Resultado |
|---|---|---|
| GET | `/health` | Estado da aplicação |
| POST | `/tasks` | Cria uma tarefa |
| GET | `/tasks` | Lista, filtra e pagina |
| GET | `/tasks/{id}` | Consulta uma tarefa |
| PATCH | `/tasks/{id}` | Atualiza campos enviados |
| DELETE | `/tasks/{id}` | Exclui e retorna 204 |

Campos aceitos: `title` (obrigatório ao criar, 1–120 caracteres), `description` (até 1000 caracteres), `priority` (`low`, `medium`, `high`; padrão `medium`) e `done` (booleano; padrão `false`). Campos extras são rejeitados.

```bash
curl 'http://127.0.0.1:3000/tasks?done=false&priority=high&limit=10&offset=0&q=estudar'
```

`q` busca no título e descrição, sem diferenciar maiúsculas. `limit`: 1–100; padrão 20. `offset`: 0–5000. A lista retorna `{data,total,limit,offset}` e mostra as tarefas mais recentemente criadas primeiro.

Para atualizar, substitua `ID_DA_TAREFA` pelo UUID retornado:

```bash
curl -X PATCH http://127.0.0.1:3000/tasks/ID_DA_TAREFA \
  -H 'Content-Type: application/json' -d '{"done":true}'
curl -X DELETE http://127.0.0.1:3000/tasks/ID_DA_TAREFA
```

Erros retornam `{"error":"mensagem"}`: 400 para entrada inválida, 404 para recurso inexistente, 405 para método incorreto, 409 para limite de tarefas, 413 para corpo acima de 16 KiB e 415 para mídia incorreta.

## Persistência e configuração

As tarefas são gravadas em `data/tasks.json` antes da resposta. O arquivo temporário é renomeado para evitar JSON parcialmente gravado. Arquivo existente inválido interrompe a inicialização e não é substituído.

| Variável | Padrão | Uso |
|---|---|---|
| `PORT` | `3000` | Porta HTTP |
| `HOST` | `127.0.0.1` | Interface de rede |
| `DATA_FILE` | `data/tasks.json` | Arquivo, relativo ao diretório de execução |

Aplicação de referência para uso local, em **um único processo**, com limite de 5000 tarefas. O arquivo JSON não oferece coordenação entre processos nem garante durabilidade contra queda de energia. Para disponibilizar dados reais na internet, adicione autenticação, HTTPS e banco de dados adequado. Nenhum endpoint foi hospedado publicamente nesta entrega.

## Testar

```bash
npm test
```

Os testes HTTP verificam CRUD, persistência após reinício, validação, limites, filtros, concorrência e proteção contra arquivo corrompido.

Código aberto · PeraDev · Bruno Michel Pera.
