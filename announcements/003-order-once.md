# Dia 02 · Order Once API: repita sem duplicar

**04/11/2026 · código publicado e verificado**

Crie pedidos locais com preços em centavos inteiros. Repetir o POST com a mesma chave e conteúdo retorna o mesmo pedido; conteúdo diferente gera conflito. Pedido e chave são persistidos juntos, mantendo a proteção após reiniciar o processo.

**12 testes HTTP aprovados, 0 falhas.** Incluem vinte requisições concorrentes com a mesma chave, falha de gravação e reinício de um processo Node real.

[Repositório](https://github.com/perabru/api-lab-2026-11-04) · [README e exemplos](https://github.com/perabru/api-lab-2026-11-04/blob/main/README.md) · [Anúncio completo](https://github.com/perabru/api-lab-2026-11-04/blob/main/ANNOUNCEMENT.md) · [Verificação](https://github.com/perabru/api-lab-2026-11-04/blob/main/VERIFICATION.md) · [Contribuir](https://github.com/perabru/api-lab-2026-11-04/blob/main/CONTRIBUTING.md) · [Texto para LinkedIn](https://github.com/perabru/api-lab-2026-11-04/blob/main/LINKEDIN.md)

Clone o repositório e execute `node examples/retry-demo.mjs` para ver criação, replay e conflito sem alterar seus dados. Para verificar: `npm test`. Para iniciar o catálogo: `npm start`.

Referência: [Stripe — idempotent requests](https://docs.stripe.com/api/idempotent_requests), revisitada em 04/11/2026. A implementação é independente e seu contrato tem limites próprios; não processa pagamentos, não utiliza conta Stripe e não inclui hospedagem.

A melhoria de contribuição é uma demo com asserções reproduzíveis e um formulário de bug voltado a retries. Teste, sugira casos de borda por issue ou dê uma estrela para acompanhar. O apoio por Pix é voluntário; o código permanece aberto e gratuito. O texto bilíngue foi [publicado no LinkedIn em 04/11/2026](https://www.linkedin.com/feed/update/urn:li:activity:7523692656141496320/), após autorização do usuário.

**English:** Local Node.js order API with integer-cent totals and persistent idempotency keys. Response replay, parameter conflict detection and twelve passing HTTP tests, including a process restart. No payments, dependencies or hosted endpoint. Try the isolated retry demo and contribute an edge case.
