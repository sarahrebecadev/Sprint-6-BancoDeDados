# Agendamento diário do backup

Expressão solicitada (substitua os caminhos pelos caminhos absolutos do seu ambiente):

```cron
0 2 * * * /caminho/08_backup.sh >> /caminho/logs/cron_backup.log 2>&1
```

- `0`: minuto zero.
- `2`: 2 horas da manhã.
- `*`: qualquer dia do mês.
- `*`: qualquer mês.
- `*`: qualquer dia da semana.

## Instalação
1. Ajuste as variáveis no início de `08_backup.sh` e confirme que o diretório de backup e logs são graváveis.
2. Torne o script executável: `chmod +x /caminho/08_backup.sh`.
3. Crie o diretório de logs usado no cron: `mkdir -p /caminho/logs`.
4. Abra o agendador do usuário: `crontab -e` e cole a linha com caminhos absolutos.
5. Confira a configuração: `crontab -l`.
6. Confira os logs em `/caminho/logs/cron_backup.log` e em `logs/backup.log`.

## Cuidados
- O cron possui ambiente reduzido; use caminhos absolutos para script, logs e ferramentas ou defina `PATH`.
- Não escreva senhas no script nem na linha cron. Prefira `~/.pgpass` com permissão `chmod 600 ~/.pgpass`, ou um mecanismo de segredo do ambiente.
- Ajuste `PGHOST`, `PGPORT`, `PGUSER`, `PGDATABASE`, `BACKUP_DIR`, `LOG_DIR` e `RETENTION_DAYS` no ambiente ou no início do script.
- O backup local não satisfaz sozinho a regra 3-2-1; configure uma cópia externa/off-site em produção.
