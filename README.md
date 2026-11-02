# PeraDev

**Uma API simples, útil e funcional por vez.**

Projetos independentes, documentação em português, exemplos executáveis e testes. Uma série criada por Bruno Michel Pera para aprender construindo e compartilhar soluções que funcionam.

## Catálogo

| # | API | Funcionalidade | Tecnologia |
|---|---|---|---|
| 001 | [Task API](apis/001-task-api) | CRUD de tarefas, filtros, paginação e persistência | Node.js, zero dependências |

## Comece pela primeira API

```bash
git clone https://github.com/perabru/peradev-apis.git
cd peradev-apis/apis/001-task-api
npm start
```

Acesse http://127.0.0.1:3000/docs. Requer Node.js 22+. O código está publicado; a API é executada localmente, sem serviço público hospedado.

## Publicações

O [material do primeiro post](posts/001-task-api) inclui três imagens 1080 × 1350, textos alternativos e legenda. Confira o [registro da série](series.json) para distinguir código publicado de conteúdo ainda não enviado ao Instagram.

Nome de usuário informado por Bruno: **@peradevapis**. O [kit de perfil](brand) segue a identidade anos 70, com amarelo, azul e roxo neon. A configuração profissional e a publicação no Instagram ainda dependem de acesso autenticado.

## Padrão da série

- Cada API resolve um problema específico e inclui instruções para executar.
- Testes cobrem comportamento real e entradas inválidas.
- Segredos, tokens, dados pessoais e arquivos de execução ficam fora do Git.
- Consulte o [roteiro editorial](docs/editorial.md) e o [procedimento de continuidade](docs/continuity.md).
- Execute `npm test` na raiz para verificar as APIs Node.js presentes.

Licença MIT.
