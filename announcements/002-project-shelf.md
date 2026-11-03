# Dia 01 · Project Shelf API: encontre seus projetos

**03/11/2026 · código publicado e verificado**

Cadastre projetos de aula, portfólio ou laboratório em um catálogo local com busca, etiquetas e paginação. Node.js core, sem dependências externas e sem token. Registros persistem após reiniciar; filtros são preservados nos links de navegação.

**11 testes HTTP aprovados, 0 falhas**, incluindo CRUD, reinício, navegação por Link, entradas inválidas, concorrência e falha de gravação simulada.

[Repositório](https://github.com/perabru/api-lab-2026-11-03) · [README e exemplos](https://github.com/perabru/api-lab-2026-11-03/blob/main/README.md) · [Anúncio completo](https://github.com/perabru/api-lab-2026-11-03/blob/main/ANNOUNCEMENT.md) · [Verificação](https://github.com/perabru/api-lab-2026-11-03/blob/main/VERIFICATION.md) · [Contribuir](https://github.com/perabru/api-lab-2026-11-03/blob/main/CONTRIBUTING.md) · [Texto para LinkedIn](https://github.com/perabru/api-lab-2026-11-03/blob/main/LINKEDIN.md)

Referência: [GitHub REST API — paginação](https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api), consultada em 03/11/2026. Implementação independente, com dados próprios, sem afiliação e sem endpoint público hospedado.

Para experimentar, clone o repositório e rode `node examples/demo.mjs`; a demo usa dados temporários isolados. Para testar: `npm test`. Para usar seu catálogo: `npm start`.

Teste, sugira uma melhoria por issue ou dê uma estrela para acompanhar. O README tem apoio voluntário por Pix; código aberto e gratuito para todos. O texto para LinkedIn foi preparado para revisão e não foi publicado.

**English:** Local project catalog with CRUD, search, tags, Link pagination and JSON persistence. Eleven HTTP integration tests passed. No dependencies, GitHub account integration or hosted endpoint. Includes an isolated demo and contribution guide.
