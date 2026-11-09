# Dia 07 · Forecast Lens API

**09/11/2026 · Publicado no repositório próprio · 14 testes HTTP aprovados**

Misturar unidades em um painel pode distorcer comparações. A Forecast Lens valida séries diárias e devolve °C, mm e km/h, com datas alinhadas e origem declarada. Cache em memória de 32 entradas por dez minutos, sem renovar o TTL em leituras.

[Repositório](https://github.com/perabru/api-lab-2026-11-09) · [README e exemplos](https://github.com/perabru/api-lab-2026-11-09/blob/main/README.md) · [Anúncio completo](https://github.com/perabru/api-lab-2026-11-09/blob/main/ANNOUNCEMENT.md) · [Verificação real](https://github.com/perabru/api-lab-2026-11-09/blob/main/VERIFICATION.md) · [Post bilíngue publicado](https://www.linkedin.com/feed/update/urn:li:activity:7525500246274109440/) · [Texto/registro](https://github.com/perabru/api-lab-2026-11-09/blob/main/LINKEDIN.md).

## Experimente

```bash
git clone https://github.com/perabru/api-lab-2026-11-09.git
cd api-lab-2026-11-09
npm test
npm run demo
npm start
```

A demo executa quatro chamadas curl com asserções. Na simulação, 50 °F viram 10 °C e 0,5 inch viram 12,7 mm.

**Escopo:** alternativa local documentada, permitida pelo manifesto. Processa JSON fornecido pelo cliente; não consulta nem verifica clima real. Dados sintéticos identificados e importação apenas declarada, sem autenticar o provedor. Sem credenciais, dependências externas ou endpoint público hospedado.

Referência de estudo: [Open-Meteo — documentação oficial](https://open-meteo.com/en/docs), consultada em 09/11/2026. Contrato próprio, sem afiliação.

## Ajude a melhorar

Teste um caso de conversão e envie uma reprodução mínima no próprio projeto. O guia e o formulário pedem unidade, corpo sintético, status esperado e recebido. Banner SVG acessível e seção de apoio voluntário mantêm a identidade retrô.

![Apoio voluntário por Pix](https://raw.githubusercontent.com/perabru/peradev-apis/main/brand/pix-support.svg)

```text
bruno.pera@unifesp.br
```

Contribuir incentiva a continuidade, é opcional e não oferece contrapartidas. O código permanece aberto e gratuito.

## English summary

Forecast Lens normalizes caller-supplied daily series into Celsius, millimeters and km/h, with validation, declared provenance and a bounded ten-minute cache. It is a local alternative inspired by Open-Meteo's JSON contract, without live weather retrieval or verification. All 14 tests passed; a four-request curl demo and contribution templates are included.

[Voltar ao catálogo](../README.md#catálogo).
