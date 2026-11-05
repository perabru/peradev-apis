# Dia 03 · Board Lane API — cada cartão em seu lugar

**05/11/2026 · implementada, testada e publicada no repositório independente**

Organize tarefas de aula ou projeto em quadros Kanban locais. Crie colunas e cartões, edite título/descrição, mova um cartão entre etapas do mesmo quadro ou reorganize a coluna. A ordem é contígua e os vínculos são validados; colunas ocupadas e quadros com colunas não podem ser excluídos.

Node.js 22+, sem dependências externas, com persistência JSON. A referência de estudo foi a [Trello REST API](https://developer.atlassian.com/cloud/trello/rest/), especialmente [Cards](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/) e [Lists](https://developer.atlassian.com/cloud/trello/rest/api-group-lists/), consultadas em 05/11/2026. Implementação própria, sem afiliação, acesso a conta Trello ou endpoint hospedado.

**12 testes HTTP aprovados, 0 falhas**, executados em Node.js 24.22.1. Cobrem entradas inválidas, movimentos, concorrência, falha de gravação e reinício real do processo.

- [Repositório](https://github.com/perabru/api-lab-2026-11-05) · [README e rotas](https://github.com/perabru/api-lab-2026-11-05/blob/main/README.md)
- [Commit da implementação](https://github.com/perabru/api-lab-2026-11-05/commit/423a0c387c133c7454b5dbacd65869e106876cb5) · [Resultados e limites dos testes](https://github.com/perabru/api-lab-2026-11-05/blob/main/VERIFICATION.md)
- [Anúncio no repositório do dia](https://github.com/perabru/api-lab-2026-11-05/blob/main/ANNOUNCEMENT.md)
- [Post bilíngue e registro](https://github.com/perabru/api-lab-2026-11-05/blob/main/LINKEDIN.md) · [Publicação verificada no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7524049095754428417/)
- [Contribuir](https://github.com/perabru/api-lab-2026-11-05/blob/main/CONTRIBUTING.md) · [Reportar bug reproduzível](https://github.com/perabru/api-lab-2026-11-05/issues/new?template=bug_report.yml)

```bash
git clone https://github.com/perabru/api-lab-2026-11-05.git
cd api-lab-2026-11-05
node examples/kanban-demo.mjs
npm test
npm start
```

A demo isolada verifica ordem e vínculos, sem tocar nos dados habituais. O formulário de bug solicita a ordem anterior e a posição desejada. Essas são as melhorias de contribuição deste dia, junto ao README retrô e seu banner SVG acessível.

![Apoio voluntário por Pix](https://raw.githubusercontent.com/perabru/peradev-apis/main/brand/pix-support.svg)

```text
bruno.pera@unifesp.br
```

O apoio é voluntário, incentiva a continuidade e mantém o código aberto e gratuito para todos.

**English:** Board Lane API is a local Kanban API with boards, columns, editable cards, same-board moves and JSON persistence. Twelve HTTP tests passed, including concurrent moves, write failures and process restart. Explore the isolated demo and contribute a reproducible edge case.

[Calendário das dez entregas](../docs/10-days.md) · [Catálogo](../README.md#catálogo)
