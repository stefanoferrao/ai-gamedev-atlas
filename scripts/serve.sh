#!/usr/bin/env bash
# Serve localmente: cheatsheet (demos interativas) ou galeria do pixelfx.
# Uso: scripts/serve.sh cheatsheet|pixelfx [porta]
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
case "${1:-cheatsheet}" in
  cheatsheet) p="${2:-8765}"; echo "http://127.0.0.1:$p"; cd "$ROOT/gamedev-cheatsheet/site" && exec python3 -m http.server "$p" --bind 127.0.0.1 ;;
  pixelfx)    cd "$ROOT/repos/pixelfx" && exec node tools/serve.mjs ;;
  *) echo "uso: $0 cheatsheet|pixelfx [porta]" >&2; exit 1 ;;
esac
