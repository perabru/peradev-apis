# Dia 04 · Thread Notes API — a conversa permanece

**06/11/2026 · implementada, testada e publicada**

Organize notas de aula e comentários em uma API local com Python e SQLite. CRUD, recursos aninhados, filtros combináveis, paginação e bloqueio de exclusão de publicações que ainda possuem comentários.

Referência: [JSONPlaceholder](https://jsonplaceholder.typicode.com/), consultada em 06/11/2026. O serviço de referência simula alterações; esta implementação própria grava seus dados localmente em SQLite. Sem integração externa, afiliação ou endpoint hospedado.

**12 testes HTTP aprovados, 0 falhas**, Python 3.12.14, sem pacotes externos. Inclui vínculos, entradas inválidas, concorrência, rollback e reinício real.

[Repositório](https://github.com/perabru/api-lab-2026-11-06) · [README](https://github.com/perabru/api-lab-2026-11-06/blob/main/README.md) · [Anúncio completo](https://github.com/perabru/api-lab-2026-11-06/blob/main/ANNOUNCEMENT.md) · [Commit](https://github.com/perabru/api-lab-2026-11-06/commit/0fb95b2fe56b61218d08498d151689398694b5bd) · [Evidências](https://github.com/perabru/api-lab-2026-11-06/blob/main/VERIFICATION.md) · [LINKEDIN.md](https://github.com/perabru/api-lab-2026-11-06/blob/main/LINKEDIN.md) · [Post bilíngue publicado](https://www.linkedin.com/feed/update/urn:li:activity:7524412593826951168/)

```bash
git clone https://github.com/perabru/api-lab-2026-11-06.git
cd api-lab-2026-11-06
python examples/demo.py
python -m unittest discover -s tests -v
python src/server.py
```

Experimente a demo isolada; ela verifica respostas e remove o banco temporário ao finalizar. O [guia de contribuição](https://github.com/perabru/api-lab-2026-11-06/blob/main/CONTRIBUTING.md) e o [formulário de bug](https://github.com/perabru/api-lab-2026-11-06/issues/new?template=bug_report.yml) pedem rota, filtros e estado inicial para facilitar a reprodução. Essas são as melhorias de contribuição do dia.

![Apoio voluntário por Pix](https://raw.githubusercontent.com/perabru/peradev-apis/main/brand/pix-support.svg)

```text
bruno.pera@unifesp.br
```

O apoio incentiva a continuidade, é voluntário e mantém o código aberto e gratuito, sem contrapartidas.

**English:** Local posts and comments API with SQLite persistence, nested routes, combined filters, pagination and guarded deletion. Twelve HTTP tests passed, including concurrent writes, rollback and real process restart. Explore the isolated demo and contribute a reproducible case.

[Calendário](../docs/10-days.md) · [Catálogo](../README.md#catálogo)
