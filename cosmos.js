(function(){
  var s = window.SKINS && window.SKINS['cosmos'];
  if(!s) return;
  s.css = `
  :root{
    color-scheme: dark;
    --bg:#040310; --bg2:#160a33; --grid:#1c0f3a;
    --panel:#0d0620; --panel-edge:#3a2d6e;
    --ink:#eef0ff; --muted:#8f8fc0;
    --c0:#e0563a; --c0-hi:#ff9a80;  /* Marte */
    --c1:#3a6fe0; --c1-hi:#8fb3ff;  /* Neptuno */
    --c2:#e0b53a; --c2-hi:#ffe08a;  /* Saturno */
    --c3:#3ae0b0; --c3-hi:#8fffde;  /* Venus */
    --c4:#e08a3a; --c4-hi:#ffc48a;  /* Júpiter */
    --c5:#3ae0e0; --c5-hi:#8ffcff;  /* Urano */
    --c6:#e03a8a; --c6-hi:#ff8ac2;  /* Plutón */
    --c7:#8a3ae0; --c7-hi:#c48aff;  /* Éris */
    --lcd:#1a0f04; --lcd-ink:#ffcf5a;
  }
  html,body{height:100%}
  *,*::before,*::after{box-sizing:border-box}
  body{
    margin:0;
    background:
      radial-gradient(1.5px 1.5px at 10% 15%, #fff 50%, transparent 51%),
      radial-gradient(1px 1px at 82% 8%, #fff 50%, transparent 51%),
      radial-gradient(1.5px 1.5px at 35% 72%, #fff 50%, transparent 51%),
      radial-gradient(1px 1px at 62% 40%, #fff 50%, transparent 51%),
      radial-gradient(1px 1px at 92% 65%, #fff 50%, transparent 51%),
      radial-gradient(1.5px 1.5px at 18% 88%, #fff 50%, transparent 51%),
      radial-gradient(1px 1px at 48% 24%, #fff 50%, transparent 51%),
      radial-gradient(1px 1px at 74% 92%, #fff 50%, transparent 51%),
      radial-gradient(1px 1px at 6% 55%, #fff 50%, transparent 51%),
      radial-gradient(1px 1px at 55% 6%, #fff 50%, transparent 51%),
      radial-gradient(55% 38% at 12% 22%, rgba(150,70,190,.32), transparent 72%),
      radial-gradient(50% 34% at 88% 16%, rgba(230,130,70,.22), transparent 72%),
      radial-gradient(65% 42% at 55% 96%, rgba(60,45,150,.3), transparent 72%),
      radial-gradient(120% 70% at 50% -10%, var(--bg2), transparent 60%),
      var(--bg);
    background-color:var(--bg);
    color:var(--ink);
    font-family:"Space Mono", ui-monospace, monospace;
    display:flex;justify-content:center;
    padding-inline:16px;
  }
  :root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
  [hidden]{display:none!important}
  .wrap{width:100%;max-width:440px;display:flex;flex-direction:column;align-items:center;gap:20px;padding-block:26px 30px}

  header{text-align:center}
  h1{font-family:"Orbitron", monospace;font-weight:800;font-size:clamp(20px,6.5vw,28px);margin:0;letter-spacing:.04em;line-height:1.4;
     color:var(--c5);text-shadow:0 0 6px var(--c5), 0 0 22px var(--c5-hi);}
  .tag{margin:10px 0 0;color:var(--muted);font-size:13px;letter-spacing:.06em}

  .device{position:relative;width:100%;max-width:380px;aspect-ratio:1;
    background:
      radial-gradient(60% 45% at 50% 50%, rgba(220,160,70,.12), transparent 70%),
      radial-gradient(120% 120% at 50% 8%, rgba(60,30,100,.55), rgba(4,3,10,.88) 70%);
    border-radius:24px;padding:16px;
    border:1px solid rgba(180,150,255,.28);
    box-shadow:0 0 0 1px rgba(140,120,255,.08), 0 0 0 6px rgba(20,12,36,.6), 0 25px 60px rgba(0,0,0,.7), inset 0 0 50px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.06)}
  .device[data-level="4"]{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;gap:10px}
  .device[data-level="4"] .gridpads{display:contents}
  .device:not([data-level="4"]){display:flex;flex-direction:column;gap:12px;aspect-ratio:auto}
  .device:not([data-level="4"]) .gridpads{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;gap:10px;flex:1}
  .device:not([data-level="4"]) .hub{position:static;transform:none;width:auto;flex-direction:row;gap:10px;padding:8px 14px;order:-1;aspect-ratio:auto;border-radius:999px}
  .pad{appearance:none;border:0;cursor:pointer;position:relative;border-radius:50%;
    aspect-ratio:1;align-self:center;justify-self:center;width:100%;max-width:100%;
    -webkit-tap-highlight-color:transparent;touch-action:manipulation;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;
    background:var(--pc);
    box-shadow:0 0 22px color-mix(in srgb, var(--pc) 45%, transparent), inset 0 0 18px rgba(0,0,0,.35);
    transition:filter .08s, box-shadow .08s, transform .08s}
  .pad[data-i="0"]{--pc:var(--c0);--pc-hi:var(--c0-hi)}
  .pad[data-i="1"]{--pc:var(--c1);--pc-hi:var(--c1-hi)}
  .pad[data-i="2"]{--pc:var(--c2);--pc-hi:var(--c2-hi)}
  .pad[data-i="3"]{--pc:var(--c3);--pc-hi:var(--c3-hi)}
  .pad[data-i="4"]{--pc:var(--c4);--pc-hi:var(--c4-hi)}
  .pad[data-i="5"]{--pc:var(--c5);--pc-hi:var(--c5-hi)}
  .pad[data-i="6"]{--pc:var(--c6);--pc-hi:var(--c6-hi)}
  .pad[data-i="7"]{--pc:var(--c7);--pc-hi:var(--c7-hi)}
  .planet-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:50%;pointer-events:none;display:block}
  .pad .key{position:absolute;top:8px;left:10px;font-family:"Orbitron",monospace;font-size:10px;letter-spacing:.05em;
    background:rgba(0,0,0,.4);color:#fff;padding:2px 6px;border-radius:6px;z-index:1}
  .pad.lit{filter:brightness(1.35) saturate(1.2);transform:scale(1.05);
    box-shadow:0 0 34px var(--pc), 0 0 60px color-mix(in srgb, var(--pc) 60%, transparent), inset 0 0 20px rgba(255,255,255,.25)}
  .pad:focus-visible{outline:2px solid var(--ink);outline-offset:3px}
  .locked .pad{cursor:default}

  .hub{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
    width:34%;aspect-ratio:1;border-radius:50%;
    background:radial-gradient(circle at 35% 26%, #fff8e0, #f3d179 28%, #c99a3d 58%, #7a4e14 88%, #3a2408 100%);
    box-shadow:0 0 0 3px rgba(255,224,150,.45), 0 0 40px color-mix(in srgb, var(--c2) 65%, transparent), 0 0 90px color-mix(in srgb, var(--c0) 30%, transparent),
      inset 0 2px 5px rgba(255,255,255,.55), inset 0 -8px 16px rgba(0,0,0,.4);
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;pointer-events:none}
  .hub-icon{width:26%;aspect-ratio:1;margin-bottom:1px}
  .hub-icon svg{width:100%;height:100%;display:block}
  .device:not([data-level="4"]) .hub-icon{display:none}
  .lcd{background:rgba(10,4,0,.55);color:var(--lcd-ink);font-family:"Space Mono",monospace;font-weight:700;
    font-variant-numeric:tabular-nums;font-size:clamp(18px,5.2vw,24px);line-height:1;padding:4px 9px;border-radius:4px;
    min-width:2.6ch;text-align:center;text-shadow:0 0 10px currentColor;box-shadow:inset 0 0 10px rgba(0,0,0,.6)}
  .lcd.bad{color:#ff5566;text-shadow:0 0 10px #ff5566}
  .hub small{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:#4a2f10;font-weight:700}

  .status{min-height:1.4em;font-size:14px;text-align:center;color:var(--ink)}
  .controls{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center}
  .btn{appearance:none;border:1px solid var(--c1);cursor:pointer;font:700 13px "Space Mono",monospace;letter-spacing:.08em;text-transform:uppercase;
    padding:12px 20px;border-radius:6px;background:transparent;color:#3c71e0;
    box-shadow:0 0 14px color-mix(in srgb, var(--c1) 35%, transparent)}
  .btn:active{transform:translateY(1px)}
  .btn:focus-visible,.seg button:focus-visible,.toggle input:focus-visible+span{outline:2px solid var(--c3-hi);outline-offset:2px}
  .seg{display:inline-flex;background:#0a0616;border:1px solid var(--panel-edge);border-radius:6px;padding:3px}
  .seg button{appearance:none;border:0;background:transparent;color:var(--muted);font:600 12px "Space Mono",monospace;padding:9px 11px;border-radius:4px;cursor:pointer}
  .seg button[aria-pressed="true"]{background:var(--panel-edge);color:var(--c3)}
  .toggle{display:inline-flex;align-items:center;gap:8px;color:var(--muted);font-size:13px;cursor:pointer;user-select:none}
  .toggle input{position:absolute;opacity:0;width:1px;height:1px}
  .toggle span{width:36px;height:20px;border-radius:4px;background:#0a0616;border:1px solid var(--panel-edge);position:relative;transition:background .15s}
  .toggle span::after{content:"";position:absolute;left:2px;top:2px;width:14px;height:14px;border-radius:2px;background:var(--muted);transition:transform .15s, background .15s}
  .toggle input:checked+span{border-color:var(--c1)}
  .toggle input:checked+span::after{transform:translateX(16px);background:var(--c1);box-shadow:0 0 8px var(--c1)}

  .stats{display:flex;gap:26px;justify-content:center;font-variant-numeric:tabular-nums}
  .stat{text-align:center}
  .stat b{display:block;font-size:20px;color:var(--c2);text-shadow:0 0 8px color-mix(in srgb, var(--c2) 50%, transparent)}
  .stat span{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}

  details{width:100%;color:var(--muted);font-size:13px;line-height:1.6;background:#0a0616;border:1px solid var(--panel-edge);border-radius:8px;padding:12px 15px}
  summary{cursor:pointer;color:var(--ink);font-weight:600}
  details ul{padding-left:18px;margin:8px 0 0}
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
  footer{font-size:11px;color:var(--muted);letter-spacing:.06em}
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
    <h1>ÓRBITA<br>CÓSMICA</h1>
    <p class="tag">Memorizá el orden de los planetas</p>
  </header>

  <div class="device locked" id="device" data-level="4">
    <div class="gridpads" id="gridpads"></div>
    <div class="hub" aria-hidden="true">
      <div class="hub-icon"><svg viewBox="0 0 24 24"><rect x="5" y="8" width="14" height="11" rx="4" fill="#2a1c05"/><rect x="10" y="3" width="4" height="4" rx="1" fill="#2a1c05"/><rect x="11" y="1.4" width="2" height="2.4" rx="1" fill="#2a1c05"/><circle cx="9.5" cy="13.2" r="1.6" fill="#ffe9a8"/><circle cx="14.5" cy="13.2" r="1.6" fill="#ffe9a8"/><rect x="8.5" y="16.4" width="7" height="1.4" rx=".7" fill="#ffe9a8"/><rect x="2.5" y="12" width="2" height="4" rx="1" fill="#2a1c05"/><rect x="19.5" y="12" width="2" height="4" rx="1" fill="#2a1c05"/></svg></div>
      <div class="lcd" id="lcd">--</div>
      <small>ronda</small>
    </div>
  </div>

  <div class="status" id="status" role="status" aria-live="polite">Presioná «Iniciar» para empezar</div>
  <p class="daily-info" id="dailyInfo" hidden></p>
  <p class="daily-info" id="duoInfo" hidden></p>

  <div class="controls">
    <button class="btn" id="start">Iniciar</button>
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
    <div class="seg" role="group" aria-label="Nivel de planetas" id="level">
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
      <li>El sistema enciende una secuencia de planetas. Repetila en el mismo orden.</li>
      <li>Cada ronda agrega un planeta nuevo y, cada tanto, acelera.</li>
      <li>Si te equivocás, se repite la secuencia. En modo <b>Estricto</b>, volvés a cero.</li>
      <li>Con <b>Orden inverso</b>, repetís la secuencia empezando por el último planeta.</li>
      <li>Con <b>Solo sonido</b> practicás de oído: el sistema no ilumina la secuencia. Con <b>Sin sonido</b> jugás en silencio.</li>
      <li>Llegá a la meta elegida para ganar. Teclado: Q W A S (o 1 2 3 4).</li>
      <li>Elegí <b>Nivel</b> 6 u 8 planetas para un desafío experto (no se puede cambiar con la partida en curso).</li>
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
  const SKIN_NAME = 'Órbita Cósmica';
  const ALL_SKINS = ['Ne\u00f3n Cuadrante','Botonera Eco','Secuencia Cuatro','Ronda Silvestre','Terminal Mnemo','Pizarr\u00f3n Vivo','\u00d3rbita C\u00f3smica','Dial Retro','Vidrio Hologr\u00e1fico','Arrecife Sonoro'];
  const ACHIEVEMENTS = [
    { id:'first_game', title:'Primeros pasos', desc:'Jug\u00e1 tu primera partida.', check: list => list.length >= 1 },
    { id:'ten_games', title:'Diez partidas', desc:'Jug\u00e1 10 partidas en total.', check: list => list.length >= 10 },
    { id:'fifty_games', title:'Maratonista', desc:'Jug\u00e1 50 partidas en total.', check: list => list.length >= 50 },
    { id:'all_skins', title:'Coleccionista', desc:'Gan\u00e1 una partida con los 10 dise\u00f1os.', check: list => { const won = new Set(list.filter(e => e.won).map(e => e.skin)); return ALL_SKINS.every(s => won.has(s)); } },
    { id:'strict_win', title:'Modo estricto', desc:'Gan\u00e1 una partida en modo Estricto.', check: list => list.some(e => e.won && e.strict) },
    { id:'reverse_win', title:'Memoria inversa', desc:'Gan\u00e1 una partida con Orden inverso.', check: list => list.some(e => e.won && e.reverse) },
    { id:'audioonly_win', title:'O\u00eddo absoluto', desc:'Gan\u00e1 una partida en modo Solo sonido.', check: list => list.some(e => e.won && e.audioOnly) },
    { id:'expert_win', title:'Modo experto', desc:'Gan\u00e1 una partida con 8 planetas.', check: list => list.some(e => e.won && e.numColors === 8) },
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
  const LABELS = ['Marte','Neptuno','Saturno','Venus','J\u00fapiter','Urano','Plut\u00f3n','\u00c9ris'];
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
  try { best = +localStorage.getItem('orbita-cosmica-best') || 0; } catch(e){}
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
  const PLANET_TEXTURES = {
    '0': 'data:image/jpeg;base64,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',
    '1': 'data:image/jpeg;base64,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',
    '2': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCADcANwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2VLdAcEACk8iMcDHFVIb9WxlwSRjPSnm8VXAGOteNdHdZkj26gElec4FRtaFl3bRk+op0lyAcE8GnLcqiDJNFkxXaK50+PIbqOnApp00Bhs6Gr6TDtyKVpkxtGMY7UcqHzMoGxVVBxkdc+lPWwDoWwDx0qyrjAUcD604TANhefWjlQXZQaxVhtKDHsKjk0xdmQnOa1BISdz4BPShmVsKACfWjlQczMePT8Md69OKcunK2QyYFa+A3BwMetOOwjI/h7DvS5UHMzHj05F+Xrg/nUn9mRvuyMD1x1q+yKwLZ5z0p8UqLwAeOtHKg5mY66Yiq3HA6ZqFtKAAKp1610GUbnBNNkClSw4Pp60ciHzswxpSFlDAe/FPbRzn5VwO9a+EbA4GKc0qr905xxRyIOdlBNNKYwu5O9OazVgCqD0+lXWuY9mN2D7UyOaLZknp26U+VIV2VlsVQlAuBSNYDgYxz6Vba5j5YH8KYbhG+VeKNA1IJbFHh2k8Cqy6eEOAuRV/zQTtJAp6yLIuARxRZBdmd9gAblOCc9Kb9iDKQq49q2A6gAZG4U9dsmc4yPalyIOdo519K5b5BjPpUX9lRDqp/AV0yhfmUnke1QSIhbgUuRD52cT/aYUds0+PVeOWFccb1+h5NL9rYr1rE6LHcR6mr/ebk+9TR6kN2GIOK4RNQfgZqY6mVHDH607sXKjuzqqgcHA9KfFqgPcfWuCbVSR1qWLVWCfePNHMxciO7OojaW3D8KjXUie+M1xbau2OG+lN/tM4IJ6UczDkR3A1HB+ZgacNRU8ggMK4T+1SD96gao3ZicU+ZhyI746ooXOc+9NGqKnOR83QVwf8AazYHzEUDVSW60uZhyHdjUQ2SGxTV1QA43Zrh11dwcbqQ6swAwafMxciO6Gr4GA2Kcupq+CHB9a4BtWJbIfApBqzKQValzMfIj0GTVI16EfjUD6srZ5A75zXCy6s7DGahOpEkHec+5o5mHIjuW1RFOd+agl1lV5BFcY+osR1zULX0jdCcUXY+VHbDWgVxuALU+PVxkFm/WuGN22BzzSm/bHBpXDlO7TV1duTUy6sm7hsY6V58moOpPJqUamePmxTuw5UeiDVQM5bNJ/bB5JPH1rgRqr9SxpV1Vwu0MSKOZi5EegJq4x8p5PWj+1Vyfu9fWvP11h4xwaG1WRjkPijmYciKTwMyn5ab9ncjGK6tdHbHApJNLZeQvTipLucl5Lg80xo3PT9K6qXSWc5AqIaQwbBHHemFzmPLkzjBpypL2BrpTpDFgAvX1qaHSgGwR0FFwuct5TsQcEGn+U+MNnNdZHooZunA61ONCG7JwKBcxxIhkznmneS7LxnNdodDQAjHOcdKE0DBxt/SiwcxxgtpNnJ5pFtZT613I0MRghl+nFIujxlT8nSjUOZHDeTIOCDStbydgSK7U6EDyBwOalj0IEZC/pRYOZHCizkIGARThZyf3TXfDQhgfL+dRHRdhxtyKLMOZHCm0kz0NKLGTPIruU0aNsZXn2FTHRVI+6BiizFzI4QabJ1ANPOnMQARXbnS9qgBeaBpILBtuKLMOZHDtYspAxTWsWPQV3Z0lZHPy4wKgOkBX4HBosw5jizYyBcYqOSxkGMA13KaSCTtSpU0XcMFeRRZhzI4JbKQjGDinrYyKMkGu4bRkTJ2/Wn/ANlqeqcdqLMOZHBmyk5wDSjT5WGQDXdnRgPlCfpTl0UKuNuadmHMjf8AsKIcZzzUUunq8ZbbgVaF0nGRwe9P86Ix8nPNbcqOe7M4aZgYHJPOBTTp5MmNnNakJRnJVzgciniRWkyoxx1o5UHMzFaxXOCvPtU0dgigFgAT04rTIRiSFBJpPMTjIGRxRyoOZlaOzRAcjg9zT5LWPgbdzdsVYklRRt7CoWnUDIPPUHNOyQrsb9gAUZXBzUq2yKBnGRUEl8FGC1R/bkYcMCaLodmTS2ofdwaILaMRY6/0qBtQBzhgT0xR9sXb8vfrRdBZlk2yA5609IAMArx71nDUlViMgilGo+Z1YfnS5kFmXpIucqM88GpPsodck4OKz21AgDBwOxpBqLA53gD607oLMurajJzjA70PCq8kHIqidTywyeg796a2oq6E7sY6UXQWZpJbRsQ386cYk6Ac1Qjv18vORx2pv23ccqcdqLoLMuPCgI49uKZ9m346Y7etRNeIxGfvChr5NpGRuH6UXQWZZSzXORwR+tHkBcgdSfyqm+obUyp57imLqOV+Y/0pcyCzNB7eMquQOO9J9jDAdBj9azX1EHjcB34NSpqy7cFsn2o5kHKzQ8lV5IBxUiAKvyqWHrWO+pBlJBwDwTmnpf4XCsD+NHMg5WcuuugrtLVYh11cgMw4rgfNlByM1ItxIOSaxudHKj0NdajPIYDinrrID4R8Zrzxbxycc59alXUZF7mjmYciPRf7XQoAGpG1NSMq4+lee/2pLnhjQ2qyhTgmjmYuRHfy6so+YsCO/NUZ9cQNwRk9K4l9RlbIDHmoDdyHHei7Hyo7KfWQw+9j2qqdZ9wO+a5hZ3cZJNM3uc5NIdjp/wC2G5YPTH1twMFya50Fippqh8/MTQOxvtrTdA2c0o1s9m6frXPlHPY0jRshHXmgLHRNrrj+I88daadbY/xHisLy5COQaUW0gHANAWN1dbJJO409NawME1zwglxkg0rJIB0xQFjpU1k/wtgVJHrW3+KuTPmBcdKFMgHegVjrv7bI5VutJ/a5Y53VyXmOBg54pBLJ6nmgLHUPrbbvlbp61G+tnO3P61zZdx65NKNx570Dsb39rMp68Gg6ywHBwKwBv9zzTxG5HU0gsbX9tPtwW/DNKmssBjcfzrEMDmhYJMcUBY6I6E4yNuDUR0QqeVzXo7aej/PgDNM/spGboBWnIzL2h5vJojAZ2kU3+xXIyBXo7afESVcAEcUJpsZIVVB/CjkYe0R5uuhyHnbj8KlTw/Iw+6a9GfS40ccDnoKd9iRBjaOKORh7RHnK6A4OCtSDQep25r0NNOUsWChh7ULpsWDhRn0p+zYvaHnL6IyA4XIpYdFY9V6+1d/LpiKcLTU04E428+tTyMr2iOH/ALEJGMUv9iBcAiu4ksEHbkGlGnqw3HkntT5GL2hxUejAttK1M+hAMNq5H0rtk02M4LryKeLaJWxj9Kfsxe0OLTQwBypz7CnHQwwB549BXZtajGUGVxQtqij5QOKfsxe0OMbRlAxjrVc6IzMfl4HtXbyWahemOeKU2qFRkYP0pezH7Q4CbRGH8NRvojhc7eMV6C9irRjAyfWmfYEKgFBxS5GP2h51/YzH+A5NRNpDKcbcYr0eTTlyMDH4VXn0rLAEcfzpcrGpo87OmMXwBUiac2cFa7b+y18zhcY9qcNMGQNvP0pcrHzI45dLGAcVPHpB3ZwfbiuvGnLkhlxjjipF08HnoMd6OVi50coNHYqCFxS/2UBwyc/WutSxHbnI6VItj8tPkYucm+2o3y54+tSNeIEG3oK4KPWNmPmqQ62xI+bIqvaMXsztGuo2bOfm9SaRruMOhBye+K42PWBnJbOKe2sAuWyM0e0YezOykvkZh82Mc4qI30TZBPNcZJq5z1xn3qGTWtmOeKXOx+zO3W/VScNgelSx3ql8ZGD1JNcAdZywGc++akXWsAfPg0c7D2aPQvtKHnK/nT1nQ5K9O9cLFru44L9atrrCBcBvzNV7Qn2Z1omRztU5Hc04TRRqcY46VyJ1ZV+6/J96UaqCT8+aPaB7M6WS/Xog5psl6AnUD3rlZdXAbg4PrVW51YsPv0vaD9mdguoqqlWII9jT4r1cELgk+9cIdXIIG406PXNh4bkUudh7M72W7QIBwSOaVLtGA3YBrif7e3MMmnrrYBwSKaqMPZnai7TzMKeBTTeKswAIwe1cf/bAZcg4PsacmrjILN1p+0F7M7L7RGzZzzjtThIHYE4GOK5VNYUEZYHtmrMWsoRjeOOlP2iFyM6SWKI4xjNRoB5mD2HashNTHJD49MnipF1RGXlvm6Zp86Fys0mEZbJGRT9qnjORWT9uVQOe9DakFT5eTRzIXKzVmKrIMYIqVCwUYAxWDJqYk5JwRTf7WA4y34GjnQcjPLPNkx1NKty4961P7LbGdvB6UjaUQu7b/wDWrA6rmd9pbPBIpRcNycnNXv7KbbkrTF0uTJ+X8KAKRmdz9KYxdjznFaK6a4PTHtUg08vjg8UAZO9sAClLv0rYj0piCSOacNKbkFcGgDGWeRW78VKt2/qa0n0iQ9F5qs+luuflNAEP25iRyR2pft7rxk4pDYuDjB/ChrJ+OOtAAb0t35qF7h34BPFTpYMeoNSDT23cLxSAoiVyeTR5jAc1rLpjEcjpUg0o9SvFMDGEjE5BPHalN0xOMk1rHSSpG0cGopNLKvwpoC5RW7kU9acLx2PBNWm01iOFpv8AZrgZA4FAEBvmGPm5FTJqhB4JpjacwJwKjWwkDYA60AXU1WTHLGpY9Wdf4jzWc1jIuSc5pv2dx1pBobA1o87mPHvUb60x5DVkm1cngGn/AGGQ8kGgC/JqztjDfWgay68A1SFjKegpG06XPQimB6KNN5wE49aUaZlcIme54rpDArLkgZFMjhBY8jjtW3Ijm52YH9lgAgpwKiOl7GzsNdEEP3WwAepp/lruwOQBR7ND52c3/ZqHOUyfpTf7NVWPyV0DxBmP5UoUcbhgUezQc7MSPTcMeKnbSVKDHXrmtgKjElf0puRnaT3o5ELnZjLpqqfmXnHFVp9NVwRtH5V04WMEAgHGKjlSEOxxg4o5EHOzkzo4Zs7OcUw6SoPK49a6tYyytheOlONmNuCAc0nTKVQ5WPSRtOBn8KeulqueBXS/ZV3YwcHnipDbRbc596PZh7Q55NOAXJXJPWpRppPDCt0W8ezcF5pu1VYZGT2xT9miedmMulIU6DJ5pBpaMOU6+1dBEqBSNvOaYyjftOAB0o5EHOzmzpSqSNgJ9BTG0sHoldOUUFSVyR7U54kLAgY+vajkQ+dnJnSBjJHOab/ZCjnb9OK6n7OrOeORTpIUZcLjIFL2Ye0OSOkq4JKj3qv/AGKpOAuTXYwwpu2MOexoNgoJdTj2o9mP2hyC6OvdRmpRpAyMJxXUSW+AG2Zp7oNm4KPxo9mHtDmRo8eF479qc2kJx8mfeulECFQTwRUZhXPcfSn7NC52Qx6gpBy3P1p4uk2A7uSfWuHXVDuADHFOOsYJG/gcVHOy+Q7R71TxnAqP7aONp+uTXHHWSeQ4JqGXWWIwGGKOdh7M7Z9RRSGBzxUU2p+YoywxXEnWDsID4wfWojrDOfvcClzsfIjuY9RULyc5PahtRDjk49K4YaowH3uvvSnVyBjceaOZhyI7gaioTGeR0p63yngnmuHh1VgRzkVZi1dcnOefSjnYciO6+3ReUBu5HNOF4uM5xxXFR6tkbT07VL/a4zy2QPen7Qn2Z2A1BejfiajmvVIO0j/CuQfWAQdrcVCdbJON3NHOHszso9RVFwTmoJNRAlyeF61yEus4HDHiqs+sl8AHAo52P2Z3H9qAbsOQPSmnVenzZPXJrgn1Zm43dO9INWZT940udj5EehrqXybiOfY09NRBAJPfvXn0euN0LcYqWPWm/vfTmjnYciPQhqC8/MvNN+2gHIOCTXDLrJJwWp6a4QSGfpT52L2Z3D3Suw+bBA609br938rVw669kYzz61N/bSMn3yaftGL2Z2b3fyAlh780pu1RQcg57VxR1bcAN1TrqagABufXNHtBezOs+0huVIJ9KjOoheAtcz/aqD7zfjmoW1Zd3BzR7QfszivtT7eCaFuHYckitH+ymHG05p40piuSvArM2Mrzm3d6a8rj1raTSCy5AobTMAgryKAuYYL54zSqJM55FdAmkkjAWlGjtgjbyPWgLmB85HBIpMv05yK6H+ymAyBnHWmy6U6g/L1pBcwTI+OODQksikZJrVbTW252kYqP+z3A5BoApC5cMeTQl05ycmrDWLq4GMg09NPfGdtAFFriQE8mkjkc8kmtMaYzc7TU0OkyMp+SmBi+ZKxxzjNKQ7etdHBobj5mXk1L/YbAcjn0oC5zAgkA4HWkMMmOldb/AGTjA2nApp0rk/LQK5yaxuFyRzR86jPTFdTJpPIwmahbRyxI20Duc4XcDIzS+Y2MDNbx0jbxjNI+kE8Bc0BcwhK64xmlEsmcDpW6dGYAHbzQujMCRtoC5iG4lBHJp4vZB3JrUk0lgPumq0ulMAcCkBWa8Zh1OKT7UfWn/YHC4AoWykA4XP4UAeitpoSQMy5xT/7NRhjGM9gK3pIQ2B2pvlhSAW+nFb8iObnZjrpewA7crmlbTIwQSvBrWkI6KwHHSmxAA/Mee2fSnyIOdmR9gVSQBgZ61IdPCsDjINaxEfOQOeablBgAZ7YNHIhczMsaYjHkAD2FJLpe1jjG3FbahdoIOPao7gps5I+maOVBzMwX0xTxxz1GKjk0kYwu0+3pW+oVlBHQjrTYzHwBjPrS5EPnZzy6IuNxTnNINKH3QnvXTKE/iwO3NDiNFJ4+tHIh87OfTS0JwQT2q5FpaAhcY9a0lMZG7g/Sl81FPOB9afIhc7Ka2MbOFXPFPbTlAOByPbrTxcoshYYODU32uNsFW607JCuykLIHggcU6SwR0+4PXkdKt+epbII5NO89NxCn1osguzMaw3JwpH4dqYbFAAcc9DWtFIsh+U9OKYdrTEEFaXKg5mY4sQBgIee5qSLTR5hwB+NbHkAnAP50/KBSRgtRyIOdmM+niQsCMY70Q6WA3I+lahfIGFB7c0rShdozgDrRyoOZmXJpSNnC9KqHSUJIYA5FbrTfTr+dAKkhiOfSjkQ+dnMHRo8sQuaauj4UcH8q6iSJNu7gc9KlAhUAH8Kn2Y/aFAagrZOevOahnv1wW3jP1rjzq7BAA/WoH1bAPzVPOy1A68XoXDb93tUjakrKPmANcCdVYk4Yj8acmsNj73SlzMfIjvzfKVXJyemc0G7XOA2K4ePWi3y1K2tYGQRT52LkR2MuoKuct0HBqrPqgcdsDvXJSawzD71VJdUJXOfwpczHyI7QasPLx5mMU1NZRPmU57VwZ1J8EButR/bpNp+Y80rsrlR6BJrYJB3jHpTRrkYX5mDH3rz5r6T1NH2qTpk0XYciPQf7YBACvjvimzayrDAO41wY1GReMmj+0ZN2c0czDkR2h1TAI3GmrrQTjPtXGSX0vXmmi7Yjk+9K7Hyo72LVwUzv5qxBqy7iM/rXnwvjjINWYNRYDG79ad2LlPQ4b4KpOQAferC3alA276GuBt9WYg7mq0utELgsDTU2Q4I7s3waMYIOepqF79A2A4x14rj11g7R83H1pravycsMmnzhyHUzX3OA9V31MbTg4A6muTn1cs2M1Tk1NifvcVPMyuRHbQaqoBJOMdqnTVlONzD8a8+/tNlYZY4NKdVbP3jijmYciPRP7SWRsKQOPWpRfIw5JGOODXnCaxIvQkfjTxrsg4Lc/Wq52L2aMgzPnPNG92U4zVtoUDKMdas2ttGzNkVBoZZikZeKBFIo5BrpI7WIYG2h7aL5ht6Uguc2wcDgYNA809a3jaQ4xtqM28a9BTC5hlZCeQad5Lkjg4reNrEFUgHJqxFaxZX5evWgLnPJZsTnB5qcWDEDiuqjsoBOi7eKuPZQAY2cUhXOKGnM/wDDUi6a4HC/jXWG2iUjC1YjtYtgO3k1VhcxxjaWxGdtRtpbDAx+ld2bWLA+XvUZtISmdtIOY4f+zm54qKSyYcEGuyS1i+Y7elRvZw4b5ehoC5xptGHY8e1RGN17V1s9nDlfl7VUe0h3420FXOcxICDyKcZJAe/FbU1vGONtQPbxhiMUrgZokk5oZpOvJBrRW3j2K2OSaspaxFeV7UDMT525wQKUQuTzmt5rWIL92pEtIs4x0FMVznzbueMU4WkgOcZrqEtIsZ21YjsoCRlaBXOTFjIeik80jWEmfuH8q7RLWFW4QU+WCON8Kox1pBc//9k=',
    '3': 'data:image/jpeg;base64,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',
    '4': 'data:image/jpeg;base64,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',
    '5': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCADcANwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDqTjoetRt1qZwpPXpTG4616p8iQNxwKYRkVMR3zTcYoEMVcUuMt0pR1Bp+AR70DAAge1KpH400E+lPAwaAHjDU4DnimLjHBpw9qQEyjHAqWM45qJOe9TR449qTGmSgnFO7dKb7djTs7RxzUtGiYq43dKkAPao065P51Kp4680rF3HYx0p47e9M3jrjmnk88VNi0x20YwfwppjzxinKdzYp3H40hjBEfwqNxtyFqcA9O1NcEmmJlVhweagljz7EVaYZNQyfLmrRlIz5l25zVOTgdK0JQDnNUpccjFWYlGXJOKaq8VNImTntTRHgdaoRfbJpM5GKj8wkUK5BpADHAxTTkj0ozk8ijtQAAgLz1pdxxxTN3YijdkYFAEvSnA5NRKcU8HnigCReOtSLx0qIdeacGwxHWgCcY71KhANQIRjmpBxQBMrdzTtwPSoN3FOD8gZ4pWHcnVscetPDYOKgDAnOaXfk4pWKTLW7jA5pwPr1qujdhUiNgc81LRomWU4XOaemOxqtuyeOlSq3p1qDRMl6t1xSMBg45pN3zZzSnGzNA7kTjNVpPerDnLCq8+SfaqRlIqTL1qnOOPerknGQaqyrmtTAqMpI9xTMGp2BFJtx2oArCTNPD9qqK5J471IpJBxQMsoST60pJFRK5GOaUv0oAC/rShj1qPOWxS78UASBs1Ip71CDxmpo8AZoAlByOKcgBbmo85+lSKDjNAEi5zg04tjg0ijjrzSSDP1oEO34PBpCcnmmn7uM00fe60hk4YqeOlSBgTyagBJqQDigCWNsH1FWE/MVUQ4WplfjipZaLCnng1KOcc4qujc81MDkZFSzVEoABoZj0pgY7sY/GlLVJQ1+ee9VZW5NWHPHWq0lUiJETkkHFVZOasO3UVXbqa0MGQMPzoJNPYZNKNv1pgYvPQVIhOajXp0p8YJNAyQ5OKU4pAcUpweKAEyc8GlHU0h4pUA5oAkWpUI6VEnAqZBuHIpASKB3qdQO1RIhK881IgIX2oAeByMGhjzilAx9aaV7+tAWGsM9KVQRikPOBilHTFAAX7Ypw9e1CCnDjtmkFhwIK+9SKSDUY61IowRmkykTJkkZHFSqT0Woo+nWp4sZIqGbRHg8Ak80nU4I696dgAZzTcccnFIuxFIMnrioHznGancZGaryeo61SMpET8Cov4uRUpBxhqjIxVoyaIpDk8dKbszTmGCaYSexpiMoKMU9F9Kd5eKkVDtoAbsxSFcdqnWM9aXYM0AQbCetOWM96mCEGpFSgCONOasIvanRxDOfSpxHkgAUrjtciVD27VIqYHJqVUA+lKFBJGcUrlWIiuMHrSbdw96m2Y4BzSAZPFAWINuDnrSYJ7dKldT1FJz2pisMAIp656cUp/UUoGDmkMQjmnDng0FcinADgUhokQe9TAYxUSrjntU6HBGalmsR4UbTmm57dqf97jFKVGOmak0InA28VWYZq0449qideOKpGbRVlBxxUTA4qy4IPSoWXJ4FUmZNEDqByabt96nZQeCaYY/UiqIsUlTinrEQeasiIHpUqxACmSV/K4zSeUBzjFW/L5pNuT0zQMreXxnHNSBOBgVN5ZyMVMkPY4pXGkMii5yOalEfPpU0UZA461IY89ahs1SK+w9xRtAOcVOV21Gw56UXG0RMB2HNNXjrU2zIo2fWmSQMoP0pNgH0qZo+tN27RQKxEqgdaUrzinsD6UqgHtzQAij0pwQEYqQJjFPCE0mWkMCfLg04KQakWMg561Kqg8nrUlpDFJPGKcUzyPrUiryDTpFA9RSKK4jJUkVGVJ4NWhnOF796RwNuAOaAaKMsfbrUJQ44q46/KeOfWowmPxqkzNoqGMHoOaXyV/iPNWTGOgo8od6q5FiqoHpT9gY1JtCnpUm0HkU7kJEWz0o2ZqVU+aniMdRSuVYhjQMaeqfNzT1TbzmpI09c0mylESLjrUqqOpNBUDpTuFGDzUmliN1B6CmFF556VLuGelRspLA0CZFgYpSNwyKdt7DrShMdaYrERHOOtN28c1MV54FRtnPNMTQ3I280LnPApWX35pyqdoIpkjguBUsYGMU1M49akVcHjBqGaIeU5ApyRgmjBYelKEPrmkaJDguBwM0pUsOaUDH1pwOakqxEV44qKRScmrX61G6lj0wKYmV1A2nNRugxmp2AGcionGcVSM2iMLnJzzTSnPOal4H0oYnPApisQMuakAwopuw54qUJgAUXJSGBNo471IiqRxShTzim7ccHpSuWojjHgDFKox8tOBG3pSEDOR0pXHYdGozk0jnGSRQDnPNMc9RQMM85NBYdqFwOvJpp4PamSKeuQKUjkGm5yMcUb+xoEKSAc1FIeelLnrmo2OVNMTFB79aRSc8Goi3OBSq3pTJJ0fnmpkf2qop71Ojcc0mWi0r5J7VIuQc+tQAjOalEgB+bkVBoiXIB5oUgsaYxDY9KaWAPBFIokJ2njmkZzt5pgYk9eaccsKYDJBkAntTGAyal74IprBRRcmxG0YIFIExxxUw6cdqAm7nNO4rFMNk8U9fmpAByacSB0ouOw/oPp1oJHamk4+lCkYpDAnJ4HFKAcZpCyhsdBSO2B14oAbu5oJPSmkY+YGmu+CB1pkkhz3ppJ5OQfSo2Yg9eKR5Plpkjy3OaRm7d6hZ+RSb84piHueeGphYHjpTC2Qc1GWINNEMc7Y6GgMQMZqJiD9aVO3PNUTcsI9TREsMHNVQwBqdJNq1LLiyyhxUit6niq4kytJvJ4qDVFoyZOAeKTcd3HAqFXzgdhTic9aB3JgTmpEfBqqGwRzUik5z2qSkWDluQOKUfNUcRIBpQTnp1pFJEm0n2pORxjNOH3fU0GMnvSuVYzzkcGgDdTjyOlNLYqzG4p470Egjg4qPdk805SDkUwuIqnPJzS7cnOOKFwOnWnn2pDI92QeMU3nrnNOKnGTUZyDgUxMSR+QBzUbZHWnHaDzkUyQ5GFqkZtjGHzc0fjSHI4zUZbByaqxFx54NMYnsc0jPxmombjjiixLY45H1oViDUe496UPg9aqxFycPzmplbIqlv4zUiSZxSaLTLm75QBT94HWqoc9RTt/HvU2L5iwZB0FO3/jVQNk1IGpWK5iyCPpUiHBGT0qsJQSADUytuPTipaLTLSt1HrUqcjJ6iqinpUwJHrUM1iydTxiplbAqFOPmJpxJzxUmhnK2Rg0zcQfWlwV9800dcmtjluL1PSjODgCgEYxTsAYNArjgDTto2nrSBuOlPxleDSLIwOMGonOetStmo3HHrihEtjGUHrUDdDnNSs2B0qFjnmrRlJkLEbuc01m9elPk/OomB9KsybEkZcc1Fu4605xxjFRMeMCmIcz4HWo93Oc1G2TzTS2MUAWA9PRupxzVQSHnNPWTjrQBdWT3pxfPFVEb0p+49qLBctbuOKVX+aqyvjqKcH5NKw7luNwT0xU8cnOO1U4+ehqZXIxmpaNIyL8bDIPXNTA85zVSNvlGeKswjPJ7Vm0bxkWPx4qcEY9arqaUyj+9iosbJlFiW4pXBxg807AHSkAJwTWpyjVQnpUgXA5609VHUCnAZIzSY0JsBApQuMg809R82CKUqMZ6UiyuwJAGKjbK5NWWAJFQuMk+lNEsrNzUTAAc1PIoBqJlJ5FWjFkDpg+tRupqfaSee1MIPSqRmys4I4HWoZAelWnHX1qBwQKokqv8AL05qJjxnvUshwTUDMTQMTkj2p2cYqNmOMU1j05oAsq5z1qQPg9c1TR8VIGwQTQBa389akQgjNUw/GamR80AXI39Ksq3SqMZ+bmrMb46UgTLqsOCBVqIgLk5qhG/rVpGymB1qGjaMi2jcetOLgcYzVdCduCeaQtz1rOxspDyB0pQOnFMd+nvTlPeqJRImMc8VIozz0FMUgjgc09GwMHvUlJDhgnNOb5ugpASeABSj5hjkYpF2IzjpUcik/SpcEdOTSuvy4zTuJoqMikHpzUDAjjFWplANQtyCapMykis3f1qJ8g81NJkduKgY8GtEYSRXkJyeeDUEhHOCalmOTiqk7YHFUQRyPzioC3fNLK+enFV2b8qYCs2c460wse9NZiBkUxnB60ASeZjpT1fK89aqFqcr9qALaueMmrMbDoKz1Yipo3B70AaMbZNWoW5z1rOiccAdKtxyYOOKQF5Dk81OsmMc1SifjNSKSc5NKw0y6kp6igzAH5hzVVSQeDTi4PalYrmLhfoakV+lVlYkZNODHAqGaotKTngVIjnPSqyk4z3xUkRP51DNkW94ZeDQDxgdaYvAJHBoZiBxUlolU/nQRkHNMUnFKTxn2oHYjl2niq0mP4R1qduxqu/eqRnJEEhOM9hVSQ8k5qeUkkA9Kryda1RzSK0jc+9VJu5NWphwaoSEjNWZkDuRUDNjrUjnrVZmJbmmArGo3NKx5qNjQICxximqeaDznPak6ZoAnD1LG2enSq0ZzwalBwaBl+I4PtVmM81QjJxVyE/L+NIC9GTtGKmjOOtVojzipkOTzQBMzYHFMDDvSj7x9qaTk0gP/9k=',
    '6': 'data:image/jpeg;base64,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',
    '7': 'data:image/jpeg;base64,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',
  };
  const planetImages = {};
  Object.keys(PLANET_TEXTURES).forEach(k => {
    const img = new Image();
    img.onload = () => redrawAllPlanets();
    img.src = PLANET_TEXTURES[k];
    planetImages[k] = img;
  });
  function drawPlanet(canvas, idx){
    const rect = canvas.getBoundingClientRect();
    const size = Math.max(1, Math.round(Math.max(rect.width, rect.height)));
    if(size <= 1) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(size*dpr);
    canvas.height = Math.round(size*dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,size,size);
    const r = size/2;
    const cs = getComputedStyle(document.documentElement);
    const pc = (cs.getPropertyValue('--c'+idx) || '#888888').trim();
    ctx.save();
    ctx.beginPath(); ctx.arc(r,r,r,0,Math.PI*2); ctx.clip();
    const img = planetImages[String(idx % 8)];
    if(img && img.complete && img.naturalWidth){
      ctx.drawImage(img, 0, 0, size, size);
    } else {
      ctx.fillStyle = pc; ctx.fillRect(0,0,size,size);
    }
    const shadow = ctx.createRadialGradient(r*1.15, r*1.2, r*0.25, r, r, r*1.05);
    shadow.addColorStop(0, 'rgba(0,0,0,0)'); shadow.addColorStop(1, 'rgba(0,0,0,.45)');
    ctx.fillStyle = shadow; ctx.fillRect(0,0,size,size);
    const spec = ctx.createRadialGradient(r*0.6,r*0.48,0, r*0.6,r*0.48, r*0.55);
    spec.addColorStop(0,'rgba(255,255,255,.5)'); spec.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle = spec; ctx.fillRect(0,0,size,size);
    ctx.restore();
  }
  function redrawAllPlanets(){
    pads.forEach(p => {
      const c = p.querySelector('.planet-canvas');
      if(c) drawPlanet(c, +p.dataset.i);
    });
  }
  let resizeTO = null;
  window.addEventListener('resize', () => { clearTimeout(resizeTO); resizeTO = setTimeout(redrawAllPlanets, 150); });

  function buildPads(){
    gridpads.innerHTML = '';
    for(let i=0;i<numColors;i++){
      const b = document.createElement('button');
      b.className = 'pad'; b.dataset.i = i; b.setAttribute('aria-label', LABELS[i]);
      b.innerHTML = `<canvas class="planet-canvas" aria-hidden="true"></canvas>`;
      b.innerHTML += `<span class="key">${KEYHINT[i]}</span>`;
      b.innerHTML += cbSymbolHTML(i);
      gridpads.appendChild(b);
    }
    pads = [...gridpads.querySelectorAll('.pad')];
    pads.forEach(p => p.addEventListener('pointerdown', e => { e.preventDefault(); press(+p.dataset.i); }));
    pads.forEach(p => p.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){ e.preventDefault(); press(+p.dataset.i); } }));
    requestAnimationFrame(redrawAllPlanets);
  }
  buildPads();
  levelBtns.forEach(b => b.addEventListener('click', () => {
    if(running) return;
    levelBtns.forEach(x => x.setAttribute('aria-pressed', x===b ? 'true' : 'false'));
    numColors = +b.dataset.n;
    device.dataset.level = numColors;
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
  function tone(freq, ms, type='sine', vol=.18){
    if(muteEl.checked) return;
    const a = audio(); if(!a) return;
    const o = a.createOscillator(), g = a.createGain(), t = a.currentTime;
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + .01);
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
    tone(90, 700, 'sawtooth', .14);
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
      if(done > best){ best = done; bestEl.textContent = best; try{ localStorage.setItem('orbita-cosmica-best', best); }catch(e){} showToast('\u2b50 \u00a1Nuevo r\u00e9cord! ' + done + (done===1?' ronda':' rondas'), 'record'); recordBrokenThisRun = true; }
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
    { sel: '#device', text: 'El sistema enciende una secuencia de planetas. Memorizala bien.' },
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
