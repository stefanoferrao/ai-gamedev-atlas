# AI GameDev Atlas

Atlas visual de referências para criar jogos **2D com IA**: ferramentas, pacotes de pixel art, geradores e um glossário animado de 34 conceitos de game dev com _prompt bits_ prontos para colar no seu assistente de código.

> Curadoria pessoal de [stefanoferrao](https://github.com/stefanoferrao). Reúne os itens da lista de stars [2D - IA Game Design](https://github.com/stars/stefanoferrao/lists/2d-ia-game-design) e o [Game Dev Cheat Sheet](https://gamedev-cheatsheet.com/).

## Sumário

- [Ferramentas e assets](#ferramentas-e-assets)
  - [pixelfx — 244 efeitos de pixel art em código](#pixelfx)
  - [SpriteFusion Sprite Normals — normal maps para sprites](#spritefusion-sprite-normals)
  - [Pixel Planets (Godot 4) — gerador de planetas](#pixel-planets-godot-4)
  - [PixelSRPG-Forge — pacote de assets SRPG](#pixelsrpg-forge)
- [Game Dev Cheat Sheet — 34 conceitos animados](#game-dev-cheat-sheet)
- [Créditos e licenças](#créditos-e-licenças)

---

## Ferramentas e assets

### pixelfx

**[patch-gg/pixelfx](https://github.com/patch-gg/pixelfx)** · JavaScript · MIT

244 efeitos de pixel art, cada um um pequeno trecho de código, e uma skill do Claude Code para criar os seus. Bom ponto de partida para VFX procedural (fogo, água, portais, magia) sem spritesheet.

![pixelfx montage](assets/pixelfx/montage.gif)

| Campfire | Waterfall | Plasma ball |
|:---:|:---:|:---:|
| ![](assets/pixelfx/fx-campfire.gif) | ![](assets/pixelfx/fx-waterfall.gif) | ![](assets/pixelfx/fx-plasma-ball.gif) |
| **Portal** | **Black hole** | **Tornado** |
| ![](assets/pixelfx/fx-portal.gif) | ![](assets/pixelfx/fx-black-hole.gif) | ![](assets/pixelfx/fx-tornado.gif) |

Animações de combate (knight vs. dummy):

![pixelfx acts](assets/pixelfx/acts.gif)

### SpriteFusion Sprite Normals

**[Hugo-Dz/spritefusion-sprite-normals](https://github.com/Hugo-Dz/spritefusion-sprite-normals)** · Rust · MIT

Gera normal maps a partir de qualquer sprite ou spritesheet animado. Com o normal map, a engine ilumina pixel art 2D com luzes dinâmicas (ver [Normals](gamedev-cheatsheet/normals.md)).

![SpriteFusion: normal map à esquerda, sprite iluminado à direita](assets/spritefusion-sprite-normals/hero.webp)

### Pixel Planets (Godot 4)

**[jacob-winkler/pixel-planets-godot4](https://github.com/jacob-winkler/pixel-planets-godot4)** · GDScript · MIT (branch `migrate-to-godot-4`)

Port para Godot 4 do [Pixel Planet Generator](https://deep-fold.itch.io/pixel-planet-generator) de Deep-Fold ([código original](https://github.com/Deep-Fold/PixelPlanets)). Planetas, luas, gigantes gasosos, anéis e estrelas em pixel art, todos via shaders com seed, cores e resolução configuráveis.

| Terran (wet) | Ocean islands | Ice world |
|:---:|:---:|:---:|
| ![](assets/pixel-planets-godot4/itch-cover_terran-wet.png) | ![](assets/pixel-planets-godot4/itch-shot1_ocean-islands.png) | ![](assets/pixel-planets-godot4/itch-shot2_ice-world.png) |
| **Ringed gas giant** | **Lava / dry** | **Terran** |
| ![](assets/pixel-planets-godot4/itch-shot3_ringed-gas-giant.png) | ![](assets/pixel-planets-godot4/itch-shot4_lava-dry.png) | ![](assets/pixel-planets-godot4/itch-shot5_terran.png) |

Gerador em ação (port Unity [hmcGit/UniPixelPlanet](https://github.com/hmcGit/UniPixelPlanet), mesmos shaders):

![Pixel planet generator demo](assets/pixel-planets-godot4/unipixelplanet-port_generator-demo.gif)

### PixelSRPG-Forge

**[Huu-Yuu/PixelSRPG-Forge](https://github.com/Huu-Yuu/PixelSRPG-Forge)** · MIT (declarada pelo repo)

Coleção de assets pixel art para SRPG: personagens, construções, terreno, interiores, UI, ícones, efeitos e sons. Compatível com SRPG Studio, Godot e Unity.

![PixelSRPG-Forge contact sheet](assets/PixelSRPG-Forge/contact-sheet.png)

| Clean City | FarmLife | Pixel Dungeon |
|:---:|:---:|:---:|
| ![](assets/PixelSRPG-Forge/asset-packs_clean-city_example.png) | ![](assets/PixelSRPG-Forge/asset-packs_farmlife_example-scene.png) | ![](assets/PixelSRPG-Forge/asset-packs_2d-pixel-dungeon_anim.gif) |
| **Sandstone Dungeons (preview)** | **Sandstone Dungeons (build)** | **Sandstone characters** |
| ![](assets/PixelSRPG-Forge/buildings_sandstone-dungeons_package-preview.png) | ![](assets/PixelSRPG-Forge/buildings_sandstone-dungeons_build-phase05.png) | ![](assets/PixelSRPG-Forge/buildings_sandstone-dungeons_characters-part1.png) |

> ⚠️ Parte do conteúdo parece ser arte de terceiros redistribuída (ex.: Sandstone Dungeons by Kartoy, Pixel Adventure by Pixel Frog). Confira a licença de origem antes de usar comercialmente. Ícones MapleStory (Nexon) e o pacote de 31k ícones de revendedor foram deliberadamente **excluídos** desta curadoria.

---

## Game Dev Cheat Sheet

34 conceitos de game dev, cada um com demo animada, explicação curta e um **prompt bit**: uma frase pronta para colar no prompt da IA e obter o comportamento certo. Organizados em 4 capítulos: 3D & rendering, Game feel, Systems e Performance.

➡️ **[Índice completo com miniaturas](gamedev-cheatsheet/README.md)**

### 3D & rendering

<table>
<tr>
<td align="center" width="25%"><a href="gamedev-cheatsheet/raycasting.md"><img src="gamedev-cheatsheet/media/raycasting.gif" width="200" alt="Raycasting"></a><br><b>01. Raycasting</b><br><sub>ask a line what it hits</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/normals.md"><img src="gamedev-cheatsheet/media/normals.gif" width="200" alt="Normals"></a><br><b>02. Normals</b><br><sub>which way a surface faces</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/level-of-detail.md"><img src="gamedev-cheatsheet/media/level-of-detail.gif" width="200" alt="Level of detail"></a><br><b>03. Level of detail</b><br><sub>cheap mesh when it is far</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/frustum-culling.md"><img src="gamedev-cheatsheet/media/frustum-culling.gif" width="200" alt="Frustum culling"></a><br><b>04. Frustum culling</b><br><sub>skip what the camera cannot see</sub></td>
</tr>
<tr>
<td align="center" width="25%"><a href="gamedev-cheatsheet/fragment-shader.md"><img src="gamedev-cheatsheet/media/fragment-shader.gif" width="200" alt="Fragment shader"></a><br><b>05. Fragment shader</b><br><sub>a tiny program per pixel</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/billboarding.md"><img src="gamedev-cheatsheet/media/billboarding.gif" width="200" alt="Billboarding"></a><br><b>06. Billboarding</b><br><sub>always turn to face the camera</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/quaternions.md"><img src="gamedev-cheatsheet/media/quaternions.gif" width="200" alt="Quaternions"></a><br><b>07. Quaternions</b><br><sub>rotations that take the short way</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/z-fighting.md"><img src="gamedev-cheatsheet/media/z-fighting.gif" width="200" alt="Z-fighting"></a><br><b>08. Z-fighting</b><br><sub>two surfaces fighting for pixels</sub></td>
</tr>
</table>

### Game feel

<table>
<tr>
<td align="center" width="25%"><a href="gamedev-cheatsheet/delta-time.md"><img src="gamedev-cheatsheet/media/delta-time.gif" width="200" alt="Delta time"></a><br><b>09. Delta time</b><br><sub>move per second, not per frame</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/coyote-time.md"><img src="gamedev-cheatsheet/media/coyote-time.gif" width="200" alt="Coyote time"></a><br><b>10. Coyote time</b><br><sub>a late jump that still counts</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/easing.md"><img src="gamedev-cheatsheet/media/easing.gif" width="200" alt="Easing"></a><br><b>11. Easing</b><br><sub>bend linear motion into curves</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/screen-shake.md"><img src="gamedev-cheatsheet/media/screen-shake.gif" width="200" alt="Screen shake"></a><br><b>12. Screen shake</b><br><sub>one trauma value drives the shake</sub></td>
</tr>
<tr>
<td align="center" width="25%"><a href="gamedev-cheatsheet/squash-and-stretch.md"><img src="gamedev-cheatsheet/media/squash-and-stretch.gif" width="200" alt="Squash and stretch"></a><br><b>13. Squash and stretch</b><br><sub>shape shows speed and impact</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/camera-deadzone.md"><img src="gamedev-cheatsheet/media/camera-deadzone.gif" width="200" alt="Camera deadzone"></a><br><b>14. Camera deadzone</b><br><sub>let the player move first</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/input-buffering.md"><img src="gamedev-cheatsheet/media/input-buffering.gif" width="200" alt="Input buffering"></a><br><b>15. Input buffering</b><br><sub>an early press that still counts</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/acceleration-and-friction.md"><img src="gamedev-cheatsheet/media/acceleration-and-friction.gif" width="200" alt="Acceleration and friction"></a><br><b>16. Acceleration and friction</b><br><sub>speed builds up and bleeds off</sub></td>
</tr>
<tr>
<td align="center" width="25%"><a href="gamedev-cheatsheet/hit-stop.md"><img src="gamedev-cheatsheet/media/hit-stop.gif" width="200" alt="Hit stop"></a><br><b>17. Hit stop</b><br><sub>freeze both fighters on impact</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/invincibility-frames.md"><img src="gamedev-cheatsheet/media/invincibility-frames.gif" width="200" alt="Invincibility frames"></a><br><b>18. Invincibility frames</b><br><sub>brief safety after each hit</sub></td>
</tr>
</table>

### Systems

<table>
<tr>
<td align="center" width="25%"><a href="gamedev-cheatsheet/object-pooling.md"><img src="gamedev-cheatsheet/media/object-pooling.gif" width="200" alt="Object pooling"></a><br><b>19. Object pooling</b><br><sub>allocate once, reuse forever</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/state-machine.md"><img src="gamedev-cheatsheet/media/state-machine.gif" width="200" alt="Finite state machine"></a><br><b>20. Finite state machine</b><br><sub>one state at a time</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/hitbox-hurtbox.md"><img src="gamedev-cheatsheet/media/hitbox-hurtbox.gif" width="200" alt="Hitbox and hurtbox"></a><br><b>21. Hitbox and hurtbox</b><br><sub>what hits, what gets hit</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/pathfinding.md"><img src="gamedev-cheatsheet/media/pathfinding.gif" width="200" alt="A* pathfinding"></a><br><b>22. A* pathfinding</b><br><sub>search that aims at the goal</sub></td>
</tr>
<tr>
<td align="center" width="25%"><a href="gamedev-cheatsheet/particle-system.md"><img src="gamedev-cheatsheet/media/particle-system.gif" width="200" alt="Particle system"></a><br><b>23. Particle system</b><br><sub>one emitter, many short lives</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/fixed-timestep.md"><img src="gamedev-cheatsheet/media/fixed-timestep.gif" width="200" alt="Fixed timestep"></a><br><b>24. Fixed timestep</b><br><sub>physics on a steady clock</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/steering-behaviors.md"><img src="gamedev-cheatsheet/media/steering-behaviors.gif" width="200" alt="Steering behaviors"></a><br><b>25. Steering behaviors</b><br><sub>nudge velocity toward a goal</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/tunneling.md"><img src="gamedev-cheatsheet/media/tunneling.gif" width="200" alt="Tunneling"></a><br><b>26. Tunneling</b><br><sub>fast objects skip through walls</sub></td>
</tr>
<tr>
<td align="center" width="25%"><a href="gamedev-cheatsheet/seeded-noise.md"><img src="gamedev-cheatsheet/media/seeded-noise.gif" width="200" alt="Seeded noise"></a><br><b>27. Seeded noise</b><br><sub>same seed, same world</sub></td>
</tr>
</table>

### Performance

<table>
<tr>
<td align="center" width="25%"><a href="gamedev-cheatsheet/frame-budget.md"><img src="gamedev-cheatsheet/media/frame-budget.gif" width="200" alt="Frame budget"></a><br><b>28. Frame budget</b><br><sub>16.67 ms, and where it goes</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/draw-calls.md"><img src="gamedev-cheatsheet/media/draw-calls.gif" width="200" alt="Draw calls"></a><br><b>29. Draw calls</b><br><sub>one call, four hundred crates</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/spatial-partitioning.md"><img src="gamedev-cheatsheet/media/spatial-partitioning.gif" width="200" alt="Spatial partitioning"></a><br><b>30. Spatial partitioning</b><br><sub>only test what is nearby</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/overdraw.md"><img src="gamedev-cheatsheet/media/overdraw.gif" width="200" alt="Overdraw"></a><br><b>31. Overdraw</b><br><sub>the same pixel, shaded again</sub></td>
</tr>
<tr>
<td align="center" width="25%"><a href="gamedev-cheatsheet/time-slicing.md"><img src="gamedev-cheatsheet/media/time-slicing.gif" width="200" alt="Time slicing"></a><br><b>32. Time slicing</b><br><sub>spread the work across frames</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/texture-atlas.md"><img src="gamedev-cheatsheet/media/texture-atlas.gif" width="200" alt="Texture atlas"></a><br><b>33. Texture atlas</b><br><sub>one texture, one draw call</sub></td>
<td align="center" width="25%"><a href="gamedev-cheatsheet/chunk-streaming.md"><img src="gamedev-cheatsheet/media/chunk-streaming.gif" width="200" alt="Chunk streaming"></a><br><b>34. Chunk streaming</b><br><sub>load only what is near the player</sub></td>
</tr>
</table>

---

## Créditos e licenças

- Cada repositório citado pertence a seus autores e segue a própria licença (todos declaram MIT). Imagens em [`assets/`](assets/) vêm dos READMEs, do próprio repo ou da página itch.io do projeto; origem de cada arquivo em [`assets/SOURCES.md`](assets/SOURCES.md).
- Screenshots do Pixel Planet Generator vêm de [deep-fold.itch.io](https://deep-fold.itch.io/pixel-planet-generator), sem licença declarada para as imagens.
- O conteúdo de [`gamedev-cheatsheet/`](gamedev-cheatsheet/) (textos, prompt bits e capturas das demos) é de **Nicolas Zullo** ([gamedev-cheatsheet.com](https://gamedev-cheatsheet.com/), [@NicolasZu](https://x.com/NicolasZu)), espelhado aqui para referência pessoal. O site não declara licença: peça permissão ao autor antes de tornar este repositório público.
