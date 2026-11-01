# Game Dev Cheat Sheet — 34 conceitos

Espelho em markdown de <https://gamedev-cheatsheet.com/> (Nicolas Zullo). Cada conceito traz descrição, _prompt bit_ para colar no prompt da IA, quando usar, pseudocódigo, erros comuns e leituras.

## 3D & rendering

| # | Demo | Conceito | Resumo |
|---|---|---|---|
| 01 | <a href="raycasting.md"><img src="media/raycasting.png" width="200" alt="Raycasting"></a> | [Raycasting](raycasting.md) | ask a line what it hits |
| 02 | <a href="normals.md"><img src="media/normals.png" width="200" alt="Normals"></a> | [Normals](normals.md) | which way a surface faces |
| 03 | <a href="level-of-detail.md"><img src="media/level-of-detail.png" width="200" alt="Level of detail"></a> | [Level of detail](level-of-detail.md) | cheap mesh when it is far |
| 04 | <a href="frustum-culling.md"><img src="media/frustum-culling.png" width="200" alt="Frustum culling"></a> | [Frustum culling](frustum-culling.md) | skip what the camera cannot see |
| 05 | <a href="fragment-shader.md"><img src="media/fragment-shader.png" width="200" alt="Fragment shader"></a> | [Fragment shader](fragment-shader.md) | a tiny program per pixel |
| 06 | <a href="billboarding.md"><img src="media/billboarding.png" width="200" alt="Billboarding"></a> | [Billboarding](billboarding.md) | always turn to face the camera |
| 07 | <a href="quaternions.md"><img src="media/quaternions.png" width="200" alt="Quaternions"></a> | [Quaternions](quaternions.md) | rotations that take the short way |
| 08 | <a href="z-fighting.md"><img src="media/z-fighting.png" width="200" alt="Z-fighting"></a> | [Z-fighting](z-fighting.md) | two surfaces fighting for pixels |

## Game feel

| # | Demo | Conceito | Resumo |
|---|---|---|---|
| 09 | <a href="delta-time.md"><img src="media/delta-time.png" width="200" alt="Delta time"></a> | [Delta time](delta-time.md) | move per second, not per frame |
| 10 | <a href="coyote-time.md"><img src="media/coyote-time.png" width="200" alt="Coyote time"></a> | [Coyote time](coyote-time.md) | a late jump that still counts |
| 11 | <a href="easing.md"><img src="media/easing.png" width="200" alt="Easing"></a> | [Easing](easing.md) | bend linear motion into curves |
| 12 | <a href="screen-shake.md"><img src="media/screen-shake.png" width="200" alt="Screen shake"></a> | [Screen shake](screen-shake.md) | one trauma value drives the shake |
| 13 | <a href="squash-and-stretch.md"><img src="media/squash-and-stretch.png" width="200" alt="Squash and stretch"></a> | [Squash and stretch](squash-and-stretch.md) | shape shows speed and impact |
| 14 | <a href="camera-deadzone.md"><img src="media/camera-deadzone.png" width="200" alt="Camera deadzone"></a> | [Camera deadzone](camera-deadzone.md) | let the player move first |
| 15 | <a href="input-buffering.md"><img src="media/input-buffering.png" width="200" alt="Input buffering"></a> | [Input buffering](input-buffering.md) | an early press that still counts |
| 16 | <a href="acceleration-and-friction.md"><img src="media/acceleration-and-friction.png" width="200" alt="Acceleration and friction"></a> | [Acceleration and friction](acceleration-and-friction.md) | speed builds up and bleeds off |
| 17 | <a href="hit-stop.md"><img src="media/hit-stop.png" width="200" alt="Hit stop"></a> | [Hit stop](hit-stop.md) | freeze both fighters on impact |
| 18 | <a href="invincibility-frames.md"><img src="media/invincibility-frames.png" width="200" alt="Invincibility frames"></a> | [Invincibility frames](invincibility-frames.md) | brief safety after each hit |

## Systems

| # | Demo | Conceito | Resumo |
|---|---|---|---|
| 19 | <a href="object-pooling.md"><img src="media/object-pooling.png" width="200" alt="Object pooling"></a> | [Object pooling](object-pooling.md) | allocate once, reuse forever |
| 20 | <a href="state-machine.md"><img src="media/state-machine.png" width="200" alt="Finite state machine"></a> | [Finite state machine](state-machine.md) | one state at a time |
| 21 | <a href="hitbox-hurtbox.md"><img src="media/hitbox-hurtbox.png" width="200" alt="Hitbox and hurtbox"></a> | [Hitbox and hurtbox](hitbox-hurtbox.md) | what hits, what gets hit |
| 22 | <a href="pathfinding.md"><img src="media/pathfinding.png" width="200" alt="A* pathfinding"></a> | [A* pathfinding](pathfinding.md) | search that aims at the goal |
| 23 | <a href="particle-system.md"><img src="media/particle-system.png" width="200" alt="Particle system"></a> | [Particle system](particle-system.md) | one emitter, many short lives |
| 24 | <a href="fixed-timestep.md"><img src="media/fixed-timestep.png" width="200" alt="Fixed timestep"></a> | [Fixed timestep](fixed-timestep.md) | physics on a steady clock |
| 25 | <a href="steering-behaviors.md"><img src="media/steering-behaviors.png" width="200" alt="Steering behaviors"></a> | [Steering behaviors](steering-behaviors.md) | nudge velocity toward a goal |
| 26 | <a href="tunneling.md"><img src="media/tunneling.png" width="200" alt="Tunneling"></a> | [Tunneling](tunneling.md) | fast objects skip through walls |
| 27 | <a href="seeded-noise.md"><img src="media/seeded-noise.png" width="200" alt="Seeded noise"></a> | [Seeded noise](seeded-noise.md) | same seed, same world |

## Performance

| # | Demo | Conceito | Resumo |
|---|---|---|---|
| 28 | <a href="frame-budget.md"><img src="media/frame-budget.png" width="200" alt="Frame budget"></a> | [Frame budget](frame-budget.md) | 16.67 ms, and where it goes |
| 29 | <a href="draw-calls.md"><img src="media/draw-calls.png" width="200" alt="Draw calls"></a> | [Draw calls](draw-calls.md) | one call, four hundred crates |
| 30 | <a href="spatial-partitioning.md"><img src="media/spatial-partitioning.png" width="200" alt="Spatial partitioning"></a> | [Spatial partitioning](spatial-partitioning.md) | only test what is nearby |
| 31 | <a href="overdraw.md"><img src="media/overdraw.png" width="200" alt="Overdraw"></a> | [Overdraw](overdraw.md) | the same pixel, shaded again |
| 32 | <a href="time-slicing.md"><img src="media/time-slicing.png" width="200" alt="Time slicing"></a> | [Time slicing](time-slicing.md) | spread the work across frames |
| 33 | <a href="texture-atlas.md"><img src="media/texture-atlas.png" width="200" alt="Texture atlas"></a> | [Texture atlas](texture-atlas.md) | one texture, one draw call |
| 34 | <a href="chunk-streaming.md"><img src="media/chunk-streaming.png" width="200" alt="Chunk streaming"></a> | [Chunk streaming](chunk-streaming.md) | load only what is near the player |
