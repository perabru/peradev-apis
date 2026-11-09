# Histórico de mudanças

## 2026-11-09

- Publicada a **Forecast Lens API**, dia 07/10, no [repositório independente](https://github.com/perabru/api-lab-2026-11-09); referência oficial Open-Meteo consultada nesta data.
- Alternativa local: valida e normaliza JSON fornecido pelo cliente para °C/mm/km/h, com origem declarada e cache de 32 entradas/10 min. Não busca nem verifica clima real.
- **14 testes passaram, zero falhas**, incluindo HTTP, entradas inválidas, TTL/capacidade e reinício real. Demo com **quatro chamadas curl verificadas**. [Evidências](https://github.com/perabru/api-lab-2026-11-09/blob/main/VERIFICATION.md) · [Commit](https://github.com/perabru/api-lab-2026-11-09/commit/a05f1e8609cef334911f7edd9dea4b34a984a6eb).
- README com banner SVG acessível, contrato, limites e Pix voluntário; guia e formulário de contribuição orientados a casos mínimos de unidade.
- [Post bilíngue publicado e confirmado no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7525500246274109440/) após deduplicação; URL/data salvas em LINKEDIN.md, manifesto e série.
- Catálogo, vitrine, calendário e índice atualizados. Dias 08 a 10 continuam preparados, sem implementação antecipada. Task API 001 preservada.
- Atualizado o [acompanhamento de segunda-feira](docs/community-progress.md) com métricas públicas datadas: hub 1 estrela, demais sete repositórios consultados 0; todos com 0 forks e 0 itens abertos. Sem atribuição de crescimento a ações da série.

## 2026-11-08

- Publicada a [CEP Guard API](https://github.com/perabru/api-lab-2026-11-08), dia 06: consulta de CEP, validação, cache positivo/negativo, compartilhamento e timeout de resposta completa.
- 12 testes determinísticos aprovados, 0 falhas, Node.js 24.22.1; demo executada. HTTP local real e provedor dublê, expiração, erros e reinício. [Evidência](https://github.com/perabru/api-lab-2026-11-08/blob/main/VERIFICATION.md).
- Uma consulta direta ao ViaCEP excedeu 3 s (TimeoutError); **live_integration_verified=false**. Código integrado ao endpoint oficial, mas consulta real não confirmada. Não simular endereço real.
- README retrô, banner SVG acessível, Pix voluntário, demo sem rede e guia de contribuição com cenários de falha.
- [Post bilíngue publicado e confirmado](https://www.linkedin.com/feed/update/urn:li:activity:7525137869502525440/). Após falha de prévia no primeiro envio, verificada ausência no perfil; publicação concluída sem prévia, com um único post confirmado.
- Manifesto, série, catálogo e calendário atualizados: seis entregas publicadas com testes locais; quatro aguardam suas datas. Preservada Task API 001.

## 2026-11-07

- Publicada a [Fable Atlas API](https://github.com/perabru/api-lab-2026-11-07), dia 05: catálogo de criaturas fictícias originais, tipos/habilidades, filtros AND, busca sem acentos/maiúsculas, relações reversas e paginação com filtros preservados.
- Executados 10 testes: todos aprovados, 0 falhas, Node.js 24.22.1. HTTP real, travessia, links relacionados, entradas inválidas, validação de dados e reinício real. check:data e demo também aprovados. [Verificação](https://github.com/perabru/api-lab-2026-11-07/blob/main/VERIFICATION.md).
- Referência oficial PokéAPI v2 consultada em 07/11/2026. Sem integração externa, importação de dados/imagens ou endpoint hospedado.
- README retrô com SVG acessível, Pix voluntário, guia e formulário; novo comando de validação ajuda contribuições a preservar vínculos.
- [Post bilíngue publicado e confirmado](https://www.linkedin.com/feed/update/urn:li:activity:7524774666121453568/), sem duplicata; permalink/data registrados nos controles e LINKEDIN.md.
- Catálogo atualizado: cinco dias publicados/testados; cinco preparados para suas datas. Task API 001 preservada.

## 2026-11-06

- Publicada a [Thread Notes API](https://github.com/perabru/api-lab-2026-11-06), dia 04: publicações e comentários, rotas aninhadas, filtros combinados, paginação, SQLite e exclusão protegida de pais ocupados.
- Executados 12 testes HTTP: todos aprovados, 0 falhas/erros, Python 3.12.14. Inclui concorrência, rollback e reinício real. Demo executada com asserções. [Verificação](https://github.com/perabru/api-lab-2026-11-06/blob/main/VERIFICATION.md).
- Referência oficial JSONPlaceholder consultada em 06/11/2026. Implementação própria com persistência local, sem integração externa ou endpoint hospedado.
- README retrô com banner SVG acessível e apoio voluntário por Pix, guia e formulário de contribuição; demo temporária que não altera dados habituais.
- [Post bilíngue publicado e confirmado no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7524412593826951168/), sem duplicata; URL/data registradas no repositório do dia e nos controles.
- Catálogo e destaque atualizados: quatro dias publicados/testados e seis preparados para suas datas.

## 2026-11-05

- Publicada a [Board Lane API](https://github.com/perabru/api-lab-2026-11-05), dia 03: quadros, colunas, cartões editáveis, movimentação com ordem contígua e validação de vínculos, com persistência JSON.
- Verificação local real: 12 testes HTTP aprovados, 0 falhas, Node.js 24.22.1. Inclui concorrência, falha de gravação e reinício de processo. [Evidência](https://github.com/perabru/api-lab-2026-11-05/blob/main/VERIFICATION.md).
- README retrô com banner SVG acessível e apoio voluntário por Pix; demo isolada e formulário para reproduzir problemas de movimentação.
- Referência de estudo: documentação oficial Trello REST API (Cards e Lists), consultada em 05/11/2026. Sem integração Trello ou endpoint hospedado.
- Publicado uma única vez e confirmado o [post bilíngue no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7524049095754428417/), após código confirmado no GitHub e conferência das atividades recentes. Permalink e data registrados em LINKEDIN.md, manifesto e series.json.
- Catálogo, destaque, calendário e anúncio atualizados: três entregas verificadas; sete dias continuam preparados, aguardando suas datas.

## 2026-11-04

- Publicado e verificado o [post bilíngue da Order Once API no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7523692656141496320/).
- Bruno autorizou publicação diária em português e inglês para as entregas restantes do desafio até 12/11/2026; atualizados procedimento, modelo e rotina, com prevenção de duplicatas.

- Publicada a [Order Once API](https://github.com/perabru/api-lab-2026-11-04), dia 02: pedidos, centavos inteiros, replay e conflito de idempotência, com persistência conjunta de chave e pedido.
- Verificação local: 12 testes HTTP aprovados, 0 falhas, Node.js 24.22.1. Inclui concorrência, falha de disco e reinício de processo real. [Evidência](https://github.com/perabru/api-lab-2026-11-04/blob/main/VERIFICATION.md).
- README retrô, apoio voluntário por Pix, guia de contribuição e demo isolada de retries com asserções.
- Anúncio publicado no GitHub e LINKEDIN.md preparado como rascunho, sem publicação automática.

## 2026-11-03

- Após autorização explícita, publicado e verificado o [post da Project Shelf API no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7523340655767719936/). A política dos próximos dias continua exigindo aprovação para publicar.

- Publicada a Project Shelf API (dia 01) em [repositório independente](https://github.com/perabru/api-lab-2026-11-03), preservando a Task API 001.
- CRUD, busca, etiquetas, ordenação e paginação Link com filtros preservados; persistência em JSON.
- Verificação local: 11 testes HTTP aprovados, 0 falhas, Node.js 24.22.1. [Relatório](https://github.com/perabru/api-lab-2026-11-03/blob/main/VERIFICATION.md).
- README retrô com apoio voluntário por Pix, demo isolada, guia de contribuição e formulário de bug.
- Anúncio no GitHub e LINKEDIN.md preparado para revisão; nenhum novo post foi publicado na rede social.

## 2026-11-02

- Configurado o desafio de dez execuções às 07h, de 03 a 12/11/2026.
- Preparados dez repositórios independentes, com referências oficiais e README de planejamento.
- Criado cartão visual para colaboração voluntária por Pix.
- Publicado e verificado o post aprovado da API de tarefas no LinkedIn; novos textos serão preparados como rascunhos.

- Publicada a API 001 Task API: CRUD, filtros, paginação, persistência e contrato OpenAPI.
- Versão inicial verificada com 7 testes aprovados.
- Criada a vitrine do projeto e o anúncio da primeira API dentro do GitHub.
- Produção e divulgação da série concentradas no GitHub, com identidade retrô em amarelo, azul e roxo neon.
