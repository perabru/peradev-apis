# 10 APIs em 10 dias

**03 a 12 de novembro de 2026 · início de cada execução às 07h · America/Sao_Paulo.**

Cada data tem seu próprio repositório público. Os dez repositórios foram preparados antecipadamente com README e apoio voluntário por Pix. Isso permite que a rotina agendada publique os arquivos pela conexão GitHub, sem depender da criação de um repositório pelo navegador a cada manhã.

> **Dia 01 publicado e testado em 03/11/2026:** Project Shelf API, 11 testes aprovados. As nove APIs seguintes ainda serão implementadas nas respectivas datas; seus repositórios estão preparados.

## Calendário e referências

| Dia | Data | Repositório e tema planejado | Referência | Estado atual |
|---|---|---|---|---|
| 01 | 03/11/2026 | [Catálogo de projetos com busca e paginação](https://github.com/perabru/api-lab-2026-11-03) | GitHub REST API | Publicado; 11 testes aprovados |
| 02 | 04/11/2026 | [Pedidos com idempotência e valores em centavos](https://github.com/perabru/api-lab-2026-11-04) | Stripe API | Preparado; API agendada |
| 03 | 05/11/2026 | [Quadros Kanban com colunas e cartões](https://github.com/perabru/api-lab-2026-11-05) | Trello REST API | Preparado; API agendada |
| 04 | 06/11/2026 | [Publicações e comentários com persistência real](https://github.com/perabru/api-lab-2026-11-06) | JSONPlaceholder | Preparado; API agendada |
| 05 | 07/11/2026 | [Catálogo de criaturas fictícias com tipos e habilidades](https://github.com/perabru/api-lab-2026-11-07) | PokéAPI | Preparado; API agendada |
| 06 | 08/11/2026 | [Consulta de CEP com validação e cache](https://github.com/perabru/api-lab-2026-11-08) | ViaCEP | Preparado; API agendada |
| 07 | 09/11/2026 | [Clima normalizado com cache e unidades explícitas](https://github.com/perabru/api-lab-2026-11-09) | Open-Meteo | Preparado; API agendada |
| 08 | 10/11/2026 | [Notas organizadas em blocos](https://github.com/perabru/api-lab-2026-11-10) | Notion API | Preparado; API agendada |
| 09 | 11/11/2026 | [Diário de observações astronômicas](https://github.com/perabru/api-lab-2026-11-11) | NASA Open APIs / APOD | Preparado; API agendada |
| 10 | 12/11/2026 | [Biblioteca com catálogo e empréstimos](https://github.com/perabru/api-lab-2026-11-12) | Open Library APIs | Preparado; API agendada |

Os temas são um plano de implementação. Se uma integração exigir credenciais indisponíveis, tiver limites incompatíveis ou mudar de versão, a implementação pode ser ajustada mantendo um caso de uso útil, a referência e a transparência sobre os limites.

## Evidência da entrega de 03/11/2026

- [Project Shelf API — código e README](https://github.com/perabru/api-lab-2026-11-03)
- [Commit publicado](https://github.com/perabru/api-lab-2026-11-03/commit/e06e6380bc826e623a0d3140fd0df0a78a0acf32)
- [11 testes aprovados e limites da verificação](https://github.com/perabru/api-lab-2026-11-03/blob/main/VERIFICATION.md)
- [Anúncio](https://github.com/perabru/api-lab-2026-11-03/blob/main/ANNOUNCEMENT.md) · [Post publicado com aprovação em 03/11/2026](https://www.linkedin.com/feed/update/urn:li:activity:7523340655767719936/)
- Melhoria de contribuição: demonstração isolada que não altera os dados do usuário, guia de contribuição e formulário de bug reproduzível.
- Referência GitHub revisitada em 03/11/2026. Sem integração com conta GitHub ou serviço hospedado.

## Documentação oficial consultada

- **Dia 01 — GitHub REST API:** https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api
  Recursos REST, paginação e cabeçalhos Link; dados próprios, sem fingir consultar a conta GitHub.

- **Dia 02 — Stripe API:** https://docs.stripe.com/api/idempotent_requests
  Repetição segura de operações; não realizar pagamentos reais nem exigir credenciais Stripe.

- **Dia 03 — Trello REST API:** https://developer.atlassian.com/cloud/trello/rest/
  Relacionamentos, movimentação de cartões e validação de referências entre recursos.

- **Dia 04 — JSONPlaceholder:** https://jsonplaceholder.typicode.com/
  Recursos aninhados e filtros; diferenciar a referência de dados fictícios da persistência efetiva da implementação própria.

- **Dia 05 — PokéAPI:** https://pokeapi.co/docs/v2
  Filtros, paginação e recursos relacionados; usar dados originais e identificar claramente o conjunto de demonstração.

- **Dia 06 — ViaCEP:** https://viacep.com.br/
  Integração pública somente quando viável; timeout, cache e testes determinísticos, sem apresentar dados de demonstração como endereço real.

- **Dia 07 — Open-Meteo:** https://open-meteo.com/en/docs
  Contrato consistente, coordenadas válidas, datas e unidades; integração real ou alternativa local documentada, sem inventar previsão atual.

- **Dia 08 — Notion API:** https://developers.notion.com/reference/intro
  Objetos estruturados, busca e paginação por cursor, sem acessar uma conta Notion.

- **Dia 09 — NASA Open APIs / APOD:** https://api.nasa.gov/
  Catálogo por data e metadados de observação; dados próprios ou fontes atribuídas, sem afirmar que registros fictícios são observações NASA. Verifique a documentação atual do APOD; o portal oficial informa migração em 2026.

- **Dia 10 — Open Library APIs:** https://openlibrary.org/developers/api
  Livros, autores e busca; operações locais de empréstimo sem depender de extração em massa da Open Library.

As referências foram escolhidas como APIs conhecidas e exemplos de desenho de contratos. Não se trata de um ranking estatístico de popularidade, nem de projetos oficiais ou afiliados a esses provedores. As versões e as condições de uso deverão ser verificadas novamente no dia da implementação. O APOD da NASA, em particular, teve migração anunciada em 2026; não iniciar integração nova com um endpoint legado sem conferir o portal atual.

## Entrega diária

1. Uma API independente, com escopo e dados claramente definidos.
2. Validação, respostas de erro, limites e persistência quando necessária.
3. Testes executados e exemplos reproduzíveis.
4. README em português com execução, rotas, respostas, limitações, referência oficial e resumo curto em inglês.
5. Seção de colaboração destacada, com o Pix autorizado e apoio opcional.
6. Arquivo `LINKEDIN.md` com um texto profissional para revisão. Gerar esse texto não significa publicá-lo automaticamente no LinkedIn.
7. Atualização do [manifesto da sequência](../challenge-10-days.json) e do catálogo.

## Apoio ao projeto

![Apoio voluntário por Pix](../brand/pix-support.svg)

```text
bruno.pera@unifesp.br
```

A contribuição é voluntária. Código e documentação permanecem abertos e gratuitos.

## Publicação anterior no LinkedIn

O post da API de tarefas foi aprovado pelo usuário, publicado no perfil Bruno Pera e verificado em 02/11/2026:

[Ver a publicação](https://www.linkedin.com/feed/update/urn:li:ugcPost:7523032339095146496/)
