# Agendamento diário do backup

```cron
0 2 * * * /caminho/08_backup.sh >> /caminho/logs/cron_backup.log 2>&1
```

Campos: minuto 0; hora 2; qualquer dia do mês; qualquer mês; qualquer dia da semana.

1. Ajuste os caminhos absolutos e crie o diretório de logs.
2. Execute `chmod +x /caminho/08_backup.sh`.
3. Edite `crontab -e`, cole a expressão ajustada e salve.
4. Confira com `crontab -l`; verifique os logs do cron e `logs/backup.log`.

O cron tem ambiente reduzido; configure `PATH` e variáveis necessárias. Nunca coloque senha no script. Prefira `~/.pgpass` com `chmod 600 ~/.pgpass` ou mecanismo seguro de segredos. Backup local não implementa cópia off-site da regra 3-2-1.
