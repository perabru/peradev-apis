![PeraDev APIs](../brand/github-banner.svg)

# API 001 · Sua aplicação precisa de tarefas? Comece por esta API.

**Um organizador de tarefas com Node.js, persistência e zero dependências externas.**

Uma lista de tarefas parece simples até você precisar validar entradas, buscar registros, paginar resultados e manter os dados depois de reiniciar. A primeira API do PeraDev reúne essas funções em um projeto pequeno, pronto para executar e estudar.

## O que você pode construir com ela

Use a API como base para um aplicativo de estudos, um quadro de atividades ou um painel pessoal. Ela oferece:

- Criação, consulta, atualização parcial e exclusão de tarefas.
- Busca no título e na descrição.
- Filtros combinados por prioridade e conclusão.
- Paginação com total de resultados.
- Persistência em arquivo JSON antes da resposta.
- Documentação local e contrato OpenAPI.

## Execute agora

Requer Node.js 22 ou superior.

```bash
git clone https://github.com/perabru/peradev-apis.git
cd peradev-apis/apis/001-task-api
npm start
```

Abra http://127.0.0.1:3000/docs. Nesta API, você não precisa instalar pacotes externos.

## Faça a primeira chamada

```bash
curl -i http://127.0.0.1:3000/tasks \
  -H 'Content-Type: application/json' \
  -d '{"title":"Testar a primeira API do PeraDev","priority":"high"}'
```

A resposta `201 Created` inclui um UUID, os dados e as datas da tarefa. Depois, liste as tarefas pendentes de alta prioridade:

```bash
curl 'http://127.0.0.1:3000/tasks?done=false&priority=high&limit=10'
```

O retorno contém `data`, `total`, `limit` e `offset`.

## Verificação da versão inicial

A suíte passou em **7 testes**, cobrindo CRUD, persistência após reinício, filtros, entradas inválidas, limite do corpo, requisições concorrentes e arquivo corrompido.

```bash
npm test
```

Esta é uma aplicação de referência para uso local, em um processo, com até 5000 tarefas. O código está publicado; a API não foi hospedada como serviço público. Veja os limites e a configuração no [README da API](../apis/001-task-api/README.md).

## Explore e participe

**[Abra o código completo →](../apis/001-task-api)**

Gostou da ideia? Dê uma estrela no repositório, teste a API e [sugira o próximo tema](https://github.com/perabru/peradev-apis/issues/new). Se encontrar algo para melhorar, envie uma issue com passos para reproduzir ou um pull request.

[Ver todas as APIs](../README.md#catálogo) · [Acompanhar os lançamentos](README.md) · [Como contribuir](../CONTRIBUTING.md)

Publicado em 2 de novembro de 2026 · PeraDev APIs · Bruno Michel Pera.
