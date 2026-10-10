#!/usr/bin/env bash
set -euo pipefail

# Configuração: ajuste os valores para seu ambiente. Nunca coloque senha aqui.
# Use ~/.pgpass (permissão 0600) ou configure PGPASSWORD no ambiente de execução.
PGHOST="${PGHOST:-localhost}"
PGPORT="${PGPORT:-5432}"
PGUSER="${PGUSER:-postgres}"
PGDATABASE="${PGDATABASE:-sistema_academico}"
BACKUP_DIR="${BACKUP_DIR:-./backups}"
LOG_DIR="${LOG_DIR:-./logs}"
RETENTION_DAYS="${RETENTION_DAYS:-30}"

mkdir -p "$BACKUP_DIR" "$LOG_DIR"
timestamp="$(date '+%Y-%m-%d_%H-%M-%S')"
backup_file="$BACKUP_DIR/backup_${PGDATABASE}_${timestamp}.dump"
log_file="$LOG_DIR/backup.log"
log() { printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" | tee -a "$log_file"; }

# Pré-valida ferramenta e parâmetros essenciais.
if ! command -v pg_dump >/dev/null 2>&1; then
  log "FALHA: pg_dump não encontrado no PATH."
  exit 127
fi
if [[ -z "$PGDATABASE" || -z "$PGUSER" ]]; then
  log "FALHA: PGDATABASE e PGUSER não podem ficar vazios."
  exit 2
fi

# Remove eventual arquivo parcial e propaga erro se pg_dump falhar.
cleanup() {
  local code=$?
  if [[ $code -ne 0 ]]; then
    rm -f "$backup_file"
    log "FALHA: backup interrompido (código $code); arquivo parcial removido."
  fi
  exit "$code"
}
trap cleanup EXIT

log "Iniciando backup do banco '$PGDATABASE' em '$backup_file'."
if pg_dump --host="$PGHOST" --port="$PGPORT" --username="$PGUSER" \
  --dbname="$PGDATABASE" --format=custom --file="$backup_file"; then
  size="$(du -h "$backup_file" | awk '{print $1}')"
  log "SUCESSO: backup concluído; tamanho=$size."
else
  exit 1
fi

# Retenção: exclui somente dumps do padrão deste banco com mais de N dias.
find "$BACKUP_DIR" -maxdepth 1 -type f \
  -name "backup_${PGDATABASE}_*.dump" -mtime +"$RETENTION_DAYS" -print -delete \
  >> "$log_file" 2>&1
log "Limpeza concluída: retenção de $RETENTION_DAYS dias."
trap - EXIT
