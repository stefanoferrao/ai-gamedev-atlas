#!/usr/bin/env bash
# Atualiza repos/<nome> a partir do upstream (último commit da branch) e reescreve a linha em VENDORED.md.
# Uso: scripts/update-vendor.sh [nome...]   (sem argumento = todos)
# Requer: gh autenticado, python3, tar.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
declare -A SRC=(
  [spritefusion-sprite-normals]="Hugo-Dz/spritefusion-sprite-normals main"
  [PixelSRPG-Forge]="Huu-Yuu/PixelSRPG-Forge main"
  [pixel-planets-godot4]="jacob-winkler/pixel-planets-godot4 migrate-to-godot-4"
  [pixelfx]="patch-gg/pixelfx main"
)
names=("$@"); [ ${#names[@]} -eq 0 ] && names=("${!SRC[@]}")
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT
for n in "${names[@]}"; do
  read -r repo br <<<"${SRC[$n]:?nome desconhecido: $n}"
  sha="$(gh api "repos/$repo/commits/$br" --jq .sha)"
  echo "== $n <- $repo@${sha:0:7}"
  mkdir -p "$tmp/$n"
  gh api "repos/$repo/tarball/$sha" | tar -xz -C "$tmp/$n" --strip-components=1
  if [ "$n" = PixelSRPG-Forge ]; then
    ( cd "$tmp/$n"
      rm -rf .idea Skill_Icons_技能图标 Weapons_武器装备 other_其他素材3万多张 )
    find "$tmp/$n" -name '*.zip' -print0 | xargs -0 -r python3 -I "$ROOT/scripts/unzip_safe.py"
  fi
  rm -rf "$ROOT/repos/$n"; mv "$tmp/$n" "$ROOT/repos/$n"
  sed -i -E "s#^(\| \[\`repos/$n\`\].*\| \`$br\` \| )\[\`[0-9a-f]{7}\`\]\([^)]*\)(.*\| )[0-9-]{10} \|#\1[\`${sha:0:7}\`](https://github.com/$repo/tree/$sha)\2$(date +%F) |#" "$ROOT/VENDORED.md"
done
echo "Pronto. Revise com: git status && git diff --stat"
