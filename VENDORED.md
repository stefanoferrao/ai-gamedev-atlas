# Conteúdo vendorizado

Cópias completas (sem histórico git) dos repositórios de origem, fixadas em um commit. Atualize com `scripts/update-vendor.sh`.

| Pasta | Origem | Branch | Commit | Licença | Copiado em |
|---|---|---|---|---|---|
| [`repos/spritefusion-sprite-normals`](repos/spritefusion-sprite-normals) | [Hugo-Dz/spritefusion-sprite-normals](https://github.com/Hugo-Dz/spritefusion-sprite-normals) | `main` | [`d14b067`](https://github.com/Hugo-Dz/spritefusion-sprite-normals/tree/d14b06726cabab09c68a403ce2e684a52efbfe4c) | MIT | 2026-11-01 |
| [`repos/PixelSRPG-Forge`](repos/PixelSRPG-Forge) | [Huu-Yuu/PixelSRPG-Forge](https://github.com/Huu-Yuu/PixelSRPG-Forge) | `main` | [`5ff74c2`](https://github.com/Huu-Yuu/PixelSRPG-Forge/tree/5ff74c28ea96798d43e55cafbabbee80c8945a4f) | MIT | 2026-11-01 |
| [`repos/pixel-planets-godot4`](repos/pixel-planets-godot4) | [jacob-winkler/pixel-planets-godot4](https://github.com/jacob-winkler/pixel-planets-godot4) | `migrate-to-godot-4` | [`3082409`](https://github.com/jacob-winkler/pixel-planets-godot4/tree/308240983df76b2bcad95d01b162ee964d53313e) | MIT | 2026-11-01 |
| [`repos/pixelfx`](repos/pixelfx) | [patch-gg/pixelfx](https://github.com/patch-gg/pixelfx) | `main` | [`a841596`](https://github.com/patch-gg/pixelfx/tree/a84159688af3ca37a4be05a0d422b94451b2e24e) | MIT | 2026-11-01 |
| [`pixel-composer/projects`](pixel-composer/projects) | [pixel-composer.com/showcases](https://pixel-composer.com/showcases.html) | — | snapshot (134 projetos) | não declarada (app: MIT) | 2026-11-01 |
| [`gamedev-cheatsheet/site`](gamedev-cheatsheet/site) | [gamedev-cheatsheet.com](https://gamedev-cheatsheet.com/) | — | snapshot | não declarada | 2026-11-01 |

## Alterações em relação à origem

- **PixelSRPG-Forge**
  - Os `.zip` foram extraídos em pastas com o mesmo nome, para usar os assets direto (o zip foi removido).
  - Removido `.idea/` e o caractere invisível (U+200B) do nome `FarmLife`.
  - **Excluídos de propósito:**
    - `Skill_Icons_技能图标/` e `Weapons_武器装备/`: ícones de MapleStory, arte da Nexon.
    - `other_其他素材3万多张/xs004-像素小图标整理【31000多张】.zip` (56 MB): pacote de revendedor, origem desconhecida.
    - Para obtê-los, use o repositório original.
- **gamedev-cheatsheet/site**: espelho estático (HTML, CSS, JS e fontes) para rodar as demos interativas offline. O formulário de newsletter continua apontando para o servidor do autor.
- **pixel-composer**: `.pxc` e miniaturas originais, sem alteração. A mídia ampliada em `pixel-composer/media/` é derivada (upscale 4× nearest-neighbor, gerada por `scripts/pxc_previews.py`). O app (repo de 1,5 GB) não foi vendorizado.
- Demais repositórios: cópia fiel do commit indicado.
