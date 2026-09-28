(function(){
  var s = window.SKINS && window.SKINS['pizarron'];
  if(!s) return;
  s.css = `
  :root{
    color-scheme: dark;
    --wood:#6b4a30; --wood-hi:#8a6440; --wood-lo:#4a3020;
    --board:#2c3d33; --board-2:#233129;
    --chalk:#f5f3e7; --muted:#eaeeeb;
    --c0:#8ee7b3; --c0-d:#4f9d70; /* tiza verde menta */
    --c1:#ff8a75; --c1-d:#c2543f; /* tiza roja */
    --c2:#ffd166; --c2-d:#c99c2e; /* tiza amarilla */
    --c3:#8ec9ff; --c3-d:#4f8fcf; /* tiza azul */
    --c4:#ffb37a; --c4-d:#cf7e3f; /* tiza naranja */
    --c5:#c9a0ff; --c5-d:#8f5fcf; /* tiza violeta */
    --c6:#ff8ac2; --c6-d:#cf4f8f; /* tiza rosa */
    --c7:#a0e0d0; --c7-d:#4f9d8a; /* tiza aguamarina */
  }
  html,body{height:100%}
  *,*::before,*::after{box-sizing:border-box}
  body{
    margin:0;
    background:radial-gradient(120% 70% at 50% 0%, var(--wood-hi), var(--wood-lo) 80%);
    color:var(--chalk);
    font-family:"Patrick Hand", system-ui, sans-serif;
    display:flex;justify-content:center;
    padding-inline:16px;
  }
  :root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
  [hidden]{display:none!important}
  .wrap{width:100%;max-width:440px;display:flex;flex-direction:column;align-items:center;gap:18px;padding-block:24px 30px}

  header{text-align:center}
  h1{font-family:"Permanent Marker",cursive;font-weight:400;font-size:clamp(30px,8vw,40px);margin:0;letter-spacing:.02em;
     color:var(--chalk);transform:rotate(-1deg);text-shadow:0 0 1px rgba(245,243,231,.4)}
  .tag{margin:8px 0 0;color:var(--muted);font-size:15px;font-family:"Patrick Hand",cursive}

  .board{position:relative;width:100%;max-width:400px;
    background:
      radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,.05) 50%, transparent 51%),
      radial-gradient(1px 1px at 78% 68%, rgba(255,255,255,.05) 50%, transparent 51%),
      radial-gradient(1.5px 1.5px at 40% 85%, rgba(255,255,255,.04) 50%, transparent 51%),
      radial-gradient(1px 1px at 60% 12%, rgba(255,255,255,.05) 50%, transparent 51%),
      radial-gradient(1px 1px at 25% 55%, rgba(255,255,255,.04) 50%, transparent 51%),
      radial-gradient(1px 1px at 90% 30%, rgba(255,255,255,.05) 50%, transparent 51%),
      linear-gradient(155deg, var(--board), var(--board-2));
    border-radius:8px;padding:18px;
    border:10px solid var(--wood);
    box-shadow:0 16px 0 var(--wood-lo), 0 22px 40px rgba(0,0,0,.4), inset 0 0 30px rgba(0,0,0,.35);
  }

  .pads{position:relative}
  .pads[data-level="4"]{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;gap:12px}
  .pads[data-level="4"] .gridpads{display:contents}
  .pads:not([data-level="4"]){display:flex;flex-direction:column;gap:12px}
  .pads:not([data-level="4"]) .gridpads{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;gap:12px;flex:1}
  .pads:not([data-level="4"]) .hub{position:static;transform:none;width:auto;flex-direction:row;gap:10px;padding:8px 14px;order:-1;aspect-ratio:auto;border-radius:999px}
  .locked .pad{cursor:default}
  .pad{appearance:none;cursor:pointer;position:relative;aspect-ratio:1.05;
    -webkit-tap-highlight-color:transparent;touch-action:manipulation;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;
    background:transparent;border:3px dashed var(--pc);color:var(--pc);
    transition:background .1s, box-shadow .1s, transform .08s}
  .pad[data-i="0"]{--pc:var(--c0)}
  .pad[data-i="1"]{--pc:var(--c1)}
  .pad[data-i="2"]{--pc:var(--c2)}
  .pad[data-i="3"]{--pc:var(--c3)}
  .pad[data-i="4"]{--pc:var(--c4)}
  .pad[data-i="5"]{--pc:var(--c5)}
  .pad[data-i="6"]{--pc:var(--c6)}
  .pad[data-i="7"]{--pc:var(--c7)}
  .pad.shape0{border-radius:255px 15px 225px 15px;transform:rotate(-1deg)}
  .pad.shape1{border-radius:15px 225px 15px 255px;transform:rotate(1deg)}
  .pad.shape2{border-radius:225px 15px 255px 15px;transform:rotate(1deg)}
  .pad.shape3{border-radius:15px 255px 15px 225px;transform:rotate(-1deg)}
  .pad.lit.shape0,.pad.lit.shape1,.pad.lit.shape2,.pad.lit.shape3{transform:scale(1.03) rotate(0deg)}
  .pad .key{position:absolute;top:10px;left:14px;font-family:"Permanent Marker",cursive;font-size:15px;opacity:.85}
  .pad.lit{background:color-mix(in srgb, var(--pc) 22%, transparent);border-style:solid;
    box-shadow:0 0 18px color-mix(in srgb, var(--pc) 55%, transparent), inset 0 0 24px color-mix(in srgb, var(--pc) 35%, transparent);
    transform:scale(1.03) rotate(0deg)}
  .pad:focus-visible{outline:3px solid var(--chalk);outline-offset:3px}

  .hub{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotate(-2deg);
    width:32%;aspect-ratio:1;border-radius:50%;
    background:var(--board-2);border:3px solid var(--chalk);
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;pointer-events:none}
  .lcd{font-family:"Permanent Marker",cursive;font-weight:400;font-variant-numeric:tabular-nums;
    font-size:clamp(20px,6vw,26px);color:var(--chalk);line-height:1}
  .lcd.bad{color:var(--c1)}
  .hub small{font-size:10px;font-family:"Patrick Hand",cursive;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}

  .status{min-height:1.5em;font-size:17px;text-align:center;color:var(--chalk);font-family:"Patrick Hand",cursive}
  .controls{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center}
  .btn{appearance:none;border:2px solid var(--chalk);cursor:pointer;font:16px "Patrick Hand",cursive;letter-spacing:.02em;
    padding:10px 22px;border-radius:255px 15px 225px 15px;background:transparent;color:var(--chalk)}
  .btn:active{transform:translateY(1px) scale(.98)}
  .btn:focus-visible,.seg button:focus-visible,.toggle input:focus-visible+span{outline:2px solid var(--c3);outline-offset:2px}
  .seg{display:inline-flex;border:2px solid var(--muted);border-radius:999px;padding:3px;gap:2px}
  .seg button{appearance:none;border:0;background:transparent;color:var(--muted);font:15px "Patrick Hand",cursive;padding:8px 12px;border-radius:999px;cursor:pointer}
  .seg button[aria-pressed="true"]{background:var(--chalk);color:var(--board-2)}
  .toggle{display:inline-flex;align-items:center;gap:8px;color:var(--muted);font-size:15px;font-family:"Patrick Hand",cursive;cursor:pointer;user-select:none}
  .toggle input{position:absolute;opacity:0;width:1px;height:1px}
  .toggle span{width:36px;height:20px;border-radius:999px;background:transparent;border:2px solid var(--muted);position:relative;transition:border-color .15s}
  .toggle span::after{content:"";position:absolute;left:2px;top:1px;width:12px;height:12px;border-radius:50%;background:var(--muted);transition:transform .15s, background .15s}
  .toggle input:checked+span{border-color:var(--c1)}
  .toggle input:checked+span::after{transform:translateX(16px);background:var(--c1)}

  .stats{display:flex;gap:30px;justify-content:center;font-variant-numeric:tabular-nums;font-family:"Patrick Hand",cursive}
  .stat{text-align:center}
  .stat b{display:block;font-family:"Permanent Marker",cursive;font-weight:400;font-size:24px;color:var(--c2)}
  .stat span{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}

  details{width:100%;color:var(--muted);font-size:15px;line-height:1.6;font-family:"Patrick Hand",cursive;
    background:rgba(0,0,0,.15);border:2px dashed var(--muted);border-radius:12px;padding:12px 16px}
  summary{cursor:pointer;color:var(--chalk);font-weight:400}
  details ul{padding-left:20px;margin:8px 0 0}
  .hist-list{margin-top:8px;display:flex;flex-direction:column;gap:6px}
  .hist-row{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:2px 10px;font-size:13px;padding:6px 0;border-bottom:1px solid rgba(127,127,127,.18)}
  .hist-row:last-child{border-bottom:0}
  .hist-date{color:var(--muted);flex:1 1 100%;font-size:12px}
  .hist-round{font-weight:700}
  .hist-acc{color:var(--muted);font-size:12px}
  .hist-skin{color:var(--muted);font-size:12px;margin-left:auto}
  .hist-empty{color:var(--muted);font-size:13px;margin:6px 0 0}
  .hist-clear{margin-top:10px;appearance:none;border:1px solid var(--muted);background:transparent;color:var(--muted);font-size:12px;padding:7px 14px;border-radius:6px;cursor:pointer}
  .ach-count{font-size:11px;color:var(--muted);margin-left:8px;font-weight:400}
  .ach-list{margin-top:8px;display:flex;flex-direction:column;gap:8px}
  .ach-row{display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid rgba(127,127,127,.18);opacity:.45}
  .ach-row.unlocked{opacity:1}
  .ach-row:last-child{border-bottom:0}
  .ach-badge{width:26px;height:26px;border-radius:50%;border:2px solid var(--muted);display:flex;align-items:center;justify-content:center;
    font-size:13px;font-weight:700;color:var(--muted);flex-shrink:0}
  .ach-row.unlocked .ach-badge{border-color:var(--c2);color:var(--c2);background:color-mix(in srgb, var(--c2) 18%, transparent)}
  .ach-info{flex:1}
  .ach-title{font-weight:700;font-size:13px;display:block}
  .ach-desc{font-size:12px;color:var(--muted);display:block;margin-top:1px}
  .chart-wrap{margin-top:8px}
  #chartSvg{width:100%;height:140px;display:block;overflow:visible}
  .chart-empty{color:var(--muted);font-size:13px;margin:6px 0 0}
  .chart-axis{stroke:var(--muted);stroke-width:1;opacity:.35}
  .chart-line{fill:none;stroke:var(--c2);stroke-width:2}
  .chart-dot{fill:var(--c2)}
  .chart-label{fill:var(--muted);font-size:8px;font-family:inherit}
  footer{font-size:13px;color:var(--muted);font-family:"Patrick Hand",cursive}
  @media (prefers-reduced-motion: reduce){ .pad,.toggle span::after{transition:none} .pad.lit{transform:none} }
  .pad .cbsym, .petal .cbsym{position:absolute;inset:0;display:none;align-items:center;justify-content:center;pointer-events:none;z-index:1}
  .cb-on .pad .cbsym, .cb-on .petal .cbsym{display:flex}
  .cbsym svg{width:36%;height:36%;fill:rgba(255,255,255,.92);stroke:rgba(0,0,0,.55);stroke-width:1.4px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.45))}
  .pad.lit .cbsym svg, .petal.lit .cbsym svg{fill:rgba(0,0,0,.6);stroke:rgba(255,255,255,.92)}
  .hc-on{--muted: var(--ink);}
  .hc-on .pad,.hc-on .petal{outline:2px solid var(--ink);outline-offset:2px}
  .rm-on *,.rm-on *::before,.rm-on *::after{animation-duration:.001s!important;animation-iteration-count:1!important;transition-duration:.001s!important;scroll-behavior:auto!important}
  .rm-on .pad.lit,.rm-on .petal.lit{transform:none!important}
  .daily-info{font-size:12.5px;color:var(--muted);text-align:center;margin:0}
  .daily-info b{color:var(--ink)}
  .seg button:disabled{opacity:.4;cursor:not-allowed}
  .toggle input:disabled+span{opacity:.4;cursor:not-allowed}
  .stats-global{display:flex;flex-wrap:wrap;gap:14px 24px;justify-content:center}
  #gsFavorite{font-size:15px!important;line-height:1.25;word-break:break-word;max-width:150px}
  .speed-ctrl{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:13px;color:var(--muted);cursor:pointer}
  .speed-ctrl input[type=range]{width:130px;accent-color:var(--c1)}
  .speed-ctrl b{color:var(--ink)}
  .toast-wrap{position:fixed;top:calc(14px + env(safe-area-inset-top,0px));left:50%;transform:translateX(-50%);z-index:50;display:flex;flex-direction:column;gap:8px;align-items:center;pointer-events:none;width:100%;padding:0 16px}
  .toast{background:rgba(15,15,22,.92);color:#f5f5fa;font-family:inherit;font-weight:700;font-size:13.5px;padding:10px 18px;border-radius:999px;box-shadow:0 8px 24px rgba(0,0,0,.35);opacity:0;transform:translateY(-10px);transition:opacity .25s ease, transform .25s ease;max-width:340px;text-align:center;border:1px solid rgba(255,255,255,.14)}
  .toast.show{opacity:1;transform:translateY(0)}
  .toast.record{color:var(--c2, #ffd54f)}
  .toast.achievement{color:var(--c1, #5ec8ff)}
  .tour-replay{display:inline-flex;align-items:center;gap:6px;appearance:none;border:1px solid var(--muted);background:transparent;color:var(--ink);font-family:inherit;font-weight:700;font-size:12.5px;padding:8px 14px;border-radius:999px;cursor:pointer;margin:4px 0 10px}
  .tour-replay:hover{border-color:var(--c1)}
  .tour-overlay{position:fixed;inset:0;z-index:60;background:rgba(6,6,10,.6)}
  .tour-spot{position:fixed;border-radius:16px;border:2px solid var(--c1, #5ec8ff);box-shadow:0 0 0 4px rgba(255,255,255,.12), 0 0 24px var(--c1, #5ec8ff);transition:left .25s ease, top .25s ease, width .25s ease, height .25s ease;pointer-events:none;display:none}
  .tour-tip{position:fixed;width:260px;max-width:calc(100vw - 32px);background:rgba(15,15,22,.96);color:#f5f5fa;border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:14px 16px;font-family:inherit;font-size:14px;line-height:1.45;box-shadow:0 12px 30px rgba(0,0,0,.4);transition:left .25s ease, top .25s ease}
  .tour-text{margin:0 0 12px}
  .tour-foot{display:flex;flex-direction:column;gap:10px}
  .tour-count{font-size:12px;color:#b8bcca;font-weight:700;text-align:center;white-space:nowrap}
  .tour-btns{display:flex;gap:6px}
  .tour-btns button{appearance:none;border:0;cursor:pointer;font-family:inherit;font-weight:700;font-size:12.5px;padding:7px 12px;border-radius:999px}
  .tour-skip{background:transparent;color:#b8bcca}
  .tour-prev{background:transparent;color:#f5f5fa;border:1px solid rgba(255,255,255,.25)!important}
  .tour-next{background:var(--c1, #5ec8ff);color:#0a0a12}
  .confirm-overlay{position:fixed;inset:0;z-index:65;background:rgba(6,6,10,.65);display:flex;align-items:center;justify-content:center;padding:16px}
  .confirm-card{width:100%;max-width:300px;background:rgba(15,15,22,.98);color:#f5f5fa;border:1px solid rgba(255,255,255,.14);border-radius:16px;padding:20px 18px;text-align:center;font-family:inherit;box-shadow:0 16px 40px rgba(0,0,0,.45)}
  .confirm-text{margin:0 0 16px;font-size:14.5px;line-height:1.5}
  .confirm-btns{display:flex;gap:10px}
  .confirm-btns button{flex:1;appearance:none;border:0;cursor:pointer;font-family:inherit;font-weight:700;font-size:13.5px;padding:11px;border-radius:999px}
  .confirm-cancel{background:transparent;color:#f5f5fa;border:1px solid rgba(255,255,255,.25)!important}
  .confirm-ok{background:#ff5566;color:#0a0a12}
  .pause-overlay{position:fixed;inset:0;z-index:64;background:rgba(6,6,10,.75);display:flex;align-items:center;justify-content:center;padding:16px}
  .pause-card{width:100%;max-width:300px;background:rgba(15,15,22,.98);color:#f5f5fa;border:1px solid rgba(255,255,255,.14);border-radius:18px;padding:26px 20px 20px;text-align:center;font-family:inherit;box-shadow:0 16px 40px rgba(0,0,0,.45)}
  .pause-icon{font-size:34px;margin:0 0 6px}
  .pause-text{margin:0 0 6px;font-size:19px;font-weight:800}
  .pause-sub{margin:0 0 18px;font-size:13px;color:#b8bcca;line-height:1.5}
  .pause-resume{display:block;width:100%;appearance:none;border:0;cursor:pointer;font-family:inherit;font-weight:800;font-size:15px;padding:13px;border-radius:999px;background:var(--c1, #5ec8ff);color:#0a0a12;margin-bottom:10px}
  .pause-exit{appearance:none;border:0;background:transparent;color:#b8bcca;font-family:inherit;font-weight:700;font-size:12.5px;cursor:pointer;padding:6px}
  .summary-overlay{position:fixed;inset:0;z-index:62;background:rgba(6,6,10,.75);display:flex;align-items:center;justify-content:center;padding:16px}
  .summary-card{width:100%;max-width:320px;background:rgba(15,15,22,.98);color:#f5f5fa;border:1px solid rgba(255,255,255,.14);border-radius:18px;padding:24px 20px 20px;text-align:center;font-family:inherit;box-shadow:0 16px 40px rgba(0,0,0,.45)}
  .summary-icon{font-size:36px;margin:0 0 6px;line-height:1}
  .summary-title{margin:0 0 16px;font-size:18px;font-weight:800;line-height:1.35}
  .summary-body{display:flex;flex-direction:column;gap:10px;margin-bottom:18px}
  .summary-row{display:flex;align-items:center;justify-content:space-between;gap:12px;background:rgba(255,255,255,.06);border-radius:12px;padding:10px 14px;font-size:13.5px}
  .summary-row span{color:#b8bcca}
  .summary-row b{font-size:15px;color:#f5f5fa;font-weight:800}
  .summary-row.highlight b{color:var(--c1, #5ec8ff)}
  .summary-close{display:block;width:100%;appearance:none;border:0;cursor:pointer;font-family:inherit;font-weight:800;font-size:15px;padding:13px;border-radius:999px;background:var(--c1, #5ec8ff);color:#0a0a12}
`;
  s.html = `<div class="wrap">
  <div class="toast-wrap" id="toastWrap" aria-live="polite"></div>
  <header>
    <h1>Pizarrón Vivo</h1>
    <p class="tag">Mirá la tiza y repetí la secuencia</p>
  </header>

  <div class="board locked" id="device">
    <div class="pads" id="padsgrid" data-level="4">
      <div class="gridpads" id="gridpads"></div>
      <div class="hub" aria-hidden="true">
        <div class="lcd" id="lcd">--</div>
        <small>ronda</small>
      </div>
    </div>
  </div>

  <div class="status" id="status" role="status" aria-live="polite">Tocá «Jugar» para empezar</div>
  <p class="daily-info" id="dailyInfo" hidden></p>
  <p class="daily-info" id="duoInfo" hidden></p>

  <div class="controls">
    <button class="btn" id="start">Jugar</button>
    <div class="seg" role="group" aria-label="Modo de juego" id="mode">
      <button data-m="goal" aria-pressed="true">Meta</button>
      <button data-m="time">Contrarreloj</button>
      <button data-m="daily">Desafío diario</button>
      <button data-m="twoplayer">2 jugadores</button>
    </div>
    <div class="seg" role="group" aria-label="Meta de rondas" id="goal">
      <button data-g="8">8</button>
      <button data-g="14" aria-pressed="true">14</button>
      <button data-g="20">20</button>
      <button data-g="31">31</button>
    </div>
    <div class="seg" role="group" aria-label="Duración" id="timeseg" hidden>
      <button data-t="30">30s</button>
      <button data-t="60" aria-pressed="true">60s</button>
      <button data-t="90">90s</button>
    </div>
    <div class="seg" role="group" aria-label="Nivel de colores" id="level">
      <button data-n="4" aria-pressed="true">4</button>
      <button data-n="6">6</button>
      <button data-n="8">8</button>
    </div>
    <label class="toggle" for="strict"><input type="checkbox" id="strict"><span></span>Estricto</label>
    <label class="toggle" for="reverse"><input type="checkbox" id="reverse"><span></span>Orden inverso</label>
    <label class="toggle" for="mute"><input type="checkbox" id="mute"><span></span>Sin sonido</label>
    <label class="toggle" for="audioonly"><input type="checkbox" id="audioonly"><span></span>Solo sonido</label>
    <label class="toggle" for="colorblind"><input type="checkbox" id="colorblind"><span></span>Modo daltónico</label>
    <label class="toggle" for="reducemotion"><input type="checkbox" id="reducemotion"><span></span>Reducir animaciones</label>
    <label class="toggle" for="highcontrast"><input type="checkbox" id="highcontrast"><span></span>Alto contraste</label>
    <label class="speed-ctrl" for="speed"><span>Velocidad: <b id="speedLabel">Normal</b></span><input type="range" id="speed" min="1" max="5" step="1" value="3"></label>
  </div>

  <div class="stats">
    <div class="stat"><b id="best">0</b><span>Récord</span></div>
    <div class="stat"><b id="goalv">14</b><span id="goallabel">Meta</span></div>
    <div class="stat"><b id="accv">100%</b><span>Precisión</span></div>
  </div>

  <button class="btn" id="shareBtn" type="button">Compartir récord</button>

  <details>
    <summary>Cómo se juega</summary>
    <button class="tour-replay" id="tourLink" type="button">&#9654; Ver tutorial guiado</button>
    <ul>
      <li>El pizarrón dibuja una secuencia de tizas de color. Repetila en el mismo orden.</li>
      <li>Cada ronda agrega un color nuevo y, cada tanto, acelera.</li>
      <li>Si te equivocás, se repite la secuencia. En modo <b>Estricto</b>, volvés a cero.</li>
      <li>Con <b>Orden inverso</b>, repetís la secuencia empezando por el último color.</li>
      <li>Con <b>Solo sonido</b> practicás de oído: el sistema no ilumina la secuencia. Con <b>Sin sonido</b> jugás en silencio.</li>
      <li>Llegá a la meta elegida para ganar. Teclado: Q W A S (o 1 2 3 4).</li>
      <li>Elegí <b>Nivel</b> 6 u 8 colores para un desafío experto (no se puede cambiar con la partida en curso).</li>
      <li>Activá <b>Modo daltónico</b> para ver un símbolo distinto en cada botón, además del color.</li>
      <li>Activá <b>Reducir animaciones</b> o <b>Alto contraste</b> para adaptar la experiencia a tus necesidades.</li>
      <li>Elegí <b>Desafío diario</b> para enfrentar la misma secuencia que todos los demás jugadores ese día. ¡Volvé mañana por un desafío nuevo!</li>
      <li>Elegí <b>2 jugadores</b> para jugar por turnos en el mismo celular: cada uno enfrenta la misma secuencia y gana quien llegue más lejos.</li>
      <li>Ajustá la <b>Velocidad</b> para que la secuencia acelere más lento o más rápido a medida que suben las rondas.</li>
      <li>La <b>Precisión</b> mide qué porcentaje de tus intentos fueron aciertos, no solo hasta qué ronda llegaste.</li>
    </ul>
  </details>

  <details id="historyBox">
    <summary>Historial de partidas</summary>
    <div class="hist-list" id="histList"><p class="hist-empty">Todavía no jugaste ninguna partida.</p></div>
    <button class="hist-clear" id="histClear" type="button" hidden>Borrar historial</button>
  </details>

  <details id="achievementsBox">
    <summary>Logros <span class="ach-count" id="achCount">0/12</span></summary>
    <div class="ach-list" id="achList"></div>
  </details>

  <details id="chartBox">
    <summary>Evolución del récord</summary>
    <div class="chart-wrap" id="chartWrap">
      <svg id="chartSvg" viewBox="0 0 320 140" preserveAspectRatio="none" role="img" aria-label="Gráfico de evolución del récord"></svg>
      <p class="chart-empty" id="chartEmpty" hidden>Todavía no hay suficientes partidas para graficar.</p>
    </div>
  </details>

  <details id="globalStatsBox">
    <summary>Resumen global</summary>
    <div class="stats-global" id="globalStats">
      <div class="stat"><b id="gsTotal">0</b><span>Partidas totales</span></div>
      <div class="stat"><b id="gsFavorite">—</b><span>Favorito</span></div>
      <div class="stat"><b id="gsStreak">0</b><span>Racha (días)</span></div>
      <div class="stat"><b id="gsAccuracy">—</b><span>Precisión global</span></div>
    </div>
  </details>

  <footer>Desarrollado por @sebranda</footer>
  <div class="tour-overlay" id="tourOverlay" hidden>
    <div class="tour-spot" id="tourSpot"></div>
    <div class="tour-tip" id="tourTip">
      <p class="tour-text" id="tourText"></p>
      <div class="tour-foot">
        <span class="tour-count" id="tourCount"></span>
        <div class="tour-btns">
          <button class="tour-skip" id="tourSkip" type="button">Saltar</button>
          <button class="tour-prev" id="tourPrev" type="button">Atrás</button>
          <button class="tour-next" id="tourNext" type="button">Siguiente</button>
        </div>
      </div>
    </div>
  </div>
  <div class="confirm-overlay" id="confirmOverlay" hidden>
    <div class="confirm-card">
      <p class="confirm-text" id="confirmText"></p>
      <div class="confirm-btns">
        <button class="confirm-cancel" id="confirmCancel" type="button">Cancelar</button>
        <button class="confirm-ok" id="confirmOk" type="button">Confirmar</button>
      </div>
    </div>
  </div>
  <div class="pause-overlay" id="pauseOverlay" hidden>
    <div class="pause-card">
      <p class="pause-icon">⏸</p>
      <p class="pause-text">Pausado</p>
      <p class="pause-sub">Volvé cuando quieras: la secuencia se repite desde el principio.</p>
      <button class="pause-resume" id="pauseResume" type="button">▶ Continuar</button>
      <button class="pause-exit" id="pauseExit" type="button">Salir al menú</button>
    </div>
  </div>
  <div class="summary-overlay" id="summaryOverlay" hidden>
    <div class="summary-card">
      <p class="summary-icon" id="summaryIcon"></p>
      <p class="summary-title" id="summaryTitle"></p>
      <div class="summary-body" id="summaryBody"></div>
      <button class="summary-close" id="summaryClose" type="button">Cerrar</button>
    </div>
  </div>
</div>`;
  s.init = function(signal) {
  let pads = [];
  const gridpads = document.getElementById('gridpads');
  const padsGrid = document.getElementById('padsgrid');
  const device = document.getElementById('device');
  const lcd = document.getElementById('lcd');
  const statusEl = document.getElementById('status');
  const startBtn = document.getElementById('start');
  const strictEl = document.getElementById('strict');
  const reverseEl = document.getElementById('reverse');
  const muteEl = document.getElementById('mute');
  const audioOnlyEl = document.getElementById('audioonly');
  muteEl.addEventListener('change', () => { if(muteEl.checked && audioOnlyEl.checked) audioOnlyEl.checked = false; });
  audioOnlyEl.addEventListener('change', () => { if(audioOnlyEl.checked && muteEl.checked) muteEl.checked = false; });
  const colorblindEl = document.getElementById('colorblind');
  let cbPref = false;
  try{ cbPref = localStorage.getItem('memorion-colorblind') === '1'; }catch(e){}
  colorblindEl.checked = cbPref;
  if(cbPref) device.classList.add('cb-on');
  colorblindEl.addEventListener('change', () => {
    device.classList.toggle('cb-on', colorblindEl.checked);
    try{ localStorage.setItem('memorion-colorblind', colorblindEl.checked ? '1' : '0'); }catch(e){}
  });
  const reduceMotionEl = document.getElementById('reducemotion');
  const highContrastEl = document.getElementById('highcontrast');
  let rmPref = false, hcPref = false;
  try{ rmPref = localStorage.getItem('memorion-reduce-motion') === '1'; }catch(e){}
  try{ hcPref = localStorage.getItem('memorion-high-contrast') === '1'; }catch(e){}
  reduceMotionEl.checked = rmPref;
  highContrastEl.checked = hcPref;
  if(rmPref) document.documentElement.classList.add('rm-on');
  if(hcPref) document.documentElement.classList.add('hc-on');
  reduceMotionEl.addEventListener('change', () => {
    document.documentElement.classList.toggle('rm-on', reduceMotionEl.checked);
    try{ localStorage.setItem('memorion-reduce-motion', reduceMotionEl.checked ? '1' : '0'); }catch(e){}
  });
  highContrastEl.addEventListener('change', () => {
    document.documentElement.classList.toggle('hc-on', highContrastEl.checked);
    try{ localStorage.setItem('memorion-high-contrast', highContrastEl.checked ? '1' : '0'); }catch(e){}
  });
  const bestEl = document.getElementById('best');
  const goalV = document.getElementById('goalv');
  const accEl = document.getElementById('accv');
  const goalBtns = [...document.querySelectorAll('#goal button')];
  const modeBtns = [...document.querySelectorAll('#mode button')];
  const timeBtns = [...document.querySelectorAll('#timeseg button')];
  const timeSegEl = document.getElementById('timeseg');
  const goalSegEl = document.getElementById('goal');
  const goalLabel = document.getElementById('goallabel');
  const levelBtns = [...document.querySelectorAll('#level button')];

  const FREQS = [415.3, 310, 252, 209, 554.4, 466.2, 349.2, 622.3];
  const KEYS = {q:0,w:1,a:2,s:3,'1':0,'2':1,'3':2,'4':3,'5':4,'6':5,'7':6,'8':7};
  const HIST_KEY = 'memorion-history';
  const SKIN_NAME = 'Pizarrón Vivo';
  const ALL_SKINS = ['Ne\u00f3n Cuadrante','Botonera Eco','Secuencia Cuatro','Ronda Silvestre','Terminal Mnemo','Pizarr\u00f3n Vivo','\u00d3rbita C\u00f3smica','Dial Retro','Vidrio Hologr\u00e1fico'];
  const ACHIEVEMENTS = [
    { id:'first_game', title:'Primeros pasos', desc:'Jug\u00e1 tu primera partida.', check: list => list.length >= 1 },
    { id:'ten_games', title:'Diez partidas', desc:'Jug\u00e1 10 partidas en total.', check: list => list.length >= 10 },
    { id:'fifty_games', title:'Maratonista', desc:'Jug\u00e1 50 partidas en total.', check: list => list.length >= 50 },
    { id:'all_skins', title:'Coleccionista', desc:'Gan\u00e1 una partida con los 9 dise\u00f1os.', check: list => { const won = new Set(list.filter(e => e.won).map(e => e.skin)); return ALL_SKINS.every(s => won.has(s)); } },
    { id:'strict_win', title:'Modo estricto', desc:'Gan\u00e1 una partida en modo Estricto.', check: list => list.some(e => e.won && e.strict) },
    { id:'reverse_win', title:'Memoria inversa', desc:'Gan\u00e1 una partida con Orden inverso.', check: list => list.some(e => e.won && e.reverse) },
    { id:'audioonly_win', title:'O\u00eddo absoluto', desc:'Gan\u00e1 una partida en modo Solo sonido.', check: list => list.some(e => e.won && e.audioOnly) },
    { id:'expert_win', title:'Modo experto', desc:'Gan\u00e1 una partida con 8 colores.', check: list => list.some(e => e.won && e.numColors === 8) },
    { id:'timeattack_15', title:'Contra el reloj', desc:'Alcanz\u00e1 15 rondas en Contrarreloj.', check: list => list.some(e => e.mode === 'time' && e.round >= 15) },
    { id:'streak_20', title:'Racha perfecta', desc:'Alcanz\u00e1 20 rondas en una sola partida.', check: list => list.some(e => e.round >= 20) },
    { id:'daily_win', title:'Desaf\u00edo del d\u00eda', desc:'Gan\u00e1 el desaf\u00edo diario en cualquier dise\u00f1o.', check: list => list.some(e => e.won && e.mode === 'daily') },
    { id:'twoplayer_play', title:'Cara a cara', desc:'Jug\u00e1 una partida en modo Dos jugadores.', check: list => list.some(e => e.mode === 'twoplayer') }
  ];
  const achListEl = document.getElementById('achList');
  const achCountEl = document.getElementById('achCount');
  const chartSvgEl = document.getElementById('chartSvg');
  const chartEmptyEl = document.getElementById('chartEmpty');
  const histListEl = document.getElementById('histList');
  const histClearEl = document.getElementById('histClear');
  const LABELS = ['Tiza verde','Tiza roja','Tiza amarilla','Tiza azul','Tiza naranja','Tiza violeta','Tiza rosa','Tiza aguamarina'];
  const KEYHINT = ['Q','W','A','S','5','6','7','8'];

  let ctx = null, seq = [], step = 0, accepting = false, running = false, goal = 14, token = 0;
  let mode = 'goal', timeLimit = 60, timeLeft = 0, timerInterval = null, peak = 0;
  let numColors = 4;
  const DAILY_GOAL = 20;
  const dailyInfoEl = document.getElementById('dailyInfo');
  let dailyRng = null, preDaily = null;
  const duoInfoEl = document.getElementById('duoInfo');
  const gsTotalEl = document.getElementById('gsTotal');
  const gsFavoriteEl = document.getElementById('gsFavorite');
  const gsStreakEl = document.getElementById('gsStreak');
  const gsAccuracyEl = document.getElementById('gsAccuracy');
  let duoRng = null, duoPhase = 'p1', duoSeedValue = 0, duoP1Score = 0;
  let hits = 0, misses = 0;
  function updateAcc(){
    const total = hits + misses;
    const pct = total > 0 ? Math.round(hits / total * 100) : 100;
    if(accEl) accEl.textContent = pct + '%';
    return pct;
  }
  function isForcedMode(m){ return m === 'daily' || m === 'twoplayer'; }
  let best = 0;
  let recordBrokenThisRun = false;
  try { best = +localStorage.getItem('pizarron-vivo-best') || 0; } catch(e){}
  bestEl.textContent = best;

  function cbSymbolHTML(i){
    const shapes = [
      '<circle cx="12" cy="12" r="8"/>',
      '<rect x="4" y="4" width="16" height="16" rx="2"/>',
      '<polygon points="12,3 21,20 3,20"/>',
      '<polygon points="12,2 22,12 12,22 2,12"/>',
      '<polygon points="12,2 14.9,8.6 22,9.3 16.7,13.9 18.2,21 12,17.3 5.8,21 7.3,13.9 2,9.3 9.1,8.6"/>',
      '<path d="M9 4h6v5h5v6h-5v5H9v-5H4v-6h5z"/>',
      '<polygon points="12,2 20,7 20,17 12,22 4,17 4,7"/>',
      '<polygon points="12,2 21,8.5 17.5,19.5 6.5,19.5 3,8.5"/>'
    ];
    return `<span class="cbsym" aria-hidden="true"><svg viewBox="0 0 24 24">${shapes[i % shapes.length]}</svg></span>`;
  }
  function buildPads(){
    gridpads.innerHTML = '';
    for(let i=0;i<numColors;i++){
      const b = document.createElement('button');
      b.className = 'pad shape' + (i%4);
      b.dataset.i = i; b.setAttribute('aria-label', LABELS[i]);
      b.innerHTML = `<span class="key">${KEYHINT[i]}</span>`;
      b.innerHTML += cbSymbolHTML(i);
      gridpads.appendChild(b);
    }
    pads = [...gridpads.querySelectorAll('.pad')];
    pads.forEach(p => p.addEventListener('pointerdown', e => { e.preventDefault(); press(+p.dataset.i); }));
    pads.forEach(p => p.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){ e.preventDefault(); press(+p.dataset.i); } }));
  }
  buildPads();
  levelBtns.forEach(b => b.addEventListener('click', () => {
    if(running) return;
    levelBtns.forEach(x => x.setAttribute('aria-pressed', x===b ? 'true' : 'false'));
    numColors = +b.dataset.n;
    padsGrid.dataset.level = numColors;
    buildPads();
  }));

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  function audio(){
    if(!ctx){ try{ ctx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} }
    if(ctx && ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function vibrate(pattern){
    try{ if(navigator.vibrate) navigator.vibrate(pattern); }catch(e){}
  }
  function mulberry32(seed){
    return function(){
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function hashStr(s){
    let h = 0;
    for(let i=0;i<s.length;i++){ h = Math.imul(31, h) + s.charCodeAt(i) | 0; }
    return h >>> 0;
  }
  function todayStr(){
    const d = new Date();
    return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  }
  function sameLocalDay(ts, dayStr){
    const d = new Date(ts);
    return (d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')) === dayStr;
  }
  const STATS_KEY = 'memorion-stats';
  function dateStr(d){
    return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  }
  function loadStats(){
    try{
      const s = JSON.parse(localStorage.getItem(STATS_KEY));
      if(s && typeof s === 'object') return { totalGames:+s.totalGames||0, bySkin:s.bySkin||{}, playDays:Array.isArray(s.playDays)?s.playDays:[], totalHits:+s.totalHits||0, totalMisses:+s.totalMisses||0 };
    }catch(e){}
    return { totalGames:0, bySkin:{}, playDays:[], totalHits:0, totalMisses:0 };
  }
  function saveStats(s){
    try{ localStorage.setItem(STATS_KEY, JSON.stringify(s)); }catch(e){}
  }
  function recordGlobalStat(hitCount, missCount){
    const s = loadStats();
    s.totalGames++;
    s.bySkin[SKIN_NAME] = (s.bySkin[SKIN_NAME]||0) + 1;
    s.totalHits = (s.totalHits||0) + (hitCount||0);
    s.totalMisses = (s.totalMisses||0) + (missCount||0);
    const today = todayStr();
    if(s.playDays[s.playDays.length-1] !== today){
      s.playDays.push(today);
      if(s.playDays.length > 400) s.playDays = s.playDays.slice(-400);
    }
    saveStats(s);
  }
  function computeStreak(playDays){
    if(!playDays.length) return 0;
    const set = new Set(playDays);
    const oneDay = 86400000;
    let cursor = new Date();
    let cursorStr = dateStr(cursor);
    if(!set.has(cursorStr)){
      cursor = new Date(cursor.getTime() - oneDay);
      cursorStr = dateStr(cursor);
    }
    let streak = 0;
    while(set.has(cursorStr)){
      streak++;
      cursor = new Date(cursor.getTime() - oneDay);
      cursorStr = dateStr(cursor);
    }
    return streak;
  }
  function renderGlobalStats(){
    const s = loadStats();
    if(gsTotalEl) gsTotalEl.textContent = s.totalGames;
    if(gsFavoriteEl){
      let fav = '—', favCount = 0;
      Object.keys(s.bySkin).forEach(k => { if(s.bySkin[k] > favCount){ favCount = s.bySkin[k]; fav = k; } });
      gsFavoriteEl.textContent = fav;
    }
    if(gsStreakEl) gsStreakEl.textContent = computeStreak(s.playDays);
    if(gsAccuracyEl){
      const totalAtt = (s.totalHits||0) + (s.totalMisses||0);
      gsAccuracyEl.textContent = totalAtt > 0 ? Math.round(s.totalHits/totalAtt*100) + '%' : '—';
    }
  }
  function tone(freq, ms, type='triangle', vol=.2){
    if(muteEl.checked) return;
    const a = audio(); if(!a) return;
    const o = a.createOscillator(), g = a.createGain(), t = a.currentTime;
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + .012);
    g.gain.setValueAtTime(vol, t + ms/1000 - .03);
    g.gain.linearRampToValueAtTime(0, t + ms/1000);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + ms/1000 + .02);
  }

  async function flash(i, ms, visual=true){
    if(visual) pads[i].classList.add('lit');
    tone(FREQS[i], ms);
    vibrate(14);
    await sleep(ms);
    if(visual) pads[i].classList.remove('lit');
  }

  const SPEED_LABELS = {1:'Muy lenta',2:'Lenta',3:'Normal',4:'Rápida',5:'Muy rápida'};
  const SPEED_MULT = {1:0.5, 2:0.75, 3:1, 4:1.5, 5:2};
  const speedEl = document.getElementById('speed');
  const speedLabelEl = document.getElementById('speedLabel');
  let speedLevel = 3;
  try{ const sp = +localStorage.getItem('memorion-speed'); if(sp>=1 && sp<=5) speedLevel = sp; }catch(e){}
  speedEl.value = speedLevel;
  speedLabelEl.textContent = SPEED_LABELS[speedLevel];
  speedEl.addEventListener('input', () => {
    speedLevel = +speedEl.value;
    speedLabelEl.textContent = SPEED_LABELS[speedLevel];
    try{ localStorage.setItem('memorion-speed', String(speedLevel)); }catch(e){}
  });
  function tempo(){
    const n = seq.length;
    const mult = SPEED_MULT[speedLevel] || 1;
    const rampRounds = 16 / mult;
    const t = Math.min(1, (n-1) / rampRounds);
    const on = Math.round(420 - t*(420-170));
    const gap = Math.round(80 - t*(80-45));
    return {on, gap};
  }

  const toastWrapEl = document.getElementById('toastWrap');
  function showToast(msg, kind){
    if(!toastWrapEl) return;
    const el = document.createElement('div');
    el.className = 'toast' + (kind ? ' ' + kind : '');
    el.textContent = msg;
    toastWrapEl.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 300);
    }, 2600);
  }
  function lock(v){ accepting = !v; device.classList.toggle('locked', v); }
  function show(n, bad=false){ lcd.textContent = String(n).padStart(2,'0'); lcd.classList.toggle('bad', bad); }

  function loadHistory(){ try{ return JSON.parse(localStorage.getItem(HIST_KEY)) || []; }catch(e){ return []; } }
  function saveHistory(list){ try{ localStorage.setItem(HIST_KEY, JSON.stringify(list.slice(-50))); }catch(e){} }
  function updateDuoInfo(){
    if(!duoInfoEl) return;
    if(mode !== 'twoplayer'){ duoInfoEl.hidden = true; return; }
    duoInfoEl.hidden = false;
    if(!running){
      duoInfoEl.innerHTML = duoPhase === 'p1'
        ? `Modo <b>Dos jugadores</b>: Jugador 1 empieza. Misma secuencia para los dos.`
        : `Jugador 1: <b>${duoP1Score}</b> ${duoP1Score===1?'ronda':'rondas'}. ¡Turno de Jugador 2!`;
    } else {
      duoInfoEl.innerHTML = duoPhase === 'p1'
        ? `Turno de <b>Jugador 1</b>`
        : `Jugador 1: <b>${duoP1Score}</b> ${duoP1Score===1?'ronda':'rondas'} · Turno de <b>Jugador 2</b>`;
    }
  }
  function updateDailyInfo(){
    if(!dailyInfoEl) return;
    if(mode !== 'daily'){ dailyInfoEl.hidden = true; return; }
    const today = todayStr();
    const list = loadHistory().filter(e => e.mode === 'daily' && e.skin === SKIN_NAME && sameLocalDay(e.ts, today));
    const wonToday = list.some(e => e.won);
    const bestToday = list.reduce((m,e) => Math.max(m, e.round||0), 0);
    dailyInfoEl.hidden = false;
    dailyInfoEl.innerHTML = wonToday
      ? `Desafío del ${today} · <b>¡Superado!</b> (mejor intento: ${bestToday} rondas)`
      : (bestToday > 0
          ? `Desafío del ${today} · mejor intento de hoy: <b>${bestToday}</b> ${bestToday===1?'ronda':'rondas'}`
          : `Desafío del ${today} · ¡Sé el primero en superarlo hoy!`);
  }
  function addHistoryEntry(round, won, hitCount, missCount){
    if(!round || round < 1) return;
    const list = loadHistory();
    const h = hitCount||0, m = missCount||0, totalAtt = h + m;
    const acc = totalAtt > 0 ? Math.round(h / totalAtt * 100) : null;
    list.push({ ts: Date.now(), round, skin: SKIN_NAME, won: !!won, strict: strictEl.checked, reverse: reverseEl.checked,
      muted: muteEl.checked, audioOnly: audioOnlyEl.checked, numColors, mode, hits: h, misses: m, acc });
    saveHistory(list);
    renderHistory();
    renderAchievements();
    renderChart();
    updateDailyInfo();
    recordGlobalStat(h, m);
    renderGlobalStats();
  }
  function renderHistory(){
    const list = loadHistory().slice().reverse().slice(0,10);
    if(list.length === 0){
      histListEl.innerHTML = '<p class="hist-empty">Todavía no jugaste ninguna partida.</p>';
      histClearEl.hidden = true;
      return;
    }
    histClearEl.hidden = false;
    histListEl.innerHTML = list.map(e => {
      const d = new Date(e.ts);
      const fecha = d.toLocaleDateString('es-AR', {day:'2-digit', month:'2-digit', year:'2-digit'}) + ' ' + d.toLocaleTimeString('es-AR', {hour:'2-digit', minute:'2-digit', hour12:false});
      const accHtml = (e.acc !== null && e.acc !== undefined) ? `<span class="hist-acc">${e.acc}% prec.</span>` : '';
      return `<div class="hist-row"><span class="hist-date">${fecha}</span><span class="hist-round">Ronda ${e.round}</span>${accHtml}<span class="hist-skin">${e.skin}</span></div>`;
    }).join('');
  }
  let seenAchievements = null;
  function renderAchievements(){
    const list = loadHistory();
    let unlocked = 0;
    const unlockedNow = new Set();
    achListEl.innerHTML = ACHIEVEMENTS.map(a => {
      const done = a.check(list);
      if(done){ unlocked++; unlockedNow.add(a.id); }
      return `<div class="ach-row${done ? ' unlocked' : ''}"><span class="ach-badge">${done ? '\u2713' : '\u2013'}</span><span class="ach-info"><span class="ach-title">${a.title}</span><span class="ach-desc">${a.desc}</span></span></div>`;
    }).join('');
    achCountEl.textContent = `${unlocked}/${ACHIEVEMENTS.length}`;
    if(seenAchievements){
      for(const a of ACHIEVEMENTS){
        if(unlockedNow.has(a.id) && !seenAchievements.has(a.id)) showToast('\u{1F3C6} Logro: ' + a.title, 'achievement');
      }
    }
    seenAchievements = unlockedNow;
  }
  function renderChart(){
    const list = loadHistory();
    const milestones = [];
    let runningMax = 0;
    for(const e of list){
      if(e.round > runningMax){ runningMax = e.round; milestones.push({ ts: e.ts, round: e.round }); }
    }
    if(milestones.length === 0){
      chartSvgEl.innerHTML = '';
      chartEmptyEl.hidden = false;
      return;
    }
    chartEmptyEl.hidden = true;
    const W = 320, H = 140, padL = 22, padR = 8, padT = 12, padB = 20;
    const innerW = W - padL - padR, innerH = H - padT - padB;
    const maxRound = milestones[milestones.length - 1].round;
    const n = milestones.length;
    const xFor = i => n === 1 ? padL : padL + (innerW * i / (n - 1));
    const yFor = r => padT + innerH * (1 - (maxRound === 0 ? 0 : r / maxRound));
    let d = `M ${xFor(0)} ${yFor(milestones[0].round)}`;
    for(let i = 1; i < n; i++){
      d += ` L ${xFor(i)} ${yFor(milestones[i-1].round)} L ${xFor(i)} ${yFor(milestones[i].round)}`;
    }
    d += ` L ${W - padR} ${yFor(milestones[n-1].round)}`;
    const dateFmt = ts => new Date(ts).toLocaleDateString('es-AR', {day:'2-digit', month:'2-digit'});
    const dots = milestones.map((m, i) => `<circle class="chart-dot" cx="${xFor(i)}" cy="${yFor(m.round)}" r="3"><title>${dateFmt(m.ts)} \u00b7 Ronda ${m.round}</title></circle>`).join('');
    chartSvgEl.innerHTML = `
      <line class="chart-axis" x1="${padL}" y1="${padT}" x2="${padL}" y2="${H - padB}"></line>
      <line class="chart-axis" x1="${padL}" y1="${H - padB}" x2="${W - padR}" y2="${H - padB}"></line>
      <text class="chart-label" x="1" y="${padT + 4}">${maxRound}</text>
      <text class="chart-label" x="1" y="${H - padB + 4}">0</text>
      <path class="chart-line" d="${d}"></path>
      ${dots}
      <text class="chart-label" x="${padL}" y="${H - 4}">${dateFmt(milestones[0].ts)}</text>
      <text class="chart-label" x="${W - padR}" y="${H - 4}" text-anchor="end">hoy</text>
    `;
  }
  renderHistory();
  renderAchievements();
  renderChart();
  renderGlobalStats();
  const confirmOverlayEl = document.getElementById('confirmOverlay');
  const confirmTextEl = document.getElementById('confirmText');
  const confirmCancelEl = document.getElementById('confirmCancel');
  const confirmOkEl = document.getElementById('confirmOk');
  let confirmResolve = null;
  function askConfirm(message){
    return new Promise(resolve => {
      confirmTextEl.textContent = message;
      confirmOverlayEl.hidden = false;
      confirmResolve = resolve;
    });
  }
  confirmCancelEl.addEventListener('click', () => { confirmOverlayEl.hidden = true; if(confirmResolve) confirmResolve(false); });
  confirmOkEl.addEventListener('click', () => { confirmOverlayEl.hidden = true; if(confirmResolve) confirmResolve(true); });
  histClearEl.addEventListener('click', async () => {
    const ok = await askConfirm('¿Borrar todo el historial de partidas? Esta acci\u00f3n no se puede deshacer.');
    if(!ok) return;
    try{ localStorage.removeItem(HIST_KEY); }catch(e){}
    renderHistory();
    renderAchievements();
    renderChart();
  });

  const shareBtn = document.getElementById('shareBtn');
  function makeShareImageBlob(){
    const ready = (document.fonts && document.fonts.ready) ? document.fonts.ready.catch(()=>{}) : Promise.resolve();
    return ready.then(() => new Promise(resolve => {
      const cs = getComputedStyle(document.documentElement);
      const cget = (name, fb) => { const v = cs.getPropertyValue(name); return (v && v.trim()) || fb; };
      // Use --bg/--bg2 (the page background) paired with --ink/--muted: by
      // construction every skin already guarantees that pairing is legible,
      // unlike a widget-local --panel which some skins deliberately invert.
      const bg = cget('--bg','#12141c'), bg2 = cget('--bg2', bg);
      const ink = cget('--ink','#f5f5f5'), muted = cget('--muted','#9aa0c0');
      const accent = cget('--c2', cget('--c1','#5ec8ff'));
      const paletteCount = Math.max(4, Math.min(8, numColors || 4));
      const dots = Array.from({length: paletteCount}, (_,i) => cget('--c'+i, accent));
      const bodyFont = getComputedStyle(document.body).fontFamily || 'sans-serif';
      const h1el = document.querySelector('h1');
      const headFont = h1el ? getComputedStyle(h1el).fontFamily : bodyFont;

      const W = 640, H = 640;
      const canvas = document.createElement('canvas');
      canvas.width = W; canvas.height = H;
      const ctx = canvas.getContext('2d');

      function luminance(str){
        ctx.fillStyle = '#000'; ctx.fillStyle = str;
        const norm = ctx.fillStyle;
        let r,g2,b;
        if(norm[0] === '#'){ r=parseInt(norm.slice(1,3),16); g2=parseInt(norm.slice(3,5),16); b=parseInt(norm.slice(5,7),16); }
        else { const m = norm.match(/rgba?\(([^)]+)\)/); const p = m[1].split(',').map(s=>parseFloat(s)); r=p[0]; g2=p[1]; b=p[2]; }
        return (0.299*r + 0.587*g2 + 0.114*b) / 255;
      }
      const bgLum = luminance(bg);
      const numColor = Math.abs(luminance(accent) - bgLum) > 0.25 ? accent : ink;

      const g = ctx.createLinearGradient(0,0,W,H);
      g.addColorStop(0, bg2); g.addColorStop(1, bg);
      ctx.fillStyle = g; ctx.fillRect(0,0,W,H);

      ctx.textAlign = 'center';
      ctx.fillStyle = muted;
      ctx.font = `700 22px ${bodyFont}`;
      ctx.fillText('MEMORIÓN · ' + SKIN_NAME.toUpperCase(), W/2, 96);

      ctx.fillStyle = numColor;
      ctx.font = `800 170px ${headFont}`;
      ctx.fillText(String(best), W/2, H/2 + 20);

      ctx.fillStyle = ink;
      ctx.font = `600 26px ${bodyFont}`;
      ctx.fillText(best === 1 ? 'RONDA ALCANZADA' : 'RONDAS ALCANZADAS', W/2, H/2 + 62);

      const dotY = H - 150, dotR = 16, gap = 16;
      const totalW = dots.length*(dotR*2) + (dots.length-1)*gap;
      let dx = W/2 - totalW/2 + dotR;
      dots.forEach(c => {
        ctx.beginPath(); ctx.arc(dx, dotY, dotR, 0, Math.PI*2);
        ctx.fillStyle = c; ctx.fill();
        dx += dotR*2+gap;
      });

      ctx.fillStyle = muted;
      ctx.font = `400 18px ${bodyFont}`;
      ctx.fillText('¿Podés superarlo?', W/2, H-90);

      canvas.toBlob(blob => resolve(blob), 'image/png');
    }));
  }

  async function shareRecord(btn){
    const text = best > 0
      ? `\u{1F3AE} Mi r\u00e9cord en Memori\u00f3n (${SKIN_NAME}): ${best} ${best===1?'ronda':'rondas'}. \u00bfPod\u00e9s superarlo?`
      : `\u{1F3AE} Estoy jugando Memori\u00f3n (${SKIN_NAME}). \u00bfTe anim\u00e1s a superarme?`;
    let blob = null;
    try{ blob = await makeShareImageBlob(); }catch(e){}
    if(blob && navigator.canShare && navigator.canShare({ files:[new File([blob],'memorion-record.png',{type:'image/png'})] })){
      try{
        await navigator.share({ files:[new File([blob],'memorion-record.png',{type:'image/png'})], title:'Memori\u00f3n', text });
        return;
      }catch(e){ if(e && e.name === 'AbortError') return; }
    }
    if(navigator.share){
      try{ await navigator.share({ title:'Memori\u00f3n', text }); return; }catch(e){ if(e && e.name === 'AbortError') return; }
    }
    try{ if(navigator.clipboard) await navigator.clipboard.writeText(text); }catch(e){}
    if(blob){
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'memorion-record.png';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(()=>URL.revokeObjectURL(url), 4000);
    }
    window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
    if(btn){
      const old = btn.textContent;
      btn.textContent = '\u00a1Listo! Abriendo WhatsApp\u2026';
      setTimeout(() => { btn.textContent = old; }, 2200);
    }
  }
  if(shareBtn) shareBtn.addEventListener('click', () => shareRecord(shareBtn));

  async function countdown(){
    const my = token;
    lock(true);
    for(const n of [3,2,1]){
      if(my !== token) return false;
      lcd.textContent = String(n);
      statusEl.textContent = 'Preparate…';
      tone(520, 110, 'sine', .12);
      vibrate([25]);
      await sleep(700);
    }
    return my === token;
  }
  async function playSeq(){
    const my = token;
    lock(true);
    statusEl.textContent = 'Mirá la secuencia…';
    await sleep(600);
    const {on, gap} = tempo();
    for(const i of seq){
      if(my !== token) return;
      await flash(i, on, !audioOnlyEl.checked); await sleep(gap);
    }
    if(my !== token) return;
    step = 0; lock(false);
    statusEl.textContent = reverseEl.checked ? 'Tu turno (al revés)' : 'Tu turno';
  }

  async function nextRound(){
    const _r = (mode === 'daily' && dailyRng) ? dailyRng() : (mode === 'twoplayer' && duoRng) ? duoRng() : Math.random();
    seq.push(Math.floor(_r*numColors));
    show(seq.length);
    await playSeq();
  }

  async function start(){
    if(running && peak > 0) addHistoryEntry(peak, false, hits, misses);
    if(timerInterval){ clearInterval(timerInterval); timerInterval = null; }
    audio();
    token++; running = true; seq = []; peak = 0;
    hits = 0; misses = 0; updateAcc(); recordBrokenThisRun = false;
    dailyRng = (mode === 'daily') ? mulberry32(hashStr(todayStr())) : null;
    if(mode === 'twoplayer'){
      if(duoPhase === 'p1'){ duoSeedValue = Math.floor(Math.random()*4294967296); duoP1Score = 0; }
      duoRng = mulberry32(duoSeedValue);
    } else {
      duoRng = null;
    }
    updateDuoInfo();
    startBtn.textContent = 'Reiniciar';
    lock(true);
    const myStart = token;
    await countdown();
    if(myStart !== token) return;
    if(mode === 'time'){
      timeLeft = timeLimit;
      goalV.textContent = timeLeft + 's';
      timerInterval = setInterval(tick, 1000);
    }
    await nextRound();
  }

  async function duoFail(){
    running = false;
    tone(90, 700, 'sawtooth');
    vibrate([45,60,45]);
    show(seq.length - 1, true);
    const score = seq.length - 1;
    addHistoryEntry(score, false, hits, misses);
    if(duoPhase === 'p1'){
      duoP1Score = score;
      duoPhase = 'p2';
      statusEl.textContent = `Jugador 1: ${score} ${score===1?'ronda':'rondas'}. ¡Turno de Jugador 2!`;
      if(duoInfoEl){ duoInfoEl.hidden = false; duoInfoEl.innerHTML = `Jugador 1: <b>${score}</b> ${score===1?'ronda':'rondas'}. Pasá el celular — turno de <b>Jugador 2</b>.`; }
      startBtn.textContent = 'Jugador 2: listo';
    } else {
      const p2score = score;
      let resultMsg;
      if(p2score > duoP1Score) resultMsg = `¡Gana Jugador 2! (${p2score} vs ${duoP1Score})`;
      else if(p2score < duoP1Score) resultMsg = `¡Gana Jugador 1! (${duoP1Score} vs ${p2score})`;
      else resultMsg = `¡Empate! (${p2score} rondas cada uno)`;
      statusEl.textContent = resultMsg;
      if(duoInfoEl){ duoInfoEl.hidden = false; duoInfoEl.innerHTML = resultMsg; }
      startBtn.textContent = 'Jugar otra vez';
      duoPhase = 'p1'; duoRng = null;
      showSummary('🏆', resultMsg, [
        { label: 'Jugador 1', value: duoP1Score + (duoP1Score===1?' ronda':' rondas') },
        { label: 'Jugador 2', value: p2score + (p2score===1?' ronda':' rondas') }
      ]);
    }
    lock(true);
  }
  async function fail(){
    const my = token;
    lock(true);
    if(mode === 'twoplayer') return duoFail();
    tone(90, 700, 'sawtooth', .16);
    vibrate([45,60,45]);
    lcd.textContent = '!!'; lcd.classList.add('bad');
    if(strictEl.checked){
      statusEl.textContent = `Error. Llegaste a ${seq.length - 1} ${seq.length-1===1?'ronda':'rondas'}. Volvés a empezar.`;
      await sleep(1400); if(my !== token) return;
      seq = []; await nextRound();
    } else {
      statusEl.textContent = 'Error. Mirá de nuevo.';
      await sleep(1100); if(my !== token) return;
      show(seq.length); await playSeq();
    }
  }

  async function win(){
    const my = token;
    lock(true); running = false;
    vibrate([25,45,25,45,90]);
    addHistoryEntry(peak, true, hits, misses);
    statusEl.textContent = mode === 'daily' ? `¡Superaste el desafío diario! ${DAILY_GOAL} rondas perfectas.` : `¡Ganaste! ${goal} rondas perfectas.`;
    const order = Array.from({length:numColors}, (_,k)=>k);
    for(let k=0;k<3;k++){
      for(const i of order){ if(my!==token) return; await flash(i, 90); }
    }
    startBtn.textContent = 'Jugar otra vez';
    const doneRound = mode === 'daily' ? DAILY_GOAL : goal;
    showSummary('🏆', (mode === 'daily' ? '¡Desafío diario superado!' : '¡Ganaste!'), [
      { label: 'Ronda alcanzada', value: doneRound + (doneRound===1?' ronda':' rondas') },
      { label: 'Precisión', value: updateAcc() + '%' },
      { label: 'Récord personal', value: recordText(doneRound), highlight: recordBrokenThisRun }
    ]);
  }

  function tick(){
    if(!running){ if(timerInterval){ clearInterval(timerInterval); timerInterval = null; } return; }
    timeLeft -= 1;
    if(timeLeft <= 0){
      timeLeft = 0; goalV.textContent = '0s';
      clearInterval(timerInterval); timerInterval = null;
      timeUp();
    } else {
      goalV.textContent = timeLeft + 's';
    }
  }

  function timeUp(){
    running = false; accepting = false; token++; lock(true);
    addHistoryEntry(peak, false, hits, misses);
    tone(90, 700, 'sawtooth', .16);
    vibrate([45,60,45]);
    statusEl.textContent = `¡Se acabó el tiempo! Llegaste a ${peak} ${peak===1?"ronda":"rondas"}.`;
    startBtn.textContent = 'Jugar otra vez';
    showSummary('⏱️', '¡Se acabó el tiempo!', [
      { label: 'Ronda alcanzada', value: peak + (peak===1?' ronda':' rondas') },
      { label: 'Precisión', value: updateAcc() + '%' },
      { label: 'Récord personal', value: recordText(peak), highlight: recordBrokenThisRun }
    ]);
  }

  async function press(i){
    if(!accepting || !running) return;
    const my = token;
    const idx = reverseEl.checked ? (seq.length - 1 - step) : step;
    if(i !== seq[idx]){ misses++; updateAcc(); pads[i].classList.add('lit'); setTimeout(()=>pads[i].classList.remove('lit'),150); return fail(); }
    hits++; updateAcc();
    accepting = false;
    await flash(i, 220);
    if(my !== token) return;
    accepting = true;
    step++;
    if(step === seq.length){
      lock(true);
      const done = seq.length;
      if(done > best){ best = done; bestEl.textContent = best; try{ localStorage.setItem('pizarron-vivo-best', best); }catch(e){} showToast('\u2b50 \u00a1Nuevo r\u00e9cord! ' + done + (done===1?' ronda':' rondas'), 'record'); recordBrokenThisRun = true; }
      if(done > peak) peak = done;
      if(mode === 'goal' && done >= goal) return win();
      if(mode === 'daily' && done >= DAILY_GOAL) return win();
      statusEl.textContent = '¡Bien!';
      await sleep(500); if(my !== token) return;
      nextRound();
    }
  }

  const pauseOverlayEl = document.getElementById('pauseOverlay');
  const pauseResumeEl = document.getElementById('pauseResume');
  const pauseExitEl = document.getElementById('pauseExit');
  const backBtnRef = document.getElementById('backBtn');
  if(!backBtnRef) pauseExitEl.hidden = true;
  let pausedForBg = false;
  function resumeFromPause(){
    if(!pausedForBg) return;
    pausedForBg = false;
    pauseOverlayEl.hidden = true;
    if(!running) return;
    const myResume = token;
    (async () => {
      if(seq.length === 0){
        const ready = await countdown();
        if(myResume !== token || !ready) return;
        if(mode === 'time'){
          timeLeft = timeLimit; goalV.textContent = timeLeft + 's';
          timerInterval = setInterval(tick, 1000);
        }
        await nextRound();
      } else {
        if(mode === 'time' && timeLeft > 0){
          timerInterval = setInterval(tick, 1000);
        }
        show(seq.length);
        await playSeq();
      }
    })();
  }
  pauseResumeEl.addEventListener('click', resumeFromPause);
  pauseExitEl.addEventListener('click', () => { if(backBtnRef) backBtnRef.click(); });
  const summaryOverlayEl = document.getElementById('summaryOverlay');
  const summaryIconEl = document.getElementById('summaryIcon');
  const summaryTitleEl = document.getElementById('summaryTitle');
  const summaryBodyEl = document.getElementById('summaryBody');
  const summaryCloseEl = document.getElementById('summaryClose');
  summaryCloseEl.addEventListener('click', () => { summaryOverlayEl.hidden = true; });
  function recordText(done){
    if(recordBrokenThisRun) return '¡Nuevo récord! 🎉';
    if(done === best) return 'Empataste tu récord';
    const diff = best - done;
    return diff > 0 ? ('A ' + diff + (diff===1?' ronda':' rondas') + ' de tu récord (' + best + ')') : '—';
  }
  function showSummary(icon, title, rows){
    summaryIconEl.textContent = icon;
    summaryTitleEl.textContent = title;
    summaryBodyEl.innerHTML = rows.map(r => '<div class="summary-row' + (r.highlight ? ' highlight' : '') + '"><span>' + r.label + '</span><b>' + r.value + '</b></div>').join('');
    summaryOverlayEl.hidden = false;
  }
  document.addEventListener('visibilitychange', () => {
    if(document.hidden && running && !pausedForBg){
      pausedForBg = true;
      token++;
      lock(true);
      if(timerInterval){ clearInterval(timerInterval); timerInterval = null; }
      pauseOverlayEl.hidden = false;
    }
  }, {signal});
  document.addEventListener('keydown', e => {
    if(e.target.closest && e.target.closest('.pad')) return;
    const k = KEYS[e.key.toLowerCase()];
    if(k !== undefined) press(k);
  }, {signal});
  startBtn.addEventListener('click', async () => {
    if(running && peak > 0){
      const ok = await askConfirm('Vas a perder el intento actual (ronda ' + peak + '). \u00bfReiniciar de todas formas?');
      if(!ok) return;
    }
    start();
  });
  goalBtns.forEach(b => b.addEventListener('click', () => {
    goalBtns.forEach(x => x.setAttribute('aria-pressed', x===b ? 'true' : 'false'));
    goal = +b.dataset.g; if(mode === 'goal') goalV.textContent = goal;
  }));
  modeBtns.forEach(b => b.addEventListener('click', () => {
    if(running) return;
    modeBtns.forEach(x => x.setAttribute('aria-pressed', x===b ? 'true' : 'false'));
    const prevMode = mode;
    mode = b.dataset.m;
    if(isForcedMode(mode) && !isForcedMode(prevMode)){
      preDaily = { strict: strictEl.checked, reverse: reverseEl.checked, audioOnly: audioOnlyEl.checked, numColors };
      strictEl.checked = true; strictEl.disabled = true;
      reverseEl.checked = false; reverseEl.disabled = true;
      audioOnlyEl.checked = false; audioOnlyEl.disabled = true;
      levelBtns.forEach(x => x.disabled = true);
      if(numColors !== 4){
        numColors = 4; device.dataset.level = 4; buildPads();
        levelBtns.forEach(x => x.setAttribute('aria-pressed', x.dataset.n==='4' ? 'true' : 'false'));
      }
    } else if(!isForcedMode(mode) && isForcedMode(prevMode) && preDaily){
      strictEl.checked = preDaily.strict; strictEl.disabled = false;
      reverseEl.checked = preDaily.reverse; reverseEl.disabled = false;
      audioOnlyEl.checked = preDaily.audioOnly; audioOnlyEl.disabled = false;
      levelBtns.forEach(x => x.disabled = false);
      preDaily = null;
    }
    if(mode === 'twoplayer' && prevMode !== 'twoplayer'){ duoPhase = 'p1'; duoRng = null; }
    goalSegEl.hidden = mode !== 'goal';
    timeSegEl.hidden = mode !== 'time';
    if(goalLabel) goalLabel.textContent = mode === 'time' ? 'Tiempo' : 'Meta';
    goalV.textContent = mode === 'time' ? timeLimit + 's' : (mode === 'daily' ? DAILY_GOAL : goal);
    updateDailyInfo();
    updateDuoInfo();
  }));
  timeBtns.forEach(b => b.addEventListener('click', () => {
    timeBtns.forEach(x => x.setAttribute('aria-pressed', x===b ? 'true' : 'false'));
    timeLimit = +b.dataset.t;
    if(mode === 'time') goalV.textContent = timeLimit + 's';
  }));

  // ---- Tutorial guiado (onboarding) ----
  const TOUR_STEPS = [
    { sel: '#device', text: 'El pizarrón dibuja una secuencia de tizas de color. Memorizala bien.' },
    { sel: '#goal', text: 'Eleg\u00ed tu meta: hasta qu\u00e9 ronda quer\u00e9s llegar.' },
    { sel: '#level', text: 'Sum\u00e1 m\u00e1s colores (6 u 8) para un desaf\u00edo extra. Si est\u00e1s empezando, dejalo en 4.' },
    { sel: '#start', text: 'Toc\u00e1 ac\u00e1 para arrancar. Vas a ver una cuenta regresiva 3-2-1 antes de la secuencia.' },
    { sel: null, text: 'Repet\u00ed la secuencia tocando los mismos colores en el mismo orden (o con las teclas Q W A S). \u00a1Buena suerte!' }
  ];
  const tourOverlayEl = document.getElementById('tourOverlay');
  const tourSpotEl = document.getElementById('tourSpot');
  const tourTipEl = document.getElementById('tourTip');
  const tourTextEl = document.getElementById('tourText');
  const tourCountEl = document.getElementById('tourCount');
  const tourSkipEl = document.getElementById('tourSkip');
  const tourPrevEl = document.getElementById('tourPrev');
  const tourNextEl = document.getElementById('tourNext');
  const tourLinkEl = document.getElementById('tourLink');
  let tourIdx = 0;
  function showTourStep(i){
    if(i < 0) return;
    tourIdx = i;
    const st = TOUR_STEPS[i];
    const target = st.sel ? document.querySelector(st.sel) : null;
    const rect = target ? target.getBoundingClientRect() : null;
    if(rect && rect.width > 0){
      tourSpotEl.style.display = 'block';
      tourSpotEl.style.left = (rect.left - 8) + 'px';
      tourSpotEl.style.top = (rect.top - 8) + 'px';
      tourSpotEl.style.width = (rect.width + 16) + 'px';
      tourSpotEl.style.height = (rect.height + 16) + 'px';
    } else {
      tourSpotEl.style.display = 'none';
    }
    tourTextEl.textContent = st.text;
    tourCountEl.textContent = (i+1) + ' / ' + TOUR_STEPS.length;
    tourPrevEl.style.visibility = i === 0 ? 'hidden' : 'visible';
    tourNextEl.textContent = i === TOUR_STEPS.length-1 ? '\u00a1A jugar!' : 'Siguiente';
    const tipW = 260, margin = 12;
    if(rect && rect.width > 0){
      const left = Math.min(Math.max(rect.left, margin), window.innerWidth - tipW - margin);
      let top = rect.bottom + margin;
      if(top + 170 > window.innerHeight) top = Math.max(rect.top - 175, margin);
      tourTipEl.style.transform = 'none';
      tourTipEl.style.left = left + 'px';
      tourTipEl.style.top = top + 'px';
    } else {
      tourTipEl.style.left = '50%';
      tourTipEl.style.top = '50%';
      tourTipEl.style.transform = 'translate(-50%,-50%)';
    }
  }
  function endTour(){
    tourOverlayEl.hidden = true;
    try{ localStorage.setItem('memorion-onboarded','1'); }catch(e){}
  }
  function startTour(){
    tourOverlayEl.hidden = false;
    showTourStep(0);
  }
  tourSkipEl.addEventListener('click', endTour);
  tourPrevEl.addEventListener('click', () => showTourStep(tourIdx-1));
  tourNextEl.addEventListener('click', () => { if(tourIdx >= TOUR_STEPS.length-1) endTour(); else showTourStep(tourIdx+1); });
  let seenTour = false;
  try{ seenTour = localStorage.getItem('memorion-onboarded') === '1'; }catch(e){}
  if(!seenTour) setTimeout(() => { if(!running) startTour(); }, 500);
  if(tourLinkEl) tourLinkEl.addEventListener('click', startTour);
  };
})();
