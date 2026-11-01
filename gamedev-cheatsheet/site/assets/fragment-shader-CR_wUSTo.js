import{t as m,m as h}from"./three-D4wYkSYU.js";import{S as f,j as d,V as v,M as p,a as u,k as g,b as y}from"./three-XzraDxM-.js";import"./main-BnLIw7Rw.js";import"./modulepreload-polyfill-B5Qt9EMX.js";const x=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,T=`
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uAspect;
  uniform vec2 uLens;

  // The pattern itself: a couple of warped sine fields, which is the shape of
  // most procedural shader effects.
  vec3 pattern(vec2 uv) {
    vec2 p = uv * vec2(uAspect, 1.0) * 4.4;
    p += 0.45 * vec2(sin(p.y * 1.6 + uTime * 0.7), cos(p.x * 1.5 - uTime * 0.55));
    float v = sin(p.x * 1.8 + uTime * 0.9)
            + sin(p.y * 2.2 - uTime * 0.7)
            + sin((p.x + p.y) * 1.4 + uTime * 0.4)
            + 0.6 * sin((p.x - p.y) * 3.1 - uTime * 1.1);
    v = v / 3.6 * 0.5 + 0.5;

    vec3 col = mix(vec3(0.03, 0.04, 0.09), vec3(0.13, 0.83, 0.93), smoothstep(0.28, 0.88, v));
    col += vec3(0.96, 0.42, 0.70) * pow(smoothstep(0.66, 1.0, v), 2.0) * 1.15;

    // Contour bands: they give the field readable structure and make the
    // magnified fragments obviously distinct from one another.
    float band = abs(fract(v * 6.0) - 0.5);
    col += vec3(0.30, 0.72, 0.92) * smoothstep(0.42, 0.5, band) * 0.28;
    return col;
  }

  void main() {
    vec3 col = pattern(vUv);

    // Magnifier: inside it the pattern is sampled on a coarse lattice, so the
    // per-pixel nature of a fragment shader becomes literal. The lattice is
    // counted in rows of the card height and scaled by the aspect sideways,
    // so every cell is a square, like a real pixel.
    const float RADIUS = 0.19;
    const float ZOOM = 3.5;
    const float FRAGMENTS = 64.0;

    vec2 stretch = vec2(uAspect, 1.0);
    vec2 d = (vUv - uLens) * stretch;
    float r = length(d);
    if (r < RADIUS) {
      vec2 source = (uLens + (vUv - uLens) / ZOOM) * stretch * FRAGMENTS;
      vec2 cell = floor(source);
      vec3 blocky = pattern((cell + 0.5) / FRAGMENTS / stretch);

      // Thin seams between fragments.
      vec2 f = fract(source);
      float seam = min(min(f.x, f.y), min(1.0 - f.x, 1.0 - f.y));
      blocky *= smoothstep(0.0, 0.06, seam) * 0.55 + 0.45;

      // smoothstep is undefined when its first edge is the larger one, so the
      // falling edges are written as 1.0 minus a rising one.
      col = mix(col, blocky, 1.0 - smoothstep(RADIUS - 0.012, RADIUS, r));
    }
    // Rim of the magnifier.
    col = mix(col, vec3(0.9, 0.95, 1.0), 1.0 - smoothstep(0.0, 0.010, abs(r - RADIUS)));

    gl_FragColor = vec4(col, 1.0);
  }
`,S={slug:"fragment-shader",title:"Fragment shader",category:"3d",tagline:"a tiny program per pixel",explanation:"A fragment shader is a small program that the GPU runs once for every pixel a surface covers, to decide that pixel's colour. Each run gets its own inputs, such as the UV coordinate and the time, and thousands of runs happen in parallel. The magnifier in the demo shows the pixels as squares, each one the result of a separate run.",promptBit:"Write this effect as a GLSL fragment shader: compute each pixel's colour from its UV and a uTime uniform, and expose speed, scale and colours as uniforms so they can be tuned without touching the shader code.",createDemo:()=>m(({w:r,h:n})=>{const i=new f,t=new d(-r/n,r/n,1,-1,.1,10);t.position.z=2;const s={uTime:{value:0},uAspect:{value:r/n},uLens:{value:new v(.5,.5)}},l=new p(new u(2,2),new g({vertexShader:x,fragmentShader:T,uniforms:s}));l.frustumCulled=!1,i.add(l);const a=h("each square is one pixel","#eaf6ff",.3);a.position.set(0,-.86,0);const c=new p(new u(a.scale.x+.04,a.scale.y),new y({color:460815,transparent:!0,opacity:.72,depthTest:!1}));return c.position.copy(a.position),c.renderOrder=9,i.add(c,a),{scene:i,camera:t,resize(o,e){s.uAspect.value=o/e,t.left=-o/e,t.right=o/e,t.updateProjectionMatrix()},update(o,e){s.uTime.value=e,s.uLens.value.set(.5+Math.cos(e*.42)*.26,.5+Math.sin(e*.31)*.22)}}})};export{S as fragmentShader};
