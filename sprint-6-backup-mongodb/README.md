# Sprint 6 — Backup, restauração e MongoDB

Esta etapa dá continuidade ao Sistema Acadêmico da Sprint 5. O PostgreSQL continua representando o modelo relacional principal; os scripts MongoDB demonstram uma modelagem documental complementar com dados fictícios do mesmo domínio.

## Conteúdo
- `postgresql-backup/08_backup.sh`: backup lógico em formato customizado, logs e retenção de 30 dias.
- `postgresql-backup/09_cron_agendamento.md`: agendamento diário às 02h.
- `postgresql-backup/10_teste_restauracao.md` e `10_teste_restauracao.sql`: roteiro e consultas de validação.
- `mongodb/11_mongodb_setup.js`: banco e collections.
- `mongodb/12_mongodb_insercao.js`: documentos de exemplo.
- `mongodb/13_mongodb_consultas.js`: consultas comentadas, incluindo `$lookup`.
- `mongodb/14_mongodb_indices_explain.js`: comparação de planos antes/depois dos índices.

## Execução
Consulte o [README principal](../../README.md) para pré-requisitos e sequência completa. Configure conexão PostgreSQL e MongoDB no ambiente local; não armazene senhas no repositório.

## Evidências
Os roteiros indicam saídas esperadas, não resultados medidos. A equipe deve executar os comandos no seu ambiente e guardar logs/prints reais em `postgresql-backup/evidencias/`.
