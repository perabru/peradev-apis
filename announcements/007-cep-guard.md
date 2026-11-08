# Dia 06 · CEP Guard API — valide e limite a espera

**08/11/2026 · código implementado, testado localmente e publicado**

Uma camada local de consulta ao ViaCEP com normalização de CEP/endereço, cache de 5 minutos para resultados encontrados e 1 minuto para não encontrados, compartilhamento de chamadas iguais e timeout de 3 segundos para cabeçalhos e corpo.

**Node.js 22+ · sem dependências externas · 12 testes determinísticos aprovados**

**Limite real:** uma tentativa direta ao ViaCEP excedeu 3 s neste ambiente. A integração está implementada, mas a consulta real não foi confirmada. Testes/demo usam dados sintéticos identificados como fixture_test/fixture_demo; não representam endereços reais. Não há endpoint hospedado.

[Repositório](https://github.com/perabru/api-lab-2026-11-08) · [README](https://github.com/perabru/api-lab-2026-11-08/blob/main/README.md) · [Anúncio completo](https://github.com/perabru/api-lab-2026-11-08/blob/main/ANNOUNCEMENT.md) · [Commit](https://github.com/perabru/api-lab-2026-11-08/commit/b2ffcf0660c9659452e72432828967e7263a17c4) · [Evidências](https://github.com/perabru/api-lab-2026-11-08/blob/main/VERIFICATION.md) · [LINKEDIN.md](https://github.com/perabru/api-lab-2026-11-08/blob/main/LINKEDIN.md) · [Post publicado](https://www.linkedin.com/feed/update/urn:li:activity:7525137869502525440/)

```bash
git clone https://github.com/perabru/api-lab-2026-11-08.git
cd api-lab-2026-11-08
npm run demo
npm test
npm start
```

A demo funciona sem rede. O executável padrão consulta o serviço real, sujeito à disponibilidade. Referência: documentação oficial [ViaCEP](https://viacep.com.br/), consultada em 08/11/2026. Não realizar consultas massivas ou alegar afiliação.

Melhoria concreta: demo com asserções e [guia de cenários de falha](https://github.com/perabru/api-lab-2026-11-08/blob/main/CONTRIBUTING.md). [Relate uma falha](https://github.com/perabru/api-lab-2026-11-08/issues/new?template=bug_report.yml) com rota, status e estado de cache, evitando endereço pessoal.

![Apoio voluntário por Pix](https://raw.githubusercontent.com/perabru/peradev-apis/main/brand/pix-support.svg)

```text
bruno.pera@unifesp.br
```

A contribuição incentiva a continuidade, é voluntária e não muda o acesso aberto e gratuito ao código, sem contrapartidas.

**English:** Local ViaCEP lookup layer with bounded cache, shared requests and full-response timeout. Twelve deterministic tests passed; the live request timed out and remains unverified. Demos use labeled synthetic data. Try the offline demo and contribute a failure scenario.

[Calendário](../docs/10-days.md) · [Catálogo](../README.md#catálogo)
