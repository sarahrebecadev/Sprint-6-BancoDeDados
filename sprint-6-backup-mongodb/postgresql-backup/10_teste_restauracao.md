# Teste de restauração PostgreSQL

**As saídas são exemplos esperados, não evidências reais.** A equipe deve executar os comandos e guardar prints/logs reais em `evidencias/`.

## 1. Backup
```bash
chmod +x 08_backup.sh
PGHOST=localhost PGPORT=5432 PGUSER=postgres PGDATABASE=sistema_academico ./08_backup.sh
```
Configure autenticação via `~/.pgpass` ou ambiente seguro e confirme o nome real do banco.

## 2. Criar banco temporário
```bash
createdb -h localhost -p 5432 -U postgres sistema_academico_restore_test
```

## 3. Restaurar dump custom
```bash
pg_restore -h localhost -p 5432 -U postgres -d sistema_academico_restore_test ./backups/backup_sistema_academico_AAAA-MM-DD_HH-MM-SS.dump
```
Substitua pelo nome real do dump. Para arquivo SQL plain use `psql -h localhost -p 5432 -U postgres -d sistema_academico_restore_test -f backup.sql`; `pg_restore` não restaura formato plain.

## 4. Comparação
Execute `10_teste_restauracao.sql` no original e restaurado e preencha com resultados reais.

| Tabela | Original | Restaurado | Resultado |
|---|---:|---:|---|
| aluno | preencher | preencher | OK/FALHA |
| professor | preencher | preencher | OK/FALHA |
| disciplina | preencher | preencher | OK/FALHA |
| matricula | preencher | preencher | OK/FALHA |
| curso | preencher | preencher | OK/FALHA |
| turma | preencher | preencher | OK/FALHA |
| avaliacao | preencher | preencher | OK/FALHA |
| nota | preencher | preencher | OK/FALHA |
| frequencia | preencher | preencher | OK/FALHA |
| curso_disciplina | preencher | preencher | OK/FALHA |

Só marque OK se as contagens coincidirem e constraints/índices forem verificados. A consulta SQL lista constraints e índices.

## Evidências para capturar
- Log de backup com sucesso e tamanho do arquivo.
- Nome e tamanho do dump.
- Comandos/resultados de `createdb` e `pg_restore`.
- Contagens original/restaurado e inventário de constraints/índices.
- Não apresente exemplos como se fossem evidências reais.
