# 10 APIs em 10 dias

**03 a 12 de novembro de 2026 · início de cada execução às 07h · America/Sao_Paulo.**

Cada data tem seu próprio repositório público. Os dez repositórios foram preparados antecipadamente com README e apoio voluntário por Pix. Isso permite que a rotina agendada publique os arquivos pela conexão GitHub, sem depender da criação de um repositório pelo navegador a cada manhã.

> **Sete dias publicados com testes locais:** Project Shelf (11), Order Once (12), Board Lane (12), Thread Notes (12), Fable Atlas (10), CEP Guard (12) e Forecast Lens (14). Na CEP Guard, a consulta real ao ViaCEP não foi confirmada por timeout; os testes usam provedor sintético. A Forecast Lens é a alternativa local documentada, sem consulta meteorológica real. As três APIs seguintes aguardam suas datas.

## Calendário e referências

| Dia | Data | Repositório e tema planejado | Referência | Estado atual |
|---|---|---|---|---|
| 01 | 03/11/2026 | [Catálogo de projetos com busca e paginação](https://github.com/perabru/api-lab-2026-11-03) | GitHub REST API | Publicado; 11 testes aprovados |
| 02 | 04/11/2026 | [Pedidos com idempotência e valores em centavos](https://github.com/perabru/api-lab-2026-11-04) | Stripe API | Publicado; 12 testes aprovados |
| 03 | 05/11/2026 | [Quadros Kanban com colunas e cartões](https://github.com/perabru/api-lab-2026-11-05) | Trello REST API | Publicado; 12 testes aprovados |
| 04 | 06/11/2026 | [Publicações e comentários com persistência real](https://github.com/perabru/api-lab-2026-11-06) | JSONPlaceholder | Publicado; 12 testes aprovados |
| 05 | 07/11/2026 | [Catálogo de criaturas fictícias com tipos e habilidades](https://github.com/perabru/api-lab-2026-11-07) | PokéAPI | Publicado; 10 testes aprovados |
| 06 | 08/11/2026 | [Consulta de CEP com validação e cache](https://github.com/perabru/api-lab-2026-11-08) | ViaCEP | Publicado; 12 testes locais; consulta real não confirmada |
| 07 | 09/11/2026 | [Clima normalizado com cache e unidades explícitas](https://github.com/perabru/api-lab-2026-11-09) | Open-Meteo | Publicado; 14 testes; normalização local sem consulta ao vivo |
| 08 | 10/11/2026 | [Notas organizadas em blocos](https://github.com/perabru/api-lab-2026-11-10) | Notion API | Preparado; API agendada |
| 09 | 11/11/2026 | [Diário de observações astronômicas](https://github.com/perabru/api-lab-2026-11-11) | NASA Open APIs / APOD | Preparado; API agendada |
| 10 | 12/11/2026 | [Biblioteca com catálogo e empréstimos](https://github.com/perabru/api-lab-2026-11-12) | Open Library APIs | Preparado; API agendada |

Os temas são um plano de implementação. Se uma integração exigir credenciais indisponíveis, tiver limites incompatíveis ou mudar de versão, a implementação pode ser ajustada mantendo um caso de uso útil, a referência e a transparência sobre os limites.

## Evidência da entrega de 09/11/2026

- [Forecast Lens API — código e README](https://github.com/perabru/api-lab-2026-11-09) · [Commit da implementação](https://github.com/perabru/api-lab-2026-11-09/commit/a05f1e8609cef334911f7edd9dea4b34a984a6eb)
- [14 testes aprovados e quatro chamadas curl verificadas](https://github.com/perabru/api-lab-2026-11-09/blob/main/VERIFICATION.md)
- [Anúncio](https://github.com/perabru/api-lab-2026-11-09/blob/main/ANNOUNCEMENT.md) · [Post bilíngue publicado no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7525500246274109440/) · [Texto e registro](https://github.com/perabru/api-lab-2026-11-09/blob/main/LINKEDIN.md)
- Normalização de unidades, datas e coordenadas válidas, séries alinhadas, origem declarada e cache em memória de 32 resultados/10 min.
- **Alternativa local documentada:** recebe JSON do cliente; não consulta nem confirma clima real. Exemplos sintéticos identificados e importação não autenticada.
- Melhoria: formulário de bug com unidade e corpo mínimo, guia para acrescentar um teste de conversão e demo curl com asserções.
- Documentação primária [Open-Meteo](https://open-meteo.com/en/docs) consultada em 09/11/2026. Sem credenciais, pacotes externos ou hospedagem.
- [Acompanhamento semanal da comunidade](community-progress.md): métricas públicas do GitHub consultadas em 09/11/2026, sem atribuir causalidade.

## Evidência da entrega de 08/11/2026

- [CEP Guard API — código e README](https://github.com/perabru/api-lab-2026-11-08) · [Commit da implementação](https://github.com/perabru/api-lab-2026-11-08/commit/b2ffcf0660c9659452e72432828967e7263a17c4)
- [12 testes determinísticos aprovados; comandos e limites](https://github.com/perabru/api-lab-2026-11-08/blob/main/VERIFICATION.md)
- [Anúncio](https://github.com/perabru/api-lab-2026-11-08/blob/main/ANNOUNCEMENT.md) · [Post bilíngue publicado no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7525137869502525440/)
- Validação, cache de 5 min/1 min, capacidade de 100 entradas, compartilhamento e timeout de 3 s incluindo corpo.
- **Integração real não confirmada:** uma consulta direta ao ViaCEP excedeu 3000 ms. Nenhum endereço real inventado; fixtures sintéticas identificadas.
- Melhoria: demo sem rede, asserções e guia para reproduzir falhas/cache, sem validação massiva.
- Documentação oficial ViaCEP consultada em 08/11/2026. Código de integração real entregue para execução local, sujeito à rede/provedor; sem hospedagem.

## Evidência da entrega de 07/11/2026

- [Fable Atlas API — código e README](https://github.com/perabru/api-lab-2026-11-07) · [Commit da implementação](https://github.com/perabru/api-lab-2026-11-07/commit/33c084535ab09453f553a8a5e672d8e7c6aac018)
- [10 testes aprovados; comandos e limites](https://github.com/perabru/api-lab-2026-11-07/blob/main/VERIFICATION.md)
- [Anúncio](https://github.com/perabru/api-lab-2026-11-07/blob/main/ANNOUNCEMENT.md) · [Post bilíngue publicado no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7524774666121453568/)
- Melhoria: validador de dados para IDs/referências, demo HTTP e formulário com URL, filtros e página.
- PokéAPI v2 consultada em 07/11/2026: recursos relacionados e paginação. Oito criaturas fictícias originais, sem importar dados do provedor ou integrar serviço externo. API somente leitura para execução local.

## Evidência da entrega de 06/11/2026

- [Thread Notes API — código e README](https://github.com/perabru/api-lab-2026-11-06) · [Commit da implementação](https://github.com/perabru/api-lab-2026-11-06/commit/0fb95b2fe56b61218d08498d151689398694b5bd)
- [12 testes HTTP aprovados; comandos e limites](https://github.com/perabru/api-lab-2026-11-06/blob/main/VERIFICATION.md)
- [Anúncio](https://github.com/perabru/api-lab-2026-11-06/blob/main/ANNOUNCEMENT.md) · [Post bilíngue publicado no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7524412593826951168/)
- Melhoria: demo HTTP isolada e formulário que solicita rota, filtros e estado inicial.
- JSONPlaceholder consultado em 06/11/2026: recursos aninhados, filtros e alterações simuladas na referência. A implementação própria persiste dados locais em SQLite, sem consultar o serviço ou hospedar endpoint.

## Evidência da entrega de 05/11/2026

- [Board Lane API — código e README](https://github.com/perabru/api-lab-2026-11-05)
- [Commit da API publicada](https://github.com/perabru/api-lab-2026-11-05/commit/423a0c387c133c7454b5dbacd65869e106876cb5)
- [12 testes aprovados e alcance da verificação](https://github.com/perabru/api-lab-2026-11-05/blob/main/VERIFICATION.md)
- [Anúncio](https://github.com/perabru/api-lab-2026-11-05/blob/main/ANNOUNCEMENT.md) · [Post bilíngue publicado no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7524049095754428417/)
- Melhoria de contribuição: demo isolada com asserções de ordem/vínculos e formulário de bug com estado anterior e posição desejada.
- Referência oficial Trello revisitada em 05/11/2026: Cards e Lists. Contrato próprio, dados locais, sem conta Trello e sem endpoint hospedado.

## Evidência da entrega de 04/11/2026

- [Order Once API — código e README](https://github.com/perabru/api-lab-2026-11-04)
- [Commit publicado](https://github.com/perabru/api-lab-2026-11-04/commit/f63b69a1f3ac60e5685be0e7629006a8a78ec254)
- [12 testes aprovados e alcance da verificação](https://github.com/perabru/api-lab-2026-11-04/blob/main/VERIFICATION.md)
- [Anúncio](https://github.com/perabru/api-lab-2026-11-04/blob/main/ANNOUNCEMENT.md) · [Post bilíngue publicado no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7523692656141496320/)
- Melhoria de contribuição: demo isolada que verifica replay e conflito; formulário de bug inclui troca de chave e reinício.
- Referência Stripe revisitada em 04/11/2026: idempotência e diferenças entre v1 e v2. Implementação local própria, sem pagamentos.

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
6. Arquivo `LINKEDIN.md` com o post em português e inglês; publicação diária no perfil Bruno Pera autorizada em 04/11/2026 para as entregas restantes até 12/11/2026. Verificar e registrar o permalink, evitando duplicatas.
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
