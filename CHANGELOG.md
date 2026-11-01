# Changelog

## [1.0.0] - 2026-11-01

Atlas visual de referências para criar jogos 2D com IA. Esta versão deixa **tudo dentro do repositório**: código, assets, demos e textos. Nada depende de links externos para funcionar.

### ✨ Novidades

- **4 repositórios vendorizados em `repos/`**: cópia completa de cada um, fixada em commit, com o `LICENSE` original.
  - `pixelfx`: 244 efeitos de pixel art em JS e a skill `pixelfx` do Claude Code.
  - `spritefusion-sprite-normals`: CLI em Rust que gera normal maps de sprites.
  - `pixel-planets-godot4`: projeto Godot 4 com shaders de planetas procedurais.
  - `PixelSRPG-Forge`: assets de pixel art para SRPG. Os zips já vêm extraídos, prontos para arrastar para o projeto.
- **Game Dev Cheat Sheet completo em `gamedev-cheatsheet/`**: 34 conceitos em 4 capítulos (3D & rendering, Game feel, Systems, Performance).
  - Um `.md` por conceito: explicação, **prompt bit** pronto para colar na IA, quando usar, pseudocódigo, erros comuns, leituras e conceitos relacionados.
  - GIF animada e PNG de cada demo em `media/`.
  - Espelho offline do site em `site/`, com todas as demos interativas funcionando localmente.
- **README visual**: galeria com as 34 GIFs, montagens e efeitos do pixelfx, renders de planetas e contact sheet do PixelSRPG-Forge.
- **Scripts em `scripts/`**:
  - `serve.sh cheatsheet` sobe as demos interativas em <http://127.0.0.1:8765>.
  - `serve.sh pixelfx` sobe a galeria de efeitos.
  - `update-vendor.sh [nome]` atualiza `repos/` a partir do upstream e registra o novo commit em `VENDORED.md`.
- **Rastreabilidade**:
  - `VENDORED.md` lista origem, branch, commit e licença de cada cópia.
  - `previews/SOURCES.md` lista a origem de cada imagem.

### 🧹 Removido de propósito

- `PixelSRPG-Forge`: ícones de **MapleStory** (arte da Nexon) e o pacote de 31 mil ícones de revendedor (56 MB, origem desconhecida). Os dois continuam disponíveis no repositório original.

### ⚠️ Antes de tornar público

- O conteúdo do Game Dev Cheat Sheet é de **Nicolas Zullo** e não tem licença declarada. Peça permissão ou remova-o (inclusive do histórico).
- Parte do PixelSRPG-Forge parece ser arte de terceiros (Kartoy, Pixel Frog, Sunnyside World). Confira as licenças de origem.
- As screenshots do Pixel Planet Generator vêm do itch.io, sem licença declarada para as imagens.
