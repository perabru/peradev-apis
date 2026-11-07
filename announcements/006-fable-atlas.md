# Dia 05 · Fable Atlas API — explore relações

**07/11/2026 · implementada, testada e publicada**

Catálogo local de oito criaturas fictícias originais, quatro tipos e quatro habilidades. Filtros combinados, busca sem acentos/maiúsculas, detalhes relacionados, relações reversas e links de paginação que preservam filtros.

**Node.js 22+ · sem dependências externas · 10 testes aprovados**

Referência de estudo: [PokéAPI v2](https://pokeapi.co/docs/v2), consultada em 07/11/2026. Dados de demonstração próprios, sem importação de imagens/dados do provedor, afiliação ou integração externa. API somente leitura, executada localmente; sem endpoint hospedado.

[Repositório](https://github.com/perabru/api-lab-2026-11-07) · [README](https://github.com/perabru/api-lab-2026-11-07/blob/main/README.md) · [Anúncio completo](https://github.com/perabru/api-lab-2026-11-07/blob/main/ANNOUNCEMENT.md) · [Commit](https://github.com/perabru/api-lab-2026-11-07/commit/33c084535ab09453f553a8a5e672d8e7c6aac018) · [Evidências](https://github.com/perabru/api-lab-2026-11-07/blob/main/VERIFICATION.md) · [LINKEDIN.md](https://github.com/perabru/api-lab-2026-11-07/blob/main/LINKEDIN.md) · [Post publicado](https://www.linkedin.com/feed/update/urn:li:activity:7524774666121453568/)

```bash
git clone https://github.com/perabru/api-lab-2026-11-07.git
cd api-lab-2026-11-07
npm run check:data
npm run demo
npm test
npm start
```

A demo verifica filtros, páginas e referências em servidor temporário. A melhoria concreta é o validador de dados, que bloqueia IDs duplicados e referências quebradas antes de iniciar a API. [Contribua com uma criatura original](https://github.com/perabru/api-lab-2026-11-07/blob/main/CONTRIBUTING.md) ou [relate um filtro/página](https://github.com/perabru/api-lab-2026-11-07/issues/new?template=bug_report.yml).

![Apoio voluntário por Pix](https://raw.githubusercontent.com/perabru/peradev-apis/main/brand/pix-support.svg)

```text
bruno.pera@unifesp.br
```

A contribuição incentiva a continuidade, é voluntária e não muda o acesso aberto e gratuito ao código, sem promessa de contrapartidas.

**English:** A local read-only catalog of original fictional creatures, related types and abilities, combined filters and pagination. Ten tests passed, including real HTTP and process restart. Explore the data validator and demo, then contribute an original creature or edge case.

[Calendário](../docs/10-days.md) · [Catálogo](../README.md#catálogo)
