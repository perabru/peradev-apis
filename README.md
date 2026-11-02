![PeraDev APIs — código aberto, ideias em prática](brand/github-banner.svg)

# PeraDev APIs

**Uma API simples, útil e funcional por dia. Código aberto para aprender construindo.**

Projetos de Bruno Michel Pera com documentação em português, exemplos executáveis e testes de comportamento. Escolha uma API, rode no seu computador e use como ponto de partida para o seu próximo projeto.

[Explorar as APIs](#catálogo) · [Ver os lançamentos](announcements/README.md) · [Sugerir uma API](https://github.com/perabru/peradev-apis/issues/new) · [Contribuir](CONTRIBUTING.md) · [Apoiar por Pix](#apoie-o-peradev)

## Em destaque

### 001 · Task API — organize tarefas sem instalar dependências

Crie, consulte, atualize e exclua tarefas. Combine busca, prioridade e status de conclusão, com paginação e persistência após reiniciar.

**Node.js 22+ · zero dependências externas · contrato OpenAPI · 7 testes aprovados na versão inicial**

[Conheça o lançamento →](announcements/001-task-api.md) · [Abra o código →](apis/001-task-api) · [Veja a documentação →](apis/001-task-api/README.md)

## Teste em poucos passos

```bash
git clone https://github.com/perabru/peradev-apis.git
cd peradev-apis/apis/001-task-api
npm start
```

Abra http://127.0.0.1:3000/docs. Não é necessário executar `npm install` nesta API.

O código está publicado no GitHub; esta entrega é executada localmente e não inclui um endpoint público hospedado.

## Catálogo

| # | API | Para que serve | Tecnologia | Lançamento |
|---|---|---|---|---|
| 001 | [Task API](apis/001-task-api) | Tarefas com CRUD, filtros, paginação e persistência | Node.js | [Conhecer](announcements/001-task-api.md) |

## Acompanhe a série

- **Dê uma estrela** para encontrar o projeto com facilidade.
- **Use Watch → Custom → Releases** se quiser acompanhar releases que forem publicados.
- **[Abra uma issue](https://github.com/perabru/peradev-apis/issues/new)** para sugerir a próxima API ou relatar um problema.
- **Faça um fork e contribua:** melhorias de código, testes e documentação são bem-vindas.

A divulgação de cada API aparece aqui e em [Lançamentos](announcements/README.md). O [histórico de mudanças](CHANGELOG.md) e o [registro da série](series.json) mostram o que já foi entregue. A rotina de produção e divulgação acontece exclusivamente no GitHub.

## Apoie o PeraDev

Se este projeto foi útil para você e quiser incentivar a criação de novas APIs, considere uma colaboração voluntária por Pix.

**Chave Pix:** `bruno.pera@unifesp.br`

Seu apoio incentiva a continuidade e a manutenção do projeto. A contribuição é opcional; o código permanece aberto e gratuito para todos.

## Como os projetos são preparados

Cada API resolve um problema específico, tem instruções de execução e inclui verificações de comportamento real. Segredos e dados de execução ficam fora do repositório. Consulte o [roteiro editorial](docs/editorial.md) e o [procedimento da série](docs/continuity.md).

Execute `npm test` na raiz para verificar as APIs Node.js presentes. Veja também o [plano para a comunidade](docs/community.md) e o [acompanhamento de melhorias](docs/community-progress.md).

**Licença MIT · Bruno Michel Pera**
