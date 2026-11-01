# Changelog

## [1.1.0] - 2026-11-01

### ✨ Novidades

- **Nova seção `pixel-composer/`** com os **134 projetos oficiais** de [Pixel Composer](https://pixel-composer.com/showcases.html), o editor node-based de VFX e pixel art de MakhamDev.
  - `projects/<Projeto>/`: o arquivo **`.pxc`** (grafo de nós completo, abre direto no Pixel Composer) e as miniaturas originais.
  - `media/`: miniaturas ampliadas 4× com nearest-neighbor (40 animadas) e um contact sheet com os 134 projetos.
  - `README.md`: galeria com animados e estáticos, cada um com link para o seu `.pxc`, e o passo a passo para abrir.
- **README principal**: nova seção com 12 VFX animados em destaque (fireball, fire tornado, black hole, portal…) e o contact sheet.
- **`scripts/pxc_previews.py`**: regenera a mídia ampliada e o contact sheet a partir de `pixel-composer/items.json`.
- `VENDORED.md`, a seção "Estrutura", a tabela "Como usar" e "Créditos" foram atualizados.

### ℹ️ Notas

- O app Pixel Composer (repositório de 1,5 GB, MIT) **não** foi copiado, só tem link. Instale pela [Steam](https://store.steampowered.com/app/2299510/Pixel_Composer/) ou pelo [itch.io](https://makham.itch.io/pixel-composer).
- Os projetos `.pxc` são distribuídos gratuitamente por MakhamDev, mas sem licença declarada. Confira com o autor antes de tornar o repositório público.

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
