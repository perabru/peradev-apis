![PeraDev APIs — código aberto, ideias em prática](brand/github-banner.svg)

# PeraDev APIs

**Dez APIs em dez dias. Código aberto para aprender construindo.**

Projetos de Bruno Michel Pera com documentação em português, exemplos executáveis e testes de comportamento. Escolha uma API, rode no seu computador e use como ponto de partida para o seu próximo projeto.

[Explorar as APIs](#catálogo) · [Ver os lançamentos](announcements/README.md) · [Sugerir uma API](https://github.com/perabru/peradev-apis/issues/new) · [Contribuir](CONTRIBUTING.md) · [Apoiar por Pix](#apoie-o-peradev)

## Desafio de 10 dias

**De 03 a 12/11/2026, com início diário às 07h (Brasília).** Cada dia tem um repositório independente, uma referência de API conhecida, implementação própria, testes, README e um texto para LinkedIn.

Os dias 01, 02 e 03 estão publicados e verificados: **Project Shelf API (11 testes), Order Once API (12 testes) e Board Lane API (12 testes)**. Os sete repositórios seguintes estão preparados; suas APIs ainda serão desenvolvidas e verificadas nas datas previstas.

[Ver calendário, referências e repositórios →](docs/10-days.md)

## Em destaque

### Dia 03 · Board Lane API — cada cartão em seu lugar

Kanban local com quadros, colunas, cartões editáveis e movimentação dentro do mesmo quadro, mantendo a ordem e os vínculos. Persistência JSON e bloqueio de exclusões de pais ocupados. Referência de estudo: [Trello REST API](https://developer.atlassian.com/cloud/trello/rest/), consultada em 05/11/2026; implementação própria, sem integração externa.

**05/11/2026 · Node.js 22+ · zero dependências externas · publicado · 12 testes HTTP aprovados**

[Repositório →](https://github.com/perabru/api-lab-2026-11-05) · [README →](https://github.com/perabru/api-lab-2026-11-05/blob/main/README.md) · [Anúncio →](announcements/004-board-lane.md) · [Evidências →](https://github.com/perabru/api-lab-2026-11-05/blob/main/VERIFICATION.md) · [Post bilíngue publicado no LinkedIn →](https://www.linkedin.com/feed/update/urn:li:activity:7524049095754428417/)

### Dia 02 · Order Once API — repita sem duplicar

Pedidos locais com centavos inteiros, chaves de idempotência persistentes, replay e detecção de conflito. Referência de estudo: documentação de idempotência do Stripe; sem processamento de pagamentos.

**04/11/2026 · Node.js 22+ · zero dependências externas · 12 testes HTTP aprovados**

[Repositório →](https://github.com/perabru/api-lab-2026-11-04) · [README →](https://github.com/perabru/api-lab-2026-11-04/blob/main/README.md) · [Anúncio →](announcements/003-order-once.md) · [Evidências →](https://github.com/perabru/api-lab-2026-11-04/blob/main/VERIFICATION.md) · [Post bilíngue publicado no LinkedIn →](https://www.linkedin.com/feed/update/urn:li:activity:7523692656141496320/)

### Dia 01 · Project Shelf API — encontre seus projetos

Catálogo local com CRUD, busca, etiquetas, ordenação, paginação por cabeçalhos Link e persistência. Inspirado na documentação de paginação da GitHub REST API, com dados próprios e sem token.

**03/11/2026 · Node.js 22+ · zero dependências externas · 11 testes HTTP aprovados**

[Repositório →](https://github.com/perabru/api-lab-2026-11-03) · [README →](https://github.com/perabru/api-lab-2026-11-03/blob/main/README.md) · [Anúncio →](announcements/002-project-shelf.md) · [Evidências →](https://github.com/perabru/api-lab-2026-11-03/blob/main/VERIFICATION.md) · [Post aprovado no LinkedIn →](https://www.linkedin.com/feed/update/urn:li:activity:7523340655767719936/)

### 001 · Task API — organize tarefas sem instalar dependências

Crie, consulte, atualize e exclua tarefas. Combine busca, prioridade e status de conclusão, com paginação e persistência após reiniciar.

**Node.js 22+ · zero dependências externas · contrato OpenAPI · 7 testes aprovados na versão inicial**

[Conheça o lançamento →](announcements/001-task-api.md) · [Abra o código →](apis/001-task-api) · [Veja a documentação →](apis/001-task-api/README.md)

## Teste a API de tarefas em poucos passos

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
| D03 | [Board Lane API](https://github.com/perabru/api-lab-2026-11-05) | Kanban com movimentos, ordem e vínculos persistentes | Node.js | [Conhecer](announcements/004-board-lane.md) |
| D02 | [Order Once API](https://github.com/perabru/api-lab-2026-11-04) | Pedidos, centavos e idempotência persistente | Node.js | [Conhecer](announcements/003-order-once.md) |
| D01 | [Project Shelf API](https://github.com/perabru/api-lab-2026-11-03) | Catálogo de projetos com busca, filtros e paginação | Node.js | [Conhecer](announcements/002-project-shelf.md) |
| 001 | [Task API](apis/001-task-api) | Tarefas com CRUD, filtros, paginação e persistência | Node.js | [Conhecer](announcements/001-task-api.md) |

## Acompanhe a série

- **Dê uma estrela** para encontrar o projeto com facilidade.
- **Use Watch → Custom → Releases** se quiser acompanhar releases que forem publicados.
- **[Abra uma issue](https://github.com/perabru/peradev-apis/issues/new)** para sugerir a próxima API ou relatar um problema.
- **Faça um fork e contribua:** melhorias de código, testes e documentação são bem-vindas.

A divulgação de cada API aparece aqui e em [Lançamentos](announcements/README.md). O [histórico de mudanças](CHANGELOG.md) e o [registro da série](series.json) mostram o que já foi entregue. O código e os anúncios ficam no GitHub. Desde a autorização de 04/11/2026, cada nova entrega verificada também recebe um post no LinkedIn em português e inglês, até o fim deste desafio em 12/11/2026.

## Apoie o PeraDev

![Apoio voluntário por Pix](brand/pix-support.svg)

Se este projeto foi útil para você e quiser incentivar a criação de novas APIs, considere uma colaboração voluntária por Pix.

**Chave Pix:** `bruno.pera@unifesp.br`

Seu apoio incentiva a continuidade e a manutenção do projeto. A contribuição é opcional; o código permanece aberto e gratuito para todos.

## Como os projetos são preparados

Cada API resolve um problema específico, tem instruções de execução e inclui verificações de comportamento real. Segredos e dados de execução ficam fora do repositório. Consulte o [roteiro editorial](docs/editorial.md) e o [procedimento da série](docs/continuity.md).

Execute `npm test` na raiz para verificar a API de tarefas presente no hub. Para Project Shelf, Order Once e Board Lane, clone o respectivo repositório independente e execute `npm test` nele. Veja também o [plano para a comunidade](docs/community.md) e o [acompanhamento de melhorias](docs/community-progress.md).

**Licença MIT · Bruno Michel Pera**
