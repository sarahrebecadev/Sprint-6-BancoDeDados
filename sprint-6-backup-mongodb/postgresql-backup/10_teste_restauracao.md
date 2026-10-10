# Teste de backup e restauração PostgreSQL

> **Importante:** as saídas abaixo são exemplos de formato esperado, não evidências de execução. A equipe deve executar os comandos e substituir os exemplos pelos resultados reais e prints/logs em `evidencias/`.

## 1. Gerar o backup

Na pasta do script, configure as variáveis para o banco real da Sprint 5. O nome padrão no script é `sistema_academico`, mas confirme o banco usado pela equipe.

```bash
chmod +x 08_backup.sh
PGHOST=localhost PGPORT=5432 PGUSER=postgres PGDATABASE=sistema_academico ./08_backup.sh
```

A autenticação deve estar previamente configurada via `~/.pgpass` ou ambiente seguro. Resultado esperado: log com `SUCESSO` e tamanho do arquivo `.dump`.

## 2. Criar banco temporário

```bash
createdb -h localhost -p 5432 -U postgres sistema_academico_restore_test
```

Se o banco de teste já existir, remova-o apenas depois de confirmar que não contém dados importantes, ou escolha outro nome.

## 3. Restaurar o formato custom

```bash
pg_restore -h localhost -p 5432 -U postgres -d sistema_academico_restore_test ./backups/backup_sistema_academico_AAAA-MM-DD_HH-MM-SS.dump
```

Substitua o nome pelo arquivo gerado. Para dump em formato SQL plain (gerado com `pg_dump -Fp`), use `psql -h localhost -p 5432 -U postgres -d sistema_academico_restore_test -f backup.sql`; `pg_restore` não restaura arquivos plain.

## 4. Comparar contagens

Execute a consulta `10_teste_restauracao.sql` tanto no banco original quanto no restaurado. O script imprime contagens de todas as tabelas do modelo. Para registrar uma comparação, anote os resultados reais:

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

Só marque **OK** se as contagens coincidirem e as verificações de integridade passarem. Se houve alterações concorrentes entre backup e contagem, registre a circunstância e repita em ambiente controlado.

## 5. Validar constraints e índices

No banco restaurado, confira constraints e índices com as consultas em `10_teste_restauracao.sql`. Compare também com o banco original. Se o backup for restaurado com outro proprietário ou sem privilégios de criação, documente avisos e repita com permissões adequadas.

## 6. Evidências a guardar
- Print/terminal do script `08_backup.sh` com sucesso e tamanho.
- Nome e tamanho do dump criado.
- Comandos e resultado de `createdb` e `pg_restore`.
- Saída das contagens original/restaurado e checagem de constraints/índices.
- Preencher a tabela acima com resultados reais. Não usar exemplos como se fossem evidências.
