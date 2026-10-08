"use strict";
(() => {
    var Vo = Object.defineProperty;
    var Ko = (i, e, t) => e in i ? Vo(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t;
    var v = (i, e, t) => Ko(i, typeof e != "symbol" ? e + "" : e, t);
    var Qa = `/* DOVY: DEADZONE \u2014 game UI. Tactical survival interface.
   Charcoal metal panels, dusty off-white type, military green and amber actions. */
:root{
  color-scheme: dark;
  --void: #080b09;
  --deep: #101511;
  --glass: rgba(22, 26, 24, 0.78);
  --glass2: rgba(34, 39, 35, 0.82);
  --line: rgba(170, 178, 163, 0.16);
  --lineHi: rgba(200, 210, 193, 0.34);
  --text: #eef0ff;
  --dim: #a3a8c8;
  --mute: #636985;
  --acc: #caa260;
  --accHi: #e6ff8c;
  --accLo: #5d7a0c;
  --cyan: #93a999;
  --lilac: #7b926d;
  --pink: #a77b5c;
  --gold: #ffd36e;
  --red: #ff3d5e;
  --warn: #ffb547;
  --green: #8dff8a;
  --holo: linear-gradient(100deg, #93a999 0%, #7b926d 28%, #a77b5c 52%, #ffd36e 76%, #caa260 100%);
  --holoLoop: linear-gradient(100deg, #93a999 0%, #7b926d 17%, #a77b5c 33%, #ffd36e 50%, #caa260 67%, #93a999 84%, #7b926d 100%);
  --chrome: linear-gradient(180deg, #ffffff 0%, #d8ddf0 30%, #6d7392 48%, #2b2f45 52%, #9aa2c4 72%, #eef1ff 100%);
  --conic: conic-gradient(from 210deg, #93a999, #7b926d, #a77b5c, #ffd36e, #caa260, #93a999);
  --gloss: linear-gradient(180deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.06));
  --display: "Orbitron", "Arial Black", "Helvetica Neue", sans-serif;
  --ui: "Chakra Petch", "Arial Narrow", "Roboto Condensed", sans-serif;
  --lcd: "VT323", "Share Tech Mono", "Menlo", monospace;
  --mono: "Share Tech Mono", "Menlo", "Consolas", monospace;
  --r: 14px;
  --sa-l: 0px;
  --sa-r: 0px;
  --sa-t: 0px;
  --sa-b: 0px;
  --cs: 1; /* control scale */
  --co: 0.85; /* control opacity */
}
html,body{
  margin: 0;
  height: 100%;
  background: var(--void);
  color: var(--text);
  overflow: hidden;
  overscroll-behavior: none;
  touch-action: manipulation;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  font-family: var(--ui);
  -webkit-font-smoothing: antialiased;
}
*{
  box-sizing: border-box;
}
button{
  font: inherit;
  color: inherit;
}
.ic{
  width: 1.15em;
  height: 1.15em;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex: none;
}
#stage{
  position: fixed;
  left: 0;
  top: 0;
  container: stage / size;
  overflow: hidden;
  background: var(--void);
  transform-origin: 0 0;
}
#world{
  position: absolute;
  left: 0;
  top: 0;
  display: block;
}
.layer{
  position: absolute;
  inset: 0;
}
.hidden{
  display: none !important;
}
:focus-visible{
  outline: 2px solid var(--accHi);
  outline-offset: 2px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 type treatments \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.chrome{
  background: var(--chrome);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.7)) drop-shadow(0 0 10px rgba(123, 146, 109, 0.28));
}
.holo-t{
  background: var(--holoLoop);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: holoShift 8s linear infinite;
}
@keyframes holoShift {
  to {
    background-position: -300% 0;
  }
}
.spk{
  position: absolute;
  width: 14px;
  height: 14px;
  background: radial-gradient(circle, #fff 0 18%, rgba(230, 220, 255, 0.9) 30%, rgba(123, 146, 109, 0) 70%);
  clip-path: polygon(50% 0, 58% 42%, 100% 50%, 58% 58%, 50% 100%, 42% 58%, 0 50%, 42% 42%);
  pointer-events: none;
  animation: twinkle 2.6s ease-in-out infinite;
}
@keyframes twinkle {
  0%,
  100% {
    transform: scale(0.2) rotate(0deg);
    opacity: 0;
  }
  45% {
    transform: scale(1) rotate(45deg);
    opacity: 1;
  }
  70% {
    transform: scale(0.6) rotate(70deg);
    opacity: 0.6;
  }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 buttons: glossy jelly capsules \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.btn{
  position: relative;
  isolation: isolate;
  appearance: none;
  border: 1px solid rgba(200, 210, 193, 0.24);
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 55%), linear-gradient(180deg, #24223e, #141327);
  color: var(--text);
  font-family: var(--ui);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 9px 18px;
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -2px 6px rgba(0, 0, 0, 0.35), 0 4px 14px rgba(0, 0, 0, 0.35);
  transition: transform 0.08s ease, filter 0.12s ease, box-shadow 0.12s;
  cursor: pointer;
  white-space: nowrap;
}
.btn::before{
  content: "";
  position: absolute;
  left: 10%;
  right: 10%;
  top: 2px;
  height: 44%;
  border-radius: 999px;
  background: var(--gloss);
  opacity: 0.35;
  z-index: -1;
  pointer-events: none;
}
.btn.pressed{
  transform: scale(0.96);
  filter: brightness(1.18);
}
.btn.primary{
  border-color: rgba(240, 255, 190, 0.8);
  background: radial-gradient(120% 120% at 50% 130%, rgba(255, 255, 220, 0.55), transparent 55%), linear-gradient(180deg, #ecffa8 0%, #caa260 45%, #8fcc00 100%);
  color: #101800;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(60, 90, 0, 0.45), 0 0 18px rgba(200, 255, 46, 0.32), 0 4px 12px rgba(0, 0, 0, 0.4);
}
.btn.primary::before{
  opacity: 0.85;
}
.btn.danger{
  border-color: rgba(255, 190, 205, 0.7);
  background: linear-gradient(180deg, #ff9fb2 0%, #ff3d5e 50%, #b0102e 100%);
  color: #fff;
  text-shadow: 0 1px 1px rgba(80, 0, 20, 0.6);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -3px 6px rgba(90, 0, 20, 0.45), 0 0 16px rgba(255, 61, 94, 0.28);
}
.btn.danger::before{
  opacity: 0.7;
}
.btn.ghost{
  background: rgba(10, 10, 20, 0.35);
  border-color: rgba(220, 225, 255, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
}
.btn.ghost::before{
  opacity: 0.12;
}
.btn.teal{
  border-color: rgba(160, 250, 255, 0.7);
  background: linear-gradient(180deg, rgba(147, 169, 153, 0.45), rgba(40, 120, 160, 0.55) 55%, rgba(20, 50, 90, 0.8));
  color: #e9feff;
  text-shadow: 0 1px 1px rgba(0, 40, 60, 0.6);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 0 14px rgba(147, 169, 153, 0.25);
}
.btn.teal::before{
  opacity: 0.6;
}
.btn.small{
  min-height: 32px;
  padding: 5px 13px;
  font-size: 12px;
}
.btn:disabled,.btn.disabled{
  opacity: 0.42;
  filter: grayscale(0.7);
}
.ibtn{
  position: relative;
  appearance: none;
  border: 1px solid rgba(200, 210, 193, 0.28);
  background: radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0) 55%), linear-gradient(180deg, rgba(40, 38, 70, 0.85), rgba(14, 13, 26, 0.85));
  color: var(--text);
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
.ibtn .ic{
  width: 20px;
  height: 20px;
}
.ibtn.pressed{
  background: radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0) 55%), linear-gradient(180deg, rgba(147, 169, 153, 0.45), rgba(30, 60, 100, 0.85));
}
.row{
  display: flex;
  align-items: center;
}
.row.gap{
  gap: 8px;
}
.row.end{
  justify-content: flex-end;
}
.row.between{
  justify-content: space-between;
}
.col{
  display: flex;
  flex-direction: column;
}
.grow{
  flex: 1;
  min-width: 0;
}
.muted{
  color: var(--dim);
}
.mono{
  font-family: var(--mono);
  font-variant-numeric: tabular-nums;
}
.tag{
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(200, 255, 46, 0.12);
  color: var(--accHi);
  border: 1px solid rgba(200, 255, 46, 0.45);
}
.tag.red{
  background: rgba(255, 61, 94, 0.14);
  color: #ff7d95;
  border-color: rgba(255, 61, 94, 0.55);
}
.tag.teal{
  background: rgba(147, 169, 153, 0.1);
  color: var(--cyan);
  border-color: rgba(147, 169, 153, 0.5);
}
.tag.green{
  background: rgba(141, 255, 138, 0.1);
  color: var(--green);
  border-color: rgba(141, 255, 138, 0.45);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 currencies \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.cur{
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  padding: 0 11px 0 7px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0) 60%), rgba(8, 8, 18, 0.62);
  border: 1px solid var(--line);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  font-family: var(--lcd);
  font-size: 19px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
}
.cur .ic{
  width: 16px;
  height: 16px;
}
.c-cash .ic{
  color: var(--acc);
  filter: drop-shadow(0 0 4px rgba(200, 255, 46, 0.6));
}
.c-credits .ic{
  color: var(--lilac);
  filter: drop-shadow(0 0 4px rgba(123, 146, 109, 0.7));
}
.c-tokens .ic{
  color: var(--pink);
  filter: drop-shadow(0 0 4px rgba(167, 123, 92, 0.6));
}
.cur-add{
  margin-left: 2px;
  color: var(--acc);
  font-family: var(--ui);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 screens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.screen{
  pointer-events: auto;
  position: absolute;
  inset: 0;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(70% 60% at 92% -8%, rgba(123, 146, 109, 0.2), transparent 60%),
    radial-gradient(60% 70% at -6% 108%, rgba(147, 169, 153, 0.1), transparent 60%),
    radial-gradient(40% 40% at 60% 120%, rgba(167, 123, 92, 0.12), transparent 70%),
    linear-gradient(180deg, #0c0b17, #080b09);
  animation: scrIn 0.22s ease-out;
}
.screen::before{
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.022) 0 1px, transparent 1px 3px);
}
.screen::after{
  content: "";
  position: absolute;
  left: -40%;
  right: -40%;
  bottom: -2px;
  height: 46%;
  z-index: -1;
  pointer-events: none;
  background-image: linear-gradient(rgba(123, 146, 109, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 146, 109, 0.22) 1px, transparent 1px);
  background-size: 48px 48px;
  transform: perspective(260px) rotateX(58deg);
  transform-origin: 50% 100%;
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 70%);
  mask-image: linear-gradient(180deg, transparent 0%, #000 70%);
  opacity: 0.55;
}
@keyframes scrIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}
.topbar{
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px calc(12px + var(--sa-r)) 6px calc(12px + var(--sa-l));
  padding-top: calc(8px + var(--sa-t));
  min-height: 52px;
  background: linear-gradient(180deg, rgba(20, 18, 38, 0.85), rgba(10, 10, 20, 0.35));
}
.topbar::after{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--holo);
  opacity: 0.55;
}
.topbar h2{
  margin: 0;
  font-family: var(--display);
  font-weight: 900;
  font-size: 19px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.05;
  background: var(--chrome);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.7));
}
.topbar .sub{
  font-size: 11px;
  color: var(--dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.content{
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 12px;
  padding: 10px calc(12px + var(--sa-r)) calc(10px + var(--sa-b)) calc(12px + var(--sa-l));
}
.scroll{
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: var(--lineHi) transparent;
}
.scroll-x{
  overflow-x: auto;
  overflow-y: hidden;
  touch-action: pan-x;
  overscroll-behavior: contain;
  scrollbar-width: none;
}
.panel{
  position: relative;
  background: linear-gradient(180deg, rgba(36, 33, 64, 0.72), rgba(14, 13, 26, 0.84));
  border: 1px solid var(--line);
  border-radius: var(--r);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 8px 24px rgba(0, 0, 0, 0.3);
  padding: 12px;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}
.panel::before{
  content: "";
  position: absolute;
  left: 14px;
  right: 14px;
  top: -1px;
  height: 1px;
  background: var(--holo);
  opacity: 0.6;
  pointer-events: none;
}
.panel h3,.sec-h{
  margin: 0 0 8px;
  font-family: var(--display);
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--dim);
  display: flex;
  align-items: center;
  gap: 8px;
}
.sec-h::before{
  content: "•";
  font-size: 10px;
  color: var(--lilac);
  text-shadow: 0 0 6px rgba(123, 146, 109, 0.8);
}
.sec-h::after{
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--lineHi), transparent);
}
.tabs{
  display: flex;
  gap: 3px;
  padding: 3px;
  border-radius: 999px;
  background: rgba(6, 6, 14, 0.55);
  border: 1px solid var(--line);
  align-self: flex-start;
  max-width: 100%;
}
.tab{
  appearance: none;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--dim);
  font-family: var(--ui);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 13px;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.15s, background 0.15s;
}
.tab.on{
  color: #fff;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.02) 60%), linear-gradient(100deg, rgba(147, 169, 153, 0.4), rgba(123, 146, 109, 0.45) 50%, rgba(167, 123, 92, 0.4));
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.28), 0 0 14px rgba(123, 146, 109, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
}
.badge-dot{
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 6px var(--pink);
  margin-left: 4px;
  vertical-align: top;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 main menu \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.menu{
  pointer-events: auto;
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.menu canvas{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.menu-shade{
  position: absolute;
  inset: 0;
  background:
    radial-gradient(55% 80% at 0% 0%, rgba(123, 146, 109, 0.22), transparent 65%),
    linear-gradient(90deg, rgba(7, 7, 13, 0.93) 0%, rgba(12, 9, 26, 0.62) 34%, rgba(7, 7, 13, 0) 58%),
    linear-gradient(0deg, rgba(7, 7, 13, 0.6), transparent 30%);
  pointer-events: none;
}
.menu-shade::after{
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 3px);
}
.wordmark{
  position: relative;
  font-family: var(--display);
  line-height: 0.9;
  text-transform: uppercase;
}
.wordmark .dovy{
  display: block;
  font-family: var(--display);
  font-weight: 800;
  letter-spacing: 0.62em;
  font-size: 12px;
  margin-bottom: 6px;
  background: var(--holoLoop);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: holoShift 8s linear infinite;
}
.wordmark .dz{
  display: block;
  font-size: 31px;
  font-weight: 900;
  letter-spacing: 0.03em;
  background: linear-gradient(100deg, rgba(255, 255, 255, 0) 42%, rgba(255, 255, 255, 0.95) 50%, rgba(255, 255, 255, 0) 58%), var(--chrome);
  background-size: 280% 100%, 100% 100%;
  background-repeat: no-repeat;
  background-position: 130% 0, 0 0;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(0 2px 0 rgba(0, 0, 0, 0.75)) drop-shadow(0 0 14px rgba(123, 146, 109, 0.35));
  animation: sweep 5.5s ease-in-out infinite;
}
@keyframes sweep {
  0%,
  55% {
    background-position: 130% 0, 0 0;
  }
  100% {
    background-position: -30% 0, 0 0;
  }
}
.wordmark .spk.s1{
  left: -6px;
  top: 14px;
}
.wordmark .spk.s2{
  right: 6px;
  top: -4px;
  animation-delay: 1.1s;
  width: 18px;
  height: 18px;
}
.wordmark .spk.s3{
  left: 54%;
  bottom: -8px;
  animation-delay: 1.9s;
  width: 10px;
  height: 10px;
}
.menu-left{
  position: absolute;
  left: calc(18px + var(--sa-l));
  top: calc(14px + var(--sa-t));
  bottom: calc(12px + var(--sa-b));
  width: min(300px, 40%);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.menu-nav{
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: auto;
}
.mnav{
  appearance: none;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--text);
  text-align: left;
  font-family: var(--ui);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 12px 6px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
  transition: transform 0.12s ease, color 0.12s, background 0.12s;
}
.mnav .ic{
  color: var(--lilac);
  filter: drop-shadow(0 0 4px rgba(123, 146, 109, 0.55));
}
.mnav::before{
  content: "";
  position: absolute;
  left: 2px;
  top: 50%;
  width: 5px;
  height: 5px;
  margin-top: -2.5px;
  border-radius: 50%;
  background: var(--chrome);
  box-shadow: 0 0 6px rgba(200, 210, 193, 0.5);
}
.mnav.pressed,.mnav:hover{
  transform: translateX(4px);
  color: var(--accHi);
  background: linear-gradient(90deg, rgba(200, 255, 46, 0.14), rgba(200, 255, 46, 0));
}
.mnav.pressed .ic,.mnav:hover .ic{
  color: var(--acc);
}
.mnav .note{
  margin-left: auto;
  font-size: 10px;
  letter-spacing: 0.08em;
  color: #101800;
  background: var(--acc);
  padding: 2px 8px;
  border-radius: 999px;
  box-shadow: 0 0 10px rgba(200, 255, 46, 0.4);
}
.play-btn{
  appearance: none;
  border: 1px solid rgba(240, 255, 190, 0.85);
  border-radius: 999px;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  margin: 4px 0 8px;
  height: 60px;
  width: 100%;
  background: radial-gradient(110% 120% at 50% 135%, rgba(255, 255, 220, 0.6), transparent 55%), linear-gradient(180deg, #efffb0 0%, #caa260 46%, #86c000 100%);
  color: #0f1700;
  font-family: var(--display);
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 1px 0 #fff, inset 0 -4px 8px rgba(60, 90, 0, 0.45), 0 0 22px rgba(200, 255, 46, 0.35), 0 6px 16px rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  transition: transform 0.1s, filter 0.15s;
}
.play-btn::before{
  content: "";
  position: absolute;
  left: 6%;
  right: 6%;
  top: 3px;
  height: 42%;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.1));
  z-index: -1;
}
.play-btn::after{
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40%;
  left: -50%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.55), transparent);
  animation: playSweep 3.2s ease-in-out infinite;
  z-index: -1;
}
@keyframes playSweep {
  0%,
  60% {
    left: -50%;
  }
  100% {
    left: 120%;
  }
}
.play-btn small{
  font-family: var(--ui);
  font-size: 11px;
  letter-spacing: 0.12em;
  font-weight: 700;
  text-align: right;
  line-height: 1.25;
  text-shadow: none;
  opacity: 0.85;
}
.play-btn.pressed{
  transform: scale(0.98);
  filter: brightness(1.1);
}
.play-btn.glow{
  animation: glow 1.8s ease-in-out infinite;
}
@keyframes glow {
  50% {
    box-shadow: inset 0 1px 0 #fff, inset 0 -4px 8px rgba(60, 90, 0, 0.45), 0 0 36px rgba(200, 255, 46, 0.65), 0 6px 16px rgba(0, 0, 0, 0.45);
  }
}
.menu-top{
  position: absolute;
  right: calc(12px + var(--sa-r));
  top: calc(10px + var(--sa-t));
  display: flex;
  gap: 6px;
  align-items: center;
}
.menu-dock{
  position: absolute;
  right: calc(12px + var(--sa-r));
  bottom: calc(14px + var(--sa-b));
  display: flex;
  gap: 8px;
}
.dock-btn{
  appearance: none;
  border: 1px solid rgba(170, 240, 255, 0.36);
  border-radius: 18px;
  cursor: pointer;
  width: 62px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  background: radial-gradient(120% 90% at 50% -10%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 55%), linear-gradient(180deg, rgba(147, 169, 153, 0.16), rgba(26, 31, 28, 0.88) 70%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -6px 12px rgba(0, 0, 0, 0.35), 0 6px 16px rgba(0, 0, 0, 0.4);
  color: var(--text);
  font-family: var(--ui);
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: relative;
  transition: transform 0.1s;
}
.dock-btn .ic{
  width: 22px;
  height: 22px;
  color: var(--cyan);
  filter: drop-shadow(0 0 4px rgba(147, 169, 153, 0.55));
}
.dock-btn.pressed{
  transform: scale(0.94);
}
.dock-btn.hot{
  border-color: rgba(255, 180, 230, 0.6);
  background: radial-gradient(120% 90% at 50% -10%, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0) 55%), linear-gradient(180deg, rgba(167, 123, 92, 0.32), rgba(60, 24, 70, 0.9) 70%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 0 16px rgba(167, 123, 92, 0.3), 0 6px 16px rgba(0, 0, 0, 0.4);
}
.dock-btn.hot .ic{
  color: #ffd1f0;
  filter: drop-shadow(0 0 5px rgba(167, 123, 92, 0.8));
}
.lvl{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 12px 3px 3px;
  border-radius: 999px;
  background: rgba(8, 8, 18, 0.62);
  border: 1px solid var(--line);
}
.lvl .num{
  width: 26px;
  height: 28px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #efffb0, #caa260 50%, #86c000);
  color: #0f1700;
  font-family: var(--lcd);
  font-size: 19px;
  line-height: 1;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
}
.lvl .bar{
  width: 64px;
  height: 5px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
}
.lvl .bar i{
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--holo);
}
.studio-mark{
  position: absolute;
  left: 50%;
  bottom: calc(6px + var(--sa-b));
  transform: translateX(-50%);
  font-family: var(--display);
  font-size: 8px;
  letter-spacing: 0.4em;
  color: rgba(220, 225, 255, 0.34);
  text-transform: uppercase;
  pointer-events: none;
  white-space: nowrap;
}
.menu-news{
  position: absolute;
  right: calc(12px + var(--sa-r));
  top: calc(52px + var(--sa-t));
  width: min(250px, 34%);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.news{
  appearance: none;
  border: 1px solid var(--line);
  border-radius: 12px;
  text-align: left;
  cursor: pointer;
  color: var(--text);
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0) 50%), rgba(14, 12, 28, 0.74);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 6px 16px rgba(0, 0, 0, 0.3);
  padding: 8px 10px 8px 12px;
  display: flex;
  gap: 10px;
  align-items: center;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  transition: transform 0.1s;
}
.news::before{
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--cyan), var(--lilac), var(--pink));
}
.news.pressed{
  transform: scale(0.98);
}
.news b{
  display: block;
  font-size: 13px;
  letter-spacing: 0.03em;
}
.news span{
  font-size: 11.5px;
  color: var(--dim);
}
.news .ic{
  width: 22px;
  height: 22px;
  color: var(--lilac);
  filter: drop-shadow(0 0 4px rgba(123, 146, 109, 0.6));
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 item grids \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.grid{
  position: relative;
  border-radius: 6px;
  background-color: rgba(6, 6, 14, 0.55);
  background-image: linear-gradient(rgba(170, 178, 163, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(170, 178, 163, 0.08) 1px, transparent 1px);
  box-shadow: inset 0 0 0 1px var(--line), inset 0 4px 12px rgba(0, 0, 0, 0.35);
  flex: none;
}
.grid.secure{
  background-color: rgba(147, 169, 153, 0.06);
  box-shadow: inset 0 0 0 1px rgba(147, 169, 153, 0.5), 0 0 12px rgba(147, 169, 153, 0.15);
}
.grid .drop-ok{
  position: absolute;
  border-radius: 4px;
  background: rgba(200, 255, 46, 0.22);
  box-shadow: inset 0 0 0 2px rgba(200, 255, 46, 0.85), 0 0 12px rgba(200, 255, 46, 0.35);
  pointer-events: none;
  z-index: 3;
}
.grid .drop-bad{
  position: absolute;
  border-radius: 4px;
  background: rgba(255, 61, 94, 0.2);
  box-shadow: inset 0 0 0 2px rgba(255, 61, 94, 0.75);
  pointer-events: none;
  z-index: 3;
}
.item{
  position: absolute;
  --rc: #a9aec4;
  border-radius: 5px;
  background: radial-gradient(90% 70% at 30% 0%, color-mix(in srgb, var(--rc) 30%, transparent), transparent 70%), linear-gradient(180deg, rgba(36, 34, 60, 0.92), rgba(14, 13, 26, 0.95));
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rc) 60%, transparent), inset 0 1px 0 color-mix(in srgb, var(--rc) 80%, white 10%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  touch-action: none;
  cursor: grab;
}
.item img{
  max-width: 94%;
  max-height: 88%;
  pointer-events: none;
  image-rendering: auto;
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.5));
}
.item.r-epic,.item.r-military,.item.r-blackmarket{
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rc) 75%, transparent), inset 0 1px 0 color-mix(in srgb, var(--rc) 90%, white 10%), inset 0 0 14px color-mix(in srgb, var(--rc) 22%, transparent);
}
.item.r-epic::before,.item.r-military::before,.item.r-blackmarket::before,.item.r-prototype::before{
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, transparent 35%, rgba(255, 255, 255, 0.16) 48%, transparent 60%);
  background-size: 300% 100%;
  animation: foil 4.5s ease-in-out infinite;
  pointer-events: none;
}
.item.r-prototype{
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45), inset 0 0 16px rgba(147, 169, 153, 0.25);
}
.item.r-prototype::after{
  content: "";
  position: absolute;
  inset: 0;
  padding: 1.5px;
  border-radius: inherit;
  background: var(--holoLoop);
  background-size: 300% 100%;
  animation: holoShift 6s linear infinite;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  pointer-events: none;
}
@keyframes foil {
  0%,
  40% {
    background-position: 120% 0;
  }
  100% {
    background-position: -120% 0;
  }
}
.item .q{
  position: absolute;
  right: 3px;
  bottom: 0;
  font-family: var(--lcd);
  font-size: 15px;
  line-height: 1;
  text-shadow: 0 1px 2px #000, 0 0 3px #000;
}
.item .cond{
  position: absolute;
  left: 4px;
  right: 4px;
  bottom: 2px;
  height: 2px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.6);
}
.item .cond i{
  display: block;
  height: 100%;
  border-radius: 2px;
}
.item .ins{
  position: absolute;
  left: 2px;
  top: 2px;
  width: 11px;
  height: 11px;
  color: var(--cyan);
  filter: drop-shadow(0 0 3px rgba(147, 169, 153, 0.8));
}
.item .ins .ic{
  width: 11px;
  height: 11px;
  stroke-width: 2.6;
}
.item .qk{
  position: absolute;
  right: 3px;
  top: 0;
  font-family: var(--lcd);
  font-size: 13px;
  color: var(--accHi);
}
.item.sel{
  outline: 2px solid var(--accHi);
  outline-offset: -2px;
  box-shadow: 0 0 14px rgba(200, 255, 46, 0.45);
  z-index: 2;
}
.item.dragging{
  opacity: 0.25;
}
.item.new::after{
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.45) 50%, transparent 70%);
  animation: shine 1.2s ease-out 2;
}
@keyframes shine {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
.ghost-item{
  position: absolute;
  pointer-events: none;
  z-index: 50;
  opacity: 0.92;
  filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 8px rgba(123, 146, 109, 0.4));
}
.eq-slot{
  position: relative;
  border-radius: 6px;
  background: rgba(6, 6, 14, 0.55);
  box-shadow: inset 0 0 0 1px var(--line), inset 0 4px 12px rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.eq-slot > .lbl{
  position: absolute;
  left: 5px;
  top: 2px;
  font-size: 8.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--mute);
  z-index: 1;
  pointer-events: none;
}
.eq-slot .item{
  position: absolute;
  inset: 0;
}
.eq-slot.target{
  box-shadow: inset 0 0 0 2px rgba(200, 255, 46, 0.9), 0 0 12px rgba(200, 255, 46, 0.35);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 modal sheets \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.scrim{
  position: absolute;
  inset: 0;
  background: radial-gradient(80% 80% at 50% 40%, rgba(40, 24, 80, 0.45), rgba(4, 4, 10, 0.78));
  display: grid;
  place-items: center;
  opacity: 0;
  transition: opacity 0.16s;
  z-index: 60;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}
.scrim.in{
  opacity: 1;
}
.scrim.out{
  opacity: 0;
}
.sheet{
  position: relative;
  width: min(460px, calc(100% - 40px));
  max-height: calc(100% - 24px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid transparent;
  background: linear-gradient(180deg, #1f1d38, #0f0e1c) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(130, 138, 180, 0.22) 35%, rgba(255, 255, 255, 0.08) 70%, rgba(180, 190, 230, 0.35)) border-box;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(123, 146, 109, 0.12);
  transform: translateY(10px) scale(0.98);
  transition: transform 0.2s cubic-bezier(0.2, 1.3, 0.4, 1);
}
.sheet::before{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 2px;
  background: var(--holo);
  opacity: 0.85;
}
.sheet.wide{
  width: min(720px, calc(100% - 30px));
}
.scrim.in .sheet{
  transform: none;
}
.sheet-h{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 12px 8px 18px;
  border-bottom: 1px solid var(--line);
}
.sheet-h h3{
  margin: 0;
  font-family: var(--display);
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: var(--chrome);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.7));
}
.sheet-b{
  padding: 12px 18px 16px;
  overflow-y: auto;
  touch-action: pan-y;
}
.confirm p{
  margin: 0 0 14px;
  font-size: 15px;
  line-height: 1.45;
  color: var(--text);
  max-width: 52ch;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 toasts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
#toasts{
  position: absolute;
  left: 50%;
  top: calc(64px + var(--sa-t));
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  z-index: 80;
  pointer-events: none;
  width: min(440px, 72%);
}
.toast{
  position: relative;
  padding: 7px 16px 7px 28px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0) 60%), rgba(12, 11, 24, 0.92);
  border: 1px solid var(--lineHi);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
  transition: opacity 0.2s, transform 0.2s;
  text-align: center;
  --tc: var(--dim);
}
.toast::before{
  content: "";
  position: absolute;
  left: 11px;
  top: 50%;
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-radius: 50%;
  background: var(--tc);
  box-shadow: 0 0 8px var(--tc);
}
.toast.in{
  opacity: 1;
  transform: none;
}
.toast.out{
  opacity: 0;
}
.t-good{
  --tc: var(--green);
}
.t-warn{
  --tc: var(--red);
  color: #ffd2da;
  border-color: rgba(255, 61, 94, 0.45);
}
.t-rare{
  --tc: var(--lilac);
  color: #ecdcff;
  border-color: rgba(123, 146, 109, 0.55);
}
.t-event{
  --tc: var(--acc);
  color: var(--accHi);
}
.t-xp{
  --tc: var(--acc);
}
.t-mission{
  --tc: var(--cyan);
  color: #d4feff;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 HUD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.hud{
  pointer-events: none;
  font-family: var(--ui);
}
.hud .tl{
  position: absolute;
  left: calc(10px + var(--sa-l));
  top: calc(8px + var(--sa-t));
  display: flex;
  gap: 8px;
  align-items: flex-start;
}
.portrait{
  width: 46px;
  height: 46px;
  padding: 2px;
  border-radius: 13px;
  background: var(--conic);
  box-shadow: 0 0 10px rgba(123, 146, 109, 0.35), 0 2px 6px rgba(0, 0, 0, 0.5);
  position: relative;
}
.portrait canvas{
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 11px;
}
.portrait .lv{
  position: absolute;
  right: -4px;
  bottom: -4px;
  min-width: 18px;
  height: 17px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: linear-gradient(180deg, #efffb0, #caa260 50%, #86c000);
  color: #0f1700;
  font-family: var(--lcd);
  font-size: 15px;
  line-height: 1;
  padding: 0 4px;
  box-shadow: 0 0 6px rgba(200, 255, 46, 0.5);
}
.vitals{
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 128px;
}
.vitals .name{
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.08em;
  text-shadow: 0 1px 2px #000;
}
.hpbar{
  position: relative;
  height: 10px;
  width: 140px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(6, 6, 14, 0.72);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 1px 3px rgba(0, 0, 0, 0.5);
}
.hpbar i{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 999px;
  background: linear-gradient(180deg, #ffc2cf 0%, #ff5e7e 40%, #e0103a 75%, #8e0a26 100%);
  box-shadow: 0 0 8px rgba(255, 61, 94, 0.6);
  transition: width 0.2s;
}
.hpbar b{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 999px;
  background: rgba(255, 230, 240, 0.55);
  transition: width 0.6s 0.2s;
}
.hpbar::after{
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0) 50%), repeating-linear-gradient(90deg, transparent 0 calc(10% - 1px), rgba(6, 6, 14, 0.65) calc(10% - 1px) 10%);
  pointer-events: none;
}
.stat-row{
  display: flex;
  gap: 4px;
}
.stat{
  display: flex;
  align-items: center;
  gap: 2px;
  height: 17px;
  padding: 0 6px 0 4px;
  border-radius: 999px;
  background: rgba(6, 6, 14, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-family: var(--lcd);
  font-size: 15px;
  line-height: 1;
  color: var(--text);
}
.stat .ic{
  width: 12px;
  height: 12px;
}
.stat.low{
  color: #ff7d95;
  border-color: rgba(255, 61, 94, 0.55);
  animation: blink 1s infinite;
}
.stat.warn{
  color: var(--warn);
}
@keyframes blink {
  50% {
    opacity: 0.45;
  }
}
.stat.st-b .ic{
  color: #ff5e7e;
}
.stat.st-i .ic{
  color: var(--acc);
}
.compass{
  position: absolute;
  left: 50%;
  top: calc(6px + var(--sa-t));
  transform: translateX(-50%);
  width: 220px;
  height: 22px;
  overflow: hidden;
  border-radius: 6px;
  background: linear-gradient(180deg, rgba(200, 255, 46, 0.1), rgba(200, 255, 46, 0.02));
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 22%, #000 78%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 22%, #000 78%, transparent);
}
.compass .strip{
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  white-space: nowrap;
  font-family: var(--lcd);
  font-size: 17px;
  color: rgba(225, 255, 170, 0.85);
  text-shadow: 0 0 6px rgba(200, 255, 46, 0.45);
}
.compass .strip span{
  display: inline-block;
  width: 30px;
  text-align: center;
  line-height: 22px;
}
.compass .strip span.card{
  color: #fff;
  text-shadow: 0 0 8px rgba(200, 255, 46, 0.9);
}
.compass::after{
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 6px solid var(--acc);
  transform: translateX(-50%);
  filter: drop-shadow(0 0 3px var(--acc));
}
.objective{
  position: absolute;
  left: 50%;
  top: calc(32px + var(--sa-t));
  transform: translateX(-50%);
  padding: 5px 14px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0) 60%), rgba(12, 11, 24, 0.82);
  border: 1px solid rgba(200, 255, 46, 0.4);
  box-shadow: 0 0 14px rgba(200, 255, 46, 0.15), 0 4px 12px rgba(0, 0, 0, 0.4);
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--accHi);
  max-width: min(400px, 46%);
  text-align: center;
  line-height: 1.25;
}
.tr{
  position: absolute;
  right: calc(10px + var(--sa-r));
  top: calc(8px + var(--sa-t));
  display: flex;
  gap: 8px;
  align-items: flex-start;
}
.minimap{
  width: 106px;
  height: 106px;
  position: relative;
  pointer-events: auto;
  border-radius: 18px;
  padding: 3px;
  background: var(--chrome);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 4px 12px rgba(0, 0, 0, 0.5), 0 0 14px rgba(123, 146, 109, 0.25);
}
.minimap canvas{
  position: absolute;
  inset: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 15px;
  background: var(--void);
}
.minimap::after{
  content: "";
  position: absolute;
  inset: 3px;
  border-radius: 15px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0) 40%);
  pointer-events: none;
}
.clockbox{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  font-family: var(--lcd);
  font-size: 16px;
  line-height: 1;
  text-shadow: 0 1px 2px #000;
}
.clockbox .t{
  font-size: 21px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #fff;
  text-shadow: 0 0 8px rgba(123, 146, 109, 0.7), 0 1px 2px #000;
}
.clockbox .t .ic{
  width: 14px;
  height: 14px;
}
.clockbox .raid{
  color: var(--dim);
}
.clockbox .raid.late{
  color: #ff7d95;
  text-shadow: 0 0 8px rgba(255, 61, 94, 0.7);
}
.zone-name{
  font-family: var(--ui);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dim);
}
.hbtn{
  pointer-events: auto;
}
.weapon-panel{
  position: absolute;
  left: 41%;
  bottom: calc(8px + var(--sa-b));
  transform: translateX(-50%);
  display: flex;
  align-items: stretch;
  gap: 5px;
  pointer-events: auto;
}
.wp{
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 14px 4px 8px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 55%), rgba(12, 11, 24, 0.78);
  border: 1px solid var(--lineHi);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  min-width: 170px;
}
.wp img{
  height: 26px;
  width: 64px;
  object-fit: contain;
}
.wp .ammo{
  font-family: var(--lcd);
  font-size: 30px;
  line-height: 0.9;
  font-variant-numeric: tabular-nums;
  color: #fff;
  text-shadow: 0 0 8px rgba(200, 255, 46, 0.5);
}
.wp .ammo small{
  font-size: 18px;
  color: var(--dim);
  text-shadow: none;
}
.wp .ammo.empty{
  color: #ff7d95;
  text-shadow: 0 0 8px rgba(255, 61, 94, 0.7);
}
.wp .meta{
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 9.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dim);
}
.wp .cbar{
  width: 40px;
  height: 3px;
  border-radius: 3px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
}
.wp .cbar i{
  display: block;
  height: 100%;
}
.quick{
  display: flex;
  gap: 5px;
}
.qs{
  appearance: none;
  border: 1px solid rgba(200, 210, 193, 0.26);
  border-radius: 14px;
  width: 44px;
  height: 44px;
  position: relative;
  background: radial-gradient(120% 80% at 50% -10%, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0) 55%), rgba(12, 11, 24, 0.78);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  cursor: pointer;
  padding: 0;
}
.qs img{
  width: 34px;
  height: 34px;
}
.qs .n{
  position: absolute;
  right: 4px;
  bottom: 0;
  font-family: var(--lcd);
  font-size: 14px;
  text-shadow: 0 1px 2px #000;
  color: var(--text);
}
.qs .k{
  position: absolute;
  left: 5px;
  top: 1px;
  font-family: var(--lcd);
  font-size: 12px;
  color: var(--mute);
}
.qs.pressed{
  background: radial-gradient(120% 80% at 50% -10%, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0) 55%), rgba(200, 255, 46, 0.3);
}
.qs.empty{
  opacity: 0.45;
}
.progress-ring{
  position: absolute;
  left: 50%;
  top: 58%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-shadow: 0 1px 2px #000;
}
.progress-ring .bar{
  width: 124px;
  height: 7px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(6, 6, 14, 0.75);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16);
}
.progress-ring .bar i{
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(180deg, #efffb0, #caa260 50%, #86c000);
  box-shadow: 0 0 8px rgba(200, 255, 46, 0.6);
}
.extract-banner{
  position: absolute;
  left: 50%;
  top: 34%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: var(--display);
  font-weight: 900;
  font-size: 24px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--acc);
  text-shadow: 0 0 16px rgba(200, 255, 46, 0.6), 0 2px 6px #000;
}
.extract-banner small{
  display: block;
  margin-top: 4px;
  font-family: var(--ui);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.16em;
  color: var(--text);
  text-shadow: 0 1px 3px #000;
}
.event-card{
  position: absolute;
  left: 50%;
  top: calc(60px + var(--sa-t));
  transform: translateX(-50%);
  overflow: hidden;
  border-radius: 14px;
  background: linear-gradient(90deg, rgba(123, 146, 109, 0.22), rgba(12, 11, 24, 0.92) 40%);
  border: 1px solid rgba(123, 146, 109, 0.45);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 20px rgba(123, 146, 109, 0.2);
  padding: 7px 16px 8px 18px;
  min-width: 260px;
  animation: evIn 0.35s ease-out;
}
.event-card::before{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--cyan), var(--lilac), var(--pink));
}
.event-card b{
  display: block;
  font-family: var(--display);
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 0 10px rgba(123, 146, 109, 0.8);
  margin-bottom: 2px;
}
.event-card span{
  font-size: 12.5px;
  color: var(--text);
}
@keyframes evIn {
  from {
    opacity: 0;
    transform: translate(-50%, -10px);
  }
}
.dmg-dir{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 180px;
  height: 180px;
  margin: -90px 0 0 -90px;
  pointer-events: none;
}
.dmg-dir i{
  position: absolute;
  left: 50%;
  top: 0;
  width: 70px;
  height: 14px;
  margin-left: -35px;
  background: radial-gradient(ellipse at 50% 100%, rgba(255, 40, 80, 0.9), transparent 70%);
  transform-origin: 50% 90px;
  opacity: 0;
  transition: opacity 0.5s;
}
.xp-pop{
  position: absolute;
  right: calc(130px + var(--sa-r));
  top: calc(124px + var(--sa-t));
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  font-family: var(--lcd);
  font-size: 17px;
  line-height: 1;
  color: var(--accHi);
  text-shadow: 0 0 6px rgba(200, 255, 46, 0.6), 0 1px 2px #000;
}
.xp-pop div{
  animation: xpUp 1.6s ease-out forwards;
}
@keyframes xpUp {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  15% {
    opacity: 1;
    transform: none;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-8px);
  }
}
.squad-list{
  position: absolute;
  left: calc(10px + var(--sa-l));
  top: calc(70px + var(--sa-t));
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.mate{
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  text-shadow: 0 1px 2px #000;
}
.mate .hpbar{
  width: 60px;
  height: 6px;
}
.mate .hpbar::after{
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 50%);
}
.mate .dist{
  font-family: var(--lcd);
  font-size: 15px;
  color: var(--dim);
}
.mate .arrow{
  width: 12px;
  height: 12px;
  color: var(--cyan);
}
.mate.down{
  color: #ff7d95;
}

/* touch controls */
.ctl{
  pointer-events: auto;
  opacity: var(--co);
}

















@keyframes popIn {
  from {
    transform: scale(0.85);
    opacity: 0;
  }
}
.pulse-ring::after{
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: inherit;
  box-shadow: 0 0 0 2px var(--acc), 0 0 12px rgba(200, 255, 46, 0.6);
  animation: ring 1.2s ease-out infinite;
  pointer-events: none;
}
.pulse-ring{
  position: relative;
}
@keyframes ring {
  from {
    transform: scale(0.9);
    opacity: 1;
  }
  to {
    transform: scale(1.35);
    opacity: 0;
  }
}
.ping-wheel{
  position: absolute;
  width: 220px;
  height: 220px;
  margin: -110px 0 0 -110px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: radial-gradient(circle, rgba(30, 26, 56, 0.92), rgba(10, 10, 20, 0.94)) padding-box, var(--conic) border-box;
  box-shadow: 0 0 30px rgba(123, 146, 109, 0.3);
  pointer-events: auto;
  animation: popIn 0.15s;
}
.ping-wheel button{
  position: absolute;
  width: 80px;
  margin-left: -40px;
  margin-top: -14px;
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--text);
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 6px 0;
}
.ping-wheel button.pressed{
  color: var(--accHi);
  text-shadow: 0 0 8px rgba(200, 255, 46, 0.8);
}

/* raid end screens */
.raid-end{
  position: absolute;
  inset: 0;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: calc(14px + var(--sa-t)) calc(18px + var(--sa-r)) calc(12px + var(--sa-b)) calc(18px + var(--sa-l));
  background: radial-gradient(80% 90% at 20% 10%, rgba(255, 30, 70, 0.28), transparent 60%), radial-gradient(60% 70% at 100% 100%, rgba(123, 146, 109, 0.16), transparent 70%), rgba(8, 6, 14, 0.95);
  animation: fadeIn 0.6s ease-out;
  z-index: 40;
}
.raid-end::before{
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 3px);
}
.raid-end.win{
  background: radial-gradient(80% 90% at 20% 10%, rgba(200, 255, 46, 0.2), transparent 60%), radial-gradient(60% 70% at 100% 100%, rgba(147, 169, 153, 0.14), transparent 70%), rgba(6, 8, 14, 0.95);
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
}
.raid-end h1{
  margin: 0;
  align-self: flex-start;
  font-family: var(--display);
  font-weight: 900;
  font-size: 44px;
  line-height: 1;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: linear-gradient(180deg, #ffe0e6 0%, #ff8aa0 32%, #7a0a22 50%, #ff3d5e 68%, #ffd6de 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(2px 0 0 rgba(147, 169, 153, 0.55)) drop-shadow(-2px 0 0 rgba(167, 123, 92, 0.55)) drop-shadow(0 0 18px rgba(255, 61, 94, 0.45));
  animation: slam 0.5s cubic-bezier(0.2, 1.4, 0.4, 1), glitch 3.4s steps(1) 0.6s infinite;
}
.raid-end.win h1{
  background: linear-gradient(180deg, #f8ffe0 0%, #e6ff8c 32%, #3f5a00 50%, #caa260 68%, #f4ffd0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.8)) drop-shadow(0 0 18px rgba(200, 255, 46, 0.45));
  animation: slam 0.5s cubic-bezier(0.2, 1.4, 0.4, 1);
}
@keyframes slam {
  from {
    transform: scale(1.4);
    opacity: 0;
    letter-spacing: 0.3em;
  }
}
@keyframes glitch {
  0%,
  86%,
  100% {
    transform: none;
  }
  88% {
    transform: translate(3px, -1px) skewX(-8deg);
  }
  90% {
    transform: translate(-3px, 1px);
  }
  92% {
    transform: none;
  }
  94% {
    transform: translate(2px, 0) skewX(6deg);
  }
}
.raid-end .cause{
  font-size: 15px;
  color: var(--dim);
  letter-spacing: 0.06em;
  margin-top: 6px;
}
.end-grid{
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
  margin: 12px 0;
}
.kv{
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0) 60%), rgba(14, 12, 28, 0.7);
  border: 1px solid var(--line);
  padding: 6px 12px;
}
.kv b{
  display: block;
  font-family: var(--lcd);
  font-weight: 400;
  font-size: 26px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.kv span{
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dim);
}
.kv.bad b{
  color: #ff7d95;
  text-shadow: 0 0 8px rgba(255, 61, 94, 0.45);
}
.kv.good b{
  color: var(--acc);
  text-shadow: 0 0 8px rgba(200, 255, 46, 0.45);
}
.loot-reel{
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  min-height: 56px;
}
.loot-reel .li{
  width: 54px;
  height: 54px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  --rc: #a9aec4;
  background: radial-gradient(90% 70% at 30% 0%, color-mix(in srgb, var(--rc) 32%, transparent), transparent 70%), rgba(14, 13, 26, 0.9);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rc) 65%, transparent), 0 0 10px color-mix(in srgb, var(--rc) 20%, transparent);
  display: grid;
  place-items: center;
  animation: lootIn 0.4s cubic-bezier(0.2, 1.5, 0.4, 1) backwards;
}
.loot-reel .li img{
  max-width: 46px;
  max-height: 46px;
}
.loot-reel .li.lost{
  filter: grayscale(1) brightness(0.5);
}
@keyframes lootIn {
  from {
    transform: scale(0.3) translateY(20px);
    opacity: 0;
  }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 raid loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.loading{
  position: absolute;
  inset: 0;
  z-index: 90;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 calc(24px + var(--sa-r)) calc(24px + var(--sa-b)) calc(26px + var(--sa-l));
  background:
    radial-gradient(45% 70% at 76% 42%, rgba(123, 146, 109, 0.26), transparent 70%),
    radial-gradient(60% 50% at 50% 105%, rgba(167, 123, 92, 0.16), transparent 70%),
    linear-gradient(180deg, #0b0a18 0%, #080b09 100%);
}
.loading::before{
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 3px);
}
.loading::after{
  content: "";
  position: absolute;
  left: -40%;
  right: -40%;
  bottom: -2px;
  height: 48%;
  z-index: -1;
  background-image: linear-gradient(rgba(123, 146, 109, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 146, 109, 0.35) 1px, transparent 1px);
  background-size: 48px 48px;
  transform: perspective(260px) rotateX(60deg);
  transform-origin: 50% 100%;
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 70%);
  mask-image: linear-gradient(180deg, transparent 0%, #000 70%);
  animation: gridRun 1.2s linear infinite;
}
@keyframes gridRun {
  to {
    background-position: 0 48px, 0 0;
  }
}
.ld-orb{
  position: absolute;
  right: calc(13% + var(--sa-r));
  top: 50%;
  width: min(30vh, 150px);
  height: min(30vh, 150px);
  margin-top: max(-15vh, -75px);
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0) 30%), radial-gradient(circle, rgba(20, 16, 40, 0.2) 52%, rgba(123, 146, 109, 0.35) 70%, transparent 72%);
}
.ld-orb::before{
  content: "";
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  padding: 3px;
  background: var(--conic);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  animation: spin 1.6s linear infinite;
  filter: drop-shadow(0 0 10px rgba(123, 146, 109, 0.7));
}
.ld-orb::after{
  content: "";
  position: absolute;
  inset: 16%;
  border-radius: 50%;
  border: 1px dashed rgba(220, 225, 255, 0.35);
  animation: spin 6s linear infinite reverse;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.ld-kicker{
  font-family: var(--display);
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.ld-where{
  font-family: var(--display);
  font-weight: 900;
  font-size: 30px;
  line-height: 1.05;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  max-width: 62%;
}
.loading .tip{
  position: relative;
  max-width: min(52ch, 60%);
  font-size: 14px;
  color: var(--text);
  line-height: 1.4;
  margin: 12px 0 14px;
  padding: 9px 14px 10px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0) 60%), rgba(14, 12, 28, 0.72);
  border: 1px solid var(--line);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}
.loading .tip b{
  display: block;
  text-transform: uppercase;
  font-family: var(--display);
  font-size: 9px;
  letter-spacing: 0.3em;
  color: var(--lilac);
  margin-bottom: 3px;
}
.loading .lbar,.boot-bar{
  position: relative;
  height: 14px;
  width: min(420px, 60%);
  border-radius: 999px;
  overflow: hidden;
  background: rgba(4, 4, 10, 0.7);
  border: 1px solid rgba(220, 225, 255, 0.3);
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.6), 0 0 14px rgba(123, 146, 109, 0.15);
}
.loading .lbar i,.boot-bar i{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: block;
  border-radius: 999px;
  background: repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.28) 0 6px, rgba(255, 255, 255, 0) 6px 14px), linear-gradient(180deg, #f2ffb8 0%, #caa260 45%, #7fb800 100%);
  background-size: 30px 100%, 100% 100%;
  box-shadow: 0 0 12px rgba(200, 255, 46, 0.7);
  animation: barrun 0.8s linear infinite;
  transition: width 0.3s;
}
.loading .lbar::after,.boot-bar::after{
  content: "";
  position: absolute;
  left: 6px;
  right: 6px;
  top: 2px;
  height: 40%;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0));
  pointer-events: none;
}
@keyframes barrun {
  to {
    background-position: 30px 0, 0 0;
  }
}
.loading .studio{
  position: absolute;
  right: calc(24px + var(--sa-r));
  bottom: calc(22px + var(--sa-b));
  font-family: var(--display);
  font-size: 8.5px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: rgba(220, 225, 255, 0.42);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 boot loader \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.boot{
  position: absolute;
  inset: 0;
  z-index: 100;
  overflow: hidden;
  background: #080b09;
  transition: opacity 0.55s ease;
}
.boot canvas{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.boot-scan{
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 3px), radial-gradient(120% 100% at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.55));
}
.boot-left{
  position: absolute;
  left: calc(6% + var(--sa-l));
  top: 50%;
  transform: translateY(-54%);
  width: min(460px, 56%);
  display: flex;
  flex-direction: column;
  gap: 0;
}
.boot-kick{
  font-family: var(--display);
  font-weight: 700;
  font-size: 9px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: rgba(220, 225, 255, 0.55);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.boot-kick::after{
  content: "";
  height: 1px;
  flex: 1;
  max-width: 90px;
  background: var(--holo);
  opacity: 0.7;
}
.boot .wordmark .dovy{
  font-size: 14px;
  margin-bottom: 8px;
}
.boot .wordmark .dz{
  font-size: clamp(34px, 7.2vw, 58px);
  letter-spacing: 0.02em;
}
.boot-sub{
  margin: 12px 0 22px;
  font-family: var(--ui);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--dim);
}
.boot-sub b{
  color: var(--cyan);
  font-weight: 700;
  text-shadow: 0 0 8px rgba(147, 169, 153, 0.6);
}
.boot-bar{
  width: 100%;
  max-width: 360px;
}
.boot-lcd{
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-top: 9px;
  font-family: var(--lcd);
  line-height: 1;
  max-width: 360px;
}
.boot-lcd .pct{
  font-size: 22px;
  color: #eaffb0;
  text-shadow: 0 0 8px rgba(200, 255, 46, 0.65);
  letter-spacing: 0.06em;
  white-space: nowrap;
}
.boot-lcd .step{
  font-size: 17px;
  color: var(--dim);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}
.boot-lcd .step::after{
  content: "_";
  animation: blink 0.9s steps(1) infinite;
  margin-left: 2px;
}
.boot-start{
  position: relative;
  isolation: isolate;
  overflow: hidden;
  appearance: none;
  cursor: pointer;
  width: 100%;
  max-width: 360px;
  height: 52px;
  border-radius: 999px;
  border: 1px solid rgba(240, 255, 190, 0.9);
  background: radial-gradient(110% 120% at 50% 135%, rgba(255, 255, 220, 0.65), transparent 55%), linear-gradient(180deg, #efffb0 0%, #caa260 46%, #86c000 100%);
  color: #0f1700;
  font-family: var(--display);
  font-weight: 900;
  font-size: 17px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  box-shadow: inset 0 1px 0 #fff, inset 0 -4px 8px rgba(60, 90, 0, 0.45), 0 0 26px rgba(200, 255, 46, 0.45);
  animation: popIn 0.35s cubic-bezier(0.2, 1.5, 0.4, 1), startPulse 1.6s ease-in-out 0.4s infinite;
}
.boot-start::before{
  content: "";
  position: absolute;
  left: 6%;
  right: 6%;
  top: 3px;
  height: 42%;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.1));
  z-index: -1;
}
.boot-start::after{
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 35%;
  left: -40%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: playSweep 2.4s ease-in-out infinite;
  z-index: -1;
}
@keyframes startPulse {
  50% {
    box-shadow: inset 0 1px 0 #fff, inset 0 -4px 8px rgba(60, 90, 0, 0.45), 0 0 44px rgba(200, 255, 46, 0.8);
  }
}
.boot-hint{
  margin-top: 9px;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--mute);
  display: flex;
  align-items: center;
  gap: 6px;
}
.boot-hint .ic{
  width: 13px;
  height: 13px;
}
.boot-foot{
  position: absolute;
  left: calc(6% + var(--sa-l));
  bottom: calc(14px + var(--sa-b));
  font-family: var(--display);
  font-size: 8.5px;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: rgba(220, 225, 255, 0.42);
  white-space: nowrap;
}
.boot-foot b{
  color: rgba(240, 242, 255, 0.75);
  font-weight: 700;
}
.boot-flash{
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(60% 60% at 50% 50%, rgba(255, 255, 255, 0.95), rgba(200, 210, 193, 0.6) 40%, rgba(123, 146, 109, 0.2) 75%, transparent);
}
.boot.leaving .boot-flash{
  animation: flash 0.55s ease-out forwards;
}
.boot.leaving .boot-left{
  transition: transform 0.5s ease-in, opacity 0.4s;
  transform: translateY(-54%) scale(1.06);
  opacity: 0;
}
@keyframes flash {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.85;
  }
  100% {
    opacity: 0;
  }
}
.boot-err{
  margin-top: 10px;
  max-width: 360px;
  font-size: 13px;
  color: #ffd2da;
}
.rotate-hint{
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--void);
  display: none;
  place-items: center;
  text-align: center;
  padding: 24px;
}

/* misc lists & cards */
.list{
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.li-row{
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0) 60%), rgba(14, 12, 28, 0.6);
  border: 1px solid var(--line);
}
.li-row .ttl{
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.02em;
}
.li-row .desc{
  font-size: 12.5px;
  color: var(--dim);
  line-height: 1.3;
}
.prog{
  height: 5px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  margin-top: 4px;
}
.prog i{
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #9fe000, var(--acc));
  box-shadow: 0 0 6px rgba(200, 255, 46, 0.5);
}
.prog.teal i{
  background: linear-gradient(90deg, var(--lilac), var(--cyan));
  box-shadow: 0 0 6px rgba(147, 169, 153, 0.5);
}
.thumb{
  width: 44px;
  height: 44px;
  flex: none;
  overflow: hidden;
  border-radius: 9px;
  --rc: #a9aec4;
  background: radial-gradient(90% 70% at 30% 0%, color-mix(in srgb, var(--rc) 30%, transparent), transparent 70%), rgba(14, 13, 26, 0.9);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rc) 60%, transparent);
  display: grid;
  place-items: center;
}
.thumb img{
  max-width: 40px;
  max-height: 40px;
}
.thumb.wide{
  width: 88px;
}
.thumb.wide img{
  max-width: 84px;
}
.stats-table{
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.stats-table td{
  padding: 3px 0;
  border-bottom: 1px solid rgba(170, 178, 163, 0.08);
}
.stats-table td:last-child{
  text-align: right;
  font-family: var(--lcd);
  font-size: 17px;
}
.statbar{
  display: grid;
  grid-template-columns: 90px 1fr 46px;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--dim);
  margin: 3px 0;
}
.statbar .b{
  height: 5px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  position: relative;
}
.statbar .b i{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #8c94bb, #eef1ff);
}
.statbar .b em{
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--acc);
}
.statbar .b em.worse{
  background: var(--red);
}
.statbar span{
  text-align: right;
  font-family: var(--lcd);
  font-size: 16px;
  color: var(--text);
}
.slider{
  width: 100%;
  accent-color: var(--acc);
}
.switch{
  appearance: none;
  width: 46px;
  height: 26px;
  border-radius: 999px;
  background: rgba(6, 6, 14, 0.7);
  border: 1px solid var(--lineHi);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  cursor: pointer;
  flex: none;
  transition: background 0.15s;
}
.switch::after{
  content: "";
  position: absolute;
  left: 3px;
  top: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle at 36% 28%, #fff, #c5cbe4 40%, #5d6385);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.15s;
}
.switch:checked{
  background: linear-gradient(180deg, rgba(200, 255, 46, 0.55), rgba(110, 160, 0, 0.6));
  border-color: rgba(220, 255, 140, 0.8);
  box-shadow: 0 0 10px rgba(200, 255, 46, 0.35);
}
.switch:checked::after{
  transform: translateX(20px);
}
.seg{
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: 999px;
  background: rgba(6, 6, 14, 0.55);
  border: 1px solid var(--line);
  align-self: flex-start;
  flex-wrap: wrap;
}
.seg button{
  appearance: none;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--dim);
  padding: 5px 11px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  min-height: 28px;
}
.seg button.on{
  background: linear-gradient(180deg, #efffb0, #caa260 50%, #86c000);
  color: #101800;
  box-shadow: inset 0 1px 0 #fff, 0 0 10px rgba(200, 255, 46, 0.35);
}
input.text{
  appearance: none;
  background: rgba(6, 6, 14, 0.6);
  border: 1px solid var(--lineHi);
  border-radius: 999px;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.5);
  color: var(--text);
  font-family: var(--ui);
  font-size: 17px;
  font-weight: 600;
  padding: 9px 18px;
  width: 100%;
  -webkit-user-select: text;
  user-select: text;
}
input.text:focus{
  outline: none;
  border-color: rgba(200, 255, 46, 0.8);
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.5), 0 0 0 3px rgba(200, 255, 46, 0.18);
}
input.text::placeholder{
  color: var(--mute);
}
.empty-state{
  display: grid;
  place-items: center;
  text-align: center;
  color: var(--dim);
  font-size: 13.5px;
  padding: 20px;
  line-height: 1.4;
}
.empty-state .ic{
  width: 30px;
  height: 30px;
  color: var(--lilac);
  opacity: 0.7;
  margin-bottom: 6px;
}
.test-banner{
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #ffe3a6;
  border-radius: 10px;
  background: rgba(255, 211, 110, 0.08);
  border: 1px solid rgba(255, 211, 110, 0.35);
  padding: 6px 12px;
}
.tutorial-hint{
  position: absolute;
  z-index: 30;
  pointer-events: none;
  border-radius: 12px;
  background: rgba(12, 11, 24, 0.94);
  border: 1px solid var(--acc);
  box-shadow: 0 0 14px rgba(200, 255, 46, 0.3);
  color: var(--text);
  font-size: 13.5px;
  font-weight: 600;
  padding: 6px 11px;
  max-width: 220px;
  animation: popIn 0.25s ease-out;
}
/* compact phones (stage width, so it also holds when the stage is rotated) */
@container stage (max-width: 760px) {
  .compass {
    width: 160px;
  }
  .objective {
    top: calc(80px + var(--sa-t));
    max-width: 56%;
    font-size: 12.5px;
  }
  .weapon-panel {
    flex-direction: column-reverse;
    align-items: center;
  }
  .wp {
    min-width: 0;
  }
  .xp-pop {
    top: calc(140px + var(--sa-t));
  }
}
@container stage (max-height: 400px) {
  .raid-end h1 {
    font-size: 36px;
  }
  .end-grid {
    margin: 8px 0;
    gap: 5px;
  }
  .kv {
    padding: 4px 10px;
  }
  .kv b {
    font-size: 22px;
  }
}
@media  (prefers-reduced-motion: reduce) {
  *,*::before,*::after{
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}

/* character creation pedestal */
.survivor-pad{
  position: relative;
  display: grid;
  place-items: center;
  width: 200px;
  height: 200px;
  flex: none;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(123, 146, 109, 0.22), rgba(123, 146, 109, 0.04) 58%, transparent 70%);
}
.survivor-pad::before{
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  padding: 2px;
  background: var(--conic);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  opacity: 0.75;
  animation: spin 14s linear infinite;
}
.survivor-pad::after{
  content: "";
  position: absolute;
  inset: 22px;
  border-radius: 50%;
  border: 1px dashed rgba(220, 225, 255, 0.22);
}
.survivor-pad canvas{
  position: relative;
  z-index: 1;
}
.screen.inv-screen{
  background: radial-gradient(70% 60% at 92% -8%, rgba(123, 146, 109, 0.16), transparent 60%), linear-gradient(180deg, rgba(14, 12, 28, 0.97), rgba(7, 7, 13, 0.98));
}

/* 0.2.1 screen + input polish */
#stage{ max-width: 100%; max-height: 100%; }
#world,.ctl{ touch-action: none; }
.scroll,.scroll-x,.sheet-b{ -webkit-overflow-scrolling: touch; overscroll-behavior: contain; }
.scroll,.sheet-b{ touch-action: pan-y; }
.scroll-x{ touch-action: pan-x; }
.screen,.menu,.raid-end{ min-width: 0; min-height: 0; }
.sheet{ max-height: calc(100% - var(--sa-t) - var(--sa-b) - 12px); }
.sheet-b{ min-height: 0; overflow-y: auto; }
.btn,.ibtn,.mnav,.dock-btn,.play-btn,.qs,.tab,.seg button{ touch-action: manipulation; }

@container stage (max-height: 470px) {
  .hud .tl { transform: scale(.88); transform-origin: top left; }
  .tr { transform: scale(.82); transform-origin: top right; gap: 5px; }
  .minimap { width: 86px; height: 86px; border-radius: 14px; }
  .minimap canvas, .minimap::after { border-radius: 11px; }
  .clockbox { font-size: 14px; }
  .clockbox .t { font-size: 17px; }
  .zone-name { display: none; }
  .compass { width: 184px; height: 20px; top: calc(4px + var(--sa-t)); }
  .compass .strip, .compass .strip span { height: 20px; line-height: 20px; font-size: 15px; }
  .objective { top: calc(26px + var(--sa-t)); max-width: 42%; padding: 3px 10px; font-size: 11.5px; }
  .weapon-panel { bottom: calc(4px + var(--sa-b)); transform: translateX(-50%) scale(.84); transform-origin: bottom center; }
  .progress-ring { top: 55%; transform: translate(-50%,-50%) scale(.9); }
  .extract-banner { top: 29%; font-size: 20px; }
  .event-card { top: calc(48px + var(--sa-t)); transform: translateX(-50%) scale(.88); transform-origin: top center; }
  .xp-pop { right: calc(100px + var(--sa-r)); top: calc(98px + var(--sa-t)); }
  .cbtn span { display: none; }
  .raid-end { padding: calc(8px + var(--sa-t)) calc(10px + var(--sa-r)) calc(8px + var(--sa-b)) calc(10px + var(--sa-l)); }
  .raid-end h1 { font-size: 32px; }
  .raid-end .cause { font-size: 12px; }
  .topbar { min-height: 44px; padding-top: calc(5px + var(--sa-t)); padding-bottom: 4px; }
  .topbar h2 { font-size: 16px; }
  .topbar .sub { font-size: 9px; }
  .content { gap: 7px; padding-top: 6px; padding-bottom: calc(6px + var(--sa-b)); }
  .panel { padding: 9px; }
  .menu-left { top: calc(8px + var(--sa-t)); bottom: calc(8px + var(--sa-b)); gap: 3px; width: min(270px, 42%); }
  .wordmark .dz { font-size: 27px; }
  .wordmark .dovy { font-size: 10px; margin-bottom: 4px; }
  .play-btn { height: 50px; font-size: 21px; margin: 2px 0 4px; }
  .mnav { font-size: 13px; padding: 4px 10px 4px 13px; }
  .menu-news { display: none; }
  .menu-top { transform: scale(.86); transform-origin: top right; }
  .menu-dock { transform: scale(.82); transform-origin: bottom right; }
}

@container stage (max-height: 390px) {
  .hud .tl { transform: scale(.78); }
  .tr { transform: scale(.72); }
  .compass { width: 160px; }
  .objective { display: none; }
  .weapon-panel { left: 43%; transform: translateX(-50%) scale(.74); }
  .extract-banner { top: 24%; font-size: 18px; }
  .event-card { display: none; }
  .menu-top { transform: scale(.74); }
  .menu-dock { transform: scale(.72); }
  .studio-mark { display: none; }
  .raid-end h1 { font-size: 27px; }
  .raid-end .row.gap:last-child { flex-wrap: wrap; gap: 6px !important; }
}

@container stage (max-width: 760px) {
  .menu-left { width: min(250px, 46%); }
  .menu-news { width: min(205px, 31%); }
  .objective { max-width: 38%; }
  .weapon-panel { left: 42%; }
}


/* 0.3.0 — professional motion + clarity pass */
:root{
  --void:#08090a;
  --deep:#101214;
  --glass:rgba(18,20,22,.84);
  --glass2:rgba(25,28,30,.90);
  --line:rgba(232,224,208,.13);
  --lineHi:rgba(232,224,208,.28);
  --text:#f3f0e9;
  --dim:#aaa69d;
  --mute:#6f716f;
  --acc:#e2a64a;
  --accHi:#ffdca0;
  --accLo:#6f4919;
  --holo:linear-gradient(100deg,#65747b 0%,#a78555 28%,#e2a64a 52%,#f0d7a5 76%,#79858a 100%);
  --holoLoop:linear-gradient(100deg,#65747b 0%,#a78555 18%,#e2a64a 36%,#f0d7a5 54%,#79858a 72%,#65747b 88%,#a78555 100%);
  --conic:conic-gradient(from 210deg,#65747b,#a78555,#e2a64a,#f0d7a5,#79858a,#65747b);
  --cyan:#86bdc8;
  --lilac:#a6a8b3;
  --pink:#c86b73;
  --gold:#e4b75b;
  --red:#e9575e;
  --warn:#eab05b;
  --green:#86bd73;
  --holo:linear-gradient(90deg,#7d8790 0%,#e2a64a 45%,#f2d49b 62%,#7d8790 100%);
  --holoLoop:linear-gradient(100deg,#7e8790 0%,#e2a64a 28%,#f0d7a5 50%,#88939b 72%,#e2a64a 100%);
  --conic:conic-gradient(from 210deg,#59636a,#e2a64a,#f1d7a5,#7e8a91,#59636a);
  --chrome:linear-gradient(180deg,#fff 0%,#ddd9d0 34%,#777a7b 52%,#bcb8ae 75%,#f4efe4 100%);
  --gloss:linear-gradient(180deg,rgba(255,255,255,.32),rgba(255,255,255,.025));
  --r:12px;
}

/* calmer tactical surfaces */
.screen{
  background:
    radial-gradient(70% 65% at 95% -8%,rgba(226,166,74,.10),transparent 62%),
    radial-gradient(55% 60% at -8% 110%,rgba(134,189,200,.07),transparent 64%),
    linear-gradient(180deg,#0e1011,#08090a);
  animation:dzScreenIn .34s cubic-bezier(.16,.84,.3,1) backwards;
}
.screen::before{ opacity:.42; }
.screen::after{ opacity:.18; background-size:58px 58px; }
.panel,.sheet,.kv,.wp,.qs,.objective,.event-card,.toast{
  -webkit-backdrop-filter:blur(10px); backdrop-filter:blur(10px);
}
.panel{
  background:linear-gradient(180deg,rgba(31,34,36,.84),rgba(13,15,16,.90));
  border-color:rgba(232,224,208,.14);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.055),0 10px 28px rgba(0,0,0,.26);
}
.panel::before{ background:linear-gradient(90deg,transparent,var(--acc),transparent); opacity:.46; }
.topbar{ background:linear-gradient(180deg,rgba(16,18,19,.94),rgba(10,11,12,.72)); animation:dzTopIn .34s cubic-bezier(.16,.84,.3,1) backwards; }
.topbar::after{ background:linear-gradient(90deg,transparent,var(--acc),transparent); opacity:.42; }
.content > *{ animation:dzPanelIn .36s cubic-bezier(.16,.84,.3,1) backwards; }
.content > *:nth-child(2){animation-delay:.035s}.content > *:nth-child(3){animation-delay:.07s}.content > *:nth-child(4){animation-delay:.105s}

/* simpler buttons: one clear action colour */
.btn,.tab,.mnav,.play-btn,.dock-btn,.qs,.ibtn{
  transition:transform .14s cubic-bezier(.2,.8,.2,1),filter .15s ease,background-color .18s ease,border-color .18s ease,box-shadow .18s ease,opacity .18s ease;
  will-change:transform;
}
.btn{ border-radius:10px; background:linear-gradient(180deg,rgba(43,46,48,.94),rgba(18,20,21,.96)); box-shadow:inset 0 1px 0 rgba(255,255,255,.10),0 5px 14px rgba(0,0,0,.30); }
.btn::before{ opacity:.18; border-radius:9px; }
.btn.primary{ border-color:rgba(255,220,160,.72); background:linear-gradient(180deg,#efc473,#d89a3e 52%,#8d5f21); color:#171109; text-shadow:none; box-shadow:inset 0 1px 0 rgba(255,255,255,.45),0 7px 20px rgba(0,0,0,.36),0 0 14px rgba(226,166,74,.18); }
.btn.primary::before{opacity:.38}.btn.teal{border-color:rgba(134,189,200,.52);background:linear-gradient(180deg,#517783,#263f46 58%,#17262b)}
.btn.pressed,.mnav.pressed,.dock-btn.pressed,.qs.pressed,.ibtn.pressed{ transform:scale(.965); filter:brightness(1.08); }
@media  (hover:hover) and (pointer:fine){.btn:hover,.tab:hover,.mnav:hover,.dock-btn:hover,.qs:hover,.ibtn:hover{transform:translateY(-1px);filter:brightness(1.07)}}

/* menu: remove secondary systems from first contact */
.menu-shade{ background:linear-gradient(90deg,rgba(7,8,9,.94) 0%,rgba(9,10,11,.72) 35%,rgba(7,8,9,.08) 66%),linear-gradient(0deg,rgba(7,8,9,.68),transparent 34%); }
.menu-left{ gap:8px; animation:dzMenuLeft .42s cubic-bezier(.16,.84,.3,1) backwards; }
.menu-top{ animation:dzMenuTop .42s .06s cubic-bezier(.16,.84,.3,1) backwards; }
.menu-dock{ animation:dzMenuDock .42s .12s cubic-bezier(.16,.84,.3,1) backwards; }
.menu-news{ display:none !important; }



.mnav{ border-radius:10px; padding:8px 12px 8px 14px; font-size:14px; background:rgba(16,18,19,.20); }
.mnav::before{ width:2px;height:62%;top:19%;margin:0;border-radius:2px;background:var(--acc);box-shadow:none;opacity:.45; }
.mnav.pressed,.mnav:hover{ transform:translateX(2px); background:linear-gradient(90deg,rgba(226,166,74,.11),transparent); color:var(--accHi); }
.play-btn{ height:56px;border-radius:12px;margin:6px 0 10px;padding:0 18px;background:linear-gradient(180deg,#f0c87d,#dca044 55%,#956527);border-color:rgba(255,224,172,.76);box-shadow:inset 0 1px 0 rgba(255,255,255,.48),0 9px 24px rgba(0,0,0,.35),0 0 18px rgba(226,166,74,.20);font-size:23px; }
.play-btn::before{border-radius:10px;opacity:.30}.play-btn.glow{animation:dzPlayBreath 2.6s ease-in-out infinite}.play-btn::after{animation-duration:4.8s;opacity:.38}
.dock-btn{ width:54px;height:48px;border-radius:10px;background:linear-gradient(180deg,rgba(46,50,52,.86),rgba(18,20,21,.92));border-color:rgba(232,224,208,.16);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 5px 14px rgba(0,0,0,.34); }
.dock-btn .ic{color:var(--dim);filter:none}.dock-btn.hot{background:linear-gradient(180deg,rgba(68,51,39,.88),rgba(27,22,18,.94));border-color:rgba(226,166,74,.35);box-shadow:0 5px 14px rgba(0,0,0,.34)}
.wordmark{animation:dzWordmark .50s cubic-bezier(.16,.84,.3,1) both}.wordmark .dovy{background:linear-gradient(90deg,var(--dim),var(--accHi));-webkit-background-clip:text;background-clip:text}.wordmark .dz{animation:sweep 8s ease-in-out infinite;font-size:30px}

/* clean HUD hierarchy */
.hud .tl{animation:dzHudLeft .36s cubic-bezier(.16,.84,.3,1) both}.hud .tr{animation:dzHudRight .36s .04s cubic-bezier(.16,.84,.3,1) both}.compass,.objective{animation:dzHudTop .36s .07s cubic-bezier(.16,.84,.3,1) both}.weapon-panel{animation:dzHudBottom .36s .10s cubic-bezier(.16,.84,.3,1) both}
.portrait{border-radius:10px;background:linear-gradient(145deg,#b8b5ac,#4b4e50);box-shadow:0 4px 12px rgba(0,0,0,.45)}.portrait canvas{border-radius:8px}.portrait .lv{background:linear-gradient(180deg,#efc473,#c98d35);color:#16110a;box-shadow:0 0 5px rgba(226,166,74,.35)}
.hpbar{height:8px;background:rgba(5,6,6,.78)}.hpbar i{transition:width .14s linear;background:linear-gradient(180deg,#ef8a8d,#d94750 58%,#8c242c);box-shadow:0 0 6px rgba(233,87,94,.35)}.hpbar b{transition:width .42s ease}
.stat{border-radius:8px;background:rgba(8,9,9,.66);border-color:rgba(255,255,255,.07)}
.compass{background:linear-gradient(180deg,rgba(226,166,74,.08),rgba(8,9,9,.05));}.compass .strip{color:rgba(246,222,182,.82);text-shadow:none}.compass .strip span.card{color:#fff;text-shadow:0 0 6px rgba(226,166,74,.35)}.compass::after{border-bottom-color:var(--acc);filter:none}
.objective{border-radius:10px;padding:5px 12px;background:rgba(14,16,17,.82);border-color:rgba(226,166,74,.30);box-shadow:0 5px 16px rgba(0,0,0,.28);color:var(--accHi);transition:opacity .2s ease,transform .2s ease,border-color .2s ease}.objective::before{content:"•";margin-right:7px;color:var(--acc);animation:dzObjectivePulse 1.6s ease-in-out infinite}
.minimap{border-radius:12px;padding:2px;background:linear-gradient(145deg,#9b9990,#34383a);box-shadow:0 4px 14px rgba(0,0,0,.43)}.minimap canvas,.minimap::after{inset:2px;border-radius:10px}
.wp{border-radius:10px;background:rgba(13,15,16,.82);border-color:rgba(232,224,208,.18);box-shadow:0 5px 16px rgba(0,0,0,.34)}.wp .ammo{color:#fff;text-shadow:none}.wp .ammo.empty{color:#ff797f;animation:dzLowAmmo .72s ease-in-out infinite}.qs{border-radius:10px;background:rgba(13,15,16,.82);border-color:rgba(232,224,208,.16)}

/* controls: less chrome, clearer thumb hierarchy */



/* feedback and end flow */
.toast{border-radius:10px;background:rgba(15,17,18,.94);border-color:rgba(232,224,208,.18);transform:translateY(-8px) scale(.98);transition:opacity .22s ease,transform .30s cubic-bezier(.16,.84,.3,1)}.toast.in{transform:none}.toast::before{box-shadow:0 0 6px var(--tc)}
.progress-ring .bar{height:6px;background:rgba(7,8,8,.80)}.progress-ring .bar i{background:linear-gradient(90deg,#b87e2f,#e2a64a,#ffdca0);box-shadow:0 0 7px rgba(226,166,74,.35)}
.extract-banner{font-size:22px;color:var(--accHi);text-shadow:0 2px 8px #000,0 0 12px rgba(226,166,74,.26);animation:dzExtractIn .30s cubic-bezier(.16,.84,.3,1) both}
.raid-end{background:radial-gradient(75% 90% at 18% 10%,rgba(233,87,94,.14),transparent 62%),rgba(8,9,10,.96);animation:dzEndIn .45s ease-out both}.raid-end.win{background:radial-gradient(75% 90% at 18% 10%,rgba(226,166,74,.13),transparent 62%),rgba(8,9,10,.96)}.raid-end h1{filter:drop-shadow(0 3px 12px rgba(0,0,0,.5));animation:dzEndTitle .52s cubic-bezier(.16,.9,.28,1.08) both}.raid-end.win h1{filter:drop-shadow(0 3px 12px rgba(0,0,0,.5));animation:dzEndTitle .52s cubic-bezier(.16,.9,.28,1.08) both}.kv{border-radius:9px;background:rgba(18,20,21,.76);animation:dzStatIn .35s cubic-bezier(.16,.84,.3,1) both}.end-grid .kv:nth-child(2){animation-delay:.04s}.end-grid .kv:nth-child(3){animation-delay:.08s}.end-grid .kv:nth-child(4){animation-delay:.12s}.end-grid .kv:nth-child(5){animation-delay:.16s}.end-grid .kv:nth-child(6){animation-delay:.20s}.end-grid .kv:nth-child(7){animation-delay:.24s}.end-grid .kv:nth-child(8){animation-delay:.28s}
.loot-reel .li{border-radius:9px;animation-duration:.34s}
.sheet{border-radius:14px;background:linear-gradient(180deg,#202325,#0e1011) padding-box,linear-gradient(180deg,rgba(255,255,255,.28),rgba(226,166,74,.18),rgba(255,255,255,.07)) border-box;box-shadow:0 24px 64px rgba(0,0,0,.62);transition:transform .30s cubic-bezier(.16,.84,.3,1),opacity .22s ease;transform:translateY(14px) scale(.985);opacity:.96}.scrim.in .sheet{opacity:1}.sheet::before{background:linear-gradient(90deg,transparent,var(--acc),transparent);opacity:.55}.scrim{background:rgba(5,6,6,.68);transition:opacity .22s ease;backdrop-filter:blur(7px)}

/* declutter advanced debug option in normal settings */
label:has(#set-fps){display:none!important}

/* better motion without motion sickness */
@keyframes dzScreenIn{from{opacity:0;transform:translateY(8px) scale(.995)}to{opacity:1;transform:none}}
@keyframes dzTopIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
@keyframes dzPanelIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes dzMenuLeft{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:none}}
@keyframes dzMenuTop{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
@keyframes dzMenuDock{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@keyframes dzWordmark{from{opacity:0;transform:translateY(-8px) scale(.98)}to{opacity:1;transform:none}}
@keyframes dzPlayBreath{0%,100%{box-shadow:inset 0 1px 0 rgba(255,255,255,.48),0 9px 24px rgba(0,0,0,.35),0 0 10px rgba(226,166,74,.12)}50%{box-shadow:inset 0 1px 0 rgba(255,255,255,.48),0 9px 24px rgba(0,0,0,.35),0 0 22px rgba(226,166,74,.27)}}
@keyframes dzHudLeft{from{opacity:0;transform:translate(-8px,-4px)}to{opacity:1;transform:none}}
@keyframes dzHudRight{from{opacity:0;transform:translate(8px,-4px)}to{opacity:1;transform:none}}
@keyframes dzHudTop{from{opacity:0;transform:translate(-50%,-7px)}to{opacity:1;transform:translateX(-50%)}}
@keyframes dzHudBottom{from{opacity:0;transform:translate(-50%,8px)}to{opacity:1;transform:translateX(-50%)}}
@keyframes dzObjectivePulse{50%{opacity:.38}}
@keyframes dzLowAmmo{50%{opacity:.55}}
@keyframes dzInteractIn{from{opacity:0;transform:translate(-100%,-50%) scale(.88)}to{opacity:1;transform:translate(-100%,-50%)}}
@keyframes dzExtractIn{from{opacity:0;transform:translate(-50%,-42%) scale(.94)}to{opacity:1;transform:translate(-50%,-50%)}}
@keyframes dzEndIn{from{opacity:0}to{opacity:1}}
@keyframes dzEndTitle{from{opacity:0;transform:translateY(-12px) scale(.94);letter-spacing:.15em}to{opacity:1;transform:none}}
@keyframes dzStatIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}

/* boot screen follows the same tactical palette */
.boot{background:#08090a}.boot-sub b{color:var(--acc);text-shadow:0 0 7px rgba(226,166,74,.28)}.boot-lcd .pct{color:var(--accHi);text-shadow:0 0 7px rgba(226,166,74,.28)}.boot-kick::after{background:linear-gradient(90deg,var(--acc),transparent)}.boot-start{border-radius:12px;border-color:rgba(255,224,172,.75);background:linear-gradient(180deg,#f0c87d,#dca044 55%,#956527);color:#171109;box-shadow:inset 0 1px 0 rgba(255,255,255,.45),0 8px 22px rgba(0,0,0,.34),0 0 16px rgba(226,166,74,.18);animation:popIn .32s cubic-bezier(.16,.84,.3,1),dzBootPulse 2.8s ease-in-out .35s infinite}.boot-start::before{border-radius:10px;opacity:.28}.boot-start::after{opacity:.34;animation-duration:4.8s}.boot-flash{background:radial-gradient(60% 60% at 50% 50%,rgba(255,245,224,.9),rgba(226,166,74,.34) 42%,rgba(70,74,75,.12) 75%,transparent)}@keyframes dzBootPulse{50%{box-shadow:inset 0 1px 0 rgba(255,255,255,.45),0 8px 22px rgba(0,0,0,.34),0 0 28px rgba(226,166,74,.28)}}
/* Character setup: calm tactical styling instead of legacy neon */
.survivor-pad{background:radial-gradient(circle,rgba(226,166,74,.13),rgba(101,116,123,.055) 58%,transparent 70%);animation:dzPanelIn .34s cubic-bezier(.16,.84,.3,1) backwards}
.survivor-pad::before{opacity:.58;animation:spin 22s linear infinite}
.survivor-pad::after{border-color:rgba(232,224,208,.16)}
.seg{border-radius:10px;background:rgba(10,12,13,.66);padding:3px;gap:3px}
.seg button{border-radius:8px;transition:background .16s ease,color .16s ease,transform .12s ease,box-shadow .16s ease}
.seg button.on{background:linear-gradient(180deg,#f0c87d,#dca044 55%,#956527);color:#171109;box-shadow:inset 0 1px 0 rgba(255,255,255,.34),0 3px 10px rgba(0,0,0,.28),0 0 10px rgba(226,166,74,.12)}
.seg button:active{transform:scale(.97)}
input.text{border-radius:10px;background:rgba(9,11,12,.78);transition:border-color .16s ease,box-shadow .16s ease,background .16s ease}
input.text:focus{border-color:rgba(226,166,74,.70);box-shadow:inset 0 2px 6px rgba(0,0,0,.48),0 0 0 3px rgba(226,166,74,.11);background:rgba(14,16,17,.90)}
.switch:checked{background:linear-gradient(180deg,rgba(226,166,74,.80),rgba(149,101,39,.88));border-color:rgba(255,220,160,.72);box-shadow:0 0 9px rgba(226,166,74,.18)}


@media  (max-height:430px){
  .objective{top:calc(29px + var(--sa-t));font-size:11px;padding:4px 9px;max-width:40%}
  .weapon-panel{bottom:calc(5px + var(--sa-b));transform:translateX(-50%) scale(.92);transform-origin:bottom center}
  .hud .tl,.hud .tr{transform:scale(.90);transform-origin:top left}.hud .tr{transform-origin:top right}
  .menu-left{width:min(280px,43%)}
}
@media  (max-height:360px){
  .objective{display:none}
  .weapon-panel{transform:translateX(-50%) scale(.82)}
  .hud .tl,.hud .tr{transform:scale(.78)}
  .menu-left{gap:3px}.play-btn{height:48px;font-size:20px}.mnav{padding:5px 10px;font-size:12px}
}

`;
    var et = class {
        constructor(e) {
            v(this, "s");
            this.s = e >>> 0 || 2654435769
        }
        get state() {
            return this.s
        }
        next() {
            let e = this.s = this.s + 1831565813 >>> 0;
            return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296
        }
        range(e, t) {
            return e + (t - e) * this.next()
        }
        int(e, t) {
            return Math.floor(e + (t - e + 1) * this.next())
        }
        chance(e) {
            return this.next() < e
        }
        pick(e) {
            return e[Math.floor(this.next() * e.length)]
        }
        weighted(e) {
            let t = 0;
            for (let r of e) t += r.w;
            let a = this.next() * t;
            for (let r of e)
                if (a -= r.w, a <= 0) return r.v;
            return e[e.length - 1].v
        }
        shuffle(e) {
            for (let t = e.length - 1; t > 0; t--) {
                let a = Math.floor(this.next() * (t + 1));
                [e[t], e[a]] = [e[a], e[t]]
            }
            return e
        }
    };

    function jt(i) {
        let e = 2166136261;
        for (let t = 0; t < i.length; t++) e ^= i.charCodeAt(t), e = Math.imul(e, 16777619);
        return e >>> 0
    }
    var Ja = ["common", "uncommon", "rare", "epic", "military", "blackmarket", "prototype"],
        ct = {
            common: "Common",
            uncommon: "Uncommon",
            rare: "Rare",
            epic: "Elite",
            military: "Military",
            blackmarket: "Black-Market",
            prototype: "Prototype"
        },
        ae = {
            common: "#a9aec4",
            uncommon: "#7dff9b",
            rare: "#5ec2ff",
            epic: "#c28bff",
            military: "#ffd36e",
            blackmarket: "#ff5e7e",
            prototype: "#5ef6ff"
        },
        Ge = {
            common: 0,
            uncommon: 1,
            rare: 2,
            epic: 3,
            military: 3,
            blackmarket: 4,
            prototype: 5
        },
        er = {
            weapon: "Firearm",
            melee: "Melee",
            ammo: "Ammunition",
            attachment: "Attachment",
            medical: "Medical",
            food: "Food",
            drink: "Drink",
            armour: "Body Armour",
            helmet: "Headgear",
            backpack: "Backpack",
            valuable: "Valuable",
            money: "Money",
            electronics: "Electronics",
            component: "Component",
            tool: "Tool",
            key: "Key",
            seed: "Seeds",
            crop: "Crop",
            contraband: "Contraband"
        },
        O = i => ({
            stack: 1,
            ...i
        }),
        tr = {
            a9: "9mm",
            a44: ".44",
            a12: "12 ga",
            a556: "5.56",
            a762: "7.62",
            a338: ".338"
        },
        ir = [O({
            id: "w_ward9",
            name: "Ward 9",
            cat: "weapon",
            rarity: "common",
            w: 2,
            h: 1,
            weight: .9,
            value: 450,
            icon: "pistol",
            desc: "Police-issue 9mm. Reliable, quiet-ish, forgiving.",
            weapon: {
                cls: "pistol",
                cal: "a9",
                dmg: 28,
                rpm: 380,
                spread: 3,
                recoil: 2.2,
                mag: 15,
                reload: 1.4,
                move: 1,
                dur: 900,
                noise: 700,
                range: 420,
                pen: .15,
                modes: ["semi"],
                slots: ["optic", "muzzle", "mag", "tac"],
                sidearm: !0
            }
        }), O({
            id: "w_kestrel",
            name: "Kestrel .44",
            cat: "weapon",
            rarity: "uncommon",
            w: 2,
            h: 1,
            weight: 1.3,
            value: 1150,
            icon: "revolver",
            desc: "Six heavy rounds. Stops a runner in its tracks.",
            weapon: {
                cls: "revolver",
                cal: "a44",
                dmg: 60,
                rpm: 150,
                spread: 2,
                recoil: 6,
                mag: 6,
                reload: 2.6,
                move: 1,
                dur: 700,
                noise: 880,
                range: 480,
                pen: .38,
                modes: ["semi"],
                slots: ["optic", "tac"],
                sidearm: !0
            }
        }), O({
            id: "w_hornet",
            name: "Hornet SMG",
            cat: "weapon",
            rarity: "uncommon",
            w: 3,
            h: 1,
            weight: 2.4,
            value: 2300,
            icon: "smg",
            desc: "Compact 9mm automatic. Eats ammo, clears rooms.",
            weapon: {
                cls: "smg",
                cal: "a9",
                dmg: 21,
                rpm: 780,
                spread: 4,
                recoil: 1.5,
                mag: 30,
                reload: 2,
                move: .97,
                dur: 1600,
                noise: 650,
                range: 440,
                pen: .18,
                modes: ["auto", "semi"],
                slots: ["optic", "muzzle", "mag", "grip", "tac", "stock"]
            }
        }), O({
            id: "w_mako",
            name: "Mako-12",
            cat: "weapon",
            rarity: "uncommon",
            w: 4,
            h: 1,
            weight: 3.4,
            value: 1900,
            icon: "shotgun",
            desc: "Pump-action 12 gauge. Devastating up close, useless at range.",
            weapon: {
                cls: "shotgun",
                cal: "a12",
                dmg: 15,
                pellets: 8,
                rpm: 70,
                spread: 9,
                recoil: 9,
                mag: 6,
                reload: 3.4,
                move: .94,
                dur: 600,
                noise: 950,
                range: 250,
                pen: .1,
                modes: ["semi"],
                slots: ["optic", "tac", "grip", "stock"]
            }
        }), O({
            id: "w_fieldmaster",
            name: "Fieldmaster",
            cat: "weapon",
            rarity: "rare",
            w: 4,
            h: 1,
            weight: 3.6,
            value: 3300,
            icon: "hunting",
            desc: "Bolt-action 7.62 hunting rifle. One shot, one problem solved.",
            weapon: {
                cls: "hunting",
                cal: "a762",
                dmg: 95,
                rpm: 46,
                spread: .8,
                recoil: 10,
                mag: 5,
                reload: 3,
                move: .93,
                dur: 700,
                noise: 1e3,
                range: 900,
                pen: .6,
                modes: ["semi"],
                slots: ["optic", "muzzle", "stock"]
            }
        }), O({
            id: "w_vr556",
            name: "VR-556 Carbine",
            cat: "weapon",
            rarity: "rare",
            w: 4,
            h: 1,
            weight: 3.2,
            value: 5400,
            icon: "ar",
            desc: "Lightweight 5.56 carbine. Accurate, controllable, everyone wants one.",
            weapon: {
                cls: "rifle",
                cal: "a556",
                dmg: 32,
                rpm: 640,
                spread: 2.4,
                recoil: 1.9,
                mag: 30,
                reload: 2.4,
                move: .93,
                dur: 2200,
                noise: 950,
                range: 720,
                pen: .45,
                modes: ["auto", "semi"],
                slots: ["optic", "muzzle", "mag", "grip", "tac", "stock"]
            }
        }), O({
            id: "w_vk74",
            name: "VK-74 Carrion",
            cat: "weapon",
            rarity: "military",
            w: 4,
            h: 1,
            weight: 3.8,
            value: 7e3,
            icon: "ak",
            tint: "#6b4a2c",
            desc: "Military 7.62 rifle. Kicks hard, hits harder, goes through almost anything.",
            weapon: {
                cls: "rifle",
                cal: "a762",
                dmg: 41,
                rpm: 560,
                spread: 3,
                recoil: 2.8,
                mag: 30,
                reload: 2.6,
                move: .92,
                dur: 2600,
                noise: 1e3,
                range: 680,
                pen: .58,
                modes: ["auto", "semi"],
                slots: ["optic", "muzzle", "mag", "grip", "tac", "stock"]
            }
        }), O({
            id: "w_brute12",
            name: "Brute-12",
            cat: "weapon",
            rarity: "epic",
            w: 4,
            h: 1,
            weight: 4.1,
            value: 9800,
            icon: "autoshotgun",
            desc: "Semi-automatic drum shotgun. Hold the corridor.",
            weapon: {
                cls: "shotgun",
                cal: "a12",
                dmg: 14,
                pellets: 9,
                rpm: 230,
                spread: 8,
                recoil: 6.5,
                mag: 8,
                reload: 3.2,
                move: .9,
                dur: 1200,
                noise: 980,
                range: 260,
                pen: .15,
                modes: ["semi"],
                slots: ["optic", "tac", "grip", "stock"]
            }
        }), O({
            id: "w_longwatch",
            name: "Longwatch .338",
            cat: "weapon",
            rarity: "epic",
            w: 5,
            h: 1,
            weight: 6.2,
            value: 14500,
            icon: "sniper",
            desc: "Long-range precision rifle. Penetrates armour and anything behind it.",
            weapon: {
                cls: "sniper",
                cal: "a338",
                dmg: 165,
                rpm: 40,
                spread: .35,
                recoil: 14,
                mag: 5,
                reload: 3.4,
                move: .88,
                dur: 900,
                noise: 1250,
                range: 1250,
                pen: .85,
                modes: ["semi"],
                slots: ["optic", "muzzle", "stock"]
            }
        }), O({
            id: "w_wraith",
            name: "PX-9 Wraith",
            cat: "weapon",
            rarity: "prototype",
            w: 3,
            h: 1,
            weight: 2.2,
            value: 19500,
            icon: "wraith",
            tint: "#3fe0d0",
            desc: "Pre-collapse prototype with an integral suppressor. Barely a whisper.",
            weapon: {
                cls: "smg",
                cal: "a9",
                dmg: 27,
                rpm: 900,
                spread: 2.6,
                recoil: 1.1,
                mag: 40,
                reload: 1.8,
                move: .98,
                dur: 3e3,
                noise: 240,
                range: 520,
                pen: .32,
                modes: ["auto", "semi"],
                slots: ["optic", "tac"],
                integralSuppressor: !0
            }
        }), O({
            id: "m_knife",
            name: "Kitchen Knife",
            cat: "melee",
            rarity: "common",
            w: 1,
            h: 2,
            weight: .3,
            value: 60,
            icon: "knife",
            desc: "Quick and silent. Short reach.",
            melee: {
                dmg: 34,
                speed: .42,
                reach: 40,
                arc: 70,
                stamina: 6,
                stagger: .15,
                bleedChance: .4
            }
        }), O({
            id: "m_crowbar",
            name: "Crowbar",
            cat: "melee",
            rarity: "common",
            w: 1,
            h: 3,
            weight: 1.6,
            value: 140,
            icon: "crowbar",
            desc: "Opens crates. Opens skulls.",
            melee: {
                dmg: 48,
                speed: .7,
                reach: 52,
                arc: 95,
                stamina: 11,
                stagger: .45
            }
        }), O({
            id: "m_bat",
            name: "Nail Bat",
            cat: "melee",
            rarity: "uncommon",
            w: 1,
            h: 3,
            weight: 1.1,
            value: 260,
            icon: "bat",
            desc: "A cricket bat with ambition.",
            melee: {
                dmg: 52,
                speed: .66,
                reach: 56,
                arc: 110,
                stamina: 10,
                stagger: .55,
                bleedChance: .3
            }
        }), O({
            id: "m_machete",
            name: "Machete",
            cat: "melee",
            rarity: "rare",
            w: 1,
            h: 3,
            weight: .9,
            value: 620,
            icon: "machete",
            desc: "Fast, wide arcs. Built for crowds.",
            melee: {
                dmg: 58,
                speed: .55,
                reach: 54,
                arc: 120,
                stamina: 9,
                stagger: .35,
                bleedChance: .5
            }
        }), O({
            id: "m_axe",
            name: "Fire Axe",
            cat: "melee",
            rarity: "epic",
            w: 1,
            h: 3,
            weight: 2.4,
            value: 1400,
            icon: "axe",
            desc: "Slow, heavy, final.",
            melee: {
                dmg: 95,
                speed: 1,
                reach: 60,
                arc: 100,
                stamina: 18,
                stagger: .85
            }
        }), O({
            id: "a9",
            name: "9mm Rounds",
            cat: "ammo",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 60,
            weight: .012,
            value: 4,
            icon: "ammo",
            tint: "#c9a25a",
            desc: "Pistol and SMG calibre.",
            ammo: {
                cal: "a9"
            }
        }), O({
            id: "a44",
            name: ".44 Magnum",
            cat: "ammo",
            rarity: "uncommon",
            w: 1,
            h: 1,
            stack: 36,
            weight: .02,
            value: 9,
            icon: "ammo",
            tint: "#c46a3a",
            desc: "Heavy revolver rounds.",
            ammo: {
                cal: "a44"
            }
        }), O({
            id: "a12",
            name: "12 Gauge Shells",
            cat: "ammo",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 30,
            weight: .04,
            value: 7,
            icon: "shells",
            tint: "#c23b32",
            desc: "Buckshot shells.",
            ammo: {
                cal: "a12"
            }
        }), O({
            id: "a556",
            name: "5.56 Rounds",
            cat: "ammo",
            rarity: "uncommon",
            w: 1,
            h: 1,
            stack: 60,
            weight: .012,
            value: 10,
            icon: "ammo",
            tint: "#7fa35a",
            desc: "Carbine calibre.",
            ammo: {
                cal: "a556"
            }
        }), O({
            id: "a762",
            name: "7.62 Rounds",
            cat: "ammo",
            rarity: "rare",
            w: 1,
            h: 1,
            stack: 60,
            weight: .017,
            value: 13,
            icon: "ammo",
            tint: "#5f7fae",
            desc: "Full-power rifle calibre.",
            ammo: {
                cal: "a762"
            }
        }), O({
            id: "a338",
            name: ".338 Rounds",
            cat: "ammo",
            rarity: "epic",
            w: 1,
            h: 1,
            stack: 20,
            weight: .03,
            value: 42,
            icon: "ammo",
            tint: "#9a6be0",
            desc: "Long-range magnum rounds.",
            ammo: {
                cal: "a338"
            }
        }), O({
            id: "att_reddot",
            name: "Pinpoint Red-Dot",
            cat: "attachment",
            rarity: "uncommon",
            w: 1,
            h: 1,
            weight: .15,
            value: 520,
            icon: "reddot",
            desc: "Tighter grouping, stronger aim assist.",
            attach: {
                slot: "optic",
                mods: {
                    spread: .85,
                    assist: .35
                }
            }
        }), O({
            id: "att_scope",
            name: "Ranger 4\xD7 Scope",
            cat: "attachment",
            rarity: "rare",
            w: 2,
            h: 1,
            weight: .4,
            value: 1400,
            icon: "scope",
            desc: "See and hit further. Aim further ahead.",
            attach: {
                slot: "optic",
                mods: {
                    spread: .7,
                    range: 1.35,
                    zoom: .18
                }
            }
        }), O({
            id: "att_supp",
            name: "Hush Suppressor",
            cat: "attachment",
            rarity: "rare",
            w: 2,
            h: 1,
            weight: .4,
            value: 1800,
            icon: "suppressor",
            desc: "Cuts gunshot noise by about two thirds. Fights stay small.",
            attach: {
                slot: "muzzle",
                mods: {
                    noise: .35,
                    dmg: .95
                }
            }
        }), O({
            id: "att_extmag",
            name: "Extended Magazine",
            cat: "attachment",
            rarity: "uncommon",
            w: 1,
            h: 2,
            weight: .3,
            value: 700,
            icon: "mag",
            desc: "+50% capacity, slightly slower reloads.",
            attach: {
                slot: "mag",
                mods: {
                    mag: 1.5,
                    reload: 1.1
                }
            }
        }), O({
            id: "att_grip",
            name: "Fore Grip",
            cat: "attachment",
            rarity: "uncommon",
            w: 1,
            h: 1,
            weight: .15,
            value: 450,
            icon: "grip",
            desc: "30% less recoil.",
            attach: {
                slot: "grip",
                mods: {
                    recoil: .7
                }
            }
        }), O({
            id: "att_light",
            name: "Tactical Light",
            cat: "attachment",
            rarity: "common",
            w: 1,
            h: 1,
            weight: .15,
            value: 300,
            icon: "flashlight",
            desc: "Weapon-mounted light. Essential after dark, but you will be seen.",
            attach: {
                slot: "tac",
                mods: {
                    light: !0
                }
            }
        }), O({
            id: "att_laser",
            name: "Laser Module",
            cat: "attachment",
            rarity: "rare",
            w: 1,
            h: 1,
            weight: .1,
            value: 900,
            icon: "laser",
            desc: "Visible laser. 20% tighter spread when moving.",
            attach: {
                slot: "tac",
                mods: {
                    spread: .8,
                    laser: !0,
                    assist: .15
                }
            }
        }), O({
            id: "att_stock",
            name: "Padded Stock",
            cat: "attachment",
            rarity: "uncommon",
            w: 2,
            h: 1,
            weight: .4,
            value: 500,
            icon: "stock",
            desc: "Steadier aim, less kick.",
            attach: {
                slot: "stock",
                mods: {
                    recoil: .8,
                    spread: .92
                }
            }
        }), O({
            id: "med_rag",
            name: "Clean Rag",
            cat: "medical",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 5,
            weight: .05,
            value: 15,
            icon: "rag",
            desc: "Stops bleeding. Barely.",
            use: {
                time: 2.4,
                stopBleed: !0
            }
        }), O({
            id: "med_bandage",
            name: "Bandage",
            cat: "medical",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 5,
            weight: .05,
            value: 45,
            icon: "bandage",
            desc: "Stops bleeding and patches you up a little.",
            use: {
                time: 1.6,
                stopBleed: !0,
                heal: 6
            }
        }), O({
            id: "med_pills",
            name: "Painkillers",
            cat: "medical",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 4,
            weight: .05,
            value: 70,
            icon: "pills",
            desc: "Restores 20 health over 20 seconds.",
            use: {
                time: 1,
                healOverTime: 20
            }
        }), O({
            id: "med_firstaid",
            name: "First Aid Kit",
            cat: "medical",
            rarity: "uncommon",
            w: 1,
            h: 1,
            weight: .4,
            value: 220,
            icon: "medkit",
            desc: "Restores 45 health and stops bleeding.",
            use: {
                time: 3.2,
                heal: 45,
                stopBleed: !0
            }
        }), O({
            id: "med_surgical",
            name: "Surgical Kit",
            cat: "medical",
            rarity: "rare",
            w: 2,
            h: 1,
            weight: .9,
            value: 650,
            icon: "surgical",
            desc: "Field surgery. Restores 85 health.",
            use: {
                time: 6,
                heal: 85,
                stopBleed: !0
            }
        }), O({
            id: "med_antibiotics",
            name: "Antibiotics",
            cat: "medical",
            rarity: "uncommon",
            w: 1,
            h: 1,
            stack: 3,
            weight: .05,
            value: 260,
            icon: "antibiotics",
            desc: "Pushes infection back by 60%.",
            use: {
                time: 1.2,
                infection: -60
            }
        }), O({
            id: "med_antiviral",
            name: "Antiviral Injector",
            cat: "medical",
            rarity: "epic",
            w: 1,
            h: 1,
            weight: .05,
            value: 1600,
            icon: "syringe",
            tint: "#3fe0d0",
            desc: "Clears infection and gives 3 minutes of immunity.",
            use: {
                time: 1,
                infection: -100,
                immune: 180
            }
        }), O({
            id: "med_adrenaline",
            name: "Adrenaline Shot",
            cat: "medical",
            rarity: "rare",
            w: 1,
            h: 1,
            weight: .05,
            value: 480,
            icon: "syringe",
            tint: "#e2563f",
            desc: "15 seconds of free sprinting and +12% speed.",
            use: {
                time: .6,
                stamina: 100,
                boost: 15,
                heal: 5
            }
        }), O({
            id: "food_beans",
            name: "Baked Beans",
            cat: "food",
            rarity: "common",
            w: 1,
            h: 1,
            weight: .42,
            value: 35,
            icon: "can",
            tint: "#3a6fb0",
            desc: "Restores 35 hunger.",
            use: {
                time: 2.5,
                hunger: 35
            }
        }), O({
            id: "food_peaches",
            name: "Tinned Peaches",
            cat: "food",
            rarity: "common",
            w: 1,
            h: 1,
            weight: .42,
            value: 40,
            icon: "can",
            tint: "#e09a3c",
            desc: "Restores 25 hunger and 12 thirst.",
            use: {
                time: 2.5,
                hunger: 25,
                thirst: 12
            }
        }), O({
            id: "food_crisps",
            name: "Crisps",
            cat: "food",
            rarity: "common",
            w: 1,
            h: 1,
            weight: .1,
            value: 14,
            icon: "crisps",
            desc: "Restores 12 hunger. Makes you thirsty.",
            use: {
                time: 1.2,
                hunger: 12,
                thirst: -4
            }
        }), O({
            id: "food_choc",
            name: "Chocolate Bar",
            cat: "food",
            rarity: "common",
            w: 1,
            h: 1,
            weight: .1,
            value: 22,
            icon: "bar",
            desc: "Restores 15 hunger and 20 stamina.",
            use: {
                time: 1,
                hunger: 15,
                stamina: 20
            }
        }), O({
            id: "food_mre",
            name: "Field Ration",
            cat: "food",
            rarity: "rare",
            w: 1,
            h: 1,
            weight: .5,
            value: 160,
            icon: "ration",
            desc: "Restores 70 hunger and 15 thirst.",
            use: {
                time: 3.5,
                hunger: 70,
                thirst: 15
            }
        }), O({
            id: "food_apple",
            name: "Apple",
            cat: "food",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 3,
            weight: .15,
            value: 12,
            icon: "apple",
            desc: "Restores 12 hunger and 6 thirst.",
            use: {
                time: 1.2,
                hunger: 12,
                thirst: 6
            }
        }), O({
            id: "food_jerky",
            name: "Jerky",
            cat: "food",
            rarity: "uncommon",
            w: 1,
            h: 1,
            stack: 3,
            weight: .1,
            value: 45,
            icon: "jerky",
            desc: "Restores 28 hunger.",
            use: {
                time: 1.4,
                hunger: 28,
                thirst: -3
            }
        }), O({
            id: "food_stew",
            name: "Hearty Stew",
            cat: "food",
            rarity: "uncommon",
            w: 1,
            h: 1,
            weight: .6,
            value: 120,
            icon: "stew",
            desc: "Cooked at the safehouse. Restores 60 hunger and 15 thirst.",
            use: {
                time: 3,
                hunger: 60,
                thirst: 15,
                heal: 5
            }
        }), O({
            id: "drink_water",
            name: "Bottled Water",
            cat: "drink",
            rarity: "common",
            w: 1,
            h: 1,
            weight: .5,
            value: 30,
            icon: "bottle",
            desc: "Restores 40 thirst.",
            use: {
                time: 1.8,
                thirst: 40
            }
        }), O({
            id: "drink_canteen",
            name: "Full Canteen",
            cat: "drink",
            rarity: "uncommon",
            w: 1,
            h: 1,
            weight: 1,
            value: 80,
            icon: "canteen",
            desc: "Restores 70 thirst.",
            use: {
                time: 2.4,
                thirst: 70
            }
        }), O({
            id: "drink_cola",
            name: "Fizzy Cola",
            cat: "drink",
            rarity: "common",
            w: 1,
            h: 1,
            weight: .35,
            value: 28,
            icon: "soda",
            tint: "#c23b32",
            desc: "Restores 25 thirst and 15 stamina.",
            use: {
                time: 1.2,
                thirst: 25,
                stamina: 15
            }
        }), O({
            id: "drink_volt",
            name: "Volt Energy",
            cat: "drink",
            rarity: "uncommon",
            w: 1,
            h: 1,
            weight: .35,
            value: 60,
            icon: "soda",
            tint: "#c8e04a",
            desc: "Restores 20 thirst and all stamina.",
            use: {
                time: 1.2,
                thirst: 20,
                stamina: 100
            }
        }), O({
            id: "arm_vest",
            name: "Police Stab Vest",
            cat: "armour",
            rarity: "uncommon",
            w: 2,
            h: 2,
            weight: 2.6,
            value: 1200,
            icon: "vest",
            tint: "#2f3a4a",
            desc: "Blocks 18% of damage. Light.",
            armour: {
                prot: .18,
                dur: 140
            }
        }), O({
            id: "arm_plate",
            name: "Plate Carrier",
            cat: "armour",
            rarity: "military",
            w: 2,
            h: 2,
            weight: 6.5,
            value: 4800,
            icon: "plate",
            tint: "#4d5a3a",
            desc: "Blocks 32% of damage.",
            armour: {
                prot: .32,
                dur: 260
            }
        }), O({
            id: "arm_riot",
            name: "Riot Armour",
            cat: "armour",
            rarity: "epic",
            w: 2,
            h: 2,
            weight: 8,
            value: 7600,
            icon: "plate",
            tint: "#20242c",
            desc: "Blocks 40% of damage. Heavy.",
            armour: {
                prot: .4,
                dur: 320
            }
        }), O({
            id: "arm_aegis",
            name: "Aegis Prototype Rig",
            cat: "armour",
            rarity: "prototype",
            w: 2,
            h: 2,
            weight: 5,
            value: 21e3,
            icon: "plate",
            tint: "#1b5f5a",
            desc: "Blocks 46% of damage and filters toxins.",
            armour: {
                prot: .46,
                dur: 400,
                toxic: !0
            }
        }), O({
            id: "hel_moto",
            name: "Motorcycle Helmet",
            cat: "helmet",
            rarity: "common",
            w: 2,
            h: 2,
            weight: 1.4,
            value: 380,
            icon: "motohelmet",
            desc: "Blocks 7% of damage.",
            armour: {
                prot: .07,
                dur: 80
            }
        }), O({
            id: "hel_mil",
            name: "Combat Helmet",
            cat: "helmet",
            rarity: "military",
            w: 2,
            h: 2,
            weight: 1.6,
            value: 2400,
            icon: "helmet",
            tint: "#4d5a3a",
            desc: "Blocks 14% of damage.",
            armour: {
                prot: .14,
                dur: 160
            }
        }), O({
            id: "hel_gasmask",
            name: "Gas Mask",
            cat: "helmet",
            rarity: "rare",
            w: 2,
            h: 2,
            weight: .9,
            value: 1300,
            icon: "gasmask",
            desc: "Immune to toxic clouds. No ballistic protection.",
            armour: {
                prot: 0,
                dur: 999,
                toxic: !0
            }
        }), O({
            id: "bag_school",
            name: "School Rucksack",
            cat: "backpack",
            rarity: "common",
            w: 2,
            h: 2,
            weight: .5,
            value: 180,
            icon: "backpack",
            tint: "#7a3b5a",
            desc: "4\xD73 storage.",
            bag: {
                w: 4,
                h: 3
            }
        }), O({
            id: "bag_hiker",
            name: "Hiking Pack",
            cat: "backpack",
            rarity: "uncommon",
            w: 2,
            h: 2,
            weight: 1.1,
            value: 650,
            icon: "backpack",
            tint: "#3d6b52",
            desc: "5\xD74 storage.",
            bag: {
                w: 5,
                h: 4
            }
        }), O({
            id: "bag_ruck",
            name: "Military Rucksack",
            cat: "backpack",
            rarity: "military",
            w: 2,
            h: 2,
            weight: 1.8,
            value: 2100,
            icon: "backpack",
            tint: "#5a5f3a",
            desc: "6\xD75 storage.",
            bag: {
                w: 6,
                h: 5
            }
        }), O({
            id: "bag_raider",
            name: "Raider Frame Pack",
            cat: "backpack",
            rarity: "blackmarket",
            w: 2,
            h: 2,
            weight: 2.4,
            value: 5200,
            icon: "backpack",
            tint: "#2a2a2e",
            desc: "7\xD75 storage. Built to haul.",
            bag: {
                w: 7,
                h: 5
            }
        }), O({
            id: "money_cash",
            name: "Cash Bundle",
            cat: "money",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 10,
            weight: .05,
            value: 100,
            icon: "cash",
            desc: "Old-world notes. Traders still take them: 100 each."
        }), O({
            id: "val_ring",
            name: "Wedding Ring",
            cat: "valuable",
            rarity: "uncommon",
            w: 1,
            h: 1,
            stack: 5,
            weight: .01,
            value: 420,
            icon: "ring",
            desc: "Someone said forever."
        }), O({
            id: "val_watch",
            name: "Gold Watch",
            cat: "valuable",
            rarity: "rare",
            w: 1,
            h: 1,
            weight: .15,
            value: 1100,
            icon: "watch",
            desc: "Still ticking."
        }), O({
            id: "val_locket",
            name: "Silver Locket",
            cat: "valuable",
            rarity: "uncommon",
            w: 1,
            h: 1,
            weight: .05,
            value: 380,
            icon: "locket",
            desc: "A photo of a family. You do not look."
        }), O({
            id: "val_lighter",
            name: "Brass Lighter",
            cat: "valuable",
            rarity: "common",
            w: 1,
            h: 1,
            weight: .08,
            value: 160,
            icon: "lighter",
            desc: "Collectors pay for these."
        }), O({
            id: "val_gpu",
            name: "Graphics Card",
            cat: "valuable",
            rarity: "epic",
            w: 2,
            h: 1,
            weight: 1.1,
            value: 3600,
            icon: "gpu",
            desc: "The traders run their networks on these."
        }), O({
            id: "val_intel",
            name: "Intel Folder",
            cat: "valuable",
            rarity: "military",
            w: 1,
            h: 1,
            weight: .3,
            value: 2600,
            icon: "folder",
            desc: "Classified evacuation records."
        }), O({
            id: "val_goldbar",
            name: "Gold Bar",
            cat: "valuable",
            rarity: "blackmarket",
            w: 1,
            h: 1,
            weight: 1,
            value: 7500,
            icon: "goldbar",
            desc: "Heavy, small, and worth the risk."
        }), O({
            id: "elec_battery",
            name: "Batteries",
            cat: "electronics",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 6,
            weight: .05,
            value: 30,
            icon: "battery",
            desc: "Powers lights and radios."
        }), O({
            id: "elec_radio",
            name: "Handheld Radio",
            cat: "electronics",
            rarity: "uncommon",
            w: 1,
            h: 2,
            weight: .5,
            value: 340,
            icon: "radio",
            desc: "Salvage for parts or sell."
        }), O({
            id: "elec_circuit",
            name: "Circuit Board",
            cat: "electronics",
            rarity: "uncommon",
            w: 1,
            h: 1,
            stack: 4,
            weight: .1,
            value: 180,
            icon: "circuit",
            desc: "Crafting component for generators and gear."
        }), O({
            id: "elec_wire",
            name: "Copper Wire",
            cat: "electronics",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 5,
            weight: .2,
            value: 70,
            icon: "wire",
            desc: "Crafting component."
        }), O({
            id: "comp_scrap",
            name: "Scrap Metal",
            cat: "component",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 10,
            weight: .5,
            value: 20,
            icon: "scrap",
            desc: "Basic building material."
        }), O({
            id: "comp_tape",
            name: "Duct Tape",
            cat: "component",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 3,
            weight: .15,
            value: 45,
            icon: "tape",
            desc: "Fixes almost anything."
        }), O({
            id: "comp_screws",
            name: "Screws",
            cat: "component",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 10,
            weight: .05,
            value: 18,
            icon: "screws",
            desc: "Crafting component."
        }), O({
            id: "comp_cloth",
            name: "Cloth",
            cat: "component",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 10,
            weight: .1,
            value: 10,
            icon: "cloth",
            desc: "Makes rags and bandages."
        }), O({
            id: "comp_rope",
            name: "Rope",
            cat: "component",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 3,
            weight: .4,
            value: 40,
            icon: "rope",
            desc: "Crafting component."
        }), O({
            id: "comp_gunparts",
            name: "Gun Parts",
            cat: "component",
            rarity: "rare",
            w: 1,
            h: 1,
            stack: 5,
            weight: .3,
            value: 320,
            icon: "gunparts",
            desc: "Springs, pins and a firing mechanism."
        }), O({
            id: "comp_solvent",
            name: "Gun Solvent",
            cat: "component",
            rarity: "uncommon",
            w: 1,
            h: 1,
            stack: 3,
            weight: .3,
            value: 90,
            icon: "solvent",
            desc: "Weapon maintenance."
        }), O({
            id: "comp_fuel",
            name: "Fuel Can",
            cat: "component",
            rarity: "uncommon",
            w: 2,
            h: 2,
            weight: 4,
            value: 260,
            icon: "fuel",
            desc: "Runs the safehouse generator."
        }), O({
            id: "tool_toolbox",
            name: "Toolbox",
            cat: "tool",
            rarity: "uncommon",
            w: 2,
            h: 1,
            weight: 3,
            value: 420,
            icon: "toolbox",
            desc: "Required for safehouse construction."
        }), O({
            id: "tool_repair",
            name: "Weapon Repair Kit",
            cat: "tool",
            rarity: "rare",
            w: 1,
            h: 1,
            stack: 2,
            weight: .6,
            value: 520,
            icon: "repairkit",
            desc: "Restores 35% weapon condition. Use from inventory."
        }), O({
            id: "tool_lockpick",
            name: "Lockpick Set",
            cat: "tool",
            rarity: "uncommon",
            w: 1,
            h: 1,
            weight: .1,
            value: 380,
            icon: "lockpick",
            desc: "Searches locked safes and lockers 50% faster."
        }), O({
            id: "tool_flare",
            name: "Signal Flare",
            cat: "tool",
            rarity: "rare",
            w: 1,
            h: 1,
            weight: .3,
            value: 900,
            icon: "flare",
            desc: "Use at the Flare Point to call an extraction."
        }), O({
            id: "key_police",
            name: "Evidence Room Key",
            cat: "key",
            rarity: "rare",
            w: 1,
            h: 1,
            weight: .02,
            value: 1200,
            icon: "key",
            tint: "#4e9de8",
            desc: "Opens the police evidence locker."
        }), O({
            id: "key_armory",
            name: "Armory Keycard",
            cat: "key",
            rarity: "military",
            w: 1,
            h: 1,
            weight: .02,
            value: 4200,
            icon: "keycard",
            tint: "#d6b44a",
            desc: "Opens the Checkpoint Echo armory and the Military Gate extraction."
        }), O({
            id: "key_safe",
            name: "Safe Combination",
            cat: "key",
            rarity: "uncommon",
            w: 1,
            h: 1,
            weight: .01,
            value: 600,
            icon: "note",
            desc: "Opens the bank safe in Little Harrow."
        }), O({
            id: "seed_tomato",
            name: "Tomato Seeds",
            cat: "seed",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 5,
            weight: .01,
            value: 25,
            icon: "seeds",
            tint: "#c23b32",
            desc: "Plant in the safehouse garden. Grows in 20 minutes."
        }), O({
            id: "seed_potato",
            name: "Seed Potatoes",
            cat: "seed",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 5,
            weight: .1,
            value: 30,
            icon: "seeds",
            tint: "#a07b4a",
            desc: "Plant in the safehouse garden. Grows in 30 minutes."
        }), O({
            id: "seed_carrot",
            name: "Carrot Seeds",
            cat: "seed",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 6,
            weight: .01,
            value: 35,
            icon: "seeds",
            tint: "#d77b32",
            desc: "Fast safehouse crop. Grows in 15 minutes."
        }), O({
            id: "seed_corn",
            name: "Sweetcorn Seeds",
            cat: "seed",
            rarity: "uncommon",
            w: 1,
            h: 1,
            stack: 6,
            weight: .02,
            value: 55,
            icon: "seeds",
            tint: "#d6b94c",
            desc: "Reliable food crop. Grows in 25 minutes."
        }), O({
            id: "seed_ghostleaf",
            name: "Ghostleaf Spores",
            cat: "seed",
            rarity: "rare",
            w: 1,
            h: 1,
            stack: 5,
            weight: .01,
            value: 300,
            icon: "seeds",
            tint: "#8fe0c8",
            desc: "Fictional contraband crop. Needs a grow room. Black-market traders pay well.",
            contraband: !0
        }), O({
            id: "seed_duskbloom",
            name: "Duskbloom Bulbs",
            cat: "seed",
            rarity: "blackmarket",
            w: 1,
            h: 1,
            stack: 3,
            weight: .05,
            value: 900,
            icon: "seeds",
            tint: "#b46ef0",
            desc: "Fictional contraband crop. Rare, slow and very valuable.",
            contraband: !0
        }), O({
            id: "crop_tomato",
            name: "Tomatoes",
            cat: "crop",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 6,
            weight: .15,
            value: 48,
            icon: "tomato",
            desc: "Restores 10 hunger and 8 thirst.",
            use: {
                time: 1,
                hunger: 10,
                thirst: 8
            }
        }), O({
            id: "crop_potato",
            name: "Potatoes",
            cat: "crop",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 6,
            weight: .2,
            value: 42,
            icon: "potato",
            desc: "Reliable survival crop. Cook into stew or sell."
        }), O({
            id: "crop_carrot",
            name: "Carrots",
            cat: "crop",
            rarity: "common",
            w: 1,
            h: 1,
            stack: 8,
            weight: .1,
            value: 52,
            icon: "food",
            tint: "#df7c2f",
            desc: "Fast crop. Restores hunger and sells well early-game.",
            use: {
                time: .8,
                hunger: 12,
                thirst: 3
            }
        }), O({
            id: "crop_corn",
            name: "Sweetcorn",
            cat: "crop",
            rarity: "uncommon",
            w: 1,
            h: 1,
            stack: 8,
            weight: .12,
            value: 68,
            icon: "food",
            tint: "#d8bd4f",
            desc: "High-yield safehouse crop. Good food and steady income.",
            use: {
                time: 1,
                hunger: 18,
                thirst: 4
            }
        }), O({
            id: "crop_ghostleaf",
            name: "Raw Ghostleaf",
            cat: "contraband",
            rarity: "rare",
            w: 1,
            h: 1,
            stack: 10,
            weight: .05,
            value: 320,
            icon: "leaf",
            tint: "#8fe0c8",
            desc: "Fictional contraband. Press into bricks at the safehouse.",
            contraband: !0
        }), O({
            id: "contra_brick",
            name: "Ghostleaf Brick",
            cat: "contraband",
            rarity: "blackmarket",
            w: 1,
            h: 1,
            stack: 5,
            weight: .4,
            value: 1900,
            icon: "brick",
            tint: "#8fe0c8",
            desc: "Fictional contraband. Only the black market buys it.",
            contraband: !0
        }), O({
            id: "crop_duskbloom",
            name: "Duskbloom Flower",
            cat: "contraband",
            rarity: "blackmarket",
            w: 1,
            h: 1,
            stack: 5,
            weight: .05,
            value: 1350,
            icon: "flower",
            tint: "#b46ef0",
            desc: "Fictional contraband. Refine into resin at the safehouse.",
            contraband: !0
        }), O({
            id: "contra_resin",
            name: "Duskbloom Resin",
            cat: "contraband",
            rarity: "blackmarket",
            w: 1,
            h: 1,
            stack: 3,
            weight: .2,
            value: 6800,
            icon: "resin",
            tint: "#b46ef0",
            desc: "Fictional contraband. The most valuable thing you can carry.",
            contraband: !0
        }), O({
            id: "farm_fert",
            name: "Fertiliser",
            cat: "component",
            rarity: "common",
            w: 1,
            h: 2,
            stack: 3,
            weight: 1.5,
            value: 60,
            icon: "fertiliser",
            desc: "Halves grow time for one plot."
        })],
        ht = Object.fromEntries(ir.map(i => [i.id, i])),
        mi = ir;

    function C(i) {
        let e = ht[i];
        if (!e) throw new Error("Unknown item " + i);
        return e
    }

    function ge(i) {
        let t = {
            ...C(i.id).weapon,
            light: !1,
            laser: !1,
            assist: 0,
            zoom: 0
        };
        if (i.att)
            for (let r of Object.values(i.att)) {
                if (!r) continue;
                let o = C(r).attach?.mods;
                o && (o.spread && (t.spread *= o.spread), o.recoil && (t.recoil *= o.recoil), o.noise && (t.noise *= o.noise), o.dmg && (t.dmg *= o.dmg), o.range && (t.range *= o.range), o.mag && (t.mag = Math.round(t.mag * o.mag)), o.reload && (t.reload *= o.reload), o.move && (t.move *= o.move), o.assist && (t.assist += o.assist), o.zoom && (t.zoom += o.zoom), o.light && (t.light = !0), o.laser && (t.laser = !0))
            }
        let a = i.cond ?? 1;
        return a < .5 && (t.spread *= 1 + (.5 - a) * 1.2), t
    }

    function le(i) {
        let e = C(i.id),
            t = e.value * i.qty;
        if ((e.weapon || e.armour) && (t *= .35 + .65 * (i.cond ?? 1)), i.att)
            for (let a of Object.values(i.att)) a && (t += C(a).value);
        return Math.round(t)
    }

    function fi(i) {
        let t = C(i.id).weight * i.qty;
        if (i.att)
            for (let a of Object.values(i.att)) a && (t += C(a).weight);
        return t
    }

    function zt(i) {
        return 400 + i * 160
    }
    var ga = 50,
        gi = [0, 6e3, 25e3, 8e4],
        Ue = [{
            id: "mags",
            name: "Mags",
            role: "Survival",
            colour: "#ffd36e",
            blurb: "Runs the market stall by the canal. Buys anything, sells the basics.",
            buyCats: ["food", "drink", "valuable", "money", "electronics", "component", "backpack", "crop", "tool", "medical", "key", "seed", "ammo", "attachment", "weapon", "melee", "armour", "helmet"],
            buyRate: .48,
            stock: [{
                id: "seed_carrot",
                rep: 0,
                qty: 2
            }, {
                id: "seed_tomato",
                rep: 0,
                qty: 2
            }, {
                id: "seed_potato",
                rep: 0,
                qty: 2
            }, {
                id: "seed_corn",
                rep: 1,
                qty: 2
            }, {
                id: "food_beans",
                rep: 0
            }, {
                id: "drink_water",
                rep: 0
            }, {
                id: "food_choc",
                rep: 0
            }, {
                id: "drink_cola",
                rep: 0
            }, {
                id: "med_rag",
                rep: 0,
                qty: 2
            }, {
                id: "bag_school",
                rep: 0,
                limit: 3
            }, {
                id: "m_crowbar",
                rep: 0,
                limit: 2
            }, {
                id: "food_mre",
                rep: 1,
                limit: 4
            }, {
                id: "drink_canteen",
                rep: 1,
                limit: 4
            }, {
                id: "bag_hiker",
                rep: 1,
                limit: 2
            }, {
                id: "m_machete",
                rep: 2,
                limit: 1
            }, {
                id: "drink_volt",
                rep: 1
            }]
        }, {
            id: "sarge",
            name: "Sarge",
            role: "Weapons",
            colour: "#c8ff2e",
            blurb: "Ex-Territorial Army. Keeps his rifles oiled and his prices fair.",
            buyCats: ["weapon", "ammo", "attachment", "melee", "armour", "helmet"],
            buyRate: .45,
            stock: [{
                id: "w_ward9",
                rep: 0,
                limit: 3
            }, {
                id: "a9",
                rep: 0,
                qty: 30
            }, {
                id: "a12",
                rep: 0,
                qty: 15
            }, {
                id: "att_light",
                rep: 0,
                limit: 3
            }, {
                id: "w_mako",
                rep: 0,
                limit: 2
            }, {
                id: "w_kestrel",
                rep: 1,
                limit: 2
            }, {
                id: "a44",
                rep: 1,
                qty: 18
            }, {
                id: "w_hornet",
                rep: 1,
                limit: 2
            }, {
                id: "att_reddot",
                rep: 1,
                limit: 2
            }, {
                id: "att_grip",
                rep: 1,
                limit: 2
            }, {
                id: "att_extmag",
                rep: 1,
                limit: 2
            }, {
                id: "hel_moto",
                rep: 0,
                limit: 2
            }, {
                id: "arm_vest",
                rep: 1,
                limit: 2
            }, {
                id: "w_fieldmaster",
                rep: 2,
                limit: 1
            }, {
                id: "a762",
                rep: 2,
                qty: 30
            }, {
                id: "w_vr556",
                rep: 2,
                limit: 1
            }, {
                id: "a556",
                rep: 2,
                qty: 30
            }, {
                id: "att_stock",
                rep: 2,
                limit: 2
            }, {
                id: "att_scope",
                rep: 3,
                limit: 1
            }, {
                id: "w_vk74",
                rep: 3,
                limit: 1
            }]
        }, {
            id: "doc",
            name: "Doc Okafor",
            role: "Medical",
            colour: "#5ef6ff",
            blurb: "The last GP in Harrowmere. Pays well for medicine she can use.",
            buyCats: ["medical", "food", "drink", "crop"],
            buyRate: .58,
            stock: [{
                id: "med_bandage",
                rep: 0,
                qty: 2
            }, {
                id: "med_pills",
                rep: 0,
                qty: 2
            }, {
                id: "med_firstaid",
                rep: 0,
                limit: 5
            }, {
                id: "med_antibiotics",
                rep: 1,
                limit: 4
            }, {
                id: "med_surgical",
                rep: 2,
                limit: 2
            }, {
                id: "med_adrenaline",
                rep: 2,
                limit: 2
            }, {
                id: "hel_gasmask",
                rep: 1,
                limit: 1
            }, {
                id: "med_antiviral",
                rep: 3,
                limit: 1
            }]
        }, {
            id: "bev",
            name: "Builder Bev",
            role: "Builder",
            colour: "#ffa95e",
            blurb: "Can build anything out of anything. Needs parts to do it.",
            buyCats: ["component", "electronics", "tool", "scrap"],
            buyRate: .48,
            stock: [{
                id: "comp_scrap",
                rep: 0,
                qty: 5
            }, {
                id: "comp_screws",
                rep: 0,
                qty: 5
            }, {
                id: "comp_tape",
                rep: 0
            }, {
                id: "comp_cloth",
                rep: 0,
                qty: 5
            }, {
                id: "elec_wire",
                rep: 0,
                qty: 2
            }, {
                id: "comp_rope",
                rep: 0
            }, {
                id: "tool_toolbox",
                rep: 1,
                limit: 2
            }, {
                id: "elec_circuit",
                rep: 1,
                limit: 4
            }, {
                id: "comp_solvent",
                rep: 1
            }, {
                id: "comp_fuel",
                rep: 1,
                limit: 3
            }, {
                id: "farm_fert",
                rep: 0,
                limit: 6
            }, {
                id: "seed_tomato",
                rep: 0,
                qty: 3
            }, {
                id: "seed_potato",
                rep: 0,
                qty: 3
            }, {
                id: "tool_lockpick",
                rep: 2,
                limit: 1
            }, {
                id: "tool_repair",
                rep: 2,
                limit: 2
            }, {
                id: "comp_gunparts",
                rep: 2,
                limit: 3
            }]
        }, {
            id: "threads",
            name: "Threads",
            role: "Clothing",
            colour: "#ff5ec8",
            blurb: "Tailor. Patches, dyes and outfits. Purely for looking the part.",
            buyCats: ["component"],
            buyRate: .3,
            stock: []
        }, {
            id: "fence",
            name: "The Fence",
            role: "Black Market",
            colour: "#ff3d5e",
            blurb: "Nobody knows his name. He buys contraband and sells what nobody else will.",
            buyCats: ["contraband", "valuable", "key", "weapon", "attachment"],
            buyRate: .42,
            contrabandRate: .92,
            unlock: {
                upgrade: {
                    id: "radio",
                    level: 1
                }
            },
            stock: [{
                id: "seed_ghostleaf",
                rep: 0,
                limit: 4
            }, {
                id: "att_supp",
                rep: 0,
                limit: 1
            }, {
                id: "key_safe",
                rep: 0,
                limit: 1
            }, {
                id: "key_police",
                rep: 1,
                limit: 1
            }, {
                id: "att_laser",
                rep: 1,
                limit: 2
            }, {
                id: "bag_raider",
                rep: 2,
                tokens: 6,
                limit: 1
            }, {
                id: "seed_duskbloom",
                rep: 1,
                tokens: 3,
                limit: 2
            }, {
                id: "w_brute12",
                rep: 2,
                tokens: 10,
                limit: 1
            }, {
                id: "key_armory",
                rep: 2,
                tokens: 5,
                limit: 1
            }, {
                id: "tool_flare",
                rep: 1,
                limit: 1
            }]
        }, {
            id: "vance",
            name: "Major Vance",
            role: "Special Operations",
            colour: "#a98bff",
            blurb: "Runs what is left of Echo command. Pays in tokens for real work.",
            buyCats: ["valuable", "weapon", "armour", "helmet"],
            buyRate: .47,
            unlock: {
                level: 8,
                upgrade: {
                    id: "radio",
                    level: 2
                }
            },
            stock: [{
                id: "arm_plate",
                rep: 0,
                limit: 1
            }, {
                id: "hel_mil",
                rep: 0,
                limit: 1
            }, {
                id: "bag_ruck",
                rep: 0,
                limit: 1
            }, {
                id: "a338",
                rep: 1,
                qty: 10
            }, {
                id: "w_longwatch",
                rep: 2,
                tokens: 14,
                limit: 1
            }, {
                id: "arm_riot",
                rep: 2,
                tokens: 9,
                limit: 1
            }, {
                id: "med_antiviral",
                rep: 1,
                tokens: 2,
                limit: 2
            }, {
                id: "w_wraith",
                rep: 3,
                tokens: 24,
                limit: 1
            }]
        }],
        Yo = 1.35;

    function ut(i) {
        return i.price ? i.price : Math.round(C(i.id).value * (i.qty ?? 1) * Yo)
    }
    var J = (i, e, t, a, r = {}) => ({
            cash: i,
            items: e ? e.split(",").map(o => {
                let [s, d] = o.trim().split(":");
                if (!ht[s]) throw new Error("upgrade item " + s);
                return {
                    id: s,
                    qty: Number(d ?? 1)
                }
            }) : [],
            minutes: t,
            effect: a,
            ...r
        }),
        Ni = [{
            id: "stash",
            name: "Stash",
            blurb: "Lockable storage for everything you bring home.",
            levels: [J(2500, "comp_scrap:4", 0, "10\xD710 stash"), J(9e3, "comp_scrap:8,comp_screws:6", 10, "10\xD713 stash"), J(28e3, "tool_toolbox:1,comp_tape:3", 30, "10\xD716 stash", {
                playerLevel: 6
            }), J(7e4, "tool_toolbox:2,elec_circuit:2", 120, "10\xD720 stash", {
                playerLevel: 12
            })]
        }, {
            id: "rack",
            name: "Weapon Rack",
            blurb: "Wall mounts for long guns. Saves stash space and looks the part.",
            levels: [J(3e3, "comp_scrap:6,comp_screws:4", 0, "4 weapon mounts"), J(12e3, "comp_scrap:10,tool_toolbox:1", 15, "8 weapon mounts"), J(35e3, "comp_gunparts:2,tool_toolbox:1", 60, "12 weapon mounts", {
                playerLevel: 8
            })]
        }, {
            id: "bench",
            name: "Workbench",
            blurb: "Crafting. Higher levels unlock ammunition and weapon parts.",
            levels: [J(1500, "comp_scrap:3", 0, "Basic recipes"), J(1e4, "tool_toolbox:1,comp_screws:6", 15, "Medical kits, ammo, contraband presses"), J(32e3, "comp_gunparts:2,elec_circuit:2", 60, "Suppressors, magazines, rifle ammo", {
                playerLevel: 7
            })]
        }, {
            id: "medical",
            name: "Medical Station",
            blurb: "Recover between raids.",
            levels: [J(2500, "med_bandage:2", 0, "Heal 6 HP per minute"), J(14e3, "med_firstaid:2,elec_battery:4", 15, "Heal 20 HP per minute, cure infection", {
                requires: [{
                    id: "generator",
                    level: 1
                }]
            }), J(4e4, "med_surgical:1,elec_circuit:2", 60, "Full heal on return", {
                playerLevel: 9
            })]
        }, {
            id: "generator",
            name: "Generator",
            blurb: "Power for the grow room, medical station and lights.",
            levels: [J(6e3, "comp_fuel:1,elec_wire:3", 5, "Powers level 2 rooms"), J(24e3, "comp_fuel:2,elec_circuit:2", 45, "Powers grow room level 2+", {
                playerLevel: 6
            })]
        }, {
            id: "pantry",
            name: "Food Storage",
            blurb: "Tins and dry goods. Tops you up before each raid.",
            levels: [J(2e3, "food_beans:2", 0, "Hunger topped up to 50% before raids"), J(9e3, "food_mre:1,comp_scrap:6", 15, "Hunger topped up to 75%"), J(26e3, "food_mre:2,tool_toolbox:1", 45, "Hunger topped up to 95%")]
        }, {
            id: "water",
            name: "Water Storage",
            blurb: "Rain collectors and filters. Tops you up before each raid.",
            levels: [J(2e3, "drink_water:2", 0, "Thirst topped up to 50% before raids"), J(9e3, "comp_rope:2,comp_scrap:6", 15, "Thirst topped up to 75%"), J(26e3, "elec_circuit:1,tool_toolbox:1", 45, "Thirst topped up to 95%")]
        }, {
            id: "garden",
            name: "Garden",
            blurb: "Raised beds for legal crops.",
            levels: [J(1500, "seed_tomato:1", 0, "2 plots"), J(8e3, "farm_fert:2,comp_rope:1", 10, "4 plots"), J(22e3, "farm_fert:3,tool_toolbox:1", 40, "6 plots")]
        }, {
            id: "growroom",
            name: "Grow Room",
            blurb: "Blacked-out room for fictional contraband crops. High value, high risk to carry.",
            levels: [J(15e3, "elec_wire:4,comp_tape:2", 20, "1 grow tent", {
                requires: [{
                    id: "generator",
                    level: 1
                }],
                playerLevel: 4
            }), J(4e4, "elec_circuit:3,comp_fuel:1", 60, "2 grow tents", {
                requires: [{
                    id: "generator",
                    level: 2
                }]
            }), J(9e4, "elec_circuit:4,val_gpu:1", 180, "4 grow tents", {
                playerLevel: 14
            })]
        }, {
            id: "security",
            name: "Security",
            blurb: "Locks, alarms and a contact at the insurer.",
            levels: [J(5e3, "comp_scrap:8,comp_screws:8", 5, "Insurance returns 25% faster"), J(2e4, "tool_toolbox:1,elec_circuit:2", 30, "+1 protected slot", {
                playerLevel: 5
            }), J(6e4, "elec_circuit:4,comp_gunparts:2", 120, "Insurance costs 25% less", {
                playerLevel: 10
            })]
        }, {
            id: "radio",
            name: "Radio Mast",
            blurb: "Reach traders who do not advertise.",
            levels: [J(8e3, "elec_radio:1,elec_wire:3", 10, "Unlocks The Fence (black market)", {
                playerLevel: 3
            }), J(3e4, "elec_radio:1,elec_circuit:3", 45, "Unlocks Major Vance (special operations)", {
                playerLevel: 8
            }), J(7e4, "elec_circuit:4,val_intel:1", 120, "+5% on everything you sell", {
                playerLevel: 12
            })]
        }];

    function bi(i) {
        return Ni.find(e => e.id === i)
    }
    var ba = [8, 10, 13, 16, 20],
        ar = [0, 4, 8, 12],
        Yt = [0, 50, 75, 95],
        yi = [2, 6, 20, 999],
        rr = [0, 2, 4, 6],
        or = [0, 1, 2, 4],
        Ae = (i, e, t, a, r, o) => {
            let [s, d] = e.split(":");
            return {
                id: i,
                out: {
                    id: s,
                    qty: Number(d ?? 1)
                },
                inp: t.split(",").map(n => {
                    let [l, c] = n.trim().split(":");
                    if (!ht[l]) throw new Error("recipe item " + l);
                    return {
                        id: l,
                        qty: Number(c ?? 1)
                    }
                }),
                bench: a,
                seconds: r,
                growroom: o
            }
        },
        Ht = [Ae("rag", "med_rag:2", "comp_cloth:1", 1, 20), Ae("bandage", "med_bandage:1", "comp_cloth:2,comp_tape:1", 1, 45), Ae("stew", "food_stew:1", "crop_potato:2,crop_tomato:1,drink_water:1", 1, 60), Ae("lockpick", "tool_lockpick:1", "comp_scrap:2,comp_screws:2,comp_tape:1", 1, 120), Ae("a9", "a9:30", "comp_scrap:3,comp_screws:2", 2, 90), Ae("a12", "a12:15", "comp_scrap:3,comp_cloth:2", 2, 90), Ae("firstaid", "med_firstaid:1", "med_bandage:2,med_pills:1,comp_cloth:1", 2, 120), Ae("repair", "tool_repair:1", "comp_gunparts:1,comp_solvent:1,comp_tape:1", 2, 180), Ae("brick", "contra_brick:1", "crop_ghostleaf:5", 2, 240, 1), Ae("resin", "contra_resin:1", "crop_duskbloom:3", 2, 600, 2), Ae("a556", "a556:30", "comp_scrap:4,comp_gunparts:1", 3, 180), Ae("a762", "a762:30", "comp_scrap:5,comp_gunparts:1", 3, 200), Ae("extmag", "att_extmag:1", "comp_gunparts:1,comp_scrap:3,comp_screws:3", 3, 300), Ae("supp", "att_supp:1", "comp_gunparts:2,comp_scrap:4,comp_tape:2", 3, 600), Ae("flare", "tool_flare:1", "elec_circuit:1,comp_fuel:1,comp_tape:1", 3, 420)],
        Dt = [{
            seed: "seed_carrot",
            out: "crop_carrot",
            minutes: 15,
            yield: [4, 7],
            room: "garden"
        }, {
            seed: "seed_tomato",
            out: "crop_tomato",
            minutes: 20,
            yield: [4, 7],
            room: "garden"
        }, {
            seed: "seed_corn",
            out: "crop_corn",
            minutes: 25,
            yield: [5, 8],
            room: "garden"
        }, {
            seed: "seed_potato",
            out: "crop_potato",
            minutes: 30,
            yield: [4, 7],
            room: "garden"
        }, {
            seed: "seed_ghostleaf",
            out: "crop_ghostleaf",
            minutes: 45,
            yield: [5, 8],
            room: "growroom"
        }, {
            seed: "seed_duskbloom",
            out: "crop_duskbloom",
            minutes: 120,
            yield: [2, 4],
            room: "growroom"
        }],
        ye = [{
            id: "o_default",
            name: "Survivor",
            jacket: "#4c5a46",
            trousers: "#2f3338",
            accent: "#a07b4a",
            source: "Default"
        }, {
            id: "o_hivis",
            name: "Council Worker",
            jacket: "#c8b23a",
            trousers: "#2a2e36",
            accent: "#d8d8d0",
            source: "Threads",
            cash: 6e3
        }, {
            id: "o_waxed",
            name: "Waxed Jacket",
            jacket: "#3d4a2e",
            trousers: "#5a4a36",
            accent: "#8a6a3a",
            source: "Threads",
            cash: 9e3
        }, {
            id: "o_urban",
            name: "Urban Grey",
            jacket: "#5a5e66",
            trousers: "#2a2c30",
            accent: "#9aa0a8",
            source: "Threads",
            cash: 12e3
        }, {
            id: "o_ranger",
            name: "Fenland Ranger",
            jacket: "#2f4a3a",
            trousers: "#3a3428",
            accent: "#c8a24a",
            source: "Premium Starter Pack"
        }, {
            id: "o_operator",
            name: "Operator Black",
            jacket: "#1c1e22",
            trousers: "#24272c",
            accent: "#3fe0d0",
            source: "Operator Pack"
        }, {
            id: "o_warlord",
            name: "Warlord",
            jacket: "#4a2420",
            trousers: "#2a2220",
            accent: "#d6b44a",
            source: "Warlord Pack"
        }, {
            id: "o_founder",
            name: "Founder",
            jacket: "#2a2340",
            trousers: "#1c1a26",
            accent: "#b46ef0",
            source: "Founder Pack"
        }, {
            id: "o_plus",
            name: "DOVY+ Field Kit",
            jacket: "#3a3156",
            trousers: "#22202c",
            accent: "#9a7bff",
            source: "DOVY+ monthly"
        }, {
            id: "o_hazmat",
            name: "Hazmat",
            jacket: "#c8c03a",
            trousers: "#c8c03a",
            accent: "#2a2a2a",
            source: "Season pass level 45 (premium)"
        }, {
            id: "o_ghillie",
            name: "Ghillie Suit",
            jacket: "#4a5a32",
            trousers: "#3a4a28",
            accent: "#6a7a42",
            source: "Season pass level 30"
        }, {
            id: "o_paramedic",
            name: "Paramedic",
            jacket: "#2a5a3a",
            trousers: "#1f2a24",
            accent: "#e8e05a",
            source: "Store",
            credits: 450
        }, {
            id: "o_y2k",
            name: "Millennium Bug",
            jacket: "#5a4ad6",
            trousers: "#c8ccdf",
            accent: "#5ef6ff",
            source: "Store",
            credits: 600
        }, {
            id: "o_nightwatch",
            name: "Night Watch",
            jacket: "#171b20",
            trousers: "#101318",
            accent: "#e2a64a",
            source: "Threads",
            cash: 15000
        }, {
            id: "o_scavenger",
            name: "Road Scavenger",
            jacket: "#705137",
            trousers: "#34302c",
            accent: "#c86b73",
            source: "Threads",
            cash: 8500
        }, {
            id: "o_responder",
            name: "Emergency Responder",
            jacket: "#263b43",
            trousers: "#20282d",
            accent: "#ef6a5b",
            source: "Threads",
            cash: 11000
        }, {
            id: "o_marsh",
            name: "Marsh Stalker",
            jacket: "#314435",
            trousers: "#252e28",
            accent: "#86bd73",
            source: "Threads",
            cash: 13500
        }, {
            id: "o_ash",
            name: "Ash Runner",
            jacket: "#4b4542",
            trousers: "#282626",
            accent: "#d8b577",
            source: "Threads",
            cash: 7000
        }, {
            id: "o_bandit",
            name: "Rust Bandit",
            jacket: "#5a3028",
            trousers: "#2c2725",
            accent: "#bf4f42",
            source: "Threads",
            cash: 12000
        }, {
            id: "o_forest",
            name: "Forest Scout",
            jacket: "#294333",
            trousers: "#202b25",
            accent: "#7ea15c",
            source: "Threads",
            cash: 16000
        }, {
            id: "o_winter",
            name: "Winter Ops",
            jacket: "#65717c",
            trousers: "#303840",
            accent: "#d7e4e8",
            source: "Store",
            credits: 550
        }, {
            id: "o_redline",
            name: "Redline Elite",
            jacket: "#191d21",
            trousers: "#111417",
            accent: "#d34b43",
            source: "Store",
            credits: 850
        }, {
            id: "o_harbour",
            name: "Harbour Drifter",
            jacket: "#334552",
            trousers: "#252b31",
            accent: "#d79b55",
            source: "Threads",
            cash: 10500
        }, {
            id: "o_woodland",
            name: "Woodland Trapper",
            jacket: "#3d4a2f",
            trousers: "#292f24",
            accent: "#9c7d4b",
            source: "Threads",
            cash: 14500
        }, {
            id: "o_merc",
            name: "Grey Mercenary",
            jacket: "#31353a",
            trousers: "#202328",
            accent: "#c1c6cb",
            source: "Threads",
            cash: 18000
        }, {
            id: "o_sheriff",
            name: "Harrow Sheriff",
            jacket: "#263443",
            trousers: "#1d2530",
            accent: "#d6b44a",
            source: "Threads",
            cash: 22000
        }, {
            id: "o_nomad",
            name: "Ashland Nomad",
            jacket: "#604936",
            trousers: "#302a24",
            accent: "#d9c59a",
            source: "Market Outfit Case"
        }, {
            id: "o_raider2",
            name: "Blackwood Raider",
            jacket: "#292526",
            trousers: "#17191b",
            accent: "#b1453e",
            source: "Market Outfit Case"
        }, {
            id: "o_civildef",
            name: "Civil Defence",
            jacket: "#384d48",
            trousers: "#252f2d",
            accent: "#e0c84f",
            source: "Market Outfit Case"
        }, {
            id: "o_frost",
            name: "Frostline Scout",
            jacket: "#687680",
            trousers: "#303a41",
            accent: "#dfe8ec",
            source: "Market Outfit Case"
        }],
        Ve = [{
            id: "s_fen",
            name: "Fen Camo",
            colour: "#5a6a3a",
            source: "Season pass level 15 (premium)"
        }, {
            id: "s_ember",
            name: "Ember",
            colour: "#c2502a",
            source: "Season pass level 35 (premium)"
        }, {
            id: "s_bone",
            name: "Bone",
            colour: "#d8d0b8",
            source: "Season pass level 60"
        }, {
            id: "s_gold",
            name: "Warlord Gold",
            colour: "#d6b44a",
            source: "Warlord Pack"
        }, {
            id: "s_violet",
            name: "Founder Violet",
            colour: "#8a5ad6",
            source: "Founder Pack"
        }, {
            id: "s_carbon",
            name: "Carbon",
            colour: "#2a2c30",
            source: "Store",
            credits: 350
        }, {
            id: "s_arctic",
            name: "Arctic",
            colour: "#c8d8e0",
            source: "Store",
            credits: 350
        }, {
            id: "s_chrome",
            name: "Liquid Chrome",
            colour: "#c9cfe6",
            source: "Store",
            credits: 500
        }],
        Fi = [{
            id: "pack_scout",
            name: "Scout Support Pack",
            price: 1.99,
            oneTime: !0,
            tag: "Low-cost support",
            blurb: "A small fixed support pack: useful supplies, a little premium currency and an Ash Runner outfit.",
            grant: {
                cash: 3000,
                credits: 150,
                items: [{
                    id: "med_firstaid",
                    qty: 1
                }, {
                    id: "a9",
                    qty: 60
                }, {
                    id: "seed_carrot",
                    qty: 2
                }],
                outfits: ["o_ash"]
            }
        }, {
            id: "pack_starter",
            name: "Starter Survivor Pack",
            price: 3.99,
            oneTime: !0,
            tag: "Best first buy",
            blurb: "Enough kit to survive your first week, plus a permanent protected slot.",
            grant: {
                cash: 5e3,
                items: [{
                    id: "w_hornet",
                    qty: 1
                }, {
                    id: "a9",
                    qty: 60
                }, {
                    id: "a9",
                    qty: 30
                }, {
                    id: "bag_hiker",
                    qty: 1
                }, {
                    id: "arm_vest",
                    qty: 1
                }, {
                    id: "med_firstaid",
                    qty: 1
                }, {
                    id: "med_firstaid",
                    qty: 1
                }, {
                    id: "med_bandage",
                    qty: 3
                }],
                protectedSlots: 1
            }
        }, {
            id: "pack_premium",
            name: "Premium Starter Pack",
            price: 8.99,
            oneTime: !0,
            blurb: "A carbine, armour and room to keep what you find.",
            grant: {
                cash: 15e3,
                credits: 500,
                items: [{
                    id: "w_vr556",
                    qty: 1,
                    att: {
                        optic: "att_reddot"
                    }
                }, {
                    id: "a556",
                    qty: 60
                }, {
                    id: "a556",
                    qty: 60
                }, {
                    id: "bag_ruck",
                    qty: 1
                }, {
                    id: "arm_plate",
                    qty: 1
                }, {
                    id: "med_surgical",
                    qty: 1
                }, {
                    id: "med_firstaid",
                    qty: 1
                }, {
                    id: "med_firstaid",
                    qty: 1
                }],
                protectedSlots: 1,
                stashRows: 2,
                outfits: ["o_ranger"]
            }
        }, {
            id: "pack_operator",
            name: "Operator Pack",
            price: 17.99,
            oneTime: !0,
            tag: "Most popular",
            blurb: "Suppressed, scoped and armoured. Faster crafting for good.",
            grant: {
                cash: 3e4,
                credits: 1200,
                items: [{
                    id: "w_vk74",
                    qty: 1,
                    att: {
                        muzzle: "att_supp",
                        optic: "att_scope"
                    }
                }, {
                    id: "a762",
                    qty: 60
                }, {
                    id: "a762",
                    qty: 60
                }, {
                    id: "hel_mil",
                    qty: 1
                }, {
                    id: "arm_plate",
                    qty: 1
                }, {
                    id: "med_surgical",
                    qty: 1
                }],
                protectedSlots: 1,
                stashRows: 4,
                craftSpeed: .25,
                insuranceSlots: 1,
                outfits: ["o_operator"]
            }
        }, {
            id: "pack_warlord",
            name: "Warlord Pack",
            price: 34.99,
            oneTime: !0,
            blurb: "A Longwatch, riot armour and a raider pack. Built for Checkpoint Echo.",
            grant: {
                cash: 75e3,
                credits: 2800,
                items: [{
                    id: "w_longwatch",
                    qty: 1,
                    att: {
                        optic: "att_scope"
                    }
                }, {
                    id: "a338",
                    qty: 20
                }, {
                    id: "a338",
                    qty: 20
                }, {
                    id: "arm_riot",
                    qty: 1
                }, {
                    id: "bag_raider",
                    qty: 1
                }, {
                    id: "key_armory",
                    qty: 1
                }],
                protectedSlots: 1,
                stashRows: 6,
                loadoutSlots: 1,
                farmSpeed: .25,
                repBoost: 1,
                outfits: ["o_warlord"],
                skins: ["s_gold"]
            }
        }, {
            id: "pack_founder",
            name: "Founder Pack",
            price: 59.99,
            oneTime: !0,
            tag: "Limited: Season 1 only",
            blurb: "Support Dovy Studio from day one. Every permanent upgrade in one bundle.",
            grant: {
                cash: 15e4,
                credits: 5e3,
                tokens: 10,
                items: [{
                    id: "w_wraith",
                    qty: 1
                }, {
                    id: "a9",
                    qty: 60
                }, {
                    id: "a9",
                    qty: 60
                }, {
                    id: "arm_aegis",
                    qty: 1
                }, {
                    id: "hel_gasmask",
                    qty: 1
                }],
                protectedSlots: 1,
                stashRows: 8,
                insuranceSlots: 2,
                characterSlots: 1,
                loadoutSlots: 1,
                craftSpeed: .25,
                farmSpeed: .25,
                outfits: ["o_founder"],
                skins: ["s_violet"],
                badge: "Founder"
            }
        }],
        Wi = [{
            id: "dc_200",
            credits: 200,
            bonus: 0,
            price: 1.99
        }, {
            id: "dc_600",
            credits: 550,
            bonus: 50,
            price: 4.99
        }, {
            id: "dc_1350",
            credits: 1200,
            bonus: 150,
            price: 9.99
        }, {
            id: "dc_3000",
            credits: 2500,
            bonus: 500,
            price: 19.99
        }, {
            id: "dc_8500",
            credits: 6500,
            bonus: 2000,
            price: 49.99
        }],
        ve = {
            id: "dovy_plus",
            name: "DOVY+ Survivor",
            price: 7.99,
            period: "month",
            dailyCredits: 50,
            perks: [{
                k: "stashRows",
                v: 4,
                text: "+4 stash rows while subscribed"
            }, {
                k: "insuranceSlots",
                v: 1,
                text: "+1 insured item every raid"
            }, {
                k: "dailyCredits",
                v: 40,
                text: "50 DOVY Credits every day you log in (up to 1,550 a month)"
            }, {
                k: "craftSpeed",
                v: .5,
                text: "Crafting and construction 2\xD7 faster"
            }, {
                k: "insuranceReturn",
                v: .5,
                text: "Insured gear returns 2\xD7 faster"
            }, {
                k: "loadoutSlots",
                v: 1,
                text: "+1 saved loadout"
            }, {
                k: "xp",
                v: .1,
                text: "+10% raid XP"
            }, {
                k: "listings",
                v: 3,
                text: "+3 marketplace listings (when the market opens)"
            }, {
                k: "outfit",
                v: 1,
                text: "Monthly exclusive outfit (this month: DOVY+ Field Kit)"
            }]
        },
        ke = {
            passPremium: 950,
            stashRows2: 300,
            finishPerMinute: 4,
            insuranceSlot: 600,
            rerollStock: 60
        },
        pt = 750,
        vt = 60,
        xi = {
            id: 1,
            name: "Season 1: Harrowmere",
            ends: "2026-12-14"
        };

    function Zo(i) {
        if (i === 30) return {
            outfit: "o_ghillie",
            label: "Ghillie Suit outfit"
        };
        if (i === 60) return {
            skin: "s_bone",
            label: "Bone weapon skin"
        };
        if (i % 10 === 0) return {
            credits: 50,
            label: "50 DOVY Credits"
        };
        if (i % 5 === 0) return {
            tokens: 1,
            label: "1 Black-Market Token"
        };
        let e = [{
            cash: 1500,
            label: "1,500 cash"
        }, {
            item: {
                id: "med_firstaid",
                qty: 1
            },
            label: "First Aid Kit"
        }, {
            item: {
                id: "a9",
                qty: 60
            },
            label: "60 \xD7 9mm"
        }, {
            item: {
                id: "comp_gunparts",
                qty: 1
            },
            label: "Gun Parts"
        }, {
            cash: 2500,
            label: "2,500 cash"
        }, {
            item: {
                id: "food_mre",
                qty: 1
            },
            label: "Field Ration"
        }, {
            item: {
                id: "elec_circuit",
                qty: 2
            },
            label: "2 \xD7 Circuit Board"
        }, {
            item: {
                id: "tool_repair",
                qty: 1
            },
            label: "Weapon Repair Kit"
        }];
        return e[i % e.length]
    }

    function Xo(i) {
        if (i === 1) return {
            item: {
                id: "bag_ruck",
                qty: 1
            },
            label: "Military Rucksack"
        };
        if (i === 15) return {
            skin: "s_fen",
            label: "Fen Camo weapon skin"
        };
        if (i === 35) return {
            skin: "s_ember",
            label: "Ember weapon skin"
        };
        if (i === 45) return {
            outfit: "o_hazmat",
            label: "Hazmat outfit"
        };
        if (i === 60) return {
            item: {
                id: "w_wraith",
                qty: 1
            },
            label: "PX-9 Wraith (prototype)"
        };
        if (i % 6 === 0) return {
            credits: 100,
            label: "100 DOVY Credits"
        };
        if (i % 9 === 0) return {
            booster: 1,
            label: "1 hour +25% XP booster"
        };
        let e = [{
            cash: 5e3,
            label: "5,000 cash"
        }, {
            item: {
                id: "med_surgical",
                qty: 1
            },
            label: "Surgical Kit"
        }, {
            item: {
                id: "a556",
                qty: 60
            },
            label: "60 \xD7 5.56"
        }, {
            tokens: 2,
            label: "2 Black-Market Tokens"
        }, {
            item: {
                id: "arm_plate",
                qty: 1
            },
            label: "Plate Carrier"
        }, {
            item: {
                id: "att_supp",
                qty: 1
            },
            label: "Hush Suppressor"
        }, {
            cash: 8e3,
            label: "8,000 cash"
        }, {
            item: {
                id: "seed_duskbloom",
                qty: 1
            },
            label: "Duskbloom Bulbs"
        }];
        return e[i % e.length]
    }
    var Bi = Array.from({
            length: vt
        }, (i, e) => ({
            level: e + 1,
            free: Zo(e + 1),
            prem: Xo(e + 1)
        })),
        kt = [{
            id: "d_kill15",
            text: "Kill 15 infected",
            key: "zkills",
            target: 15,
            cash: 1500,
            xp: 300
        }, {
            id: "d_search10",
            text: "Search 10 containers",
            key: "searched",
            target: 10,
            cash: 1200,
            xp: 250
        }, {
            id: "d_extract1",
            text: "Extract from Harrowmere",
            key: "extracts",
            target: 1,
            cash: 2e3,
            xp: 350
        }, {
            id: "d_value8k",
            text: "Extract with 8,000+ worth of loot",
            key: "bigExtract",
            target: 1,
            cash: 3e3,
            xp: 400
        }, {
            id: "d_runner3",
            text: "Kill 3 runners",
            key: "kill_runner",
            target: 3,
            cash: 1500,
            xp: 300
        }, {
            id: "d_soldier2",
            text: "Kill 2 infected soldiers",
            key: "kill_soldier",
            target: 2,
            cash: 2500,
            xp: 400
        }, {
            id: "d_rare2",
            text: "Find 2 rare-or-better items",
            key: "rares",
            target: 2,
            cash: 2e3,
            xp: 350
        }, {
            id: "d_dist",
            text: "Travel 3 km in raids",
            key: "km",
            target: 3,
            cash: 1200,
            xp: 250
        }],
        wt = [{
            id: "w_extract7",
            text: "Extract 7 times",
            key: "extracts",
            target: 7,
            cash: 15e3,
            xp: 2e3,
            tokens: 2,
            weekly: !0
        }, {
            id: "w_kill150",
            text: "Kill 150 infected",
            key: "zkills",
            target: 150,
            cash: 12e3,
            xp: 1800,
            tokens: 1,
            weekly: !0
        }, {
            id: "w_brute",
            text: "Kill The Brute",
            key: "bosses",
            target: 1,
            cash: 2e4,
            xp: 2500,
            tokens: 3,
            weekly: !0
        }, {
            id: "w_search80",
            text: "Search 80 containers",
            key: "searched",
            target: 80,
            cash: 1e4,
            xp: 1500,
            tokens: 1,
            weekly: !0
        }, {
            id: "w_toxic5",
            text: "Kill 5 toxic bloaters",
            key: "kill_toxic",
            target: 5,
            cash: 9e3,
            xp: 1400,
            tokens: 1,
            weekly: !0
        }];

    function sr() {
        return [{
            id: "a9",
            qty: 30
        }, {
            id: "med_bandage",
            qty: 2
        }, {
            id: "food_beans",
            qty: 1
        }, {
            id: "drink_water",
            qty: 1
        }, {
            id: "comp_cloth",
            qty: 3
        }, {
            id: "comp_scrap",
            qty: 4
        }, {
            id: "seed_carrot",
            qty: 2
        }, {
            id: "seed_tomato",
            qty: 1
        }]
    }
    var nr = .12,
        lr = 30,
        dr = 2,
        cr = 5;

    function Ne(i, e, t = 1, a = {}) {
        let r = C(e),
            o = {
                uid: i,
                id: e,
                qty: Math.min(t, r.stack),
                ...a
            };
        return r.weapon && (o.cond = o.cond ?? 1, o.ammo = o.ammo ?? 0, o.mode = 0), (r.armour || r.melee) && (o.cond = o.cond ?? 1), o
    }
    var Ce = ["primary", "secondary", "sidearm", "melee", "helmet", "armour", "backpack"],
        ya = {
            primary: "Primary",
            secondary: "Secondary",
            sidearm: "Sidearm",
            melee: "Melee",
            helmet: "Head",
            armour: "Body",
            backpack: "Backpack"
        };

    function Zt(i, e, t, a = !1) {
        return {
            id: i,
            w: e,
            h: t,
            items: [],
            smallOnly: a
        }
    }

    function Gi(i) {
        let e = C(i.id);
        return {
            w: e.w,
            h: e.h
        }
    }

    function mt(i, e, t, a, r, o) {
        if (e < 0 || t < 0 || e + a > i.w || t + r > i.h) return !1;
        for (let s of i.items) {
            if (s.item.uid === o) continue;
            let d = Gi(s.item);
            if (e < s.x + d.w && e + a > s.x && t < s.y + d.h && t + r > s.y) return !1
        }
        return !0
    }

    function Qo(i, e) {
        let t = Gi(e);
        return i.smallOnly && (t.w > 1 || t.h > 1) ? !1 : t.w <= i.w && t.h <= i.h
    }

    function Ke(i, e, t) {
        if (!Qo(i, e)) return null;
        let a = Gi(e);
        for (let r = 0; r <= i.h - a.h; r++)
            for (let o = 0; o <= i.w - a.w; o++)
                if (mt(i, o, r, a.w, a.h, t)) return {
                    x: o,
                    y: r
                };
        return null
    }

    function Fe(i, e) {
        let t = C(e.id),
            a = e.qty;
        if (t.stack > 1)
            for (let o of i.items) {
                if (a <= 0) break;
                if (o.item.id !== e.id) continue;
                let s = t.stack - o.item.qty;
                if (s <= 0) continue;
                let d = Math.min(s, a);
                o.item.qty += d, a -= d
            }
        if (a <= 0) return 0;
        let r = Ke(i, e);
        return r ? (i.items.push({
            item: {
                ...e,
                qty: a
            },
            x: r.x,
            y: r.y
        }), 0) : a
    }

    function Me(i, e) {
        let t = {
                ...e
            },
            a = C(e.id);
        if (a.stack > 1) {
            for (let r of i)
                for (let o of r.items) {
                    if (t.qty <= 0) break;
                    if (o.item.id !== e.id) continue;
                    let s = Math.min(a.stack - o.item.qty, t.qty);
                    s > 0 && (o.item.qty += s, t.qty -= s)
                }
            if (t.qty <= 0) return 0
        }
        for (let r of i) {
            if (r.smallOnly) continue;
            let o = Ke(r, t);
            if (o) return r.items.push({
                item: t,
                x: o.x,
                y: o.y
            }), 0
        }
        return t.qty
    }

    function je(i, e) {
        let t = i.items.findIndex(a => a.item.uid === e);
        return t < 0 ? null : i.items.splice(t, 1)[0]
    }

    function de(i) {
        let e = [i.pockets];
        return i.bag && e.push(i.bag), e.push(i.secure), e
    }

    function ce(i, e) {
        for (let t of de(i)) {
            let a = t.items.find(r => r.item.uid === e);
            if (a) return {
                where: "grid",
                grid: t,
                placed: a,
                item: a.item
            }
        }
        for (let t of Ce) {
            let a = i.equip[t];
            if (a && a.uid === e) return {
                where: "equip",
                slot: t,
                item: a
            }
        }
        return null
    }

    function ze(i, e) {
        let t = C(e.id);
        switch (i) {
            case "primary":
            case "secondary":
                return t.cat === "weapon";
            case "sidearm":
                return t.cat === "weapon" && !!t.weapon?.sidearm;
            case "melee":
                return t.cat === "melee";
            case "helmet":
                return t.cat === "helmet";
            case "armour":
                return t.cat === "armour";
            case "backpack":
                return t.cat === "backpack"
        }
    }

    function xa(i, e) {
        let t = C(e.id);
        return t.cat === "weapon" ? t.weapon?.sidearm && !i.equip.sidearm ? "sidearm" : i.equip.primary ? i.equip.secondary ? t.weapon?.sidearm ? "sidearm" : "primary" : "secondary" : "primary" : t.cat === "melee" ? "melee" : t.cat === "helmet" ? "helmet" : t.cat === "armour" ? "armour" : t.cat === "backpack" ? "backpack" : null
    }

    function St(i, e) {
        let t = i.bag,
            a = e ? C(e.id).bag : void 0;
        i.bag = a ? Zt("bag", a.w, a.h) : null;
        let r = [];
        if (t)
            for (let o of t.items) {
                let s = i.bag ? Fe(i.bag, o.item) : o.item.qty;
                s > 0 && r.push({
                    ...o.item,
                    qty: s
                })
            }
        return r
    }

    function Nt(i, e) {
        let t = 0;
        for (let a of de(i))
            for (let r of a.items) r.item.id === e && (t += r.item.qty);
        return t
    }

    function hr(i, e, t) {
        let a = 0,
            r = [];
        for (let o of de(i))
            for (let s of o.items) s.item.id === e && r.push({
                g: o,
                p: s
            });
        r.sort((o, s) => o.p.item.qty - s.p.item.qty);
        for (let o of r) {
            if (a >= t) break;
            let s = Math.min(t - a, o.p.item.qty);
            o.p.item.qty -= s, a += s, o.p.item.qty <= 0 && je(o.g, o.p.item.uid)
        }
        return a
    }

    function Ui(i, e) {
        for (let t of de(i)) {
            let a = t.items.find(o => o.item.uid === e);
            if (!a) continue;
            let r = {
                ...a.item,
                qty: 1
            };
            return a.item.qty -= 1, a.item.qty <= 0 && je(t, e), r
        }
        return null
    }

    function Vi(i) {
        let e = 0;
        for (let t of Ce) {
            let a = i.equip[t];
            a && (e += fi(a))
        }
        for (let t of de(i))
            for (let a of t.items) e += fi(a.item);
        return e
    }

    function ft(i, e = !0) {
        let t = 0;
        for (let a of Ce) {
            let r = i.equip[a];
            r && (t += le(r))
        }
        for (let a of de(i))
            if (!(!e && a.smallOnly))
                for (let r of a.items) t += le(r.item);
        return t
    }

    function we(i) {
        let e = [];
        for (let t of Ce) {
            let a = i.equip[t];
            a && e.push(a)
        }
        for (let t of de(i))
            for (let a of t.items) e.push(a.item);
        return e
    }

    function Ki(i) {
        return {
            equip: {},
            pockets: Zt("pockets", 4, 1),
            bag: null,
            secure: Zt("secure", i, 1, !0),
            quick: [null, null, null, null]
        }
    }
    var vi = 26;
    var j = i => ({
            ok: !0,
            msg: i
        }),
        q = i => ({
            ok: !1,
            error: i
        });

    function Re(i, e = "p") {
        return i.uidN = (i.uidN ?? 0) + 1, e + i.id.slice(0, 4) + i.uidN.toString(36)
    }

    function tt(i) {
        try {
            return new Intl.DateTimeFormat("en-CA", {
                timeZone: "Europe/London",
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }).format(new Date(i))
        } catch {
            return new Date(i).toISOString().slice(0, 10)
        }
    }

    function Jo(i) {
        let e = new Date(i),
            t = (e.getUTCDay() + 6) % 7;
        return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() - t)).toISOString().slice(0, 10)
    }
    var es = {
        sound: .8,
        music: .5,
        haptics: !0,
        quality: "auto",
        controlScale: 1,
        controlOpacity: .85,
        fireOnAim: !1,
        leftHanded: !1,
        showFps: !1,
        reduceShake: !1
    };

    function ur(i, e, t, a) {
        let r = {
            v: 1,
            id: i,
            name: e,
            created: a,
            look: t,
            level: 1,
            xp: 0,
            cash: 4000,
            credits: 0,
            tokens: 0,
            stash: Zt("stash", 10, ba[0]),
            rack: [],
            lo: Ki(1),
            status: {
                hp: 100,
                hunger: 90,
                thirst: 90,
                infection: 0,
                at: a
            },
            safehouse: {
                stash: 0,
                rack: 0,
                bench: 0,
                medical: 0,
                generator: 0,
                pantry: 0,
                water: 0,
                garden: 0,
                growroom: 0,
                security: 0,
                radio: 0
            },
            builds: [],
            crafts: [],
            plots: [],
            claims: [],
            insureNext: [],
            missions: {
                day: "",
                daily: [],
                week: "",
                weekly: []
            },
            pass: {
                xp: 0,
                premium: !1,
                claimedFree: [],
                claimedPrem: []
            },
            ent: {
                packs: [],
                protectedSlots: 0,
                stashRows: 0,
                insuranceSlots: 0,
                loadoutSlots: 0,
                characterSlots: 0,
                craftSpeed: 0,
                farmSpeed: 0,
                repBonus: 0,
                plusUntil: 0,
                boughtRows: 0,
                outfits: ["o_default"],
                skins: [],
                badges: [],
                boosterUntil: 0,
                lastPlusDaily: "",
                purchases: []
            },
            rep: {
                mags: 0,
                sarge: 0,
                doc: 0,
                bev: 0,
                threads: 0,
                fence: 0,
                vance: 0
            },
            stockBought: {
                window: 0,
                counts: {}
            },
            stats: {
                raids: 0,
                extracts: 0,
                deaths: 0,
                zkills: 0,
                pkills: 0,
                playTime: 0,
                bestLoot: 0,
                totalLoot: 0,
                bosses: 0,
                searched: 0,
                rares: 0,
                distance: 0
            },
            collection: [],
            streak: {
                last: "",
                count: 0,
                claimed: ""
            },
            tutorial: {
                done: !1,
                step: 0
            },
            settings: {
                ...es
            },
            presets: [],
            uidN: 0,
            firstPurchaseAt: 0,
            flags: {}
        };
        r.lo.equip.sidearm = Ne(Re(r), "w_ward9", 1, {
            ammo: 15,
            cond: .85
        }), r.lo.equip.melee = Ne(Re(r), "m_knife"), Fe(r.lo.pockets, Ne(Re(r), "a9", 15)), Fe(r.lo.pockets, Ne(Re(r), "med_rag", 1));
        for (let o of sr()) Fe(r.stash, Ne(Re(r), o.id, o.qty));
        return _a(r, a), r
    }

    function He(i, e) {
        return i.ent.plusUntil > e
    }

    function ji(i) {
        return Math.min(cr, 1 + i.ent.protectedSlots + (i.safehouse.security >= 2 ? 1 : 0))
    }

    function va(i, e) {
        return ba[i.safehouse.stash] + i.ent.stashRows + i.ent.boughtRows + (He(i, e) ? 4 : 0)
    }

    function Xt(i) {
        return ar[i.safehouse.rack]
    }

    function Qt(i, e) {
        return dr + i.ent.insuranceSlots + (He(i, e) ? 1 : 0)
    }

    function Jt(i, e) {
        let t = 1 / (1 + i.ent.craftSpeed);
        return He(i, e) && (t *= .5), t
    }

    function ts(i) {
        return 1 / (1 + i.ent.farmSpeed)
    }

    function Si(i, e) {
        let t = 0;
        for (let a = 0; a < gi.length; a++) i.rep[e] >= gi[a] && (t = a);
        return Math.min(3, t + i.ent.repBonus)
    }

    function Mi(i, e) {
        let t = Ue.find(a => a.id === e);
        return t.unlock ? !(t.unlock.level && i.level < t.unlock.level || t.unlock.upgrade && i.safehouse[t.unlock.upgrade.id] < t.unlock.upgrade.level) : !0
    }

    function is(i, e, t) {
        let a = Ue.find(s => s.id === e),
            r = C(t),
            o = a.buyRate + Si(i, e) * .03;
        return r.contraband && (o = a.contrabandRate ?? .15), i.safehouse.radio >= 3 && (o += .05), o
    }

    function ka(i, e, t) {
        return Math.max(1, Math.floor(le(t) * is(i, e, t.id)))
    }

    function wa(i, e) {
        let t = Ue.find(r => r.id === i),
            a = C(e);
        return a.contraband ? i === "fence" : t.buyCats.includes(a.cat)
    }

    function wi(i) {
        return Math.floor(i / 36e5)
    }

    function Wt(i, e) {
        let t = va(i, e),
            a = 0;
        for (let n of i.stash.items) a = Math.max(a, n.y + C(n.item.id).h);
        i.stash.h = Math.max(t, a), i.stash.w = 10;
        let r = ji(i),
            o = 0;
        for (let n of i.lo.secure.items) o = Math.max(o, n.x + 1);
        i.lo.secure.w = Math.max(r, o), i.lo.secure.h = 1, i.lo.secure.smallOnly = !0;
        let s = i.plots.filter(n => n.room === "garden"),
            d = i.plots.filter(n => n.room === "growroom");
        for (; s.length < rr[i.safehouse.garden];) s.push({
            room: "garden",
            seed: null,
            planted: 0,
            done: 0,
            watered: !1,
            fert: !1
        });
        for (; d.length < or[i.safehouse.growroom];) d.push({
            room: "growroom",
            seed: null,
            planted: 0,
            done: 0,
            watered: !1,
            fert: !1
        });
        i.plots = [...s, ...d]
    }

    function Ye(i, e) {
        let t = [];
        for (let o of [...i.builds]) o.done <= e && (i.safehouse[o.id] = o.level, i.builds = i.builds.filter(s => s !== o), t.push(`${bi(o.id).name} upgraded to level ${o.level}`));
        let a = Math.max(0, (e - i.status.at) / 6e4),
            r = yi[i.safehouse.medical];
        return i.status.hp = Math.min(100, i.status.hp + a * r), i.safehouse.medical >= 2 && (i.status.infection = Math.max(0, i.status.infection - a * 20)), i.status.at = e, _a(i, e), Wt(i, e), t
    }

    function it(i, e) {
        let t = i.stash.items.find(o => o.item.uid === e);
        if (t) return {
            item: t.item,
            from: "stash",
            grid: i.stash,
            remove: () => je(i.stash, e)
        };
        let a = i.rack.findIndex(o => o.uid === e);
        if (a >= 0) return {
            item: i.rack[a],
            from: "rack",
            remove: () => i.rack.splice(a, 1)
        };
        let r = ce(i.lo, e);
        return r ? r.where === "grid" ? {
            item: r.item,
            from: "kit-grid",
            grid: r.grid,
            remove: () => je(r.grid, e)
        } : {
            item: r.item,
            from: "equip",
            slot: r.slot,
            remove: () => {
                if (delete i.lo.equip[r.slot], r.slot === "backpack") {
                    let o = St(i.lo, void 0);
                    for (let s of o) Fe(i.stash, s)
                }
            }
        } : null
    }

    function as(i, e) {
        return e === "pockets" ? i.lo.pockets : e === "bag" ? i.lo.bag : i.lo.secure
    }

    function Mt(i, e, t) {
        let a = it(i, e);
        if (!a) return q("Item not found");
        let r = a.item,
            o = C(r.id);
        if (t.kind === "stash" || t.kind === "grid") {
            let s = t.kind === "stash" ? i.stash : as(i, t.grid);
            if (!s) return q("No backpack equipped");
            if (s.smallOnly && (o.w > 1 || o.h > 1)) return q("Protected slots only hold 1\xD71 items");
            let d = s.items.find(n => n.item.uid !== e && n.item.id === r.id && t.x >= n.x && t.x < n.x + o.w && t.y >= n.y && t.y < n.y + o.h);
            if (d && o.stack > 1) {
                let n = Math.min(o.stack - d.item.qty, r.qty);
                return n <= 0 ? q("Stack is full") : (d.item.qty += n, r.qty -= n, r.qty <= 0 && a.remove(), j())
            }
            if (!mt(s, t.x, t.y, o.w, o.h, e)) return q("Does not fit there");
            if (a.grid === s) {
                let n = s.items.find(l => l.item.uid === e);
                return n.x = t.x, n.y = t.y, j()
            }
            return a.from === "equip" && a.slot === "backpack" && s === i.lo.bag ? q("A bag cannot go inside itself") : (a.remove(), s.items.push({
                item: r,
                x: t.x,
                y: t.y
            }), ki(i), j())
        }
        if (t.kind === "equip") {
            if (!ze(t.slot, r)) return q(`Cannot equip that as ${t.slot}`);
            if (a.from === "equip" && a.slot === t.slot) return j();
            let s = i.lo.equip[t.slot],
                d = a.from === "equip" ? a.slot : null;
            if (a.from === "equip" ? delete i.lo.equip[d] : a.remove(), i.lo.equip[t.slot] = r, t.slot === "backpack") {
                let n = St(i.lo, r);
                for (let l of n) Fe(i.stash, l)
            }
            if (s) {
                if (d && ze(d, s)) i.lo.equip[d] = s;
                else if (Fe(i.stash, s) > 0 && Me(de(i.lo), s) > 0) return q("No room for the swapped item")
            }
            return d === "backpack" && !i.lo.equip.backpack && St(i.lo, void 0), ki(i), j()
        }
        if (t.kind === "rack") return o.weapon ? i.rack.length >= Xt(i) ? q(Xt(i) ? "Weapon rack is full" : "Build a Weapon Rack first") : (a.remove(), i.rack.push(r), ki(i), j()) : q("Only firearms go on the rack");
        if (t.kind === "auto-stash") {
            if (a.from === "stash") return j();
            let s = Ke(i.stash, r),
                d = o.stack > 1 && i.stash.items.some(l => l.item.id === r.id && l.item.qty < o.stack);
            if (!s && !d) return q("Stash is full");
            a.remove();
            let n = Fe(i.stash, r);
            return n > 0 && Me(de(i.lo), {
                ...r,
                qty: n
            }), ki(i), j()
        }
        if (t.kind === "auto-kit") {
            let s = o.cat === "weapon" ? o.weapon?.sidearm ? ["sidearm", "primary", "secondary"] : ["primary", "secondary"] : Ce.filter(d => ze(d, r));
            for (let d of s)
                if (!i.lo.equip[d] && ze(d, r)) return Mt(i, e, {
                    kind: "equip",
                    slot: d
                });
            if (s.length && o.cat !== "weapon") return Mt(i, e, {
                kind: "equip",
                slot: s[0]
            });
            for (let d of [i.lo.pockets, i.lo.bag]) {
                if (!d) continue;
                let n = Ke(d, r);
                if (n) return Mt(i, e, {
                    kind: "grid",
                    grid: d.id,
                    x: n.x,
                    y: n.y
                })
            }
            return q("No room in your kit")
        }
        return q("Unknown move")
    }

    function ki(i) {
        i.lo.quick = i.lo.quick.map(e => e && ce(i.lo, e) ? e : null)
    }

    function pr(i, e, t) {
        let a = it(i, e);
        if (!a || !a.grid) return q("Cannot split that");
        if (t = Math.floor(t), t <= 0 || t >= a.item.qty) return q("Invalid amount");
        let r = {
                ...a.item,
                uid: Re(i, "s"),
                qty: t
            },
            o = Ke(a.grid, r),
            s = o ?? Ke(i.stash, r);
        if (!s) return q("No room to split");
        let d = o ? a.grid : i.stash;
        return a.item.qty -= t, d.items.push({
            item: r,
            x: s.x,
            y: s.y
        }), j()
    }

    function mr(i, e) {
        let t = 0;
        for (let a of [i.lo.pockets, i.lo.bag])
            if (a)
                for (let r of [...a.items])(Ke(i.stash, r.item) || i.stash.items.some(o => o.item.id === r.item.id && o.item.qty < C(o.item.id).stack)) && Mt(i, r.item.uid, {
                    kind: "auto-stash"
                }).ok && t++;
        if (e)
            for (let a of ["primary", "secondary", "helmet", "armour"]) {
                let r = i.lo.equip[a];
                r && Mt(i, r.uid, {
                    kind: "auto-stash"
                }).ok && t++
            }
        return t ? j(`Moved ${t} item${t===1?"":"s"} to the stash`) : q("Nothing to move")
    }

    function Yi(i, e) {
        let t = 0;
        for (let a of i.stash.items) a.item.id === e && (t += a.item.qty);
        return t
    }

    function Zi(i, e) {
        return Yi(i, e)
    }

    function Sa(i, e, t) {
        if (Yi(i, e) < t) return !1;
        let a = t;
        for (let r of [...i.stash.items].sort((o, s) => o.item.qty - s.item.qty)) {
            if (r.item.id !== e || a <= 0) continue;
            let o = Math.min(a, r.item.qty);
            r.item.qty -= o, a -= o, r.item.qty <= 0 && je(i.stash, r.item.uid)
        }
        return !0
    }

    function ei(i, e, t) {
        let a = Fe(i.stash, e);
        if (a > 0) {
            let r = i.claims.find(s => s.ready === 0),
                o = {
                    ...e,
                    qty: a
                };
            r ? r.items.push(o) : i.claims.push({
                items: [o],
                ready: 0
            })
        }
        i.collection.includes(e.id) || i.collection.push(e.id)
    }

    function Ma(i, e, t, a) {
        let o = Ue.find(s => s.id === e).stock.find(s => s.id === t);
        return o ? o.limit ? i.stockBought.window !== wi(a) ? o.limit : Math.max(0, o.limit - (i.stockBought.counts[e + ":" + t] ?? 0)) : 99 : 0
    }

    function fr(i, e, t, a) {
        let r = Ue.find(l => l.id === e);
        if (!r) return q("Unknown trader");
        if (!Mi(i, e)) return q("Trader locked");
        let o = r.stock.find(l => l.id === t);
        if (!o) return q("Not sold here");
        if (Si(i, e) < o.rep) return q(`Needs ${r.name} reputation level ${o.rep+1}`);
        if (Ma(i, e, t, a) <= 0) return q("Sold out until the next rotation");
        if (o.tokens) {
            if (i.tokens < o.tokens) return q("Not enough Black-Market Tokens")
        } else if (i.cash < ut(o)) return q("Not enough cash");
        let s = Ne(Re(i, "b"), t, o.qty ?? 1);
        C(t).weapon && (s.ammo = 0);
        let d = Ke(i.stash, s),
            n = C(t).stack > 1 && i.stash.items.some(l => l.item.id === t && l.item.qty + s.qty <= C(t).stack);
        return !d && !n ? q("Stash is full") : (o.tokens ? i.tokens -= o.tokens : (i.cash -= ut(o), i.rep[e] += ut(o)), i.stockBought.window !== wi(a) && (i.stockBought = {
            window: wi(a),
            counts: {}
        }), o.limit && (i.stockBought.counts[e + ":" + t] = (i.stockBought.counts[e + ":" + t] ?? 0) + 1), ei(i, s, a), j(`Bought ${C(t).name}`))
    }

    function gr(i, e, t) {
        if (!Mi(i, e)) return q("Trader locked");
        let a = it(i, t);
        if (!a) return q("Item not found");
        if (!wa(e, a.item.id)) return q(`${Ue.find(o=>o.id===e).name} does not buy that`);
        let r = ka(i, e, a.item);
        return a.remove(), ki(i), i.cash += r, i.rep[e] += r, j(`Sold for ${r.toLocaleString("en-GB")}`)
    }

    function Ta(i, e) {
        let t = bi(e),
            a = i.safehouse[e];
        if (a >= t.levels.length) return q("Fully upgraded");
        if (i.builds.some(o => o.id === e)) return q("Already under construction");
        if (i.builds.length >= 2) return q("Two builds at once is the limit");
        let r = t.levels[a];
        if (r.playerLevel && i.level < r.playerLevel) return q(`Requires survivor level ${r.playerLevel}`);
        for (let o of r.requires ?? [])
            if (i.safehouse[o.id] < o.level) return q(`Requires ${bi(o.id).name} level ${o.level}`);
        if (i.cash < r.cash) return q("Not enough cash");
        for (let o of r.items)
            if (Yi(i, o.id) < o.qty) return q(`Needs ${o.qty} \xD7 ${C(o.id).name} in your stash`);
        return j()
    }

    function br(i, e, t) {
        let a = Ta(i, e);
        if (!a.ok) return a;
        let r = bi(e),
            o = r.levels[i.safehouse[e]];
        i.cash -= o.cash;
        for (let d of o.items) Sa(i, d.id, d.qty);
        let s = o.minutes * 6e4 * Jt(i, t);
        return s <= 0 ? (i.safehouse[e] += 1, Wt(i, t), j(`${r.name} upgraded to level ${i.safehouse[e]}`)) : (i.builds.push({
            id: e,
            level: i.safehouse[e] + 1,
            done: t + s
        }), j(`${r.name} construction started`))
    }

    function Ti(i) {
        return Math.max(1, Math.ceil(i / 6e4 * ke.finishPerMinute))
    }

    function yr(i, e, t) {
        let a = i.builds.find(o => o.id === e);
        if (!a) return q("Nothing building");
        let r = Ti(a.done - t);
        return i.credits < r ? q("Not enough DOVY Credits") : (i.credits -= r, a.done = t, Ye(i, t), j("Construction finished"))
    }

    function rs(i) {
        return i.safehouse.bench >= 2 ? 3 : 2
    }

    function Ca(i, e) {
        let t = Ht.find(a => a.id === e);
        if (!t) return q("Unknown recipe");
        if (i.safehouse.bench < t.bench) return q(`Requires Workbench level ${t.bench}`);
        if (t.growroom && i.safehouse.growroom < t.growroom) return q(`Requires Grow Room level ${t.growroom}`);
        if (i.crafts.length >= rs(i)) return q("Crafting queue is full");
        for (let a of t.inp)
            if (Yi(i, a.id) < a.qty) return q(`Needs ${a.qty} \xD7 ${C(a.id).name}`);
        return j()
    }

    function xr(i, e, t) {
        let a = Ca(i, e);
        if (!a.ok) return a;
        let r = Ht.find(o => o.id === e);
        for (let o of r.inp) Sa(i, o.id, o.qty);
        return i.crafts.push({
            recipe: e,
            done: t + r.seconds * 1e3 * Jt(i, t)
        }), j(`Crafting ${C(r.out.id).name}`)
    }

    function Ra(i, e, t) {
        let a = i.crafts[e];
        if (!a) return q("Nothing there");
        if (a.done > t) return q("Not ready yet");
        let r = Ht.find(s => s.id === a.recipe),
            o = Ne(Re(i, "c"), r.out.id, r.out.qty);
        return i.crafts.splice(e, 1), ei(i, o, t), j(`Collected ${r.out.qty>1?r.out.qty+" \xD7 ":""}${C(r.out.id).name}`)
    }

    function vr(i, e, t) {
        let a = i.crafts[e];
        if (!a) return q("Nothing there");
        let r = Ti(a.done - t);
        return i.credits < r ? q("Not enough DOVY Credits") : (i.credits -= r, a.done = t, Ra(i, e, t))
    }

    function kr(i, e, t, a) {
        let r = i.plots[e];
        if (!r) return q("No such plot");
        if (r.seed) return q("Plot is in use");
        let o = it(i, t);
        if (!o) return q("Seeds not found");
        let s = Dt.find(d => d.seed === o.item.id);
        return s ? s.room !== r.room ? q(s.room === "growroom" ? "Contraband crops need the grow room" : "Plant that in the garden") : (o.item.qty -= 1, o.item.qty <= 0 && o.remove(), r.seed = s.seed, r.planted = a, r.watered = !1, r.fert = !1, r.done = 0, j(`Planted ${C(s.seed).name}. Water it to start growth.`)) : q("Those are not seeds")
    }

    function wr(i, e, t) {
        let a = i.plots[e];
        if (!a || !a.seed) return q("Nothing planted");
        if (a.watered) return q("Already watered");
        let r = Dt.find(o => o.seed === a.seed);
        return a.watered = !0, a.done = t + r.minutes * 6e4 * ts(i), j("Watered. Growing now.")
    }

    function Sr(i, e, t) {
        let a = i.plots[e];
        return !a || !a.seed || !a.watered ? q("Water the plot first") : a.fert ? q("Already fertilised") : Sa(i, "farm_fert", 1) ? (a.fert = !0, a.done = t + Math.max(0, a.done - t) / 2, j("Growth time halved")) : q("No fertiliser in your stash")
    }

    function Mr(i, e, t) {
        let a = i.plots[e];
        if (!a || !a.seed) return q("Nothing planted");
        if (!a.watered || a.done > t) return q("Not ready yet");
        let r = Dt.find(d => d.seed === a.seed),
            s = new et(jt(i.id + e + a.planted)).int(r.yield[0], r.yield[1]);
        return ei(i, Ne(Re(i, "h"), r.out, s), t), a.seed = null, a.watered = !1, a.fert = !1, j(`Harvested ${s} \xD7 ${C(r.out).name}`)
    }

    function ti(i, e) {
        let t = Math.round(le(e) * nr);
        return i.safehouse.security >= 3 ? Math.round(t * .75) : t
    }

    function Tr(i, e, t) {
        let a = i.insureNext.indexOf(e);
        if (a >= 0) return i.insureNext.splice(a, 1), j("Insurance removed");
        let r = ce(i.lo, e);
        if (!r) return q("Only kit you are taking into the raid can be insured");
        let o = C(r.item.id);
        return o.weapon || o.armour || o.cat === "backpack" || o.melee ? r.grid?.smallOnly ? q("Protected items are already safe") : i.insureNext.length >= Qt(i, t) ? q(`You can insure ${Qt(i,t)} items per raid`) : (i.insureNext.push(e), j(`Insured for ${ti(i,r.item).toLocaleString("en-GB")} cash on deployment`)) : q("Only weapons, armour and bags can be insured")
    }

    function Cr(i, e) {
        if (Ye(i, e), i.status.hp < 20) return {
            ok: !1,
            error: "You are too injured to deploy. Heal at the medical station or use medical supplies."
        };
        i.insureNext = i.insureNext.filter(s => ce(i.lo, s));
        let t = 0;
        for (let s of i.insureNext) t += ti(i, ce(i.lo, s).item);
        if (t > i.cash) return {
            ok: !1,
            error: `Insurance costs ${t.toLocaleString("en-GB")} cash. Remove some insured items or sell loot.`
        };
        i.cash -= t;
        let a = Math.max(i.status.hunger, Yt[i.safehouse.pantry]),
            r = Math.max(i.status.thirst, Yt[i.safehouse.water]);
        return {
            ok: !0,
            plan: {
                loadout: JSON.parse(JSON.stringify(i.lo)),
                status: {
                    hp: i.status.hp,
                    hunger: a,
                    thirst: r,
                    infection: i.status.infection
                },
                insured: [...i.insureNext],
                insuranceCost: t
            }
        }
    }

    function Pa(i, e, t, a, r, o) {
        Ye(i, r);
        let s = i.stats;
        s.raids++, s.zkills += e.stats.zkills, s.pkills += e.stats.pkills, s.playTime += e.time, s.bosses += e.stats.bosses, s.searched += e.stats.searched, s.distance += e.stats.distance, s.rares += e.stats.rares.length;
        for (let k of e.stats.rares) i.collection.includes(k) || i.collection.push(k);
        let d = 0,
            n = 0,
            l = 0;
        if (e.outcome === "extracted") {
            s.extracts++, d = Math.max(0, ft(e.loadout) - o), s.totalLoot += d, s.bestLoot = Math.max(s.bestLoot, ft(e.loadout));
            for (let k of we(e.loadout)) i.collection.includes(k.id) || i.collection.push(k.id)
        } else {
            s.deaths++;
            for (let M of e.lost) n += le(M);
            let k = e.lost.filter(M => t.includes(M.uid) && !a.has(M.uid));
            if (k.length) {
                let M = lr;
                i.safehouse.security >= 1 && (M *= .75), He(i, r) && (M *= .5), i.claims.push({
                    items: k.map(R => ({
                        ...R,
                        cond: Math.max(.4, (R.cond ?? 1) * .9),
                        ammo: 0
                    })),
                    ready: r + M * 6e4
                }), l = k.length
            }
        }
        i.lo = e.loadout, i.lo.secure || (i.lo.secure = Zt("secure", ji(i), 1, !0)), i.lo.equip.backpack && !i.lo.bag && St(i.lo, i.lo.equip.backpack), i.status = {
            ...e.status,
            at: r
        }, i.insureNext = [];
        let c = e.stats.xp;
        He(i, r) && (c = Math.round(c * 1.1)), i.ent.boosterUntil > r && (c = Math.round(c * 1.25));
        let u = [],
            m = [];
        for (i.xp += c; i.level < ga && i.xp >= zt(i.level);) {
            i.xp -= zt(i.level), i.level++, u.push(i.level);
            let k = 1e3 + i.level * 250;
            i.cash += k, m.push(`Level ${i.level}: ${k.toLocaleString("en-GB")} cash`), i.level % 5 === 0 && (i.tokens += 1, m.push(`Level ${i.level}: 1 Black-Market Token`))
        }
        let p = {
                zkills: e.stats.zkills,
                searched: e.stats.searched,
                extracts: e.outcome === "extracted" ? 1 : 0,
                bigExtract: e.outcome === "extracted" && ft(e.loadout) >= 8e3 ? 1 : 0,
                rares: e.stats.rares.length,
                km: Math.floor(e.stats.distance / 1e3),
                bosses: e.stats.bosses,
                ...e.stats.missionsHit
            },
            f = [];
        _a(i, r);
        for (let k of [...i.missions.daily, ...i.missions.weekly]) {
            let M = [...kt, ...wt].find(w => w.id === k.id);
            if (!M || k.claimed) continue;
            let R = k.prog;
            k.prog = Math.min(M.target, k.prog + (p[M.key] ?? 0)), R < M.target && k.prog >= M.target && f.push(M.text)
        }
        let b = Ft(i);
        i.pass.xp += c;
        let x = Ft(i) - b;
        return {
            outcome: e.outcome,
            xp: c,
            levelUps: u,
            lootValue: d,
            lostValue: n,
            insuredBack: l,
            missionsDone: f,
            passLevels: x,
            levelRewards: m
        }
    }

    function Rr(i, e, t) {
        let a = i.claims[e];
        if (!a) return q("Nothing to claim");
        if (a.ready > t) return q("Not back yet");
        let r = [];
        for (let o of a.items) Fe(i.stash, o) > 0 && r.push(o);
        return r.length ? (a.items = r, q("Stash is full. Some items are still waiting.")) : (i.claims.splice(e, 1), j("Items returned to your stash"))
    }

    function _a(i, e) {
        let t = tt(e),
            a = Jo(e);
        if (i.missions.day !== t) {
            let o = new et(jt(i.id + t)).shuffle([...kt]);
            i.missions.day = t, i.missions.daily = o.slice(0, 3).map(s => ({
                id: s.id,
                prog: 0,
                claimed: !1
            }))
        }
        if (i.missions.week !== a) {
            let o = new et(jt(i.id + a)).shuffle([...wt]);
            i.missions.week = a, i.missions.weekly = o.slice(0, 3).map(s => ({
                id: s.id,
                prog: 0,
                claimed: !1
            }))
        }
    }

    function Pr(i, e) {
        let t = [...i.missions.daily, ...i.missions.weekly].find(r => r.id === e),
            a = [...kt, ...wt].find(r => r.id === e);
        if (!t || !a) return q("Unknown mission");
        if (t.claimed) return q("Already claimed");
        if (t.prog < a.target) return q("Not complete");
        for (t.claimed = !0, i.cash += a.cash, i.xp += a.xp, i.pass.xp += a.xp, a.tokens && (i.tokens += a.tokens); i.level < ga && i.xp >= zt(i.level);) i.xp -= zt(i.level), i.level++, i.cash += 1e3 + i.level * 250;
        return j(`+${a.cash.toLocaleString("en-GB")} cash, +${a.xp} XP${a.tokens?`, +${a.tokens} token${a.tokens>1?"s":""}`:""}`)
    }

    function Bt(i, e) {
        let t = tt(e),
            a = tt(e - 864e5),
            r = i.streak.last === a || i.streak.last === t;
        return {
            day: ((i.streak.last === t ? i.streak.count : r ? i.streak.count + 1 : 1) - 1) % 7 + 1,
            canClaim: i.streak.claimed !== t
        }
    }
    var Ia = [{
        cash: 1200,
        label: "1,200 cash"
    }, {
        item: "med_firstaid",
        label: "First Aid Kit"
    }, {
        cash: 2200,
        label: "2,200 cash"
    }, {
        item: "a9",
        qty: 60,
        label: "60 \xD7 9mm"
    }, {
        cash: 4000,
        label: "4,000 cash"
    }, {
        item: "comp_gunparts",
        label: "Gun Parts"
    }, {
        tokens: 1,
        credits: 30,
        label: "1 token + 30 credits"
    }];

    function _r(i, e) {
        let t = tt(e);
        if (i.streak.claimed === t) return q("Already claimed today");
        let a = Bt(i, e),
            r = tt(e - 864e5);
        i.streak.count = i.streak.last === r ? i.streak.count + 1 : 1, i.streak.last = t, i.streak.claimed = t;
        let o = Ia[a.day - 1];
        return o.cash && (i.cash += o.cash), o.tokens && (i.tokens += o.tokens), o.credits && (i.credits += o.credits), o.item && ei(i, Ne(Re(i, "d"), o.item, o.qty ?? 1), e), j(`Day ${a.day} reward: ${o.label}`)
    }

    function Ir(i, e) {
        if (!He(i, e)) return q("DOVY+ is not active");
        let t = tt(e);
        return i.ent.lastPlusDaily === t ? q("Already collected today") : (i.ent.lastPlusDaily = t, i.credits += ve.dailyCredits, j(`+${ve.dailyCredits} DOVY Credits`))
    }

    function Ft(i) {
        return Math.min(vt, Math.floor(i.pass.xp / pt))
    }

    function Ea(i, e, t, a) {
        if (e < 1 || e > vt) return q("Invalid level");
        if (Ft(i) < e) return q("Level not reached");
        if (t === "prem" && !i.pass.premium) return q("Premium pass required");
        let r = t === "free" ? i.pass.claimedFree : i.pass.claimedPrem;
        if (r.includes(e)) return q("Already claimed");
        let o = Bi[e - 1][t];
        return r.push(e), o.cash && (i.cash += o.cash), o.credits && (i.credits += o.credits), o.tokens && (i.tokens += o.tokens), o.item && ei(i, Ne(Re(i, "r"), o.item.id, o.item.qty), a), o.outfit && !i.ent.outfits.includes(o.outfit) && i.ent.outfits.push(o.outfit), o.skin && !i.ent.skins.includes(o.skin) && i.ent.skins.push(o.skin), o.booster && (i.ent.boosterUntil = Math.max(i.ent.boosterUntil, a) + o.booster * 36e5), j(o.label)
    }

    function Er(i) {
        return i.pass.premium ? q("Already owned") : i.credits < ke.passPremium ? q(`Needs ${ke.passPremium} DOVY Credits`) : (i.credits -= ke.passPremium, i.pass.premium = !0, j("Premium season pass unlocked"))
    }

    function Xi(i, e) {
        return i.ent.boughtRows >= 10 ? q("Maximum stash expansion reached") : i.credits < ke.stashRows2 ? q("Not enough DOVY Credits") : (i.credits -= ke.stashRows2, i.ent.boughtRows += 2, Wt(i, e), j("+2 stash rows"))
    }

    function Lr(i) {
        return i.ent.insuranceSlots >= 4 ? q("Maximum insurance slots reached") : i.credits < ke.insuranceSlot ? q("Not enough DOVY Credits") : (i.credits -= ke.insuranceSlot, i.ent.insuranceSlots += 1, j("+1 insurance slot"))
    }

    function Ci(i, e, t) {
        if (e === "outfit") {
            let r = ye.find(o => o.id === t);
            if (!r) return q("Unknown outfit");
            if (i.ent.outfits.includes(t)) return q("Already owned");
            if (r.cash) {
                if (i.cash < r.cash) return q("Not enough cash");
                i.cash -= r.cash
            } else if (r.credits) {
                if (i.credits < r.credits) return q("Not enough DOVY Credits");
                i.credits -= r.credits
            } else return q("Not for sale");
            return i.ent.outfits.push(t), j(`${r.name} unlocked`)
        }
        let a = Ve.find(r => r.id === t);
        return !a || !a.credits ? q("Not for sale") : i.ent.skins.includes(t) ? q("Already owned") : i.credits < a.credits ? q("Not enough DOVY Credits") : (i.credits -= a.credits, i.ent.skins.push(t), j(`${a.name} unlocked`))
    }

    function os(i, e, t) {
        e.cash && (i.cash += e.cash), e.credits && (i.credits += e.credits), e.tokens && (i.tokens += e.tokens), e.protectedSlots && (i.ent.protectedSlots += e.protectedSlots), e.stashRows && (i.ent.stashRows += e.stashRows), e.insuranceSlots && (i.ent.insuranceSlots += e.insuranceSlots), e.loadoutSlots && (i.ent.loadoutSlots += e.loadoutSlots), e.characterSlots && (i.ent.characterSlots += e.characterSlots), e.craftSpeed && (i.ent.craftSpeed += e.craftSpeed), e.farmSpeed && (i.ent.farmSpeed += e.farmSpeed), e.repBoost && (i.ent.repBonus += e.repBoost);
        for (let a of e.outfits ?? []) i.ent.outfits.includes(a) || i.ent.outfits.push(a);
        for (let a of e.skins ?? []) i.ent.skins.includes(a) || i.ent.skins.push(a);
        e.badge && !i.ent.badges.includes(e.badge) && i.ent.badges.push(e.badge), Wt(i, t);
        for (let a of e.items ?? []) {
            let r = Ne(Re(i, "g"), a.id, a.qty);
            a.att && (r.att = {
                ...a.att
            }), ei(i, r, t)
        }
    }

    function Ar(i, e, t) {
        let a = Fi.find(o => o.id === e);
        if (a) return a.oneTime && i.ent.packs.includes(a.id) ? q("Already purchased") : (i.ent.packs.push(a.id), os(i, a.grant, t), i.ent.purchases.push({
            id: a.id,
            at: t,
            price: a.price
        }), i.firstPurchaseAt || (i.firstPurchaseAt = t), j(`${a.name} delivered`));
        let r = Wi.find(o => o.id === e);
        return r ? (i.credits += r.credits + r.bonus, i.ent.purchases.push({
            id: r.id,
            at: t,
            price: r.price
        }), i.firstPurchaseAt || (i.firstPurchaseAt = t), j(`${(r.credits+r.bonus).toLocaleString("en-GB")} DOVY Credits added`)) : e === ve.id ? (i.ent.plusUntil = Math.max(i.ent.plusUntil, t) + 30 * 864e5, i.ent.outfits.includes("o_plus") || i.ent.outfits.push("o_plus"), i.ent.purchases.push({
            id: ve.id,
            at: t,
            price: ve.price
        }), i.firstPurchaseAt || (i.firstPurchaseAt = t), Wt(i, t), j("DOVY+ active for 30 days")) : q("Unknown product")
    }

    function La(i, e) {
        return 1 + i.ent.loadoutSlots + (He(i, e) ? 1 : 0)
    }

    function Or(i, e, t) {
        if (e >= La(i, t)) return q("Loadout slot locked");
        let a = {};
        for (let r of Ce) i.lo.equip[r] && (a[r] = i.lo.equip[r].id);
        return i.presets[e] = {
            name: `Loadout ${e+1}`,
            items: a
        }, j("Loadout saved")
    }

    function qr(i, e) {
        let t = i.presets[e];
        if (!t) return q("Empty loadout slot");
        let a = 0,
            r = [];
        for (let o of Ce) {
            let s = t.items[o];
            if (!s || i.lo.equip[o]?.id === s) continue;
            let d = i.stash.items.find(c => c.item.id === s) ?? null,
                n = i.rack.find(c => c.id === s) ?? null,
                l = d?.item.uid ?? n?.uid;
            if (!l) {
                r.push(C(s).name);
                continue
            }
            Mt(i, l, {
                kind: "equip",
                slot: o
            }).ok && a++
        }
        return r.length ? j(`Equipped ${a}. Missing: ${r.join(", ")}`) : j(`Equipped ${a} item${a===1?"":"s"}`)
    }

    function $r(i, e) {
        return [...i.stash.items.map(a => a.item), ...i.rack, ...we(i.lo)].sort((a, r) => Ge[C(r.id).rarity] - Ge[C(a.id).rarity] || le(r) - le(a)).slice(0, e)
    }

    function zr(i) {
        if (!i || i.v !== 1 || !i.stash || !i.lo) return !1;
        for (let e of i.stash.items)
            if (!ht[e.item.id]) return !1;
        return !0
    }
    var y = 32,
        U = 160,
        X = 160,
        Gt = U * y,
        Ut = X * y;
    var be = 1,
        Ie = 2,
        at = 4,
        Oe = [];
    Oe[0] = 0;
    Oe[1] = be | Ie | at;
    Oe[2] = be | Ie | at;
    Oe[3] = be | Ie | at;
    Oe[4] = be | Ie | at;
    Oe[5] = be;
    Oe[6] = be;
    Oe[7] = be;
    Oe[8] = be;
    Oe[9] = be | Ie;
    Oe[10] = be;
    Oe[11] = be | Ie | at;
    Oe[12] = be;
    Oe[13] = 0;
    var Y = (i, e) => e * U + i,
        Dr = [{
            axis: "v",
            at: 80,
            from: 0,
            to: X,
            skip: [
                [76, 83]
            ]
        }, {
            axis: "h",
            at: 80,
            from: 6,
            to: 154,
            skip: [
                [76, 83]
            ]
        }, {
            axis: "h",
            at: 31,
            from: 83,
            to: 112
        }, {
            axis: "v",
            at: 130,
            from: 83,
            to: 96
        }],
        Aa = class {
            constructor(e) {
                v(this, "m");
                v(this, "rng");
                this.rng = new et(e);
                let t = U * X;
                this.m = {
                    seed: e,
                    ground: new Uint8Array(t),
                    solid: new Uint8Array(t),
                    flags: new Uint8Array(t),
                    doorAt: new Int16Array(t).fill(-1),
                    roofOf: new Int16Array(t).fill(-1),
                    doors: [],
                    buildings: [],
                    props: [],
                    containers: [],
                    trees: [],
                    extracts: [],
                    zones: [],
                    lights: [],
                    spawns: [],
                    decals: []
                }
            }
            inb(e, t) {
                return e >= 0 && t >= 0 && e < U && t < X
            }
            g(e, t, a) {
                this.inb(e, t) && (this.m.ground[Y(e, t)] = a)
            }
            gr(e, t, a, r, o) {
                for (let s = t; s < t + r; s++)
                    for (let d = e; d < e + a; d++) this.g(d, s, o)
            }
            s(e, t, a) {
                this.inb(e, t) && (this.m.solid[Y(e, t)] = a)
            }
            sr(e, t, a, r, o) {
                for (let s = t; s < t + r; s++)
                    for (let d = e; d < e + a; d++) this.s(d, s, o)
            }
            so(e, t, a, r, o) {
                for (let s = e; s < e + a; s++) this.s(s, t, o), this.s(s, t + r - 1, o);
                for (let s = t; s < t + r; s++) this.s(e, s, o), this.s(e + a - 1, s, o)
            }
            solidAt(e, t) {
                return this.inb(e, t) ? this.m.solid[Y(e, t)] : 11
            }
            door(e, t, a, r, o) {
                let s = {
                    id: this.m.doors.length,
                    tx: e,
                    ty: t,
                    vertical: a,
                    locked: o,
                    open: !1,
                    openT: 0,
                    hp: 100,
                    building: r
                };
                return this.m.doors.push(s), this.s(e, t, 13), this.m.doorAt[Y(e, t)] = s.id, s
            }
            prop(e, t, a, r, o, s = !0, d = {}) {
                let n = {
                    id: this.m.props.length,
                    kind: e,
                    x: t,
                    y: a,
                    w: r,
                    h: o,
                    blocks: s,
                    v: this.rng.int(0, 3),
                    ...d
                };
                return this.m.props.push(n), n
            }
            cont(e, t, a, r, o, s, d, n, l = {}) {
                let c = {
                    id: this.m.containers.length,
                    kind: e,
                    label: t,
                    x: a,
                    y: r,
                    w: o,
                    h: s,
                    table: d,
                    count: n,
                    search: 1.6,
                    blocks: !0,
                    building: -1,
                    zone: "wilds",
                    rarityHint: 0,
                    ...l
                };
                return this.m.containers.push(c), c
            }
            tree(e, t, a) {
                this.m.trees.push({
                    x: e,
                    y: t,
                    r: a ?? this.rng.range(34, 58),
                    trunk: 9,
                    v: this.rng.int(0, 4),
                    hp: 4,
                    cut: !1
                })
            }
            building(e) {
                let t = {
                    id: this.m.buildings.length,
                    name: e.name,
                    kind: e.kind,
                    x: e.x,
                    y: e.y,
                    w: e.w,
                    h: e.h,
                    roof: e.roof,
                    roofStyle: e.roofStyle ?? "pitched",
                    zone: e.zone
                };
                this.m.buildings.push(t), this.gr(e.x, e.y, e.w, e.h, e.floor), this.so(e.x, e.y, e.w, e.h, e.wall);
                for (let r = e.y; r < e.y + e.h; r++)
                    for (let o = e.x; o < e.x + e.w; o++) this.m.roofOf[Y(o, r)] = t.id;
                let a = e.windows === void 0 ? 5 : e.windows;
                if (a) {
                    for (let r = e.x + 2; r < e.x + e.w - 2; r += 3) this.s(r, e.y, a), this.s(r, e.y + e.h - 1, a);
                    for (let r = e.y + 2; r < e.y + e.h - 2; r += 3) this.s(e.x, r, a), this.s(e.x + e.w - 1, r, a)
                }
                for (let r of e.doors) {
                    let o = r.wide ?? 2;
                    for (let s = 0; s < o; s++) r.side === "n" && this.door(e.x + r.at + s, e.y, !1, t.id, r.locked), r.side === "s" && this.door(e.x + r.at + s, e.y + e.h - 1, !1, t.id, r.locked), r.side === "w" && this.door(e.x, e.y + r.at + s, !0, t.id, r.locked), r.side === "e" && this.door(e.x + e.w - 1, e.y + r.at + s, !0, t.id, r.locked);
                    for (let s = -1; s <= o; s++) {
                        let d = r.side === "n" || r.side === "s" ? e.x + r.at + s : r.side === "w" ? e.x : e.x + e.w - 1,
                            n = r.side === "w" || r.side === "e" ? e.y + r.at + s : r.side === "n" ? e.y : e.y + e.h - 1;
                        this.solidAt(d, n) === a && this.s(d, n, e.wall)
                    }
                }
                return t
            }
            innerWall(e, t, a, r, o, s, d, n = !1, l) {
                if (e === a)
                    for (let c = t; c <= r; c++) c === s ? n ? this.door(e, c, !0, d.id, l) : this.s(e, c, 0) : this.s(e, c, o);
                else
                    for (let c = e; c <= a; c++) c === s ? n ? this.door(c, t, !1, d.id, l) : this.s(c, t, 0) : this.s(c, t, o)
            }
            tcont(e, t, a, r, o, s, d, n, l, c = {}) {
                return this.cont(t, a, r * y + 3, o * y + 3, s * y - 6, d * y - 6, n, l, {
                    building: e ? e.id : -1,
                    zone: e ? e.zone : c.zone ?? "wilds",
                    ...c
                })
            }
            tprop(e, t, a, r, o, s = !0, d = {}) {
                return this.prop(e, t * y + 2, a * y + 2, r * y - 4, o * y - 4, s, d)
            }
            house(e, t, a, r, o, s, d, n, l = !1) {
                let c = l ? r - 3 : 2,
                    u = this.building({
                        name: e,
                        kind: "house",
                        x: t,
                        y: a,
                        w: r,
                        h: o,
                        wall: 1,
                        floor: 4,
                        roof: n,
                        zone: d,
                        doors: [{
                            side: s,
                            at: c
                        }]
                    }),
                    m = l ? t + 3 : t + r - 4,
                    p = s === "s" ? a + 2 : a + o - 3;
                this.innerWall(m, a + 1, m, a + o - 2, 3, p, u, !0);
                let f = l ? t + 1 : m + 1,
                    b = l ? m - t - 1 : t + r - 2 - m;
                this.gr(f, a + 1, b, o - 2, 13);
                let x = s === "s" ? a + 1 : a + o - 2;
                this.tcont(u, "counter", "Kitchen Cupboard", f, x, Math.min(2, b), 1, "kitchen", [1, 3]), b >= 2 && this.tcont(u, "fridge", "Fridge", f + b - 1, s === "s" ? a + o - 2 : a + 1, 1, 1, "kitchen", [0, 2], {
                    search: 1.2
                });
                let k = l ? m + 1 : t + 1,
                    M = l ? t + r - 2 - m : m - t - 1;
                this.gr(k, a + 1, M, o - 2, 7);
                let R = s === "s" ? a + 1 : a + o - 2,
                    w = s === "s" ? 1 : -1,
                    P = l ? -1 : 1,
                    g = l ? k + M - 1 : k;
                return this.tcont(u, "wardrobe", "Wardrobe", g, R, 1, 1, "wardrobe", [1, 3], {
                    search: 1.8
                }), this.tcont(u, "drawers", "Chest of Drawers", g + P, R, 1, 1, "house", [1, 2]), M >= 3 && o >= 7 && this.tprop("bed", l ? k + M - 2 : k, w === 1 ? R + 2 : R - 3, 2, 2, !0, {
                    v: this.rng.int(0, 3)
                }), M >= 4 && o >= 8 && this.tprop("sofa", g, w === 1 ? R + 4 : R - 5, 1, 2, !0), u
            }
            build() {
                let e = this.rng,
                    t = this.m;
                for (let n = 0; n < X; n++)
                    for (let l = 0; l < U; l++) {
                        let c = Math.sin(l * .17 + n * .05) + Math.sin(n * .13 - l * .07) + e.range(-.4, .4);
                        t.ground[Y(l, n)] = c > 1.35 ? 1 : c < -1.5 ? 10 : 0
                    }
                t.zones = [{
                    id: "military",
                    name: "Checkpoint Echo",
                    x: 106,
                    y: 10,
                    w: 48,
                    h: 42,
                    danger: 3,
                    pop: 26,
                    mix: [{
                        w: 5,
                        v: "soldier"
                    }, {
                        w: 2,
                        v: "riot"
                    }, {
                        w: 3,
                        v: "walker"
                    }, {
                        w: 1,
                        v: "runner"
                    }]
                }, {
                    id: "forest",
                    name: "Blackwood Forest",
                    x: 0,
                    y: 0,
                    w: 70,
                    h: 50,
                    danger: 1,
                    pop: 16,
                    mix: [{
                        w: 5,
                        v: "walker"
                    }, {
                        w: 3,
                        v: "runner"
                    }, {
                        w: 1,
                        v: "crawler"
                    }]
                }, {
                    id: "clinic",
                    name: "St Aldric's Clinic",
                    x: 52,
                    y: 54,
                    w: 24,
                    h: 22,
                    danger: 2,
                    pop: 12,
                    mix: [{
                        w: 5,
                        v: "walker"
                    }, {
                        w: 2,
                        v: "crawler"
                    }, {
                        w: 2,
                        v: "toxic"
                    }]
                }, {
                    id: "police",
                    name: "Harrow Police Station",
                    x: 84,
                    y: 54,
                    w: 20,
                    h: 22,
                    danger: 2,
                    pop: 10,
                    mix: [{
                        w: 5,
                        v: "walker"
                    }, {
                        w: 3,
                        v: "riot"
                    }]
                }, {
                    id: "fuel",
                    name: "Harrow Fuel",
                    x: 110,
                    y: 64,
                    w: 18,
                    h: 14,
                    danger: 1,
                    pop: 5,
                    mix: [{
                        w: 5,
                        v: "walker"
                    }, {
                        w: 1,
                        v: "runner"
                    }]
                }, {
                    id: "town",
                    name: "Little Harrow",
                    x: 38,
                    y: 42,
                    w: 74,
                    h: 70,
                    danger: 1,
                    pop: 34,
                    mix: [{
                        w: 8,
                        v: "walker"
                    }, {
                        w: 2,
                        v: "runner"
                    }, {
                        w: 2,
                        v: "crawler"
                    }, {
                        w: 1,
                        v: "toxic"
                    }]
                }, {
                    id: "industrial",
                    name: "Fenwick Industrial Estate",
                    x: 116,
                    y: 90,
                    w: 40,
                    h: 46,
                    danger: 2,
                    pop: 22,
                    mix: [{
                        w: 6,
                        v: "walker"
                    }, {
                        w: 2,
                        v: "runner"
                    }, {
                        w: 2,
                        v: "toxic"
                    }, {
                        w: 1,
                        v: "riot"
                    }]
                }, {
                    id: "farm",
                    name: "Marsh Farm",
                    x: 12,
                    y: 106,
                    w: 44,
                    h: 48,
                    danger: 1,
                    pop: 13,
                    mix: [{
                        w: 6,
                        v: "walker"
                    }, {
                        w: 2,
                        v: "crawler"
                    }, {
                        w: 1,
                        v: "runner"
                    }]
                }, {
                    id: "wilds",
                    name: "Harrowmere",
                    x: 0,
                    y: 0,
                    w: U,
                    h: X,
                    danger: 0,
                    pop: 16,
                    mix: [{
                        w: 6,
                        v: "walker"
                    }, {
                        w: 2,
                        v: "runner"
                    }]
                }], this.gr(77, 0, 1, X, 3), this.gr(82, 0, 1, X, 3), this.gr(78, 0, 4, X, 2), this.gr(6, 77, 148, 1, 3), this.gr(6, 82, 148, 1, 3), this.gr(6, 78, 148, 4, 2), this.gr(83, 29, 30, 4, 2), this.gr(128, 83, 4, 14, 2), this.gr(58, 83, 2, 30, 1), this.gr(6, 111, 54, 2, 1), this.gr(28, 39, 50, 2, 1), this.gr(28, 30, 2, 10, 1), this.gr(110, 66, 16, 11, 6);
                let a = ["#5a3a32", "#4a3a3a", "#3e4048", "#5b4636", "#463836"],
                    r = () => e.pick(a);
                {
                    let n = this.building({
                        name: "St Aldric's Clinic",
                        kind: "clinic",
                        x: 56,
                        y: 58,
                        w: 17,
                        h: 13,
                        wall: 2,
                        floor: 5,
                        roof: "#c9ccc8",
                        roofStyle: "flat",
                        zone: "clinic",
                        doors: [{
                            side: "s",
                            at: 7,
                            wide: 2
                        }, {
                            side: "e",
                            at: 3
                        }]
                    });
                    this.innerWall(57, 64, 71, 64, 2, 64, n, !0), this.door(65, 64, !1, n.id), this.innerWall(62, 59, 62, 63, 2, 61, n, !0), this.innerWall(67, 65, 67, 69, 2, 67, n, !0), this.tcont(n, "medcab", "Pharmacy Cabinet", 57, 59, 2, 1, "clinic", [2, 4], {
                        search: 2.2,
                        rarityHint: 2
                    }), this.tcont(n, "medcab", "Pharmacy Cabinet", 57, 62, 1, 2, "clinic", [1, 3], {
                        search: 2,
                        rarityHint: 1
                    }), this.tprop("hospbed", 64, 59, 1, 2, !0), this.tprop("hospbed", 66, 59, 1, 2, !0), this.tprop("hospbed", 68, 59, 1, 2, !0), this.tcont(n, "medcab", "Ward Trolley", 70, 59, 2, 1, "clinic", [1, 3], {
                        search: 1.6
                    }), this.tcont(n, "body", "Dead Nurse", 69, 62, 1, 1, "clinic", [1, 2], {
                        search: 1.4,
                        blocks: !1
                    }), this.tprop("counter", 58, 66, 3, 1, !0), this.tcont(n, "desk", "Reception Desk", 57, 68, 2, 1, "house", [1, 2]), this.tprop("chairs", 59, 69, 3, 1, !0), this.tprop("optable", 69, 66, 2, 1, !0), this.tcont(n, "medcab", "Surgical Supplies", 70, 69, 2, 1, "clinic", [1, 3], {
                        search: 2.4,
                        rarityHint: 2
                    })
                } {
                    let n = this.building({
                        name: "Harrow Police Station",
                        kind: "police",
                        x: 86,
                        y: 59,
                        w: 15,
                        h: 13,
                        wall: 1,
                        floor: 13,
                        roof: "#2f3540",
                        roofStyle: "flat",
                        zone: "police",
                        doors: [{
                            side: "w",
                            at: 6
                        }, {
                            side: "n",
                            at: 11
                        }]
                    });
                    this.innerWall(92, 60, 92, 70, 1, 63, n, !0), this.innerWall(93, 65, 99, 65, 1, 94, n, !0), this.innerWall(96, 66, 96, 70, 2, 68, n, !0, "key_police"), this.tprop("counter", 88, 62, 3, 1, !0), this.tcont(n, "desk", "Duty Desk", 87, 60, 2, 1, "police", [1, 2]), this.tcont(n, "filing", "Filing Cabinet", 91, 69, 1, 1, "house", [1, 2]), this.tcont(n, "locker", "Officer Locker", 87, 69, 1, 1, "police", [1, 3], {
                        search: 2,
                        rarityHint: 1
                    }), this.tcont(n, "locker", "Officer Locker", 88, 69, 1, 1, "police", [1, 3], {
                        search: 2,
                        rarityHint: 1
                    }), this.tcont(n, "gunlocker", "Weapons Locker", 98, 60, 2, 1, "police", [2, 4], {
                        search: 2.6,
                        rarityHint: 2
                    }), this.tcont(n, "desk", "Sergeant Desk", 94, 61, 2, 1, "police", [1, 2]), this.tprop("cellbars", 93, 66, 1, 4, !1), this.tcont(n, "body", "Dead Prisoner", 94, 69, 1, 1, "body", [1, 2], {
                        blocks: !1
                    }), this.tcont(n, "evidence", "Evidence Locker", 98, 67, 2, 1, "evidence", [3, 5], {
                        search: 2.8,
                        rarityHint: 3
                    }), this.tcont(n, "evidence", "Evidence Shelf", 97, 70, 3, 1, "evidence", [2, 3], {
                        search: 2.2,
                        rarityHint: 2
                    }), this.prop("police_car", 102 * y, 62 * y, 2 * y - 6, 4 * y - 10, !0, {
                        v: 0
                    }), this.cont("car", "Patrol Car Boot", 102 * y + 6, 66 * y - 8, 2 * y - 18, 18, "police", [1, 2], {
                        blocks: !1,
                        zone: "police",
                        search: 1.8
                    })
                } {
                    let n = this.building({
                        name: "Harrow & County Bank",
                        kind: "bank",
                        x: 64,
                        y: 85,
                        w: 10,
                        h: 8,
                        wall: 2,
                        floor: 5,
                        roof: "#3e4048",
                        roofStyle: "flat",
                        zone: "town",
                        doors: [{
                            side: "n",
                            at: 4,
                            wide: 2
                        }]
                    });
                    this.innerWall(65, 89, 72, 89, 2, 70, n, !0), this.tprop("counter", 66, 87, 5, 1, !0), this.tcont(n, "till", "Teller Drawer", 66, 86, 1, 1, "till", [1, 3], {
                        blocks: !1,
                        search: 1
                    }), this.tcont(n, "safe", "Bank Safe", 66, 90, 2, 2, "safe", [3, 5], {
                        search: 3.5,
                        locked: "key_safe",
                        rarityHint: 3
                    }), this.tcont(n, "filing", "Manager Files", 72, 91, 1, 1, "house", [1, 2])
                } {
                    let n = this.building({
                        name: "The Crooked Crown",
                        kind: "pub",
                        x: 53,
                        y: 85,
                        w: 10,
                        h: 10,
                        wall: 1,
                        floor: 4,
                        roof: "#4a3a32",
                        zone: "town",
                        doors: [{
                            side: "n",
                            at: 4
                        }, {
                            side: "s",
                            at: 2
                        }]
                    });
                    this.tprop("bar", 55, 87, 1, 5, !0), this.tcont(n, "counter", "Behind the Bar", 54, 87, 1, 3, "kitchen", [2, 4]), this.tcont(n, "till", "Pub Till", 54, 90, 1, 1, "till", [1, 2], {
                        blocks: !1
                    }), this.tprop("table", 58, 87, 1, 1, !0), this.tprop("table", 60, 89, 1, 1, !0), this.tprop("table", 58, 91, 1, 1, !0), this.tcont(n, "body", "Dead Landlord", 60, 92, 1, 1, "body", [1, 3], {
                        blocks: !1
                    }), this.m.lights.push({
                        x: 59 * y,
                        y: 90 * y,
                        r: 140,
                        color: "#ffb36b",
                        flicker: .4,
                        kind: "fire"
                    })
                } {
                    let n = this.building({
                        name: "Kwikmart",
                        kind: "shop",
                        x: 85,
                        y: 85,
                        w: 13,
                        h: 9,
                        wall: 1,
                        floor: 13,
                        roof: "#3a4a3e",
                        roofStyle: "flat",
                        zone: "town",
                        doors: [{
                            side: "n",
                            at: 2,
                            wide: 2
                        }]
                    });
                    this.tcont(n, "shelf", "Grocery Shelves", 90, 87, 4, 1, "shop", [2, 4], {
                        search: 2
                    }), this.tcont(n, "shelf", "Grocery Shelves", 90, 89, 4, 1, "shop", [2, 4], {
                        search: 2
                    }), this.tcont(n, "shelf", "Back Shelves", 86, 92, 5, 1, "shop", [2, 3], {
                        search: 2
                    }), this.tcont(n, "fridge", "Drinks Fridge", 96, 86, 1, 3, "shop", [1, 3]), this.tcont(n, "till", "Kwikmart Till", 87, 87, 1, 1, "till", [1, 3], {
                        search: 1
                    }), this.tprop("counter", 86, 88, 2, 1, !0), this.tcont(n, "bin", "Waste Bin", 96, 92, 1, 1, "bin", [1, 2])
                }
                let o = [
                    ["12 Church Lane", 54, 44, 8, 7, "s", !1],
                    ["14 Church Lane", 64, 44, 8, 7, "s", !0],
                    ["Rose Cottage", 102, 62, 8, 8, "n", !1],
                    ["1 Station Road", 54, 98, 8, 7, "n", !1],
                    ["3 Station Road", 65, 98, 8, 7, "n", !0],
                    ["The Old Vicarage", 100, 85, 9, 8, "n", !0],
                    ["22 Mill Street", 86, 98, 8, 7, "n", !1],
                    ["24 Mill Street", 97, 98, 8, 7, "n", !0],
                    ["Hillside Farmhouse", 40, 68, 8, 8, "s", !1],
                    ["Brook End", 40, 86, 8, 7, "n", !0],
                    ["Keeper\u2019s Lodge", 88, 44, 8, 7, "s", !1]
                ];
                for (let [n, l, c, u, m, p, f] of o) this.house(n, l, c, u, m, p, "town", r(), f);
                this.sr(53, 52, 10, 1, 9), this.sr(63, 52, 10, 1, 6), this.s(56, 52, 0), this.s(67, 52, 0), this.prop("phonebox", 75 * y - 20, 74 * y, 26, 26, !0), this.prop("bench", 74 * y, 84 * y + 4, 56, 18, !0), this.prop("busstop", 83 * y + 6, 74 * y, 30, 64, !0), this.prop("postbox", 83 * y + 8, 84 * y + 4, 18, 18, !0);
                {
                    let n = this.building({
                        name: "Harrow Fuel Kiosk",
                        kind: "fuel",
                        x: 116,
                        y: 66,
                        w: 8,
                        h: 6,
                        wall: 1,
                        floor: 13,
                        roof: "#6a2a24",
                        roofStyle: "flat",
                        zone: "fuel",
                        doors: [{
                            side: "s",
                            at: 3
                        }]
                    });
                    this.tcont(n, "shelf", "Kiosk Shelves", 117, 67, 3, 1, "petrol", [2, 4]), this.tcont(n, "till", "Kiosk Till", 121, 68, 1, 1, "till", [1, 3], {
                        blocks: !1
                    }), this.tcont(n, "fridge", "Drinks Chiller", 122, 67, 1, 2, "petrol", [1, 2]), this.prop("canopy", 110 * y, 72 * y, 6 * y, 4 * y, !1), this.prop("pump", 111 * y + 8, 73 * y + 8, 20, 30, !0, {
                        explosive: !0
                    }), this.prop("pump", 114 * y + 8, 73 * y + 8, 20, 30, !0, {
                        explosive: !0
                    }), this.prop("pump", 111 * y + 8, 75 * y + 4, 20, 30, !0, {
                        explosive: !0
                    }), this.prop("pump", 114 * y + 8, 75 * y + 4, 20, 30, !0, {
                        explosive: !0
                    }), this.cont("car", "Abandoned Hatchback", 119 * y, 73 * y, 56, 90, "car", [1, 3], {
                        zone: "fuel",
                        search: 1.8
                    })
                } {
                    this.gr(118, 92, 36, 44, 6), this.so(117, 91, 38, 46, 7);
                    for (let m = 128; m <= 131; m++) this.s(m, 91, 0);
                    for (let m = 126; m <= 129; m++) this.s(154, m, 0);
                    let n = this.building({
                        name: "Warehouse A",
                        kind: "warehouse",
                        x: 120,
                        y: 97,
                        w: 17,
                        h: 12,
                        wall: 4,
                        floor: 6,
                        roof: "#58606a",
                        roofStyle: "metal",
                        zone: "industrial",
                        doors: [{
                            side: "s",
                            at: 7,
                            wide: 3
                        }, {
                            side: "e",
                            at: 2
                        }],
                        windows: null
                    });
                    for (let m = 0; m < 3; m++) this.tcont(n, "rack", "Storage Rack", 122 + m * 5, 99, 3, 1, "industrial", [1, 3], {
                        search: 2
                    }), this.tcont(n, "crate", "Wooden Crate", 122 + m * 5, 102, 2, 2, "industrial", [1, 3], {
                        search: 1.8
                    });
                    this.tprop("forklift", 133, 104, 2, 3, !0), this.tprop("pallet", 128, 106, 2, 1, !1), this.tcont(n, "body", "Dead Worker", 125, 106, 1, 1, "body", [1, 3], {
                        blocks: !1
                    });
                    let l = this.building({
                        name: "Warehouse B",
                        kind: "warehouse",
                        x: 120,
                        y: 114,
                        w: 17,
                        h: 12,
                        wall: 4,
                        floor: 6,
                        roof: "#4e5560",
                        roofStyle: "metal",
                        zone: "industrial",
                        doors: [{
                            side: "n",
                            at: 7,
                            wide: 3
                        }],
                        windows: null
                    });
                    for (let m = 0; m < 3; m++) this.tcont(l, "rack", "Storage Rack", 122 + m * 5, 123, 3, 1, "industrial", [1, 3], {
                        search: 2
                    });
                    this.tcont(l, "crate", "Electronics Crate", 122, 117, 2, 2, "industrial", [2, 3], {
                        search: 2.2,
                        rarityHint: 1
                    }), this.tcont(l, "crate", "Parts Crate", 132, 117, 2, 2, "industrial", [2, 3], {
                        search: 2.2,
                        rarityHint: 1
                    }), this.prop("barrel", 127 * y, 118 * y, 26, 26, !0, {
                        explosive: !0
                    }), this.prop("barrel", 128 * y, 118 * y + 4, 26, 26, !0, {
                        explosive: !0
                    });
                    let c = this.building({
                        name: "Fenwick Motors Workshop",
                        kind: "workshop",
                        x: 140,
                        y: 97,
                        w: 11,
                        h: 9,
                        wall: 1,
                        floor: 6,
                        roof: "#3a3e44",
                        roofStyle: "flat",
                        zone: "industrial",
                        doors: [{
                            side: "w",
                            at: 4,
                            wide: 2
                        }]
                    });
                    this.tcont(c, "bench", "Workbench", 142, 98, 3, 1, "industrial", [2, 3], {
                        search: 1.8
                    }), this.tcont(c, "bench", "Tool Wall", 146, 98, 3, 1, "industrial", [1, 3], {
                        search: 1.8
                    }), this.tcont(c, "locker", "Mechanic Locker", 149, 102, 1, 2, "industrial", [1, 2], {
                        search: 1.8
                    }), this.prop("car_lift", 143 * y, 101 * y, 3 * y, 3 * y, !1);
                    let u = this.building({
                        name: "Site Office",
                        kind: "office",
                        x: 140,
                        y: 109,
                        w: 9,
                        h: 6,
                        wall: 1,
                        floor: 7,
                        roof: "#3e4048",
                        roofStyle: "flat",
                        zone: "industrial",
                        doors: [{
                            side: "w",
                            at: 2
                        }]
                    });
                    this.tcont(u, "desk", "Office Desk", 142, 110, 2, 1, "house", [1, 2]), this.tcont(u, "safe", "Payroll Safe", 147, 110, 1, 1, "safe", [1, 3], {
                        search: 3.2,
                        rarityHint: 2
                    }), this.tcont(u, "filing", "Filing Cabinet", 147, 113, 1, 1, "house", [1, 2]);
                    for (let m = 0; m < 4; m++) {
                        let p = 140 + m % 2 * 6,
                            f = 119 + Math.floor(m / 2) * 6;
                        this.sr(p, f, 5, 2, 4), this.prop("shipping", p * y, f * y, 5 * y, 2 * y, !1, {
                            v: m
                        })
                    }
                    this.tcont(null, "crate", "Shipping Crate", 141, 117, 2, 1, "industrial", [1, 3], {
                        zone: "industrial",
                        search: 1.8
                    }), this.tcont(null, "crate", "Shipping Crate", 147, 130, 2, 1, "industrial", [1, 3], {
                        zone: "industrial",
                        search: 1.8
                    }), this.prop("lorry", 121 * y, 129 * y, 6 * y, 2 * y + 8, !0, {
                        v: 0
                    }), this.cont("truck", "Lorry Trailer", 121 * y + 8, 131 * y + 8, 4 * y, 20, "industrial", [2, 4], {
                        zone: "industrial",
                        blocks: !1,
                        search: 2.4,
                        rarityHint: 1
                    }), this.m.lights.push({
                        x: 135 * y,
                        y: 128 * y,
                        r: 150,
                        color: "#ff8a3a",
                        flicker: .6,
                        kind: "fire"
                    }), this.prop("firebarrel", 135 * y - 13, 128 * y - 13, 26, 26, !0)
                } {
                    this.gr(16, 110, 38, 40, 0), this.so(15, 109, 40, 42, 6);
                    for (let u = 111; u <= 112; u++) this.s(15, u, 0), this.s(54, u, 0);
                    let n = this.building({
                        name: "Marsh Farmhouse",
                        kind: "farmhouse",
                        x: 33,
                        y: 114,
                        w: 11,
                        h: 9,
                        wall: 1,
                        floor: 4,
                        roof: "#5b3a2a",
                        zone: "farm",
                        doors: [{
                            side: "n",
                            at: 3
                        }, {
                            side: "e",
                            at: 5
                        }]
                    });
                    this.innerWall(38, 115, 38, 121, 3, 118, n, !0), this.tcont(n, "counter", "Farm Kitchen", 39, 115, 3, 1, "kitchen", [2, 3]), this.tcont(n, "gunlocker", "Gun Cabinet", 34, 115, 1, 1, "farm", [1, 3], {
                        search: 2.4,
                        rarityHint: 2
                    }), this.tcont(n, "wardrobe", "Wardrobe", 34, 121, 1, 1, "wardrobe", [1, 3]), this.tprop("bed", 35, 119, 2, 2, !0), this.tprop("table", 40, 119, 2, 1, !0), this.tcont(n, "fridge", "Larder", 42, 121, 1, 1, "kitchen", [1, 3]);
                    let l = this.building({
                        name: "Marsh Barn",
                        kind: "barn",
                        x: 17,
                        y: 115,
                        w: 12,
                        h: 11,
                        wall: 3,
                        floor: 1,
                        roof: "#6b2f24",
                        zone: "farm",
                        doors: [{
                            side: "e",
                            at: 4,
                            wide: 3
                        }],
                        windows: null
                    });
                    this.tprop("hay", 18, 116, 2, 2, !0), this.tprop("hay", 18, 119, 2, 2, !0), this.tprop("tractor", 22, 120, 3, 4, !0), this.tcont(l, "crate", "Feed Store", 25, 116, 2, 1, "farm", [1, 3]), this.tcont(l, "bench", "Tool Bench", 18, 123, 3, 1, "farm", [1, 3]), this.tcont(l, "body", "Dead Farmer", 26, 122, 1, 1, "body", [1, 3], {
                        blocks: !1
                    });
                    let c = this.building({
                        name: "Greenhouse",
                        kind: "greenhouse",
                        x: 33,
                        y: 127,
                        w: 10,
                        h: 7,
                        wall: 10,
                        floor: 1,
                        roof: "#9fc7c0",
                        roofStyle: "glass",
                        zone: "farm",
                        doors: [{
                            side: "n",
                            at: 4
                        }],
                        windows: null
                    });
                    this.tcont(c, "planter", "Seed Trays", 34, 128, 3, 1, "greenhouse", [1, 3]), this.tcont(c, "planter", "Seed Trays", 38, 128, 3, 1, "greenhouse", [1, 3]), this.tcont(c, "planter", "Grow Bench", 35, 131, 5, 1, "greenhouse", [1, 3], {
                        rarityHint: 1
                    }), this.gr(18, 130, 13, 18, 8), this.gr(45, 125, 8, 23, 8), this.gr(46, 112, 6, 5, 11), this.sr(46, 112, 6, 5, 12), this.prop("scarecrow", 24 * y, 138 * y, 26, 26, !1), this.prop("silo", 29 * y, 110 * y + 12, 2 * y, 2 * y, !0, {
                        tall: !0
                    }), this.cont("car", "Land Rover", 46 * y, 119 * y, 56, 92, "farm", [1, 3], {
                        zone: "farm",
                        search: 1.8
                    }), this.tcont(null, "crate", "Apple Crates", 50, 141, 2, 1, "farm", [1, 2], {
                        zone: "farm"
                    })
                } {
                    let n = this.building({
                        name: "Hunting Cabin",
                        kind: "cabin",
                        x: 21,
                        y: 25,
                        w: 8,
                        h: 6,
                        wall: 3,
                        floor: 4,
                        roof: "#3a2e24",
                        zone: "forest",
                        doors: [{
                            side: "s",
                            at: 5
                        }]
                    });
                    this.tcont(n, "gunlocker", "Rifle Rack", 22, 26, 2, 1, "forest", [1, 3], {
                        search: 2.2,
                        rarityHint: 2
                    }), this.tcont(n, "crate", "Supply Chest", 27, 26, 1, 1, "forest", [1, 3]), this.tprop("bed", 22, 28, 2, 2, !0), this.prop("campfire", 46 * y, 15 * y, 30, 30, !1), this.m.lights.push({
                        x: 46 * y + 15,
                        y: 15 * y + 15,
                        r: 170,
                        color: "#ffa04a",
                        flicker: .7,
                        kind: "fire"
                    }), this.prop("tent", 43 * y, 11 * y, 3 * y, 2 * y, !0), this.cont("tent", "Abandoned Tent", 43 * y + 10, 13 * y + 2, 3 * y - 20, 20, "forest", [1, 3], {
                        zone: "forest",
                        blocks: !1
                    }), this.cont("body", "Dead Hiker", 49 * y, 17 * y, 28, 28, "body", [2, 3], {
                        zone: "forest",
                        blocks: !1
                    }), this.prop("van", 60 * y, 38 * y - 20, 3 * y, 2 * y - 4, !0, {
                        rot: .4
                    }), this.cont("car", "Crashed Van", 60 * y + 8, 40 * y - 8, 70, 22, "car", [2, 3], {
                        zone: "forest",
                        blocks: !1,
                        search: 2
                    }), this.cont("body", "Dead Ranger", 12 * y, 44 * y, 28, 28, "police", [1, 3], {
                        zone: "forest",
                        blocks: !1
                    });
                    let l = 0;
                    for (let c = 0; c < 2600 && l < 520; c++) {
                        let u = e.range(1, 72),
                            m = e.range(1, 52);
                        if (u > 66 && m > 30 || m > 47 && u > 36) continue;
                        let p = Math.floor(u),
                            f = Math.floor(m),
                            b = t.ground[Y(p, f)];
                        if (b === 2 || b === 3 || b === 1 || t.solid[Y(p, f)] || t.roofOf[Y(p, f)] >= 0 || Math.hypot(u - 46, m - 15) < 6 || u > 19 && u < 31 && m > 23 && m < 33) continue;
                        let x = u * y,
                            k = m * y;
                        t.trees.some(M => (M.x - x) ** 2 + (M.y - k) ** 2 < 2116) || (this.tree(x, k), t.ground[Y(p, f)] = 12, l++)
                    }
                    for (let c of t.trees) {
                        let u = Math.floor(c.x / y),
                            m = Math.floor(c.y / y);
                        for (let p = -1; p <= 1; p++)
                            for (let f = -1; f <= 1; f++) this.inb(u + f, m + p) && t.ground[Y(u + f, m + p)] === 0 && e.chance(.6) && (t.ground[Y(u + f, m + p)] = 12)
                    }
                } {
                    this.gr(108, 12, 46, 40, 9), this.so(108, 12, 46, 40, 7);
                    for (let u = 29; u <= 32; u++) this.s(108, u, 0);
                    this.prop("barrier", 108 * y - 6, 29 * y, 12, 4 * y, !1), this.sr(110, 25, 1, 3, 8), this.sr(110, 34, 1, 3, 8), this.prop("tower", 110 * y, 13 * y + 8, 2 * y, 2 * y, !0, {
                        tall: !0
                    }), this.prop("tower", 150 * y, 48 * y, 2 * y, 2 * y, !0, {
                        tall: !0
                    });
                    let n = this.building({
                        name: "Echo Barracks",
                        kind: "barracks",
                        x: 117,
                        y: 15,
                        w: 15,
                        h: 8,
                        wall: 2,
                        floor: 6,
                        roof: "#4d5a3a",
                        roofStyle: "flat",
                        zone: "military",
                        doors: [{
                            side: "s",
                            at: 4
                        }, {
                            side: "s",
                            at: 10
                        }]
                    });
                    for (let u = 0; u < 5; u++) this.tprop("bunk", 118 + u * 3, 16, 1, 2, !0);
                    this.tcont(n, "locker", "Footlocker", 119, 20, 1, 1, "military", [1, 3], {
                        search: 2,
                        rarityHint: 1
                    }), this.tcont(n, "locker", "Footlocker", 124, 20, 1, 1, "military", [1, 3], {
                        search: 2,
                        rarityHint: 1
                    }), this.tcont(n, "locker", "Footlocker", 129, 20, 1, 1, "military", [1, 3], {
                        search: 2,
                        rarityHint: 1
                    });
                    let l = this.building({
                        name: "Echo Armory",
                        kind: "armory",
                        x: 137,
                        y: 15,
                        w: 8,
                        h: 7,
                        wall: 2,
                        floor: 6,
                        roof: "#3c452c",
                        roofStyle: "flat",
                        zone: "military",
                        doors: [{
                            side: "s",
                            at: 3,
                            locked: "key_armory"
                        }],
                        windows: null
                    });
                    this.tcont(l, "weaponcase", "Weapon Case", 138, 16, 2, 1, "armory", [2, 3], {
                        search: 3,
                        rarityHint: 3
                    }), this.tcont(l, "weaponcase", "Weapon Case", 141, 16, 2, 1, "armory", [2, 3], {
                        search: 3,
                        rarityHint: 3
                    }), this.tcont(l, "crate", "Ammo Crate", 143, 18, 1, 2, "military", [2, 4], {
                        search: 2.4,
                        rarityHint: 2
                    });
                    let c = [
                        [117, 27, "Command Tent", "military"],
                        [124, 27, "Supply Tent", "military"],
                        [117, 36, "Field Hospital", "clinic"],
                        [124, 36, "Mess Tent", "kitchen"]
                    ];
                    for (let [u, m, p, f] of c) {
                        let b = this.building({
                            name: p,
                            kind: "tent",
                            x: u,
                            y: m,
                            w: 6,
                            h: 6,
                            wall: 3,
                            floor: 1,
                            roof: "#55603e",
                            roofStyle: "tent",
                            zone: "military",
                            doors: [{
                                side: "s",
                                at: 2,
                                wide: 2
                            }],
                            windows: null
                        });
                        this.tcont(b, f === "clinic" ? "medcab" : "crate", p === "Command Tent" ? "Map Table" : "Supply Crate", u + 1, m + 1, 2, 1, f, [2, 3], {
                            search: 2,
                            rarityHint: f === "military" ? 2 : 1
                        }), this.tcont(b, "crate", "Crate", u + 4, m + 1, 1, 1, f, [1, 2]), p === "Field Hospital" && this.tprop("hospbed", u + 1, m + 3, 1, 2, !0)
                    }
                    this.prop("mil_truck", 137 * y, 28 * y, 3 * y, 6 * y, !0), this.cont("truck", "Truck Bed", 137 * y + 10, 34 * y + 2, 3 * y - 20, 22, "military", [2, 4], {
                        zone: "military",
                        blocks: !1,
                        search: 2.4,
                        rarityHint: 2
                    }), this.prop("mil_truck", 142 * y, 28 * y, 3 * y, 6 * y, !0, {
                        v: 1
                    }), this.cont("truck", "Truck Bed", 142 * y + 10, 34 * y + 2, 3 * y - 20, 22, "military", [1, 3], {
                        zone: "military",
                        blocks: !1,
                        search: 2.4,
                        rarityHint: 2
                    }), this.gr(132, 40, 7, 7, 14), this.tcont(null, "crate", "Helipad Crate", 140, 41, 2, 2, "military", [2, 3], {
                        zone: "military",
                        search: 2.2,
                        rarityHint: 2
                    }), this.tcont(null, "body", "Dead Soldier", 128, 44, 1, 1, "zed_military", [2, 3], {
                        zone: "military",
                        blocks: !1
                    }), this.sr(146, 38, 1, 6, 8), this.sr(131, 38, 9, 1, 8), this.m.lights.push({
                        x: 123.5 * y,
                        y: 34 * y,
                        r: 150,
                        color: "#ff9a4a",
                        flicker: .6,
                        kind: "fire"
                    }), this.prop("firebarrel", 123.5 * y - 13, 34 * y - 13, 26, 26, !0)
                }
                let s = [
                    [79, 20, "Burnt-out Saloon"],
                    [80, 52, "Abandoned Estate Car"],
                    [79, 120, "Overturned Hatchback"],
                    [30, 79, "Abandoned Estate Car"],
                    [100, 79, "Police Van"],
                    [140, 80, "Abandoned Hatchback"],
                    [79, 140, "Burnt-out Saloon"],
                    [95, 30, "Army Jeep"]
                ];
                for (let [n, l, c] of s) {
                    let u = l >= 77 && l <= 82 || l === 30,
                        m = u ? 92 : 56,
                        p = u ? 56 : 92,
                        f = n * y + e.range(-8, 8),
                        b = l * y + e.range(-8, 8);
                    this.prop(c.includes("Police") ? "police_car" : c.includes("Army") ? "jeep" : "car", f, b, m, p, !0, {
                        rot: u ? Math.PI / 2 : 0,
                        v: e.int(0, 3)
                    }), this.cont("car", c, f + (u ? m - 2 : 4), b + (u ? 6 : p - 2), u ? 18 : m - 8, u ? p - 12 : 18, c.includes("Army") ? "zed_military" : "car", [1, 3], {
                        blocks: !1,
                        search: 1.8
                    })
                }
                let d = [
                    [70, 79],
                    [86, 96],
                    [112, 80],
                    [79, 66],
                    [45, 105],
                    [100, 46],
                    [64, 130],
                    [104, 140]
                ];
                for (let [n, l] of d) this.cont("body", "Dead Survivor", n * y + 2, l * y + 2, 28, 28, "body", [1, 3], {
                    blocks: !1,
                    search: 1.4
                });
                for (let n = 0; n < 340; n++) {
                    let l = e.range(4, 156),
                        c = e.range(4, 156),
                        u = Math.floor(l),
                        m = Math.floor(c);
                    if (l < 72 && c < 52 || t.ground[Y(u, m)] !== 0 && t.ground[Y(u, m)] !== 1 && t.ground[Y(u, m)] !== 10 || t.solid[Y(u, m)] || t.roofOf[Y(u, m)] >= 0) continue;
                    let p = !1;
                    for (let x of t.zones) x.id === "wilds" || x.id === "forest" || l > x.x - 1 && l < x.x + x.w + 1 && c > x.y - 1 && c < x.y + x.h + 1 && (p = !0);
                    if (p && e.chance(.85) || Math.abs(l - 80) < 5 || Math.abs(c - 80) < 5) continue;
                    let f = l * y,
                        b = c * y;
                    t.trees.some(x => (x.x - f) ** 2 + (x.y - b) ** 2 < 3600) || (e.chance(.12) ? this.prop("rock", f - 20, b - 16, 40, 32, !0, {
                        v: e.int(0, 3)
                    }) : this.tree(f, b, e.range(30, 52)))
                }
                for (let n = 8; n < 50; n++) e.chance(.8) && this.s(n, 76, 9);
                for (let n = 8; n < 36; n++) e.chance(.8) && this.s(n, 83, 9);
                for (let n = 114; n < 156; n++) e.chance(.7) && this.s(76, n, 9);
                for (let n = 114; n < 156; n++) e.chance(.7) && this.s(83, n, 9);
                t.extracts = [{
                    id: "north",
                    name: "North Road",
                    x: 80 * y,
                    y: 3 * y,
                    r: 70,
                    desc: "Head north out of the valley on the A-road."
                }, {
                    id: "marsh",
                    name: "Marsh Track",
                    x: 7 * y,
                    y: 112 * y,
                    r: 70,
                    desc: "Follow the farm track west past Marsh Farm."
                }, {
                    id: "lorry",
                    name: "Fenwick Lorry Gate",
                    x: 155 * y,
                    y: 128 * y,
                    r: 70,
                    desc: "The east gate of the industrial estate."
                }, {
                    id: "gate",
                    name: "Military Gate",
                    x: 150 * y,
                    y: 22 * y,
                    r: 64,
                    req: "key_armory",
                    always: !0,
                    desc: "Swipe an Armory Keycard at the east gate of Checkpoint Echo."
                }, {
                    id: "flare",
                    name: "Flare Point",
                    x: 146 * y,
                    y: 150 * y,
                    r: 70,
                    req: "tool_flare",
                    always: !0,
                    desc: "Fire a Signal Flare on the south-east hill for a pickup."
                }], t.spawns = [{
                    x: 4 * y,
                    y: 80 * y
                }, {
                    x: 80 * y,
                    y: 157 * y
                }, {
                    x: 157 * y,
                    y: 70 * y
                }, {
                    x: 5 * y,
                    y: 8 * y
                }, {
                    x: 118 * y,
                    y: 156 * y
                }, {
                    x: 100 * y,
                    y: 4 * y
                }];
                for (let n = 0; n < 180; n++) {
                    let l = e.range(8, 152) * y,
                        c = e.range(8, 152) * y,
                        u = t.ground[Y(Math.floor(l / y), Math.floor(c / y))];
                    u === 2 || u === 3 || u === 6 ? t.decals.push({
                        x: l,
                        y: c,
                        kind: e.chance(.6) ? "crack" : "oil",
                        r: e.range(10, 34),
                        rot: e.range(0, 6.28)
                    }) : e.chance(.25) && t.decals.push({
                        x: l,
                        y: c,
                        kind: "leaves",
                        r: e.range(14, 30),
                        rot: e.range(0, 6.28)
                    })
                }
                for (let n = 0; n < 60; n++) {
                    let l = e.range(40, 120) * y,
                        c = e.range(40, 120) * y;
                    t.decals.push({
                        x: l,
                        y: c,
                        kind: "blood_old",
                        r: e.range(8, 22),
                        rot: e.range(0, 6.28)
                    })
                }
                for (let n of t.containers) n.rarityHint === 0 && (n.table === "military" || n.table === "safe" || n.table === "evidence") && (n.rarityHint = 2);
                return this.clearDoorApproaches(), ss(t), t
            }
            clearDoorApproaches() {
                let e = new Set([9, 6, 7, 8, 11]);
                for (let t of this.m.doors)
                    for (let a of [-1, 1])
                        for (let r = 1; r <= 2; r++)
                            for (let o = -1; o <= 1; o++) {
                                let s = t.vertical ? t.tx + a * r : t.tx + o,
                                    d = t.vertical ? t.ty + o : t.ty + a * r;
                                this.inb(s, d) && e.has(this.m.solid[Y(s, d)]) && (this.m.solid[Y(s, d)] = 0)
                            }
            }
        };

    function ss(i) {
        for (let e = 0; e < i.solid.length; e++) i.flags[e] = Oe[i.solid[e]] ?? 0;
        for (let e of i.doors) if(!e.inactive)i.flags[Y(e.tx, e.ty)] = e.open ? 0 : be | Ie | at;
        for (let e of i.props) {
            if (!e.tall) continue;
            let t = Math.floor(e.x / y),
                a = Math.floor(e.y / y),
                r = Math.floor((e.x + e.w - 1) / y),
                o = Math.floor((e.y + e.h - 1) / y);
            for (let s = a; s <= o; s++)
                for (let d = t; d <= r; d++) i.flags[Y(d, s)] |= Ie | at
        }
    }

    function ii(i, e, t) {
        e.open = t; if(!e.inactive)i.flags[Y(e.tx, e.ty)] = t ? 0 : be | Ie | at
    }
    var Hr = new Map;

    function Oa(i = 1337) {
        return new Aa(i).build()
    }

    function Ri(i = 1337) {
        let e = Hr.get(i);
        return e || (e = Oa(i), Hr.set(i, e)), e
    }

    function Qi(i, e, t) {
        let a = e / y,
            r = t / y;
        for (let o of i.zones)
            if (a >= o.x && a < o.x + o.w && r >= o.y && r < o.y + o.h) return o;
        return i.zones[i.zones.length - 1]
    }

    function Vt(i, e, t, a, r, o, s) {
        let d = Math.floor(e / y),
            n = Math.floor(t / y),
            l = a > 0 ? 1 : -1,
            c = r > 0 ? 1 : -1,
            u = a !== 0 ? Math.abs(y / a) : 1 / 0,
            m = r !== 0 ? Math.abs(y / r) : 1 / 0,
            p = a !== 0 ? a > 0 ? ((d + 1) * y - e) / a : (d * y - e) / a : 1 / 0,
            f = r !== 0 ? r > 0 ? ((n + 1) * y - t) / r : (n * y - t) / r : 1 / 0,
            b = 0;
        for (let x = 0; x < 200; x++) {
            if (p < f ? (b = p, p += u, d += l) : (b = f, f += m, n += c), b > o) return o;
            if (d < 0 || n < 0 || d >= U || n >= X || i.flags[n * U + d] & s) return b
        }
        return o
    }

    function Ji(i, e, t, a, r, o) {
        let s = a - e,
            d = r - t,
            n = Math.hypot(s, d);
        return n < 1 ? !0 : Vt(i, e, t, s / n, d / n, n, o) >= n - .5
    }
    var Q = Math.PI * 2;

    function V(i, e, t) {
        return i < e ? e : i > t ? t : i
    }

    function We(i, e, t) {
        return i + (e - i) * t
    }

    function qe(i, e, t, a) {
        let r = i - t,
            o = e - a;
        return r * r + o * o
    }

    function Ze(i, e, t, a) {
        return Math.sqrt(qe(i, e, t, a))
    }

    function Tt(i, e) {
        let t = e - i;
        for (; t > Math.PI;) t -= Q;
        for (; t < -Math.PI;) t += Q;
        return t
    }

    function Kt(i, e) {
        return 1 - Math.exp(-i * e)
    }

    function Nr(i, e, t, a, r, o, s) {
        let d = t - i,
            n = a - e,
            l = i - r,
            c = e - o,
            u = d * d + n * n;
        if (u < 1e-6) return -1;
        let m = 2 * (l * d + c * n),
            p = l * l + c * c - s * s,
            f = m * m - 4 * u * p;
        if (f < 0) return -1;
        f = Math.sqrt(f);
        let b = (-m - f) / (2 * u);
        if (b >= 0 && b <= 1) return b;
        let x = (-m + f) / (2 * u);
        return x >= 0 && x <= 1 && p < 0 ? 0 : -1
    }

    function Fr(i, e, t, a, r, o, s, d) {
        let n = t - i,
            l = a - e,
            c = 0,
            u = 1,
            m = [-n, n, -l, l],
            p = [i - r, r + s - i, e - o, o + d - e];
        for (let f = 0; f < 4; f++)
            if (m[f] === 0) {
                if (p[f] < 0) return -1
            } else {
                let b = p[f] / m[f];
                if (m[f] < 0) {
                    if (b > u) return -1;
                    b > c && (c = b)
                } else {
                    if (b < c) return -1;
                    b < u && (u = b)
                }
            } return c
    }

    function Ct(i) {
        i = Math.max(0, Math.floor(i));
        let e = Math.floor(i / 60),
            t = i % 60;
        return e + ":" + (t < 10 ? "0" : "") + t
    }
    var Be = {
        walker: {
            type: "walker",
            name: "Infected",
            hp: 100,
            armour: 0,
            wander: 22,
            chase: 64,
            dmg: 12,
            attackCd: 1.1,
            reach: 28,
            radius: 13,
            vision: 330,
            hearing: 1,
            bleedChance: .25,
            infectChance: .03,
            xp: 10,
            dropChance: .16,
            dropTable: "zed_common",
            skin: "#8a9a7a",
            cloth: "#4a4f5a",
            cloth2: "#6b5d4a"
        },
        runner: {
            type: "runner",
            name: "Runner",
            hp: 70,
            armour: 0,
            wander: 30,
            chase: 172,
            dmg: 9,
            attackCd: .75,
            reach: 26,
            radius: 12,
            vision: 380,
            hearing: 1.2,
            bleedChance: .3,
            infectChance: .03,
            xp: 18,
            dropChance: .16,
            dropTable: "zed_common",
            skin: "#a3a88a",
            cloth: "#5a3a3a",
            cloth2: "#3a3a44"
        },
        crawler: {
            type: "crawler",
            name: "Crawler",
            hp: 55,
            armour: 0,
            wander: 12,
            chase: 42,
            dmg: 15,
            attackCd: 1.2,
            reach: 26,
            radius: 12,
            vision: 220,
            hearing: .9,
            bleedChance: .4,
            infectChance: .05,
            xp: 8,
            dropChance: .12,
            dropTable: "zed_common",
            skin: "#7d8a6c",
            cloth: "#3b3f36",
            cloth2: "#2e2a26"
        },
        soldier: {
            type: "soldier",
            name: "Infected Soldier",
            hp: 170,
            armour: .3,
            wander: 24,
            chase: 80,
            dmg: 16,
            attackCd: 1,
            reach: 28,
            radius: 14,
            vision: 360,
            hearing: 1.1,
            bleedChance: .3,
            infectChance: .03,
            xp: 32,
            dropChance: .5,
            dropTable: "zed_military",
            skin: "#8f9a78",
            cloth: "#4d5a3a",
            cloth2: "#3c452c"
        },
        riot: {
            type: "riot",
            name: "Armoured Infected",
            hp: 230,
            armour: .55,
            wander: 18,
            chase: 58,
            dmg: 18,
            attackCd: 1.2,
            reach: 28,
            radius: 15,
            vision: 300,
            hearing: 1,
            bleedChance: .2,
            infectChance: .03,
            xp: 42,
            dropChance: .5,
            dropTable: "zed_police",
            skin: "#8a9a7a",
            cloth: "#1f242c",
            cloth2: "#3a414c"
        },
        toxic: {
            type: "toxic",
            name: "Toxic Bloater",
            hp: 120,
            armour: 0,
            wander: 16,
            chase: 50,
            dmg: 10,
            attackCd: 1.3,
            reach: 30,
            radius: 17,
            vision: 280,
            hearing: 1,
            bleedChance: .1,
            infectChance: .35,
            xp: 30,
            dropChance: .3,
            dropTable: "zed_common",
            skin: "#9fb35a",
            cloth: "#56603a",
            cloth2: "#7a8a3a"
        },
        brute: {
            type: "brute",
            name: "The Brute",
            hp: 1500,
            armour: .35,
            wander: 20,
            chase: 92,
            dmg: 38,
            attackCd: 1.5,
            reach: 44,
            radius: 26,
            vision: 420,
            hearing: 1.4,
            bleedChance: .6,
            infectChance: .08,
            xp: 400,
            dropChance: 1,
            dropTable: "boss",
            skin: "#7a6a5a",
            cloth: "#3a2a22",
            cloth2: "#5a2a22"
        }
    };
    var he = i => i.split(",").map(e => e.trim()).filter(Boolean).map(e => {
            let [t, a, r] = e.split(":");
            if (!ht[t]) throw new Error("Loot table references unknown item " + t);
            let o = {
                id: t,
                w: Number(a)
            };
            if (r) {
                let [s, d] = r.split("-").map(Number);
                o.min = s, o.max = d ?? s
            }
            return o
        }),
        ns = {
            kitchen: he("food_beans:10, food_peaches:8, food_crisps:9, food_choc:7, drink_water:9, drink_cola:7, food_apple:5:1-3, food_jerky:3:1-2, m_knife:3, comp_cloth:4:1-3, med_rag:3:1-2, drink_canteen:1"),
            house: he("comp_cloth:8:1-4, comp_tape:5, comp_screws:5:2-6, elec_battery:6:1-3, val_lighter:4, val_ring:3, val_locket:3, val_watch:1, money_cash:6:1-3, med_pills:4, med_bandage:4:1-2, med_rag:5:1-3, food_crisps:4, drink_water:4, seed_tomato:2:1-3, seed_potato:2:1-3, bag_school:2, a9:3:6-18, elec_radio:1, key_safe:0.6"),
            wardrobe: he("comp_cloth:10:2-5, bag_school:5, bag_hiker:1.5, hel_moto:2, val_ring:3, val_locket:3, val_watch:1.2, money_cash:5:1-3, comp_rope:3, m_bat:1.2"),
            shop: he("food_beans:8, food_peaches:7, food_crisps:10, food_choc:9, drink_water:9, drink_cola:9, drink_volt:4, elec_battery:6:2-4, comp_tape:3, med_pills:3, med_bandage:3:1-2, food_jerky:3:1-3"),
            till: he("money_cash:20:1-4, val_ring:2, val_lighter:2"),
            police: he("a9:12:10-30, a12:8:6-14, w_ward9:5, w_mako:1.6, arm_vest:2.5, med_bandage:6:1-3, att_light:3, elec_radio:4, money_cash:3:1-3, key_police:0.9, w_kestrel:0.8, a44:2:6-12, hel_moto:2, m_crowbar:2"),
            evidence: he("w_kestrel:4, a44:6:12-24, contra_brick:4:1-2, seed_ghostleaf:4:1-3, money_cash:8:3-8, val_goldbar:1.2, att_supp:2, att_laser:2.5, att_reddot:3, w_hornet:2.5, val_watch:3"),
            clinic: he("med_bandage:12:1-3, med_pills:10:1-3, med_firstaid:6, med_antibiotics:6:1-2, med_surgical:1.6, med_antiviral:0.45, med_adrenaline:1.4, med_rag:6:1-3, drink_water:3, elec_battery:2"),
            industrial: he("comp_scrap:12:2-6, comp_screws:9:3-8, comp_tape:7, elec_wire:7:1-3, elec_circuit:4, tool_toolbox:3, comp_solvent:4, comp_gunparts:1.4, comp_fuel:2.5, m_crowbar:3, elec_battery:4:1-4, tool_repair:0.8, comp_rope:3, val_gpu:0.4"),
            military: he("a556:10:15-40, a762:7:15-30, a338:1.2:5-10, w_vr556:3, w_vk74:1.5, att_reddot:3, att_grip:3, att_stock:2.5, att_extmag:2.5, att_scope:1.5, att_supp:1, arm_plate:1.5, hel_mil:2, food_mre:4, bag_ruck:1.2, val_intel:1.5, med_firstaid:3, key_armory:0.5, comp_gunparts:2"),
            armory: he("w_vr556:6, w_vk74:5, w_fieldmaster:3, w_brute12:1.8, w_longwatch:0.9, w_wraith:0.25, att_scope:3, att_supp:3, att_extmag:3, att_laser:2, arm_plate:3, arm_riot:1, hel_mil:3, a556:6:30-60, a762:6:30-60, a338:2:10-20, val_intel:2"),
            farm: he("seed_tomato:8:2-5, seed_potato:8:2-5, farm_fert:6, crop_potato:6:2-5, food_apple:8:2-3, comp_rope:5, comp_scrap:4:2-4, a12:5:6-12, w_mako:1, w_fieldmaster:0.8, a762:2:5-10, seed_ghostleaf:1.2:1-2, tool_toolbox:1.5, comp_fuel:2"),
            greenhouse: he("seed_tomato:10:2-5, seed_potato:6:2-5, farm_fert:8:1-2, seed_ghostleaf:3:1-3, crop_tomato:6:2-4, crop_ghostleaf:1.5:2-5"),
            petrol: he("comp_fuel:6, drink_cola:8, food_choc:8, food_crisps:8, elec_battery:5:1-3, elec_wire:4:1-2, comp_tape:4, money_cash:4:1-3, drink_volt:3, drink_water:5"),
            car: he("comp_scrap:6:1-3, drink_water:5, drink_cola:4, comp_fuel:2, tool_toolbox:1.5, a9:3:6-15, bag_school:2, money_cash:3:1-2, comp_tape:3, med_bandage:3, val_lighter:2, m_crowbar:1.5, elec_battery:3:1-3"),
            body: he("a9:6:5-15, a12:3:4-8, med_bandage:6, med_rag:4:1-2, food_beans:4, drink_water:4, money_cash:5:1-3, val_ring:3, w_ward9:2, bag_hiker:1.2, bag_school:2, m_knife:2, att_light:1.5, med_pills:3"),
            safe: he("money_cash:20:4-10, val_goldbar:3, val_watch:6, val_ring:6:1-3, val_intel:2, key_armory:1, val_gpu:1.5"),
            forest: he("food_apple:6:1-3, comp_rope:5, comp_cloth:4:1-3, med_rag:4, a762:2:5-10, a12:3:4-8, food_jerky:3:1-2, drink_canteen:2, w_fieldmaster:0.6, seed_duskbloom:0.35, seed_ghostleaf:0.8"),
            bin: he("comp_scrap:8:1-3, comp_cloth:8:1-2, food_crisps:5, comp_screws:5:1-4, elec_battery:3, comp_tape:2"),
            drop: he("w_vr556:5, w_vk74:5, w_brute12:2.5, w_longwatch:1.8, w_wraith:0.8, arm_plate:4, arm_riot:2, arm_aegis:0.4, hel_mil:4, bag_ruck:3, bag_raider:1, att_scope:3, att_supp:4, att_extmag:3, med_surgical:3, med_antiviral:2, food_mre:5, a556:5:30-60, a762:5:30-60, a338:3:10-20, val_gpu:2, val_goldbar:1.5"),
            boss: he("w_longwatch:4, w_brute12:4, w_wraith:2, arm_riot:3, arm_aegis:1.2, val_gpu:4, val_goldbar:4, med_antiviral:4, seed_duskbloom:3:1-2, bag_raider:2, a338:4:10-20"),
            zed_common: he("money_cash:6:1-2, val_ring:2, val_lighter:2, med_rag:5, med_bandage:3, food_crisps:3, a9:4:3-10, a12:2:2-5, comp_cloth:5:1-2, elec_battery:3"),
            zed_military: he("a556:8:8-20, a762:6:8-20, food_mre:3, med_bandage:4, med_firstaid:2, att_grip:1.5, att_reddot:1.5, val_intel:0.8, hel_mil:0.8, key_armory:0.35, comp_gunparts:2"),
            zed_police: he("a9:8:10-20, a12:5:5-10, arm_vest:2, med_bandage:4, key_police:0.8, att_light:2, money_cash:3:1-3")
        },
        ls = he("seed_duskbloom:2, val_goldbar:1, med_antiviral:1.5, att_supp:2, contra_brick:2");

    function Wr(i, e) {
        let t = i.weighted(e.map(s => ({
                w: s.w,
                v: s
            }))),
            a = C(t.id),
            r = t.min !== void 0 ? i.int(t.min, t.max ?? t.min) : 1,
            o = {
                uid: "",
                id: t.id,
                qty: Math.min(r, a.stack)
            };
        return a.weapon && (o.cond = Math.round(i.range(.35, .95) * 100) / 100, o.ammo = i.chance(.5) ? i.int(0, a.weapon.mag) : 0, o.mode = 0), a.armour && (o.cond = Math.round(i.range(.4, 1) * 100) / 100), a.melee && (o.cond = Math.round(i.range(.5, 1) * 100) / 100), o
    }

    function ai(i, e, t) {
        let a = ns[e];
        if (!a) return [];
        let r = i.int(t.count[0], t.count[1]);
        t.night && i.chance(.35) && (r += 1), t.bonus && (r = Math.round(r * t.bonus));
        let o = [];
        for (let s = 0; s < r; s++) {
            let d = Wr(i, a);
            if (!d) continue;
            let n = C(d.id),
                l = n.stack > 1 ? o.find(c => c.id === d.id && c.qty < n.stack) : void 0;
            l ? l.qty = Math.min(n.stack, l.qty + d.qty) : o.push(d)
        }
        if (t.night && i.chance(.06)) {
            let s = Wr(i, ls);
            s && o.push(s)
        }
        return o
    }
    var Br = {
            mx: 0,
            my: 0,
            aim: null,
            fire: !1,
            sprint: !1,
            crouch: !1
        },
        qa = {
            enemy: "Enemy!",
            zombie: "Zombie!",
            ammo: "Need ammo!",
            food: "Need food!",
            medicine: "Need medicine!",
            here: "Come here!",
            loot: "Loot here!",
            leave: "Let's leave!"
        };

    // Canvas detail passes use primitive shapes and cull to the visible world.
    function DZVehicleDetail(c,v,time) {
        const length=v.h, width=v.w, front=length*.43, rear=-length*.43;
        c.save();
        for(const x of [length*.25,-length*.28])for(const side of [-1,1]){
            c.save();c.translate(x,side*width*.44);
            if(x>0)c.rotate((v.steer??0)*.25);
            c.fillStyle="#101312";c.fillRect(-7,-4,14,8);c.fillStyle="#444b48";c.fillRect(-4,-3,8,6);c.restore();
        }
        c.fillStyle="#252b29";c.fillRect(front-3,-width*.38,5,width*.76);c.fillRect(rear-2,-width*.38,4,width*.76);
        c.fillStyle=v.driver?"#efdaa6":"#9c9681";for(const side of [-1,1])c.fillRect(front-3,side*width*.28-3,4,6);
        c.fillStyle="#983e35";for(const side of [-1,1])c.fillRect(rear-2,side*width*.28-3,3,6);
        c.strokeStyle="rgba(190,200,188,.24)";c.lineWidth=1;c.strokeRect(-length*.20,-width*.30,length*.34,width*.60);
        if(v.kind==="police_car"){
            c.fillStyle="#273743";c.fillRect(-8,-width*.38,16,width*.76);
            c.fillStyle=v.driver&&Math.sin(time*8)>0?"#8fafd0":"#3a526c";c.fillRect(-3,-width*.25,7,width*.22);
            c.fillStyle=v.driver&&Math.sin(time*8)<0?"#c16a5a":"#6a3831";c.fillRect(-3,width*.03,7,width*.22);
            c.fillStyle="#c8cbbb";c.font="700 7px sans-serif";c.textAlign="center";c.fillText("POLICE",-length*.16,2);
        } else if(v.kind==="van"){
            c.strokeStyle="#7b8179";c.strokeRect(-length*.30,-width*.30,length*.40,width*.60);
            c.fillStyle="#242e2c";c.fillRect(length*.10,-width*.30,length*.12,width*.60);
            c.fillStyle="#80796a";c.fillRect(-length*.18,-width*.15,3,10);
        } else if(v.kind==="mil_truck"){
            c.fillStyle="#444d37";c.fillRect(-length*.36,-width*.34,length*.46,width*.68);
            c.strokeStyle="#8b9271";for(let j=0;j<4;j++){c.beginPath();c.moveTo(-length*.30+j*10,-width*.32);c.lineTo(-length*.30+j*10,width*.32);c.stroke();}
            c.fillStyle="#9eaa86";c.font="9px sans-serif";c.fillText("✦",length*.18,3);
        } else if(v.kind==="tractor"){
            c.fillStyle="#293828";c.fillRect(-length*.20,-width*.27,length*.36,width*.54);
            c.fillStyle="#8a9579";c.fillRect(length*.1,-width*.12,length*.25,width*.24);
            c.fillStyle="#111711";c.fillRect(length*.18,-width*.26,5,8);
        }
        if(v.hp<70){c.strokeStyle=v.hp<35?"#9c4a39":"#776252";c.lineWidth=2;for(let j=0;j<3;j++){c.beginPath();c.moveTo(j*8-16,-width*.18+j*4);c.lineTo(j*8+2,width*.15-j*3);c.stroke();}}
        c.restore();
    }
    function DZSurvivorDetail(c,outfit){
        if(!outfit.detail)return;c.save();
        switch(outfit.detail){
            case "medic":c.fillStyle="#c9c9ba";c.fillRect(-6,-6,12,3);c.fillRect(-2,-10,4,11);c.fillStyle="#5d362f";c.fillRect(-10,1,5,7);break;
            case "mechanic":c.fillStyle="#695943";c.fillRect(-11,-8,6,16);c.fillStyle="#c2ae7a";c.fillRect(8,-10,4,5);c.fillRect(8,5,4,5);c.strokeStyle="#b39b72";c.lineWidth=3;c.beginPath();c.moveTo(-7,-8);c.lineTo(-7,6);c.lineTo(7,6);c.lineTo(7,-8);c.stroke();c.fillStyle="#9a9f95";c.fillRect(5,1,2,6);break;
            case "hazmat":c.fillStyle="#717446";c.beginPath();c.ellipse(-3,0,14,11,0,0,Q);c.fill();c.fillStyle="#1c2728";c.fillRect(6,-6,7,12);c.fillStyle="#969e89";c.beginPath();c.arc(12,7,3,0,Q);c.fill();break;
            case "police":c.fillStyle="#1d2934";c.fillRect(-8,-9,14,18);c.fillStyle="#b9bcb1";for(let j=0;j<5;j++)c.fillRect(-7+j*2.5,j%2?-7:5,2,2);c.strokeStyle="#a8b5b1";c.lineWidth=2;c.beginPath();c.arc(7,0,8,-1,1);c.stroke();c.fillStyle="#b8ba8a";c.fillRect(-6,-8,11,2);c.fillRect(-6,6,11,2);c.beginPath();c.arc(3,-3,2,0,Q);c.fill();break;
            case "military":c.fillStyle="#38422c";c.fillRect(-8,-8,14,16);c.fillStyle="#808962";for(let j=0;j<3;j++)c.fillRect(-5+j*4,-7,3,5);c.fillStyle="#586446";c.beginPath();c.ellipse(7,0,8,9,0,0,Q);c.fill();break;
            case "prestige":c.fillStyle="#333b35";c.fillRect(-9,-10,16,20);c.strokeStyle="#bfa26d";c.lineWidth=2;c.strokeRect(-9,-10,16,20);c.fillStyle="#a28a58";c.fillRect(-13,-10,5,7);c.fillRect(-13,3,5,7);break;
        }c.restore();
    }
    function DZDrawWorldDetails(renderer,c,x0,y0,x1,y1){
        const world=renderer.world,map=world.map;
        const minX=Math.max(0,Math.floor(x0/y)),maxX=Math.min(U-1,Math.ceil(x1/y));
        const minY=Math.max(0,Math.floor(y0/y)),maxY=Math.min(X-1,Math.ceil(y1/y));
        c.save();c.lineWidth=1;
        for(let ty=minY;ty<=maxY;ty++)for(let tx=minX;tx<=maxX;tx++){
            const index=Y(tx,ty);if(map.solid[index]||DZInsideSafe(world,(tx+.5)*y,(ty+.5)*y))continue;
            const hash=(Math.imul(tx+7,73856093)^Math.imul(ty+11,19349663))>>>0;
            const x=tx*y,yy=ty*y;
            if(map.roofOf[index]>=0){
                if(hash%23===0){c.fillStyle="rgba(126,95,68,.22)";c.fillRect(x+4,yy+5,y-8,y-10);c.strokeStyle="rgba(182,148,103,.15)";c.strokeRect(x+7,yy+8,y-14,y-16);}
                if(hash%37===0){c.fillStyle="#605c50";c.fillRect(x+5,yy+5,9,12);c.fillStyle="#85877b";c.fillRect(x+6,yy+6,7,3);}
                continue;
            }
            if(map.ground[index]===2){
                if(hash%7===0){c.strokeStyle="rgba(8,11,10,.5)";c.beginPath();c.moveTo(x+3,yy+6);c.lineTo(x+14,yy+17);c.lineTo(x+9,yy+25);c.stroke();}
                if(hash%17===0){c.fillStyle="rgba(6,8,8,.32)";c.beginPath();c.ellipse(x+16,yy+16,8,5,.3,0,Q);c.fill();}
                if(tx===80&&ty%3===0||ty===80&&tx%3===0){c.fillStyle="rgba(177,168,123,.38)";c.fillRect(x+14,yy+5,3,20);}
            }else if(hash%11===0){
                c.strokeStyle=hash%2?"rgba(86,107,65,.42)":"rgba(113,96,58,.38)";c.beginPath();c.moveTo(x+8,yy+20);c.lineTo(x+5,yy+12);c.moveTo(x+8,yy+20);c.lineTo(x+11,yy+11);c.stroke();
            }
            if(hash%41===0){c.fillStyle="#676657";c.fillRect(x+17,yy+13,4,3);c.fillStyle="#3b3c32";c.fillRect(x+21,yy+18,5,2);}
        }c.restore();
    }

    function DZInsideSafe(i, e, t, a = 0) {
        let r = i && i.safeZone;
        return !!r && e >= r.x + a && e <= r.x + r.w - a && t >= r.y + a && t <= r.y + r.h - a
    }

    function DZSetupSafeZone(i) {
        if (i.safeZone) return;
        let e = i.map,
            t = {
                tx0: 4,
                ty0: 70,
                tx1: 29,
                ty1: 91
            };
        t.x = t.tx0 * y, t.y = t.ty0 * y, t.w = (t.tx1 - t.tx0 + 1) * y, t.h = (t.ty1 - t.ty0 + 1) * y, t.cx = (t.tx0 + t.tx1 + 1) * .5 * y, t.cy = (t.ty0 + t.ty1 + 1) * .5 * y, t.spawnX = (t.tx0 + 7.5) * y, t.spawnY = (t.ty0 + 11) * y, t.gateTx = t.tx1, t.gateY0 = 79, t.gateY1 = 81, t.gateX = (t.gateTx + .5) * y, t.gateY = ((t.gateY0 + t.gateY1 + 1) * .5) * y, t.gateIds = [];
        i.safeZone = t;
        for(const door of e.doors)if(door.tx>=t.tx0&&door.tx<=t.tx1&&door.ty>=t.ty0&&door.ty<=t.ty1){door.inactive=true;door.open=true;door.openT=1;}
        let a = (r, o, s = 0) => r >= t.x - s && r <= t.x + t.w + s && o >= t.y - s && o <= t.y + t.h + s;
        for (let r = t.ty0; r <= t.ty1; r++)
            for (let o = t.tx0; o <= t.tx1; o++) {
                let s = Y(o, r);
                e.ground[s] = 2, e.solid[s] = 0, e.flags[s] = 0, e.roofOf[s] = -1, e.doorAt[s] = -1
            }
        for (let r of e.props) a(r.x + r.w / 2, r.y + r.h / 2, 24) && (r.blocks = !1, r.x = -1e4 - r.id * 4, r.y = -1e4);
        for (let r of e.containers) a(r.x + r.w / 2, r.y + r.h / 2, 24) && (r.blocks = !1, r.x = -12e3 - r.id * 4, r.y = -12e3);
        for (let r of e.trees) a(r.x, r.y, 32) && (r.cut = !0);
        for (let r = t.ty0; r <= t.ty1; r++)
            for (let o = t.tx0; o <= t.tx1; o++) {
                let s = o === t.tx0 || o === t.tx1 || r === t.ty0 || r === t.ty1;
                if (!s) continue;
                let d = Y(o, r),
                    n = o === t.gateTx && r >= t.gateY0 && r <= t.gateY1;
                if (n) {
                    e.solid[d] = 13, e.flags[d] = 0
                } else e.solid[d] = 1, e.flags[d] = be | Ie | at
            }
        for (let r = t.gateY0; r <= t.gateY1; r++) {
            let o = e.doors.length,
                s = {
                    id: o,
                    tx: t.gateTx,
                    ty: r,
                    vertical: !0,
                    locked: void 0,
                    open: !0,
                    openT: 1,
                    hp: 420,
                    building: -9001,
                    safeGate: !0
                };
            e.doors.push(s), e.doorAt[Y(t.gateTx, r)] = o, e.solid[Y(t.gateTx, r)] = 13, e.flags[Y(t.gateTx, r)] = 0, t.gateIds.push(o)
        }
        let r = (o, s, d, n, l = 0) => {
            let c = {
                id: e.props.length,
                kind: o,
                x: s,
                y: d,
                w: n.w,
                h: n.h,
                blocks: !0,
                v: n.v ?? l,
                rot: n.rot ?? 0,
                safeZone: !0
            };
            return e.props.push(c), c
        };
        r("van", (t.tx0 + 17) * y, (t.ty0 + 3) * y, {
            w: 58,
            h: 94,
            v: 1,
            rot: Math.PI / 2
        }), r("police_car", (t.tx0 + 20) * y, (t.ty0 + 3) * y, {
            w: 58,
            h: 94,
            v: 2,
            rot: Math.PI / 2
        });
        t.turrets = [{
            x: (t.tx0 + 1.6) * y,
            y: (t.ty0 + 1.6) * y,
            a: Math.PI * .25,
            baseA: Math.PI * .25,
            cd: .15
        }, {
            x: (t.tx1 - .6) * y,
            y: (t.ty0 + 1.6) * y,
            a: Math.PI * .75,
            baseA: Math.PI * .75,
            cd: .3
        }, {
            x: (t.tx0 + 1.6) * y,
            y: (t.ty1 - .6) * y,
            a: -Math.PI * .25,
            baseA: -Math.PI * .25,
            cd: .45
        }, {
            x: (t.tx1 - .6) * y,
            y: (t.ty1 - .6) * y,
            a: -Math.PI * .75,
            baseA: -Math.PI * .75,
            cd: .6
        }];
        t.guards = [{
            x: (t.tx1 - 2.3) * y,
            y: (t.gateY0 - .4) * y,
            a: 0,
            cd: .2,
            name: "MASON"
        }, {
            x: (t.tx1 - 2.3) * y,
            y: (t.gateY1 + 1.4) * y,
            a: 0,
            cd: .5,
            name: "REEVES"
        }, {
            x: (t.tx0 + 6) * y,
            y: (t.ty0 + 5) * y,
            a: Math.PI / 2,
            cd: .8,
            name: "ELLIS"
        }];
        t.stalls = [{
            x: (t.tx0 + 4) * y,
            y: (t.ty0 + 3) * y,
            w: 5 * y,
            h: 3 * y,
            label: "MARKET"
        }, {
            x: (t.tx0 + 4) * y,
            y: (t.ty0 + 7) * y,
            w: 5 * y,
            h: 3 * y,
            label: "MEDIC"
        }, {
            x: (t.tx0 + 11) * y,
            y: (t.ty0 + 3) * y,
            w: 5 * y,
            h: 3 * y,
            label: "STASH"
        }, {
            x: (t.tx0 + 17) * y,
            y: (t.ty0 + 10) * y,
            w: 6 * y,
            h: 4 * y,
            label: "GARAGE"
        }];
        const campX=t.x+7*y,campY=t.y+17*y;
        r("bench",campX-63,campY-38,{w:42,h:14});r("bench",campX+22,campY+24,{w:42,h:14});
        r("firebarrel",campX-11,campY-11,{w:22,h:22});
        for(let j=0;j<3;j++){r("barrel",t.x+2*y,t.y+(14+j)*y,{w:24,h:24});r("crate",t.x+(23+j*.65)*y,t.y+18*y,{w:22,h:22});}
        e.lights.push({x:campX,y:campY,r:130,color:"#d9a665",flicker:.025,kind:"safe"});
        e.lights.push({
            x: t.cx,
            y: t.cy,
            r: 330,
            color: "#cfd7cf",
            flicker: .08,
            kind: "safe"
        }, {
            x: t.gateX - 50,
            y: t.gateY,
            r: 170,
            color: "#e2b15f",
            flicker: .08,
            kind: "safe"
        }), ss(e)
    }

    function DZDefenceLOS(world,x1,y1,x2,y2) {
        const steps=Math.ceil(Math.hypot(x2-x1,y2-y1)/12), zone=world.safeZone;
        for(let n=1;n<steps;n++){
            const x=x1+(x2-x1)*n/steps, yy=y1+(y2-y1)*n/steps;
            const tx=Math.floor(x/y),ty=Math.floor(yy/y);
            const perimeter=zone&&(tx===zone.tx0||tx===zone.tx1||ty===zone.ty0||ty===zone.ty1)&&tx>=zone.tx0&&tx<=zone.tx1&&ty>=zone.ty0&&ty<=zone.ty1;
            if(!perimeter && (world.map.flags[Y(tx,ty)]&Ie))return false;
            if(zone.stalls.some(s=>x>s.x&&x<s.x+s.w&&yy>s.y&&yy<s.y+s.h))return false;
        }
        return true;
    }
    function DZSafeStep(i, e) {
        let t = i.safeZone;
        if (!t) return;
        for (let a of i.players) {
            let r = DZInsideSafe(i, a.x, a.y, -4);
            a.inSafeZone = r, r && (a.stamina = Math.min(100, a.stamina + e * 20), a.bleed > 0 && (a.bleed = Math.max(0, a.bleed - e * .12)))
        }
        for (let a of i.zombies)
            if (a.state !== "dead" && DZInsideSafe(i, a.x, a.y, -8)) {
                a.state = "wander", a.target = -1, a.hp -= e * 90;
                if (a.hp <= 0) i.killZombie(a, Math.atan2(a.y - t.cy, a.x - t.cx), null)
            } let a = (r, o, s, d, n) => {
            r.cd -= e; r.flash = Math.max(0,(r.flash??0)-e);
            let l = null,
                c = 1 / 0,
                u = s * s;
            for (let m of i.zombies) {
                if (m.state === "dead") continue;
                let p = qe(r.x, r.y, m.x, m.y);
                p < u && p < c && DZDefenceLOS(i,r.x,r.y,m.x,m.y) && (c = p, l = m)
            }
            if (l) {
                let m = Math.atan2(l.y - r.y, l.x - r.x);
                r.a += Tt(r.a, m) * (1 - Math.exp(-12 * e));
                if (r.cd <= 0 && Math.abs(Tt(r.a,m)) < .20) {
                    r.cd = d + (Math.random() * .08); r.flash = .09;
                    i.damageZombie(l, n, .95, m, null, !0), i.fx.push({
                        t: "tracer",
                        x1: r.x + Math.cos(m) * 18,
                        y1: r.y + Math.sin(m) * 18,
                        x2: l.x,
                        y2: l.y
                    }), r.shots = (r.shots ?? 0) + 1, r.shots % 3 === 1 && i.fx.push({
                        t: "shot",
                        pid: -90,
                        x: r.x,
                        y: r.y,
                        a: m,
                        w: "w_vr556",
                        sup: !1,
                        pellets: 1
                    })
                }
            } else r.a += Tt(r.a, (r.baseA ?? r.a)+Math.sin(i.time*.42+r.x*.01)*.38) * (1 - Math.exp(-3 * e))
        };
        for (let r of t.turrets) a(r, "turret", 620, .28, 28);
        for (let r of t.guards) {
            r.baseA = r.baseA ?? r.a;
            r.homeX ??= r.x; r.homeY ??= r.y;
            const destX=r.homeX+Math.sin(i.time*.12+r.homeY)*24;
            const destY=r.homeY+Math.sin(i.time*.09+r.homeX)*18;
            if(i.walkable(destX,destY,12)&&DZInsideSafe(i,destX,destY,24)){r.x=destX;r.y=destY;}
            a(r, "guard", 360, .62, 22)
        }
        let r = i.map.doors[t.gateIds[0]];
        if (r) {
            let o = i.zombies.some(s => s.state !== "dead" && qe(s.x, s.y, t.gateX, t.gateY) < 240 * 240),
                s = i.players.some(d => !d.dead && !d.extracted && qe(d.x, d.y, t.gateX, t.gateY) < 105 * 105);
            if (o && !s && r.open) {
                let d = i.setDoorGroup(r.id, !1);
                for (let n of d) i.fx.push({
                    t: "door",
                    id: n.id,
                    open: !1
                });
                i.broadcastNotice("Safe-zone gate locked down · infected at the perimeter", "warn")
            }
        }
    }

    function DZPaintSettlement(c,s,props){
        c.save();c.translate(-s.x,-s.y);
        c.fillStyle="#232824";c.fillRect(s.x,s.y,s.w,s.h);
        // Concrete wear, grass at the perimeter, and clear walking lanes.
        for(let k=0;k<130;k++){const x=s.x+14+(k*97%Math.floor(s.w-28)),yy=s.y+14+(k*149%Math.floor(s.h-28));c.fillStyle=k%3?"#2b302a":"#1a211c";c.fillRect(x,yy,4+k%9,2+k%4);}
        c.fillStyle="#414039";c.fillRect(s.x+32,s.gateY-40,s.w-64,80);c.fillRect(s.x+12*y,s.y+70,58,s.h-102);
        c.strokeStyle="#6c6654";c.lineWidth=2;for(let k=0;k<14;k++){c.beginPath();c.moveTo(s.x+48+k*53,s.gateY+40);c.lineTo(s.x+55+k*53,s.gateY+40);c.stroke();}
        for(const l of s.stalls){
            const x=l.x,yy=l.y,w=l.w,h=l.h; c.fillStyle="#0c100ddb";c.fillRect(x+8,yy+8,w,h);
            c.fillStyle=l.label==="MEDIC"?"#3e4e40":l.label==="GARAGE"?"#40484a":"#5a4a38";c.fillRect(x,yy,w,h);
            c.strokeStyle="#1a221d";c.lineWidth=2;for(let n=8;n<w;n+=12){c.beginPath();c.moveTo(x+n,yy+2);c.lineTo(x+n,yy+h-2);c.stroke();}
            c.fillStyle="#8a7859";c.fillRect(x,yy,w,7);c.fillStyle="#1d2821";c.fillRect(x,yy+h-24,w,24);
            c.strokeStyle="#9a8767";c.lineWidth=2;c.strokeRect(x+1,yy+1,w-2,h-2);
            c.fillStyle="#272c24";c.fillRect(x-6,yy+h-8,w+12,18);
            c.fillStyle="#b8b19b";c.font="800 11px 'Chakra Petch',sans-serif";c.textAlign="center";c.fillText(l.label,x+w/2,yy+19);
            if(l.label==="MARKET"){
                // Striped awning, two stocked trading counters and suspended lamps.
                for(let n=0;n<w;n+=18){c.fillStyle=(n/18)%2?"#747158":"#414c3d";c.fillRect(x+n,yy+26,Math.min(18,w-n),16);}
                for(let j=0;j<3;j++){const xx=x+12+j*49;c.fillStyle="#ad946a";c.fillRect(xx,yy+49,42,27);c.fillStyle="#382d21";c.fillRect(xx+2,yy+53,38,19);for(let k=0;k<4;k++){c.fillStyle=["#86916b","#b9a77d","#737d80","#83533c"][k];c.fillRect(xx+4+k*9,yy+57,6,9);}}
            }else if(l.label==="MEDIC"){
                c.fillStyle="#d6d5be";c.fillRect(x+w/2-4,yy+28,8,31);c.fillRect(x+w/2-15,yy+39,30,8);
                for(let j=0;j<2;j++){c.fillStyle="#1b231d";c.fillRect(x+16+j*97,yy+58,33,23);c.fillStyle="#bac0ae";c.fillRect(x+18+j*97,yy+61,29,16);c.fillStyle="#657567";c.fillRect(x+19+j*97,yy+64,7,10);}
            }else if(l.label==="STASH"){
                for(let j=0;j<4;j++){const xx=x+12+j*37;c.fillStyle="#34403a";c.fillRect(xx,yy+31,30,46);c.strokeStyle="#81907b";c.lineWidth=1;c.strokeRect(xx,yy+31,30,46);c.fillStyle="#cfbd83";c.fillRect(xx+23,yy+50,3,8);c.fillStyle="#aab39d";c.fillRect(xx+6,yy+37,11,3);}
            }else{
                c.fillStyle="#181f1d";c.fillRect(x+20,yy+32,w-40,h-59);c.strokeStyle="#737b70";c.lineWidth=2;for(let j=0;j<5;j++){c.beginPath();c.moveTo(x+25,yy+34+j*11);c.lineTo(x+w-25,yy+34+j*11);c.stroke();}
                c.fillStyle="#956d36";c.fillRect(x+w-43,yy+28,28,h-45);c.fillStyle="#b9b6a1";for(let j=0;j<4;j++)c.fillRect(x+w-37,yy+33+j*17,15,3);
                c.fillStyle="#b6a268";c.fillRect(x+15,yy+h-19,w-30,4);
            }
            for(const xx of [x+8,x+w-14]){c.fillStyle="#191e18";c.fillRect(xx,yy+h-5,6,7);c.fillStyle="#d1a45d";c.fillRect(xx+1,yy+h-5,4,3);}
        }
        // Watch platforms stay over the existing perimeter, leaving the gate clear.
        for(const [tx,ty] of [[s.tx0+1,s.ty0+1],[s.tx0+1,s.ty1-2],[s.tx1-2,s.ty1-2]]){
            const x=tx*y,yy=ty*y;c.fillStyle="#10160dcc";c.fillRect(x+6,yy+8,48,46);c.fillStyle="#5b5948";c.fillRect(x,yy,44,42);c.strokeStyle="#9c9170";c.lineWidth=3;c.strokeRect(x,yy,44,42);for(let j=7;j<42;j+=8){c.strokeStyle="#383e30";c.lineWidth=1;c.beginPath();c.moveTo(x+j,yy+3);c.lineTo(x+j,yy+39);c.stroke();}c.fillStyle="#beb18e";for(const dx of [0,39])for(const dy of [0,37])c.fillRect(x+dx,yy+dy,5,5);
        }
        const cx=s.x+7*y,cy=s.y+17*y;c.fillStyle="#39392b";c.beginPath();c.ellipse(cx,cy,75,57,0,0,Q);c.fill();c.fillStyle="#20251e";c.beginPath();c.arc(cx,cy,18,0,Q);c.fill();c.strokeStyle="#8a7754";c.lineWidth=5;c.stroke();
        // Compact grow beds and a water point along the southern wall.
        for(let j=0;j<3;j++){const x=s.x+(12+j*2.3)*y,yy=s.y+18.4*y;c.fillStyle="#85704c";c.fillRect(x,yy,58,36);c.fillStyle="#3c3325";c.fillRect(x+3,yy+3,52,30);for(let k=0;k<6;k++){c.fillStyle=k%2?"#758063":"#4b6346";c.beginPath();c.ellipse(x+10+k%3*18,yy+10+Math.floor(k/3)*16,6,4,0,0,Q);c.fill();}}
        // Settlement props have collision in the existing map; paint them above the new ground too.
        for(const prop of props)if(prop.safeZone&&!prop.driveable){const sprite=yt(prop.kind,prop.w,prop.h,prop.v);if(sprite){c.fillStyle="#0006";c.fillRect(prop.x+3,prop.y+4,prop.w,prop.h);c.drawImage(sprite,prop.x,prop.y,prop.w,prop.h);}}
        c.restore();
    }
    const DZSurvivorArtCells={o_fieldmedic:0,o_mechanic:1,o_cbrn:2,o_patrol:3,o_veteran:4,o_prestige:5};
    let DZSurvivorArtImage=null,DZSurvivorArtPromise=null;
    function DZLoadSurvivorArt(){
        if(!DZSurvivorArtPromise)DZSurvivorArtPromise=new Promise(resolve=>{const image=new Image();image.onload=()=>{DZSurvivorArtImage=image;resolve(image);};image.onerror=()=>resolve(null);image.src="assets/survivors-0510.png";});
        return DZSurvivorArtPromise;
    }
    function At(look,size=160,angle=-Math.PI/2){
        const canvas=DZTopPortrait(look,size,angle),cell=DZSurvivorArtCells[look.outfit];
        if(cell===undefined)return canvas;
        canvas.classList.add("survivor-art");canvas.setAttribute("aria-label",(ye.find(o=>o.id===look.outfit)?.name??"Survivor")+" portrait");
        const draw=image=>{if(!image)return;const c=canvas.getContext("2d"),w=image.naturalWidth/3,h=image.naturalHeight/2;c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,canvas.width,canvas.height);c.drawImage(image,(cell%3)*w,Math.floor(cell/3)*h,w,h,0,0,canvas.width,canvas.height);};
        if(DZSurvivorArtImage)draw(DZSurvivorArtImage);else DZLoadSurvivorArt().then(draw);
        return canvas;
    }

    function DZDrawSafeZone(i, e, t, a, r, o) {
        let s = i.world.safeZone;
        if (!s || s.x + s.w < t - 80 || s.x > r + 80 || s.y + s.h < a - 80 || s.y > o + 80) return;
        e.save();
        if(!i.safeArtCanvas){i.safeArtCanvas=pe(s.w,s.h);DZPaintSettlement(i.safeArtCanvas.getContext("2d"),s,i.world.map.props);}
        e.drawImage(i.safeArtCanvas,s.x,s.y);
        const fireX=s.x+7*y,fireY=s.y+17*y;e.fillStyle="#d99346";e.beginPath();e.moveTo(fireX-5,fireY+2);e.lineTo(fireX-2,fireY-5-Math.sin(i.time*4)*2);e.lineTo(fireX+5,fireY+2);e.fill();
        let n = (l, c, u, m) => {
            e.save(), e.translate(l, c), e.rotate(m || 0), e.fillStyle = "rgba(0,0,0,.32)", e.fillRect(-u / 2 + 4, -8, u, 20), e.fillStyle = "#555b59", e.fillRect(-u / 2, -11, u, 18), e.fillStyle = "#6b716e", e.fillRect(-u / 2 + 2, -9, u - 4, 3), e.fillStyle = "#2b302f";
            for (let p = -u / 2 + 8; p < u / 2; p += 17) e.fillRect(p, -14, 3, 24);
            e.restore()
        };
        for (let l = s.tx0; l <= s.tx1; l++) {
            if (l !== s.gateTx) n((l + .5) * y, (s.ty0 + .5) * y, y, 0), n((l + .5) * y, (s.ty1 + .5) * y, y, 0)
        }
        for (let l = s.ty0 + 1; l < s.ty1; l++) {
            n((s.tx0 + .5) * y, (l + .5) * y, y, Math.PI / 2);
            if (!(l >= s.gateY0 && l <= s.gateY1)) n((s.tx1 + .5) * y, (l + .5) * y, y, Math.PI / 2)
        }
        for(let side=0;side<2;side++){
            const gx=s.gateX-48, gy=s.gateY+(side?105:-105);
            e.fillStyle="#444b43";e.fillRect(gx-24,gy-18,48,36);e.strokeStyle="#868369";e.strokeRect(gx-24,gy-18,48,36);
            e.fillStyle=Math.sin(i.time*2.2)>0?"#ad7e3d":"#665334";e.fillRect(gx-3,gy-22,6,4);
            for(let j=0;j<4;j++){e.fillStyle=j%2?"#766e53":"#5f5a45";e.beginPath();e.ellipse(gx-19+j*12,gy+20,7,4,0,0,Q);e.fill();}
        }
        e.strokeStyle="rgba(204,191,144,.22)";e.lineWidth=2;
        for(let bay=0;bay<3;bay++)e.strokeRect(s.x+(17+bay*2.8)*y,s.y+2*y,2.4*y,4*y);
        e.fillStyle="#69674f";for(let j=0;j<5;j++)e.fillRect(s.x+2*y+j*22,s.y+s.h-2*y,16,12);
        let l = (c, u, m) => {
            e.save(), e.translate(c.x, c.y), e.rotate(c.a), e.fillStyle = "rgba(0,0,0,.35)", e.beginPath(), e.ellipse(3, 6, 18, 12, 0, 0, Q), e.fill(), e.fillStyle = "#333a39", e.fillRect(-9, -9, 18, 20), e.fillStyle = "#61705e", e.fillRect(-7, -12, 14, 7), e.fillStyle = "#c7aa8e", e.beginPath(), e.arc(0, -17, 6, 0, Q), e.fill(), e.strokeStyle = "#d3b46b", e.lineWidth = 3, e.beginPath(), e.moveTo(2, -6), e.lineTo(25, 0), e.stroke(), e.restore();
            e.fillStyle = "rgba(225,226,215,.65)", e.font = "700 8px 'Share Tech Mono',monospace", e.textAlign = "center", e.fillText(m, c.x, c.y + 27)
        };
        for (let c of s.guards) l(c, 0, "GUARD " + c.name);
        for(const defence of [...s.guards,...s.turrets])if(defence.flash>0){e.save();e.translate(defence.x,defence.y);e.rotate(defence.a);e.fillStyle="#efcf82";e.beginPath();e.moveTo(29,-4);e.lineTo(43,0);e.lineTo(29,4);e.fill();e.restore();}
        for (let c of s.turrets) {
            e.save(), e.translate(c.x, c.y), e.fillStyle = "rgba(0,0,0,.35)", e.beginPath(), e.ellipse(3, 6, 18, 12, 0, 0, Q), e.fill(), e.fillStyle = "#444b4b", e.fillRect(-9, -7, 18, 16), e.fillStyle = "#6a7270", e.beginPath(), e.arc(0, -7, 10, 0, Q), e.fill(), e.rotate(c.a), e.fillStyle = "#242827", e.fillRect(0, -3, 31, 6), e.fillStyle = "#c59d55", e.fillRect(24, -2, 8, 4), e.restore()
        }
        e.strokeStyle = "rgba(169,163,118,.28)", e.lineWidth = 2, e.setLineDash([10, 8]), e.lineDashOffset = 0, e.strokeRect(s.x + 14, s.y + 14, s.w - 28, s.h - 28), e.setLineDash([]), e.fillStyle = "rgba(8,11,10,.78)", e.fillRect(s.cx - 130, s.y + 22, 260, 35), e.strokeStyle = "rgba(116,188,120,.32)", e.strokeRect(s.cx - 130, s.y + 22, 260, 35), e.fillStyle = "#a6d6a8", e.font = "800 18px 'Chakra Petch',sans-serif", e.textAlign = "center", e.fillText("HARROW CUT SAFE ZONE", s.cx, s.y + 40), e.fillStyle = "rgba(230,220,198,.62)", e.font = "700 10px 'Share Tech Mono',monospace", e.fillText("GUARDS · AUTO TURRETS · MARKET · STASH · GARAGE", s.cx, s.y + 70), e.fillStyle = "rgba(225,174,91,.9)", e.fillRect(s.gateX - 8, s.gateY - 80, 6, 12), e.fillRect(s.gateX - 8, s.gateY + 68, 6, 12), e.fillStyle = "#e6c27c", e.font = "800 11px 'Share Tech Mono',monospace", e.save(), e.translate(s.gateX - 18, s.gateY), e.rotate(-Math.PI / 2), e.fillText("EAST GATE", 0, 0), e.restore(), e.restore()
    }
    const DZVehicleTuning = {
        police_car: {name:"Police Interceptor",max:340,reverse:95,accel:185,brake:285,drag:.30,steer:2.1,mass:1},
        van: {name:"Utility Van",max:240,reverse:70,accel:125,brake:225,drag:.34,steer:1.55,mass:1.5},
        tractor: {name:"Field Tractor",max:105,reverse:48,accel:110,brake:180,drag:.62,steer:1.05,mass:2.4},
        lorry: {name:"Cargo Lorry",max:180,reverse:55,accel:68,brake:160,drag:.38,steer:.90,mass:3},
        mil_truck: {name:"Military Transport",max:195,reverse:58,accel:82,brake:175,drag:.40,steer:1.0,mass:3.8}
    };
    var Vr = {
            clear: "Clear",
            overcast: "Overcast",
            rain: "Rain",
            fog: "Fog"
        },
        Gr = 128,
        ds = 206,
        cs = 70,
        Te = 64,
        rt = 128,
        Ur = 1350,
        hs = 62,
        us = 150,
        Rt = class {
            constructor(e) {
                v(this, "map");
                v(this, "rng");
                v(this, "opts");
                v(this, "time", 0);
                v(this, "clock");
                v(this, "raidLength");
                v(this, "players", []);
                v(this, "zombies", []);
                v(this, "bullets", []);
                v(this, "cstate");
                v(this, "ground", []);
                v(this, "fx", []);
                v(this, "events", []);
                v(this, "weather");
                v(this, "weatherT");
                v(this, "clouds", []);
                v(this, "activeExtracts");
                v(this, "explosives", []);
                v(this, "vehicles", []);
                v(this, "built", []);
                v(this, "over", !1);
                v(this, "nextZid", 1);
                v(this, "nextGid", 1);
                v(this, "rects", []);
                v(this, "rectBuckets", []);
                v(this, "treeBuckets", []);
                v(this, "stamp");
                v(this, "stampN", 1);
                v(this, "zgrid", new Map);
                v(this, "flows", new Map);
                v(this, "noiseHeat", 0);
                v(this, "hordeCd", 60);
                v(this, "spawnT", 4);
                v(this, "idCounter", 0);
                this.opts = e, this.rng = new et(e.seed), this.map = (() => {
                    let a = Oa(e.mapSeed ?? 1337);
                    return {
                        ...a,
                        ground: a.ground.slice(),
                        solid: a.solid.slice(),
                        flags: a.flags.slice(),
                        doorAt: a.doorAt.slice(),
                        roofOf: a.roofOf.slice(),
                        doors: a.doors.map(r => ({
                            ...r,
                            locked: void 0,
                            open: !1,
                            openT: 0,
                            hp: 100
                        })),
                        buildings: a.buildings.map(r => ({
                            ...r
                        })),
                        props: a.props.map(r => ({
                            ...r
                        })),
                        containers: a.containers.map(r => ({
                            ...r
                        })),
                        trees: a.trees.map(r => ({
                            ...r,
                            hp: r.hp ?? 4,
                            cut: !1
                        })),
                        extracts: a.extracts.map(r => ({
                            ...r
                        })),
                        zones: a.zones.map(r => ({
                            ...r
                        })),
                        lights: a.lights.map(r => ({
                            ...r
                        })),
                        spawns: a.spawns.map(r => ({
                            ...r
                        })),
                        decals: a.decals.map(r => ({
                            ...r
                        }))
                    }
                })(), DZSetupSafeZone(this), this.clock = e.startHour, this.raidLength = e.raidLength, this.weather = e.weather ?? this.rng.weighted([{
                    w: 5,
                    v: "clear"
                }, {
                    w: 3,
                    v: "overcast"
                }, {
                    w: 2,
                    v: "rain"
                }, {
                    w: 1.4,
                    v: "fog"
                }]), this.weatherT = this.rng.range(200, 420), this.cstate = this.map.containers.map(() => ({
                    opened: !1,
                    items: null,
                    unlocked: !1
                })), this.explosives = this.map.props.filter(a => a.explosive), (() => {
                    let a = new Set(["van", "police_car", "tractor", "lorry", "mil_truck"]);
                    for (let r of [...this.map.props].sort((a,b)=>Number(!!b.safeZone)-Number(!!a.safeZone)))
                        if (a.has(r.kind) && this.vehicles.length < 10) {
                            r.driveable = !0, r.blocks = !1;
                            let o = this.vehicles.length;
                            this.vehicles.push({
                                id: o,
                                kind: r.kind,
                                x: r.x + r.w / 2,
                                y: r.y + r.h / 2,
                                a: r.rot ?? 0,
                                w: r.w,
                                h: r.h,
                                r: Math.max(r.w, r.h) * .42,
                                speed: 0,
                                driver: 0,
                                fuel: 100,
                                hp: 100,
                                variant: r.v,
                                noiseT: 0,
                                prop: r
                            })
                        }
                })(), this.stamp = new Uint32Array(this.map.props.length + this.map.containers.length + 8), this.buildCollision();
                let t = this.map.extracts.filter(a => !a.always).map(a => a.id);
                this.rng.shuffle(t), this.activeExtracts = new Set([t[0], t[1], ...this.map.extracts.filter(a => a.always).map(a => a.id)]), e.tutorial && (this.activeExtracts = new Set(["north", "marsh", "lorry", "gate", "flare"])), this.populate(), e.events !== !1 && this.scheduleEvents()
            }
            uid(e = "w") {
                return this.idCounter++, e + this.opts.seed.toString(36) + "_" + this.idCounter.toString(36)
            }
            buildCollision() {
                this.rects = [];
                let e = U * X,
                    t = Array.from({
                        length: e
                    }, () => []),
                    a = Array.from({
                        length: e
                    }, () => []),
                    r = o => {
                        let s = this.rects.length;
                        this.rects.push(o);
                        let d = Math.max(0, Math.floor(o.x / y)),
                            n = Math.max(0, Math.floor(o.y / y)),
                            l = Math.min(U - 1, Math.floor((o.x + o.w) / y)),
                            c = Math.min(X - 1, Math.floor((o.y + o.h) / y));
                        for (let u = n; u <= c; u++)
                            for (let m = d; m <= l; m++) t[u * U + m].push(s)
                    };
                for (let o of this.map.props) o.blocks && r({
                    x: o.x,
                    y: o.y,
                    w: o.w,
                    h: o.h
                });
                for (let o of this.map.containers) o.blocks && r({
                    x: o.x,
                    y: o.y,
                    w: o.w,
                    h: o.h
                });
                this.map.trees.forEach((o, s) => {
                    if (o.cut) return;
                    let d = Math.floor(o.x / y),
                        n = Math.floor(o.y / y);
                    d >= 0 && n >= 0 && d < U && n < X && a[n * U + d].push(s)
                }), this.rectBuckets = t.map(o => Int32Array.from(o)), this.treeBuckets = a.map(o => Int32Array.from(o)), this.stamp = new Uint32Array(this.rects.length + 1)
            }
            collide(e, t) {
                for (let a = 0; a < 2; a++) {
                    let r = Math.floor((e.x - t) / y),
                        o = Math.floor((e.x + t) / y),
                        s = Math.floor((e.y - t) / y),
                        d = Math.floor((e.y + t) / y);
                    this.stampN++;
                    for (let c = s; c <= d; c++)
                        for (let u = r; u <= o; u++) {
                            if (u < 0 || c < 0 || u >= U || c >= X) {
                                this.pushRect(e, t, u * y, c * y, y, y);
                                continue
                            }
                            let m = c * U + u;
                            this.map.flags[m] & be && this.pushRect(e, t, u * y, c * y, y, y);
                            let p = this.rectBuckets[m];
                            for (let f = 0; f < p.length; f++) {
                                let b = p[f];
                                if (this.stamp[b] === this.stampN) continue;
                                this.stamp[b] = this.stampN;
                                let x = this.rects[b];
                                this.pushRect(e, t, x.x, x.y, x.w, x.h)
                            }
                        }
                    let n = Math.floor(e.x / y),
                        l = Math.floor(e.y / y);
                    for (let c = l - 1; c <= l + 1; c++)
                        for (let u = n - 1; u <= n + 1; u++) {
                            if (u < 0 || c < 0 || u >= U || c >= X) continue;
                            let m = this.treeBuckets[c * U + u];
                            for (let p = 0; p < m.length; p++) {
                                let f = this.map.trees[m[p]];
                                if (f.cut) continue;
                                let b = e.x - f.x,
                                    x = e.y - f.y,
                                    k = t + f.trunk,
                                    M = b * b + x * x;
                                if (M < k * k && M > 1e-4) {
                                    let R = Math.sqrt(M);
                                    e.x = f.x + b / R * k, e.y = f.y + x / R * k
                                }
                            }
                        }
                }
                for (let a of this.vehicles) {
                    if (a.hp <= 0 || e.vehicle === a.id) continue;
                    let r = e.x - a.x,
                        o = e.y - a.y,
                        s = t + a.r,
                        d = r * r + o * o;
                    if (d < s * s && d > 1e-4) {
                        let n = Math.sqrt(d);
                        e.x = a.x + r / n * s, e.y = a.y + o / n * s
                    }
                }
                e.x = V(e.x, t, Gt - t), e.y = V(e.y, t, Ut - t)
            }
            pushRect(e, t, a, r, o, s) {
                let d = V(e.x, a, a + o),
                    n = V(e.y, r, r + s),
                    l = e.x - d,
                    c = e.y - n,
                    u = l * l + c * c;
                if (u >= t * t) return;
                if (u < 1e-4) {
                    let p = e.x - a,
                        f = a + o - e.x,
                        b = e.y - r,
                        x = r + s - e.y,
                        k = Math.min(p, f, b, x);
                    k === p ? e.x = a - t : k === f ? e.x = a + o + t : k === b ? e.y = r - t : e.y = r + s + t;
                    return
                }
                let m = Math.sqrt(u);
                e.x = d + l / m * t, e.y = n + c / m * t
            }
            vehicle(e) {
                return this.vehicles.find(t => t.id === e)
            }
            enterVehicle(e, t) {
                let a = this.vehicle(t);
                if (!a || a.driver && a.driver !== e.id || a.hp <= 0 || qe(e.x, e.y, a.x, a.y) > 85 * 85 || !this.canSee(e.x,e.y,a.x,a.y)) return !1;
                a.driver = e.id, e.vehicle = a.id, e.x = a.x, e.y = a.y, e.vx = e.vy = 0, this.fx.push({
                    t: "notice",
                    pid: e.id,
                    text: `Driving ${a.kind.replaceAll("_"," ")}. USE to exit.`,
                    kind: "info"
                }), this.fx.push({
                    t: "vehicle",
                    pid: e.id,
                    id: a.id,
                    on: !0
                });
                return !0
            }
            exitVehicle(e) {
                let t = this.vehicle(e.vehicle);
                if (!t) return e.vehicle = -1, !1;
                let a = [Math.PI / 2, -Math.PI / 2, Math.PI, 0];
                for (let r of a) {
                    let o = t.x + Math.cos(t.a + r) * (t.r + 26),
                        s = t.y + Math.sin(t.a + r) * (t.r + 26),
                        d = {
                            x: o,
                            y: s,
                            vehicle: t.id
                        };
                    this.collide(d, e.r);
                    if (Math.hypot(d.x - o, d.y - s) < 2) {
                        e.vehicle = -1, t.driver = 0, e.x = d.x, e.y = d.y, e.vx = e.vy = 0, this.fx.push({
                            t: "vehicle",
                            pid: e.id,
                            id: t.id,
                            on: !1
                        });
                        return !0
                    }
                }
                this.fx.push({
                    t: "notice",
                    pid: e.id,
                    text: "No room to exit here",
                    kind: "warn"
                });
                return !1
            }
            stepVehicle(e, t) {
                let a = this.vehicle(e.vehicle);
                if (!a || a.driver !== e.id || a.hp <= 0) {
                    e.vehicle = -1;
                    return
                }
                const tuning = DZVehicleTuning[a.kind] ?? DZVehicleTuning.van;
                const throttle = V(-e.input.my,-1,1), steer = V(e.input.mx,-1,1);
                const braking = throttle * a.speed < -2;
                if (braking) {
                    const delta = tuning.brake * Math.abs(throttle) * t;
                    a.speed = Math.sign(a.speed) * Math.max(0,Math.abs(a.speed)-delta);
                } else if (a.fuel > 0) a.speed += throttle * tuning.accel * t;
                a.speed *= Math.exp(-tuning.drag*t);
                if (Math.abs(throttle)<.08 && Math.abs(a.speed)<1.5) a.speed=0;
                a.speed=V(a.speed,-tuning.reverse,tuning.max);
                a.steer=(a.steer??0)+(steer-(a.steer??0))*(1-Math.exp(-6*t));
                const traction=Math.min(1,Math.abs(a.speed)/35);
                const highSpeed=1/(1+Math.abs(a.speed)/tuning.max*1.8);
                a.a += a.steer*tuning.steer*traction*highSpeed*t*Math.sign(a.speed);
                let l = a.x + Math.cos(a.a) * a.speed * t,
                    c = a.y + Math.sin(a.a) * a.speed * t,
                    u = {
                        x: l,
                        y: c,
                        vehicle: a.id
                    };
                this.collide(u, a.r);
                let m = Math.hypot(u.x - l, u.y - c);
                m > 2 && (a.hp = Math.max(0,a.hp - Math.min(8,Math.abs(a.speed)*.018/(DZVehicleTuning[a.kind]?.mass??1))), a.speed *= .12), a.x = u.x, a.y = u.y, a.prop && (a.prop.x = a.x - a.w / 2, a.prop.y = a.y - a.h / 2, a.prop.rot = a.a), e.x = a.x, e.y = a.y, e.angle = a.a, e.moving = Math.abs(a.speed) > 4, e.sprinting = !1, e.crouch = !1, e.vx = Math.cos(a.a) * a.speed, e.vy = Math.sin(a.a) * a.speed, a.fuel = Math.max(0, a.fuel - Math.abs(a.speed) * t * .0018);
                if (Math.abs(a.speed) > 70) this.queryZombies(a.x, a.y, a.r + 34, p => {
                    if (p.state === "dead" || p._vehHit && this.time - p._vehHit < .45) return;
                    p._vehHit = this.time;
                    let f = Math.abs(a.speed) * .48;
                    this.damageZombie(p, f, .7, a.a, e, !1), a.speed *= .82
                });
                a.noiseT -= t, a.noiseT <= 0 && Math.abs(a.speed) > 25 && (a.noiseT = .55, this.emitNoise(a.x, a.y, 260 + Math.abs(a.speed) * 1.8, !1))
            }
            walkable(e, t, a = 14) {
                let r = {
                    x: e,
                    y: t
                };
                return this.collide(r, a), Math.abs(r.x - e) < .5 && Math.abs(r.y - t) < .5 && !(this.map.flags[Y(Math.floor(e / y), Math.floor(t / y))] & be)
            }
            canSee(e, t, a, r) {
                return Ji(this.map, e, t, a, r, Ie)
            }
            light() {
                let e = (this.clock % 24 + 24) % 24;
                return e >= 6.5 && e < 18.5 ? 1 : e >= 21 || e < 4.5 ? 0 : e >= 4.5 && e < 6.5 ? (e - 4.5) / 2 : 1 - (e - 18.5) / 2.5
            }
            isNight() {
                return this.light() < .35
            }
            visionMul() {
                let e = .55 + .45 * this.light();
                return this.weather === "fog" && (e *= .62), this.weather === "rain" && (e *= .9), e
            }
            addPlayer(e, t, a, r, o, s, d = []) {
                let n = this.safeZone ? {
                        x: this.safeZone.spawnX,
                        y: this.safeZone.spawnY
                    } : this.map.spawns[s ?? this.rng.int(0, this.map.spawns.length - 1)],
                    l = this.players.length * 26,
                    c = {
                        id: e,
                        name: t,
                        team: a,
                        x: n.x + l,
                        y: n.y + (l ? 18 : 0),
                        vx: 0,
                        vy: 0,
                        angle: Math.atan2(Ut / 2 - n.y, Gt / 2 - n.x),
                        r: 12,
                        hp: V(o.hp, 20, 100),
                        stamina: 100,
                        hunger: V(o.hunger, 5, 100),
                        thirst: V(o.thirst, 5, 100),
                        infection: V(o.infection, 0, 100),
                        bleed: 0,
                        immune: 0,
                        boost: 0,
                        hot: 0,
                        exhausted: !1,
                        crouch: !1,
                        sprinting: !1,
                        moving: !1,
                        downed: !1,
                        downedT: 0,
                        dead: !1,
                        extracted: !1,
                        cause: "",
                        killer: "",
                        lo: r,
                        active: r.equip.primary ? "primary" : r.equip.sidearm ? "sidearm" : r.equip.secondary ? "secondary" : "melee",
                        lastGun: "primary",
                        fireCd: 0,
                        reloadT: 0,
                        reloadTotal: 0,
                        meleeCd: 0,
                        meleeT: 0,
                        useT: 0,
                        useTotal: 0,
                        useUid: null,
                        bloom: 0,
                        searching: null,
                        openContainer: -1,
                        openGround: -1,
                        extractT: 0,
                        extractId: null,
                        light: !1,
                        stepT: 0,
                        hitT: 99,
                        hitDir: 0,
                        jammed: !1,
                        stats: {
                            zkills: 0,
                            pkills: 0,
                            shots: 0,
                            hits: 0,
                            dmgDealt: 0,
                            distance: 0,
                            searched: 0,
                            rares: [],
                            xp: 0,
                            bosses: 0,
                            missionsHit: {}
                        },
                        input: {
                            ...Br
                        },
                        cmds: [],
                        aliveT: 0,
                        insured: d,
                        speedMul: 1,
                        animT: 0,
                        recoilKick: 0,
                        lastFireT: -9,
                        vehicle: -1,
                        wood: 0
                    };
                return this.collide(c, c.r), r.equip.melee || (r.equip.melee = {
                    uid: this.uid("m"),
                    id: "m_knife",
                    qty: 1,
                    cond: 1
                }), this.players.push(c), DZInsideSafe(this, c.x, c.y) && this.fx.push({
                    t: "notice",
                    pid: c.id,
                    text: "Harrow Cut Safe Zone · protected by guards and automated turrets",
                    kind: "good"
                }), this.zombies = this.zombies.filter(u => qe(u.x, u.y, c.x, c.y) > 520 * 520 || u.type === "brute"), c
            }
            player(e) {
                return this.players.find(t => t.id === e)
            }
            setInput(e, t) {
                let a = this.player(e);
                a && (a.input = {
                    mx: V(Number(t.mx) || 0, -1, 1),
                    my: V(Number(t.my) || 0, -1, 1),
                    aim: t.aim === null || t.aim === void 0 || !isFinite(t.aim) ? null : Number(t.aim),
                    fire: !!t.fire,
                    sprint: !!t.sprint,
                    crouch: !!t.crouch
                })
            }
            command(e, t) {
                let a = this.player(e);
                a && a.cmds.length < 32 && a.cmds.push(t)
            }
            applyCommands(e) {
                let t = this.player(e);
                if (!(!t || t.dead || t.extracted || t.downed))
                    for (let a of t.cmds.splice(0)) this.handleCommand(t, a)
            }
            activeItem(e) {
                return e.lo.equip[e.active]
            }
            step(e) {
                if (!this.over) {
                    this.time += e, this.clock += e / 120, this.weatherT -= e, this.weatherT <= 0 && this.changeWeather();
                    for (let t of this.map.doors) t.openT += ((t.open ? 1 : 0) - (t.openT ?? (t.open ? 1 : 0))) * (1 - Math.exp(-12 * e));
                    this.buildZGrid();
                    for (let t of this.players) this.stepPlayer(t, e);
                    if (this.stepZombies(e), DZSafeStep(this, e), this.stepBullets(e), this.stepClouds(e), this.stepEvents(e), this.stepGround(e), this.noiseHeat = Math.max(0, this.noiseHeat - e * 2.2), this.hordeCd -= e, this.spawnT -= e, this.spawnT <= 0 && (this.spawnT = 3, this.maintainPopulation()), this.time >= this.raidLength)
                        for (let t of this.players) !t.dead && !t.extracted && this.killPlayer(t, "Missing in action", "");
                    this.players.length && this.players.every(t => t.dead || t.extracted) && (this.over = !0)
                }
            }
            changeWeather() {
                let e = ["clear", "overcast", "rain", "fog"],
                    t = this.rng.pick(e.filter(r => r !== this.weather));
                this.weather = t, this.weatherT = this.rng.range(220, 480);
                let a = {
                    clear: "The weather is clearing.",
                    overcast: "Clouds are rolling in.",
                    rain: "Rain is masking your footsteps.",
                    fog: "Fog is closing in. Visibility is poor."
                };
                this.broadcastNotice(a[t], "info")
            }
            broadcastNotice(e, t) {
                for (let a of this.players) this.fx.push({
                    t: "notice",
                    pid: a.id,
                    text: e,
                    kind: t
                })
            }
            giveXp(e, t, a) {
                e.stats.xp += t, this.fx.push({
                    t: "xp",
                    pid: e.id,
                    n: t,
                    why: a
                })
            }
            stepPlayer(e, t) {
                if (e.dead || e.extracted) {
                    e.cmds.length = 0;
                    return
                }
                if (e.aliveT += t, e.hitT += t, e.animT += t, e.recoilKick = Math.max(0, e.recoilKick - t * 8), e.downed) {
                    e.downedT -= t, e.vx = e.vy = 0, e.cmds.length = 0, e.downedT <= 0 && this.killPlayer(e, e.cause || "Bled out", e.killer);
                    return
                }
                for (let _ of e.cmds.splice(0)) this.handleCommand(e, _);
                let a = e.input,
                    r = e.sprinting ? 1.8 : 1;
                if (e.hunger = Math.max(0, e.hunger - t * (100 / 2700)), e.thirst = Math.max(0, e.thirst - t * (100 / 2e3) * r), e.hunger <= 0 && this.damagePlayer(e, t * .3, "Starvation", 0, 0, 0, "", !0), e.thirst <= 0 && this.damagePlayer(e, t * .35, "Dehydration", 0, 0, 0, "", !0), e.bleed > 0 && this.damagePlayer(e, t * [0, .4, .8, 1.4][Math.min(3, e.bleed)], "Blood loss", 0, 0, 0, "", !0), e.immune > 0 && (e.immune -= t), e.infection > 0 && e.immune <= 0 && (e.infection = Math.min(100, e.infection + t * .12)), e.infection >= 60 && this.damagePlayer(e, t * (e.infection >= 99 ? .9 : .18), "Infection", 0, 0, 0, "", !0), e.hot > 0) {
                    let _ = Math.min(e.hot, t * 1.2);
                    e.hot -= _, e.hp = Math.min(100, e.hp + _)
                }
                if (e.hunger > 40 && e.thirst > 40 && e.bleed === 0 && e.infection < 30 && e.hitT > 10 && (e.hp = Math.min(100, e.hp + t * .1)), e.boost > 0 && (e.boost -= t), e.dead || e.downed) return;
                if (e.vehicle >= 0) {
                    this.stepVehicle(e, t);
                    return
                }
                let o = a.mx,
                    s = a.my,
                    d = Math.hypot(o, s);
                d > 1 && (o /= d, s /= d);
                let n = d > .12;
                e.moving = n, e.crouch = a.crouch && !a.sprint;
                let l = Vi(e.lo),
                    c = Math.max(0, l - vi),
                    u = V(1 - c * .025, .6, 1),
                    m = a.sprint && n && !e.crouch && e.useT <= 0;
                e.stamina <= 2 && (e.exhausted = !0), e.exhausted && e.stamina > 25 && (e.exhausted = !1), e.sprinting = m && !e.exhausted && e.reloadT <= 0;
                let p = e.hunger < 20 || e.thirst < 20;
                e.sprinting && e.boost <= 0 ? e.stamina = Math.max(0, e.stamina - t * 15 * (c > 0 ? 1.4 : 1)) : e.stamina = Math.min(100, e.stamina + t * (n ? 14 : 22) * (p ? .5 : 1));
                let f = this.activeItem(e),
                    b = f && C(f.id).weapon ? ge(f).move : 1,
                    x = e.sprinting ? ds : e.crouch ? cs : Gr;
                x *= Math.min(1, d) * b * u, e.boost > 0 && (x *= 1.12), e.useT > 0 && (x *= .45), e.searching && n && (e.searching = null), e.hp < 25 && (x *= .88), e.speedMul = x / Gr;
                let k = n ? o * x : 0,
                    M = n ? s * x : 0,
                    R = 1 - Math.exp(-14 * t);
                e.vx += (k - e.vx) * R, e.vy += (M - e.vy) * R;
                let w = e.x,
                    P = e.y;
                e.x += e.vx * t, e.y += e.vy * t, this.collide(e, e.r);
                let g = Math.hypot(e.x - w, e.y - P);
                if (e.stats.distance += g, n && g < x * t * .35) {
                    let _ = e.x + o * (e.r + 10),
                        H = e.y + s * (e.r + 10),
                        B = this.map.doorAt[Y(V(Math.floor(_ / y), 0, U - 1), V(Math.floor(H / y), 0, X - 1))];
                    if (B >= 0) {
                        let se = this.map.doors[B];
                        se.open || (se.locked && !this.hasItem(e, se.locked) ? (e.stepT < .1 && this.fx.push({
                            t: "notice",
                            pid: e.id,
                            text: `Locked. Needs ${C(se.locked).name}.`,
                            kind: "warn"
                        }), e.stepT = 1.2) : (() => {
                            let q = this.doorGroup(se.id);
                            for (let j of q) j.locked = void 0;
                            this.setDoorGroup(se.id, !0);
                            for (let j of q) this.fx.push({
                                t: "door",
                                id: j.id,
                                open: !0
                            });
                            this.emitNoise((se.tx + .5) * y, (se.ty + .5) * y, 80, !1)
                        })())
                    }
                }
                if (n && g > .2 && (e.stepT -= t * (e.sprinting ? 2.2 : e.crouch ? .9 : 1.5), e.stepT <= 0)) {
                    e.stepT = .55, this.fx.push({
                        t: "step",
                        pid: e.id,
                        x: e.x,
                        y: e.y,
                        sprint: e.sprinting
                    });
                    let _ = e.sprinting ? 240 : e.crouch ? 40 : 110;
                    this.emitNoise(e.x, e.y, _ * (this.weather === "rain" ? .7 : 1), !1)
                }
                let S = null,
                    T = f && C(f.id).weapon ? ge(f) : null;
                if (a.aim !== null) {
                    S = a.aim;
                    let _ = .25 + (T?.assist ?? 0),
                        H = this.assistTarget(e, a.aim, (8 + _ * 10) * (Math.PI / 180), T ? T.range * 1.1 : 120);
                    H && (S = a.aim + Tt(a.aim, Math.atan2(H.y - e.y, H.x - e.x)) * V(.35 + _ * .5, 0, .8)), e.angle = S
                } else if (a.fire) {
                    let _ = n ? Math.atan2(s, o) : e.angle,
                        H = this.assistTarget(e, _, 55 * Math.PI / 180, T ? T.range : 90) ?? this.assistTarget(e, _, Math.PI, T ? Math.min(T.range, 360) : 90);
                    S = H ? Math.atan2(H.y - e.y, H.x - e.x) : _, e.angle = S
                } else if (n) {
                    let _ = Math.atan2(s, o);
                    e.angle += Tt(e.angle, _) * (1 - Math.exp(-12 * t))
                }
                e.fireCd = Math.max(0, e.fireCd - t), e.meleeCd = Math.max(0, e.meleeCd - t), e.meleeT = Math.max(0, e.meleeT - t), e.bloom = Math.max(0, e.bloom - t * 16), e.reloadT > 0 && (e.reloadT -= t, e.reloadT <= 0 && this.finishReload(e)), e.useT > 0 && (e.useT -= t, e.useT <= 0 && this.finishUse(e)), e.searching && (e.searching.t += t, e.searching.t >= e.searching.total && this.finishSearch(e)), a.fire && S !== null && e.useT <= 0 && !e.searching && (e.active === "melee" || !T ? this.tryMelee(e, S) : this.tryFire(e, S));
                let A = null;
                for (let _ of this.map.extracts) this.activeExtracts.has(_.id) && qe(e.x, e.y, _.x, _.y) < _.r * _.r && (A = _.id);
                if (A) {
                    let _ = this.map.extracts.find(H => H.id === A);
                    if (_.req && !this.hasItem(e, _.req) && !(e.extractId === A && e.extractT > 0)) e.extractId !== A && this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: `${_.name} needs ${C(_.req).name}`,
                        kind: "warn"
                    }), e.extractId = A, e.extractT = 0;
                    else {
                        (e.extractId !== A || e.extractT <= 0) && (e.extractId = A, e.extractT = 1e-4, _.req === "tool_flare" && (this.consumeItemId(e, "tool_flare"), this.emitNoise(_.x, _.y, 1400, !0), this.map.lights.push({
                            x: _.x,
                            y: _.y,
                            r: 260,
                            color: "#ff4a3a",
                            flicker: .8,
                            kind: "flare"
                        }), this.fx.push({
                            t: "notice",
                            pid: e.id,
                            text: "Flare fired. Hold out for pickup \u2014 they heard it.",
                            kind: "warn"
                        }))), e.extractT += t;
                        let H = _.req === "tool_flare" ? 20 : 8;
                        e.extractT >= H && this.extractPlayer(e, _.name)
                    }
                } else e.extractId && (e.extractId = null, e.extractT = 0)
            }
            extractTime(e) {
                return e.extractId ? this.map.extracts.find(a => a.id === e.extractId)?.req === "tool_flare" ? 20 : 8 : 0
            }
            extractPlayer(e, t) {
                e.extracted = !0, e.cause = t, e.searching = null;
                let a = this.carriedValue(e);
                this.giveXp(e, 120 + Math.round(a / 120), "Extracted"), this.fx.push({
                    t: "extracted",
                    pid: e.id
                })
            }
            carriedValue(e) {
                let t = 0;
                for (let a of we(e.lo)) t += le(a);
                return t
            }
            hasItem(e, t) {
                return we(e.lo).some(a => a.id === t)
            }
            consumeItemId(e, t) {
                for (let a of de(e.lo)) {
                    let r = a.items.find(o => o.item.id === t);
                    if (r) return Ui(e.lo, r.item.uid), !0
                }
                return !1
            }
            assistTarget(e, t, a, r) {
                let o = null,
                    s = 1 / 0,
                    d = r * r;
                return this.queryZombies(e.x, e.y, r, n => {
                    if (n.state === "dead") return;
                    let l = qe(e.x, e.y, n.x, n.y);
                    if (l > d) return;
                    let c = Math.atan2(n.y - e.y, n.x - e.x),
                        u = Math.abs(Tt(t, c));
                    if (u > a || !this.canSee(e.x, e.y, n.x, n.y)) return;
                    let m = Math.sqrt(l) * (1 + u * 1.6) * (n.state === "chase" || n.state === "attack" ? .7 : 1);
                    m < s && (s = m, o = n)
                }), o
            }
            tryFire(e, t) {
                if (DZInsideSafe(this, e.x, e.y, -8)) {
                    e.fireCd = .18, e._safeWarn = (e._safeWarn ?? 0) - .18, e._safeWarn <= 0 && (this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: "Weapons are secured inside the safe zone",
                        kind: "info"
                    }), e._safeWarn = 3);
                    return
                }
                let a = this.activeItem(e),
                    r = ge(a);
                if (e.fireCd > 0 || e.reloadT > 0) return;
                if (e.jammed) {
                    e.fireCd = .3, this.fx.push({
                        t: "empty",
                        pid: e.id
                    });
                    return
                }
                if ((a.ammo ?? 0) <= 0) {
                    Nt(e.lo, r.cal) > 0 ? this.startReload(e) : (e.fireCd = .35, this.fx.push({
                        t: "empty",
                        pid: e.id
                    }));
                    return
                }
                let o = r.modes[a.mode ?? 0] ?? "semi";
                e.fireCd = 60 / r.rpm, o === "semi" && r.rpm > 300 && (e.fireCd = Math.max(e.fireCd, .14)), a.ammo = (a.ammo ?? 0) - 1, a.cond = Math.max(0, (a.cond ?? 1) - 1 / r.dur), (a.cond ?? 1) < .3 && this.rng.chance(.02 + (.3 - (a.cond ?? 1)) * .1) && (e.jammed = !0, this.fx.push({
                    t: "notice",
                    pid: e.id,
                    text: "Weapon jammed! Reload to clear.",
                    kind: "warn"
                })), e.stats.shots++, e.lastFireT = this.time;
                let s = r.spread + e.bloom;
                e.moving && (s *= r.cls === "sniper" || r.cls === "hunting" ? 2.6 : 1.5), e.sprinting && (s *= 1.6), e.crouch && (s *= .7);
                let d = r.pellets ?? 1,
                    n = e.x + Math.cos(t) * 24,
                    l = e.y + Math.sin(t) * 24,
                    c = r.cls === "sniper" ? 2600 : r.cls === "hunting" ? 2200 : 1700;
                for (let m = 0; m < d; m++) {
                    let p = t + (this.rng.next() + this.rng.next() - 1) * s * Math.PI / 180;
                    this.bullets.push({
                        x: n,
                        y: l,
                        dx: Math.cos(p),
                        dy: Math.sin(p),
                        speed: c,
                        dmg: r.dmg,
                        pen: r.pen,
                        range: r.range,
                        traveled: 0,
                        owner: e.id,
                        alive: !0,
                        hitIds: []
                    })
                }
                e.bloom = Math.min(e.bloom + r.recoil, 14), e.recoilKick = Math.min(1, e.recoilKick + r.recoil / 8);
                let u = r.integralSuppressor || !!a.att?.muzzle;
                this.fx.push({
                    t: "shot",
                    pid: e.id,
                    x: n,
                    y: l,
                    a: t,
                    w: a.id,
                    sup: u,
                    pellets: d
                }), this.emitNoise(e.x, e.y, r.noise * (this.weather === "rain" ? .85 : 1), !0), this.noiseHeat += u ? .25 : 1, this.noiseHeat > 26 && this.hordeCd <= 0 && this.triggerHorde(e), a.ammo === 0 && Nt(e.lo, r.cal) > 0 && (e.fireCd = Math.max(e.fireCd, .12))
            }
            tryMelee(e, t) {
                if (e.meleeCd > 0) return;
                let a = e.lo.equip.melee ? C(e.lo.equip.melee.id).melee : {
                    dmg: 15,
                    speed: .6,
                    reach: 30,
                    arc: 70,
                    stamina: 6,
                    stagger: .2
                };
                if (e.stamina < a.stamina * .5) return;
                e.meleeCd = a.speed, e.meleeT = .22, e.stamina = Math.max(0, e.stamina - a.stamina), e.angle = t;
                let r = !1,
                    o = a.reach + 14;
                this.queryZombies(e.x, e.y, o + 30, s => {
                    if (s.state === "dead") return;
                    let d = Ze(e.x, e.y, s.x, s.y);
                    if (d > o + s.r) return;
                    let n = Math.atan2(s.y - e.y, s.x - e.x);
                    Math.abs(Tt(t, n)) > a.arc / 2 * Math.PI / 180 && d > s.r + 6 || (r = !0, this.damageZombie(s, a.dmg * (s.state === "idle" || s.state === "wander" ? 1.5 : 1), .5, n, e, !0), s.state !== "dead" && this.rng.chance(a.stagger) && (s.state = "stagger", s.stagger = .55, s.vx = Math.cos(n) * 220, s.vy = Math.sin(n) * 220))
                }), e.lo.equip.melee && r && (e.lo.equip.melee.cond = Math.max(.05, (e.lo.equip.melee.cond ?? 1) - .004)), this.fx.push({
                    t: "melee",
                    pid: e.id,
                    x: e.x,
                    y: e.y,
                    a: t,
                    hit: r
                }), this.emitNoise(e.x, e.y, r ? 140 : 70, !1)
            }
            startReload(e) {
                let t = this.activeItem(e);
                if (!t || e.active === "melee" || e.reloadT > 0) return;
                let a = ge(t);
                if (!((t.ammo ?? 0) >= a.mag && !e.jammed)) {
                    if (Nt(e.lo, a.cal) <= 0 && !e.jammed) {
                        this.fx.push({
                            t: "notice",
                            pid: e.id,
                            text: `No ${C(a.cal).name} left`,
                            kind: "warn"
                        });
                        return
                    }
                    e.reloadT = e.reloadTotal = a.reload * (e.jammed ? 1.2 : 1), this.fx.push({
                        t: "reload",
                        pid: e.id,
                        w: t.id
                    })
                }
            }
            finishReload(e) {
                let t = this.activeItem(e);
                if (!t || !C(t.id).weapon) return;
                let a = ge(t);
                e.jammed = !1;
                let r = a.mag - (t.ammo ?? 0);
                r > 0 && (t.ammo = (t.ammo ?? 0) + hr(e.lo, a.cal, r))
            }
            handleCommand(e, t) {
                switch (t.t) {
                    case "reload":
                        e.useT <= 0 && this.startReload(e);
                        break;
                    case "swap": {
                        let a = ["primary", "secondary", "sidearm", "melee"],
                            r = t.slot;
                        if (!r) {
                            let o = a.indexOf(e.active);
                            for (let s = 1; s <= 4; s++) {
                                let d = a[(o + s) % 4];
                                if (e.lo.equip[d]) {
                                    r = d;
                                    break
                                }
                            }
                        }
                        r && e.lo.equip[r] && r !== e.active && (e.reloadT = 0, e.active = r, e.jammed = !1, e.fireCd = Math.max(e.fireCd, .35), this.fx.push({
                            t: "swap",
                            pid: e.id,
                            w: e.lo.equip[r].id
                        }));
                        break
                    }
                    case "mode": {
                        let a = this.activeItem(e),
                            r = a && C(a.id).weapon;
                        a && r && r.modes.length > 1 && (a.mode = ((a.mode ?? 0) + 1) % r.modes.length, this.fx.push({
                            t: "notice",
                            pid: e.id,
                            text: `Fire mode: ${r.modes[a.mode].toUpperCase()}`,
                            kind: "info"
                        }));
                        break
                    }
                    case "light":
                        e.light = !e.light;
                        break;
                    case "melee":
                        this.tryMelee(e, e.input.aim ?? e.angle);
                        break;
                    case "interact":
                        this.interact(e, t.kind, t.id);
                        break;
                    case "build":
                        this.buildPiece(e, t.kind, t.rotation);
                        break;
                    case "cancel":
                        e.searching = null, e.openContainer = -1, e.openGround = -1;
                        break;
                    case "take":
                        this.take(e, t.src, t.id, t.uid, t.to);
                        break;
                    case "takeAll": {
                        let a = this.srcItems(e, t.src, t.id);
                        if (!a) break;
                        for (let r of [...a]) this.take(e, t.src, t.id, r.uid, {
                            kind: "auto"
                        }, !0);
                        break
                    }
                    case "put":
                        this.put(e, t.src, t.id, t.uid);
                        break;
                    case "move":
                        this.moveItem(e, t.uid, t.to);
                        break;
                    case "split":
                        this.splitItem(e, t.uid, t.qty);
                        break;
                    case "use":
                        this.startUse(e, t.uid);
                        break;
                    case "quick":
                        t.i >= 0 && t.i < 4 && (e.lo.quick[t.i] = t.uid && ce(e.lo, t.uid) ? t.uid : null);
                        break;
                    case "quickUse": {
                        let a = e.lo.quick[t.i];
                        a && ce(e.lo, a) ? this.startUse(e, a) : a && (e.lo.quick[t.i] = null);
                        break
                    }
                    case "heal":
                        this.autoHeal(e);
                        break;
                    case "attach":
                        this.attach(e, t.uid, t.weapon);
                        break;
                    case "detach":
                        this.detach(e, t.weapon, t.slot);
                        break;
                    case "repair":
                        this.repair(e, t.uid, t.weapon);
                        break;
                    case "ping":
                        this.fx.push({
                            t: "ping",
                            pid: e.id,
                            kind: t.kind,
                            x: V(t.x, 0, Gt),
                            y: V(t.y, 0, Ut)
                        });
                        break
                }
            }
            syncBuilt(e) {
                let t = [];
                for (let a = this.built.length; a < (e ?? []).length; a++) {
                    let r = e[a];
                    r && this.applyBuildDesc(r) && t.push(r)
                }
                return t
            }
            applyBuildDesc(e) {
                if (!e || this.built.some(t => t.id === e.id)) return !1;
                let t = Y(e.tx, e.ty);
                if (e.kind === "wall") this.map.solid[t] = 3, this.map.flags[t] = be | Ie | at;
                else if (e.kind === "door") {
                    let a = this.map.doors.length,
                        r = {
                            id: a,
                            tx: e.tx,
                            ty: e.ty,
                            vertical: !!e.vertical,
                            locked: void 0,
                            open: !1,
                            openT: 0,
                            hp: 100,
                            building: -1e4 - e.id
                        };
                    this.map.doors.push(r), this.map.doorAt[t] = a, this.map.solid[t] = 13, ii(this.map, r, !1)
                } else if (e.kind === "crate") {
                    let a = {
                        x: e.tx * y + 3,
                        y: e.ty * y + 5,
                        w: y - 6,
                        h: y - 8,
                        kind: "crate",
                        label: "Built Storage Crate",
                        table: "house",
                        count: [0, 0],
                        search: .2,
                        blocks: !0,
                        building: -1,
                        zone: "player",
                        rarityHint: 0,
                        built: !0
                    };
                    this.map.containers.push(a), this.cstate.push({
                        opened: !0,
                        items: [],
                        unlocked: !0
                    })
                } else if (e.kind === "campfire") {
                    let a = {
                        kind: "firebarrel",
                        x: e.tx * y + 7,
                        y: e.ty * y + 7,
                        w: 18,
                        h: 18,
                        blocks: !0,
                        v: 0,
                        built: !0
                    };
                    this.map.props.push(a), this.map.lights.push({
                        x: (e.tx + .5) * y,
                        y: (e.ty + .5) * y,
                        r: 150,
                        color: "#e58a45",
                        flicker: .8,
                        kind: "fire"
                    })
                } else return !1;
                return this.built.push({
                    ...e
                }), this.buildCollision(), !0
            }
            buildPlan(player, kind, rotation=0) {
                const angle=player.angle+rotation*Math.PI/2;
                const distance=kind==="shelter"?96:58;
                const tx=V(Math.floor((player.x+Math.cos(player.angle)*distance)/y),3,U-4);
                const ty=V(Math.floor((player.y+Math.sin(player.angle)*distance)/y),3,X-4);
                const vertical=Math.abs(Math.cos(angle))>Math.abs(Math.sin(angle));
                const cells=[];
                if(kind==="shelter")for(let dx=-2;dx<=2;dx++)for(let dy=-2;dy<=2;dy++)cells.push({tx:tx+dx,ty:ty+dy});
                else cells.push({tx,ty});
                const valid=cells.every(cell=>{
                    const x=(cell.tx+.5)*y, yy=(cell.ty+.5)*y, idx=Y(cell.tx,cell.ty);
                    if(DZInsideSafe(this,x,yy,-y)||this.map.roofOf[idx]>=0||this.map.solid[idx]!==0||this.map.doorAt[idx]>=0)return false;
                    if(!this.canSee(player.x,player.y,x,yy))return false;
                    if(!this.walkable(x,yy,y*.46))return false;
                    return ![...this.players.filter(p=>!p.dead&&!p.extracted),...this.zombies.filter(z=>z.state!=="dead"),...this.vehicles.filter(v=>v.hp>0)].some(entity=>Math.hypot(entity.x-V(entity.x,cell.tx*y,(cell.tx+1)*y),entity.y-V(entity.y,cell.ty*y,(cell.ty+1)*y))<(entity.r??14)+2);
                });
                return {tx,ty,vertical,cells,valid,angle};
            }
            buildPiece(e, t, rotation=0) {
                if (DZInsideSafe(this, e.x, e.y, -12)) {
                    this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: "Build outside the safe-zone perimeter",
                        kind: "warn"
                    });
                    return
                }
                let a = {
                    wall: 2,
                    door: 3,
                    crate: 4,
                    campfire: 2,
                    shelter: 14
                } [t];
                if (!a) return;
                if ((e.wood ?? 0) < a) {
                    this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: `Need ${a} timber · you have ${e.wood??0}`,
                        kind: "warn"
                    });
                    return
                }
                const plan=this.buildPlan(e,t,Number.isInteger(rotation)?rotation%4:0);
                if(!plan.valid){this.fx.push({t:"notice",pid:e.id,text:"Placement blocked · find clear outdoor ground",kind:"warn"});return;}
                let r = e.x + Math.cos(e.angle) * (t === "shelter" ? 96 : 58),
                    o = e.y + Math.sin(e.angle) * (t === "shelter" ? 96 : 58),
                    s = V(Math.floor(r / y), 3, U - 4),
                    d = V(Math.floor(o / y), 3, X - 4);
                if (t === "shelter") {
                    let n = [],
                        l = plan.vertical,
                        c = Math.cos(plan.angle),
                        u = Math.sin(plan.angle),
                        m = l ? (c > 0 ? s - 2 : s + 2) : s,
                        p = l ? d : (u > 0 ? d - 2 : d + 2);
                    for (let f = -2; f <= 2; f++)
                        for (let b = -2; b <= 2; b++)
                            if (Math.abs(f) === 2 || Math.abs(b) === 2) {
                                let x = s + f,
                                    k = d + b,
                                    M = Y(x, k);
                                if (this.map.roofOf[M] >= 0 || this.map.solid[M] !== 0 || this.map.doorAt[M] >= 0) {
                                    this.fx.push({
                                        t: "notice",
                                        pid: e.id,
                                        text: "Need a clear 5×5 outdoor area for the shelter",
                                        kind: "warn"
                                    });
                                    return
                                }
                                n.push({
                                    tx: x,
                                    ty: k,
                                    door: x === m && k === p
                                })
                            } for (let f of n) {
                        let b = {
                            id: this.built.length,
                            kind: f.door ? "door" : "wall",
                            tx: f.tx,
                            ty: f.ty,
                            vertical: l
                        };
                        this.applyBuildDesc(b), this.fx.push({
                            t: "worldbuild",
                            pid: e.id,
                            x: (f.tx + .5) * y,
                            y: (f.ty + .5) * y,
                            kind: b.kind
                        })
                    }
                    e.wood -= a, this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: `Starter shelter built · ${e.wood} timber left`,
                        kind: "good"
                    }), this.emitNoise(e.x, e.y, 260, !1);
                    return
                }
                let n = Y(s, d);
                if (this.map.roofOf[n] >= 0 || this.map.solid[n] !== 0 || this.map.doorAt[n] >= 0) {
                    this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: "Build outside on clear ground",
                        kind: "warn"
                    });
                    return
                }
                for (let l of this.players)
                    if (Math.hypot(l.x - (s + .5) * y, l.y - (d + .5) * y) < 42) {
                        this.fx.push({
                            t: "notice",
                            pid: e.id,
                            text: "Someone is standing there",
                            kind: "warn"
                        });
                        return
                    } let l = {
                    id: this.built.length,
                    kind: t,
                    tx: s,
                    ty: d,
                    vertical: plan.vertical
                };
                this.applyBuildDesc(l), e.wood -= a, this.fx.push({
                    t: "worldbuild",
                    pid: e.id,
                    x: (s + .5) * y,
                    y: (d + .5) * y,
                    kind: t
                }), this.fx.push({
                    t: "notice",
                    pid: e.id,
                    text: `Built ${t} · ${e.wood} timber left`,
                    kind: "good"
                }), this.emitNoise(e.x, e.y, 120, !1)
            }
            chopTree(e, t) {
                let a = this.map.trees[t];
                if (!a || a.cut || qe(e.x, e.y, a.x, a.y) > 78 * 78 || !this.canSee(e.x, e.y, a.x, a.y)) return;
                let r = this.activeItem(e),
                    o = r?.id === "m_axe" ? 2 : 1;
                a.hp = (a.hp ?? 4) - o, this.emitNoise(a.x, a.y, 170, !1), this.fx.push({
                    t: "treehit",
                    pid: e.id,
                    x: a.x,
                    y: a.y,
                    id: t,
                    hp: Math.max(0, a.hp)
                });
                if (a.hp <= 0) {
                    a.cut = !0;
                    let s = r?.id === "m_axe" ? 8 : 6;
                    e.wood = (e.wood ?? 0) + s, this.buildCollision(), this.fx.push({
                        t: "treecut",
                        pid: e.id,
                        x: a.x,
                        y: a.y,
                        id: t,
                        wood: s
                    }), this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: `+${s} timber · ${e.wood} total`,
                        kind: "good"
                    })
                }
            }
            autoHeal(e) {
                let t = [];
                for (let r of de(e.lo))
                    for (let o of r.items) C(o.item.id).cat === "medical" && t.push(o.item);
                if (!t.length) {
                    this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: "No medical supplies",
                        kind: "warn"
                    });
                    return
                }
                let a = r => {
                    let o = C(r.id).use,
                        s = 0;
                    e.bleed > 0 && o.stopBleed && (s += 50), e.infection > 40 && (o.infection ?? 0) < 0 && (s += 40);
                    let d = 100 - e.hp;
                    return o.heal && (s += Math.min(o.heal, d) * .8 - Math.max(0, o.heal - d) * .15), o.healOverTime && (s += Math.min(o.healOverTime, d) * .5), s - C(r.id).value / 400
                };
                if (t.sort((r, o) => a(o) - a(r)), a(t[0]) <= 0) {
                    this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: "You do not need healing",
                        kind: "info"
                    });
                    return
                }
                this.startUse(e, t[0].uid)
            }
            startUse(e, t) {
                let a = ce(e.lo, t);
                if (!a || a.where !== "grid") return;
                let r = C(a.item.id);
                if (!r.use) {
                    if (r.id === "tool_repair") {
                        let o = this.activeItem(e);
                        o && C(o.id).weapon && this.repair(e, t, o.uid)
                    }
                    return
                }
                e.useT > 0 || (e.reloadT = 0, e.useT = e.useTotal = r.use.time, e.useUid = t)
            }
            finishUse(e) {
                let t = e.useUid;
                if (e.useUid = null, !t) return;
                let a = Ui(e.lo, t);
                if (!a) return;
                let r = C(a.id).use;
                r.heal && (e.hp = Math.min(100, e.hp + r.heal)), r.healOverTime && (e.hot += r.healOverTime), r.stopBleed && (e.bleed = 0), r.infection && (e.infection = V(e.infection + r.infection, 0, 100)), r.hunger && (e.hunger = V(e.hunger + r.hunger, 0, 100)), r.thirst && (e.thirst = V(e.thirst + r.thirst, 0, 100)), r.stamina && (e.stamina = V(e.stamina + r.stamina, 0, 100)), r.boost && (e.boost = r.boost), r.immune && (e.immune = r.immune), this.fx.push({
                    t: "used",
                    pid: e.id,
                    id: a.id
                });
                let o = e.lo.quick.indexOf(t);
                if (o >= 0 && !ce(e.lo, t)) {
                    let s = null;
                    for (let d of de(e.lo))
                        for (let n of d.items) n.item.id === a.id && (s = n.item.uid);
                    e.lo.quick[o] = s
                }
            }
            repair(e, t, a) {
                let r = ce(e.lo, t),
                    o = ce(e.lo, a);
                !r || !o || r.item.id !== "tool_repair" || !C(o.item.id).weapon || (Ui(e.lo, t), o.item.cond = Math.min(1, (o.item.cond ?? 1) + .35), this.fx.push({
                    t: "notice",
                    pid: e.id,
                    text: `${C(o.item.id).name} repaired to ${Math.round((o.item.cond??1)*100)}%`,
                    kind: "info"
                }))
            }
            attach(e, t, a) {
                let r = ce(e.lo, t),
                    o = ce(e.lo, a);
                if (!r || !o || r.where !== "grid") return;
                let s = C(r.item.id).attach,
                    d = C(o.item.id).weapon;
                if (!s || !d || !d.slots.includes(s.slot)) {
                    this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: "That attachment does not fit this weapon",
                        kind: "warn"
                    });
                    return
                }
                o.item.att = o.item.att ?? {};
                let n = o.item.att[s.slot];
                if (je(r.grid, t), o.item.att[s.slot] = r.item.id, n) {
                    let c = {
                        uid: this.uid("a"),
                        id: n,
                        qty: 1
                    };
                    Me(de(e.lo), c) > 0 && this.dropItem(e, c)
                }
                let l = ge(o.item);
                if ((o.item.ammo ?? 0) > l.mag) {
                    let c = (o.item.ammo ?? 0) - l.mag;
                    o.item.ammo = l.mag;
                    let u = {
                        uid: this.uid("a"),
                        id: d.cal,
                        qty: c
                    };
                    Me(de(e.lo), u) > 0 && this.dropItem(e, u)
                }
            }
            detach(e, t, a) {
                let r = ce(e.lo, t);
                if (!r || !r.item.att || !r.item.att[a]) return;
                let o = r.item.att[a];
                delete r.item.att[a];
                let s = {
                    uid: this.uid("a"),
                    id: o,
                    qty: 1
                };
                Me(de(e.lo), s) > 0 && this.dropItem(e, s);
                let d = ge(r.item);
                if ((r.item.ammo ?? 0) > d.mag) {
                    let n = (r.item.ammo ?? 0) - d.mag;
                    r.item.ammo = d.mag;
                    let l = {
                        uid: this.uid("a"),
                        id: C(r.item.id).weapon.cal,
                        qty: n
                    };
                    Me(de(e.lo), l) > 0 && this.dropItem(e, l)
                }
            }
            containerCenter(e) {
                return {
                    x: e.x + e.w / 2,
                    y: e.y + e.h / 2
                }
            }
            canReach(e, t, a, r = 0) {
                return qe(e.x, e.y, t, a) <= (hs + r) ** 2
            }
            doorGroup(e) {
                const door=this.map.doors[e]; if(!door||door.inactive)return [];
                const group=[door]; const seen=new Set([door.id]);
                for(let index=0;index<group.length;index++) for(const other of this.map.doors) {
                    const current=group[index];
                    const sameLine=door.vertical ? other.tx===door.tx : other.ty===door.ty;
                    if(!other.inactive&&!seen.has(other.id)&&other.building===door.building&&other.vertical===door.vertical&&sameLine&&Math.abs(other.tx-current.tx)+Math.abs(other.ty-current.ty)===1){seen.add(other.id);group.push(other);}
                }
                return group;
            }
            doorOccupied(door) {
                return [...this.players.filter(p=>!p.dead&&!p.extracted),...this.zombies.filter(z=>z.state!=="dead"),...this.vehicles.filter(v=>v.hp>0)].some(entity=>{
                    const radius=entity.r??14;
                    return Math.hypot(entity.x-V(entity.x,door.tx*y,(door.tx+1)*y),entity.y-V(entity.y,door.ty*y,(door.ty+1)*y))<radius+2;
                });
            }
            setDoorGroup(e, open) {
                const group=this.doorGroup(e);
                if(!open && group.some(door=>this.doorOccupied(door)))return [];
                for(const door of group)ii(this.map,door,open);
                return group;
            }
            interact(e, t, a) {
                if (t === "container") {
                    let r = this.map.containers[a];
                    if (!r) return;
                    let o = this.containerCenter(r);
                    if (!this.canReach(e, o.x, o.y, Math.max(r.w, r.h) / 2) || !this.canSee(e.x, e.y, o.x, o.y)) return;
                    let s = this.cstate[a];
                    if (r.locked && !s.unlocked) {
                        if (!this.hasItem(e, r.locked)) {
                            this.fx.push({
                                t: "notice",
                                pid: e.id,
                                text: `Locked. Needs ${C(r.locked).name}.`,
                                kind: "warn"
                            });
                            return
                        }
                        s.unlocked = !0, this.fx.push({
                            t: "notice",
                            pid: e.id,
                            text: `Unlocked with ${C(r.locked).name}`,
                            kind: "info"
                        })
                    }
                    if (s.opened) {
                        e.openContainer = a, e.openGround = -1, this.fx.push({
                            t: "opened",
                            pid: e.id,
                            src: "container",
                            id: a
                        });
                        return
                    }
                    let d = r.search;
                    (r.kind === "safe" || r.kind === "locker" || r.kind === "gunlocker") && this.hasItem(e, "tool_lockpick") && (d *= .5), e.searching = {
                        kind: "container",
                        id: a,
                        t: 0,
                        total: d
                    }, e.reloadT = 0, this.fx.push({
                        t: "search",
                        pid: e.id,
                        done: !1
                    }), this.emitNoise(e.x, e.y, 60, !1)
                } else if (t === "ground" || t === "corpse") {
                    let r = this.ground.find(o => o.id === a);
                    if (!r || !this.canReach(e, r.x, r.y, 10) || !this.canSee(e.x,e.y,r.x,r.y) || r.kind === "supply" && r.landT !== void 0 && r.landT > 0) return;
                    e.openGround = a, e.openContainer = -1, this.fx.push({
                        t: "opened",
                        pid: e.id,
                        src: "ground",
                        id: a
                    })
                } else if (t === "door") {
                    let r = this.map.doors[a];
                    if (!r||r.inactive) return;
                    let o = (r.tx + .5) * y,
                        s = (r.ty + .5) * y;
                    if (!this.canReach(e, o, s, 22) || !this.canSee(e.x,e.y,o-Math.sign(o-e.x)*(y/2+2),s-Math.sign(s-e.y)*(y/2+2))) return;
                    let d = this.doorGroup(a);
                    if (!r.open && r.locked) {
                        for (let n of d) n.locked = void 0;
                        this.fx.push({
                            t: "notice",
                            pid: e.id,
                            text: "Door opened",
                            kind: "info"
                        })
                    }
                    if (r.open) {
                        for (let n of d)
                            for (let l of [...this.players, ...this.zombies, ...this.vehicles.filter(c => c.hp > 0)])
                                if (l.x > n.tx * y - l.r && l.x < (n.tx + 1) * y + l.r && l.y > n.ty * y - l.r && l.y < (n.ty + 1) * y + l.r) return
                    }
                    let n = !r.open;
                    this.setDoorGroup(a, n);
                    for (let l of d) this.fx.push({
                        t: "door",
                        id: l.id,
                        open: n
                    });
                    this.emitNoise(o, s, 90, !1)
                } else if (t === "tree") this.chopTree(e, a);
                else if (t === "vehicle") {
                    e.vehicle >= 0 ? this.exitVehicle(e) : this.enterVehicle(e, a)
                } else if (t === "revive") {
                    let r = this.player(a);
                    if (!r || !r.downed || !this.canReach(e, r.x, r.y)) return;
                    e.searching = {
                        kind: "revive",
                        id: a,
                        t: 0,
                        total: 4
                    }
                }
            }
            finishSearch(e) {
                let t = e.searching;
                if (e.searching = null, t.kind === "revive") {
                    let o = this.player(t.id);
                    o && o.downed && !o.dead && (o.downed = !1, o.hp = 30, o.bleed = 0, this.fx.push({
                        t: "revived",
                        pid: o.id
                    }), this.giveXp(e, 50, "Revived teammate"));
                    return
                }
                let a = this.map.containers[t.id],
                    r = this.cstate[t.id];
                if (!r.opened) {
                    if (r.opened = !0, !r.items) {
                        let s = ai(this.rng, a.table, {
                            count: a.count,
                            night: this.isNight(),
                            bonus: this.containerBonus(a)
                        });
                        for (let d of s) d.uid = this.uid("l");
                        r.items = s
                    }
                    let o = r.items;
                    e.stats.searched++, this.giveXp(e, 3, "Searched");
                    for (let s of o) {
                        let d = C(s.id);
                        Ge[d.rarity] >= 2 && (e.stats.rares.push(s.id), this.fx.push({
                            t: "notice",
                            pid: e.id,
                            text: `${ct[d.rarity]} find: ${d.name}`,
                            kind: "rare"
                        }))
                    }
                }
                e.openContainer = t.id, e.openGround = -1, this.fx.push({
                    t: "search",
                    pid: e.id,
                    done: !0
                }), this.fx.push({
                    t: "opened",
                    pid: e.id,
                    src: "container",
                    id: t.id
                })
            }
            containerBonus(e) {
                let t = 1;
                for (let a of this.events) a.fired && a.kind === "overrun" && e.zone === "clinic" && (t = 1.6);
                return t
            }
            srcItems(e, t, a) {
                if (t === "container") {
                    let o = this.map.containers[a],
                        s = this.cstate[a];
                    if (!o || !s || !s.opened || !s.items) return null;
                    let d = this.containerCenter(o);
                    return this.canReach(e, d.x, d.y, Math.max(o.w, o.h) / 2 + 30) && this.canSee(e.x, e.y, d.x, d.y) ? s.items : null
                }
                let r = this.ground.find(o => o.id === a);
                return !r || !this.canReach(e, r.x, r.y, 40) || !this.canSee(e.x,e.y,r.x,r.y) ? null : r.items
            }
            gridByRef(e, t) {
                return t === "pockets" ? e.lo.pockets : t === "bag" ? e.lo.bag : t === "secure" ? e.lo.secure : null
            }
            take(e, t, a, r, o, s = !1) {
                let d = this.srcItems(e, t, a);
                if (!d) return;
                let n = d.findIndex(p => p.uid === r);
                if (n < 0) return;
                let l = d[n],
                    c = C(l.id),
                    u = l.qty;
                if (o && o.kind === "grid") {
                    let p = this.gridByRef(e, o.grid);
                    p && mt(p, o.x, o.y, c.w, c.h) && !(p.smallOnly && (c.w > 1 || c.h > 1)) && (p.items.push({
                        item: {
                            ...l
                        },
                        x: o.x,
                        y: o.y
                    }), u = 0)
                } else if (o && o.kind === "equip") !e.lo.equip[o.slot] && ze(o.slot, l) && (this.equipInto(e, o.slot, {
                    ...l
                }), u = 0);
                else {
                    let p = xa(e.lo, l);
                    p && !e.lo.equip[p] && ze(p, l) ? (this.equipInto(e, p, {
                        ...l
                    }), u = 0) : u = Me(de(e.lo), {
                        ...l
                    })
                }
                if (u === l.qty) {
                    s || this.fx.push({
                        t: "notice",
                        pid: e.id,
                        text: "No room in your inventory",
                        kind: "warn"
                    });
                    return
                }
                let m = l.qty - u;
                if (u > 0 ? l.qty = u : d.splice(n, 1), this.fx.push({
                        t: "pickup",
                        pid: e.id,
                        id: l.id,
                        qty: m
                    }), c.use && (c.cat === "medical" || c.cat === "food" || c.cat === "drink")) {
                    let p = e.lo.quick.some(b => b && ce(e.lo, b)?.item.id === l.id),
                        f = e.lo.quick.indexOf(null);
                    if (!p && f >= 0) {
                        for (let b of de(e.lo))
                            for (let x of b.items)
                                if (x.item.id === l.id) {
                                    e.lo.quick[f] = x.item.uid;
                                    break
                                }
                    }
                }
            }
            equipInto(e, t, a) {
                if (e.lo.equip[t] = a, t === "backpack") {
                    let o = St(e.lo, a);
                    for (let s of o) this.dropItem(e, s)
                }
                C(a.id).weapon && (e.active === "melee" || !e.lo.equip[e.active]) && (e.active = t)
            }
            put(e, t, a, r) {
                let o = this.srcItems(e, t, a);
                if (!o) return;
                let s = this.removeFromPlayer(e, r);
                s && o.push(s)
            }
            removeFromPlayer(e, t) {
                let a = ce(e.lo, t);
                if (!a) return null;
                if (a.where === "grid") je(a.grid, t);
                else {
                    let o = a.slot;
                    if (delete e.lo.equip[o], o === "backpack") {
                        let s = St(e.lo, void 0);
                        for (let d of s) this.dropItem(e, d)
                    }
                    o === e.active && (e.reloadT = 0, e.active = e.lo.equip.primary ? "primary" : e.lo.equip.secondary ? "secondary" : e.lo.equip.sidearm ? "sidearm" : "melee")
                }
                let r = e.lo.quick.indexOf(t);
                return r >= 0 && (e.lo.quick[r] = null), a.item
            }
            moveItem(e, t, a) {
                let r = ce(e.lo, t);
                if (!r) return;
                let o = r.item,
                    s = C(o.id);
                if (a.kind === "drop") {
                    let d = this.removeFromPlayer(e, t);
                    d && this.dropItem(e, d);
                    return
                }
                if (a.kind === "equip") {
                    if (!ze(a.slot, o) || r.where === "equip" && r.slot === a.slot) return;
                    let d = r.where === "equip" ? r.slot : null,
                        n = e.lo.equip[a.slot];
                    r.where === "grid" ? je(r.grid, t) : delete e.lo.equip[d], this.equipInto(e, a.slot, o), n && (d && ze(d, n) ? e.lo.equip[d] = n : Me(de(e.lo), n) > 0 && this.dropItem(e, n)), d && d === e.active && !e.lo.equip[e.active] && (e.active = a.slot);
                    let l = e.lo.quick.indexOf(t);
                    l >= 0 && (e.lo.quick[l] = null);
                    return
                }
                if (a.kind === "grid") {
                    let d = this.gridByRef(e, a.grid);
                    if (!d || d.smallOnly && (s.w > 1 || s.h > 1)) return;
                    let n = d.items.find(l => l.item.uid !== t && l.item.id === o.id && a.x >= l.x && a.x < l.x + s.w && a.y >= l.y && a.y < l.y + s.h);
                    if (n && s.stack > 1) {
                        let l = Math.min(s.stack - n.item.qty, o.qty);
                        if (l <= 0) return;
                        n.item.qty += l, o.qty -= l, o.qty <= 0 && this.removeFromPlayer(e, t);
                        return
                    }
                    if (!mt(d, a.x, a.y, s.w, s.h, t)) return;
                    if (r.where === "grid") {
                        if (r.grid === d) {
                            r.placed.x = a.x, r.placed.y = a.y;
                            return
                        }
                        je(r.grid, t), d.items.push({
                            item: o,
                            x: a.x,
                            y: a.y
                        })
                    } else {
                        let l = this.removeFromPlayer(e, t);
                        l && d.items.push({
                            item: l,
                            x: a.x,
                            y: a.y
                        })
                    }
                    return
                }
                if (a.kind === "auto")
                    if (r.where === "equip") {
                        let d = this.removeFromPlayer(e, t);
                        d && Me(de(e.lo), d) > 0 && this.dropItem(e, d)
                    } else {
                        let d = xa(e.lo, o);
                        d && this.moveItem(e, t, {
                            kind: "equip",
                            slot: d
                        })
                    }
            }
            splitItem(e, t, a) {
                let r = ce(e.lo, t);
                if (!r || r.where !== "grid" || (a = Math.floor(a), a <= 0 || a >= r.item.qty)) return;
                let o = {
                    ...r.item,
                    uid: this.uid("s"),
                    qty: a
                };
                for (let s of de(e.lo)) {
                    if (s.smallOnly && s !== r.grid) continue;
                    let d = Ke(s, o);
                    if (d) {
                        r.item.qty -= a, s.items.push({
                            item: o,
                            x: d.x,
                            y: d.y
                        });
                        return
                    }
                }
                this.fx.push({
                    t: "notice",
                    pid: e.id,
                    text: "No room to split the stack",
                    kind: "warn"
                })
            }
            dropItem(e, t) {
                let a = this.ground.find(r => r.kind === "drop" && qe(r.x, r.y, e.x, e.y) < 2500);
                a || (a = {
                    id: this.nextGid++,
                    x: e.x + Math.cos(e.angle + Math.PI) * 10,
                    y: e.y + Math.sin(e.angle + Math.PI) * 10,
                    items: [],
                    kind: "drop",
                    label: "Dropped Items",
                    search: 0
                }, this.ground.push(a)), a.items.push(t)
            }
            stepGround(e) {
                for (let t of this.ground) t.landT !== void 0 && t.landT > 0 && (t.landT -= e, t.landT <= 0 && (this.emitNoise(t.x, t.y, 1500, !0), this.fx.push({
                    t: "event",
                    ev: "airdrop_land",
                    title: "Supply drop landed",
                    text: "Red smoke marks the crate.",
                    x: t.x,
                    y: t.y
                })));
                this.ground = this.ground.filter(t => t.items.length > 0 || t.kind === "corpse" || (t.landT ?? 0) > 0 || t.kind === "supply")
            }
            damagePlayer(e, t, a, r, o, s, d, n = !1) {
                if (e.dead || e.downed || e.extracted) return;
                if (!n && DZInsideSafe(this, e.x, e.y, -8)) return;
                let l = 0;
                if (!n) {
                    let c = e.lo.equip.armour,
                        u = e.lo.equip.helmet;
                    if (c && (c.cond ?? 1) > 0) {
                        let m = C(c.id).armour;
                        l += m.prot * V((c.cond ?? 1) * 1.5, .3, 1), c.cond = Math.max(0, (c.cond ?? 1) - t / m.dur)
                    }
                    if (u && (u.cond ?? 1) > 0) {
                        let m = C(u.id).armour;
                        l += m.prot, u.cond = Math.max(0, (u.cond ?? 1) - t / m.dur)
                    }
                    t *= 1 - l, e.hitT = 0, e.hitDir = r, this.rng.chance(o * (1 - l)) && (e.bleed = Math.min(3, e.bleed + 1)), s > 0 && e.immune <= 0 && (e.infection = Math.min(100, e.infection + s)), this.fx.push({
                        t: "pdmg",
                        pid: e.id,
                        dmg: t,
                        a: r,
                        bleed: e.bleed > 0
                    }), e.useT > 0 && (e.useT = 0, e.useUid = null), e.searching && (e.searching = null)
                }
                e.hp -= t, e.hp <= 0 && (e.hp = 0, e.cause = a, e.killer = d, this.players.some(u => u !== e && u.team === e.team && !u.dead && !u.downed && !u.extracted) && !n ? (e.downed = !0, e.downedT = 45, e.searching = null, e.useT = 0, e.reloadT = 0, this.fx.push({
                    t: "downed",
                    pid: e.id
                })) : this.killPlayer(e, a, d))
            }
            killPlayer(e, t, a) {
                if (e.dead) return;
                e.dead = !0, e.downed = !1, e.hp = 0, e.cause = t, e.killer = a, e.searching = null;
                let r = [];
                for (let o of Ce) {
                    let s = e.lo.equip[o];
                    s && r.push(s)
                }
                for (let o of e.lo.pockets.items) r.push(o.item);
                if (e.lo.bag)
                    for (let o of e.lo.bag.items) r.push(o.item);
                r.length && this.ground.push({
                    id: this.nextGid++,
                    x: e.x,
                    y: e.y,
                    items: r,
                    kind: "corpse",
                    label: `${e.name}'s body`,
                    search: 1.5,
                    owner: e.name
                }), this.fx.push({
                    t: "died",
                    pid: e.id,
                    cause: t
                })
            }
            damageZombie(e, t, a, r, o, s = !1) {
                if (e.state === "dead") return;
                let n = Be[e.type].armour;
                e.type === "riot" && Math.abs(Tt(e.angle, r + Math.PI)) > 1.2 && (n *= .3);
                let l = s ? Math.max(0, n - .2) : Math.max(0, n - a * .6),
                    c = t * (1 - l);
                e.hp -= c, e.hitFlash = .12, o && (o.stats.dmgDealt += c, o.stats.hits++), this.fx.push({
                    t: "hit",
                    x: e.x,
                    y: e.y,
                    a: r,
                    kind: l > .25 ? "armour" : "zombie",
                    dmg: Math.round(c),
                    pid: o ? o.id : -1,
                    kill: e.hp <= 0
                }), o && e.state !== "chase" && e.state !== "attack" && (e.state = "chase", e.target = o.id, e.tx = o.x, e.ty = o.y, e.lostT = 0), e.hp <= 0 && this.killZombie(e, r, o)
            }
            killZombie(e, t, a) {
                e.state = "dead";
                let r = Be[e.type];
                if (this.fx.push({
                        t: "zdie",
                        id: e.id,
                        x: e.x,
                        y: e.y,
                        zt: e.type,
                        a: t,
                        pid: a ? a.id : -1
                    }), a && (a.stats.zkills++, a.stats.missionsHit["kill_" + e.type] = (a.stats.missionsHit["kill_" + e.type] ?? 0) + 1, e.type === "brute" && (a.stats.bosses++, this.broadcastNotice(`${a.name} killed The Brute`, "event")), this.giveXp(a, r.xp, r.name)), e.type === "toxic" && (this.clouds.push({
                        x: e.x,
                        y: e.y,
                        r: 95,
                        t: 7
                    }), this.fx.push({
                        t: "toxic",
                        x: e.x,
                        y: e.y,
                        r: 95
                    })), this.rng.chance(r.dropChance)) {
                    let o = ai(this.rng, r.dropTable, {
                        count: e.type === "brute" ? [3, 4] : [1, 1],
                        night: this.isNight()
                    });
                    for (let s of o) s.uid = this.uid("z");
                    o.length && this.ground.push({
                        id: this.nextGid++,
                        x: e.x,
                        y: e.y,
                        items: o,
                        kind: "drop",
                        label: `${r.name} remains`,
                        search: 0
                    })
                }
            }
            explode(e, t, a, r, o) {
                this.fx.push({
                    t: "explode",
                    x: e,
                    y: t,
                    r: a
                }), this.emitNoise(e, t, 1300, !0), this.queryZombies(e, t, a, s => {
                    let d = Ze(e, t, s.x, s.y);
                    d < a && this.canSee(e, t, s.x, s.y) && this.damageZombie(s, r * (1 - d / a) + 20, .6, Math.atan2(s.y - t, s.x - e), o)
                });
                for (let s of this.players) {
                    let d = Ze(e, t, s.x, s.y);
                    d < a && !s.dead && this.canSee(e, t, s.x, s.y) && this.damagePlayer(s, r * (1 - d / a) * .6 + 5, "Explosion", Math.atan2(t - s.y, e - s.x), .6, 0, "")
                }
            }
            stepClouds(e) {
                for (let t of this.clouds) {
                    t.t -= e;
                    for (let a of this.players) a.dead || a.extracted || qe(a.x, a.y, t.x, t.y) > t.r * t.r || a.lo.equip.helmet && C(a.lo.equip.helmet.id).armour?.toxic || a.lo.equip.armour && C(a.lo.equip.armour.id).armour?.toxic || (a.immune <= 0 && (a.infection = Math.min(100, a.infection + e * 7)), this.damagePlayer(a, e * 2.2, "Toxic gas", 0, 0, 0, "", !0))
                }
                this.clouds = this.clouds.filter(t => t.t > 0)
            }
            stepBullets(e) {
                for (let t of this.bullets) {
                    if (!t.alive) continue;
                    let a = t.speed * e,
                        r = t.range * 1.7;
                    t.traveled + a > r && (a = r - t.traveled);
                    let o = t.x,
                        s = t.y,
                        d = Vt(this.map, t.x, t.y, t.dx, t.dy, a, at),
                        n = Math.min(a, d),
                        l = t.x + t.dx * n,
                        c = t.y + t.dy * n,
                        u = [];
                    this.queryZombiesSeg(o, s, l, c, k => {
                        if (k.state === "dead" || t.hitIds.includes(k.id)) return;
                        let M = Nr(o, s, l, c, k.x, k.y, k.r + (k.type === "crawler" ? -2 : 1));
                        M >= 0 && u.push({
                            z: k,
                            t: M
                        })
                    }), u.sort((k, M) => k.t - M.t);
                    let m = this.player(t.owner) ?? null,
                        p = !1,
                        f = 1,
                        b = null,
                        x = 2;
                    for (let k of this.explosives) {
                        if (k.v < 0) continue;
                        let M = Fr(o, s, l, c, k.x, k.y, k.w, k.h);
                        M >= 0 && M < x && (x = M, b = k)
                    }
                    for (let k of u) {
                        if (b && k.t > x) break;
                        t.hitIds.push(k.z.id);
                        let M = t.traveled + n * k.t,
                            R = M > t.range ? Math.max(.3, 1 - (M - t.range) / t.range) : 1;
                        if (this.damageZombie(k.z, t.dmg * R, t.pen, Math.atan2(t.dy, t.dx), m), t.dmg *= t.pen * .85, t.pen < .3 || t.dmg < 8) {
                            p = !0, f = k.t;
                            break
                        }
                    }
                    p ? (t.x = o + (l - o) * f, t.y = s + (c - s) * f, t.alive = !1) : b ? (t.x = o + (l - o) * x, t.y = s + (c - s) * x, t.alive = !1, b.v = -1, this.fx.push({
                        t: "hit",
                        x: t.x,
                        y: t.y,
                        a: Math.atan2(t.dy, t.dx),
                        kind: "wall",
                        dmg: 0,
                        pid: t.owner
                    }), this.explode(b.x + b.w / 2, b.y + b.h / 2, 160, 150, m)) : (t.x = l, t.y = c, t.traveled += n, d < a ? (t.alive = !1, this.fx.push({
                        t: "hit",
                        x: l,
                        y: c,
                        a: Math.atan2(t.dy, t.dx),
                        kind: "wall",
                        dmg: 0,
                        pid: t.owner
                    }), this.checkExplosive(l, c, m)) : t.traveled >= r && (t.alive = !1)), t.alive || this.fx.push({
                        t: "tracer",
                        x1: o,
                        y1: s,
                        x2: t.x,
                        y2: t.y
                    })
                }
                this.bullets = this.bullets.filter(t => t.alive)
            }
            checkExplosive(e, t, a) {
                for (let r of this.explosives) r.v < 0 || e > r.x - 6 && e < r.x + r.w + 6 && t > r.y - 6 && t < r.y + r.h + 6 && (r.v = -1, this.explode(r.x + r.w / 2, r.y + r.h / 2, 160, 150, a))
            }
            buildZGrid() {
                this.zgrid.clear();
                for (let e of this.zombies) {
                    if (e.state === "dead") continue;
                    let t = Math.floor(e.x / rt) + Math.floor(e.y / rt) * 1e3,
                        a = this.zgrid.get(t);
                    a || this.zgrid.set(t, a = []), a.push(e)
                }
            }
            queryZombies(e, t, a, r) {
                let o = Math.floor((e - a) / rt),
                    s = Math.floor((e + a) / rt),
                    d = Math.floor((t - a) / rt),
                    n = Math.floor((t + a) / rt);
                for (let l = d; l <= n; l++)
                    for (let c = o; c <= s; c++) {
                        let u = this.zgrid.get(c + l * 1e3);
                        if (u)
                            for (let m = 0; m < u.length; m++) r(u[m])
                    }
            }
            queryZombiesSeg(e, t, a, r, o) {
                let d = Math.floor((Math.min(e, a) - 30) / rt),
                    n = Math.floor((Math.max(e, a) + 30) / rt),
                    l = Math.floor((Math.min(t, r) - 30) / rt),
                    c = Math.floor((Math.max(t, r) + 30) / rt);
                for (let u = l; u <= c; u++)
                    for (let m = d; m <= n; m++) {
                        let p = this.zgrid.get(m + u * 1e3);
                        if (p)
                            for (let f = 0; f < p.length; f++) o(p[f])
                    }
            }
            spawnZombie(e, t, a, r = "idle") {
                if (DZInsideSafe(this, t, a, -64)) return null;
                if (this.zombies.length >= us && e !== "brute") return null;
                let o = Be[e],
                    s = {
                        id: this.nextZid++,
                        type: e,
                        x: t,
                        y: a,
                        vx: 0,
                        vy: 0,
                        angle: this.rng.range(0, Q),
                        r: o.radius,
                        hp: o.hp * (this.opts.difficulty ?? 1),
                        maxHp: o.hp * (this.opts.difficulty ?? 1),
                        state: r,
                        target: -1,
                        tx: t,
                        ty: a,
                        senseT: this.rng.range(0, .3),
                        stateT: this.rng.range(1, 6),
                        attackCd: 0,
                        lostT: 0,
                        stagger: 0,
                        animT: this.rng.range(0, 10),
                        active: !1,
                        speedVar: this.rng.range(.85, 1.15),
                        groanT: this.rng.range(3, 14),
                        charge: 0,
                        chargeCd: 4,
                        doorPush: 0,
                        lunge: 0,
                        hitFlash: 0
                    };
                return this.collide(s, s.r), this.zombies.push(s), s
            }
            randomSpotIn(e, t, a, r, o = 30, s = !0) {
                for (let d = 0; d < o; d++) {
                    let n = (e + this.rng.range(.5, a - .5)) * y,
                        l = (t + this.rng.range(.5, r - .5)) * y,
                        c = Math.floor(n / y),
                        u = Math.floor(l / y);
                    if (!(c < 1 || u < 1 || c >= U - 1 || u >= X - 1) && !(this.map.flags[Y(c, u)] & be) && !(!s && this.map.roofOf[Y(c, u)] >= 0) && this.walkable(n, l, 13)) return {
                        x: n,
                        y: l
                    }
                }
                return null
            }
            populate() {
                let e = this.isNight(),
                    t = this.opts.tutorial;
                for (let a of this.map.zones) {
                    let r = Math.round(a.pop * (e ? 1.3 : 1) * (t ? .45 : 1));
                    a.id === "wilds" && (r = t ? 6 : a.pop);
                    for (let o = 0; o < r; o++) {
                        let s = this.randomSpotIn(a.x, a.y, a.w, a.h, 30, !0);
                        if (!s) continue;
                        let d = this.rng.weighted(a.mix);
                        t && (d === "riot" || d === "soldier" || d === "toxic") && (d = "walker"), e && d === "walker" && this.rng.chance(.25) && (d = "runner"), this.spawnZombie(d, s.x, s.y, this.rng.chance(.5) ? "wander" : "idle")
                    }
                }
                e && !t && this.rng.chance(.6) && this.spawnBoss("military")
            }
            spawnBoss(e) {
                let t = e === "military" ? {
                    x: 134 * y,
                    y: 36 * y
                } : {
                    x: 64 * y,
                    y: 74 * y
                };
                this.zombies.some(a => a.type === "brute" && a.state !== "dead") || this.spawnZombie("brute", t.x, t.y, "wander")
            }
            maintainPopulation() {
                let e = this.zombies.filter(r => r.state !== "dead").length;
                this.zombies = this.zombies.filter(r => r.state !== "dead");
                let t = Math.round((this.opts.tutorial ? 60 : 130) * (this.isNight() ? 1.2 : 1));
                if (e >= t) return;
                let a = this.players.filter(r => !r.dead && !r.extracted);
                if (a.length)
                    for (let r = 0; r < 2; r++) {
                        let o = this.rng.pick(a);
                        for (let s = 0; s < 12; s++) {
                            let d = this.rng.range(0, Q),
                                n = this.rng.range(900, 1400),
                                l = o.x + Math.cos(d) * n,
                                c = o.y + Math.sin(d) * n;
                            if (l < 64 || c < 64 || l > Gt - 64 || c > Ut - 64 || !this.walkable(l, c, 13) || a.some(p => qe(p.x, p.y, l, c) < 850 * 850)) continue;
                            let u = Qi(this.map, l, c),
                                m = this.rng.weighted(u.mix);
                            this.spawnZombie(m, l, c, "wander");
                            break
                        }
                    }
            }
            triggerHorde(e) {
                this.hordeCd = 150, this.noiseHeat = 0;
                let t = this.rng.int(8, 13),
                    a = 0;
                for (let r = 0; r < 80 && a < t; r++) {
                    let o = this.rng.range(0, Q),
                        s = this.rng.range(700, 1e3),
                        d = e.x + Math.cos(o) * s,
                        n = e.y + Math.sin(o) * s;
                    if (!this.walkable(d, n, 13) || this.canSee(e.x, e.y, d, n) && s < 800) continue;
                    let l = this.spawnZombie(this.rng.chance(.3) ? "runner" : "walker", d, n, "investigate");
                    l && (l.tx = e.x + this.rng.range(-60, 60), l.ty = e.y + this.rng.range(-60, 60), a++)
                }
                this.fx.push({
                    t: "event",
                    ev: "horde",
                    title: "Horde incoming",
                    text: "All that gunfire was heard. More infected are closing in.",
                    x: e.x,
                    y: e.y
                })
            }
            emitNoise(e, t, a, r) {
                this.queryZombies(e, t, a * 1.4, o => {
                    if (o.state === "dead" || o.state === "chase" || o.state === "attack") return;
                    let s = a * Be[o.type].hearing,
                        d = qe(e, t, o.x, o.y);
                    d > s * s || !this.canSee(e, t, o.x, o.y) && d > s * s * .4 || (o.state = "investigate", o.tx = e + this.rng.range(-40, 40) * (r ? 2 : 1), o.ty = t + this.rng.range(-40, 40) * (r ? 2 : 1), o.stateT = this.rng.range(8, 14))
                })
            }
            flowFor(e) {
                let t = Math.floor(e.x / y),
                    a = Math.floor(e.y / y),
                    r = this.flows.get(e.id);
                if (r && r.ptx === t && r.pty === a && this.time - r.t < 1.2) return r;
                r || (r = {
                    ox: 0,
                    oy: 0,
                    dist: new Uint16Array(Te * Te),
                    t: 0,
                    ptx: t,
                    pty: a
                }), r.ptx = t, r.pty = a, r.t = this.time, r.ox = t - Te / 2, r.oy = a - Te / 2;
                let o = r.dist;
                o.fill(65535);
                let s = new Int32Array(Te * Te),
                    d = 0,
                    n = 0,
                    l = (a - r.oy) * Te + (t - r.ox);
                o[l] = 0, s[n++] = l;
                let c = this.map.flags,
                    u = this.map.doorAt;
                for (; d < n;) {
                    let m = s[d++],
                        p = m % Te,
                        f = m / Te | 0,
                        b = o[m];
                    for (let x = 0; x < 8; x++) {
                        let k = x < 4 ? [1, -1, 0, 0][x] : [1, 1, -1, -1][x - 4],
                            M = x < 4 ? [0, 0, 1, -1][x] : [1, -1, 1, -1][x - 4],
                            R = p + k,
                            w = f + M;
                        if (R < 0 || w < 0 || R >= Te || w >= Te) continue;
                        let P = R + r.ox,
                            g = w + r.oy;
                        if (P < 0 || g < 0 || P >= U || g >= X) continue;
                        let S = g * U + P;
                        if (!(!(c[S] & be) || u[S] >= 0 && !this.map.doors[u[S]].locked) || x >= 4 && (c[(f + r.oy) * U + P] & be || c[g * U + (p + r.ox)] & be)) continue;
                        let A = w * Te + R;
                        o[A] === 65535 && (o[A] = b + 1, s[n++] = A)
                    }
                }
                return this.flows.set(e.id, r), r
            }
            stepZombies(e) {
                let t = this.players.filter(o => !o.dead && !o.extracted),
                    a = this.visionMul(),
                    r = this.isNight();
                for (let o of this.zombies) {
                    if (o.state === "dead") continue;
                    let s = 1 / 0;
                    for (let g of t) s = Math.min(s, qe(o.x, o.y, g.x, g.y));
                    if (o.active = s < Ur * Ur, !o.active) continue;
                    let d = Be[o.type];
                    o.animT += e, o.hitFlash = Math.max(0, o.hitFlash - e), o.attackCd = Math.max(0, o.attackCd - e), o.groanT -= e, o.groanT <= 0 && (o.groanT = this.rng.range(6, 16), s < 700 * 700 && this.fx.push({
                        t: "zgroan",
                        x: o.x,
                        y: o.y,
                        zt: o.type,
                        alert: o.state === "chase"
                    })), o.senseT -= e, o.senseT <= 0 && o.state !== "stagger" && o.lunge <= 0 && (o.senseT = .22 + this.rng.next() * .12, this.sense(o, t, a, r));
                    let n = o.x,
                        l = o.y,
                        c = 0;
                    if (o.state === "stagger") {
                        o.stagger -= e, o.vx *= 1 - Math.min(1, e * 8), o.vy *= 1 - Math.min(1, e * 8), o.x += o.vx * e, o.y += o.vy * e, this.collide(o, o.r), o.stagger <= 0 && (o.state = o.target >= 0 ? "chase" : "investigate");
                        continue
                    }
                    if (o.lunge > 0) {
                        if (o.lunge -= e, o.lunge <= 0) {
                            let g = this.player(o.target);
                            if (g && !g.dead && !g.downed && Ze(o.x, o.y, g.x, g.y) < d.reach + g.r + 8) {
                                let S = Math.atan2(o.y - g.y, o.x - g.x);
                                this.damagePlayer(g, d.dmg * (r ? 1.15 : 1), d.name, S, d.bleedChance, this.rng.chance(d.infectChance) ? o.type === "toxic" ? 22 : 12 : 0, ""), this.fx.push({
                                    t: "zattack",
                                    x: o.x,
                                    y: o.y,
                                    pid: g.id
                                }), o.type === "brute" && (g.vx -= Math.cos(S) * 420, g.vy -= Math.sin(S) * 420)
                            }
                        }
                        continue
                    }
                    if (o.state === "chase" || o.state === "attack") {
                        let g = this.player(o.target);
                        if (!g || g.dead || g.extracted || g.downed) o.state = "wander", o.target = -1;
                        else {
                            let S = Ze(o.x, o.y, g.x, g.y);
                            if (S < d.reach + g.r && o.attackCd <= 0) {
                                o.attackCd = d.attackCd, o.lunge = o.type === "brute" ? .45 : .28, o.angle = Math.atan2(g.y - o.y, g.x - o.x);
                                continue
                            }
                            if (c = d.chase * o.speedVar * (r ? 1.12 : 1), o.type === "brute" && (o.chargeCd -= e, o.charge > 0 ? (o.charge -= e, c = 300) : o.chargeCd <= 0 && S < 380 && S > 120 && this.canSee(o.x, o.y, g.x, g.y) && (o.charge = .9, o.chargeCd = this.rng.range(5, 8), this.fx.push({
                                    t: "zgroan",
                                    x: o.x,
                                    y: o.y,
                                    zt: o.type,
                                    alert: !0
                                }))), o.lostT === 0 && S < 220 && this.canSee(o.x, o.y, g.x, g.y)) n = g.x, l = g.y;
                            else {
                                let A = this.flowFor(g),
                                    _ = Math.floor(o.x / y) - A.ox,
                                    H = Math.floor(o.y / y) - A.oy,
                                    B = !1;
                                if (_ >= 0 && H >= 0 && _ < Te && H < Te) {
                                    let se = A.dist[H * Te + _];
                                    if (se !== 65535) {
                                        let _e = se,
                                            $t = -1,
                                            Za = -1;
                                        for (let xt = 0; xt < 8; xt++) {
                                            let Go = xt < 4 ? [1, -1, 0, 0][xt] : [1, 1, -1, -1][xt - 4],
                                                Uo = xt < 4 ? [0, 0, 1, -1][xt] : [1, -1, 1, -1][xt - 4],
                                                Hi = _ + Go,
                                                Di = H + Uo;
                                            if (Hi < 0 || Di < 0 || Hi >= Te || Di >= Te) continue;
                                            let Xa = A.dist[Di * Te + Hi];
                                            Xa < _e && (_e = Xa, $t = Hi, Za = Di)
                                        }
                                        $t >= 0 && (n = ($t + A.ox + .5) * y, l = (Za + A.oy + .5) * y, B = !0, se <= 1 && (n = g.x, l = g.y))
                                    }
                                }
                                B || (n = o.lostT > 0 ? o.tx : g.x, l = o.lostT > 0 ? o.ty : g.y)
                            }
                            o.lostT > 6 && (o.state = "investigate", o.target = -1, o.stateT = 6)
                        }
                    } else if (o.state === "investigate") n = o.tx, l = o.ty, c = d.chase * .62 * o.speedVar, o.stateT -= e, (qe(o.x, o.y, o.tx, o.ty) < 900 || o.stateT <= 0) && (o.state = "wander", o.stateT = this.rng.range(2, 6));
                    else {
                        if (o.stateT -= e, o.stateT <= 0)
                            if (o.state === "idle") {
                                o.state = "wander";
                                let g = this.rng.range(0, Q),
                                    S = this.rng.range(60, 220);
                                o.tx = o.x + Math.cos(g) * S, o.ty = o.y + Math.sin(g) * S, o.stateT = this.rng.range(3, 8)
                            } else o.state = "idle", o.stateT = this.rng.range(2, 7);
                        o.state === "wander" && (n = o.tx, l = o.ty, c = d.wander * o.speedVar, qe(o.x, o.y, o.tx, o.ty) < 400 && (o.state = "idle"))
                    }
                    let u = n - o.x,
                        m = l - o.y,
                        p = Math.hypot(u, m),
                        f = 0,
                        b = 0;
                    p > 2 && c > 0 && (f = u / p * c, b = m / p * c);
                    let x = 0,
                        k = 0;
                    this.queryZombies(o.x, o.y, 40, g => {
                        if (g === o || g.state === "dead") return;
                        let S = o.x - g.x,
                            T = o.y - g.y,
                            A = o.r + g.r,
                            _ = S * S + T * T;
                        if (_ < A * A && _ > .01) {
                            let H = Math.sqrt(_),
                                B = (A - H) / A;
                            x += S / H * B * 160, k += T / H * B * 160
                        }
                    });
                    let M = 1 - Math.exp(-(o.type === "runner" ? 10 : 6) * e);
                    o.vx += (f + x - o.vx) * M, o.vy += (b + k - o.vy) * M;
                    let R = o.x,
                        w = o.y;
                    o.x += o.vx * e, o.y += o.vy * e;
                    for (let g of t) {
                        if (g.downed) continue;
                        let S = o.x - g.x,
                            T = o.y - g.y,
                            A = o.r + g.r - 2,
                            _ = S * S + T * T;
                        if (_ < A * A && _ > .01) {
                            let H = Math.sqrt(_),
                                B = A - H;
                            o.x += S / H * B * .8, o.y += T / H * B * .8, g.x -= S / H * B * (o.type === "brute" ? .5 : .2), g.y -= T / H * B * (o.type === "brute" ? .5 : .2)
                        }
                    }
                    if (this.collide(o, o.r), c > 0 && (o.state === "chase" || o.state === "investigate"))
                        if (Math.hypot(o.x - R, o.y - w) < c * e * .25) {
                            let S = o.x + u / (p || 1) * (o.r + 8),
                                T = o.y + m / (p || 1) * (o.r + 8),
                                A = this.map.doorAt[Y(V(Math.floor(S / y), 0, U - 1), V(Math.floor(T / y), 0, X - 1))];
                            if (A >= 0) {
                                let _ = this.map.doors[A];
                                !_.open && !_.locked && (o.doorPush += e, o.doorPush > (o.type === "brute" ? .4 : 1.6) && ((() => {
                                    let q = this.doorGroup(_.id);
                                    this.setDoorGroup(_.id, !0);
                                    for (let j of q) this.fx.push({
                                        t: "door",
                                        id: j.id,
                                        open: !0,
                                        bash: !0
                                    })
                                })(), o.doorPush = 0))
                            }
                        } else o.doorPush = 0;
                    o.vx * o.vx + o.vy * o.vy > 25 && (o.angle += Tt(o.angle, Math.atan2(o.vy, o.vx)) * (1 - Math.exp(-8 * e)))
                }
            }
            sense(e, t, a, r) {
                let o = Be[e.type],
                    s = null,
                    d = 1 / 0;
                for (let n of t) {
                    if (n.downed) continue;
                    let l = Ze(e.x, e.y, n.x, n.y),
                        c = o.vision * a * (r ? 1.1 : 1);
                    if (n.crouch && (c *= .55), n.light && this.light() < .6 && (c *= 1.6), n.sprinting && (c *= 1.15), l > c) continue;
                    let u = Math.atan2(n.y - e.y, n.x - e.x),
                        m = e.state === "chase" ? Math.PI : e.state === "investigate" ? 1.6 : 1.1;
                    l > 70 && Math.abs(Tt(e.angle, u)) > m || this.canSee(e.x, e.y, n.x, n.y) && l < d && (d = l, s = n)
                }
                if (s) {
                    let n = e.state === "chase";
                    if (e.state = "chase", e.target = s.id, e.tx = s.x, e.ty = s.y, e.lostT = 0, !n) {
                        this.fx.push({
                            t: "zgroan",
                            x: e.x,
                            y: e.y,
                            zt: e.type,
                            alert: !0
                        });
                        let l = s;
                        this.queryZombies(e.x, e.y, 260, c => {
                            (c.state === "idle" || c.state === "wander") && (c.state = "investigate", c.tx = l.x, c.ty = l.y, c.stateT = 8)
                        })
                    }
                } else if (e.state === "chase") {
                    e.lostT += .28;
                    let n = this.player(e.target);
                    n && qe(e.x, e.y, n.x, n.y) < 8100 && (e.lostT = 0, e.tx = n.x, e.ty = n.y)
                }
            }
            scheduleEvents() {
                let e = this.rng;
                e.chance(.75) && this.events.push({
                    id: "airdrop",
                    kind: "airdrop",
                    title: "Supply aircraft inbound",
                    text: "A military drop is coming down. Check your map.",
                    at: e.range(180, 420),
                    fired: !1
                }), e.chance(.35) && this.events.push({
                    id: "convoy",
                    kind: "convoy",
                    title: "Military convoy destroyed",
                    text: "A wrecked convoy lies on the A-road. Soldiers did not survive it.",
                    at: 2,
                    fired: !1,
                    x: 80 * y,
                    y: 112 * y
                }), e.chance(.3) && this.events.push({
                    id: "overrun",
                    kind: "overrun",
                    title: "St Aldric's overrun",
                    text: "The clinic is swarming, but the medical stock is untouched.",
                    at: 3,
                    fired: !1,
                    x: 64 * y,
                    y: 64 * y
                }), e.chance(.25) && this.events.push({
                    id: "courier",
                    kind: "courier",
                    title: "Black-market courier down",
                    text: "A courier never made it out. Their stash is somewhere in Fenwick.",
                    at: e.range(60, 240),
                    fired: !1,
                    x: 130 * y,
                    y: 112 * y
                })
            }
            stepEvents(e) {
                for (let t of this.events)
                    if (!(t.fired || this.time < t.at)) {
                        if (t.fired = !0, t.kind === "airdrop") {
                            let a = [{
                                    x: 100,
                                    y: 120
                                }, {
                                    x: 60,
                                    y: 125
                                }, {
                                    x: 105,
                                    y: 60
                                }, {
                                    x: 40,
                                    y: 60
                                }, {
                                    x: 95,
                                    y: 145
                                }, {
                                    x: 140,
                                    y: 60
                                }],
                                r = this.rng.pick(a),
                                o = this.randomSpotIn(r.x - 3, r.y - 3, 6, 6, 40, !1) ?? {
                                    x: r.x * y,
                                    y: r.y * y
                                };
                            t.x = o.x, t.y = o.y;
                            let s = ai(this.rng, "drop", {
                                count: [4, 6],
                                night: this.isNight()
                            });
                            for (let d of s) d.uid = this.uid("d");
                            this.ground.push({
                                id: this.nextGid++,
                                x: o.x,
                                y: o.y,
                                items: s,
                                kind: "supply",
                                label: "Supply Drop",
                                search: 2.5,
                                landT: 25
                            })
                        }
                        if (t.kind === "convoy") {
                            for (let a = 0; a < 3; a++) {
                                let r = (79 + a % 2 * 2) * y,
                                    o = (108 + a * 4) * y,
                                    s = ai(this.rng, "military", {
                                        count: [2, 4]
                                    });
                                for (let d of s) d.uid = this.uid("c");
                                this.ground.push({
                                    id: this.nextGid++,
                                    x: r,
                                    y: o,
                                    items: s,
                                    kind: "stash",
                                    label: "Convoy Wreck",
                                    search: 2
                                })
                            }
                            for (let a = 0; a < 7; a++) this.spawnZombie("soldier", (78 + this.rng.range(0, 4)) * y, (106 + this.rng.range(0, 14)) * y, "idle")
                        }
                        if (t.kind === "overrun") {
                            for (let a = 0; a < 14; a++) {
                                let r = this.randomSpotIn(54, 56, 20, 18, 30, !0);
                                r && this.spawnZombie(this.rng.chance(.25) ? "toxic" : this.rng.chance(.3) ? "runner" : "walker", r.x, r.y, "idle")
                            }
                            this.isNight() && this.spawnBoss("clinic")
                        }
                        if (t.kind === "courier") {
                            let a = ai(this.rng, "evidence", {
                                count: [3, 4]
                            });
                            a.push({
                                uid: "",
                                id: "contra_brick",
                                qty: this.rng.int(1, 3)
                            });
                            for (let o of a) o.uid = this.uid("k");
                            let r = this.randomSpotIn(118, 106, 22, 12, 40, !1) ?? {
                                x: t.x,
                                y: t.y
                            };
                            t.x = r.x, t.y = r.y, this.ground.push({
                                id: this.nextGid++,
                                x: r.x,
                                y: r.y,
                                items: a,
                                kind: "stash",
                                label: "Courier's Bag",
                                search: 1.5
                            })
                        }
                        this.fx.push({
                            t: "event",
                            ev: t.kind,
                            title: t.title,
                            text: t.text,
                            x: t.x,
                            y: t.y
                        })
                    }
            }
            result(e) {
                let t = this.player(e);
                if (!t) return null;
                let a = t.extracted ? "extracted" : t.cause === "Missing in action" ? "mia" : "died",
                    r = [],
                    o = t.lo;
                if (!t.extracted) {
                    r = [];
                    for (let s of Ce) {
                        let d = t.lo.equip[s];
                        d && r.push(d)
                    }
                    for (let s of t.lo.pockets.items) r.push(s.item);
                    if (t.lo.bag)
                        for (let s of t.lo.bag.items) r.push(s.item);
                    o = {
                        equip: {},
                        pockets: {
                            ...t.lo.pockets,
                            items: []
                        },
                        bag: null,
                        secure: t.lo.secure,
                        quick: [null, null, null, null]
                    }
                }
                return {
                    pid: e,
                    outcome: a,
                    cause: t.cause,
                    killer: t.killer,
                    time: t.aliveT,
                    extract: t.extracted ? t.cause : "",
                    loadout: o,
                    lost: r,
                    stats: t.stats,
                    status: {
                        hp: t.extracted ? Math.max(1, t.hp) : 100,
                        hunger: t.hunger,
                        thirst: t.thirst,
                        infection: t.extracted ? t.infection : 0
                    }
                }
            }
            takenByOthers(e) {
                let t = new Set;
                for (let a of this.players)
                    if (!(a.id === e || !a.extracted))
                        for (let r of we(a.lo)) t.add(r.uid);
                return t
            }
        };
    var W = {
            el: null,
            W: 800,
            H: 400,
            rotated: !1,
            dpr: 1
        },
        Pi = null,
        ea = [],
        Kr = null;

    function ri(i) {
        return ea.push(i), () => {
            let e = ea.indexOf(i);
            e >= 0 && ea.splice(e, 1)
        }
    }

    function ia(i) {
        Kr = i, ta()
    }

    function ps() {
        Pi || (Pi = document.createElement("div"), Pi.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding-top:env(safe-area-inset-top,0px);padding-right:env(safe-area-inset-right,0px);padding-bottom:env(safe-area-inset-bottom,0px);padding-left:env(safe-area-inset-left,0px)", document.body.appendChild(Pi));
        let i = getComputedStyle(Pi);
        return {
            t: parseFloat(i.paddingTop) || 0,
            r: parseFloat(i.paddingRight) || 0,
            b: parseFloat(i.paddingBottom) || 0,
            l: parseFloat(i.paddingLeft) || 0
        }
    }

    function ta() {
        let q = window.visualViewport,
            i = Math.max(1, Math.round(q?.width ?? window.innerWidth)),
            e = Math.max(1, Math.round(q?.height ?? window.innerHeight)),
            t = e > i * 1.05,
            a = Kr ?? t;
        W.rotated = a, W.dpr = Math.min(window.devicePixelRatio || 1, 2.5);
        let r = W.el,
            o = ps(),
            s;
        r.style.left = Math.round(q?.offsetLeft ?? 0) + "px", r.style.top = Math.round(q?.offsetTop ?? 0) + "px";
        a ? (W.W = e, W.H = i, r.style.width = e + "px", r.style.height = i + "px", r.style.transform = `translate(${i}px,0) rotate(90deg)`, s = {
            l: o.t,
            r: o.b,
            t: o.r,
            b: o.l
        }) : (W.W = i, W.H = e, r.style.width = i + "px", r.style.height = e + "px", r.style.transform = "none", s = {
            l: o.l,
            r: o.r,
            t: o.t,
            b: o.b
        }), r.style.setProperty("--sa-l", Math.max(s.l, 0) + "px"), r.style.setProperty("--sa-r", Math.max(s.r, 0) + "px"), r.style.setProperty("--sa-t", Math.max(s.t, 0) + "px"), r.style.setProperty("--sa-b", Math.max(s.b, 0) + "px"), ot.l = s.l, ot.r = s.r, ot.t = s.t, ot.b = s.b;
        for (let d of ea) d()
    }
    var ot = {
        l: 0,
        r: 0,
        t: 0,
        b: 0
    };

    function jr(i) {
        W.el = i, ta();
        let e = 0,
            t = () => {
                clearTimeout(e), e = window.setTimeout(ta, 60)
            };
        window.addEventListener("resize", t), window.addEventListener("orientationchange", () => setTimeout(ta, 250)), window.visualViewport?.addEventListener("resize", t)
    }

    function st(i, e) {
        const q = window.visualViewport;
        const x = i - (q?.offsetLeft ?? 0), yy = e - (q?.offsetTop ?? 0);
        return W.rotated ? {x: yy, y: W.H - x} : {x, y: yy};
    }
    var $a = class {
            constructor() {
                this.ctx = null;
                this.master = null;
                this.sfx = null;
                this.amb = null;
                this.music = null;
                this.noise = null;
                this.sfxVol = .8;
                this.musicVol = .5;
                this.listener = {
                    x: 0,
                    y: 0
                };
                this.ambNodes = {};
                this.lastPlay = new Map;
                this.chirpT = 0
            }
            unlock() {
                if (this.ctx) {
                    this.ctx.state === "suspended" && this.ctx.resume().catch(() => {});
                    return
                }
                try {
                    let A = window.AudioContext || window.webkitAudioContext;
                    this.ctx = new A({
                        latencyHint: "interactive"
                    })
                } catch {
                    return
                }
                let c = this.ctx;
                this.master = c.createGain();
                this.master.gain.value = .82;
                let comp = c.createDynamicsCompressor();
                comp.threshold.value = -12;
                comp.knee.value = 18;
                comp.ratio.value = 5;
                comp.attack.value = .003;
                comp.release.value = .22;
                this.master.connect(comp).connect(c.destination);
                this.sfx = c.createGain();
                this.sfx.gain.value = this.sfxVol;
                this.sfx.connect(this.master);
                this.amb = c.createGain();
                this.amb.gain.value = this.sfxVol * .62;
                this.amb.connect(this.master);
                this.music = c.createGain();
                this.music.gain.value = this.musicVol * .34;
                this.music.connect(this.master);
                let n = c.sampleRate * 4;
                this.noise = c.createBuffer(1, n, c.sampleRate);
                let d = this.noise.getChannelData(0),
                    b = 0;
                for (let i = 0; i < n; i++) {
                    let w = Math.random() * 2 - 1;
                    b = (b + .025 * w) / 1.025;
                    d[i] = w * .72 + b * .28
                }
                this.startAmbience()
            }
            setVolumes(s, m) {
                this.sfxVol = s;
                this.musicVol = m;
                this.sfx && (this.sfx.gain.value = s);
                this.amb && (this.amb.gain.value = s * .62);
                this.music && (this.music.gain.value = m * .34)
            }
            src(rate = 1) {
                let s = this.ctx.createBufferSource();
                s.buffer = this.noise;
                s.loop = true;
                s.playbackRate.value = rate;
                return s
            }
            env(g, t, a, p, r) {
                g.gain.setValueAtTime(1e-4, t);
                g.gain.linearRampToValueAtTime(Math.max(1e-4, p), t + a);
                g.gain.exponentialRampToValueAtTime(1e-4, t + a + r)
            }
            out(x, y, vol = 1) {
                if (!this.ctx || !this.sfx) return null;
                let c = this.ctx,
                    v = vol,
                    pan = 0,
                    muf = 1;
                if (x !== void 0 && y !== void 0) {
                    let dx = x - this.listener.x,
                        dy = y - this.listener.y,
                        dist = Math.hypot(dx, dy);
                    v *= 1 / (1 + dist / 300);
                    pan = Math.max(-.92, Math.min(.92, dx / 520));
                    muf = Math.max(.18, 1 - dist / 1700);
                    if (v < .012) return null
                }
                let g = c.createGain();
                g.gain.value = v;
                let p = c.createStereoPanner ? c.createStereoPanner() : null;
                if (p) {
                    p.pan.value = pan;
                    g.connect(p).connect(this.sfx)
                } else g.connect(this.sfx);
                return {
                    node: g,
                    muffle: muf
                }
            }
            play(name, x, y, vol = 1) {
                if (!this.ctx || this.ctx.state !== "running") return;
                let c = this.ctx,
                    now = c.currentTime,
                    key = name + (x !== void 0 ? Math.round(x / 48) + ":" + Math.round((y ?? 0) / 48) : ""),
                    last = this.lastPlay.get(key) ?? -1,
                    min = name === "step" ? .11 : name === "groan" || name === "snarl" ? .7 : name === "flesh" ? .04 : .018;
                if (now - last < min) return;
                this.lastPlay.set(key, now);
                let out = this.out(x, y, vol);
                if (!out) return;
                let bus = out.node,
                    muf = out.muffle,
                    t = now + .004;
                let noise = (type, f1, f2, q, atk, peak, rel, rate = 1, delay = 0) => {
                    let s = this.src(rate),
                        f = c.createBiquadFilter();
                    f.type = type;
                    f.frequency.setValueAtTime(Math.max(30, f1 * (type === "lowpass" ? muf : 1)), t + delay);
                    f.frequency.exponentialRampToValueAtTime(Math.max(30, f2 * (type === "lowpass" ? muf : 1)), t + delay + atk + rel);
                    f.Q.value = q;
                    let g = c.createGain();
                    this.env(g, t + delay, atk, peak, rel);
                    s.connect(f).connect(g).connect(bus);
                    s.start(t + delay, Math.random() * 2.5);
                    s.stop(t + delay + atk + rel + .06)
                };
                let tone = (type, f1, f2, atk, peak, rel, delay = 0) => {
                    let o = c.createOscillator();
                    o.type = type;
                    o.frequency.setValueAtTime(f1, t + delay);
                    o.frequency.exponentialRampToValueAtTime(Math.max(20, f2), t + delay + atk + rel);
                    let g = c.createGain();
                    this.env(g, t + delay, atk, peak, rel);
                    o.connect(g).connect(bus);
                    o.start(t + delay);
                    o.stop(t + delay + atk + rel + .06)
                };
                let click = (delay = 0, pitch = 2200, level = .16) => {
                    noise("highpass", pitch, pitch * .75, 1.3, .001, level, .035, 1.35, delay)
                };
                let tail = (level = .12, dur = .45, delay = .035) => noise("lowpass", 1200, 120, .45, .015, level, dur, .42, delay);
                switch (name) {
                    case "pistol":
                        noise("bandpass", 6200, 900, .7, .001, .7, .08, 1.15);
                        tone("sine", 170, 58, .002, .42, .11);
                        click(.012, 3600, .15);
                        tail(.11, .32, .025);
                        break;
                    case "smg":
                        noise("bandpass", 5200, 750, .75, .001, .52, .065, 1.18);
                        tone("sine", 145, 55, .001, .28, .075);
                        click(.01, 3000, .1);
                        break;
                    case "rifle":
                        noise("bandpass", 7600, 650, .55, .001, .82, .12, 1.08);
                        tone("sine", 118, 38, .002, .62, .16);
                        noise("highpass", 4200, 2100, .7, .001, .24, .04, 1.5);
                        tail(.16, .48, .03);
                        break;
                    case "shotgun":
                        noise("lowpass", 4200, 260, .5, .002, 1, .23, .92);
                        tone("sine", 92, 28, .003, .82, .22);
                        noise("bandpass", 1700, 320, .8, .004, .4, .28, .55, .02);
                        tail(.24, .65, .035);
                        break;
                    case "sniper":
                        noise("bandpass", 8500, 500, .48, .001, .95, .16, 1.04);
                        tone("sine", 78, 24, .002, .9, .28);
                        noise("highpass", 5000, 1800, .55, .001, .3, .05, 1.55);
                        tail(.22, .9, .045);
                        break;
                    case "suppressed":
                        noise("bandpass", 1700, 480, 1.2, .002, .34, .055, 1.3);
                        noise("highpass", 5600, 3600, .9, .001, .08, .025, 1.8);
                        tone("sine", 190, 70, .002, .12, .06);
                        break;
                    case "empty":
                        click(0, 3300, .1);
                        tone("triangle", 850, 520, .001, .05, .025, .018);
                        break;
                    case "reload":
                        click(0, 2200, .11);
                        noise("bandpass", 1100, 520, 2, .003, .18, .06, .8, .18);
                        click(.28, 1750, .14);
                        click(.42, 2700, .1);
                        break;
                    case "swing":
                        noise("bandpass", 900, 3000, 1.4, .025, .2, .11, 1.5);
                        break;
                    case "thud":
                        noise("lowpass", 850, 110, .7, .002, .5, .1, .72);
                        tone("sine", 105, 44, .002, .34, .08);
                        break;
                    case "flesh":
                        noise("lowpass", 1050, 180, 1, .002, .28, .075, .7);
                        noise("bandpass", 520, 180, 1.8, .002, .13, .11, .45);
                        break;
                    case "ricochet":
                        click(0, 4300, .14);
                        tone("triangle", 2500 + Math.random() * 1100, 780, .002, .055, .16, .012);
                        break;
                    case "step":
                        noise("lowpass", 460 + Math.random() * 120, 105, .7, .002, .11, .055, .7 + Math.random() * .2);
                        tone("sine", 92 + Math.random() * 18, 58, .001, .04, .04);
                        break;
                    case "door":
                        tone("sawtooth", 118 + Math.random() * 35, 74, .035, .035, .32);
                        noise("lowpass", 650, 105, .9, .002, .24, .16, .58, .18);
                        click(.29, 1450, .09);
                        break;
                    case "bash":
                        noise("lowpass", 1500, 95, .58, .002, .7, .22, .7);
                        tone("sine", 82, 33, .002, .55, .18);
                        noise("bandpass", 800, 260, 1.1, .005, .18, .3, .55, .04);
                        break;
                    case "pickup":
                        noise("bandpass", 1450, 620, 1.6, .004, .11, .08, 1.15);
                        click(.045, 1900, .045);
                        break;
                    case "rare":
                        tone("sine", 520, 520, .015, .06, .28);
                        tone("sine", 780, 760, .012, .045, .35, .08);
                        tone("triangle", 1040, 980, .01, .025, .42, .16);
                        break;
                    case "tap":
                        tone("triangle", 720, 520, .001, .035, .028);
                        break;
                    case "hurt":
                        noise("lowpass", 620, 110, .7, .002, .38, .13, .64);
                        tone("sine", 125, 48, .002, .25, .13);
                        break;
                    case "heal":
                        noise("bandpass", 1250, 500, 1.8, .02, .12, .18, .8);
                        tone("sine", 390, 610, .03, .035, .32, .12);
                        break;
                    case "eat":
                        for (let i = 0; i < 3; i++) noise("bandpass", 820, 360, 2.6, .008, .11, .055, .75, i * .17);
                        break;
                    case "explode":
                        noise("lowpass", 3600, 45, .42, .003, 1.05, 1.35, .75);
                        tone("sine", 66, 22, .003, .86, .75);
                        tail(.3, 1.2, .08);
                        break;
                    case "extract":
                        tone("sine", 196, 196, .06, .08, .7);
                        tone("triangle", 392, 392, .04, .07, .7, .14);
                        tone("triangle", 523, 523, .04, .05, .8, .32);
                        noise("bandpass", 1400, 500, 1.2, .04, .05, .8, .55, .15);
                        break;
                    case "death":
                        tone("sawtooth", 94, 32, .08, .18, 1.9);
                        tone("sine", 47, 28, .12, .18, 2.2, .18);
                        noise("lowpass", 440, 60, .5, .18, .12, 1.8, .4, .1);
                        break;
                    case "heart":
                        tone("sine", 58, 38, .004, .42, .1);
                        tone("sine", 52, 35, .004, .28, .1, .19);
                        break;
                    case "search":
                        for (let i = 0; i < 4; i++) noise("bandpass", 760 + Math.random() * 900, 300, 2.3, .004, .08, .05, .85, i * .1 + Math.random() * .035);
                        break;
                    case "notice":
                        tone("sine", 510, 500, .004, .04, .14);
                        tone("sine", 760, 740, .004, .03, .17, .07);
                        break;
                    case "event":
                        tone("sawtooth", 165, 150, .015, .045, .32);
                        tone("sawtooth", 123, 112, .015, .04, .42, .32);
                        break;
                    case "coins":
                        for (let i = 0; i < 4; i++) tone("triangle", 1550 + Math.random() * 550, 1050, .002, .045, .11, i * .045);
                        break;
                    case "build":
                        for (let i = 0; i < 3; i++) noise("lowpass", 1100, 180, .75, .002, .24, .06, .85, i * .14);
                        break;
                    case "zip":
                        noise("bandpass", 2200, 4700, 2.2, .018, .085, .18, 1.4);
                        break;
                    case "groan": {
                        let f = 78 + Math.random() * 46;
                        tone("sawtooth", f, f * (.72 + Math.random() * .12), .08, .07, .72);
                        noise("bandpass", 520, 160, 2.6, .04, .08, .65, .62);
                        break
                    }
                    case "snarl": {
                        let f = 95 + Math.random() * 35;
                        tone("sawtooth", f, f * .72, .04, .09, .5);
                        noise("bandpass", 700, 220, 2.4, .02, .12, .45, .7);
                        break
                    }
                    case "brute":
                        tone("sawtooth", 62, 34, .04, .19, .9);
                        noise("lowpass", 700, 75, .5, .02, .34, .9, .5);
                        break;
                    default:
                        click(0, 1000, .025);
                        break
                }
            }
            gunshot(id, cls, supp, x, y, indoor) {
                let v = indoor ? 1 : .9;
                return supp ? this.play("suppressed", x, y, v) : cls === "pistol" || cls === "revolver" ? this.play("pistol", x, y, v) : cls === "smg" ? this.play("smg", x, y, v) : cls === "shotgun" ? this.play("shotgun", x, y, v) : cls === "sniper" || cls === "hunting" ? this.play("sniper", x, y, v) : this.play("rifle", x, y, v)
            }
            startAmbience() {
                let c = this.ctx;
                let mk = (type, freq, q, rate) => {
                    let s = this.src(rate),
                        f = c.createBiquadFilter();
                    f.type = type;
                    f.frequency.value = freq;
                    f.Q.value = q;
                    let g = c.createGain();
                    g.gain.value = 0;
                    s.connect(f).connect(g).connect(this.amb);
                    s.start();
                    return {
                        g,
                        f
                    }
                };
                let wind = mk("lowpass", 520, .55, .28),
                    lfo = c.createOscillator(),
                    lfg = c.createGain();
                lfo.frequency.value = .045;
                lfg.gain.value = 180;
                lfo.connect(lfg).connect(wind.f.frequency);
                lfo.start();
                this.ambNodes.wind = wind.g;
                this.ambNodes.rain = mk("bandpass", 3200, .45, 1.05).g;
                this.ambNodes.rumble = mk("lowpass", 95, .65, .15).g;
                let drone = c.createGain();
                drone.gain.value = 0;
                drone.connect(this.music);
                for (let f of [43.65, 65.4, 87.3]) {
                    let o = c.createOscillator();
                    o.type = "sine";
                    o.frequency.value = f;
                    let g = c.createGain();
                    g.gain.value = .07;
                    let mod = c.createOscillator(),
                        mg = c.createGain();
                    mod.frequency.value = .028 + Math.random() * .025;
                    mg.gain.value = .035;
                    mod.connect(mg).connect(g.gain);
                    o.connect(g).connect(drone);
                    o.start();
                    mod.start()
                }
                this.ambNodes.drone = drone
            }
            setAmbience(a, dt) {
                if (!this.ctx || !this.ambNodes.wind) return;
                let t = this.ctx.currentTime;
                this.ambNodes.wind.gain.setTargetAtTime((a.wind ?? 0) * .22, t, 1.2);
                this.ambNodes.rain.gain.setTargetAtTime((a.rain ?? 0) * .115, t, 1);
                this.ambNodes.rumble.gain.setTargetAtTime(((a.wind ?? 0) * .035 + (a.night ? .025 : .008)), t, 1.8);
                this.ambNodes.drone.gain.setTargetAtTime((a.drone ?? 0) * .55, t, 2.2);
                this.chirpT -= dt;
                if (this.chirpT <= 0) {
                    this.chirpT = (a.night ? 4 : 6) + Math.random() * (a.night ? 7 : 10);
                    let out = this.out(void 0, void 0, .42);
                    if (!out) return;
                    let c = this.ctx,
                        s = c.currentTime + .02;
                    if (a.night) {
                        let o = c.createOscillator();
                        o.type = "sawtooth";
                        let base = 72 + Math.random() * 36;
                        o.frequency.setValueAtTime(base, s);
                        o.frequency.linearRampToValueAtTime(base * .68, s + 1.2);
                        let f = c.createBiquadFilter();
                        f.type = "bandpass";
                        f.frequency.value = 360 + Math.random() * 160;
                        f.Q.value = 3.2;
                        let g = c.createGain();
                        g.gain.setValueAtTime(1e-4, s);
                        g.gain.linearRampToValueAtTime(.018, s + .25);
                        g.gain.exponentialRampToValueAtTime(1e-4, s + 1.45);
                        o.connect(f).connect(g).connect(out.node);
                        o.start(s);
                        o.stop(s + 1.5)
                    } else if ((a.rain ?? 0) < .35 && Math.random() < .5) {
                        let o = c.createOscillator();
                        o.type = "sine";
                        let f = 2200 + Math.random() * 900;
                        o.frequency.setValueAtTime(f, s);
                        o.frequency.exponentialRampToValueAtTime(f * 1.22, s + .08);
                        o.frequency.exponentialRampToValueAtTime(f * .92, s + .18);
                        let g = c.createGain();
                        g.gain.setValueAtTime(1e-4, s);
                        g.gain.linearRampToValueAtTime(.018, s + .025);
                        g.gain.exponentialRampToValueAtTime(1e-4, s + .22);
                        o.connect(g).connect(out.node);
                        o.start(s);
                        o.stop(s + .25)
                    }
                }
            }
        },
        F = new $a;

    function Xe(i, e) {
        if (e) try {
            navigator.vibrate && navigator.vibrate(i)
        } catch {}
    }

    function h(i, e, ...t) {
        let a = document.createElement(i);
        if (e) {
            for (let [r, o] of Object.entries(e))
                if (!(o == null || o === !1))
                    if (r === "class") a.className = String(o);
                    else if (r === "style") typeof o == "string" ? a.setAttribute("style", o) : Object.assign(a.style, o);
            else if (r.startsWith("on") && typeof o == "function") {
                let s = r.slice(2).toLowerCase();
                s === "tap" ? za(a, o) : a.addEventListener(s, o)
            } else r === "html" ? a.innerHTML = String(o) : a.setAttribute(r, o === !0 ? "" : String(o))
        }
        return Zr(a, t), a
    }

    function Zr(i, e) {
        for (let t of e) t == null || t === !1 || (Array.isArray(t) ? Zr(i, t) : t instanceof Node ? i.appendChild(t) : i.appendChild(document.createTextNode(String(t))))
    }

    function za(i, e, t = !1) {
        let a = !1,
            r = 0,
            o = 0,
            s = null,
            d = 0,
            n = 0;
        let l = c => {
            let u = performance.now();
            if (u - n < 220 || i.disabled || i.classList.contains("disabled")) return;
            n = u, t || F.play("tap"), e(c)
        };
        i.style.touchAction = "manipulation", i.addEventListener("pointerdown", c => {
            a = !0, s = c.pointerId, r = c.clientX, o = c.clientY, d = performance.now(), i.classList.add("pressed");
            try {
                i.setPointerCapture?.(c.pointerId)
            } catch {}
        }), i.addEventListener("pointercancel", () => {
            a = !1, s = null, i.classList.remove("pressed")
        }), i.addEventListener("pointerup", c => {
            i.classList.remove("pressed");
            let u = a && (s === null || c.pointerId === s),
                m = Math.hypot(c.clientX - r, c.clientY - o);
            a = !1, s = null, u && m <= 24 && performance.now() - d < 1500 && l(c)
        }), i.addEventListener("click", c => {
            performance.now() - n > 350 && l(c)
        }), i.addEventListener("keydown", c => {
            (c.key === "Enter" || c.key === " ") && (c.preventDefault(), l(c))
        })
    }

    function me(i) {
        for (; i.firstChild;) i.removeChild(i.firstChild)
    }

    function z(i, e, t = "", a = {}) {
        return h("button", {
            class: "btn " + t,
            type: "button",
            onTap: e,
            ...a
        }, i)
    }
    var Yr = {
        back: "M15 5l-7 7 7 7",
        close: "M6 6l12 12M18 6L6 18",
        gear: "M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1",
        user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c1.5-4 4.5-6 8-6s6.5 2 8 6",
        users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2 20c1-3.5 3.6-5 7-5s6 1.5 7 5M16 4.5a3.3 3.3 0 0 1 0 6.4M18 14.5c2 .7 3.3 2.4 4 5",
        cart: "M3 4h2.5l2.2 10.5h10.6L20.5 7H7M9.5 19.5a1.2 1.2 0 1 0 0 .1M17 19.5a1.2 1.2 0 1 0 0 .1",
        map: "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14",
        pack: "M8 7V5a4 4 0 0 1 8 0v2M5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM9 13h6",
        house: "M3 11l9-7 9 7M5 10v10h14V10M10 20v-5h4v5",
        target: "M12 3v4M12 17v4M3 12h4M17 12h4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
        star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z",
        trophy: "M8 4h8v5a4 4 0 0 1-8 0zM8 6H4.5a3 3 0 0 0 3.5 4M16 6h3.5a3 3 0 0 1-3.5 4M12 13v4M8 21h8M9 17h6",
        play: "M8 5l11 7-11 7z",
        wrench: "M14.5 5.5a4 4 0 0 0 5 5L12 18l-2.5 2.5a2 2 0 0 1-3-3L9 15l7.5-7.5zM4 20l2-2",
        hammer: "M14 4l6 6-2 2-6-6zM12 6L4 14l3 3 8-8M3 21l3-3",
        coin: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v10M9 9.5h4.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 0 0 3h4.5",
        diamond: "M6 4h12l3 5-9 11L3 9zM3 9h18M9 4l3 5 3-5M12 9v11",
        hex: "M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5zM9 12h6M12 9v6",
        heart: "M12 20s-7-4.5-9-9a4.5 4.5 0 0 1 9-2 4.5 4.5 0 0 1 9 2c-2 4.5-9 9-9 9z",
        drop: "M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z",
        bolt: "M13 2L4 14h7l-1 8 9-12h-7z",
        food: "M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M17 3c-2 2-3 5-3 8h3v10",
        blood: "M12 4s5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10zM10 15a2 2 0 0 0 2 2",
        bio: "M12 12a2 2 0 1 0 0 .1M12 4a4 4 0 0 1 3.5 6M12 4a4 4 0 0 0-3.5 6M5 17a4 4 0 0 1 3.5-6.5M19 17a4 4 0 0 0-3.5-6.5M5 17a4 4 0 0 0 7 1M19 17a4 4 0 0 1-7 1",
        check: "M5 12l5 5 9-10",
        lock: "M6 11h12v10H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3",
        clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
        sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2",
        moon: "M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z",
        rain: "M7 15a4 4 0 0 1 .5-8A6 6 0 0 1 19 8a3.5 3.5 0 0 1-1 7zM8 18l-1 3M12 18l-1 3M16 18l-1 3",
        fog: "M4 9h16M3 13h18M5 17h14",
        cloud: "M7 18a4 4 0 0 1 .5-8A6 6 0 0 1 19 11a3.5 3.5 0 0 1-1 7z",
        shield: "M12 3l8 3v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V6z",
        ping: "M12 21s-6-6-6-11a6 6 0 0 1 12 0c0 5-6 11-6 11zM12 8a2 2 0 1 0 0 .1",
        swap: "M4 8h13l-3-3M20 16H7l3 3",
        reload: "M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5",
        hand: "M8 12V5.5a1.5 1.5 0 0 1 3 0V11M11 10V4.5a1.5 1.5 0 0 1 3 0V11M14 10.5V6a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7 6 6 0 0 1-5-3l-2.5-4.5a1.5 1.5 0 0 1 2.5-1.5L8 14",
        knife: "M3 21l7-7M10 14l9-9c1 3 0 6-3 9l-3 3z",
        crouch: "M12 5a2 2 0 1 0 0 .1M9 21l2-6-3-2 2-4h4l2 4M9 13h6",
        run: "M14 4a2 2 0 1 0 0 .1M6 20l3-5 3 2 1-5-3-2 2-3 4 3 3 1M10 10l-4 1",
        medkit: "M4 8h16v12H4zM9 8V5h6v3M12 11v6M9 14h6",
        flashlight: "M7 3h10l-2 7H9zM9 10h6v11H9zM12 14v2",
        bag: "M5 8h14l-1 12H6zM9 8a3 3 0 0 1 6 0",
        plus: "M12 5v14M5 12h14",
        minus: "M5 12h14",
        info: "M12 8v.1M12 11v6M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
        leaf: "M5 19C5 10 11 5 20 4c0 9-5 15-14 15zM5 19l8-8",
        flask: "M9 3h6M10 3v6l-5 10a1.5 1.5 0 0 0 1.3 2h11.4a1.5 1.5 0 0 0 1.3-2L14 9V3",
        radio: "M5 9h14v12H5zM8 9l9-6M9 13h6M9 17h2",
        pause: "M8 5v14M16 5v14",
        sound: "M4 9h4l5-4v14l-5-4H4zM16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11",
        eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
        exit: "M14 4h5v16h-5M10 8l-4 4 4 4M6 12h10",
        expand: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5",
        shrink: "M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5",
        scope: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 3v5M12 16v5M3 12h5M16 12h5"
    };

    function E(i, e = "") {
        let t = "http://www.w3.org/2000/svg",
            a = document.createElementNS(t, "svg");
        a.setAttribute("viewBox", "0 0 24 24"), a.setAttribute("class", "ic " + e), a.setAttribute("aria-hidden", "true");
        let r = document.createElementNS(t, "path");
        return r.setAttribute("d", Yr[i] ?? Yr.info), a.appendChild(r), a
    }
    var oi = null;

    function Xr(i) {
        oi = i
    }

    function K(i, e = "info", t = 2400) {
        if (!oi) return;
        let a = h("div", {
            class: "toast t-" + e,
            role: "status"
        }, i);
        for (oi.appendChild(a); oi.children.length > 4;) oi.removeChild(oi.firstChild);
        requestAnimationFrame(() => a.classList.add("in")), setTimeout(() => {
            a.classList.remove("in"), a.classList.add("out"), setTimeout(() => a.remove(), 350)
        }, t)
    }
    var si = null;

    function Qr(i) {
        si = i
    }

    function ue() {
        if (!si) return;
        let i = si.lastElementChild;
        i && (i.classList.add("out"), setTimeout(() => i.remove(), 180))
    }

    function ni() {
        si && me(si)
    }

    function De(i, e = {}) {
        let t = h("div", {
                class: "sheet" + (e.wide ? " wide" : ""),
                role: "dialog",
                "aria-modal": "true"
            }, e.title ? h("div", {
                class: "sheet-h"
            }, h("h3", null, e.title), e.noClose ? null : h("button", {
                class: "ibtn",
                "aria-label": "Close",
                onTap: () => {
                    ue(), e.onClose?.()
                }
            }, E("close"))) : null, h("div", {
                class: "sheet-b"
            }, i)),
            a = h("div", {
                class: "scrim"
            }, t);
        return e.noClose || a.addEventListener("pointerdown", r => {
            r.target === a && (ue(), e.onClose?.())
        }), si.appendChild(a), requestAnimationFrame(() => a.classList.add("in")), a
    }

    function nt(i, e, t, a, r = !1, o = "Cancel") {
        let s = h("div", {
            class: "confirm"
        }, h("p", null, e), h("div", {
            class: "row end gap"
        }, z(o, () => ue(), "ghost"), z(t, () => {
            ue(), a()
        }, r ? "danger" : "primary")));
        De(s, {
            title: i
        })
    }

    function G(i) {
        return Math.round(i).toLocaleString("en-GB")
    }

    function Qe(i) {
        if (i <= 0) return "Ready";
        let e = Math.ceil(i / 1e3);
        if (e < 60) return e + "s";
        let t = Math.floor(e / 60);
        return t < 60 ? t + "m " + e % 60 + "s" : Math.floor(t / 60) + "h " + t % 60 + "m"
    }

    function Pt(i, e, t) {
        let a = i === "cash" ? "coin" : i === "credits" ? "diamond" : "hex",
            r = i === "cash" ? "Cash" : i === "credits" ? "DOVY Credits" : "Black-Market Tokens";
        return h("div", {
            class: "cur c-" + i,
            title: r,
            "aria-label": `${r}: ${G(e)}`,
            onTap: t
        }, E(a), h("span", null, G(e)), t ? h("b", {
            class: "cur-add"
        }, "+") : null)
    }
    var Ha = "dz_profile_v1",
        aa = class {
            constructor() {
                v(this, "mode", "memory");
                v(this, "doc", null);
                v(this, "timer", 0);
                v(this, "inFlight", !1);
                v(this, "pending", null);
                v(this, "userId", null);
                v(this, "lastError", "");
                v(this, "onStatus", () => {});
                v(this, "api", null)
            }
            async init() {
                try {
                    localStorage.setItem("dz_probe", "1"), localStorage.removeItem("dz_probe"), this.mode = "local"
                } catch {
                    this.mode = "memory"
                }
                let n = window.DZ_CONFIG?.api;
                if (n) try {
                    let l = await fetch(n + "/api/me", {
                        credentials: "include",
                        cache: "no-store"
                    });
                    if (l.ok) {
                        let c = await l.json();
                        this.api = n, this.userId = c.id ?? null, this.mode = "api";
                        return
                    }
                } catch (l) {
                    this.lastError = String(l)
                }
                let e = window.claude;
                if (e?.use) try {
                    let [t, a] = await Promise.race([Promise.all([e.use("db"), e.use("user")]), new Promise(o => setTimeout(() => o([null, null]), 6e3))]);
                    if (!t || !a) return;
                    let r = await a.id();
                    if (!r) return;
                    this.userId = r, this.doc = t.doc(`data/users/${r}/profile`), this.mode = "db"
                } catch (t) {
                    this.lastError = String(t)
                }
            }
            async load() {
                let e = null;
                try {
                    let r = localStorage.getItem(Ha);
                    r && (e = JSON.parse(r))
                } catch {}
                let t = null;
                if (this.api) try {
                    let r = await fetch(this.api + "/api/profile", {
                        credentials: "include",
                        cache: "no-store"
                    });
                    if (r.ok) {
                        let o = await r.json();
                        o?.json && (t = typeof o.json === "string" ? JSON.parse(o.json) : o.json)
                    }
                } catch (r) {
                    this.lastError = String(r)
                } else if (this.doc) try {
                    let r = await this.doc.get();
                    if (r.exists) {
                        let o = r.data();
                        o?.json && (t = JSON.parse(o.json))
                    }
                } catch (r) {
                    this.lastError = String(r)
                }
                let a = r => r && zr(r) ? r : null;
                return e = a(e), t = a(t), e && t ? (e.savedAt ?? 0) > (t.savedAt ?? 0) ? e : t : t ?? e
            }
            save(e, t = !1) {
                e.savedAt = Date.now(), this.pending = e, clearTimeout(this.timer), t ? this.flush() : this.timer = window.setTimeout(() => this.flush(), 1200)
            }
            async flush() {
                let e = this.pending;
                if (!e) return;
                let t = JSON.stringify(e);
                try {
                    localStorage.setItem(Ha, t)
                } catch {}
                if (this.api) {
                    if (this.inFlight) return;
                    this.inFlight = !0, this.pending = null;
                    fetch(this.api + "/api/profile", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        credentials: "include",
                        body: JSON.stringify({
                            json: t
                        })
                    }).then(r => {
                        if (!r.ok) throw new Error("profile save failed");
                        this.onStatus("saved")
                    }).catch(r => {
                        this.lastError = String(r), this.onStatus("error")
                    }).finally(() => {
                        this.inFlight = !1, this.pending && this.flush()
                    });
                    return
                }
                if (!this.doc) {
                    this.pending = null;
                    return
                }
                if (!this.inFlight) {
                    this.inFlight = !0, this.pending = null;
                    try {
                        await this.doc.set({
                            json: t,
                            v: 1,
                            savedAt: e.savedAt ?? Date.now()
                        }), this.onStatus("saved")
                    } catch (a) {
                        this.lastError = String(a?.code ?? a), this.onStatus("error")
                    } finally {
                        this.inFlight = !1, this.pending && this.flush()
                    }
                }
            }
            wipeLocal() {
                try {
                    localStorage.removeItem(Ha)
                } catch {}
            }
        };
    var Jr = "dz_events_v1",
        ms = new Set(["tutorial_started", "tutorial_completed", "first_run_started", "first_extraction", "first_death", "first_purchase", "player_day_1", "player_day_7", "player_day_30"]),
        Da = class {
            constructor() {
                v(this, "queue", []);
                v(this, "log", []);
                v(this, "session", Math.random().toString(36).slice(2, 10));
                v(this, "userId", "anon");
                v(this, "endpoint", null);
                v(this, "seen", new Set);
                v(this, "timer", 0);
                try {
                    let e = localStorage.getItem(Jr);
                    if (e) {
                        let t = JSON.parse(e);
                        this.log = t.log ?? [];
                        for (let a of t.seen ?? []) this.seen.add(a)
                    }
                } catch {}
            }
            track(e, t) {
                if (ms.has(e)) {
                    if (this.seen.has(e)) return;
                    this.seen.add(e)
                }
                let a = {
                    n: e,
                    t: Date.now(),
                    p: t,
                    u: this.userId,
                    s: this.session
                };
                this.log.push(a), this.log.length > 400 && this.log.splice(0, this.log.length - 400), this.endpoint && this.queue.push(a), this.persist(), clearTimeout(this.timer), this.timer = window.setTimeout(() => this.flush(), 4e3)
            }
            retention(e, t) {
                let a = Math.floor((t - e) / 864e5);
                a >= 1 && this.track("player_day_1"), a >= 7 && this.track("player_day_7"), a >= 30 && this.track("player_day_30")
            }
            persist() {
                try {
                    localStorage.setItem(Jr, JSON.stringify({
                        log: this.log.slice(-200),
                        seen: [...this.seen]
                    }))
                } catch {}
            }
            async flush() {
                if (!this.endpoint || !this.queue.length) return;
                let e = this.queue.splice(0, 100);
                try {
                    await fetch(this.endpoint, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({
                            events: e
                        }),
                        keepalive: !0
                    })
                } catch {
                    this.queue.unshift(...e)
                }
            }
        },
        gt = new Da;
    var te = {
        ink: "#08090a",
        deep: "#101214",
        text: "#f3f0e9",
        dim: "#aaa69d",
        mute: "#6f716f",
        acc: "#e2a64a",
        accHi: "#ffdca0",
        accLo: "#6f4919",
        cyan: "#86bdc8",
        lilac: "#a6a8b3",
        pink: "#c86b73",
        gold: "#e4b75b",
        warn: "#eab05b",
        red: "#e9575e",
        green: "#86bd73"
    };

    function $(i, e) {
        let t = i.replace("#", ""),
            a = parseInt(t.length === 3 ? t.split("").map(d => d + d).join("") : t, 16),
            r = a >> 16 & 255,
            o = a >> 8 & 255,
            s = a & 255;
        return e >= 0 ? (r += (255 - r) * e, o += (255 - o) * e, s += (255 - s) * e) : (r *= 1 + e, o *= 1 + e, s *= 1 + e), "#" + (1 << 24 | Math.round(r) << 16 | Math.round(o) << 8 | Math.round(s)).toString(16).slice(1)
    }
    var _t = ["#f1c9a5", "#d9a77e", "#b47a52", "#8a5a3a", "#5e3b26"],
        It = ["#1d1a16", "#4a3020", "#8a6a3a", "#b8a080", "#6a2a1a"];
    var ne = 2;

    function pe(i, e) {
        let t = document.createElement("canvas");
        return t.width = Math.max(1, Math.ceil(i)), t.height = Math.max(1, Math.ceil(e)), t
    }

    function ee(i, e, t, a, r, o) {
        o = Math.max(0, Math.min(o, a / 2, r / 2)), i.beginPath(), i.moveTo(e + o, t), i.arcTo(e + a, t, e + a, t + r, o), i.arcTo(e + a, t + r, e, t + r, o), i.arcTo(e, t + r, e, t, o), i.arcTo(e, t, e + a, t, o), i.closePath()
    }

    function Je(i, e, t, a, r, o, s, d = 1.2) {
        i.beginPath(), i.ellipse(e, t, Math.max(.1, a), Math.max(.1, r), 0, 0, Math.PI * 2), i.fillStyle = o, i.fill(), s && (i.lineWidth = d, i.strokeStyle = s, i.stroke())
    }

    function bt(i, e, t, a, r) {
        let o = i.createRadialGradient(e - a * .35, t - a * .4, a * .1, e, t, a * 1.1);
        return o.addColorStop(0, $(r, .22)), o.addColorStop(.6, r), o.addColorStop(1, $(r, -.35)), o
    }

    function fe(i) {
        return i = Math.imul(i ^ 1540483477, 668265261), ((i ^ i >>> 15) >>> 0) / 4294967296
    }
    var re = "rgba(8,9,6,0.85)";

    function lt(i, e) {
        let t = e.r,
            a = Math.sin(e.phase * Math.PI * 2) * e.stride,
            r = t * (e.thin ? .86 : e.bloated ? 1.22 : e.hunched ? 1.25 : 1),
            o = t * (e.bloated ? .95 : .62);
        e.arms !== "crawl" && e.arms !== "downed" ? (Je(i, a * t * .55, -t * .36, t * .32, t * .2, $(e.trousers, -.25), re, 1), Je(i, -a * t * .55, t * .36, t * .32, t * .2, $(e.trousers, -.25), re, 1)) : e.arms === "crawl" && (i.fillStyle = $(e.trousers, -.1), ee(i, -t * 1.8, -t * .45, t * 1.3, t * .34, t * .15), i.fill(), ee(i, -t * 1.7 + a * 3, t * .1, t * 1.2, t * .34, t * .15), i.fill()), e.pack && (i.fillStyle = re, ee(i, -o - t * .62, -r * .62, t * .72, r * 1.24, t * .22), i.fill(), i.fillStyle = bt(i, -o - t * .25, 0, t * .7, e.pack), ee(i, -o - t * .56, -r * .56, t * .62, r * 1.12, t * .2), i.fill(), i.fillStyle = $(e.pack, -.25), i.fillRect(-o - t * .5, -r * .1, t * .4, r * .2));
        let s = e.cloth,
            d = e.skin,
            n = (m, p, f, b, x) => {
                i.lineCap = "round", i.strokeStyle = re, i.lineWidth = x + 1.6, i.beginPath(), i.moveTo(m, p), i.lineTo(f, b), i.stroke(), i.strokeStyle = s, i.lineWidth = x, i.beginPath(), i.moveTo(m, p), i.lineTo(f, b), i.stroke(), Je(i, f, b, x * .55, x * .55, d, re, .8)
            },
            l = t * .34;
        if (e.arms === "zombie" || e.arms === "crawl") {
            let m = e.arms === "crawl" ? t * 1.25 : t * (1.35 + (e.armSwing ?? 0) * .35);
            n(0, -r * .72, m + a * t * .2, -r * .5, l), n(0, r * .72, m - a * t * .2, r * .42, l)
        } else if (e.arms === "rifle") n(0, r * .75, t * .55, r * .2, l), n(0, -r * .75, t * 1.25, -r * .02, l);
        else if (e.arms === "pistol") n(0, r * .7, t * 1.05, r * .06, l), n(0, -r * .7, t * 1.05, -r * .06, l);
        else if (e.arms === "melee") {
            let m = e.armSwing ?? 0;
            n(0, r * .75, t * (.8 + m * .4), r * (.55 - m * 1), l), n(0, -r * .75, t * .45, -r * .85, l)
        } else(e.arms === "idle" || e.arms === "downed") && (n(0, r * .78, -a * t * .4, r * .9, l), n(0, -r * .78, a * t * .4, -r * .9, l));
        if (Je(i, 0, 0, o + 1, r + 1, re), i.beginPath(), i.ellipse(0, 0, o, r, 0, 0, Math.PI * 2), i.fillStyle = bt(i, 0, 0, r, e.cloth), i.fill(), i.strokeStyle = $(e.cloth, -.3), i.lineWidth = 1, i.beginPath(), i.moveTo(-o * .2, -r * .8), i.lineTo(-o * .2, r * .8), i.stroke(), e.cloth2 !== e.cloth && (i.fillStyle = e.cloth2, i.beginPath(), i.ellipse(o * .25, 0, o * .5, r * .45, 0, 0, Math.PI * 2), i.fill()), e.armour) {
            i.fillStyle = re, ee(i, -o * .85, -r * .7, o * 1.75, r * 1.4, t * .18), i.fill(), i.fillStyle = bt(i, 0, 0, r * .8, e.armour), ee(i, -o * .78, -r * .64, o * 1.62, r * 1.28, t * .16), i.fill(), i.fillStyle = $(e.armour, -.25);
            for (let m = -1; m <= 1; m++) i.fillRect(o * .2, m * r * .36 - 2, o * .5, 4)
        }
        if (e.bloated)
            for (let m = 0; m < 6; m++) {
                let p = fe(m * 7 + 3) * Math.PI * 2,
                    f = fe(m * 13) * r * .7;
                Je(i, Math.cos(p) * f * .6, Math.sin(p) * f, t * .16, t * .16, "#c8e05a", "rgba(60,80,20,0.8)", .8)
            }
        if (e.blood)
            for (let m = 0; m < e.blood; m++) {
                let p = fe(m * 31 + 9) * Math.PI * 2,
                    f = fe(m * 17 + 1) * r * .7;
                i.fillStyle = `rgba(${90+m*10},10,8,0.75)`, i.beginPath(), i.ellipse(Math.cos(p) * f * .5, Math.sin(p) * f, t * (.15 + fe(m) * .15), t * (.1 + fe(m + 4) * .12), p, 0, Math.PI * 2), i.fill()
            }
        if (e.gore) {
            i.strokeStyle = "rgba(220,200,180,0.8)", i.lineWidth = 1.4;
            for (let m = -2; m <= 2; m++) i.beginPath(), i.moveTo(-o * .4, m * r * .18), i.quadraticCurveTo(o * .2, m * r * .22, o * .5, m * r * .16), i.stroke();
            Je(i, o * .1, r * .4, t * .25, t * .18, "rgba(140,20,16,0.9)")
        }
        e.shield && (i.fillStyle = re, ee(i, t * 1, -r * 1.15, t * .36, r * 2.3, 3), i.fill(), i.fillStyle = "rgba(140,170,200,0.55)", ee(i, t * 1.04, -r * 1.1, t * .28, r * 2.2, 3), i.fill(), i.fillStyle = "rgba(255,255,255,0.35)", i.fillRect(t * 1.08, -r, 2, r * 1.6));
        let c = e.hunched ? t * .35 : t * .08,
            u = t * (e.bloated ? .42 : .5);
        e.pony && e.hair && !e.helmet && Je(i, c - u * 1.15, 0, u * .55, u * .32, e.hair, re, .8), Je(i, c, 0, u + .8, u + .8, re), i.beginPath(), i.arc(c, 0, u, 0, Math.PI * 2), i.fillStyle = bt(i, c, 0, u, e.skin), i.fill(), e.helmet ? (i.beginPath(), i.arc(c - u * .08, 0, u * 1.12, 0, Math.PI * 2), i.fillStyle = bt(i, c, 0, u * 1.1, e.helmet), i.fill(), i.strokeStyle = re, i.lineWidth = 1, i.stroke(), e.visor ? (i.fillStyle = "rgba(30,50,70,0.9)", i.beginPath(), i.arc(c, 0, u * 1, -.9, .9), i.lineTo(c + u * .3, 0), i.closePath(), i.fill()) : (i.fillStyle = $(e.helmet, -.3), i.fillRect(c - u * .2, -1, u * .6, 2))) : e.hair && (i.beginPath(), i.arc(c - u * .18, 0, u * .86, Math.PI * .45, Math.PI * 1.55), i.closePath(), i.fillStyle = e.hair, i.fill(), i.beginPath(), i.ellipse(c - u * .05, 0, u * .78, u * .82, 0, 0, Math.PI * 2), i.fillStyle = e.hair, i.globalAlpha = .85, i.fill(), i.globalAlpha = 1), e.gasmask && (Je(i, c + u * .55, -u * .3, u * .28, u * .24, "#2a2c2a", re, .8), Je(i, c + u * .55, u * .3, u * .28, u * .24, "#2a2c2a", re, .8), Je(i, c + u * .95, 0, u * .32, u * .32, "#3a3e3a", re, .8)), i.fillStyle = "rgba(255,255,255,0.12)", i.beginPath(), i.ellipse(c - u * .3, -u * .35, u * .35, u * .22, -.6, 0, Math.PI * 2), i.fill()
    }
    var fs = {
            walker: [
                ["#4a4f5a", "#6b5d4a", "#2f3338"],
                ["#6a3a32", "#6a3a32", "#3a3a3e"],
                ["#8a8470", "#5a6a7a", "#2a3a4a"],
                ["#3a5a4a", "#3a5a4a", "#2a2a2e"]
            ],
            runner: [
                ["#5a3a3a", "#3a3a44", "#2a2a30"],
                ["#2a4a6a", "#e0e0e0", "#2a2e36"]
            ]
        },
        eo = new Map;

    function to(i, e, t, a, r) {
        let o = Be[i],
            s = fs[i],
            d = s ? s[e % s.length] : [o.cloth, o.cloth2, $(o.cloth, -.3)],
            n = {
                r: o.radius,
                skin: o.skin,
                hair: e % 3 === 2 ? null : $(o.skin, -.55),
                cloth: d[0],
                cloth2: d[1],
                trousers: d[2],
                phase: t,
                stride: a,
                arms: i === "crawler" ? "crawl" : "zombie",
                armSwing: r ? 1 : Math.sin(t * Math.PI * 2) * .15,
                blood: 2 + e % 3
            };
        return i === "runner" && (n.thin = !0), i === "soldier" && (n.helmet = "#4d5a3a", n.armour = "#3c452c", n.hair = null), i === "riot" && (n.helmet = "#1f242c", n.visor = !0, n.armour = "#2a3038", n.shield = !0), i === "toxic" && (n.bloated = !0, n.blood = 1), i === "brute" && (n.hunched = !0, n.gore = !0, n.blood = 5, n.hair = null), n
    }

    function Ii(i, e) {
        let t = i + e,
            a = eo.get(t);
        if (a) return a;
        let r = Be[i],
            o = Math.ceil((r.radius * 2 + (i === "crawler" ? 46 : 30)) * ne * 1.25),
            s = (m, p, f, b) => {
                let x = pe(o, o),
                    k = x.getContext("2d");
                return k.translate(o / 2, o / 2), k.scale(ne, ne), lt(k, to(i, e, m, p, f)), b && (k.globalCompositeOperation = "source-atop", k.fillStyle = "rgba(255,240,230,0.75)", k.fillRect(-o, -o, o * 2, o * 2)), x
            },
            d = [],
            n = [];
        for (let m = 0; m < 8; m++) d.push(s(m / 8, i === "crawler" ? .6 : 1, !1, !1)), m % 2 === 0 && n.push(s(m / 8, 1, !1, !0));
        let l = pe(o * 1.3, o * 1.3),
            c = l.getContext("2d");
        c.translate(l.width / 2, l.height / 2), c.scale(ne, ne), c.fillStyle = "rgba(90,8,6,0.75)", c.beginPath(), c.ellipse(-2, 3, r.radius * 1.5, r.radius * 1.1, .3, 0, Math.PI * 2), c.fill(), c.fillStyle = "rgba(60,4,4,0.6)", c.beginPath(), c.ellipse(r.radius * .6, -r.radius * .5, r.radius * .7, r.radius * .45, -.6, 0, Math.PI * 2), c.fill();
        let u = to(i, e, .25, 0, !1);
        return u.arms = "downed", u.shield = !1, c.rotate(.3), lt(c, u), c.globalCompositeOperation = "source-atop", c.fillStyle = "rgba(20,16,10,0.25)", c.fillRect(-o, -o, o * 2, o * 2), a = {
            walk: d,
            attack: s(0, .4, !0, !1),
            flash: n,
            corpse: l,
            size: o
        }, eo.set(t, a), a
    }

    function gs(i) {
        if (!i) return "none";
        let e = C(i);
        return e.melee ? "melee" : e.weapon?.cls ?? "none"
    }
    var bs = {
        pistol: 13,
        revolver: 15,
        smg: 22,
        rifle: 30,
        shotgun: 30,
        hunting: 33,
        sniper: 38
    };

    function Na(i, e, t, a, r) {
        if (!e) return;
        let o = C(e.id);
        if (o.melee) {
            i.save(), i.translate(t, 6), i.rotate(-1.1 + a * 2);
            let u = o.id === "m_knife" ? 13 : 24;
            i.fillStyle = re, i.fillRect(-2, -2.6, u + 3, 5.2), i.fillStyle = o.id === "m_bat" ? "#b08a56" : o.id === "m_crowbar" ? "#a8262a" : "#3a2618", i.fillRect(-1, -1.6, u * .4, 3.2), i.fillStyle = o.id === "m_bat" ? "#b08a56" : o.id === "m_crowbar" ? "#a8262a" : "#b8bec4", i.fillRect(u * .4 - 1, -1.8, u * .6, 3.6), o.id === "m_axe" && (i.fillStyle = "#c0302a", i.fillRect(u - 4, -6, 6, 9)), i.restore();
            return
        }
        let s = o.weapon,
            d = bs[s.cls] ?? 20,
            n = r ? Ve.find(u => u.id === r)?.colour ?? "#2a2c30" : o.id === "w_wraith" ? "#1f2a2c" : o.tint && o.id === "w_vk74" ? "#2e3033" : "#2a2c30",
            l = o.id === "w_vk74" || s.cls === "hunting" || o.id === "w_mako" ? "#6b4528" : n;
        i.fillStyle = re, i.fillRect(t - 2, -2.8, d + 4, 5.6), s.cls !== "pistol" && s.cls !== "revolver" && (i.fillStyle = l, i.fillRect(t - 1, -2.2, d * .3, 4.4)), i.fillStyle = n, i.fillRect(t + d * .25, -2, d * .5, 4), i.fillStyle = $(n, -.25), i.fillRect(t + d * .7, -1.2, d * .32, 2.4), (s.cls === "smg" || s.cls === "rifle") && (i.fillStyle = $(n, -.35), i.fillRect(t + d * .45, 2, 3, 3.5)), o.id === "w_brute12" && (i.fillStyle = "#1a1c1e", i.beginPath(), i.arc(t + d * .5, 3, 3.6, 0, Math.PI * 2), i.fill());
        let c = e.att ?? {};
        (c.muzzle || s.integralSuppressor) && (i.fillStyle = re, i.fillRect(t + d - 1, -2.2, 10, 4.4), i.fillStyle = "#26282b", i.fillRect(t + d, -1.6, 8, 3.2)), c.optic === "att_scope" ? (i.fillStyle = re, i.fillRect(t + d * .3, -1.8, 11, 3.6), i.fillStyle = "#3a4048", i.fillRect(t + d * .3 + 1, -1.2, 9, 2.4), i.fillStyle = "rgba(120,200,255,0.8)", i.fillRect(t + d * .3 + 9, -1, 1.5, 2)) : c.optic === "att_reddot" && (i.fillStyle = "#2a2d30", i.fillRect(t + d * .38, -1.5, 4, 3), i.fillStyle = "#ff3b2f", i.fillRect(t + d * .38 + 3, -.5, 1, 1)), c.tac && (i.fillStyle = "#2e3135", i.fillRect(t + d * .62, 2.2, 5, 2.4), i.fillStyle = c.tac === "att_laser" ? "#ff3b2f" : "#fff3c0", i.fillRect(t + d * .62 + 4, 2.4, 1.4, 2)), o.id === "w_wraith" && (i.fillStyle = "#3fe0d0", i.fillRect(t + d * .3, -.5, d * .4, 1))
    }

    function dzOutfitDetail(i, e) {
        if (!e) return;
        i.save(), i.lineCap = "round", i.lineJoin = "round";
        let t = e.accent ?? "#c8a24a";
        i.strokeStyle = "rgba(8,9,7,.7)", i.lineWidth = 2.5, i.beginPath(), i.moveTo(-4, -7), i.lineTo(5, 7), i.stroke(), i.strokeStyle = t, i.lineWidth = 1.1, i.beginPath(), i.moveTo(-4, -7), i.lineTo(5, 7), i.stroke();
        switch (e.id) {
            case "o_nightwatch":
                i.fillStyle = t, i.fillRect(-7, -10, 2, 6), i.fillRect(5, -10, 2, 6), i.fillStyle = "#0d0f12", i.fillRect(-5, 5, 10, 3);
                break;
            case "o_scavenger":
                i.fillStyle = "#9a7952", i.fillRect(-8, 2, 4, 5), i.fillRect(4, 3, 4, 4), i.fillStyle = t, i.fillRect(-2, -10, 4, 2);
                break;
            case "o_responder":
                i.fillStyle = "#e7e0d1", i.fillRect(-1.4, -6, 2.8, 8), i.fillRect(-4, -3.4, 8, 2.8), i.strokeStyle = t, i.lineWidth = 1.2, i.strokeRect(-6, 5, 12, 3);
                break;
            case "o_marsh":
                for (let a = 0; a < 7; a++) {
                    let r = -7 + fe(a * 17) * 14,
                        o = -9 + fe(a * 23 + 4) * 18;
                    i.fillStyle = a % 2 ? t : "#667653", i.beginPath(), i.arc(r, o, 1.3 + fe(a * 5), 0, Q), i.fill()
                }
                break;
            case "o_ash":
                i.strokeStyle = t, i.lineWidth = 1.4, i.beginPath(), i.moveTo(-7, -8), i.lineTo(-7, 8), i.moveTo(7, -8), i.lineTo(7, 8), i.stroke(), i.fillStyle = "#1d1c1c", i.fillRect(-5, 5, 10, 3);
                break;
            case "o_bandit":
                i.fillStyle = t, i.fillRect(-7, -8, 14, 2), i.fillRect(4, 1, 4, 6), i.strokeStyle = "#8b6755", i.lineWidth = 1.2, i.beginPath(), i.moveTo(-6, 5), i.lineTo(6, -5), i.stroke();
                break;
            case "o_forest":
                for (let a = 0; a < 9; a++) {
                    let r = -8 + fe(a * 31) * 16,
                        o = -9 + fe(a * 19 + 2) * 18;
                    i.fillStyle = a % 2 ? t : "#48603f", i.beginPath(), i.arc(r, o, 1 + fe(a * 7) * 1.4, 0, Q), i.fill()
                }
                break;
            case "o_winter":
                i.strokeStyle = "#e2e8ea", i.lineWidth = 2.2, i.beginPath(), i.arc(0, -7, 6, Math.PI, 0), i.stroke(), i.fillStyle = t, i.fillRect(-7, 5, 14, 2);
                break;
            case "o_redline":
                i.strokeStyle = t, i.lineWidth = 1.8, i.beginPath(), i.moveTo(-6, -8), i.lineTo(6, 8), i.moveTo(2, -9), i.lineTo(7, -4), i.stroke(), i.fillStyle = "#07090a", i.fillRect(-5, 4, 10, 4);
                break;
            case "o_harbour":
                i.strokeStyle = t, i.lineWidth = 1.5, i.beginPath(), i.moveTo(-7, -7), i.lineTo(7, -7), i.moveTo(-7, 5), i.lineTo(7, 5), i.stroke(), i.fillStyle = "#7b5a36", i.fillRect(-8, 0, 4, 5);
                break;
            case "o_woodland":
                for (let a = 0; a < 6; a++) {
                    let r = -7 + fe(a * 29) * 14,
                        o = -8 + fe(a * 13 + 7) * 16;
                    i.fillStyle = a % 2 ? t : "#596043", i.fillRect(r, o, 2.2, 2.2)
                }
                i.fillStyle = "#4a3525", i.fillRect(4, 1, 4, 6);
                break;
            case "o_merc":
                i.fillStyle = "#1b1e21", i.fillRect(-7, -4, 14, 3), i.fillRect(-7, 3, 14, 3), i.fillStyle = t, i.fillRect(-8, 0, 4, 6), i.fillRect(4, 0, 4, 6);
                break;
            case "o_sheriff":
                i.strokeStyle = t, i.lineWidth = 1.4, i.beginPath(), i.moveTo(-7, -6), i.lineTo(7, -6), i.stroke(), i.fillStyle = t, i.beginPath(), i.arc(4, -1, 2.1, 0, Q), i.fill(), i.fillStyle = "#5a3f2a", i.fillRect(-7, 4, 14, 3);
                break;
            case "o_nomad":
                i.strokeStyle = t, i.lineWidth = 1.8, i.beginPath(), i.moveTo(-6, -8), i.lineTo(6, 8), i.stroke(), i.fillStyle = "#8b7657", i.fillRect(-8, 2, 4, 5);
                break;
            case "o_raider2":
                i.fillStyle = t, i.fillRect(-8, -7, 3, 4), i.fillRect(5, -7, 3, 4), i.fillRect(-8, 3, 4, 5), i.fillStyle = "#0c0d0e", i.fillRect(-5, 6, 10, 3);
                break;
            case "o_civildef":
                i.fillStyle = t, i.fillRect(-7, -7, 14, 2), i.fillRect(-7, 5, 14, 2), i.fillRect(-1, -9, 2, 16);
                break;
            case "o_frost":
                i.strokeStyle = "#eef5f6", i.lineWidth = 2.4, i.beginPath(), i.arc(0, -7, 6.5, Math.PI, 0), i.stroke(), i.fillStyle = t, i.fillRect(-8, 4, 16, 2), i.fillStyle = "#dce8ea", i.fillRect(-7, 7, 14, 2);
                break;
            case "o_paramedic":
                i.fillStyle = "#e8e05a", i.fillRect(-6, -8, 12, 2), i.fillRect(-6, 6, 12, 2);
                break;
            case "o_operator":
            case "o_warlord":
                i.fillStyle = t, i.fillRect(-8, 1, 4, 6), i.fillRect(4, 1, 4, 6);
                break
        }
        i.restore()
    }

    ye.push(
        {id:"o_fieldmedic",name:"Field Medic",jacket:"#48574c",trousers:"#303934",accent:"#deddd2",source:"Threads",cash:11000,detail:"medic"},
        {id:"o_mechanic",name:"Garage Mechanic",jacket:"#535b61",trousers:"#363a3d",accent:"#b89759",source:"Threads",cash:9500,detail:"mechanic"},
        {id:"o_cbrn",name:"CBRN Survivor",jacket:"#7e7950",trousers:"#56533b",accent:"#bab685",source:"Threads",cash:22000,detail:"hazmat"},
        {id:"o_patrol",name:"Police Survivor",jacket:"#303b48",trousers:"#242c35",accent:"#c5bd8a",source:"Threads",cash:17500,detail:"police"},
        {id:"o_veteran",name:"Military Veteran",jacket:"#4d5741",trousers:"#3d4432",accent:"#8f9672",source:"Threads",cash:25000,detail:"military"},
        {id:"o_prestige",name:"Harrow Sentinel",jacket:"#272d2c",trousers:"#1d2321",accent:"#c5a568",source:"Threads",cash:65000,detail:"prestige"}
    );
    function ao(i, e) {
        let t = ye.find(u => u.id === e.look.outfit) ?? ye[0],
            a = e.lo.equip[e.active],
            r = gs(a?.id),
            o = e.downed || e.dead ? "downed" : r === "melee" || r === "none" ? e.meleeT > 0 ? "melee" : "idle" : r === "pistol" || r === "revolver" ? "pistol" : "rifle";
        i.save(), i.translate(e.x, e.y), i.rotate(e.angle);
        let s = e.recoil * 2.5;
        i.translate(-s, 0), e.crouch && i.scale(.92, .92);
        let d = e.lo.equip.helmet ? C(e.lo.equip.helmet.id) : null,
            n = e.lo.equip.armour ? C(e.lo.equip.armour.id) : null,
            l = e.lo.equip.backpack ? C(e.lo.equip.backpack.id).tint ?? "#5a5f3a" : null,
            c = {
                r: 13,
                skin: _t[e.look.skin] ?? _t[1],
                hair: It[e.look.hair] ?? It[0],
                cloth: t.jacket,
                cloth2: t.jacket,
                trousers: t.trousers,
                phase: e.phase,
                stride: e.stride,
                arms: o,
                armSwing: e.meleeT > 0 ? 1 - e.meleeT / .22 : 0,
                pony: e.look.body === "f",
                thin: e.look.body === "f",
                helmet: d ? d.id === "hel_moto" ? "#b02a2a" : d.id === "hel_gasmask" ? null : d.tint ?? "#4d5a3a" : null,
                visor: d?.id === "hel_moto",
                gasmask: d?.id === "hel_gasmask",
                armour: n ? n.tint ?? "#3c452c" : null,
                pack: l
            };
        o === "rifle" && Na(i, a, 3, 0, e.look.wskin), o === "pistol" && Na(i, a, 11, 0, e.look.wskin), lt(i, c), dzOutfitDetail(i, t), DZSurvivorDetail(i,t), (o === "melee" || o === "idle" && r === "melee") && Na(i, a, 10, c.armSwing ?? 0, null), i.fillStyle = t.accent, i.fillRect(-6, -12.5, 3, 4), e.colourTag && (i.fillStyle = e.colourTag, i.fillRect(-6, 8.5, 3, 4)), i.restore()
    }

    function ro(i, e, t, a, r, o, s, d, n) {
        let l = e / 2,
            c = i.createLinearGradient(0, 0, e, t);
        c.addColorStop(0, "#2a2546"), c.addColorStop(1, "#0c0b16"), i.fillStyle = c, i.fillRect(0, 0, e, t);
        let u = i.createRadialGradient(l, t * .42, 2, l, t * .42, e * .62);
        u.addColorStop(0, "rgba(169,139,255,0.38)"), u.addColorStop(1, "rgba(169,139,255,0)"), i.fillStyle = u, i.fillRect(0, 0, e, t), i.fillStyle = $(o, -.1), i.beginPath(), i.moveTo(l - e * .46, t), i.quadraticCurveTo(l - e * .44, t * .66, l - e * .14, t * .62), i.lineTo(l + e * .14, t * .62), i.quadraticCurveTo(l + e * .44, t * .66, l + e * .46, t), i.closePath(), i.fill(), i.fillStyle = $(o, .15), i.fillRect(l - e * .06, t * .64, e * .12, t * .36), i.fillStyle = s, i.fillRect(l - e * .38, t * .78, e * .1, t * .06), i.fillStyle = $(a, -.2), i.fillRect(l - e * .08, t * .5, e * .16, t * .16);
        let m = i.createRadialGradient(l - e * .06, t * .32, 2, l, t * .38, e * .24);
        m.addColorStop(0, $(a, .15)), m.addColorStop(1, $(a, -.2)), i.fillStyle = m, i.beginPath(), i.ellipse(l, t * .38, e * .17, t * .2, 0, 0, Math.PI * 2), i.fill(), n ? (i.fillStyle = n, i.beginPath(), i.ellipse(l, t * .28, e * .21, t * .15, 0, Math.PI, 0), i.fill(), i.fillRect(l - e * .21, t * .27, e * .42, t * .04)) : (i.fillStyle = r, i.beginPath(), i.ellipse(l, t * .27, e * .18, t * .11, 0, Math.PI, 0), i.fill(), i.fillRect(l - e * .18, t * .26, e * .05, t * (d ? .24 : .08)), i.fillRect(l + e * .13, t * .26, e * .05, t * (d ? .24 : .08))), i.fillStyle = "rgba(10,10,8,0.85)", i.fillRect(l - e * .09, t * .37, e * .05, t * .02), i.fillRect(l + e * .04, t * .37, e * .05, t * .02), i.fillStyle = "rgba(0,0,0,0.25)", i.fillRect(l - e * .05, t * .47, e * .1, t * .015)
    }
    var io = new Map;

    function oa(i, e) {
        let t = i + (e ? "c" : "d"),
            a = io.get(t);
        if (a) return a;
        let r = 60;
        a = pe(r * 2 * ne + 8, r * 2 * ne + 8);
        let o = a.getContext("2d");
        o.translate(a.width / 2, a.height / 2), o.scale(ne, ne);
        let s = e ? ["#22331f", "#2b3f26", "#1b2a19", "#314a2a", "#263b22"][i % 5] : ["#3a4d26", "#465a2c", "#34472a", "#4f5f2e", "#3d5530"][i % 5];
        if (e)
            for (let d = 0; d < 4; d++) {
                let n = r * (1 - d * .22),
                    l = 11;
                o.beginPath();
                for (let u = 0; u <= l * 2; u++) {
                    let m = u / (l * 2) * Math.PI * 2 + d * .3 + i,
                        p = u % 2 === 0 ? n : n * .72,
                        f = Math.cos(m) * p,
                        b = Math.sin(m) * p;
                    u === 0 ? o.moveTo(f, b) : o.lineTo(f, b)
                }
                o.closePath();
                let c = o.createRadialGradient(-n * .3, -n * .3, 2, 0, 0, n);
                c.addColorStop(0, $(s, .18 + d * .06)), c.addColorStop(1, $(s, -.25 + d * .05)), o.fillStyle = c, o.fill(), o.strokeStyle = "rgba(8,12,6,0.45)", o.lineWidth = 1, o.stroke()
            } else {
                for (let n = 0; n < 2; n++)
                    for (let l = 0; l < 9; l++) {
                        let c = l / 9 * Math.PI * 2 + fe(i * 11 + l) * .6,
                            u = r * (n ? .3 : .52) * (.8 + fe(i * 7 + l) * .35),
                            m = r * (n ? .36 : .44) * (.85 + fe(i * 3 + l) * .3),
                            p = Math.cos(c) * u,
                            f = Math.sin(c) * u,
                            b = o.createRadialGradient(p - m * .35, f - m * .4, m * .1, p, f, m);
                        b.addColorStop(0, $(s, n ? .3 : .15)), b.addColorStop(.7, $(s, n ? .05 : -.05)), b.addColorStop(1, $(s, -.35)), o.fillStyle = b, o.beginPath(), o.arc(p, f, m, 0, Math.PI * 2), o.fill()
                    }
                for (let n = 0; n < 90; n++) {
                    let l = fe(n * 5 + i) * Math.PI * 2,
                        c = Math.sqrt(fe(n * 9 + i)) * r * .85;
                    o.fillStyle = fe(n + 3) > .5 ? "rgba(200,220,140,0.18)" : "rgba(10,20,8,0.22)", o.fillRect(Math.cos(l) * c, Math.sin(l) * c, 2, 2)
                }
            }
        return io.set(t, a), a
    }
    var ra = new Map;

    function _i(i, e, t, a, r = !1, o = !1) {
        let s = o ? "#2a2420" : a;
        i.fillStyle = "rgba(0,0,0,0.35)", ee(i, 4, 6, e, t, 9), i.fill(), i.fillStyle = re, ee(i, 0, 0, e, t, 9), i.fill();
        let d = i.createLinearGradient(0, 0, e, 0);
        if (d.addColorStop(0, $(s, -.2)), d.addColorStop(.5, $(s, .15)), d.addColorStop(1, $(s, -.25)), i.fillStyle = d, ee(i, 1.5, 1.5, e - 3, t - 3, 8), i.fill(), i.fillStyle = o ? "#141210" : "rgba(40,60,80,0.9)", ee(i, e * .14, t * .22, e * .72, t * .16, 4), i.fill(), ee(i, e * .16, t * .72, e * .68, t * .1, 4), i.fill(), i.fillStyle = $(s, o ? .05 : .08), ee(i, e * .15, t * .39, e * .7, t * .32, 5), i.fill(), r && (i.fillStyle = "#e8e8e0", ee(i, e * .15, t * .39, e * .7, t * .32, 5), i.fill(), i.fillStyle = "#2a4aa8", i.fillRect(e * .2, t * .52, e * .28, t * .06), i.fillStyle = "#c82a2a", i.fillRect(e * .52, t * .52, e * .28, t * .06)), i.fillStyle = o ? "#222" : "#f2eec8", i.fillRect(e * .1, 2, e * .18, 3), i.fillRect(e * .72, 2, e * .18, 3), i.fillStyle = o ? "#222" : "#a82a2a", i.fillRect(e * .1, t - 5, e * .18, 3), i.fillRect(e * .72, t - 5, e * .18, 3), o)
            for (let n = 0; n < 14; n++) i.fillStyle = `rgba(${40+fe(n)*60},${30+fe(n+1)*30},20,0.6)`, i.beginPath(), i.arc(fe(n * 3) * e, fe(n * 5) * t, 3 + fe(n * 7) * 6, 0, Math.PI * 2), i.fill();
        i.fillStyle = "rgba(60,50,30,0.25)", i.beginPath(), i.ellipse(e * .7, t * .85, e * .3, t * .12, .3, 0, Math.PI * 2), i.fill()
    }
    var Ee = (i, e, t, a, r, o = "#6b4a2e") => {
            i.fillStyle = re, ee(i, e - 1, t - 1, a + 2, r + 2, 2), i.fill();
            let s = i.createLinearGradient(0, t, 0, t + r);
            s.addColorStop(0, $(o, .15)), s.addColorStop(1, $(o, -.2)), i.fillStyle = s, ee(i, e, t, a, r, 2), i.fill()
        },
        ie = (i, e, t, a, r, o = "#5a626a") => {
            i.fillStyle = re, ee(i, e - 1, t - 1, a + 2, r + 2, 2), i.fill();
            let s = i.createLinearGradient(e, t, e + a, t + r);
            s.addColorStop(0, $(o, .2)), s.addColorStop(1, $(o, -.25)), i.fillStyle = s, ee(i, e, t, a, r, 2), i.fill()
        },
        ys = {
            car: (i, e, t, a) => {
                let r = ["#5a6a7a", "#7a2e2a", "#c8c4b8", "#3a4a3a"],
                    o = a === 3;
                e > t ? (i.translate(e, 0), i.rotate(Math.PI / 2), _i(i, t, e, r[a % 4], !1, o)) : _i(i, e, t, r[a % 4], !1, o)
            },
            police_car: (i, e, t) => {
                e > t ? (i.translate(e, 0), i.rotate(Math.PI / 2), _i(i, t, e, "#e8e8e0", !0)) : _i(i, e, t, "#e8e8e0", !0)
            },
            jeep: (i, e, t) => {
                e > t && (i.translate(e, 0), i.rotate(Math.PI / 2), [e, t] = [t, e]), _i(i, e, t, "#4d5a3a"), i.fillStyle = "#3c452c", i.fillRect(e * .1, t * .75, e * .8, t * .2)
            },
            van: (i, e, t) => {
                ie(i, 0, 0, e, t, "#d8d4c8"), i.fillStyle = "rgba(40,60,80,0.9)", i.fillRect(e - 16, 6, 10, t - 12), i.fillStyle = "#c8302a", i.fillRect(8, t / 2 - 3, e - 30, 6)
            },
            lorry: (i, e, t) => {
                ie(i, e * .22, 0, e * .78, t, "#9aa0a6");
                for (let a = 1; a < 10; a++) i.fillStyle = "rgba(0,0,0,0.18)", i.fillRect(e * .22 + e * .78 * a / 10, 2, 1.5, t - 4);
                ie(i, 0, t * .08, e * .2, t * .84, "#2a5a8a"), i.fillStyle = "rgba(40,60,80,0.9)", i.fillRect(3, t * .15, 8, t * .7)
            },
            mil_truck: (i, e, t) => {
                ie(i, 0, t * .28, e, t * .72, "#55603e");
                for (let a = 0; a < 5; a++) i.strokeStyle = "rgba(0,0,0,0.25)", i.beginPath(), i.moveTo(2, t * .32 + a * t * .13), i.lineTo(e - 2, t * .32 + a * t * .13), i.stroke();
                ie(i, e * .08, 0, e * .84, t * .26, "#4d5a3a"), i.fillStyle = "rgba(40,60,80,0.9)", i.fillRect(e * .16, 4, e * .68, t * .07)
            },
            shipping: (i, e, t, a) => {
                ie(i, 0, 0, e, t, ["#8a3a2a", "#2a5a8a", "#3a6a3a", "#a87a2a"][a % 4]);
                for (let o = 1; o < 14; o++) i.fillStyle = "rgba(0,0,0,0.2)", i.fillRect(e * o / 14, 2, 2, t - 4);
                i.fillStyle = "rgba(255,255,255,0.08)", i.fillRect(0, 0, e, 4)
            },
            tent: (i, e, t) => {
                i.fillStyle = re, ee(i, 0, 0, e, t, 6), i.fill();
                let a = i.createLinearGradient(0, 0, 0, t);
                a.addColorStop(0, "#6a7a4a"), a.addColorStop(.5, "#4a5a32"), a.addColorStop(1, "#3a4628"), i.fillStyle = a, ee(i, 1, 1, e - 2, t - 2, 5), i.fill(), i.strokeStyle = "rgba(0,0,0,0.4)", i.beginPath(), i.moveTo(4, t / 2), i.lineTo(e - 4, t / 2), i.stroke()
            },
            bed: (i, e, t, a) => {
                Ee(i, 0, 0, e, t, "#4a3424"), i.fillStyle = ["#7a8aa8", "#a87a7a", "#8aa87a", "#c8c0a8"][a % 4], ee(i, 3, t * .3, e - 6, t * .66, 3), i.fill(), i.fillStyle = "#e8e4da", ee(i, 4, 4, e - 8, t * .22, 3), i.fill()
            },
            sofa: (i, e, t) => {
                i.fillStyle = re, ee(i, 0, 0, e, t, 6), i.fill(), i.fillStyle = "#5a3a3a", ee(i, 1, 1, e - 2, t - 2, 5), i.fill(), i.fillStyle = "#6e4a48", ee(i, 6, 6, e - 12, t - 10, 4), i.fill()
            },
            table: (i, e, t) => Ee(i, 2, 2, e - 4, t - 4, "#7a5a3a"),
            counter: (i, e, t) => {
                Ee(i, 0, 0, e, t, "#5a4a3a"), i.fillStyle = "#8a8478", i.fillRect(1, 1, e - 2, t * .3)
            },
            bar: (i, e, t) => Ee(i, 0, 0, e, t, "#4a2e1c"),
            chairs: (i, e) => {
                for (let t = 2; t < e - 10; t += 14) ie(i, t, 4, 11, 11, "#3a5a7a")
            },
            hospbed: (i, e, t) => {
                ie(i, 0, 0, e, t, "#c8ccd0"), i.fillStyle = "#e8eef2", ee(i, 3, t * .25, e - 6, t * .7, 3), i.fill(), i.fillStyle = "rgba(120,20,16,0.5)", i.beginPath(), i.ellipse(e / 2, t * .6, e * .3, t * .15, .3, 0, Math.PI * 2), i.fill()
            },
            optable: (i, e, t) => {
                ie(i, 0, 0, e, t, "#9aa8b0"), i.fillStyle = "#5a7a8a", ee(i, 4, 4, e - 8, t - 8, 3), i.fill()
            },
            cellbars: (i, e, t) => {
                i.fillStyle = "#3a3e44";
                for (let a = 2; a < t; a += 6) i.fillRect(e / 2 - 1, a, 2, 3)
            },
            canopy: (i, e, t) => {
                i.fillStyle = "rgba(0,0,0,0.0)", i.fillRect(0, 0, e, t), i.strokeStyle = "rgba(200,40,30,0.5)", i.lineWidth = 3, i.strokeRect(2, 2, e - 4, t - 4)
            },
            pump: (i, e, t) => {
                ie(i, 0, 0, e, t, "#c8302a"), i.fillStyle = "#e8e4da", i.fillRect(3, 4, e - 6, t * .3), i.fillStyle = "#1a1c1e", i.fillRect(e / 2 - 2, t * .55, 4, t * .35)
            },
            barrel: (i, e, t) => {
                i.fillStyle = re, i.beginPath(), i.arc(e / 2, t / 2, e / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = bt(i, e / 2, t / 2, e / 2 - 1, "#b8302a"), i.beginPath(), i.arc(e / 2, t / 2, e / 2 - 1.5, 0, Math.PI * 2), i.fill(), i.strokeStyle = "rgba(0,0,0,0.35)", i.beginPath(), i.arc(e / 2, t / 2, e / 3, 0, Math.PI * 2), i.stroke(), i.fillStyle = "#e8c84a", i.fillRect(e / 2 - 3, t / 2 - 3, 6, 6)
            },
            firebarrel: (i, e, t) => {
                i.fillStyle = re, i.beginPath(), i.arc(e / 2, t / 2, e / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = "#3a3430", i.beginPath(), i.arc(e / 2, t / 2, e / 2 - 1.5, 0, Math.PI * 2), i.fill(), i.fillStyle = "#1a1210", i.beginPath(), i.arc(e / 2, t / 2, e / 3, 0, Math.PI * 2), i.fill()
            },
            forklift: (i, e, t) => {
                ie(i, 0, t * .25, e, t * .75, "#d8a83a"), i.fillStyle = "#2a2c2e", i.fillRect(e * .15, 0, 3, t * .3), i.fillRect(e * .75, 0, 3, t * .3), i.fillStyle = "rgba(40,40,40,0.8)", i.fillRect(e * .2, t * .45, e * .6, t * .25)
            },
            pallet: (i, e, t) => {
                for (let a = 1; a < e - 2; a += 7) Ee(i, a, 1, 5, t - 2, "#8a6a42")
            },
            car_lift: (i, e, t) => {
                i.strokeStyle = "rgba(200,255,46,0.6)", i.lineWidth = 3, i.setLineDash([8, 6]), i.strokeRect(3, 3, e - 6, t - 6), i.setLineDash([]), ie(i, 6, t * .2, 6, t * .6, "#3a3e44"), ie(i, e - 12, t * .2, 6, t * .6, "#3a3e44")
            },
            hay: (i, e, t) => {
                Ee(i, 0, 0, e, t, "#c8a84a"), i.strokeStyle = "rgba(120,90,30,0.6)";
                for (let a = 0; a < 12; a++) i.beginPath(), i.moveTo(fe(a) * e, fe(a + 1) * t), i.lineTo(fe(a + 2) * e, fe(a + 3) * t), i.stroke()
            },
            tractor: (i, e, t) => {
                ie(i, e * .15, t * .1, e * .7, t * .8, "#3a7a3a"), i.fillStyle = re, i.fillRect(0, t * .55, e * .2, t * .4), i.fillRect(e * .8, t * .55, e * .2, t * .4), i.fillRect(e * .05, 0, e * .16, t * .22), i.fillRect(e * .79, 0, e * .16, t * .22)
            },
            silo: (i, e, t) => {
                i.fillStyle = re, i.beginPath(), i.arc(e / 2, t / 2, e / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = bt(i, e / 2, t / 2, e / 2, "#9aa0a6"), i.beginPath(), i.arc(e / 2, t / 2, e / 2 - 2, 0, Math.PI * 2), i.fill(), i.strokeStyle = "rgba(0,0,0,0.2)";
                for (let a = 1; a < 4; a++) i.beginPath(), i.arc(e / 2, t / 2, e / 2 * (a / 4), 0, Math.PI * 2), i.stroke()
            },
            scarecrow: (i, e, t) => {
                i.fillStyle = "#5a4a32", i.fillRect(e / 2 - 1, 0, 2, t), i.fillRect(0, t / 2 - 1, e, 2), i.fillStyle = "#c8a84a", i.beginPath(), i.arc(e / 2, t / 2, 5, 0, Math.PI * 2), i.fill()
            },
            tower: (i, e, t) => {
                Ee(i, 0, 0, e, t, "#4a3a2a"), i.fillStyle = "#3a4628", ee(i, 4, 4, e - 8, t - 8, 3), i.fill(), i.fillStyle = "rgba(0,0,0,0.3)", i.fillRect(e / 2 - 1, 4, 2, t - 8)
            },
            barrier: (i, e, t) => {
                for (let a = 0; a < t; a += 12) i.fillStyle = a / 12 % 2 ? "#c82a2a" : "#e8e4da", i.fillRect(0, a, e, 12)
            },
            bunk: (i, e, t) => {
                ie(i, 0, 0, e, t, "#4d5a3a"), i.fillStyle = "#3c452c", ee(i, 3, 3, e - 6, t - 6, 3), i.fill()
            },
            phonebox: (i, e, t) => {
                ie(i, 0, 0, e, t, "#b82a22"), i.fillStyle = "#d8402a", ee(i, 3, 3, e - 6, t - 6, 2), i.fill(), i.fillStyle = "#1a1210", i.fillRect(e / 2 - 1, 3, 2, t - 6)
            },
            bench: (i, e, t) => Ee(i, 0, 0, e, t, "#6b4a2e"),
            busstop: (i, e, t) => {
                ie(i, 0, 0, e, t, "#2a3a4a"), i.fillStyle = "rgba(160,200,230,0.35)", i.fillRect(3, 3, e - 6, t - 6)
            },
            postbox: (i, e, t) => {
                i.fillStyle = re, i.beginPath(), i.arc(e / 2, t / 2, e / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = bt(i, e / 2, t / 2, e / 2, "#c82a22"), i.beginPath(), i.arc(e / 2, t / 2, e / 2 - 1.5, 0, Math.PI * 2), i.fill()
            },
            campfire: (i, e, t) => {
                for (let a = 0; a < 8; a++) {
                    let r = a / 8 * Math.PI * 2;
                    i.fillStyle = "#5a5a56", i.beginPath(), i.arc(e / 2 + Math.cos(r) * e * .38, t / 2 + Math.sin(r) * t * .38, 4, 0, Math.PI * 2), i.fill()
                }
                i.fillStyle = "#1a1210", i.beginPath(), i.arc(e / 2, t / 2, e * .28, 0, Math.PI * 2), i.fill()
            },
            rock: (i, e, t, a) => {
                i.fillStyle = re, i.beginPath(), i.ellipse(e / 2, t / 2, e / 2, t / 2, a, 0, Math.PI * 2), i.fill(), i.fillStyle = bt(i, e / 2, t / 2, e / 2, "#6a6a62"), i.beginPath(), i.ellipse(e / 2, t / 2, e / 2 - 1.5, t / 2 - 1.5, a, 0, Math.PI * 2), i.fill()
            }
        },
        xs = {
            counter: (i, e, t) => {
                Ee(i, 0, 0, e, t, "#6a5a46"), i.fillStyle = "#9a948a", i.fillRect(1, 1, e - 2, t * .35), i.fillStyle = "rgba(0,0,0,0.3)";
                for (let a = e / 3; a < e - 2; a += e / 3) i.fillRect(a, t * .4, 1, t * .55)
            },
            fridge: (i, e, t) => {
                ie(i, 0, 0, e, t, "#d8dcd8"), i.fillStyle = "#8a8e8a", i.fillRect(e * .8, t * .2, 2, t * .6)
            },
            wardrobe: (i, e, t) => {
                Ee(i, 0, 0, e, t, "#5a3e28"), i.fillStyle = "rgba(0,0,0,0.35)", i.fillRect(e / 2 - .5, 2, 1, t - 4)
            },
            drawers: (i, e, t) => {
                Ee(i, 0, 0, e, t, "#7a5636"), i.fillStyle = "#c8a86a", i.fillRect(e / 2 - 2, t / 2 - 1, 4, 2)
            },
            desk: (i, e, t) => {
                Ee(i, 0, 0, e, t, "#4a3a2a"), i.fillStyle = "#e8e4da", i.fillRect(e * .15, t * .2, e * .2, t * .35), i.fillStyle = "#1a1c1e", i.fillRect(e * .55, t * .15, e * .25, t * .4)
            },
            filing: (i, e, t) => {
                ie(i, 0, 0, e, t, "#6a7078"), i.fillStyle = "rgba(0,0,0,0.3)", i.fillRect(2, t / 2, e - 4, 1)
            },
            locker: (i, e, t) => {
                ie(i, 0, 0, e, t, "#4a5a6a"), i.fillStyle = "rgba(0,0,0,0.35)";
                for (let a = 0; a < 3; a++) i.fillRect(3, 3 + a * 3, e - 6, 1)
            },
            gunlocker: (i, e, t) => {
                ie(i, 0, 0, e, t, "#2e3238"), i.fillStyle = "#c8a03a", i.fillRect(e - 6, t / 2 - 2, 3, 4)
            },
            medcab: (i, e, t) => {
                ie(i, 0, 0, e, t, "#e8ecee"), i.fillStyle = "#c8302a", i.fillRect(e / 2 - 1.5, t / 2 - 5, 3, 10), i.fillRect(e / 2 - 5, t / 2 - 1.5, 10, 3)
            },
            shelf: (i, e, t) => {
                ie(i, 0, 0, e, t, "#7a7e84");
                let a = ["#c8302a", "#e8c84a", "#3a6fb0", "#5a9a3a", "#e8e4da"];
                for (let r = 3; r < e - 5; r += 6) i.fillStyle = a[Math.floor(fe(r) * 5)], i.fillRect(r, 3, 4, t - 6)
            },
            rack: (i, e, t) => {
                ie(i, 0, 0, e, t, "#3a5a8a");
                for (let a = 3; a < e - 9; a += 11) Ee(i, a, 3, 9, t - 6, "#a07a4a")
            },
            crate: (i, e, t) => {
                Ee(i, 0, 0, e, t, "#8a6a3a"), i.strokeStyle = "rgba(0,0,0,0.4)", i.lineWidth = 1.5, i.strokeRect(3, 3, e - 6, t - 6), i.beginPath(), i.moveTo(3, 3), i.lineTo(e - 3, t - 3), i.stroke()
            },
            weaponcase: (i, e, t) => {
                ie(i, 0, 0, e, t, "#3c452c"), i.fillStyle = "#d6b44a", i.fillRect(4, t / 2 - 1, e - 8, 2), i.fillStyle = "#1a1c1e", i.fillRect(e * .2, 3, 4, 3), i.fillRect(e * .75, 3, 4, 3)
            },
            safe: (i, e, t) => {
                ie(i, 0, 0, e, t, "#3a3e44"), i.strokeStyle = "#8a8e94", i.lineWidth = 2, i.beginPath(), i.arc(e / 2, t / 2, Math.min(e, t) * .22, 0, Math.PI * 2), i.stroke()
            },
            till: (i, e, t) => {
                ie(i, e * .15, t * .15, e * .7, t * .7, "#2a2c30"), i.fillStyle = "#7ab060", i.fillRect(e * .25, t * .25, e * .5, t * .18)
            },
            bin: (i, e, t) => {
                ie(i, 2, 2, e - 4, t - 4, "#2a4a2a")
            },
            bench: (i, e, t) => {
                Ee(i, 0, 0, e, t, "#6a4a2a"), i.fillStyle = "#5a626a", i.fillRect(4, 3, e * .25, t - 6), i.fillStyle = "#c8302a", i.fillRect(e * .55, 4, e * .2, t - 8)
            },
            planter: (i, e, t) => {
                Ee(i, 0, 0, e, t, "#5a4028"), i.fillStyle = "#3a2a1a", i.fillRect(2, 2, e - 4, t - 4);
                for (let a = 5; a < e - 4; a += 8) i.fillStyle = "#5a9a3a", i.beginPath(), i.arc(a, t / 2, 3, 0, Math.PI * 2), i.fill()
            },
            evidence: (i, e, t) => {
                ie(i, 0, 0, e, t, "#2a3a5a"), i.fillStyle = "#e8e4da", i.fillRect(4, t / 2 - 2, e * .3, 4)
            },
            body: (i, e, t, a) => {
                i.fillStyle = "rgba(90,8,6,0.7)", i.beginPath(), i.ellipse(e / 2, t / 2 + 2, e * .6, t * .45, .4, 0, Math.PI * 2), i.fill(), i.save(), i.translate(e / 2, t / 2), i.rotate(a * 1.3), lt(i, {
                    r: 11,
                    skin: "#b8a088",
                    hair: "#2a2420",
                    cloth: ["#3a4a5a", "#5a4a3a", "#4a3a3a", "#3a4a3a"][a % 4],
                    cloth2: ["#3a4a5a", "#5a4a3a", "#4a3a3a", "#3a4a3a"][a % 4],
                    trousers: "#2a2c30",
                    phase: .2,
                    stride: 0,
                    arms: "downed",
                    blood: 3
                }), i.restore()
            },
            car: () => {},
            truck: () => {},
            tent: () => {}
        };

    // Cached top-down vehicle sprites share a north-facing local axis.
    function DZVehicleSprite(c,w,h,kind){
        const police=kind==="police_car",military=kind==="mil_truck",tractor=kind==="tractor",lorry=kind==="lorry";
        const body=police?"#b9bdb1":military?"#536048":tractor?"#5b6849":lorry?"#757e7d":"#9c9f8d";
        c.save();
        c.fillStyle="#0d120f";
        const axles=lorry||military?[.22,.64,.83]:tractor?[.24,.78]:[.23,.76];
        for(const axle of axles)for(const side of [0,1])c.fillRect(side?w*.82:0,h*axle-8,w*.18,16);
        c.fillStyle=body;ee(c,w*.1,h*.05,w*.8,h*.9,Math.min(6,w*.1));c.fill();
        c.strokeStyle="#aeb5a04d";c.lineWidth=1;c.strokeRect(w*.15,h*.11,w*.7,h*.78);
        if(lorry||military){
            c.fillStyle=military?"#404e39":"#596363";c.fillRect(w*.14,h*.35,w*.72,h*.55);
            c.strokeStyle=military?"#7c8663":"#949b91";for(let n=0;n<5;n++){c.beginPath();c.moveTo(w*.16,h*(.4+n*.1));c.lineTo(w*.84,h*(.4+n*.1));c.stroke();}
            c.fillStyle=military?"#647055":"#687e80";c.fillRect(w*.13,h*.08,w*.74,h*.22);
        }else if(tractor){
            c.fillStyle="#7b895b";c.fillRect(w*.31,h*.09,w*.38,h*.36);c.fillStyle="#222e27";c.fillRect(w*.22,h*.5,w*.56,h*.29);
            c.strokeStyle="#9b9f82";c.strokeRect(w*.22,h*.5,w*.56,h*.29);c.fillStyle="#1a241a";c.fillRect(w*.62,h*.17,5,h*.19);
        }else{
            c.fillStyle="#344748";c.fillRect(w*.17,h*.22,w*.66,h*.14);
            c.fillStyle="#525e58";c.fillRect(w*.2,h*.38,w*.6,h*.30);
            if(police){c.fillStyle="#263844";c.fillRect(w*.1,h*.38,w*.8,h*.36);c.fillStyle="#8ba9ba";c.fillRect(w*.16,h*.46,w*.28,5);c.fillStyle="#a9574a";c.fillRect(w*.56,h*.46,w*.28,5);c.fillStyle="#d5d9c7";c.font=`700 ${Math.max(6,w*.11)}px sans-serif`;c.textAlign="center";c.fillText("POLICE",w/2,h*.64);}else{c.strokeStyle="#c1c3ae77";c.strokeRect(w*.17,h*.41,w*.66,h*.40);c.beginPath();c.moveTo(w/2,h*.41);c.lineTo(w/2,h*.81);c.stroke();}
        }
        c.fillStyle="#2a322c";c.fillRect(w*.11,h*.035,w*.78,5);c.fillRect(w*.11,h*.93,w*.78,5);
        c.fillStyle="#c6bea1";c.fillRect(w*.15,h*.07,w*.16,4);c.fillRect(w*.69,h*.07,w*.16,4);
        c.fillStyle="#a24d40";c.fillRect(w*.15,h*.89,w*.14,4);c.fillRect(w*.71,h*.89,w*.14,4);
        c.strokeStyle="#242d2744";c.beginPath();c.moveTo(w*.24,h*.1);c.lineTo(w*.38,h*.16);c.moveTo(w*.66,h*.7);c.lineTo(w*.74,h*.81);c.stroke();c.restore();
    }
    for(const kind of ["van","police_car","tractor","lorry","mil_truck"])ys[kind]=(c,w,h)=>DZVehicleSprite(c,w,h,kind);

    function yt(i, e, t, a, r = !1) {
        let o = (r ? "c:" : "p:") + i + ":" + Math.round(e) + "x" + Math.round(t) + ":" + a,
            s = ra.get(o);
        if (s) return s;
        let d = (r ? xs : ys)[i];
        if (!d) return null;
        s = pe((e + 10) * ne, (t + 10) * ne);
        let n = s.getContext("2d");
        return n.scale(ne, ne), n.translate(1, 1), d(n, e, t, a), ra.set(o, s), s
    }

    function oo() {
        let i = "supply",
            e = ra.get(i);
        if (e) return e;
        e = pe(48 * ne, 48 * ne);
        let t = e.getContext("2d");
        return t.scale(ne, ne), ie(t, 4, 4, 40, 40, "#4d5a3a"), t.fillStyle = "#d6b44a", t.fillRect(4, 22, 40, 4), t.fillRect(22, 4, 4, 40), t.strokeStyle = "rgba(0,0,0,0.4)", t.strokeRect(8, 8, 32, 32), ra.set(i, e), e
    }
    var ws = {
            0: "#33402a",
            1: "#4a3e30",
            2: "#55575a",
            3: "#6a6a64",
            4: "#5a4632",
            5: "#8a8c86",
            6: "#5a5a56",
            7: "#4a3232",
            8: "#4a3a26",
            9: "#55524c",
            10: "#352c22",
            11: "#2a5a66",
            12: "#24301e",
            13: "#6a6a5a",
            14: "#5c5c58"
        },
        Ei = class {
            constructor(e, t) {
                v(this, "map");
                v(this, "overview");
                v(this, "explored");
                v(this, "fogCv");
                v(this, "dirty", !0);
                v(this, "lastReveal", {
                    x: -999,
                    y: -999
                });
                this.map = e, this.explored = new Uint8Array(U * X), t && this.load(t), this.overview = this.buildOverview(), this.fogCv = pe(U, X), this.updateFog()
            }
            buildOverview() {
                let t = pe(U * 2, X * 2),
                    a = t.getContext("2d"),
                    r = this.map;
                for (let o = 0; o < X; o++)
                    for (let s = 0; s < U; s++) {
                        let d = Y(s, o);
                        a.fillStyle = ws[r.ground[d]] ?? "#333", a.fillRect(s * 2, o * 2, 2, 2);
                        let n = r.solid[d];
                        n && n !== 12 && (a.fillStyle = n === 9 ? "#1a2814" : n === 6 || n === 7 ? "#6a6050" : n === 8 ? "#8a7a5a" : "#141510", a.fillRect(s * 2, o * 2, 2, 2))
                    }
                for (let o of r.buildings) a.fillStyle = "rgba(200,190,160,0.18)", a.fillRect(o.x * 2, o.y * 2, o.w * 2, o.h * 2);
                a.fillStyle = "rgba(20,40,16,0.75)";
                for (let o of r.trees)
                    if (!o.cut) a.beginPath(), a.arc(o.x / y * 2, o.y / y * 2, o.r / y * 2 * .8, 0, Math.PI * 2), a.fill();
                return t
            }
            reveal(e, t, a = 15) {
                let r = Math.floor(e / y),
                    o = Math.floor(t / y);
                if (Math.abs(r - this.lastReveal.x) + Math.abs(o - this.lastReveal.y) < 2) return;
                this.lastReveal = {
                    x: r,
                    y: o
                };
                let s = !1;
                for (let d = o - a; d <= o + a; d++)
                    for (let n = r - a; n <= r + a; n++) {
                        if (n < 0 || d < 0 || n >= U || d >= X || (n - r) ** 2 + (d - o) ** 2 > a * a) continue;
                        let l = Y(n, d);
                        this.explored[l] || (this.explored[l] = 1, s = !0)
                    }
                s && (this.dirty = !0)
            }
            updateFog() {
                let e = this.fogCv.getContext("2d"),
                    t = e.createImageData(U, X);
                for (let a = 0; a < U * X; a++) t.data[a * 4] = 10, t.data[a * 4 + 1] = 12, t.data[a * 4 + 2] = 9, t.data[a * 4 + 3] = this.explored[a] ? 0 : 236;
                e.putImageData(t, 0, 0), this.dirty = !1
            }
            percent() {
                let e = 0;
                for (let t = 0; t < this.explored.length; t++) e += this.explored[t];
                return e / this.explored.length
            }
            save() {
                let e = new Uint8Array(Math.ceil(U * X / 8));
                for (let a = 0; a < U * X; a++) this.explored[a] && (e[a >> 3] |= 1 << (a & 7));
                let t = "";
                for (let a = 0; a < e.length; a++) t += String.fromCharCode(e[a]);
                return btoa(t)
            }
            load(e) {
                try {
                    let t = atob(e);
                    for (let a = 0; a < U * X; a++) this.explored[a] = t.charCodeAt(a >> 3) >> (a & 7) & 1
                } catch {}
            }
            zoneKnown(e, t, a, r) {
                let o = Math.floor(e + a / 2),
                    s = Math.floor(t + r / 2);
                return !!this.explored[Y(Math.max(0, Math.min(U - 1, o)), Math.max(0, Math.min(X - 1, s)))]
            }
        };

    function li(i, e, t, a, r, o, s, d, n, l) {
        e.dirty && e.updateFog(), i.fillStyle = "#0a0b08", i.fillRect(0, 0, a, r);
        let c = a / 2 - o / y * d,
            u = r / 2 - s / y * d;
        i.imageSmoothingEnabled = d < 2, i.drawImage(e.overview, c, u, U * d, X * d), i.imageSmoothingEnabled = !0, i.drawImage(e.fogCv, c, u, U * d, X * d);
        let m = (p, f) => [c + p / y * d, u + f / y * d];
        if (l) {
            i.textAlign = "center", i.textBaseline = "middle";
            for (let p of e.map.zones) {
                if (p.id === "wilds" || !e.zoneKnown(p.x, p.y, p.w, p.h)) continue;
                let [f, b] = m((p.x + p.w / 2) * y, (p.y + p.h / 2) * y);
                i.font = `700 ${Math.max(10,Math.min(16,d*4))}px 'Chakra Petch', 'Arial Narrow', sans-serif`, i.fillStyle = "rgba(0,0,0,0.6)", i.fillText(p.name.toUpperCase(), f + 1, b + 1), i.fillStyle = p.danger >= 3 ? "#ff7d95" : p.danger >= 2 ? "#ffd08a" : "rgba(233,227,207,0.85)", i.fillText(p.name.toUpperCase(), f, b)
            }
        }
        if (t)
            for (let p of e.map.extracts) {
                if (!t.activeExtracts.has(p.id)) continue;
                let [f, b] = m(p.x, p.y), x = Math.max(5, p.r / y * d);
                i.strokeStyle = p.req ? te.warn : te.acc, i.lineWidth = 2, i.beginPath(), i.arc(f, b, x, 0, Math.PI * 2), i.stroke(), i.fillStyle = p.req ? "rgba(200,255,46,0.25)" : "rgba(127,223,106,0.25)", i.fill(), l && (i.font = "700 11px 'Chakra Petch', 'Arial Narrow', sans-serif", i.fillStyle = p.req ? te.warn : te.accHi, i.fillText(p.name.toUpperCase(), f, b - x - 7))
            }
        for (let p of n.events) {
            let [f, b] = m(p.x, p.y);
            i.fillStyle = te.red, i.beginPath(), i.moveTo(f, b - 7), i.lineTo(f + 6, b + 5), i.lineTo(f - 6, b + 5), i.closePath(), i.fill(), l && (i.font = "700 11px 'Chakra Petch', 'Arial Narrow', sans-serif", i.fillStyle = "#ff7d95", i.fillText(p.title.toUpperCase(), f, b - 14))
        }
        if (n.waypoint) {
            let [p, f] = m(n.waypoint.x, n.waypoint.y);
            i.strokeStyle = te.accHi, i.lineWidth = 2, i.beginPath(), i.moveTo(p, f), i.lineTo(p, f - 14), i.stroke(), i.fillStyle = te.accHi, i.fillRect(p, f - 14, 9, 6)
        }
        for (let p of n.pings) {
            let [f, b] = m(p.x, p.y);
            i.strokeStyle = p.kind === "enemy" || p.kind === "zombie" ? te.red : te.acc, i.lineWidth = 2, i.beginPath(), i.arc(f, b, 5, 0, Math.PI * 2), i.stroke()
        }
        for (let p of n.mates) {
            let [f, b] = m(p.x, p.y);
            i.fillStyle = p.down ? te.red : te.cyan, i.beginPath(), i.arc(f, b, 4, 0, Math.PI * 2), i.fill()
        }
        if (n.me) {
            let [p, f] = m(n.me.x, n.me.y);
            i.save(), i.translate(p, f), i.rotate(n.me.a), i.fillStyle = te.accHi, i.strokeStyle = "#000", i.lineWidth = 1.5, i.beginPath(), i.moveTo(8, 0), i.lineTo(-5, -5), i.lineTo(-2, 0), i.lineTo(-5, 5), i.closePath(), i.fill(), i.stroke(), i.restore()
        }
    }
    var Et = document;

    function Li() {
        return navigator.standalone === !0 || matchMedia("(display-mode: fullscreen)").matches || matchMedia("(display-mode: standalone)").matches
    }

    function Ss() {
        try {
            return window.top !== window.self
        } catch {
            return !0
        }
    }

    function Fa() {
        return !!(Et.fullscreenEnabled || Et.webkitFullscreenEnabled)
    }

    function Lt() {
        return Li() || !!(Et.fullscreenElement || Et.webkitFullscreenElement)
    }
    var Ms = () => /iPhone|iPod/.test(navigator.userAgent);

    function sa() {
        if (Lt()) return Promise.resolve(!0);
        if (!Fa()) return Promise.resolve(!1);
        let i = document.documentElement;
        try {
            let e = i.requestFullscreen ? i.requestFullscreen({
                navigationUI: "hide"
            }) : i.webkitRequestFullscreen?.();
            return Promise.resolve(e).then(() => (screen.orientation?.lock?.("landscape").catch(() => {}), Lt())).catch(() => !1)
        } catch {
            return Promise.resolve(!1)
        }
    }

    function so() {
        try {
            Et.fullscreenElement ? Et.exitFullscreen() : Et.webkitFullscreenElement && Et.webkitExitFullscreen?.()
        } catch {}
    }

    function no(i) {
        return document.addEventListener("fullscreenchange", i), document.addEventListener("webkitfullscreenchange", i), () => {
            document.removeEventListener("fullscreenchange", i), document.removeEventListener("webkitfullscreenchange", i)
        }
    }

    function lo() {
        return Ss() ? {
            title: "Full screen is blocked here",
            body: "This preview window doesn\u2019t allow games to go full screen. Open the installable web version of Deadzone in your phone\u2019s browser and add it to your home screen: it then launches full screen, like an app."
        } : Ms() ? {
            title: "Play full screen on iPhone",
            body: "iPhone browsers can\u2019t put a web game full screen. In Safari, tap Share, then Add to Home Screen. Launch Deadzone from that icon and it opens full screen, with no browser bars."
        } : {
            title: "Full screen unavailable",
            body: "This browser doesn\u2019t support full screen for web games. Use your browser\u2019s menu to install or add Deadzone to your home screen, then launch it from there."
        }
    }

    function co() {
        let i = lo();
        De(h("div", {
            class: "confirm"
        }, h("p", null, i.body), h("div", {
            class: "row end"
        }, z("Got it", () => ue(), "primary"))), {
            title: i.title
        })
    }

    function Wa() {
        if (Lt()) return so();
        if (!Fa()) return co();
        sa().then(i => {
            i || co()
        })
    }

    function ho() {
        if (Li()) return {
            el: null,
            destroy() {}
        };
        let i = h("button", {
                class: "ibtn",
                type: "button",
                onTap: () => Wa()
            }),
            e = () => {
                let t = Lt();
                i.replaceChildren(E(t ? "shrink" : "expand")), i.setAttribute("aria-label", t ? "Exit full screen" : "Play full screen"), i.title = t ? "Exit full screen" : "Play full screen"
            };
        return e(), {
            el: i,
            destroy: no(e)
        }
    }
    var Ai = 16,
        Z = Ai * y;

    function xe(i, e, t = 0) {
        let a = Math.imul(i * 374761393 + e * 668265263 + t * 2147483647, 1274126177);
        return a = Math.imul(a ^ a >>> 13, 1274126177), ((a ^ a >>> 16) >>> 0) / 4294967296
    }
    var po = {
            0: "#3a4829",
            1: "#5a4a36",
            2: "#2c2e31",
            3: "#64645e",
            4: "#6b4f35",
            5: "#b0b2ac",
            6: "#686862",
            7: "#563838",
            8: "#4e3c28",
            9: "#66615a",
            10: "#3c3125",
            11: "#1d3436",
            12: "#2e3822",
            13: "#85856e",
            14: "#5c5c58"
        },
        Ba = new Set([0, 1, 10, 12, 8, 9]),
        uo = new Set([4, 5, 7, 13]);

    function Ts(i, e) {
        let t = y * 4,
            a = pe(t * e, t * e),
            r = a.getContext("2d");
        r.scale(e, e);
        let o = po[i] ?? "#444";
        r.fillStyle = o, r.fillRect(0, 0, t, t);
        let s = l => xe(l, i, 7),
            d = (l, c, u, m, p) => {
                r.fillStyle = p;
                for (let f of [0, -t, t])
                    for (let b of [0, -t, t]) r.fillRect(l + f, c + b, u, m)
            },
            n = (l, c, u, m) => {
                r.fillStyle = m;
                for (let p of [0, -t, t])
                    for (let f of [0, -t, t]) r.beginPath(), r.arc(l + p, c + f, u, 0, Math.PI * 2), r.fill()
            };
        switch (i) {
            case 0:
            case 12: {
                for (let c = 0; c < 14; c++) n(s(c) * t, s(c + 50) * t, 10 + s(c + 99) * 18, i === 0 ? "rgba(70,90,40,0.25)" : "rgba(20,26,14,0.35)");
                let l = i === 0 ? ["#4a5a32", "#33421f", "#56683a", "#2d3a1c", "#5f6f3c"] : ["#3a3020", "#5a4a2a", "#6a4a24", "#25301a", "#4a5a30"];
                for (let c = 0; c < 900; c++) d(s(c * 3) * t, s(c * 3 + 1) * t, 1 + (c % 3 === 0 ? 1 : 0), 1, l[c % l.length]);
                r.strokeStyle = i === 0 ? "rgba(110,130,60,0.35)" : "rgba(120,90,50,0.3)", r.lineWidth = 1;
                for (let c = 0; c < 160; c++) {
                    let u = s(c * 7 + 2) * t,
                        m = s(c * 7 + 3) * t;
                    r.beginPath(), r.moveTo(u, m), r.lineTo(u + (s(c) - .5) * 3, m - 3 - s(c + 1) * 3), r.stroke()
                }
                break
            }
            case 1:
            case 10:
            case 9: {
                for (let c = 0; c < 10; c++) n(s(c) * t, s(c + 20) * t, 8 + s(c + 40) * 14, i === 10 ? "rgba(20,14,8,0.3)" : "rgba(90,74,54,0.3)");
                let l = i === 9 ? 1400 : 500;
                for (let c = 0; c < l; c++) d(s(c * 5) * t, s(c * 5 + 1) * t, 1 + (c % 4 === 0 ? 1 : 0), 1 + (c % 5 === 0 ? 1 : 0), c % 2 ? $(o, .18) : $(o, -.22));
                if (i === 10)
                    for (let c = 0; c < 8; c++) n(s(c * 9) * t, s(c * 9 + 4) * t, 3 + s(c) * 5, "rgba(255,255,255,0.05)");
                if (i !== 10)
                    for (let c = 0; c < 30; c++) r.fillStyle = $("#7a7468", (s(c) - .5) * .4), r.beginPath(), r.ellipse(s(c * 11) * t, s(c * 11 + 1) * t, 1.5 + s(c * 2) * 2, 1 + s(c * 3) * 1.5, s(c), 0, Math.PI * 2), r.fill();
                break
            }
            case 8: {
                for (let l = 0; l < t; l += 8) r.fillStyle = "#5a4630", r.fillRect(0, l, t, 4), r.fillStyle = "#3e2e1e", r.fillRect(0, l + 4, t, 4);
                for (let l = 0; l < 260; l++) d(s(l) * t, Math.floor(s(l + 1) * 16) * 8 + 1, 2, 2, l % 3 ? "#5a8a32" : "#6f9a3a");
                break
            }
            case 2: {
                for (let l = 0; l < 2e3; l++) d(s(l * 2) * t, s(l * 2 + 1) * t, 1, 1, l % 2 ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.12)");
                for (let l = 0; l < 4; l++) r.fillStyle = "rgba(0,0,0,0.08)", r.fillRect(s(l * 13) * t, s(l * 13 + 1) * t, 14 + s(l) * 20, 10 + s(l + 2) * 16);
                break
            }
            case 3: {
                for (let l = 0; l < t; l += 16)
                    for (let c = 0; c < t; c += 16) r.fillStyle = $(o, (xe(c, l, 3) - .5) * .12), r.fillRect(c + 1, l + 1, 15, 15);
                for (let l = 0; l < 400; l++) d(s(l * 2) * t, s(l * 2 + 1) * t, 1, 1, "rgba(0,0,0,0.08)");
                break
            }
            case 4: {
                for (let l = 0; l < t; l += 8) {
                    let c = -xe(l, 1) * 64;
                    for (; c < t;) {
                        let u = 40 + xe(c | 0, l, 2) * 50;
                        r.fillStyle = $(o, (xe(c | 0, l, 5) - .5) * .25), r.fillRect(c, l, u - 1, 7), r.fillStyle = "rgba(0,0,0,0.25)", r.fillRect(c + u - 1, l, 1, 7), c += u
                    }
                    r.fillStyle = "rgba(0,0,0,0.3)", r.fillRect(0, l + 7, t, 1)
                }
                break
            }
            case 5:
            case 13: {
                let l = i === 5 ? 16 : 32;
                for (let c = 0; c < t; c += l)
                    for (let u = 0; u < t; u += l) r.fillStyle = $(o, (u + c) / l % 2 ? -.05 : .03), r.fillRect(u, c, l, l);
                r.fillStyle = "rgba(0,0,0,0.2)";
                for (let c = 0; c < t; c += l) r.fillRect(c, 0, 1, t), r.fillRect(0, c, t, 1);
                for (let c = 0; c < 6; c++) n(s(c * 3) * t, s(c * 3 + 1) * t, 6 + s(c) * 10, "rgba(80,70,50,0.08)");
                break
            }
            case 6:
            case 14: {
                for (let l = 0; l < 1200; l++) d(s(l * 2) * t, s(l * 2 + 1) * t, 1, 1, l % 2 ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.08)");
                for (let l = 0; l < 6; l++) n(s(l * 5) * t, s(l * 5 + 2) * t, 6 + s(l) * 14, "rgba(30,26,20,0.1)");
                r.fillStyle = "rgba(0,0,0,0.18)", r.fillRect(0, 0, t, 1), r.fillRect(0, 0, 1, t), r.fillRect(0, 64, t, 1), r.fillRect(64, 0, 1, t);
                break
            }
            case 7: {
                for (let l = 0; l < 2500; l++) d(s(l * 2) * t, s(l * 2 + 1) * t, 1, 1, l % 2 ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.1)");
                break
            }
            case 11: {
                for (let l = 0; l < 40; l++) {
                    r.strokeStyle = "rgba(150,200,200,0.12)", r.beginPath();
                    let c = s(l * 3) * t,
                        u = s(l * 3 + 1) * t;
                    r.moveTo(c, u), r.quadraticCurveTo(c + 6, u - 2, c + 12, u), r.stroke()
                }
                break
            }
        }
        return a
    }
    var na = new Set([1, 2, 3, 4]),
        Cs = {
            1: "#5e3a2e",
            2: "#7e7e78",
            3: "#5e4632",
            4: "#5e666e",
            11: "#5a5a54"
        },
        Rs = {
            1: "#7c4433",
            2: "#5c5c56",
            3: "#47362a",
            4: "#454c54",
            11: "#484842"
        },
        la = class {
            constructor(e, t) {
                v(this, "map");
                v(this, "scale");
                v(this, "tex", new Map);
                v(this, "cache", new Map);
                v(this, "decals", new Map);
                v(this, "frame", 0);
                v(this, "maxChunks", 18);
                this.map = e, this.scale = t;
                for (let a of e.decals) this.addDecal(a.x, a.y, a.kind, a.r, a.rot, 1, !1)
            }
            setScale(e) {
                Math.abs(e - this.scale) < .01 || (this.scale = e, this.tex.clear(), this.cache.clear())
            }
            texture(e) {
                let t = this.tex.get(e);
                return t || (t = Ts(e, this.scale), this.tex.set(e, t)), t
            }
            tick() {
                this.frame++
            }
            get(e, t) {
                let a = t * 100 + e,
                    r = this.cache.get(a);
                if (!r) {
                    if (this.cache.size >= this.maxChunks) {
                        let o = -1,
                            s = 1 / 0;
                        for (let [d, n] of this.cache) n.used < s && (s = n.used, o = d);
                        this.cache.delete(o)
                    }
                    r = {
                        cv: this.build(e, t),
                        used: this.frame
                    }, this.cache.set(a, r)
                }
                return r.used = this.frame, r.cv
            }
            invalidateAt(e, t) {
                let a = Math.floor(e / Z),
                    r = Math.floor(t / Z);
                this.cache.delete(r * 100 + a)
            }
            addDecal(e, t, a, r, o, s = 1, d = !0) {
                let n = Math.floor(e / Z),
                    l = Math.floor(t / Z),
                    c = l * 100 + n,
                    u = this.decals.get(c);
                u || this.decals.set(c, u = []);
                let m = {
                    x: e,
                    y: t,
                    kind: a,
                    r,
                    rot: o,
                    a: s
                };
                if (u.push(m), u.length > 140 && u.splice(0, u.length - 140), d) {
                    let p = this.cache.get(c);
                    if (p) {
                        let f = p.cv.getContext("2d");
                        f.save(), f.scale(this.scale, this.scale), f.translate(-n * Z, -l * Z), this.drawDecal(f, m), f.restore()
                    }
                }
            }
            drawDecal(e, t) {
                e.save(), e.translate(t.x, t.y), e.rotate(t.rot), e.globalAlpha = t.a;
                let a = t.r;
                switch (t.kind) {
                    case "blood":
                    case "blood_old": {
                        let r = t.kind === "blood" ? "rgba(110,10,8,0.8)" : "rgba(60,20,14,0.55)";
                        e.fillStyle = r, e.beginPath(), e.ellipse(0, 0, a, a * .7, 0, 0, Math.PI * 2), e.fill();
                        for (let o = 0; o < 6; o++) {
                            let s = xe(o, Math.round(t.x), 1) * Math.PI * 2,
                                d = a * (.9 + xe(o, Math.round(t.y), 2) * .8);
                            e.beginPath(), e.arc(Math.cos(s) * d, Math.sin(s) * d * .7, a * (.12 + xe(o, 3) * .2), 0, Math.PI * 2), e.fill()
                        }
                        break
                    }
                    case "splat": {
                        e.fillStyle = "rgba(120,12,8,0.75)";
                        for (let r = 0; r < 7; r++) e.beginPath(), e.ellipse(r * a * .35, (xe(r, Math.round(t.x), 4) - .5) * a * .6, a * (.35 - r * .04), a * (.25 - r * .03), 0, 0, Math.PI * 2), e.fill();
                        break
                    }
                    case "oil":
                        e.fillStyle = "rgba(10,10,12,0.35)", e.beginPath(), e.ellipse(0, 0, a, a * .6, 0, 0, Math.PI * 2), e.fill(), e.fillStyle = "rgba(120,100,160,0.06)", e.beginPath(), e.ellipse(-a * .2, -a * .1, a * .5, a * .25, 0, 0, Math.PI * 2), e.fill();
                        break;
                    case "crack":
                        e.strokeStyle = "rgba(0,0,0,0.35)", e.lineWidth = 1, e.beginPath(), e.moveTo(-a, 0);
                        for (let r = 1; r <= 6; r++) e.lineTo(-a + r * 2 * a / 6, (xe(r, Math.round(t.x), 5) - .5) * a * .5);
                        e.stroke();
                        break;
                    case "leaves":
                        for (let r = 0; r < 12; r++) e.fillStyle = ["#7a5a2a", "#8a4a1a", "#5a4a24", "#9a6a2a"][r % 4], e.fillRect((xe(r, 1, Math.round(t.x)) - .5) * a * 2, (xe(r, 2, Math.round(t.y)) - .5) * a * 2, 3, 2);
                        break;
                    case "scorch": {
                        let r = e.createRadialGradient(0, 0, 2, 0, 0, a);
                        r.addColorStop(0, "rgba(10,8,6,0.85)"), r.addColorStop(.6, "rgba(20,16,12,0.5)"), r.addColorStop(1, "rgba(20,16,12,0)"), e.fillStyle = r, e.beginPath(), e.arc(0, 0, a, 0, Math.PI * 2), e.fill();
                        break
                    }
                    case "shell":
                        e.fillStyle = "#c9a25a", e.fillRect(-2, -1, 4, 2);
                        break
                }
                e.restore()
            }
            build(e, t) {
                let a = this.scale,
                    r = pe(Z * a, Z * a),
                    o = r.getContext("2d");
                o.scale(a, a), o.translate(-e * Z, -t * Z);
                let s = this.map,
                    d = e * Ai,
                    n = t * Ai,
                    l = Math.min(U, d + Ai),
                    c = Math.min(X, n + Ai),
                    u = (p, f) => p < 0 || f < 0 || p >= U || f >= X ? 0 : s.ground[Y(p, f)],
                    m = (p, f) => p < 0 || f < 0 || p >= U || f >= X ? 0 : s.solid[Y(p, f)];
                for (let p = n - 1; p <= c; p++)
                    for (let f = d - 1; f <= l; f++) {
                        let b = u(f, p),
                            x = this.texture(b),
                            k = (f % 4 + 4) % 4 * y * a,
                            M = (p % 4 + 4) % 4 * y * a;
                        o.drawImage(x, k, M, y * a, y * a, f * y, p * y, y + .5, y + .5)
                    }
                for (let p = n; p < c; p++)
                    for (let f = d; f < l; f++) {
                        let b = u(f, p),
                            x = f * y,
                            k = p * y,
                            M = [
                                [0, -1, 0],
                                [1, 0, 1],
                                [0, 1, 2],
                                [-1, 0, 3]
                            ];
                        for (let [R, w, P] of M) {
                            let g = u(f + R, p + w);
                            if (g !== b) {
                                if (Ba.has(b) && Ba.has(g)) {
                                    o.fillStyle = po[g];
                                    for (let S = 0; S < 4; S++) {
                                        let T = xe(f * 3 + S, p * 5 + P, 11) * y,
                                            A = xe(f + S, p + P, 13) * 7,
                                            _ = 3 + xe(f, p + S, P) * 6,
                                            H = P === 1 ? x + y - A : P === 3 ? x + A : x + T,
                                            B = P === 0 ? k + A : P === 2 ? k + y - A : k + T;
                                        o.beginPath(), o.arc(H, B, _, 0, Math.PI * 2), o.fill()
                                    }
                                }
                                if (b === 3 && g === 2 && (o.fillStyle = "#8a8a84", P === 1 && o.fillRect(x + y - 3, k, 3, y), P === 3 && o.fillRect(x, k, 3, y), P === 0 && o.fillRect(x, k, y, 3), P === 2 && o.fillRect(x, k + y - 3, y, 3)), b === 2 && Ba.has(g)) {
                                    o.fillStyle = "rgba(70,80,40,0.55)";
                                    for (let S = 0; S < 3; S++) {
                                        let T = xe(f * 7 + S, p * 3 + P, 17) * y,
                                            A = P === 1 ? x + y - 2 : P === 3 ? x + 2 : x + T,
                                            _ = P === 0 ? k + 2 : P === 2 ? k + y - 2 : k + T;
                                        o.beginPath(), o.arc(A, _, 2 + xe(S, f, p) * 3, 0, Math.PI * 2), o.fill()
                                    }
                                }
                                uo.has(b) && !uo.has(g) && m(f + R, p + w) === 0 && (o.fillStyle = "rgba(0,0,0,0.25)", P === 0 && o.fillRect(x, k, y, 2), P === 2 && o.fillRect(x, k + y - 2, y, 2), P === 1 && o.fillRect(x + y - 2, k, 2, y), P === 3 && o.fillRect(x, k, 2, y))
                            }
                        }
                    }
                o.fillStyle = "rgba(232,226,200,0.75)";
                for (let p of Dr)
                    for (let f = p.from; f < p.to; f++) {
                        if (p.skip?.some(([x, k]) => f >= x && f <= k)) continue;
                        let b = f * y;
                        if (p.axis === "v") {
                            let x = p.at * y;
                            if (x < e * Z - 8 || x > (e + 1) * Z + 8 || b < t * Z - y || b > (t + 1) * Z) continue;
                            f % 2 === 0 && o.fillRect(x - 1.5, b + 4, 3, 22)
                        } else {
                            let x = p.at * y;
                            if (x < t * Z - 8 || x > (t + 1) * Z + 8 || b < e * Z - y || b > (e + 1) * Z) continue;
                            f % 2 === 0 && o.fillRect(b + 4, x - 1.5, 22, 3)
                        }
                    }
                if (e * Z < 140 * y && (e + 1) * Z > 131 * y && t * Z < 48 * y && (t + 1) * Z > 39 * y) {
                    let p = 135.5 * y,
                        f = 43.5 * y;
                    o.strokeStyle = "rgba(230,200,70,0.7)", o.lineWidth = 5, o.beginPath(), o.arc(p, f, 88, 0, Math.PI * 2), o.stroke(), o.fillStyle = "rgba(230,230,220,0.75)", o.fillRect(p - 34, f - 46, 14, 92), o.fillRect(p + 20, f - 46, 14, 92), o.fillRect(p - 34, f - 7, 68, 14)
                }
                for (let p = -1; p <= 1; p++)
                    for (let f = -1; f <= 1; f++) {
                        let b = this.decals.get((t + p) * 100 + e + f);
                        if (b)
                            for (let x of b) this.drawDecal(o, x)
                    }
                o.fillStyle = "rgba(0,0,0,0.3)";
                for (let p = n - 1; p < c; p++)
                    for (let f = d - 1; f < l; f++) {
                        let b = m(f, p);
                        na.has(b) || b === 9 ? o.fillRect(f * y + 6, p * y + 8, y, y) : b === 8 && o.fillRect(f * y + 3, p * y + 4, y, y)
                    }
                for (let p of s.trees) !p.cut && (p.x < e * Z - 120 || p.x > (e + 1) * Z + 120 || p.y < t * Z - 120 || p.y > (t + 1) * Z + 120 || (o.fillStyle = "rgba(0,0,0,0.28)", o.beginPath(), o.ellipse(p.x + p.r * .28, p.y + p.r * .34, p.r * .95, p.r * .85, 0, 0, Math.PI * 2), o.fill(), o.fillStyle = "#3a2a1c", o.beginPath(), o.arc(p.x, p.y, p.trunk, 0, Math.PI * 2), o.fill()));
                for (let p of s.props) {
                    if (p.driveable || p.x > (e + 1) * Z + 40 || p.x + p.w < e * Z - 40 || p.y > (t + 1) * Z + 40 || p.y + p.h < t * Z - 40 || p.kind === "tower" || p.kind === "silo") continue;
                    if (p.v < 0 && p.explosive) {
                        this.drawDecal(o, {
                            x: p.x + p.w / 2,
                            y: p.y + p.h / 2,
                            kind: "scorch",
                            r: 60,
                            rot: 0,
                            a: 1
                        });
                        continue
                    }
                    let f = yt(p.kind, p.w, p.h, p.v);
                    f && (o.save(), p.kind !== "canopy" && (o.fillStyle = "rgba(0,0,0,0.25)", p.blocks && p.kind !== "cellbars" && p.kind !== "pallet" && o.fillRect(p.x + 4, p.y + 5, p.w, p.h)), p.rot && p.kind === "van" ? (o.translate(p.x + p.w / 2, p.y + p.h / 2), o.rotate(p.rot), o.drawImage(f, -p.w / 2 - 1, -p.h / 2 - 1, f.width / 2, f.height / 2)) : o.drawImage(f, p.x - 1, p.y - 1, f.width / 2, f.height / 2), o.restore())
                }
                for (let p = n - 1; p <= c; p++)
                    for (let f = d - 1; f <= l; f++) {
                        let b = m(f, p);
                        b === 0 || b === 12 || this.drawWall(o, f, p, b, m)
                    }
                return r
            }
            drawWall(e, t, a, r, o) {
                let s = t * y,
                    d = a * y,
                    n = c => na.has(c) || c === 5 || c === 13 || c === 10;
                if (na.has(r) || r === 11) {
                    let c = Cs[r],
                        u = Rs[r],
                        m = o(t, a + 1),
                        p = !na.has(m) && m !== 5,
                        f = p ? 11 : 0;
                    if (e.fillStyle = c, e.fillRect(s, d, y, y - f), r === 3) {
                        e.fillStyle = "rgba(0,0,0,0.2)";
                        for (let b = 0; b < 4; b++) e.fillRect(s, d + b * 8, y, 1)
                    } else if (r === 4) {
                        e.fillStyle = "rgba(255,255,255,0.06)";
                        for (let b = 0; b < y; b += 4) e.fillRect(s + b, d, 2, y - f)
                    } else e.fillStyle = "rgba(255,255,255,0.05)", e.fillRect(s, d, y, 3);
                    if (p) {
                        let b = d + y - f;
                        if (e.fillStyle = u, e.fillRect(s, b, y, f), r === 1) {
                            e.fillStyle = "rgba(40,20,14,0.6)", e.fillRect(s, b + 3.5, y, 1), e.fillRect(s, b + 7.5, y, 1);
                            for (let x = 0; x < 4; x++) e.fillRect(s + x * 8 + 2, b, 1, 3.5), e.fillRect(s + x * 8 + 6, b + 4, 1, 3.5)
                        } else if (r === 4) {
                            e.fillStyle = "rgba(0,0,0,0.25)";
                            for (let x = 0; x < y; x += 4) e.fillRect(s + x, b, 2, f)
                        } else if (r === 3) {
                            e.fillStyle = "rgba(0,0,0,0.3)";
                            for (let x = 0; x < y; x += 6) e.fillRect(s + x, b, 1, f)
                        } else e.fillStyle = "rgba(0,0,0,0.18)", e.fillRect(s, b + f / 2, y, 1);
                        e.fillStyle = "rgba(0,0,0,0.35)", e.fillRect(s, d + y - 1, y, 1)
                    }
                    e.fillStyle = "rgba(0,0,0,0.45)", n(o(t, a - 1)) || e.fillRect(s, d, y, 1.5), n(o(t - 1, a)) || e.fillRect(s, d, 1.5, y), n(o(t + 1, a)) || e.fillRect(s + y - 1.5, d, 1.5, y);
                    return
                }
                let l = n(o(t - 1, a)) || n(o(t + 1, a)) || o(t - 1, a) === r || o(t + 1, a) === r;
                if (r === 5 || r === 10) {
                    e.fillStyle = r === 10 ? "#6a7a70" : "#3a3430", l || r === 10 ? (e.fillRect(s, d + 10, y, 12), e.fillStyle = "rgba(150,200,220,0.55)", e.fillRect(s + 1, d + 12, y - 2, 8), e.fillStyle = "rgba(255,255,255,0.4)", e.fillRect(s + 4, d + 13, 10, 2)) : (e.fillRect(s + 10, d, 12, y), e.fillStyle = "rgba(150,200,220,0.55)", e.fillRect(s + 12, d + 1, 8, y - 2), e.fillStyle = "rgba(255,255,255,0.4)", e.fillRect(s + 13, d + 4, 2, 10)), r === 10 && !l && (e.fillStyle = "#6a7a70", e.fillRect(s + 10, d, 12, y), e.fillStyle = "rgba(150,200,220,0.5)", e.fillRect(s + 12, d, 8, y));
                    return
                }
                if (r === 6) {
                    e.fillStyle = "rgba(0,0,0,0.25)", l ? e.fillRect(s, d + 17, y, 4) : e.fillRect(s + 17, d, 4, y), e.fillStyle = "#6a5034", l ? (e.fillRect(s, d + 12, y, 3), e.fillRect(s, d + 17, y, 3), e.fillStyle = "#4a3624", e.fillRect(s + 2, d + 9, 5, 13), e.fillRect(s + 18, d + 9, 5, 13)) : (e.fillRect(s + 12, d, 3, y), e.fillRect(s + 17, d, 3, y), e.fillStyle = "#4a3624", e.fillRect(s + 9, d + 2, 13, 5), e.fillRect(s + 9, d + 18, 13, 5));
                    return
                }
                if (r === 7) {
                    if (e.strokeStyle = "rgba(170,175,180,0.45)", e.lineWidth = 1, e.beginPath(), l)
                        for (let c = 0; c < y; c += 4) e.moveTo(s + c, d + 13), e.lineTo(s + c + 4, d + 19), e.moveTo(s + c + 4, d + 13), e.lineTo(s + c, d + 19);
                    else
                        for (let c = 0; c < y; c += 4) e.moveTo(s + 13, d + c), e.lineTo(s + 19, d + c + 4), e.moveTo(s + 19, d + c), e.lineTo(s + 13, d + c + 4);
                    e.stroke(), e.fillStyle = "#7a7e84", (t + a) % 3 === 0 && e.fillRect(s + 13, d + 13, 6, 6);
                    return
                }
                if (r === 8) {
                    for (let c = 0; c < 3; c++)
                        for (let u = 0; u < 2; u++) {
                            let m = s + (l ? c * 11 + (u ? 5 : 0) : u * 14 + 2),
                                p = d + (l ? u * 14 + 2 : c * 11 + (u ? 5 : 0));
                            e.fillStyle = "rgba(0,0,0,0.6)", e.beginPath(), e.ellipse(m + 6, p + 6, 7, 6.5, 0, 0, Math.PI * 2), e.fill(), e.fillStyle = $("#a8966a", (xe(t + c, a + u) - .5) * .2), e.beginPath(), e.ellipse(m + 6, p + 6, 6, 5.5, 0, 0, Math.PI * 2), e.fill()
                        }
                    return
                }
                if (r === 9) {
                    for (let c = 0; c < 5; c++) {
                        let u = s + 4 + xe(t, a, c) * 24,
                            m = d + 4 + xe(a, t, c + 9) * 24,
                            p = e.createRadialGradient(u - 3, m - 3, 1, u, m, 13);
                        p.addColorStop(0, "#4a6a32"), p.addColorStop(1, "#1e2e16"), e.fillStyle = p, e.beginPath(), e.arc(u, m, 12, 0, Math.PI * 2), e.fill()
                    }
                    return
                }
                r === 13 && (e.fillStyle = "rgba(60,44,30,0.8)", e.fillRect(s + 2, d + 2, y - 4, y - 4))
            }
        };
    var Oi = class {
            constructor(e) {
                v(this, "max");
                v(this, "n", 0);
                v(this, "x");
                v(this, "y");
                v(this, "z");
                v(this, "vx");
                v(this, "vy");
                v(this, "vz");
                v(this, "life");
                v(this, "maxLife");
                v(this, "size");
                v(this, "rot");
                v(this, "vr");
                v(this, "kind");
                v(this, "col");
                v(this, "onLand", null);
                this.max = e, this.x = new Float32Array(e), this.y = new Float32Array(e), this.z = new Float32Array(e), this.vx = new Float32Array(e), this.vy = new Float32Array(e), this.vz = new Float32Array(e), this.life = new Float32Array(e), this.maxLife = new Float32Array(e), this.size = new Float32Array(e), this.rot = new Float32Array(e), this.vr = new Float32Array(e), this.kind = new Uint8Array(e), this.col = new Uint32Array(e)
            }
            spawn(e, t, a, r, o, s, d, n = 16777215, l = 0, c = 0) {
                let u;
                this.n < this.max ? u = this.n++ : u = Math.random() * this.max | 0, this.kind[u] = e, this.x[u] = t, this.y[u] = a, this.z[u] = l, this.vx[u] = r, this.vy[u] = o, this.vz[u] = c, this.life[u] = s, this.maxLife[u] = s, this.size[u] = d, this.rot[u] = Math.random() * 6.28, this.vr[u] = (Math.random() - .5) * 18, this.col[u] = n
            }
            update(e) {
                let t = 0;
                for (; t < this.n;) {
                    if (this.life[t] -= e, this.life[t] <= 0) {
                        this.kill(t);
                        continue
                    }
                    let a = this.kind[t],
                        r = 3;
                    (a === 3 || a === 8) && (r = 1.2), (a === 4 || a === 2 || a === 7 || a === 10) && (r = 1.5), (a === 6 || a === 9) && (r = 1, this.vy[t] -= 20 * e);
                    let o = Math.exp(-r * e);
                    if (this.vx[t] *= o, this.vy[t] *= o, this.x[t] += this.vx[t] * e, this.y[t] += this.vy[t] * e, this.rot[t] += this.vr[t] * e, (a === 3 || a === 8) && (this.size[t] += e * (a === 8 ? 30 : 16)), (this.z[t] > 0 || this.vz[t] !== 0) && (this.vz[t] -= 520 * e, this.z[t] += this.vz[t] * e, this.z[t] <= 0)) {
                        if (this.z[t] = 0, a === 4 && Math.abs(this.vz[t]) > 60) this.vz[t] *= -.35, this.vr[t] *= .5;
                        else if (this.vz[t] = 0, this.vx[t] *= .3, this.vy[t] *= .3, this.vr[t] = 0, a === 2 && this.onLand) {
                            this.onLand(this.x[t], this.y[t], a), this.kill(t);
                            continue
                        }
                    }
                    t++
                }
            }
            kill(e) {
                let t = --this.n;
                e !== t && (this.x[e] = this.x[t], this.y[e] = this.y[t], this.z[e] = this.z[t], this.vx[e] = this.vx[t], this.vy[e] = this.vy[t], this.vz[e] = this.vz[t], this.life[e] = this.life[t], this.maxLife[e] = this.maxLife[t], this.size[e] = this.size[t], this.rot[e] = this.rot[t], this.vr[e] = this.vr[t], this.kind[e] = this.kind[t], this.col[e] = this.col[t])
            }
            draw(e, t, a, r, o) {
                for (let s = 0; s < this.n; s++) {
                    let d = this.x[s],
                        n = this.y[s] - this.z[s];
                    if (d < t || d > r || n < a || n > o) continue;
                    let l = this.kind[s],
                        c = this.life[s] / this.maxLife[s],
                        u = this.size[s],
                        m = this.col[s],
                        p = m >> 16 & 255,
                        f = m >> 8 & 255,
                        b = m & 255;
                    switch (l) {
                        case 1: {
                            e.strokeStyle = `rgba(255,${200+(c*55|0)},120,${c})`, e.lineWidth = u, e.beginPath(), e.moveTo(d, n), e.lineTo(d - this.vx[s] * .02, n - this.vy[s] * .02), e.stroke();
                            break
                        }
                        case 2:
                            e.fillStyle = `rgba(${p},${f},${b},${.9})`, e.fillRect(d - u / 2, n - u / 2, u, u);
                            break;
                        case 3:
                        case 8: {
                            e.fillStyle = `rgba(${p},${f},${b},${(l===8?.35:.28)*c})`, e.beginPath(), e.arc(d, n, u, 0, 6.283), e.fill();
                            break
                        }
                        case 4:
                            e.save(), e.translate(d, n), e.rotate(this.rot[s]), e.fillStyle = "#d8b05a", e.fillRect(-2.2, -.9, 4.4, 1.8), e.restore(), this.z[s] > 0 && (e.fillStyle = "rgba(0,0,0,0.25)", e.fillRect(this.x[s] - 2, this.y[s] - 1, 4, 2));
                            break;
                        case 5:
                            e.fillStyle = `rgba(${p},${f},${b},${.5*c})`, e.fillRect(d - u / 2, n - u / 2, u, u);
                            break;
                        case 6:
                        case 9: {
                            let x = c;
                            e.fillStyle = l === 9 ? `rgba(255,${120+c*120|0},40,${x*.8})` : `rgba(255,${140+c*80|0},60,${x})`, e.beginPath(), e.arc(d, n, u * (l === 9 ? .6 + c * .6 : 1), 0, 6.283), e.fill();
                            break
                        }
                        case 7:
                        case 10:
                            e.save(), e.translate(d, n), e.rotate(this.rot[s]), e.fillStyle = l === 7 ? `rgba(200,230,240,${.8*c})` : `rgba(${p},${f},${b},${c})`, e.fillRect(-u / 2, -u / 4, u, u / 2), e.restore();
                            break;
                        case 11:
                            e.strokeStyle = `rgba(180,200,220,${.5*c})`, e.lineWidth = .8, e.beginPath(), e.arc(d, n, (1 - c) * 5 + 1, 0, 6.283), e.stroke();
                            break;
                        case 12:
                            e.fillStyle = `rgba(120,240,140,${c})`, e.fillRect(d - 1, n - 3, 2, 6), e.fillRect(d - 3, n - 1, 6, 2);
                            break
                    }
                }
            }
        },
        dt = i => parseInt(i.replace("#", ""), 16);
    var di = class {
        constructor(e, t, a) {
            v(this, "cv");
            v(this, "c");
            v(this, "world");
            v(this, "me");
            v(this, "looks", new Map);
            v(this, "chunks");
            v(this, "particles");
            v(this, "quality", "high");
            v(this, "cssW", 800);
            v(this, "cssH", 400);
            v(this, "rs", 1);
            v(this, "zoomPref", 1);
            v(this, "reduceShake", !1);
            v(this, "cam", {
                x: 0,
                y: 0,
                zoom: 1,
                trauma: 0,
                kick: 0,
                kickA: 0,
                lx: 0,
                ly: 0,
                extraZoom: 0
            });
            v(this, "corpses", []);
            v(this, "flashes", []);
            v(this, "tracers", []);
            v(this, "nums", []);
            v(this, "pings", []);
            v(this, "swings", []);
            v(this, "booms", []);
            v(this, "hurt", 0);
            v(this, "hitMarker", 0);
            v(this, "hitKill", !1);
            v(this, "time", 0);
            v(this, "vis");
            v(this, "visN", 0);
            v(this, "fog");
            v(this, "dark");
            v(this, "vignette", null);
            v(this, "roofs", new Map);
            v(this, "rain", []);
            v(this, "fogBlobs", []);
            v(this, "smokeT", 0);
            v(this, "interactTarget", null);
            v(this, "aimPreview", null);
            v(this, "showNames", !0);
            v(this, "netMode", !1);
            v(this, "waypoint", null);
            this.cv = e, this.c = e.getContext("2d", {
                alpha: !1
            }), this.world = t, this.me = a, this.chunks = new la(t.map, 1.5), this.particles = new Oi(500), this.particles.onLand = (r, o) => {
                Math.random() < .35 && this.chunks.addDecal(r, o, "blood", 1.5 + Math.random() * 2.5, Math.random() * 6, .8)
            }, this.vis = new Float32Array(2 * 400), this.fog = pe(10, 10), this.dark = pe(10, 10);
            for (let r = 0; r < 160; r++) this.rain.push({
                x: Math.random(),
                y: Math.random(),
                s: .6 + Math.random() * .6
            });
            for (let r = 0; r < 9; r++) this.fogBlobs.push({
                x: Math.random() * 1.4 - .2,
                y: Math.random() * 1.4 - .2,
                r: .25 + Math.random() * .35,
                v: .004 + Math.random() * .01
            })
        }
        setQuality(e) {
            this.quality = e, this.particles = Object.assign(new Oi(e === "high" ? 600 : e === "medium" ? 350 : 180), {
                onLand: this.particles.onLand
            }), this.resize(this.cssW, this.cssH, this.rs)
        }
        resize(e, t, a) {
            this.cssW = e, this.cssH = t;
            let r = this.quality === "high" ? 2 : this.quality === "medium" ? 1.5 : 1;
            this.rs = Math.min(a, r), this.cv.width = Math.round(e * this.rs), this.cv.height = Math.round(t * this.rs), this.cv.style.width = e + "px", this.cv.style.height = t + "px";
            let o = this.quality === "high" ? 3 : this.quality === "medium" ? 4 : 5;
            this.fog.width = Math.ceil(e / o), this.fog.height = Math.ceil(t / o), this.dark.width = Math.ceil(e / o), this.dark.height = Math.ceil(t / o), this.vignette = null, this.cam.zoom = this.baseZoom();
            let s = Math.round(V(this.cam.zoom * this.rs, 1, 2) * 4) / 4;
            this.chunks.setScale(s), this.chunks.maxChunks = this.quality === "low" ? 12 : 18, this.roofs.clear()
        }
        baseZoom() {
            return V(this.cssH / 450, .62, 2.4) * this.zoomPref
        }
        get meP() {
            return this.world.player(this.me)
        }
        worldToScreen(e, t) {
            let a = this.cam.zoom;
            return {
                x: (e - this.cam.x) * a + this.cssW / 2,
                y: (t - this.cam.y) * a + this.cssH / 2
            }
        }
        screenToWorld(e, t) {
            let a = this.cam.zoom;
            return {
                x: (e - this.cssW / 2) / a + this.cam.x,
                y: (t - this.cssH / 2) / a + this.cam.y
            }
        }
        shake(e) {
            this.cam.trauma = Math.min(.55, this.cam.trauma + e * (this.reduceShake ? .12 : .28))
        }
        onFx(e) {
            let t = this.particles,
                a = e.t !== "tracer" && "pid" in e && e.pid === this.me;
            switch (e.t) {
                case "shot": {
                    let r = !e.sup;
                    this.flashes.push({
                        x: e.x,
                        y: e.y,
                        a: e.a,
                        t: 0,
                        max: r ? .06 : .04,
                        r: r ? 1 : .4,
                        sup: e.sup
                    });
                    let o = e.a + Math.PI / 2 + (Math.random() - .5) * .6,
                        s = C(e.w).weapon?.cls;
                    s !== "revolver" && t.spawn(4, e.x - Math.cos(e.a) * 14, e.y - Math.sin(e.a) * 14, Math.cos(o) * 90, Math.sin(o) * 90, 2.5, 3, 0, 8, 120), t.spawn(3, e.x + Math.cos(e.a) * 6, e.y + Math.sin(e.a) * 6, Math.cos(e.a) * 40, Math.sin(e.a) * 40, .7, 4, 12105904), a && (this.cam.kick = Math.min(1, this.cam.kick + (s === "sniper" || s === "hunting" || s === "shotgun" ? .9 : .35)), this.cam.kickA = e.a, this.shake(s === "shotgun" || s === "sniper" ? .12 : .04));
                    break
                }
                case "tracer":
                    (!this.world.bullets.length || this.netMode) && this.tracers.push({
                        x1: e.x1,
                        y1: e.y1,
                        x2: e.x2,
                        y2: e.y2,
                        t: 0,
                        max: .12
                    });
                    break;
                case "hit": {
                    if (e.kind === "zombie") {
                        for (let r = 0; r < 7; r++) {
                            let o = e.a + (Math.random() - .5) * 1.2,
                                s = 60 + Math.random() * 160;
                            t.spawn(2, e.x, e.y, Math.cos(o) * s, Math.sin(o) * s, 1.2, 1.6 + Math.random() * 1.6, dt("#8a1410"), 10, 60 + Math.random() * 80)
                        }
                        t.spawn(8, e.x, e.y, Math.cos(e.a) * 50, Math.sin(e.a) * 50, .45, 6, dt("#7a1010")), Math.random() < .6 && this.chunks.addDecal(e.x + Math.cos(e.a) * 18, e.y + Math.sin(e.a) * 18, "splat", 7 + Math.random() * 6, e.a, .85)
                    } else if (e.kind === "armour")
                        for (let r = 0; r < 6; r++) {
                            let o = e.a + Math.PI + (Math.random() - .5) * 2;
                            t.spawn(1, e.x, e.y, Math.cos(o) * 260, Math.sin(o) * 260, .25, 1.4)
                        } else {
                            for (let r = 0; r < 5; r++) {
                                let o = e.a + Math.PI + (Math.random() - .5) * 1.8;
                                t.spawn(5, e.x, e.y, Math.cos(o) * 90, Math.sin(o) * 90, .6, 2.5, dt("#9a9080"))
                            }
                            for (let r = 0; r < 3; r++) {
                                let o = e.a + Math.PI + (Math.random() - .5) * 1.4;
                                t.spawn(1, e.x, e.y, Math.cos(o) * 220, Math.sin(o) * 220, .15, 1.2)
                            }
                        }
                    e.pid === this.me && e.kind !== "wall" && (this.hitMarker = .18, this.hitKill = !!e.kill, e.dmg > 0 && this.nums.push({
                        x: e.x + (Math.random() - .5) * 10,
                        y: e.y - 14,
                        v: String(e.dmg),
                        t: 0,
                        col: e.kind === "armour" ? "#9ab0c8" : e.kill ? te.accHi : "#eef0ff"
                    }));
                    break
                }
                case "zdie": {
                    let r = Be[e.zt];
                    this.corpses.push({
                        x: e.x,
                        y: e.y,
                        a: e.a,
                        type: e.zt,
                        v: e.id,
                        t: 0
                    }), this.corpses.length > 60 && this.corpses.shift(), this.chunks.addDecal(e.x + Math.cos(e.a) * 8, e.y + Math.sin(e.a) * 8, "blood", r.radius * 1.1, e.a, .9);
                    for (let o = 0; o < 12; o++) {
                        let s = e.a + (Math.random() - .5) * 2,
                            d = 40 + Math.random() * 200;
                        t.spawn(2, e.x, e.y, Math.cos(s) * d, Math.sin(s) * d, 1.4, 2 + Math.random() * 2, dt("#7a100c"), 14, 80 + Math.random() * 120)
                    }
                    e.zt === "brute" && this.shake(.5);
                    break
                }
                case "melee":
                    this.swings.push({
                        x: e.x,
                        y: e.y,
                        a: e.a,
                        t: 0
                    }), e.pid === this.me && e.hit && this.shake(.08);
                    break;
                case "pdmg":
                    e.pid === this.me && (this.hurt = Math.min(1, this.hurt + .35 + e.dmg / 40), this.shake(.18 + e.dmg / 60));
                    {
                        let r = this.world.player(e.pid);
                        if (r)
                            for (let o = 0; o < 6; o++) {
                                let s = Math.random() * Q;
                                t.spawn(2, r.x, r.y, Math.cos(s) * 80, Math.sin(s) * 80, 1, 2, dt("#8a1410"), 10, 80)
                            }
                    }
                    break;
                case "door":
                    if (e.bash) {
                        let r = this.world.map.doors[e.id];
                        if (r)
                            for (let o = 0; o < 10; o++) {
                                let s = Math.random() * Q;
                                t.spawn(10, (r.tx + .5) * y, (r.ty + .5) * y, Math.cos(s) * 140, Math.sin(s) * 140, 1.5, 5, dt("#6a4a2a"), 6, 100)
                            }
                    }
                    break;
                case "explode": {
                    this.booms.push({
                        x: e.x,
                        y: e.y,
                        t: 0,
                        r: e.r
                    });
                    for (let o = 0; o < 40; o++) {
                        let s = Math.random() * Q,
                            d = 80 + Math.random() * 380;
                        t.spawn(9, e.x, e.y, Math.cos(s) * d, Math.sin(s) * d, .4 + Math.random() * .5, 8 + Math.random() * 10)
                    }
                    for (let o = 0; o < 18; o++) {
                        let s = Math.random() * Q,
                            d = 30 + Math.random() * 120;
                        t.spawn(3, e.x, e.y, Math.cos(s) * d, Math.sin(s) * d, 2.5 + Math.random() * 2, 14 + Math.random() * 12, 3814962)
                    }
                    this.chunks.addDecal(e.x, e.y, "scorch", e.r * .6, 0, 1), this.chunks.invalidateAt(e.x, e.y);
                    let r = this.meP;
                    if (r) {
                        let o = Math.hypot(r.x - e.x, r.y - e.y);
                        this.shake(V(1 - o / 900, 0, 1) * .9)
                    }
                    break
                }
                case "treehit":
                    for (let r = 0; r < 5; r++) {
                        let o = Math.random() * Q;
                        t.spawn(5, e.x, e.y, Math.cos(o) * 35, Math.sin(o) * 35, .45, 4, dt("#8a633f"))
                    }
                    break;
                case "treecut":
                    this.chunks.invalidateAt(e.x, e.y);
                    for (let r = 0; r < 16; r++) {
                        let o = Math.random() * Q;
                        t.spawn(5, e.x, e.y, Math.cos(o) * (25 + Math.random() * 55), Math.sin(o) * (25 + Math.random() * 55), .8, 5, dt("#6f5034"))
                    }
                    break;
                case "worldbuild":
                    this.chunks.invalidateAt(e.x, e.y);
                    break;
                case "toxic":
                    for (let r = 0; r < 20; r++) {
                        let o = Math.random() * Q,
                            s = 30 + Math.random() * 90;
                        t.spawn(8, e.x, e.y, Math.cos(o) * s, Math.sin(o) * s, 1.5 + Math.random(), 14, dt("#8aa83a"))
                    }
                    break;
                case "used": {
                    let r = this.world.player(e.pid),
                        o = C(e.id).use;
                    if (r && o && (o.heal || o.healOverTime))
                        for (let s = 0; s < 10; s++) {
                            let d = Math.random() * Q;
                            t.spawn(12, r.x + Math.cos(d) * 14, r.y + Math.sin(d) * 14, 0, -30, 1, 4)
                        }
                    break
                }
                case "ping":
                    this.pings.push({
                        x: e.x,
                        y: e.y,
                        kind: e.kind,
                        t: 0,
                        pid: e.pid
                    }), this.pings.length > 8 && this.pings.shift();
                    break;
                case "step": {
                    let r = this.world.map.ground[Y(Math.floor(e.x / y), Math.floor(e.y / y))];
                    e.sprint && (r === 0 || r === 1 || r === 10 || r === 12) && t.spawn(5, e.x, e.y + 6, (Math.random() - .5) * 20, (Math.random() - .5) * 20, .5, 3, dt(r === 10 ? "#3c3125" : "#6a5a40"));
                    break
                }
            }
        }
        update(e) {
            this.time += e, this.chunks.tick(), this.particles.update(e);
            let t = this.meP;
            if (t) {
                let a = 0,
                    r = 0,
                    o = t.input.aim !== null,
                    s = t.lo.equip[t.active],
                    d = s && C(s.id).weapon ? ge(s) : null,
                    n = o && d ? d.zoom : 0;
                if (this.cam.extraZoom = We(this.cam.extraZoom, n, Kt(3, e)), o) {
                    let u = 58 + this.cam.extraZoom * 320;
                    a = Math.cos(t.input.aim) * u, r = Math.sin(t.input.aim) * u
                } else t.moving && (a = t.vx * .12, r = t.vy * .12);
                this.cam.lx = We(this.cam.lx, a, Kt(o ? 3.2 : 2.2, e)), this.cam.ly = We(this.cam.ly, r, Kt(o ? 3.2 : 2.2, e));
                let l = t.x + this.cam.lx,
                    c = t.y + this.cam.ly;
                this.cam.x === 0 && this.cam.y === 0 && (this.cam.x = l, this.cam.y = c), this.cam.x = We(this.cam.x, l, Kt(5.5, e)), this.cam.y = We(this.cam.y, c, Kt(5.5, e)), this.cam.zoom = We(this.cam.zoom, this.baseZoom() / (1 + this.cam.extraZoom), Kt(4, e))
            }
            this.cam.trauma = Math.max(0, this.cam.trauma - e * 1.6), this.cam.kick = Math.max(0, this.cam.kick - e * 9), this.hurt = Math.max(0, this.hurt - e * 1.4), this.hitMarker = Math.max(0, this.hitMarker - e);
            for (let a of this.flashes) a.t += e;
            this.flashes = this.flashes.filter(a => a.t < a.max);
            for (let a of this.tracers) a.t += e;
            this.tracers = this.tracers.filter(a => a.t < a.max);
            for (let a of this.nums) a.t += e, a.y -= e * 28;
            this.nums = this.nums.filter(a => a.t < .8);
            for (let a of this.pings) a.t += e;
            this.pings = this.pings.filter(a => a.t < 8);
            for (let a of this.swings) a.t += e;
            this.swings = this.swings.filter(a => a.t < .18);
            for (let a of this.booms) a.t += e;
            this.booms = this.booms.filter(a => a.t < .5);
            for (let a of this.corpses) a.t += e;
            if (this.corpses = this.corpses.filter(a => a.t < 120), this.smokeT -= e, this.smokeT <= 0) {
                this.smokeT = this.quality === "low" ? .2 : .08;
                let a = this.particles;
                for (let r of this.world.map.lights) r.kind !== "lamp" && (Math.abs(r.x - this.cam.x) > 700 || Math.abs(r.y - this.cam.y) > 500 || (r.kind === "flare" ? a.spawn(3, r.x, r.y, (Math.random() - .5) * 20, -30, 3, 10, 13119530) : (a.spawn(9, r.x + (Math.random() - .5) * 10, r.y + (Math.random() - .5) * 8, (Math.random() - .5) * 10, -20, .5, 5), Math.random() < .3 && a.spawn(6, r.x, r.y, (Math.random() - .5) * 30, -40, 1.2, 1.2), Math.random() < .3 && a.spawn(3, r.x, r.y - 6, (Math.random() - .5) * 10, -25, 2.5, 6, 4867650))));
                for (let r of this.world.ground) r.kind !== "supply" || (r.landT ?? 0) > 0 || Math.abs(r.x - this.cam.x) > 900 || Math.abs(r.y - this.cam.y) > 700 || this.time % 90 < 75 && a.spawn(3, r.x + 14, r.y - 10, 10 + Math.random() * 20, -20 - Math.random() * 20, 4, 8, 13123626);
                for (let r of this.world.clouds) {
                    if (Math.abs(r.x - this.cam.x) > 800) continue;
                    let o = Math.random() * Q,
                        s = Math.random() * r.r;
                    a.spawn(8, r.x + Math.cos(o) * s, r.y + Math.sin(o) * s, 0, 0, 1.4, 10, dt("#8aa83a"))
                }
                if (this.world.weather === "rain" && this.quality !== "low")
                    for (let r = 0; r < 3; r++) {
                        let o = this.screenToWorld(Math.random() * this.cssW, Math.random() * this.cssH);
                        a.spawn(11, o.x, o.y, 0, 0, .35, 1)
                    }
            }
        }
        computeVis(e) {
            let t = this.quality === "high" ? 240 : this.quality === "medium" ? 170 : 110;
            this.vis.length < t * 2 && (this.vis = new Float32Array(t * 2));
            let a = 1050;
            for (let r = 0; r < t; r++) {
                let o = r / t * Q,
                    s = Math.cos(o),
                    d = Math.sin(o),
                    n = Math.min(a, Vt(this.world.map, e.x, e.y, s, d, a, Ie) + 10);
                this.vis[r * 2] = e.x + s * n, this.vis[r * 2 + 1] = e.y + d * n
            }
            this.visN = t
        }
        canSeeActor(e, t) {
            let a = this.meP;
            if (!a) return 1;
            let r = Math.hypot(e - a.x, t - a.y);
            if (r < 46) return 1;
            if (!Ji(this.world.map, a.x, a.y, e, t, Ie)) return 0;
            let o = this.world.light(),
                s = (this.world.weather === "fog" ? 560 : 1e3) * (.55 + .45 * o) + (a.light && this.hasLight(a) ? 200 : 0);
            return V((s - r) / 140, 0, 1)
        }
        hasLight(e) {
            let t = e.lo.equip[e.active];
            return !!(t && C(t.id).weapon && ge(t).light)
        }
        draw() {
            let e = this.c,
                t = this.world,
                a = this.meP,
                r = this.cam.zoom,
                o = 0,
                s = 0;
            if (this.cam.trauma > 0) {
                let g = this.cam.trauma * this.cam.trauma * 7;
                o = (Math.sin(this.time * 61) + Math.sin(this.time * 23)) * .5 * g, s = (Math.cos(this.time * 57) + Math.sin(this.time * 31)) * .5 * g
            }
            let d = this.cam.kick * 1.8,
                n = this.cam.x - Math.cos(this.cam.kickA) * d + o / r,
                l = this.cam.y - Math.sin(this.cam.kickA) * d + s / r,
                c = this.cssW / 2 / r,
                u = this.cssH / 2 / r,
                m = n - c,
                p = l - u,
                f = n + c,
                b = l + u;
            e.setTransform(1, 0, 0, 1, 0, 0), e.fillStyle = "#07070d", e.fillRect(0, 0, this.cv.width, this.cv.height);
            let x = r * this.rs;
            e.setTransform(x, 0, 0, x, (-n + c) * x, (-l + u) * x), e.imageSmoothingEnabled = !0;
            let k = Math.max(0, Math.floor(m / Z)),
                M = Math.min(Math.floor((Gt - 1) / Z), Math.floor(f / Z)),
                R = Math.max(0, Math.floor(p / Z)),
                w = Math.min(Math.floor((Ut - 1) / Z), Math.floor(b / Z));
            for (let g = R; g <= w; g++)
                for (let S = k; S <= M; S++) {
                    let T = this.chunks.get(S, g);
                    e.drawImage(T, S * Z, g * Z, Z + .6, Z + .6)
                }
            DZDrawSafeZone(this, e, m, p, f, b);
            DZDrawWorldDetails(this,e,m,p,f,b);
            if(this.buildPreview){const preview=this.buildPreview;e.save();e.fillStyle=preview.valid?"rgba(115,162,92,.28)":"rgba(185,66,54,.30)";e.strokeStyle=preview.valid?"#a2c781":"#db7366";e.lineWidth=2;for(const cell of preview.cells){e.fillRect(cell.tx*y+1,cell.ty*y+1,y-2,y-2);e.strokeRect(cell.tx*y+1,cell.ty*y+1,y-2,y-2);}const x=(preview.tx+.5)*y,yy=(preview.ty+.5)*y;e.beginPath();e.moveTo(x,yy);e.lineTo(x+Math.cos(preview.angle)*22,yy+Math.sin(preview.angle)*22);e.stroke();e.restore();}
            let P = t.map;
            for (let g of P.doors) {
                if(g.inactive)continue;
                let S = g.tx * y,
                    T = g.ty * y;
                S < m - y || S > f || T < p - y || T > b || this.drawDoor(e, g.tx, g.ty, g.vertical, g.open, !!g.locked, g.openT ?? (g.open ? 1 : 0))
            }
            for (let g of t.vehicles) {
                if (g.x < m - 100 || g.x > f + 100 || g.y < p - 100 || g.y > b + 100) continue;
                let S = yt(g.kind, g.w, g.h, g.variant);
                if (!S) continue;
                e.save(), e.globalAlpha=g.hp<=0?.55:1, e.translate(g.x, g.y), e.rotate(g.a), e.fillStyle = "rgba(0,0,0,0.38)", e.beginPath(), e.ellipse(5, 7, g.w * .46, g.h * .42, 0, 0, Q), e.fill(), e.save();e.rotate(Math.PI/2);e.drawImage(S, -g.w / 2, -g.h / 2, g.w, g.h);e.restore();
                DZVehicleDetail(e,g,this.time);
                if (g.driver) {
                    e.globalCompositeOperation = "screen";
                    let T = e.createLinearGradient(g.w * .2, 0, g.w * 1.6, 0);
                    T.addColorStop(0, "rgba(255,226,154,.18)"), T.addColorStop(1, "rgba(255,226,154,0)"), e.fillStyle = T, e.beginPath(), e.moveTo(g.w * .25, -g.h * .24), e.lineTo(g.w * 1.45, -g.h * .68), e.lineTo(g.w * 1.45, g.h * .68), e.lineTo(g.w * .25, g.h * .24), e.closePath(), e.fill(), e.globalCompositeOperation = "source-over"
                }
                e.restore()
            }
            for (let g of P.extracts) {
                if (!t.activeExtracts.has(g.id) || g.x < m - 200 || g.x > f + 200 || g.y < p - 200 || g.y > b + 200) continue;
                let S = .5 + Math.sin(this.time * 3) * .5,
                    A = !g.req || a && t.hasItem(a, g.req) ? te.acc : te.warn;
                e.save(), e.globalAlpha = .18 + S * .1, e.fillStyle = A, e.beginPath(), e.arc(g.x, g.y, g.r, 0, Q), e.fill(), e.globalAlpha = .85, e.strokeStyle = A, e.lineWidth = 2.5, e.setLineDash([10, 8]), e.lineDashOffset = -this.time * 20, e.beginPath(), e.arc(g.x, g.y, g.r, 0, Q), e.stroke(), e.setLineDash([]), e.restore()
            }
            for (let g = 0; g < P.containers.length; g++) {
                let S = P.containers[g];
                if (S.x > f + 20 || S.x + S.w < m - 20 || S.y > b + 20 || S.y + S.h < p - 20) continue;
                let T = t.cstate[g],
                    A = yt(S.kind, S.w, S.h, S.id % 4, !0);
                if (A && (S.blocks && (e.fillStyle = "rgba(0,0,0,0.25)", e.fillRect(S.x + 3, S.y + 4, S.w, S.h)), e.drawImage(A, S.x - 1, S.y - 1, A.width / ne, A.height / ne)), T.opened)(T.items?.length ?? 0) === 0 && A && (e.fillStyle = "rgba(10,10,8,0.32)", e.fillRect(S.x, S.y, S.w, S.h));
                else if (a) {
                    let _ = Math.hypot(S.x + S.w / 2 - a.x, S.y + S.h / 2 - a.y);
                    if (_ < 260) {
                        let H = (1 - _ / 260) * (.45 + .35 * Math.sin(this.time * 4 + g));
                        e.strokeStyle = S.rarityHint >= 2 ? `rgba(214,180,74,${H})` : `rgba(233,227,207,${H*.7})`, e.lineWidth = 1.5, e.strokeRect(S.x - 2, S.y - 2, S.w + 4, S.h + 4)
                    }
                }
            }
            for (let g of t.ground)
                if (!(g.x < m - 60 || g.x > f + 60 || g.y < p - 200 || g.y > b + 60))
                    if (g.kind === "supply") {
                        let S = g.landT ?? 0,
                            T = oo();
                        if (S > 0) {
                            let A = S * 30,
                                _ = 1 + A / 600;
                            e.fillStyle = `rgba(0,0,0,${.35-S*.01})`, e.beginPath(), e.ellipse(g.x + A * .2, g.y + A * .25, 22, 16, 0, 0, Q), e.fill(), e.save(), e.translate(g.x, g.y - A * .15), e.scale(_, _), e.drawImage(T, -24, -24, 48, 48), e.fillStyle = "rgba(200,190,170,0.85)", e.beginPath(), e.ellipse(0, -10, 34, 26, 0, 0, Q), e.fill(), e.strokeStyle = "rgba(80,70,60,0.8)", e.stroke(), e.restore()
                        } else e.drawImage(T, g.x - 24, g.y - 24, 48, 48)
                    } else if (g.kind === "corpse") e.save(), e.translate(g.x, g.y), e.rotate(.6), e.fillStyle = "rgba(90,8,6,0.7)", e.beginPath(), e.ellipse(0, 0, 22, 15, 0, 0, Q), e.fill(), lt(e, {
                r: 13,
                skin: "#c8a888",
                hair: "#2a2420",
                cloth: "#4c5a46",
                cloth2: "#4c5a46",
                trousers: "#2f3338",
                phase: .2,
                stride: 0,
                arms: "downed",
                blood: 3,
                pack: g.items.some(S => C(S.id).cat === "backpack") ? "#5a5f3a" : null
            }), e.restore();
            else if (g.kind === "stash") {
                let S = yt("crate", 30, 24, 1, !0);
                S && e.drawImage(S, g.x - 15, g.y - 12, S.width / ne, S.height / ne)
            } else g.items.length && (e.fillStyle = "rgba(0,0,0,0.3)", e.beginPath(), e.ellipse(g.x + 2, g.y + 3, 10, 7, 0, 0, Q), e.fill(), e.fillStyle = "#5a4a32", e.beginPath(), e.ellipse(g.x, g.y, 9, 7, .3, 0, Q), e.fill(), e.strokeStyle = "rgba(0,0,0,0.6)", e.stroke(), e.fillStyle = "#c8b070", e.fillRect(g.x - 2, g.y - 6, 4, 3), a && Math.hypot(g.x - a.x, g.y - a.y) < 200 && (e.strokeStyle = `rgba(200,255,46,${.4+.3*Math.sin(this.time*5)})`, e.beginPath(), e.arc(g.x, g.y, 13, 0, Q), e.stroke()));
            for (let g of this.corpses) {
                if (g.x < m - 60 || g.x > f + 60 || g.y < p - 60 || g.y > b + 60) continue;
                let S = Ii(g.type, g.v % 4);
                e.save(), e.globalAlpha = g.t > 100 ? Math.max(0, 1 - (g.t - 100) / 20) : 1, e.translate(g.x, g.y), e.rotate(g.a);
                let T = S.corpse.width / ne;
                e.drawImage(S.corpse, -T / 2, -T / 2, T, T), e.restore()
            }
            if (a && this.aimPreview && !a.dead) {
                let g = this.aimPreview;
                e.save(), e.translate(a.x, a.y), e.rotate(g.angle);
                let S = e.createLinearGradient(20, 0, g.range, 0);
                S.addColorStop(0, "rgba(233,227,207,0.16)"), S.addColorStop(1, "rgba(233,227,207,0)"), e.fillStyle = S;
                let T = g.spread * Math.PI / 180;
                e.beginPath(), e.moveTo(20, 0), e.lineTo(g.range, Math.tan(T) * g.range), e.lineTo(g.range, -Math.tan(T) * g.range), e.closePath(), e.fill(), e.restore()
            }
            e.fillStyle = "rgba(0,0,0,0.3)";
            for (let g of t.zombies) g.state === "dead" || g.x < m - 40 || g.x > f + 40 || g.y < p - 40 || g.y > b + 40 || this.canSeeActor(g.x, g.y) <= 0 || (e.beginPath(), e.ellipse(g.x + 3, g.y + 4, g.r * 1.05, g.r * .9, 0, 0, Q), e.fill());
            for (let g of t.players) g.extracted || (e.beginPath(), e.ellipse(g.x + 3, g.y + 4, 14, 12, 0, 0, Q), e.fill());
            for (let g of t.zombies) {
                if (g.state === "dead" || g.x < m - 40 || g.x > f + 40 || g.y < p - 40 || g.y > b + 40) continue;
                let S = this.canSeeActor(g.x, g.y);
                if (S <= 0) continue;
                let T = Ii(g.type, g.id % 4),
                    A = Math.hypot(g.vx, g.vy),
                    _ = Math.floor(g.animT * (1.2 + A / 30) % 8),
                    H = T.walk[_];
                g.lunge > 0 && (H = T.attack), g.hitFlash > 0 && (H = T.flash[_ >> 1]), e.save(), e.globalAlpha = S, e.translate(g.x, g.y), e.rotate(g.angle + (g.state === "stagger" ? Math.sin(this.time * 40) * .2 : 0)), g.lunge > 0 && e.translate((1 - g.lunge / .3) * 6, 0);
                let B = T.size / ne;
                e.drawImage(H, -B / 2, -B / 2, B, B), e.restore(), g.type === "brute" && S > 0 && (e.fillStyle = "rgba(0,0,0,0.6)", e.fillRect(g.x - 30, g.y - 46, 60, 6), e.fillStyle = te.red, e.fillRect(g.x - 29, g.y - 45, 58 * V(g.hp / g.maxHp, 0, 1), 4))
            }
            for (let g of t.players) {
                if (g.extracted || g.vehicle >= 0) continue;
                let S = this.looks.get(g.id) ?? {
                        body: "m",
                        skin: 1,
                        hair: 0,
                        outfit: "o_default",
                        wskin: null
                    },
                    T = Math.hypot(g.vx, g.vy);
                ao(e, {
                    x: g.x,
                    y: g.y,
                    angle: g.angle,
                    phase: g.animT * (T / 55) % 1,
                    stride: V(T / 130, 0, 1),
                    look: S,
                    lo: g.lo,
                    active: g.active,
                    meleeT: g.meleeT,
                    recoil: g.recoilKick,
                    downed: g.downed,
                    dead: g.dead,
                    using: g.useT,
                    crouch: g.crouch,
                    colourTag: g.id === this.me ? void 0 : te.cyan
                }), g.downed && (e.strokeStyle = `rgba(217,68,58,${.5+.4*Math.sin(this.time*6)})`, e.lineWidth = 2.5, e.beginPath(), e.arc(g.x, g.y, 22, 0, Q), e.stroke());
                let A = g.lo.equip[g.active];
                if (A && A.att?.tac === "att_laser" && !g.dead && !g.downed) {
                    let _ = g.angle,
                        H = Vt(P, g.x, g.y, Math.cos(_), Math.sin(_), 900, Ie);
                    e.strokeStyle = "rgba(255,40,30,0.55)", e.lineWidth = 1, e.beginPath(), e.moveTo(g.x + Math.cos(_) * 26, g.y + Math.sin(_) * 26), e.lineTo(g.x + Math.cos(_) * H, g.y + Math.sin(_) * H), e.stroke(), e.fillStyle = "rgba(255,60,40,0.9)", e.beginPath(), e.arc(g.x + Math.cos(_) * H, g.y + Math.sin(_) * H, 2, 0, Q), e.fill()
                }
            }
            for (let g of this.swings) {
                let S = g.t / .18;
                e.strokeStyle = `rgba(240,234,216,${.5*(1-S)})`, e.lineWidth = 3, e.beginPath(), e.arc(g.x, g.y, 40, g.a - .9 + S * .8, g.a + .2 + S * .8), e.stroke()
            }
            if (e.lineCap = "round", !this.netMode)
                for (let g of t.bullets) {
                    let S = Math.min(g.traveled + 10, 46),
                        T = e.createLinearGradient(g.x - g.dx * S, g.y - g.dy * S, g.x, g.y);
                    T.addColorStop(0, "rgba(255,220,140,0)"), T.addColorStop(1, "rgba(255,245,210,0.95)"), e.strokeStyle = T, e.lineWidth = 1.6, e.beginPath(), e.moveTo(g.x - g.dx * S, g.y - g.dy * S), e.lineTo(g.x, g.y), e.stroke()
                }
            for (let g of this.tracers) {
                let S = g.t / g.max,
                    T = We(g.x1, g.x2, Math.min(1, S * 1.6)),
                    A = We(g.y1, g.y2, Math.min(1, S * 1.6)),
                    _ = We(g.x1, g.x2, Math.max(0, S * 1.6 - .4)),
                    H = We(g.y1, g.y2, Math.max(0, S * 1.6 - .4));
                e.strokeStyle = "rgba(255,240,200,0.8)", e.lineWidth = 1.4, e.beginPath(), e.moveTo(_, H), e.lineTo(T, A), e.stroke()
            }
            for (let g of this.flashes) {
                let S = 1 - g.t / g.max;
                e.save(), e.globalAlpha=g.hp<=0?.55:1, e.translate(g.x, g.y), e.rotate(g.a), e.globalCompositeOperation = "lighter";
                let T = (g.sup ? 8 : 22) * S,
                    A = e.createRadialGradient(0, 0, 1, 0, 0, T);
                A.addColorStop(0, `rgba(255,250,220,${S})`), A.addColorStop(.4, `rgba(255,190,80,${.8*S})`), A.addColorStop(1, "rgba(255,120,30,0)"), e.fillStyle = A, e.beginPath(), e.moveTo(-2, 0), e.lineTo(T * .4, -T * .35), e.lineTo(T * 1.4, 0), e.lineTo(T * .4, T * .35), e.closePath(), e.fill(), e.beginPath(), e.arc(0, 0, T * .5, 0, Q), e.fill(), e.restore()
            }
            for (let g of this.booms) {
                let S = g.t / .5;
                e.save(), e.globalCompositeOperation = "lighter";
                let T = e.createRadialGradient(g.x, g.y, 2, g.x, g.y, g.r * (.4 + S * .8));
                T.addColorStop(0, `rgba(255,240,200,${1-S})`), T.addColorStop(.5, `rgba(255,140,40,${.7*(1-S)})`), T.addColorStop(1, "rgba(255,60,20,0)"), e.fillStyle = T, e.beginPath(), e.arc(g.x, g.y, g.r * (.4 + S * .8), 0, Q), e.fill(), e.restore()
            }
            this.particles.draw(e, m - 20, p - 20, f + 20, b + 20);
            for (let g of P.props) {
                if (g.kind !== "tower" && g.kind !== "silo" || g.x > f + 40 || g.x + g.w < m - 40 || g.y > b + 40 || g.y + g.h < p - 40) continue;
                let S = yt(g.kind, g.w, g.h, g.v);
                S && (e.fillStyle = "rgba(0,0,0,0.3)", e.fillRect(g.x + 12, g.y + 16, g.w, g.h), e.drawImage(S, g.x - 1, g.y - 1, S.width / ne, S.height / ne))
            }
            this.drawRoofs(e, m, p, f, b, a), this.drawCanopies(e, m, p, f, b, a), e.textAlign = "center", e.textBaseline = "middle";
            for (let g of this.nums) e.globalAlpha = 1 - g.t / .8, e.font = `700 ${11/Math.max(.8,r)+3}px 'Chakra Petch', 'Arial Narrow', sans-serif`, e.fillStyle = "rgba(0,0,0,0.6)", e.fillText(g.v, g.x + 1, g.y + 1), e.fillStyle = g.col, e.fillText(g.v, g.x, g.y);
            if (e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), a && this.drawLighting(e, a, n, l, r), e.setTransform(x, 0, 0, x, (-n + c) * x, (-l + u) * x), this.interactTarget) {
                let g = this.interactTarget,
                    S = 6 + Math.sin(this.time * 6) * 1.5;
                e.strokeStyle = te.acc, e.lineWidth = 2 / r;
                let T = [
                    [g.x - 4, g.y - 4, 1, 1],
                    [g.x + g.w + 4, g.y - 4, -1, 1],
                    [g.x - 4, g.y + g.h + 4, 1, -1],
                    [g.x + g.w + 4, g.y + g.h + 4, -1, -1]
                ];
                e.beginPath();
                for (let [A, _, H, B] of T) e.moveTo(A, _ + B * S), e.lineTo(A, _), e.lineTo(A + H * S, _);
                e.stroke()
            }
            if (this.showNames)
                for (let g of t.players) g.id === this.me || g.extracted || (e.font = `700 ${12/r}px 'Chakra Petch', 'Arial Narrow', sans-serif`, e.fillStyle = g.downed ? te.red : te.cyan, e.fillText(g.name + (g.downed ? " \u2014 DOWN" : ""), g.x, g.y - 26));
            for (let g of this.pings) {
                let S = Math.min(1, g.t * 3),
                    T = g.t > 7 ? 8 - g.t : 1;
                e.globalAlpha = T, e.strokeStyle = g.kind === "enemy" || g.kind === "zombie" ? te.red : g.kind === "leave" ? te.green : te.acc, e.lineWidth = 2.5 / r, e.beginPath(), e.arc(g.x, g.y, 10 + (1 - S) * 30, 0, Q), e.stroke(), e.beginPath(), e.moveTo(g.x, g.y - 30), e.lineTo(g.x, g.y - 12), e.stroke(), e.globalAlpha = 1
            }
            if (this.waypoint) {
                let g = this.waypoint,
                    S = .6 + .4 * Math.sin(this.time * 4);
                e.strokeStyle = `rgba(230,255,140,${S})`, e.lineWidth = 3 / r, e.beginPath(), e.moveTo(g.x, g.y - 16), e.lineTo(g.x + 12, g.y), e.lineTo(g.x, g.y + 16), e.lineTo(g.x - 12, g.y), e.closePath(), e.stroke()
            }
            e.setTransform(1, 0, 0, 1, 0, 0), this.drawScreenFx(e, a), this.waypoint && a && this.edgeArrow(e, this.waypoint.x, this.waypoint.y, te.accHi);
            for (let g of this.pings) g.t < 6 && this.edgeArrow(e, g.x, g.y, g.kind === "enemy" || g.kind === "zombie" ? te.red : te.acc)
        }
        edgeArrow(e, t, a, r) {
            let o = this.worldToScreen(t, a),
                s = 34;
            if (o.x > s && o.x < this.cssW - s && o.y > s && o.y < this.cssH - s) return;
            let d = this.cssW / 2,
                n = this.cssH / 2,
                l = Math.atan2(o.y - n, o.x - d),
                c = V(d + Math.cos(l) * 2e3, s, this.cssW - s),
                u = V(n + Math.sin(l) * 2e3, s, this.cssH - s);
            e.save(), e.translate(c * this.rs, u * this.rs), e.rotate(l), e.fillStyle = r, e.strokeStyle = "rgba(0,0,0,0.7)", e.lineWidth = 2;
            let m = this.rs;
            e.beginPath(), e.moveTo(12 * m, 0), e.lineTo(-6 * m, -9 * m), e.lineTo(-2 * m, 0), e.lineTo(-6 * m, 9 * m), e.closePath(), e.stroke(), e.fill(), e.restore()
        }
        drawDoor(e, t, a, r, o, s, d = o ? 1 : 0) {
            let n = t * y,
                l = a * y,
                c = s ? "#5a626a" : "#7a5636",
                u = V(d, 0, 1);
            e.save(), e.fillStyle = "rgba(0,0,0,0.45)", r ? e.fillRect(n + 11, l - 1, 10, y + 2) : e.fillRect(n - 1, l + 11, y + 2, 10);
            let m = r ? n + 16 : n + 2,
                p = r ? l + 2 : l + 16;
            e.translate(m, p);
            let f = r ? Math.PI / 2 * (1-u) : Math.PI / 2 * u;
            e.rotate(f), e.fillStyle = "rgba(0,0,0,0.5)", e.fillRect(-1, -5, y - 2, 10), e.fillStyle = c, e.fillRect(0, -4, y - 4, 8), e.fillStyle = $(c, .2), e.fillRect(0, -4, 2, 8), e.fillStyle = s ? te.warn : te.gold, e.fillRect(y - 10, -2, 4, 4), e.restore()
        }
        roofCanvas(e) {
            let t = this.roofs.get(e);
            if (t) return t.cv;
            let a = this.world.map.buildings[e],
                r = a.w * y + 8,
                o = a.h * y + 8,
                s = this.quality === "low" ? .75 : 1.2,
                d = pe(r * s, o * s),
                n = d.getContext("2d");
            n.scale(s, s);
            let l = a.roof,
                c = a.w >= a.h;
            if (a.roofStyle === "pitched") {
                if (n.fillStyle = "rgba(0,0,0,0.5)", n.fillRect(0, 0, r, o), c) {
                    let u = n.createLinearGradient(0, 0, 0, o / 2);
                    u.addColorStop(0, $(l, .18)), u.addColorStop(1, $(l, .05)), n.fillStyle = u, n.fillRect(1, 1, r - 2, o / 2 - 1);
                    let m = n.createLinearGradient(0, o / 2, 0, o);
                    m.addColorStop(0, $(l, -.25)), m.addColorStop(1, $(l, -.4)), n.fillStyle = m, n.fillRect(1, o / 2, r - 2, o / 2 - 1), n.strokeStyle = "rgba(0,0,0,0.25)", n.lineWidth = 1;
                    for (let p = 7; p < o; p += 7) Math.abs(p - o / 2) < 3 || (n.beginPath(), n.moveTo(1, p), n.lineTo(r - 1, p), n.stroke());
                    for (let p = 0; p < o; p += 7)
                        for (let f = p / 7 % 2 ? 6 : 0; f < r; f += 12) n.beginPath(), n.moveTo(f, p), n.lineTo(f, p + 7), n.stroke();
                    n.fillStyle = $(l, -.5), n.fillRect(1, o / 2 - 2, r - 2, 4), n.fillStyle = "#5a3a2e", n.fillRect(r * .72, o * .18, 14, 14), n.fillStyle = "#2a1a14", n.fillRect(r * .72 + 3, o * .18 + 3, 8, 8)
                } else {
                    let u = n.createLinearGradient(0, 0, r / 2, 0);
                    u.addColorStop(0, $(l, .18)), u.addColorStop(1, $(l, .05)), n.fillStyle = u, n.fillRect(1, 1, r / 2 - 1, o - 2);
                    let m = n.createLinearGradient(r / 2, 0, r, 0);
                    m.addColorStop(0, $(l, -.25)), m.addColorStop(1, $(l, -.4)), n.fillStyle = m, n.fillRect(r / 2, 1, r / 2 - 1, o - 2), n.strokeStyle = "rgba(0,0,0,0.25)";
                    for (let p = 7; p < r; p += 7) n.beginPath(), n.moveTo(p, 1), n.lineTo(p, o - 1), n.stroke();
                    n.fillStyle = $(l, -.5), n.fillRect(r / 2 - 2, 1, 4, o - 2)
                }
                for (let u = 0; u < 8; u++) n.fillStyle = u % 3 ? "rgba(70,90,40,0.25)" : "rgba(0,0,0,0.2)", n.beginPath(), n.arc((u * 37 + e * 13) % r + 4, (u * 53 + e * 7) % o + 4, 4 + u % 4 * 3, 0, Q), n.fill()
            } else if (a.roofStyle === "flat") {
                n.fillStyle = "rgba(0,0,0,0.55)", n.fillRect(0, 0, r, o), n.fillStyle = l, n.fillRect(2, 2, r - 4, o - 4), n.fillStyle = $(l, -.18), n.fillRect(6, 6, r - 12, o - 12);
                for (let u = 0; u < 10; u++) n.fillStyle = "rgba(0,0,0,0.12)", n.beginPath(), n.ellipse((u * 41 + e * 11) % (r - 20) + 10, (u * 29 + e * 17) % (o - 20) + 10, 8 + u % 3 * 5, 5 + u % 2 * 4, u, 0, Q), n.fill();
                for (let u = 0; u < Math.max(1, Math.floor(a.w * a.h / 40)); u++) {
                    let m = 14 + (u * 61 + e * 23) % Math.max(1, r - 44),
                        p = 14 + (u * 43 + e * 31) % Math.max(1, o - 40);
                    n.fillStyle = "rgba(0,0,0,0.5)", n.fillRect(m + 3, p + 4, 22, 16), n.fillStyle = "#8a8e92", n.fillRect(m, p, 22, 16), n.strokeStyle = "rgba(0,0,0,0.35)", n.beginPath(), n.arc(m + 11, p + 8, 6, 0, Q), n.stroke()
                }
            } else if (a.roofStyle === "metal") {
                n.fillStyle = "rgba(0,0,0,0.5)", n.fillRect(0, 0, r, o), n.fillStyle = l, n.fillRect(1, 1, r - 2, o - 2);
                for (let u = 2; u < r; u += 6) n.fillStyle = "rgba(255,255,255,0.07)", n.fillRect(u, 1, 2, o - 2), n.fillStyle = "rgba(0,0,0,0.12)", n.fillRect(u + 3, 1, 1.5, o - 2);
                for (let u = 0; u < 6; u++) n.fillStyle = "rgba(140,70,30,0.22)", n.beginPath(), n.ellipse((u * 71 + e * 3) % r + 5, u * 37 % o + 5, 14, 8, 0, 0, Q), n.fill();
                n.fillStyle = "rgba(150,200,220,0.35)";
                for (let u = 40; u < r - 30; u += 90) n.fillRect(u, o / 2 - 18, 28, 36)
            } else if (a.roofStyle === "glass") {
                n.fillStyle = "rgba(160,210,200,0.25)", n.fillRect(1, 1, r - 2, o - 2), n.strokeStyle = "rgba(80,100,90,0.7)", n.lineWidth = 2;
                for (let u = 0; u <= r; u += 32) n.beginPath(), n.moveTo(u, 0), n.lineTo(u, o), n.stroke();
                n.strokeRect(1, 1, r - 2, o - 2), n.fillStyle = "rgba(255,255,255,0.15)", n.fillRect(6, 4, r * .3, 4)
            } else {
                n.fillStyle = "rgba(0,0,0,0.45)", n.fillRect(0, 0, r, o);
                let u = n.createLinearGradient(0, 0, 0, o);
                u.addColorStop(0, $(l, .2)), u.addColorStop(.5, l), u.addColorStop(.51, $(l, -.2)), u.addColorStop(1, $(l, -.35)), n.fillStyle = u, n.fillRect(1, 1, r - 2, o - 2), n.strokeStyle = "rgba(0,0,0,0.3)", n.beginPath(), n.moveTo(0, o / 2), n.lineTo(r, o / 2), n.stroke()
            }
            return this.roofs.set(e, {
                cv: d,
                alpha: 1
            }), d
        }
        drawRoofs(e, t, a, r, o, s) {
            let d = this.world.map,
                n = s ? d.roofOf[Y(V(Math.floor(s.x / y), 0, U - 1), V(Math.floor(s.y / y), 0, X - 1))] : -1;
            for (let l of d.buildings) {
                let c = l.x * y - 4,
                    u = l.y * y - 4,
                    m = l.w * y + 8,
                    p = l.h * y + 8;
                if (c > r || c + m < t || u > o + 20 || u + p < a) continue;
                let f = this.roofCanvas(l.id),
                    b = this.roofs.get(l.id),
                    x = l.id === n ? 0 : 1;
                b.alpha = We(b.alpha, x, .18), !(b.alpha < .02) && (e.globalAlpha = b.alpha, l.roofStyle !== "glass" && (e.fillStyle = "rgba(0,0,0,0.3)", e.fillRect(c + 10, u + 12, m, p)), e.drawImage(f, c, u, m, p), e.globalAlpha = 1)
            }
        }
        drawCanopies(e, t, a, r, o, s) {
            let d = this.world.map,
                n = this.world.weather === "rain" ? 2.2 : 1;
            for (let l of d.trees) {
                if (l.cut || l.x + l.r < t || l.x - l.r > r || l.y + l.r < a || l.y - l.r > o) continue;
                let c = l.x < 72 * y && l.y < 52 * y,
                    u = oa(l.v, c),
                    m = 1;
                if (s) {
                    let x = Math.hypot(s.x - l.x, s.y - l.y);
                    x < l.r * .95 && (m = .35 + x / (l.r * .95) * .4)
                }
                let p = l.r / 60,
                    f = Math.sin(this.time * .8 + l.x * .01) * 1.5 * n;
                e.globalAlpha = m;
                let b = u.width / ne * p;
                e.drawImage(u, l.x - b / 2 + f, l.y - b / 2, b, b)
            }
            e.globalAlpha = 1
        }
        drawLighting(e, t, a, r, o) {
            let s = this.world,
                d = this.fog.width,
                n = this.fog.height,
                l = d / this.cssW,
                c = (w, P) => [((w - a) * o + this.cssW / 2) * l, ((P - r) * o + this.cssH / 2) * l],
                u = s.light(),
                m = (1 - u) * .9;
            if (s.weather === "overcast" && (m += .08 * u), s.weather === "rain" && (m += .16 * u), s.weather === "fog" && (m += .06 * u), m = V(m, 0, .94), m > .02) {
                let w = this.dark.getContext("2d");
                w.globalCompositeOperation = "source-over", w.clearRect(0, 0, d, n);
                let P = u < .5;
                w.fillStyle = P ? `rgba(6,8,18,${m})` : `rgba(18,16,22,${m})`, w.fillRect(0, 0, d, n), w.globalCompositeOperation = "destination-out";
                let g = (T, A, _, H) => {
                    let [B, se] = c(T, A), _e = _ * o * l;
                    if (B < -_e || se < -_e || B > d + _e || se > n + _e) return;
                    let $t = w.createRadialGradient(B, se, 0, B, se, _e);
                    $t.addColorStop(0, `rgba(0,0,0,${H})`), $t.addColorStop(1, "rgba(0,0,0,0)"), w.fillStyle = $t, w.fillRect(B - _e, se - _e, _e * 2, _e * 2)
                };
                for (let T of s.players)
                    if (!(T.extracted || T.dead) && (g(T.x, T.y, T.id === this.me ? 105 : 70, .6), T.light && this.hasLight(T))) {
                        let [A, _] = c(T.x, T.y), H = 380 * o * l, B = w.createRadialGradient(A, _, 4, A, _, H);
                        B.addColorStop(0, "rgba(0,0,0,0.95)"), B.addColorStop(.7, "rgba(0,0,0,0.75)"), B.addColorStop(1, "rgba(0,0,0,0)"), w.fillStyle = B;
                        let se = Vt(s.map, T.x, T.y, Math.cos(T.angle), Math.sin(T.angle), 380, Ie),
                            _e = Math.max(60, se) * o * l;
                        w.beginPath(), w.moveTo(A, _), w.arc(A, _, Math.min(H, _e + 10 * o * l), T.angle - .42, T.angle + .42), w.closePath(), w.fill()
                    } for (let T of s.map.lights) g(T.x, T.y, T.r * (1 + Math.sin(this.time * 9 + T.x) * .06 * T.flicker), .85);
                for (let T of this.flashes) g(T.x, T.y, T.sup ? 60 : 190, .8 * (1 - T.t / T.max));
                for (let T of this.booms) g(T.x, T.y, T.r * 2.4, 1 - T.t / .5);
                for (let T of s.map.extracts) s.activeExtracts.has(T.id) && g(T.x, T.y, T.r * 1.2, .35);
                w.globalCompositeOperation = "source-over", e.drawImage(this.dark, 0, 0, this.cv.width, this.cv.height);
                let S = (s.clock % 24 + 24) % 24;
                (S > 4.5 && S < 7.5 || S > 17.5 && S < 21) && (e.fillStyle = S < 12 ? "rgba(255,170,90,0.07)" : "rgba(255,120,70,0.08)", e.fillRect(0, 0, this.cv.width, this.cv.height))
            }
            this.computeVis(t);
            let p = this.fog.getContext("2d");
            p.globalCompositeOperation = "source-over", p.clearRect(0, 0, d, n);
            let f = .58 + (1 - u) * .3;
            p.fillStyle = `rgba(10,12,10,${f})`, p.fillRect(0, 0, d, n), p.globalCompositeOperation = "destination-out";
            let [b, x] = c(t.x, t.y), k = (s.weather === "fog" ? 560 : 1e3) * (.55 + .45 * u) + (t.light && this.hasLight(t) ? 200 : 0), M = p.createRadialGradient(b, x, k * .62 * o * l, b, x, k * o * l);
            M.addColorStop(0, "rgba(0,0,0,1)"), M.addColorStop(1, "rgba(0,0,0,0)"), p.fillStyle = M, p.beginPath();
            for (let w = 0; w < this.visN; w++) {
                let [P, g] = c(this.vis[w * 2], this.vis[w * 2 + 1]);
                w === 0 ? p.moveTo(P, g) : p.lineTo(P, g)
            }
            p.closePath(), p.fill();
            let R = p.createRadialGradient(b, x, 0, b, x, 50 * o * l);
            R.addColorStop(0, "rgba(0,0,0,1)"), R.addColorStop(1, "rgba(0,0,0,0)"), p.fillStyle = R, p.fillRect(b - 60 * o * l, x - 60 * o * l, 120 * o * l, 120 * o * l), p.globalCompositeOperation = "source-over", e.drawImage(this.fog, 0, 0, this.cv.width, this.cv.height)
        }
        drawScreenFx(e, t) {
            let a = this.cv.width,
                r = this.cv.height,
                o = this.world;
            if (o.weather === "rain") {
                e.strokeStyle = "rgba(170,190,210,0.28)", e.lineWidth = 1 * this.rs, e.beginPath();
                let n = this.quality === "low" ? 60 : this.quality === "medium" ? 100 : 160;
                for (let l = 0; l < n; l++) {
                    let c = this.rain[l];
                    c.y += .045 * c.s, c.x += .008 * c.s, c.y > 1 && (c.y -= 1, c.x = Math.random()), c.x > 1 && (c.x -= 1);
                    let u = c.x * a,
                        m = c.y * r;
                    e.moveTo(u, m), e.lineTo(u + 4 * this.rs, m + 18 * this.rs * c.s)
                }
                e.stroke(), e.fillStyle = "rgba(30,40,55,0.12)", e.fillRect(0, 0, a, r)
            }
            if (o.weather === "fog")
                for (let n of this.fogBlobs) {
                    n.x += n.v * .016, n.x > 1.3 && (n.x = -.3);
                    let l = e.createRadialGradient(n.x * a, n.y * r, 0, n.x * a, n.y * r, n.r * a);
                    l.addColorStop(0, "rgba(170,175,170,0.16)"), l.addColorStop(1, "rgba(170,175,170,0)"), e.fillStyle = l, e.fillRect(0, 0, a, r)
                }
            if (!this.vignette) {
                let n = pe(a, r),
                    l = n.getContext("2d"),
                    c = l.createRadialGradient(a / 2, r / 2, Math.min(a, r) * .35, a / 2, r / 2, Math.max(a, r) * .72);
                c.addColorStop(0, "rgba(0,0,0,0)"), c.addColorStop(1, "rgba(0,0,0,0.55)"), l.fillStyle = c, l.fillRect(0, 0, a, r), this.vignette = n
            }
            if (e.drawImage(this.vignette, 0, 0), !t) return;
            let s = t.hp < 30 && !t.dead ? (.5 + .5 * Math.sin(this.time * 5)) * (1 - t.hp / 30) : 0,
                d = Math.max(this.hurt * .7, s * .55);
            if (d > .01) {
                let n = e.createRadialGradient(a / 2, r / 2, Math.min(a, r) * .25, a / 2, r / 2, Math.max(a, r) * .65);
                n.addColorStop(0, "rgba(120,0,0,0)"), n.addColorStop(1, `rgba(150,10,6,${d})`), e.fillStyle = n, e.fillRect(0, 0, a, r)
            }
            if (t.infection > 40 && (e.fillStyle = `rgba(90,130,30,${(t.infection-40)/60*.14})`, e.fillRect(0, 0, a, r)), this.hitMarker > 0) {
                let n = this.worldToScreen(t.x + Math.cos(t.angle) * 90, t.y + Math.sin(t.angle) * 90),
                    l = 7 * this.rs;
                e.strokeStyle = this.hitKill ? `rgba(232,80,60,${this.hitMarker*5})` : `rgba(240,234,216,${this.hitMarker*5})`, e.lineWidth = 2 * this.rs;
                let c = n.x * this.rs,
                    u = n.y * this.rs;
                e.beginPath(), e.moveTo(c - l, u - l), e.lineTo(c - l / 3, u - l / 3), e.moveTo(c + l, u - l), e.lineTo(c + l / 3, u - l / 3), e.moveTo(c - l, u + l), e.lineTo(c - l / 3, u + l / 3), e.moveTo(c + l, u + l), e.lineTo(c + l / 3, u + l / 3), e.stroke()
            }
        }
    };

    function mo(i) {
        let e = i.lo.equip[i.active];
        if (!e || !C(e.id).weapon) return null;
        let t = ge(e),
            a = t.spread + i.bloom;
        return i.moving && (a *= 1.5), i.crouch && (a *= .7), {
            spread: Math.max(.6, a),
            range: Math.min(t.range, 700)
        }
    }
    var da = class {
        constructor(e, t) {
            v(this, "root");
            v(this, "h");
            v(this, "move", {
                x: 0,
                y: 0
            });
            v(this, "aim", null);
            v(this, "aimMag", 0);
            v(this, "firing", !1);
            v(this, "fireBtn", !1);
            v(this, "sprint", !1);
            v(this, "crouch", !1);
            v(this, "fireOnAim", !0);
            v(this, "scale", 1);
            v(this, "hapticsOn", !0);
            v(this, "enabled", !0);
            v(this, "left");
            v(this, "right");
            v(this, "keys", new Set);
            v(this, "mouse", {
                x: 0,
                y: 0,
                down: !1,
                active: !1
            });
            v(this, "els", {});
            v(this, "interactBtn");
            v(this, "playerScreen", () => ({
                x: W.W / 2,
                y: W.H / 2
            }));
            v(this, "lastFireHaptic", 0);
            v(this, "zone");
            v(this, "onKey", e => {
                if (!this.enabled) return;
                let t = e.key.toLowerCase();
                e.target instanceof HTMLInputElement || (this.keys.add(t), !e.repeat && (t === "r" ? this.h.reload() : t === "q" ? this.h.swap() : t === "e" || t === "f" ? this.h.interact() : t === "tab" || t === "i" ? (e.preventDefault(), this.h.inventory()) : t === "h" ? this.h.heal() : t === "v" ? this.h.melee() : t === "c" ? (this.crouch = !this.crouch, this.syncToggles()) : t === "l" ? this.h.light() : t === "m" ? this.h.map() : t === "b" ? this.h.mode() : t === "g" ? this.h.ping() : t === "escape" ? this.h.pause() : t >= "1" && t <= "4" && this.h.quick(Number(t) - 1)))
            });
            v(this, "onKeyUp", e => {
                this.keys.delete(e.key.toLowerCase())
            });
            v(this, "onBlur", () => this.reset());
            this.root = e, this.h = t;
            let a = o => {
                let s = h("div", {
                        class: "knob"
                    }),
                    d = h("div", {
                        class: "stick " + o
                    }, s);
                return e.appendChild(d), {
                    id: -1,
                    ox: 0,
                    oy: 0,
                    x: 0,
                    y: 0,
                    el: d,
                    knob: s,
                    active: !1
                }
            };
            this.zone = h("div", {
                class: "ctl",
                style: "position:absolute;inset:0;opacity:1",
                "aria-hidden": "true"
            }), e.appendChild(this.zone), this.left = a("move idle"), this.right = a("aim");
            let r = (o, s, d, n, l, c = !1) => {
                let u = h("button", {
                    class: "cbtn ctl " + n,
                    type: "button",
                    "aria-label": d
                }, E(s), d ? h("span", null, d) : null);
                u.dataset.action=o;u.setAttribute("aria-label",d||(o==="fire"?"Fire":"Inventory"));
                u.addEventListener("pointerdown", p => {
                    p.preventDefault(), p.stopPropagation(), u.classList.add("pressed");
                    try {
                        u.setPointerCapture(p.pointerId)
                    } catch {}
                    Xe(8, this.hapticsOn), c ? this.fireBtn = !0 : l()
                });
                let m = p => {
                    p.stopPropagation(), u.classList.remove("pressed"), c && (this.fireBtn = !1)
                };
                return u.addEventListener("click", p => { if (p.detail === 0 && this.enabled) { c ? (this.fireBtn = true, setTimeout(() => this.fireBtn = false, 120)) : l(); } }), u.addEventListener("pointerup", m), u.addEventListener("pointercancel", m), u.addEventListener("lostpointercapture", m), e.appendChild(u), this.els[o] = u, u
            };
            r("fire", "target", "", "fire", () => {}, !0), r("reload", "reload", "Reload", "", () => this.h.reload()), r("swap", "swap", "Swap", "small", () => this.h.swap()), r("melee", "knife", "Melee", "small", () => this.h.melee()), r("light", "flashlight", "Light", "small", () => this.h.light()), r("heal", "medkit", "Heal", "small", () => this.h.heal()), r("sprint", "run", "Sprint", "small", () => {
                this.sprint = !this.sprint, this.sprint && (this.crouch = !1), this.syncToggles()
            }), r("crouch", "crouch", "Crouch", "small", () => {
                this.crouch = !this.crouch, this.crouch && (this.sprint = !1), this.syncToggles()
            }), r("bag", "pack", "", "small", () => this.h.inventory()), r("ping", "ping", "Ping", "small hidden", () => this.h.ping()), this.interactBtn = h("button", {
                class: "cbtn ctl interact hidden",
                type: "button"
            }), this.interactBtn.addEventListener("pointerdown", o => {
                o.preventDefault(), o.stopPropagation(), Xe(10, this.hapticsOn), this.h.interact()
            }), e.appendChild(this.interactBtn), this.zone.addEventListener("pointerdown", o => this.down(o)), this.zone.addEventListener("pointermove", o => this.moveEv(o)), this.zone.addEventListener("pointerup", o => this.up(o)), this.zone.addEventListener("pointercancel", o => this.up(o)), this.zone.addEventListener("lostpointercapture", o => this.up(o)), window.addEventListener("keydown", this.onKey), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("blur", this.onBlur), document.addEventListener("visibilitychange", this.onBlur), this.layout()
        }
        destroy() {
            window.removeEventListener("keydown", this.onKey), window.removeEventListener("keyup", this.onKeyUp), window.removeEventListener("blur", this.onBlur), document.removeEventListener("visibilitychange", this.onBlur), this.reset()
        }
        syncToggles() {
            this.els.sprint?.classList.toggle("on", this.sprint), this.els.crouch?.classList.toggle("on", this.crouch)
        }
        setLight(e, t) {
            this.els.light?.classList.toggle("on", e), this.els.light?.classList.toggle("hidden", !t)
        }
        setPingVisible(e) {
            this.els.ping?.classList.toggle("hidden", !e)
        }
        highlight(e) {
            for (let [t, a] of Object.entries(this.els)) a.classList.toggle("pulse", t === e);
            this.interactBtn.classList.toggle("pulse", e === "interact")
        }
        setInteract(e, t = "hand") {
            const btn = this.interactBtn;
            btn.classList.remove("hidden");
            const visible = !!e;
            if (visible && btn.dataset.label !== e) {
                btn.dataset.label = e; btn.replaceChildren(E(t), document.createTextNode(e));
                btn.setAttribute("aria-label", e);
            }
            btn.classList.toggle("prompt-visible",visible);
            btn.setAttribute("aria-hidden",String(!visible)); btn.disabled = !visible;
        }
        layout() {
            const width = W.W, height = W.H, gap = 8;
            const size = V(44 * this.scale, 44, Math.min(56, (height - ot.t - ot.b - 106) / 5));
            const fire = V(70 * this.scale, 64, 84);
            const radius = V(52 * this.scale, 46, Math.min(62, (height - ot.t - ot.b) * .16));
            const left = ot.l + 12, right = width - ot.r - 12, bottom = height - ot.b - 12;
            this.effectiveRadius = radius;
            this.root.style.setProperty("--cs", String(radius / 62));
            this.root.style.setProperty("--control-size", size + "px");
            this.root.style.setProperty("--fire-size", fire + "px");
            this.root.style.setProperty("--stick-radius", radius + "px");
            const place = (key,x,y) => {
                const el = key === "interact" ? this.interactBtn : this.els[key];
                if (!el) return;
                el.style.left = x + "px"; el.style.top = y + "px";
                el.style.transform = key === "interact" ? "translate(-100%,-50%)" : "translate(-50%,-50%)";
            };
            const fx = right - fire/2, fy = bottom - fire/2;
            const ax = right - fire - gap - radius, ay = bottom - radius;
            const rowY = bottom - Math.max(fire + gap + size, radius * 2) - gap - size/2;
            this.left.ox = left + radius + 8; this.left.oy = bottom - radius - 8;
            this.right.ox = ax; this.right.oy = ay;
            for (const stick of [this.left,this.right]) {
                stick.el.style.left = stick.ox + "px"; stick.el.style.top = stick.oy + "px";
            }
            place("fire",fx,fy); place("reload",fx,bottom-fire-gap-size/2);
            ["melee","swap","heal","light"].forEach((key,index)=>place(key,right-size/2-index*(size+gap),rowY));
            place("interact",right,rowY-size-gap);
            place("sprint",left+size/2,bottom-radius*2-24-size/2);
            place("crouch",left+size*1.5+gap,bottom-radius*2-24-size/2);
            place("bag",right-92-size/2,ot.t+12+size/2);
            place("ping",right-92-size*1.5-gap,ot.t+12+size/2);
            this.reset();
        }
        down(e) {
            if (!this.enabled) return;
            let t = st(e.clientX, e.clientY);
            if (e.pointerType === "mouse") {
                this.mouse.down = !0, this.mouse.active = !0, this.mouse.x = t.x, this.mouse.y = t.y;
                try {
                    this.zone.setPointerCapture(e.pointerId)
                } catch {}
                return
            }
            let a = W.W,
                r = W.H,
                o = this.effectiveRadius ?? 52;
            if (Math.hypot(t.x - this.right.ox, t.y - this.right.oy) < o * 1.5 && !this.right.active) this.right.active = !0, this.right.id = e.pointerId, this.updStick(this.right, t.x, t.y);
            else if (Math.hypot(t.x-this.left.ox,t.y-this.left.oy) < o*1.35 && !this.left.active) this.left.active = !0, this.left.id = e.pointerId, this.left.el.classList.remove("idle"), this.updStick(this.left, t.x, t.y);
            else return;
            try {
                this.zone.setPointerCapture(e.pointerId)
            } catch {}
        }
        moveEv(e) {
            let t = st(e.clientX, e.clientY);
            if (e.pointerType === "mouse") {
                this.mouse.x = t.x, this.mouse.y = t.y, this.mouse.active = !0;
                return
            }
            this.left.active && e.pointerId === this.left.id && this.updStick(this.left, t.x, t.y), this.right.active && e.pointerId === this.right.id && this.updStick(this.right, t.x, t.y)
        }
        up(e) {
            if (e.pointerType === "mouse") {
                this.mouse.down = !1;
                return
            }
            e.pointerId === this.left.id && (this.left.active = !1, this.left.id = -1, this.move.x = this.move.y = 0, this.left.knob.style.transform = "", this.left.el.classList.add("idle")), e.pointerId === this.right.id && (this.right.active = !1, this.right.id = -1, this.aim = null, this.aimMag = 0, this.firing = !1, this.right.knob.style.transform = "", this.right.el.classList.remove("firing"))
        }
        updStick(e, t, a) {
            let r = this.effectiveRadius ?? 52,
                o = t - e.ox,
                s = a - e.oy,
                d = Math.hypot(o, s),
                n = d > r ? r / d : 1;
            e.knob.style.transform = `translate(${o*n}px,${s*n}px)`;
            let l = Math.min(1, d / r);
            if (e === this.left)
                if (l < .12) this.move.x = this.move.y = 0;
                else {
                    let u = (l - .12) / .88;
                    this.move.x = o / d * u, this.move.y = s / d * u
                }
            else {
                this.aimMag = l, l > .14 && (this.aim = Math.atan2(s, o));
                let c = this.firing;
                this.firing = this.fireOnAim && l > .62, this.firing !== c && (e.el.classList.toggle("firing", this.firing), this.firing && Xe(12, this.hapticsOn))
            }
            o = s = 0
        }
        read() {
            let e = this.move.x,
                t = this.move.y,
                a = this.keys;
            (a.has("a") || a.has("arrowleft")) && (e -= 1), (a.has("d") || a.has("arrowright")) && (e += 1), (a.has("w") || a.has("arrowup")) && (t -= 1), (a.has("s") || a.has("arrowdown")) && (t += 1);
            let r = this.aim,
                o = this.firing || this.fireBtn;
            if (this.mouse.active && !this.right.active) {
                let d = this.playerScreen();
                (this.mouse.down || a.has(" ")) && (r = Math.atan2(this.mouse.y - d.y, this.mouse.x - d.x), o = this.mouse.down || o)
            }
            let s = this.sprint || a.has("shift");
            if (o && this.hapticsOn) {
                let d = performance.now();
                d - this.lastFireHaptic > 90 && (this.lastFireHaptic = d)
            }
            return {
                mx: e,
                my: t,
                aim: r,
                fire: o,
                sprint: s,
                crouch: this.crouch && !s
            }
        }
        reset() {
            this.move.x = this.move.y = 0, this.aim = null, this.firing = !1, this.fireBtn = !1, this.sprint = !1, this.crouch = !1, this.keys.clear(), this.mouse.down = !1, this.left.active = this.right.active = !1, this.left.id = this.right.id = -1, this.left.knob.style.transform = "", this.right.knob.style.transform = "", this.left.el.classList.add("idle"), this.right.el.classList.remove("firing"), this.syncToggles();
            for (let e of Object.values(this.els)) e.classList.remove("pressed"), this.interactBtn.classList.remove("pressed")
        }
    };
    var oe = "#0b0c09";

    function D(i, e, t, a, r, o) {
        o = Math.max(0, Math.min(o, a / 2, r / 2)), i.moveTo(e + o, t), i.arcTo(e + a, t, e + a, t + r, o), i.arcTo(e + a, t + r, e, t + r, o), i.arcTo(e, t + r, e, t, o), i.arcTo(e, t, e + a, t, o), i.closePath()
    }

    function Ps(i, e, t, a, r = .28) {
        let o = i.createLinearGradient(0, e, 0, t);
        return o.addColorStop(0, $(a, r)), o.addColorStop(.55, a), o.addColorStop(1, $(a, -r)), o
    }

    function L(i, e, t, a, r, o = 2) {
        i.save(), i.translate(2.5, 3.5), i.fillStyle = "rgba(0,0,0,0.38)", i.fill(e), i.restore(), i.fillStyle = Ps(i, a, r, t), i.fill(e), i.lineWidth = o, i.strokeStyle = oe, i.lineJoin = "round", i.stroke(e)
    }

    function I(i) {
        let e = new Path2D;
        return i(e), e
    }

    function Pe(i, e, t, a, r, o = .35, s = 1.5) {
        i.strokeStyle = `rgba(255,255,255,${o})`, i.lineWidth = s, i.beginPath(), i.moveTo(e, t), i.lineTo(a, r), i.stroke()
    }

    function ca(i, e, t, a, r, o, s = 700) {
        i.font = `${s} ${r}px 'Chakra Petch', 'Arial Narrow', sans-serif`, i.fillStyle = o, i.textAlign = "center", i.textBaseline = "middle", i.fillText(e, t, a)
    }

    function bo(i, e, t, a) {
        let r = Math.min(e, t) * .08,
            o = e - r * 2,
            s = Math.min(t - r * 2, o * .36),
            d = r,
            n = t / 2 - s * .1,
            l = s * .34,
            c = d + (a.stock === "none" ? o * .08 : o * .3),
            u = a.stock === "none" ? o * .5 : o * .32,
            m = c + u,
            p = (d + o - m) * (.6 + a.barrel * .4);
        if (a.stock !== "none") {
            let R = I(w => {
                a.stock === "skeleton" ? (w.moveTo(c, n - l * .3), w.lineTo(d + o * .02, n - l * .1), w.lineTo(d, n + l * 1.1), w.lineTo(d + o * .06, n + l * 1.15), w.lineTo(c, n + l * .45), w.closePath()) : a.stock === "wood" || a.stock === "thumbhole" ? (w.moveTo(c + 4, n - l * .45), w.quadraticCurveTo(d + o * .12, n - l * .35, d, n - l * .2), w.lineTo(d, n + l * 1.25), w.quadraticCurveTo(d + o * .12, n + l * 1, c + 4, n + l * .6), w.closePath()) : D(w, d, n - l * .35, c - d + 6, l * 1.25, l * .25)
            });
            L(i, R, a.furn, n - l, n + l * 1.2), a.stock === "thumbhole" && (i.fillStyle = oe, i.beginPath(), i.ellipse(d + o * .2, n + l * .45, o * .04, l * .25, 0, 0, Math.PI * 2), i.fill())
        }
        let f = I(R => D(R, m - 4, n - l * .22, p + 4, l * .32, 2));
        if (L(i, f, $(a.metal, -.15), n - l * .3, n + l * .2, 1.6), a.stock !== "none") {
            let R = I(w => D(w, m - 4, n - l * .38, p * (a.pump ? .45 : .55), l * .8, l * .18));
            if (L(i, R, a.pump ? $(a.furn, -.1) : a.furn, n - l * .4, n + l * .45), !a.pump)
                for (let w = 1; w < 5; w++) Pe(i, m + p * .5 * w / 5, n - l * .25, m + p * .5 * w / 5, n + l * .25, .18, 1)
        }
        let b = c + u * (a.stock === "none" ? .18 : .25),
            x = I(R => {
                R.moveTo(b, n + l * .4), R.lineTo(b + u * .22, n + l * .4), R.lineTo(b + u * .12, n + l * (a.stock === "none" ? 2.3 : 1.9)), R.lineTo(b - u * .12, n + l * (a.stock === "none" ? 2.2 : 1.8)), R.closePath()
            });
        L(i, x, a.stock === "none" ? $(a.furn, -.2) : $(a.furn, -.05), n, n + l * 2);
        let k = c + u * (a.stock === "none" ? .2 : .62);
        if (a.mag === "straight" || a.mag === "curved") {
            let R = I(w => {
                w.moveTo(k - u * .1, n + l * .45), w.lineTo(k + u * .12, n + l * .45), a.mag === "curved" ? (w.quadraticCurveTo(k + u * .2, n + l * 1.6, k + u * .32, n + l * 2.3), w.lineTo(k + u * .08, n + l * 2.45), w.quadraticCurveTo(k - u * .02, n + l * 1.6, k - u * .1, n + l * .45)) : (w.lineTo(k + u * .14, n + l * 2.1), w.lineTo(k - u * .08, n + l * 2.1)), w.closePath()
            });
            L(i, R, $(a.metal, -.25), n, n + l * 2.4)
        } else if (a.mag === "drum") {
            let R = I(w => w.arc(k, n + l * 1.35, l * .95, 0, Math.PI * 2));
            L(i, R, $(a.metal, -.2), n, n + l * 2.3), i.strokeStyle = "rgba(255,255,255,0.18)", i.beginPath(), i.arc(k, n + l * 1.35, l * .55, 0, Math.PI * 2), i.stroke()
        } else if (a.mag === "tube") {
            let R = I(w => D(w, m, n + l * .12, p * .8, l * .3, 2));
            L(i, R, $(a.metal, -.3), n, n + l * .5, 1.4)
        }
        let M = I(R => {
            a.stock === "none" ? D(R, c, n - l * .55, u + p * .15, l * 1.05, l * .18) : D(R, c, n - l * .5, u, l, l * .15)
        });
        if (L(i, M, a.metal, n - l * .55, n + l * .55), Pe(i, c + 3, n - l * .42, c + u - 3, n - l * .42, .3), a.mag === "cylinder") {
            let R = I(w => D(w, c + u * .42, n - l * .45, u * .3, l * 1, l * .3));
            L(i, R, $(a.metal, -.1), n - l * .5, n + l * .5);
            for (let w = 0; w < 3; w++) Pe(i, c + u * (.48 + w * .08), n - l * .35, c + u * (.48 + w * .08), n + l * .35, .25, 1)
        }
        if (i.strokeStyle = oe, i.lineWidth = 2, i.beginPath(), i.arc(b + u * .2, n + l * .6, l * .35, .2, Math.PI - .4), i.stroke(), a.supp) {
            let R = I(w => D(w, m + p - 2, n - l * .38, Math.max(14, o * .16), l * .62, 3));
            L(i, R, "#2a2c2f", n - l * .4, n + l * .3)
        }
        if (a.scope) {
            let R = c + u * .05,
                w = Math.max(u * .95, 30),
                P = I(g => {
                    D(g, R, n - l * 1.55, w, l * .6, l * .25), D(g, R - 4, n - l * 1.7, w * .22, l * .9, 3), D(g, R + w * .82, n - l * 1.75, w * .24, l * 1, 3)
                });
            L(i, P, "#25282c", n - l * 1.8, n - l * .9, 1.6), i.fillStyle = "rgba(120,200,255,0.5)", i.fillRect(R + w * .96, n - l * 1.6, 3, l * .7), i.fillStyle = oe, i.fillRect(R + w * .3, n - l * 1, 3, l * .5), i.fillRect(R + w * .65, n - l * 1, 3, l * .5)
        } else if (a.dot) {
            let R = I(w => D(w, c + u * .35, n - l * 1.2, u * .3, l * .7, 3));
            L(i, R, "#25282c", n - l * 1.2, n - l * .5, 1.4), i.fillStyle = "#ff3b2f", i.beginPath(), i.arc(c + u * .5, n - l * .85, 1.6, 0, Math.PI * 2), i.fill()
        }
        a.bipod && (i.strokeStyle = oe, i.lineWidth = 2.4, i.beginPath(), i.moveTo(m + p * .55, n), i.lineTo(m + p * .42, n + l * 1.6), i.moveTo(m + p * .55, n), i.lineTo(m + p * .7, n + l * 1.6), i.stroke()), a.glow && (i.strokeStyle = a.glow, i.lineWidth = 1.6, i.shadowColor = a.glow, i.shadowBlur = 6, i.beginPath(), i.moveTo(c + 4, n + l * .1), i.lineTo(c + u - 4, n + l * .1), i.stroke(), i.shadowBlur = 0)
    }
    var yo = {
            pistol: {
                metal: "#3a3d42",
                furn: "#2a2b2e",
                stock: "none",
                mag: "grip",
                barrel: .2
            },
            revolver: {
                metal: "#6c6f74",
                furn: "#5a3a24",
                stock: "none",
                mag: "cylinder",
                barrel: .7
            },
            smg: {
                metal: "#34373b",
                furn: "#2b2d30",
                stock: "skeleton",
                mag: "straight",
                barrel: .2
            },
            shotgun: {
                metal: "#3a3c40",
                furn: "#6b4528",
                stock: "wood",
                mag: "tube",
                barrel: 1,
                pump: !0
            },
            autoshotgun: {
                metal: "#2c2e31",
                furn: "#1f2023",
                stock: "solid",
                mag: "drum",
                barrel: .6
            },
            hunting: {
                metal: "#3a3c40",
                furn: "#7a4f2a",
                stock: "wood",
                mag: "none",
                barrel: 1,
                scope: !0
            },
            ar: {
                metal: "#2f3236",
                furn: "#3a3d35",
                stock: "solid",
                mag: "straight",
                barrel: .55,
                dot: !0
            },
            ak: {
                metal: "#2e3033",
                furn: "#7a4a24",
                stock: "wood",
                mag: "curved",
                barrel: .55
            },
            sniper: {
                metal: "#2c2f2a",
                furn: "#4a5236",
                stock: "thumbhole",
                mag: "straight",
                barrel: 1,
                scope: !0,
                bipod: !0
            },
            wraith: {
                metal: "#1f2a2c",
                furn: "#1a2224",
                stock: "skeleton",
                mag: "straight",
                barrel: .3,
                supp: !0,
                glow: "#3fe0d0"
            }
        },
        N = i => (e, t, a, r) => {
            let o = Math.min(t, a) / 100;
            e.save(), e.translate((t - 100 * o) / 2, (a - 100 * o) / 2), e.scale(o, o), i(e, r), e.restore()
        },
        fo = {
            ...Object.fromEntries(Object.entries(yo).map(([i, e]) => [i, (t, a, r) => bo(t, a, r, e)])),
            knife: (i, e, t) => {
                i.save(), i.translate(e / 2, t / 2), i.rotate(-Math.PI / 2.6);
                let a = Math.max(e, t) * .8,
                    r = I(s => {
                        s.moveTo(-a * .05, -a * .07), s.lineTo(a * .5, -a * .04), s.quadraticCurveTo(a * .42, a * .06, a * .1, a * .07), s.lineTo(-a * .05, a * .07), s.closePath()
                    });
                L(i, r, "#b8bec4", -a * .07, a * .07);
                let o = I(s => D(s, -a * .45, -a * .07, a * .42, a * .14, 4));
                L(i, o, "#2a2420", -a * .07, a * .07), i.fillStyle = "#c8c8c8";
                for (let s of [-.35, -.2]) i.beginPath(), i.arc(s * a, 0, 2, 0, 7), i.fill();
                i.restore()
            },
            crowbar: (i, e, t) => {
                i.save(), i.translate(e / 2, t / 2), i.rotate(-Math.PI / 2.4);
                let a = Math.max(e, t) * .85,
                    r = I(o => {
                        o.moveTo(-a * .45, -3), o.lineTo(a * .38, -3), o.quadraticCurveTo(a * .5, -3, a * .5, -14), o.lineTo(a * .44, -16), o.quadraticCurveTo(a * .44, 4, a * .36, 4), o.lineTo(-a * .42, 4), o.lineTo(-a * .5, 9), o.lineTo(-a * .52, 3), o.closePath()
                    });
                L(i, r, "#a8262a", -16, 9), i.restore()
            },
            bat: (i, e, t) => {
                i.save(), i.translate(e / 2, t / 2), i.rotate(-Math.PI / 2.4);
                let a = Math.max(e, t) * .85,
                    r = I(o => {
                        o.moveTo(-a * .48, -3), o.lineTo(-a * .1, -5), o.lineTo(a * .48, -10), o.lineTo(a * .48, 10), o.lineTo(-a * .1, 5), o.lineTo(-a * .48, 3), o.closePath()
                    });
                L(i, r, "#b08a56", -10, 10), i.fillStyle = "#9aa0a8";
                for (let o = 0; o < 6; o++) {
                    let s = a * (.12 + o * .065);
                    i.fillRect(s, -14, 2, 5), i.fillRect(s + 4, 9, 2, 5)
                }
                i.fillStyle = "#2a2a2a", i.fillRect(-a * .48, -3.5, a * .18, 7), i.restore()
            },
            machete: (i, e, t) => {
                i.save(), i.translate(e / 2, t / 2), i.rotate(-Math.PI / 2.4);
                let a = Math.max(e, t) * .85,
                    r = I(s => {
                        s.moveTo(-a * .18, -6), s.lineTo(a * .42, -9), s.quadraticCurveTo(a * .52, -4, a * .46, 6), s.lineTo(-a * .18, 8), s.closePath()
                    });
                L(i, r, "#9ea5ab", -9, 8), Pe(i, -a * .15, -4, a * .4, -7, .5);
                let o = I(s => D(s, -a * .48, -5, a * .3, 11, 4));
                L(i, o, "#3a2618", -5, 6), i.restore()
            },
            axe: (i, e, t) => {
                i.save(), i.translate(e / 2, t / 2), i.rotate(-Math.PI / 2.4);
                let a = Math.max(e, t) * .85,
                    r = I(s => D(s, -a * .5, -4, a * .92, 8, 4));
                L(i, r, "#b08a56", -4, 4);
                let o = I(s => {
                    s.moveTo(a * .28, -6), s.lineTo(a * .42, -24), s.quadraticCurveTo(a * .52, -4, a * .44, 18), s.lineTo(a * .28, 6), s.lineTo(a * .2, 10), s.lineTo(a * .2, -10), s.closePath()
                });
                L(i, o, "#c0302a", -24, 18), i.fillStyle = "#c8ccd0", i.beginPath(), i.moveTo(a * .42, -24), i.quadraticCurveTo(a * .52, -4, a * .44, 18), i.lineTo(a * .4, 14), i.quadraticCurveTo(a * .46, -4, a * .39, -18), i.closePath(), i.fill(), i.restore()
            },
            ammo: N((i, e) => {
                let t = I(a => D(a, 14, 38, 72, 50, 6));
                L(i, t, "#4a4a3e", 38, 88), i.fillStyle = e, i.fillRect(14, 52, 72, 18), i.strokeStyle = oe, i.lineWidth = 2, i.strokeRect(14, 52, 72, 18);
                for (let a = 0; a < 4; a++) {
                    let r = 24 + a * 15,
                        o = I(s => {
                            s.moveTo(r, 46), s.lineTo(r, 22), s.quadraticCurveTo(r + 5, 8, r + 10, 22), s.lineTo(r + 10, 46), s.closePath()
                        });
                    L(i, o, "#c9a25a", 10, 46, 1.6), i.fillStyle = "#b07a3a", i.fillRect(r, 16, 10, 8)
                }
            }),
            shells: N((i, e) => {
                for (let t = 0; t < 3; t++) {
                    let a = 16 + t * 24,
                        r = 22 + t % 2 * 6,
                        o = I(d => D(d, a, r, 20, 58, 4));
                    L(i, o, e, r, r + 58);
                    let s = I(d => D(d, a, r + 40, 20, 18, 2));
                    L(i, s, "#c9a25a", r + 40, r + 58, 1.6), Pe(i, a + 5, r + 6, a + 5, r + 36, .35)
                }
            }),
            reddot: N(i => {
                let e = I(t => {
                    D(t, 18, 40, 64, 36, 6), D(t, 28, 24, 44, 22, 8)
                });
                L(i, e, "#2a2d30", 24, 76), i.fillStyle = "#7ab8e8", i.globalAlpha = .5, i.fillRect(32, 28, 36, 14), i.globalAlpha = 1, i.fillStyle = "#ff3b2f", i.shadowColor = "#ff3b2f", i.shadowBlur = 8, i.beginPath(), i.arc(50, 35, 3, 0, 7), i.fill(), i.shadowBlur = 0
            }),
            scope: (i, e, t) => {
                let a = I(r => {
                    D(r, e * .18, t * .32, e * .64, t * .32, t * .15), D(r, e * .04, t * .22, e * .2, t * .52, 5), D(r, e * .74, t * .18, e * .22, t * .6, 5)
                });
                L(i, a, "#25282c", t * .2, t * .8), i.fillStyle = "rgba(120,200,255,0.55)", i.fillRect(e * .93, t * .24, 3, t * .48), i.fillStyle = oe, i.fillRect(e * .4, t * .16, e * .08, t * .18), Pe(i, e * .22, t * .38, e * .72, t * .38, .3)
            },
            suppressor: (i, e, t) => {
                let a = I(r => D(r, e * .08, t * .32, e * .84, t * .36, t * .14));
                L(i, a, "#26282b", t * .3, t * .7);
                for (let r = 1; r < 6; r++) Pe(i, e * (.08 + r * .14), t * .35, e * (.08 + r * .14), t * .65, .12, 1);
                i.fillStyle = oe, i.beginPath(), i.ellipse(e * .9, t * .5, 3, t * .12, 0, 0, 7), i.fill()
            },
            mag: (i, e, t) => {
                let a = I(r => {
                    r.moveTo(e * .3, t * .08), r.lineTo(e * .7, t * .08), r.quadraticCurveTo(e * .78, t * .5, e * .86, t * .9), r.lineTo(e * .42, t * .94), r.quadraticCurveTo(e * .36, t * .5, e * .3, t * .08), r.closePath()
                });
                L(i, a, "#34373b", 0, t), i.fillStyle = "#c9a25a", i.fillRect(e * .36, t * .03, e * .28, t * .06), Pe(i, e * .36, t * .16, e * .44, t * .85, .25)
            },
            grip: N(i => {
                let e = I(t => {
                    D(t, 20, 22, 60, 16, 4), t.moveTo(38, 36), t.lineTo(62, 36), t.lineTo(58, 86), t.quadraticCurveTo(50, 92, 42, 86), t.closePath()
                });
                L(i, e, "#2a2c30", 22, 90);
                for (let t = 0; t < 5; t++) Pe(i, 42, 46 + t * 8, 58, 46 + t * 8, .12, 1)
            }),
            flashlight: N(i => {
                let e = I(a => {
                    D(a, 14, 38, 50, 24, 6), a.moveTo(62, 32), a.lineTo(84, 26), a.lineTo(84, 74), a.lineTo(62, 68), a.closePath()
                });
                L(i, e, "#2e3135", 26, 74);
                let t = i.createRadialGradient(84, 50, 2, 84, 50, 30);
                t.addColorStop(0, "rgba(255,240,190,0.9)"), t.addColorStop(1, "rgba(255,240,190,0)"), i.fillStyle = t, i.fillRect(70, 20, 30, 60), i.fillStyle = "#fff6d0", i.fillRect(82, 30, 4, 40)
            }),
            laser: N(i => {
                let e = I(t => D(t, 16, 36, 50, 28, 6));
                L(i, e, "#2e3135", 36, 64), i.strokeStyle = "#ff2a2a", i.shadowColor = "#ff2a2a", i.shadowBlur = 8, i.lineWidth = 2.5, i.beginPath(), i.moveTo(66, 50), i.lineTo(98, 50), i.stroke(), i.shadowBlur = 0, i.fillStyle = "#ff5a4a", i.beginPath(), i.arc(66, 50, 4, 0, 7), i.fill()
            }),
            stock: (i, e, t) => {
                let a = I(r => {
                    r.moveTo(e * .92, t * .3), r.lineTo(e * .3, t * .24), r.lineTo(e * .06, t * .2), r.lineTo(e * .06, t * .86), r.lineTo(e * .24, t * .86), r.lineTo(e * .4, t * .62), r.lineTo(e * .92, t * .6), r.closePath()
                });
                L(i, a, "#2f3236", t * .2, t * .86), i.fillStyle = "#4a3a2a", i.fillRect(e * .06, t * .2, e * .06, t * .66)
            },
            rag: N(i => {
                let e = I(t => {
                    t.moveTo(16, 34), t.quadraticCurveTo(40, 22, 60, 30), t.quadraticCurveTo(78, 24, 86, 36), t.lineTo(80, 74), t.quadraticCurveTo(56, 84, 38, 76), t.quadraticCurveTo(22, 80, 18, 66), t.closePath()
                });
                L(i, e, "#cfc6aa", 22, 82), i.strokeStyle = "rgba(0,0,0,0.18)", i.lineWidth = 2;
                for (let t = 0; t < 4; t++) i.beginPath(), i.moveTo(24, 42 + t * 9), i.quadraticCurveTo(50, 36 + t * 9, 78, 44 + t * 9), i.stroke()
            }),
            bandage: N(i => {
                let e = I(a => a.ellipse(42, 52, 28, 30, 0, 0, 7));
                L(i, e, "#ece6d6", 22, 82);
                let t = I(a => {
                    a.moveTo(62, 66), a.lineTo(90, 70), a.lineTo(88, 84), a.lineTo(54, 78), a.closePath()
                });
                L(i, t, "#e2dccb", 66, 84), i.fillStyle = "#b8b0a0", i.beginPath(), i.ellipse(42, 52, 9, 10, 0, 0, 7), i.fill(), i.strokeStyle = "rgba(0,0,0,0.12)";
                for (let a = 0; a < 3; a++) i.beginPath(), i.ellipse(42, 52, 14 + a * 5, 15 + a * 5, 0, 0, 7), i.stroke()
            }),
            pills: N(i => {
                let e = I(a => D(a, 30, 30, 40, 56, 8));
                L(i, e, "#d8822a", 30, 86);
                let t = I(a => D(a, 26, 16, 48, 18, 4));
                L(i, t, "#f2f0ea", 16, 34), i.fillStyle = "#f2f0ea", i.fillRect(34, 46, 32, 26), i.fillStyle = "#d9443a", i.fillRect(46, 50, 8, 18), i.fillRect(41, 55, 18, 8)
            }),
            medkit: N(i => {
                let e = I(a => D(a, 12, 28, 76, 56, 8));
                L(i, e, "#c8302a", 28, 84);
                let t = I(a => D(a, 36, 16, 28, 16, 5));
                i.lineWidth = 5, i.strokeStyle = oe, i.stroke(t), i.lineWidth = 2.5, i.strokeStyle = "#3a3a3a", i.stroke(t), i.fillStyle = "#f2f0ea", i.fillRect(44, 40, 12, 34), i.fillRect(33, 51, 34, 12), Pe(i, 18, 34, 82, 34, .35)
            }),
            surgical: (i, e, t) => {
                let a = I(r => D(r, e * .06, t * .22, e * .88, t * .62, 6));
                L(i, a, "#5e7a86", t * .22, t * .84), i.fillStyle = "#f2f0ea", i.fillRect(e * .12, t * .36, e * .36, t * .34), i.fillStyle = "#c8302a", i.fillRect(e * .27, t * .4, e * .06, t * .26), i.fillRect(e * .2, t * .5, e * .2, t * .07), i.fillStyle = "#c8ccd0", i.fillRect(e * .56, t * .4, e * .3, 3), i.fillRect(e * .56, t * .52, e * .24, 3), i.fillRect(e * .56, t * .64, e * .28, 3)
            },
            antibiotics: N(i => {
                let e = I(t => D(t, 18, 26, 64, 52, 4));
                L(i, e, "#e8e4da", 26, 78), i.fillStyle = "#3a8a5a", i.fillRect(18, 26, 64, 14), ca(i, "Rx", 50, 60, 22, "#3a8a5a")
            }),
            syringe: N((i, e) => {
                i.save(), i.translate(50, 50), i.rotate(-Math.PI / 4);
                let t = I(a => D(a, -30, -9, 52, 18, 3));
                L(i, t, "#dfe6ea", -9, 9), i.fillStyle = e, i.globalAlpha = .85, i.fillRect(-24, -6, 34, 12), i.globalAlpha = 1, i.fillStyle = oe, i.fillRect(-40, -12, 6, 24), i.fillRect(-36, -2, 8, 4), i.fillStyle = "#c8ccd0", i.fillRect(22, -1.5, 22, 3), i.restore()
            }),
            can: N((i, e) => {
                let t = I(a => D(a, 24, 20, 52, 66, 6));
                L(i, t, "#a8acb0", 20, 86), i.fillStyle = e, i.fillRect(24, 34, 52, 38), i.strokeStyle = oe, i.lineWidth = 2, i.strokeRect(24, 34, 52, 38), i.fillStyle = "rgba(255,255,255,0.8)", i.beginPath(), i.ellipse(50, 53, 12, 9, 0, 0, 7), i.fill(), Pe(i, 30, 24, 30, 82, .4, 2), i.strokeStyle = "rgba(0,0,0,0.3)", i.beginPath(), i.moveTo(24, 28), i.lineTo(76, 28), i.stroke()
            }),
            crisps: N(i => {
                let e = I(t => {
                    t.moveTo(24, 18), t.lineTo(76, 18), t.lineTo(80, 30), t.quadraticCurveTo(86, 56, 80, 82), t.lineTo(20, 82), t.quadraticCurveTo(14, 56, 20, 30), t.closePath()
                });
                L(i, e, "#3a6fb0", 18, 84), i.fillStyle = "#e8c84a", i.beginPath(), i.ellipse(50, 54, 18, 14, -.3, 0, 7), i.fill(), i.strokeStyle = "rgba(0,0,0,0.25)";
                for (let t = 0; t < 7; t++) i.beginPath(), i.moveTo(26 + t * 7, 18), i.lineTo(28 + t * 7, 24), i.stroke()
            }),
            bar: N(i => {
                i.save(), i.translate(50, 50), i.rotate(-.4);
                let e = I(t => D(t, -38, -14, 76, 28, 3));
                L(i, e, "#5a2a8a", -14, 14), i.fillStyle = "#6a3a1a", i.fillRect(18, -14, 20, 28), i.strokeStyle = oe, i.strokeRect(18, -14, 20, 28), i.fillStyle = "#e8c84a", i.fillRect(-24, -4, 30, 8), i.restore()
            }),
            ration: N(i => {
                let e = I(t => {
                    t.moveTo(20, 20), t.lineTo(80, 20), t.lineTo(84, 84), t.lineTo(16, 84), t.closePath()
                });
                L(i, e, "#5a5f3a", 20, 84), i.fillStyle = "rgba(0,0,0,0.3)", i.fillRect(20, 20, 60, 10), ca(i, "MEAL", 50, 58, 20, "#2a2c1a")
            }),
            apple: N(i => {
                let e = I(t => {
                    t.moveTo(50, 30), t.bezierCurveTo(30, 16, 10, 36, 20, 62), t.bezierCurveTo(28, 84, 44, 88, 50, 82), t.bezierCurveTo(56, 88, 72, 84, 80, 62), t.bezierCurveTo(90, 36, 70, 16, 50, 30), t.closePath()
                });
                L(i, e, "#b8302a", 20, 86), i.strokeStyle = "#4a3020", i.lineWidth = 4, i.beginPath(), i.moveTo(50, 30), i.lineTo(54, 14), i.stroke(), i.fillStyle = "#5a9a3a", i.beginPath(), i.ellipse(64, 18, 10, 5, -.5, 0, 7), i.fill(), i.fillStyle = "rgba(255,255,255,0.35)", i.beginPath(), i.ellipse(34, 46, 6, 10, .4, 0, 7), i.fill()
            }),
            jerky: N(i => {
                for (let e = 0; e < 3; e++) {
                    let t = I(a => {
                        a.moveTo(18 + e * 6, 30 + e * 16), a.quadraticCurveTo(50, 20 + e * 16, 82 - e * 4, 34 + e * 16), a.lineTo(80 - e * 4, 44 + e * 16), a.quadraticCurveTo(50, 32 + e * 16, 20 + e * 6, 42 + e * 16), a.closePath()
                    });
                    L(i, t, "#7a3a20", 20 + e * 16, 46 + e * 16, 1.6)
                }
            }),
            stew: N(i => {
                let e = I(t => {
                    t.moveTo(14, 42), t.lineTo(86, 42), t.quadraticCurveTo(84, 86, 50, 86), t.quadraticCurveTo(16, 86, 14, 42), t.closePath()
                });
                L(i, e, "#3a3c40", 42, 86), i.fillStyle = "#9a5a2a", i.beginPath(), i.ellipse(50, 44, 34, 8, 0, 0, 7), i.fill(), i.fillStyle = "#e8a33d";
                for (let [t, a] of [
                        [40, 43],
                        [56, 45],
                        [48, 41]
                    ]) i.fillRect(t, a, 5, 3);
                i.strokeStyle = "rgba(255,255,255,0.35)", i.lineWidth = 2;
                for (let t of [38, 52, 64]) i.beginPath(), i.moveTo(t, 34), i.quadraticCurveTo(t - 4, 26, t + 2, 18), i.stroke()
            }),
            bottle: N(i => {
                let e = I(t => {
                    t.moveTo(42, 10), t.lineTo(58, 10), t.lineTo(58, 22), t.quadraticCurveTo(70, 28, 70, 40), t.lineTo(70, 86), t.quadraticCurveTo(70, 90, 64, 90), t.lineTo(36, 90), t.quadraticCurveTo(30, 90, 30, 86), t.lineTo(30, 40), t.quadraticCurveTo(30, 28, 42, 22), t.closePath()
                });
                i.save(), i.translate(2.5, 3.5), i.fillStyle = "rgba(0,0,0,0.35)", i.fill(e), i.restore(), i.fillStyle = "rgba(150,200,230,0.55)", i.fill(e), i.fillStyle = "rgba(80,150,210,0.55)", i.fillRect(31, 48, 38, 41), i.strokeStyle = oe, i.lineWidth = 2, i.stroke(e), i.fillStyle = "#3a7ac8", i.fillRect(41, 6, 18, 8), i.fillStyle = "#e8e4da", i.fillRect(31, 52, 38, 16), Pe(i, 36, 30, 36, 84, .6, 2.5)
            }),
            canteen: N(i => {
                let e = I(a => a.ellipse(50, 56, 32, 34, 0, 0, 7));
                L(i, e, "#4a5a32", 22, 90);
                let t = I(a => D(a, 42, 14, 16, 12, 2));
                L(i, t, "#2a2c2a", 14, 26), i.strokeStyle = "rgba(0,0,0,0.35)", i.lineWidth = 3, i.beginPath(), i.ellipse(50, 56, 24, 26, 0, 0, 7), i.stroke()
            }),
            soda: N((i, e) => {
                let t = I(a => D(a, 30, 14, 40, 74, 7));
                L(i, t, e, 14, 88), i.fillStyle = "#c8ccd0", i.fillRect(30, 14, 40, 8), i.fillRect(30, 80, 40, 8), i.strokeStyle = oe, i.lineWidth = 2, i.strokeRect(30, 14, 40, 74), i.fillStyle = "rgba(255,255,255,0.85)", i.save(), i.translate(50, 50), i.rotate(-.5), i.fillRect(-14, -3, 28, 6), i.restore(), Pe(i, 36, 24, 36, 78, .45, 2.5)
            }),
            vest: N((i, e) => {
                let t = I(a => {
                    a.moveTo(26, 12), a.lineTo(40, 12), a.quadraticCurveTo(50, 26, 60, 12), a.lineTo(74, 12), a.lineTo(84, 32), a.lineTo(82, 88), a.lineTo(18, 88), a.lineTo(16, 32), a.closePath()
                });
                L(i, t, e, 12, 88), i.fillStyle = "rgba(255,255,255,0.85)", i.fillRect(30, 52, 40, 12), ca(i, "POLICE", 50, 58.5, 11, "#1a1e26", 800), i.fillStyle = "rgba(0,0,0,0.25)", i.fillRect(48, 24, 4, 64)
            }),
            plate: N((i, e) => {
                let t = I(r => {
                    r.moveTo(24, 10), r.lineTo(38, 10), r.lineTo(42, 22), r.lineTo(58, 22), r.lineTo(62, 10), r.lineTo(76, 10), r.lineTo(86, 36), r.lineTo(84, 90), r.lineTo(16, 90), r.lineTo(14, 36), r.closePath()
                });
                L(i, t, e, 10, 90);
                for (let r = 0; r < 3; r++) {
                    let o = I(s => D(s, 22 + r * 19, 58, 16, 24, 3));
                    L(i, o, $(e, -.2), 58, 82, 1.4)
                }
                let a = I(r => D(r, 28, 28, 44, 24, 4));
                L(i, a, $(e, .1), 28, 52, 1.4)
            }),
            helmet: N((i, e) => {
                let t = I(a => {
                    a.moveTo(12, 70), a.quadraticCurveTo(12, 18, 50, 18), a.quadraticCurveTo(88, 18, 88, 70), a.lineTo(80, 76), a.lineTo(20, 76), a.closePath()
                });
                L(i, t, e, 18, 76), i.fillStyle = "rgba(0,0,0,0.3)", i.fillRect(14, 64, 72, 6), i.fillStyle = "#2a2c2a", i.fillRect(42, 32, 16, 8)
            }),
            motohelmet: N(i => {
                let e = I(a => a.ellipse(50, 52, 36, 36, 0, 0, 7));
                L(i, e, "#b02a2a", 16, 88);
                let t = I(a => {
                    a.moveTo(24, 46), a.quadraticCurveTo(50, 36, 86, 46), a.lineTo(84, 66), a.quadraticCurveTo(50, 60, 26, 66), a.closePath()
                });
                i.fillStyle = "#1a2a3a", i.fill(t), i.strokeStyle = oe, i.lineWidth = 2, i.stroke(t), Pe(i, 32, 48, 60, 44, .5, 2)
            }),
            gasmask: N(i => {
                let e = I(a => {
                    a.moveTo(20, 30), a.quadraticCurveTo(50, 8, 80, 30), a.quadraticCurveTo(88, 64, 62, 84), a.lineTo(38, 84), a.quadraticCurveTo(12, 64, 20, 30), a.closePath()
                });
                L(i, e, "#3a3e3a", 10, 86);
                for (let a of [36, 64]) i.fillStyle = "#7ab0c8", i.beginPath(), i.ellipse(a, 40, 10, 9, 0, 0, 7), i.fill(), i.strokeStyle = oe, i.lineWidth = 2.5, i.stroke();
                let t = I(a => a.ellipse(50, 74, 13, 13, 0, 0, 7));
                L(i, t, "#2a2c2a", 60, 88), i.strokeStyle = "rgba(255,255,255,0.2)";
                for (let a = 0; a < 3; a++) i.beginPath(), i.arc(50, 74, 4 + a * 3, 0, 7), i.stroke()
            }),
            backpack: N((i, e) => {
                let t = I(o => D(o, 18, 16, 64, 76, 16));
                L(i, t, e, 16, 92);
                let a = I(o => {
                    o.moveTo(18, 40), o.quadraticCurveTo(18, 16, 50, 16), o.quadraticCurveTo(82, 16, 82, 40), o.quadraticCurveTo(50, 48, 18, 40), o.closePath()
                });
                L(i, a, $(e, .12), 16, 46);
                let r = I(o => D(o, 30, 56, 40, 28, 6));
                L(i, r, $(e, -.15), 56, 84), i.fillStyle = "#c8b070", i.fillRect(46, 38, 8, 8), i.strokeStyle = oe, i.lineWidth = 3, i.beginPath(), i.moveTo(38, 16), i.quadraticCurveTo(50, 2, 62, 16), i.stroke()
            }),
            cash: N(i => {
                for (let e = 0; e < 3; e++) {
                    i.save(), i.translate(50, 54 - e * 6), i.rotate(-.15 + e * .12);
                    let t = I(a => D(a, -38, -20, 76, 40, 3));
                    L(i, t, "#5a8a5a", -20, 20, 1.6), i.strokeStyle = "rgba(255,255,255,0.35)", i.strokeRect(-32, -14, 64, 28), i.fillStyle = "rgba(255,255,255,0.4)", i.beginPath(), i.arc(0, 0, 8, 0, 7), i.fill(), i.restore()
                }
                i.fillStyle = "#c8302a", i.fillRect(44, 28, 12, 44)
            }),
            ring: N(i => {
                i.lineWidth = 12, i.strokeStyle = oe, i.beginPath(), i.ellipse(50, 58, 26, 20, 0, 0, 7), i.stroke(), i.lineWidth = 8;
                let e = i.createLinearGradient(0, 36, 0, 80);
                e.addColorStop(0, "#ffe38a"), e.addColorStop(1, "#a87a2a"), i.strokeStyle = e, i.beginPath(), i.ellipse(50, 58, 26, 20, 0, 0, 7), i.stroke();
                let t = I(a => {
                    a.moveTo(50, 22), a.lineTo(62, 32), a.lineTo(50, 44), a.lineTo(38, 32), a.closePath()
                });
                L(i, t, "#b8e8ff", 22, 44, 1.6)
            }),
            watch: N(i => {
                i.fillStyle = "#4a3a2a", i.fillRect(38, 6, 24, 88), i.strokeStyle = oe, i.lineWidth = 2, i.strokeRect(38, 6, 24, 88);
                let e = I(t => t.arc(50, 50, 24, 0, 7));
                L(i, e, "#d8b04a", 26, 74), i.fillStyle = "#f2ecd8", i.beginPath(), i.arc(50, 50, 18, 0, 7), i.fill(), i.strokeStyle = oe, i.lineWidth = 2, i.beginPath(), i.moveTo(50, 50), i.lineTo(50, 38), i.moveTo(50, 50), i.lineTo(59, 54), i.stroke()
            }),
            locket: N(i => {
                i.strokeStyle = "#c8ccd0", i.lineWidth = 2, i.beginPath(), i.moveTo(30, 10), i.quadraticCurveTo(50, 40, 70, 10), i.stroke();
                let e = I(t => {
                    t.moveTo(50, 90), t.bezierCurveTo(16, 66, 22, 32, 40, 36), t.quadraticCurveTo(48, 38, 50, 46), t.quadraticCurveTo(52, 38, 60, 36), t.bezierCurveTo(78, 32, 84, 66, 50, 90), t.closePath()
                });
                L(i, e, "#c8ccd0", 34, 90)
            }),
            lighter: N(i => {
                let e = I(a => D(a, 30, 34, 40, 56, 5));
                L(i, e, "#c8a04a", 34, 90);
                let t = I(a => D(a, 30, 18, 40, 18, 4));
                L(i, t, "#d8b05a", 18, 36), i.strokeStyle = "rgba(0,0,0,0.3)", i.beginPath(), i.moveTo(30, 36), i.lineTo(70, 36), i.stroke(), i.fillStyle = "rgba(255,255,255,0.4)", i.fillRect(36, 44, 6, 40)
            }),
            gpu: (i, e, t) => {
                let a = I(r => D(r, e * .04, t * .2, e * .92, t * .6, 5));
                L(i, a, "#2a2c30", t * .2, t * .8);
                for (let r of [.3, .68]) {
                    i.fillStyle = "#16181a", i.beginPath(), i.arc(e * r, t * .5, t * .22, 0, 7), i.fill(), i.strokeStyle = "#4a4e54", i.lineWidth = 2;
                    for (let o = 0; o < 6; o++) {
                        i.beginPath(), i.moveTo(e * r, t * .5);
                        let s = o * Math.PI / 3;
                        i.lineTo(e * r + Math.cos(s) * t * .2, t * .5 + Math.sin(s) * t * .2), i.stroke()
                    }
                }
                i.fillStyle = "#c9a25a", i.fillRect(e * .1, t * .8, e * .6, t * .08), i.fillStyle = "#3fe0d0", i.fillRect(e * .08, t * .24, e * .84, 2)
            },
            folder: N(i => {
                let e = I(t => {
                    t.moveTo(12, 24), t.lineTo(40, 24), t.lineTo(46, 30), t.lineTo(88, 30), t.lineTo(88, 86), t.lineTo(12, 86), t.closePath()
                });
                L(i, e, "#c8a86a", 24, 86), i.save(), i.translate(50, 60), i.rotate(-.25), i.strokeStyle = "#c0302a", i.lineWidth = 3, i.strokeRect(-30, -10, 60, 20), ca(i, "SECRET", 0, 1, 14, "#c0302a", 800), i.restore()
            }),
            goldbar: N(i => {
                let e = I(a => {
                    a.moveTo(22, 40), a.lineTo(78, 40), a.lineTo(90, 74), a.lineTo(10, 74), a.closePath()
                });
                L(i, e, "#d8a838", 40, 74);
                let t = I(a => {
                    a.moveTo(22, 40), a.lineTo(78, 40), a.lineTo(72, 30), a.lineTo(28, 30), a.closePath()
                });
                L(i, t, "#f2cc5a", 30, 40, 1.6), Pe(i, 26, 46, 74, 46, .5, 2)
            }),
            battery: N(i => {
                for (let e = 0; e < 2; e++) {
                    let t = 22 + e * 30,
                        a = I(r => D(r, t, 22, 24, 66, 4));
                    L(i, a, "#2a2c30", 22, 88), i.fillStyle = "#c8a03a", i.fillRect(t, 22, 24, 22), i.fillStyle = "#c8ccd0", i.fillRect(t + 8, 16, 8, 6)
                }
            }),
            radio: (i, e, t) => {
                let a = I(r => D(r, e * .18, t * .2, e * .64, t * .76, 6));
                L(i, a, "#2a2c2a", t * .2, t * .96), i.fillStyle = "#1a1c1a", i.fillRect(e * .42, t * .02, e * .12, t * .2), i.fillStyle = "#7ab060", i.fillRect(e * .26, t * .28, e * .48, t * .12), i.fillStyle = "rgba(255,255,255,0.15)";
                for (let r = 0; r < 4; r++) i.fillRect(e * .26, t * (.5 + r * .09), e * .48, t * .04)
            },
            circuit: N(i => {
                let e = I(t => D(t, 14, 20, 72, 60, 4));
                L(i, e, "#2a6a3a", 20, 80), i.strokeStyle = "#c9a25a", i.lineWidth = 2;
                for (let t = 0; t < 5; t++) i.beginPath(), i.moveTo(20, 30 + t * 11), i.lineTo(46, 30 + t * 11), i.lineTo(52, 36 + t * 11), i.lineTo(80, 36 + t * 11), i.stroke();
                i.fillStyle = "#1a1c1e", i.fillRect(38, 38, 22, 22), i.fillStyle = "#c8ccd0";
                for (let t = 0; t < 4; t++) i.fillRect(34, 40 + t * 5, 4, 2), i.fillRect(60, 40 + t * 5, 4, 2)
            }),
            wire: N(i => {
                let e = I(t => t.ellipse(50, 50, 34, 34, 0, 0, 7));
                L(i, e, "#b8642a", 16, 84), i.strokeStyle = "rgba(0,0,0,0.3)";
                for (let t = 0; t < 6; t++) i.beginPath(), i.ellipse(50, 50, 30 - t * 3, 30 - t * 3, 0, 0, 7), i.stroke();
                i.fillStyle = "#3a3a3a", i.beginPath(), i.arc(50, 50, 10, 0, 7), i.fill()
            }),
            scrap: N(i => {
                let e = I(t => {
                    t.moveTo(14, 60), t.lineTo(30, 24), t.lineTo(54, 34), t.lineTo(64, 18), t.lineTo(88, 40), t.lineTo(80, 72), t.lineTo(52, 84), t.lineTo(24, 80), t.closePath()
                });
                L(i, e, "#7a7e84", 18, 84), i.fillStyle = "rgba(140,70,30,0.45)", i.beginPath(), i.ellipse(44, 62, 14, 8, .4, 0, 7), i.fill(), i.fillStyle = oe;
                for (let [t, a] of [
                        [36, 44],
                        [66, 48],
                        [56, 70]
                    ]) i.beginPath(), i.arc(t, a, 3, 0, 7), i.fill()
            }),
            tape: N(i => {
                let e = I(t => t.ellipse(50, 52, 34, 30, 0, 0, 7));
                L(i, e, "#9aa0a6", 22, 82), i.fillStyle = "#3a3c3e", i.beginPath(), i.ellipse(50, 52, 16, 14, 0, 0, 7), i.fill(), i.strokeStyle = oe, i.stroke(), i.fillStyle = "#9aa0a6", i.fillRect(70, 60, 22, 10)
            }),
            screws: N(i => {
                for (let [e, t, a] of [
                        [32, 40, -.6],
                        [56, 34, .3],
                        [46, 64, -.1],
                        [70, 62, .9]
                    ]) {
                    i.save(), i.translate(e, t), i.rotate(a);
                    let r = I(s => {
                        s.moveTo(-3, -12), s.lineTo(3, -12), s.lineTo(3, 12), s.lineTo(0, 18), s.lineTo(-3, 12), s.closePath()
                    });
                    L(i, r, "#b8bcc0", -12, 18, 1.4);
                    let o = I(s => s.ellipse(0, -14, 8, 4, 0, 0, 7));
                    L(i, o, "#c8ccd0", -18, -10, 1.4), i.restore()
                }
            }),
            cloth: N(i => {
                for (let e = 0; e < 3; e++) {
                    let t = I(a => D(a, 16 + e * 4, 58 - e * 16, 68 - e * 8, 22, 6));
                    L(i, t, ["#5a6a8a", "#8a5a4a", "#c8c0a8"][e], 58 - e * 16, 80 - e * 16, 1.6)
                }
            }),
            rope: N(i => {
                i.lineWidth = 9, i.strokeStyle = oe;
                for (let e = 0; e < 2; e++) i.beginPath(), i.ellipse(50, 52, 30 - e * 12, 26 - e * 10, 0, 0, 7), i.stroke();
                i.lineWidth = 6, i.strokeStyle = "#c8a86a";
                for (let e = 0; e < 2; e++) i.beginPath(), i.ellipse(50, 52, 30 - e * 12, 26 - e * 10, 0, 0, 7), i.stroke();
                i.setLineDash([3, 4]), i.lineWidth = 2, i.strokeStyle = "rgba(0,0,0,0.35)", i.beginPath(), i.ellipse(50, 52, 30, 26, 0, 0, 7), i.stroke(), i.setLineDash([])
            }),
            gunparts: N(i => {
                i.strokeStyle = "#9aa0a6", i.lineWidth = 4, i.beginPath();
                for (let a = 0; a < 7; a++) i.lineTo(18 + a * 6, 30 + (a % 2 ? -8 : 8));
                i.stroke();
                let e = I(a => D(a, 40, 50, 46, 16, 4));
                L(i, e, "#4a4e54", 50, 66);
                let t = I(a => D(a, 20, 70, 30, 8, 3));
                L(i, t, "#7a7e84", 70, 78, 1.4), i.fillStyle = "#c9a25a", i.beginPath(), i.arc(70, 30, 8, 0, 7), i.fill(), i.strokeStyle = oe, i.lineWidth = 2, i.stroke()
            }),
            solvent: N(i => {
                let e = I(t => D(t, 28, 26, 44, 62, 6));
                L(i, e, "#3a5a8a", 26, 88), i.fillStyle = "#2a2c2e", i.fillRect(42, 12, 16, 14), i.fillStyle = "#e8e4da", i.fillRect(32, 44, 36, 24), i.fillStyle = "#c8302a", i.fillRect(36, 50, 28, 4)
            }),
            fuel: N(i => {
                let e = I(a => {
                    a.moveTo(18, 26), a.lineTo(64, 26), a.lineTo(82, 40), a.lineTo(82, 90), a.lineTo(18, 90), a.closePath()
                });
                L(i, e, "#b8302a", 26, 90), i.strokeStyle = oe, i.lineWidth = 6, i.beginPath(), i.moveTo(26, 26), i.lineTo(26, 12), i.lineTo(52, 12), i.lineTo(52, 26), i.stroke();
                let t = I(a => D(a, 66, 16, 10, 16, 2));
                L(i, t, "#2a2c2e", 16, 32), i.strokeStyle = "rgba(0,0,0,0.3)", i.lineWidth = 3, i.beginPath(), i.moveTo(24, 46), i.lineTo(76, 82), i.moveTo(76, 46), i.lineTo(24, 82), i.stroke()
            }),
            toolbox: (i, e, t) => {
                let a = I(r => D(r, e * .06, t * .34, e * .88, t * .56, 5));
                L(i, a, "#c8302a", t * .34, t * .9), i.strokeStyle = oe, i.lineWidth = 4, i.beginPath(), i.moveTo(e * .36, t * .34), i.lineTo(e * .36, t * .14), i.lineTo(e * .64, t * .14), i.lineTo(e * .64, t * .34), i.stroke(), i.fillStyle = "rgba(0,0,0,0.3)", i.fillRect(e * .06, t * .52, e * .88, 3), i.fillStyle = "#c8ccd0", i.fillRect(e * .46, t * .46, e * .08, t * .12)
            },
            repairkit: N(i => {
                let e = I(t => D(t, 14, 30, 72, 50, 6));
                L(i, e, "#4a5a32", 30, 80), i.save(), i.translate(50, 55), i.rotate(-.7), i.fillStyle = "#c8ccd0", i.fillRect(-24, -4, 40, 8), i.beginPath(), i.arc(18, 0, 9, 0, 7), i.fill(), i.fillStyle = "#4a5a32", i.fillRect(16, -3, 12, 6), i.restore()
            }),
            lockpick: N(i => {
                i.strokeStyle = oe, i.lineWidth = 6, i.beginPath(), i.moveTo(20, 80), i.lineTo(70, 30), i.lineTo(80, 30), i.moveTo(30, 86), i.lineTo(80, 50), i.stroke(), i.strokeStyle = "#c8ccd0", i.lineWidth = 3, i.beginPath(), i.moveTo(20, 80), i.lineTo(70, 30), i.lineTo(80, 30), i.moveTo(30, 86), i.lineTo(80, 50), i.stroke();
                let e = I(t => D(t, 12, 72, 20, 20, 4));
                L(i, e, "#2a2c2e", 72, 92)
            }),
            flare: N(i => {
                i.save(), i.translate(50, 54), i.rotate(-.6);
                let e = I(t => D(t, -12, -38, 24, 76, 6));
                L(i, e, "#c8302a", -38, 38), i.fillStyle = "#2a2c2e", i.fillRect(-12, -38, 24, 12), i.fillStyle = "#e8e4da", i.fillRect(-12, -6, 24, 10), i.restore(), i.fillStyle = "rgba(255,90,60,0.5)", i.beginPath(), i.arc(30, 22, 10, 0, 7), i.fill()
            }),
            key: N((i, e) => {
                let t = I(a => {
                    a.arc(30, 50, 18, 0, 7), a.moveTo(46, 46), a.lineTo(88, 46), a.lineTo(88, 60), a.lineTo(80, 60), a.lineTo(80, 54), a.lineTo(72, 54), a.lineTo(72, 62), a.lineTo(64, 62), a.lineTo(64, 54), a.lineTo(46, 54), a.closePath()
                });
                L(i, t, "#c8a04a", 32, 68), i.fillStyle = e, i.beginPath(), i.arc(30, 50, 8, 0, 7), i.fill()
            }),
            keycard: N((i, e) => {
                let t = I(a => D(a, 12, 26, 76, 50, 6));
                L(i, t, "#e8e4da", 26, 76), i.fillStyle = e, i.fillRect(12, 26, 76, 14), i.fillStyle = "#c9a25a", i.fillRect(22, 48, 18, 14), i.fillStyle = "rgba(0,0,0,0.45)", i.fillRect(48, 50, 32, 4), i.fillRect(48, 58, 24, 4)
            }),
            note: N(i => {
                i.save(), i.translate(50, 50), i.rotate(.12);
                let e = I(t => D(t, -30, -36, 60, 72, 2));
                L(i, e, "#ece4c8", -36, 36), i.fillStyle = "rgba(40,40,60,0.7)", i.font = "700 16px 'Share Tech Mono', monospace", i.textAlign = "center", i.fillText("17-04", 0, -6), i.fillText("-92", 0, 14), i.restore()
            }),
            seeds: N((i, e) => {
                let t = I(a => D(a, 22, 14, 56, 74, 4));
                L(i, t, "#e8dcb8", 14, 88), i.fillStyle = e, i.beginPath(), i.arc(50, 46, 16, 0, 7), i.fill(), i.strokeStyle = oe, i.lineWidth = 2, i.stroke(), i.fillStyle = "#5a8a3a", i.beginPath(), i.ellipse(56, 30, 8, 4, -.6, 0, 7), i.fill(), i.fillStyle = "rgba(0,0,0,0.35)", i.fillRect(30, 70, 40, 4), i.fillRect(34, 78, 32, 3)
            }),
            tomato: N(i => {
                let e = I(t => t.ellipse(50, 56, 32, 28, 0, 0, 7));
                L(i, e, "#d8302a", 28, 84), i.fillStyle = "#4a8a2a";
                for (let t = 0; t < 5; t++) i.save(), i.translate(50, 30), i.rotate(t / 5 * Math.PI * 2), i.beginPath(), i.ellipse(0, -8, 3, 9, 0, 0, 7), i.fill(), i.restore();
                i.fillStyle = "rgba(255,255,255,0.35)", i.beginPath(), i.ellipse(36, 48, 6, 10, .5, 0, 7), i.fill()
            }),
            potato: N(i => {
                let e = I(t => {
                    t.moveTo(20, 50), t.bezierCurveTo(18, 24, 70, 18, 82, 42), t.bezierCurveTo(90, 66, 50, 86, 30, 76), t.bezierCurveTo(22, 70, 20, 62, 20, 50), t.closePath()
                });
                L(i, e, "#b08a56", 20, 84), i.fillStyle = "rgba(60,40,20,0.5)";
                for (let [t, a] of [
                        [38, 42],
                        [60, 38],
                        [52, 62],
                        [70, 54]
                    ]) i.beginPath(), i.arc(t, a, 2.5, 0, 7), i.fill()
            }),
            leaf: N((i, e) => {
                for (let t = 0; t < 5; t++) {
                    i.save(), i.translate(50, 78), i.rotate(-.9 + t * .45);
                    let a = I(r => {
                        r.moveTo(0, 0), r.quadraticCurveTo(12, -30, 0, -62), r.quadraticCurveTo(-12, -30, 0, 0)
                    });
                    L(i, a, e, -62, 0, 1.6), i.strokeStyle = "rgba(0,0,0,0.25)", i.beginPath(), i.moveTo(0, 0), i.lineTo(0, -58), i.stroke(), i.restore()
                }
            }),
            brick: N((i, e) => {
                let t = I(a => D(a, 14, 28, 72, 46, 6));
                L(i, t, "#4a4a3e", 28, 74), i.fillStyle = e, i.globalAlpha = .6, i.fillRect(14, 42, 72, 18), i.globalAlpha = 1, i.strokeStyle = "#c8b070", i.lineWidth = 3, i.beginPath(), i.moveTo(14, 36), i.lineTo(86, 66), i.stroke(), Pe(i, 20, 34, 80, 34, .3)
            }),
            flower: N((i, e) => {
                i.strokeStyle = "#3a6a2a", i.lineWidth = 4, i.beginPath(), i.moveTo(50, 90), i.quadraticCurveTo(46, 66, 50, 46), i.stroke();
                for (let t = 0; t < 6; t++) {
                    i.save(), i.translate(50, 38), i.rotate(t / 6 * Math.PI * 2);
                    let a = I(r => r.ellipse(0, -14, 8, 15, 0, 0, 7));
                    L(i, a, e, -29, 0, 1.4), i.restore()
                }
                i.fillStyle = "#f2e08a", i.beginPath(), i.arc(50, 38, 7, 0, 7), i.fill()
            }),
            resin: N((i, e) => {
                let t = I(r => D(r, 26, 28, 48, 60, 8));
                i.save(), i.translate(2.5, 3.5), i.fillStyle = "rgba(0,0,0,0.35)", i.fill(t), i.restore(), i.fillStyle = "rgba(200,200,220,0.3)", i.fill(t), i.fillStyle = e, i.globalAlpha = .85, i.fillRect(28, 46, 44, 40), i.globalAlpha = 1, i.strokeStyle = oe, i.lineWidth = 2, i.stroke(t);
                let a = I(r => D(r, 24, 16, 52, 14, 3));
                L(i, a, "#2a2c2e", 16, 30), Pe(i, 32, 34, 32, 82, .5, 2.5)
            }),
            fertiliser: (i, e, t) => {
                let a = I(r => {
                    r.moveTo(e * .18, t * .1), r.lineTo(e * .82, t * .1), r.lineTo(e * .88, t * .92), r.lineTo(e * .12, t * .92), r.closePath()
                });
                L(i, a, "#e8dcb8", t * .1, t * .92), i.fillStyle = "#3a7a3a", i.fillRect(e * .18, t * .32, e * .64, t * .3), i.fillStyle = "#e8dcb8", i.beginPath(), i.ellipse(e * .5, t * .47, e * .12, t * .08, 0, 0, 7), i.fill()
            }
        },
        go = new Map,
        ha = new Map;

    function _s(i, e, t, a = 2) {
        let r = i + ":" + e + "x" + t + "@" + a,
            o = go.get(r);
        if (o) return o;
        o = document.createElement("canvas"), o.width = Math.round(e * a), o.height = Math.round(t * a);
        let s = o.getContext("2d");
        s.scale(a, a);
        let d = C(i),
            n = fo[d.icon] ?? fo.scrap;
        try {
            n(s, e, t, d.tint ?? ae[d.rarity])
        } catch (l) {
            console.warn("icon failed", i, l)
        }
        return go.set(r, o), o
    }

    function Se(i, e, t) {
        let a = i + ":" + e + "x" + t,
            r = ha.get(a);
        return r || (r = _s(i, e, t, 2).toDataURL("image/png"), ha.set(a, r), r)
    }

    function $e(i, e, t) {
        let a = C(i.id);
        if (!a.weapon || !i.att || !Object.keys(i.att).length || a.icon === "wraith") return Se(i.id, e, t);
        let r = i.id + JSON.stringify(i.att) + e + "x" + t,
            o = ha.get(r);
        if (o) return o;
        let s = document.createElement("canvas");
        s.width = e * 2, s.height = t * 2;
        let d = s.getContext("2d");
        d.scale(2, 2);
        let n = {
            ...yo[a.icon]
        };
        return i.att.optic === "att_scope" ? (n.scope = !0, n.dot = !1) : i.att.optic === "att_reddot" && (n.dot = !0, n.scope = !1), i.att.muzzle && (n.supp = !0), i.att.mag === "att_extmag" && n.mag === "straight" && (n.mag = "curved"), bo(d, e, t, n), i.att.tac && (d.fillStyle = i.att.tac === "att_laser" ? "#ff3b2f" : "#fff3c0", d.fillRect(e * .72, t * .62, 6, 3)), o = s.toDataURL("image/png"), ha.set(r, o), o
    }
    var ua = class {
        constructor(e, t, a, r, o) {
            v(this, "hd", t);
            v(this, "root");
            v(this, "n", {});
            v(this, "prev", {});
            v(this, "mini");
            v(this, "miniT", 0);
            v(this, "dmgEls", []);
            v(this, "qs", []);
            v(this, "objective", "");
            this.root = e;
            let s = pe(88, 88),
                d = s.getContext("2d"),
                n = ye.find(k => k.id === r.outfit) ?? ye[0];
            ro(d, 88, 88, _t[r.skin], It[r.hair], n.jacket, n.accent, r.body === "f");
            let l = h("div", {
                    class: "vitals"
                }, h("div", {
                    class: "name"
                }, a), this.n.hp = h("div", {
                    class: "hpbar"
                }, h("b"), h("i")), this.n.stats = h("div", {
                    class: "stat-row"
                })),
                c = h("button", {
                    class: "ibtn hbtn",
                    "aria-label": "Pause",
                    style: "width:34px;height:34px",
                    onTap: () => this.hd.pause()
                }, E("pause"));
            e.appendChild(h("div", {
                class: "tl"
            }, h("div", {
                class: "portrait"
            }, s, h("span", {
                class: "lv"
            }, String(o))), l, c));
            let u = h("div", {
                    class: "strip"
                }),
                m = ["N", "15", "30", "NE", "60", "75", "E", "105", "120", "SE", "150", "165", "S", "195", "210", "SW", "240", "255", "W", "285", "300", "NW", "330", "345"];
            for (let k = 0; k < 3; k++)
                for (let M of m) u.appendChild(h("span", {
                    class: /^[NESW]+$/.test(M) ? "card" : ""
                }, /^\d+$/.test(M) ? "\xB7" : M));
            this.n.strip = u, e.appendChild(h("div", {
                class: "compass"
            }, u)), this.n.obj = h("div", {
                class: "objective hidden"
            }), e.appendChild(this.n.obj), this.mini = pe(208, 208);
            let p = h("div", {
                class: "minimap",
                role: "button",
                "aria-label": "Open map",
                onTap: () => this.hd.openMap()
            }, this.mini);
            this.n.clock = h("div", {
                class: "t"
            }), this.n.raid = h("div", {
                class: "raid"
            }), this.n.zone = h("div", {
                class: "zone-name"
            }), this.n.weather = h("div", {
                class: "zone-name"
            }), e.appendChild(h("div", {
                class: "tr"
            }, h("div", {
                class: "clockbox"
            }, this.n.clock, this.n.raid, this.n.zone, this.n.weather), p)), this.n.squad = h("div", {
                class: "squad-list"
            }), e.appendChild(this.n.squad), this.n.wimg = h("img", {
                alt: ""
            }), this.n.ammo = h("div", {
                class: "ammo"
            }), this.n.wmeta = h("div", {
                class: "meta"
            });
            let f = h("div", {
                    class: "wp",
                    role: "button",
                    "aria-label": "Switch weapon",
                    onTap: () => this.hd.swapWeapon()
                }, this.n.wimg, this.n.ammo, this.n.wmeta),
                b = h("div", {
                    class: "quick"
                });
            for (let k = 0; k < 4; k++) {
                let M = h("button", {
                    class: "qs empty",
                    type: "button",
                    "aria-label": `Quick slot ${k+1}`,
                    onTap: () => this.hd.quick(k)
                });
                b.appendChild(M), this.qs.push(M)
            }
            e.appendChild(h("div", {
                class: "weapon-panel"
            }, f, b)), this.n.prog = h("div", {
                class: "progress-ring hidden"
            }, h("div", {
                class: "lbl"
            }), h("div", {
                class: "bar"
            }, h("i"))), e.appendChild(this.n.prog), this.n.extract = h("div", {
                class: "extract-banner hidden"
            }), e.appendChild(this.n.extract), this.n.event = h("div", {
                class: "event-card hidden"
            }), e.appendChild(this.n.event);
            let x = h("div", {
                class: "dmg-dir"
            });
            for (let k = 0; k < 4; k++) {
                let M = h("i");
                x.appendChild(M), this.dmgEls.push(M)
            }
            e.appendChild(x), this.n.xp = h("div", {
                class: "xp-pop"
            }), e.appendChild(this.n.xp)
        }
        set(e, t, a) {
            this.prev[e] !== t && (this.prev[e] = t, a())
        }
        damage(e, t = 0) {
            let a = this.dmgEls.shift();
            this.dmgEls.push(a), a.style.transform = `rotate(${e-t+Math.PI/2}rad)`, a.style.transition = "none", a.style.opacity = "1", requestAnimationFrame(() => {
                a.style.transition = "opacity 0.9s", a.style.opacity = "0"
            })
        }
        xp(e, t) {
            let a = h("div", null, `+${e} XP  ${t}`);
            for (this.n.xp.appendChild(a); this.n.xp.children.length > 5;) this.n.xp.removeChild(this.n.xp.firstChild);
            setTimeout(() => a.remove(), 1700)
        }
        event(e, t) {
            let a = this.n.event;
            a.innerHTML = "", a.appendChild(h("b", null, e)), a.appendChild(h("span", null, t)), a.classList.remove("hidden"), a.style.animation = "none", a.offsetWidth, a.style.animation = "", clearTimeout(a._t), a._t = window.setTimeout(() => a.classList.add("hidden"), 5200)
        }
        update(e, t, a, r, o) {
            let s = Math.max(0, a.hp);
            this.set("hp", s.toFixed(0), () => {
                this.n.hp.children[1].style.width = s + "%", this.n.hp.children[0].style.width = s + "%"
            });
            let d = [Math.round(a.hunger), Math.round(a.thirst), Math.round(a.stamina / 5), a.bleed, Math.round(a.infection), a.boost > 0 ? 1 : 0, a.light ? 1 : 0].join(",");
            this.set("stats", d, () => {
                let S = this.n.stats;
                S.innerHTML = "";
                let T = (A, _, H = "") => S.appendChild(h("div", {
                    class: "stat " + H
                }, E(A), _));
                T("food", String(Math.round(a.hunger)), a.hunger < 15 ? "low" : a.hunger < 30 ? "warn" : ""), T("drop", String(Math.round(a.thirst)), a.thirst < 15 ? "low" : a.thirst < 30 ? "warn" : ""), T("bolt", String(Math.round(a.stamina)), a.stamina < 20 ? "warn" : ""), a.bleed > 0 && T("blood", "\xD7" + a.bleed, "st-b low"), a.infection > 1 && T("bio", Math.round(a.infection) + "%", "st-i " + (a.infection > 60 ? "low" : "warn"))
            });
            let n = ((a.angle * 180 / Math.PI + 90) % 360 + 360) % 360;
            this.set("cmp", n.toFixed(0), () => {
                let S = n / 15 * 30 + 720 - 110 + 15;
                this.n.strip.style.transform = `translateX(${-S}px)`
            }), this.set("obj", this.objective, () => {
                this.n.obj.textContent = this.objective, this.n.obj.classList.toggle("hidden", !this.objective)
            });
            let l = (t.clock % 24 + 24) % 24,
                c = Math.floor(l),
                u = Math.floor((l - c) * 60),
                m = t.isNight();
            this.set("clock", `${c}:${u}:${m}`, () => {
                this.n.clock.innerHTML = "", this.n.clock.appendChild(E(m ? "moon" : "sun")), this.n.clock.appendChild(document.createTextNode(`${String(c).padStart(2,"0")}:${String(u-u%5).padStart(2,"0")}`))
            });
            let p = Math.max(0, t.raidLength - t.time);
            this.set("raid", String(Math.floor(p)), () => {
                this.n.raid.textContent = "RAID " + Ct(p), this.n.raid.classList.toggle("late", p < 180)
            });
            let f = Qi(t.map, a.x, a.y);
            this.set("zone", f.name, () => this.n.zone.textContent = f.name), this.set("weather", t.weather, () => this.n.weather.textContent = Vr[t.weather]);
            let b = a.lo.equip[a.active],
                x = b ? `${b.uid}:${b.ammo}:${Nt(a.lo,C(b.id).weapon?.cal??"a9")}:${b.mode}:${Math.round((b.cond??1)*20)}:${a.jammed}` : "none";
            this.set("weapon", x, () => {
                if (!b) {
                    this.n.wimg.src = Se("m_knife", 64, 26), this.n.ammo.textContent = "Fists", this.n.wmeta.textContent = "";
                    return
                }
                let S = C(b.id);
                if (this.n.wimg.src = $e(b, S.weapon ? 64 : 40, 26), this.n.wmeta.innerHTML = "", S.weapon) {
                    let T = ge(b),
                        A = Nt(a.lo, S.weapon.cal);
                    this.n.ammo.innerHTML = "", this.n.ammo.className = "ammo" + ((b.ammo ?? 0) === 0 ? " empty" : ""), this.n.ammo.appendChild(document.createTextNode(String(b.ammo ?? 0))), this.n.ammo.appendChild(h("small", null, " / " + A));
                    let _ = b.cond ?? 1;
                    this.n.wmeta.appendChild(h("div", {
                        style: `color:${ae[S.rarity]}`
                    }, S.name)), this.n.wmeta.appendChild(h("div", null, a.jammed ? "JAMMED" : T.modes[b.mode ?? 0]?.toUpperCase() ?? "SEMI")), this.n.wmeta.appendChild(h("div", {
                        class: "cbar"
                    }, h("i", {
                        style: `width:${_*100}%;background:${_>.6?"#7fbf5a":_>.3?"#c8ff2e":"#d9443a"}`
                    })))
                } else this.n.ammo.className = "ammo", this.n.ammo.textContent = "\u2014", this.n.wmeta.appendChild(h("div", null, S.name)), this.n.wmeta.appendChild(h("div", null, "MELEE"))
            });
            for (let S = 0; S < 4; S++) {
                let T = a.lo.quick[S],
                    A = T ? ce(a.lo, T) : null,
                    _ = 0;
                if (A) {
                    for (let B of [a.lo.pockets, a.lo.bag, a.lo.secure])
                        if (B)
                            for (let se of B.items) se.item.id === A.item.id && (_ += se.item.qty)
                }
                let H = A ? A.item.id + ":" + _ : "x";
                this.set("q" + S, H, () => {
                    let B = this.qs[S];
                    B.innerHTML = "", B.appendChild(h("span", {
                        class: "k"
                    }, String(S + 1))), A ? (B.appendChild(h("img", {
                        src: Se(A.item.id, 34, 34),
                        alt: ""
                    })), B.appendChild(h("span", {
                        class: "n"
                    }, String(_))), B.classList.remove("empty"), B.setAttribute("aria-label", `Use ${C(A.item.id).name}`)) : B.classList.add("empty")
                })
            }
            let k = "",
                M = -1;
            if (a.searching) k = a.searching.kind === "revive" ? "Reviving" : "Searching", M = a.searching.t / a.searching.total;
            else if (a.useT > 0 && a.useUid) {
                let S = ce(a.lo, a.useUid);
                k = S ? "Using " + C(S.item.id).name : "Using", M = 1 - a.useT / a.useTotal
            } else a.reloadT > 0 && (k = "Reloading", M = 1 - a.reloadT / a.reloadTotal);
            this.set("prog", k + ":" + Math.round(M * 40), () => {
                this.n.prog.classList.toggle("hidden", M < 0), this.n.prog.children[0].textContent = k, this.n.prog.children[1].children[0].style.width = Math.max(0, M) * 100 + "%"
            });
            let R = a.extractId && a.extractT > 0 ? Math.max(0, t.extractTime(a) - a.extractT) : -1,
                w = a.extractId ? t.map.extracts.find(S => S.id === a.extractId)?.name ?? "" : "";
            this.set("ex", R < 0 ? "" : w + Math.ceil(R), () => {
                this.n.extract.classList.toggle("hidden", R < 0), this.n.extract.innerHTML = "", R >= 0 && (this.n.extract.appendChild(document.createTextNode(`Extracting ${Math.ceil(R)}`)), this.n.extract.appendChild(h("small", null, w + " \u2014 hold position")))
            });
            let P = t.players.filter(S => S.id !== a.id),
                g = P.map(S => `${S.id}:${Math.round(S.hp/5)}:${S.downed}:${S.dead}:${S.extracted}:${Math.round(Math.hypot(S.x-a.x,S.y-a.y)/64)}:${Math.round(Math.atan2(S.y-a.y,S.x-a.x)*4)}`).join("|");
            if (this.set("squad", g, () => {
                    let S = this.n.squad;
                    S.innerHTML = "";
                    for (let T of P) {
                        let A = Math.atan2(T.y - a.y, T.x - a.x),
                            _ = Math.round(Math.hypot(T.x - a.x, T.y - a.y) / y),
                            H = E("play", "arrow");
                        H.style.transform = `rotate(${A}rad)`, S.appendChild(h("div", {
                            class: "mate" + (T.downed ? " down" : "")
                        }, H, h("span", null, T.name), h("div", {
                            class: "hpbar"
                        }, h("i", {
                            style: `width:${Math.max(0,T.hp)}%`
                        })), h("span", {
                            class: "dist"
                        }, T.extracted ? "OUT" : T.dead ? "KIA" : T.downed ? "DOWN" : _ + "m")))
                    }
                }), this.miniT -= e, this.miniT <= 0) {
                this.miniT = .12;
                let S = this.mini.getContext("2d");
                li(S, r, t, this.mini.width, this.mini.height, a.x, a.y, 3.6, o, !1)
            }
        }
    };

    function xo(i) {
        let e = 0,
            t = 0,
            a = i;
        for (; a && a !== W.el;) {
            e += a.offsetLeft, t += a.offsetTop;
            let r = a.offsetParent,
                o = a.parentElement;
            for (; o && o !== r;) e -= o.scrollLeft, t -= o.scrollTop, o = o.parentElement;
            r && (e -= r.scrollLeft, t -= r.scrollTop, e += r.clientLeft, t += r.clientTop), a = r
        }
        return {
            x: e,
            y: t
        }
    }
    var ci = class {
        constructor(e, t, a) {
            v(this, "root");
            v(this, "ctx");
            v(this, "act");
            v(this, "cell", 34);
            v(this, "drag", null);
            v(this, "lastTap", {
                uid: "",
                t: 0
            });
            v(this, "selected", null);
            v(this, "tapTimer", 0);
            this.root = e, this.ctx = t, this.act = a, this.view = "kit", this.destroyed = false, this.root.classList.add("inventory-ui"), this.root.style.flexDirection = "column", this.root.addEventListener("pointermove", r => this.dragMove(r)), this.root.addEventListener("pointerup", r => this.dragEnd(r)), this.root.addEventListener("pointercancel", r => this.dragEnd(r, !0)), this.root.addEventListener("lostpointercapture", r => this.dragEnd(r, !0)); this.onBlur = () => this.cancelInteraction(); window.addEventListener("blur", this.onBlur)
        }
        setCell() {
            let e = W.H;
            this.cell = 46
        }
        render() {
            if (this.destroyed) return;
            if (this.drag?.started) { this.pendingRender = true; return; }
            this.setCell();
            let {
                lo: e,
                other: t
            } = this.ctx, a = Array.from(this.root.querySelectorAll(".scroll")).map(m => m.scrollTop);
            me(this.root);
            let r = this.cell,
                o = h("div", {
                    class: "col scroll inventory-equipment",
                    style: `gap:6px;min-height:0;min-width:0;width:${r*6+8}px;max-height:100%;overflow:auto`
                });
            o.appendChild(h("div", {
                class: "sec-h"
            }, "Equipped"));
            let s = (m, p, f) => {
                let b = h("div", {
                        class: "eq-slot",
                        "data-slot": m,
                        style: `width:${p*r}px;height:${f*r}px`
                    }, h("span", {
                        class: "lbl"
                    }, ya[m])),
                    x = e.equip[m];
                return x && b.appendChild(this.itemEl(x, p, f, {
                    area: "equip",
                    slot: m
                }, !0)), b
            };
            o.appendChild(s("primary", 6, 1.15)), o.appendChild(s("secondary", 6, 1.15)), o.appendChild(h("div", {
                class: "row",
                style: "gap:6px"
            }, s("sidearm", 3, 1.15), s("melee", 3 - 6 / r, 1.15))), o.appendChild(h("div", {
                class: "row",
                style: "gap:6px"
            }, s("helmet", 2 - 4 / r, 2), s("armour", 2 - 4 / r, 2), s("backpack", 2 - 4 / r, 2)));
            let d = Vi(e);
            o.appendChild(h("div", {
                class: "row between muted",
                style: "font-size:12px;margin-top:2px"
            }, h("span", {
                class: "mono",
                style: d > vi ? "color:#ff7d95" : ""
            }, `${d.toFixed(1)} / ${vi} kg`), h("span", {
                class: "mono"
            }, `Value ${G(this.kitValue())}`)));
            let n = h("div", {
                class: "col scroll inventory-pack",
                style: "gap:6px;min-width:0;min-height:0;max-height:100%;padding-right:4px;overflow:auto"
            });
            n.appendChild(h("div", {
                class: "sec-h"
            }, "Pockets")), n.appendChild(this.gridEl(e.pockets, "pockets")), n.appendChild(h("div", {
                class: "sec-h"
            }, e.bag ? `Backpack ${e.bag.w}\xD7${e.bag.h}` : "Backpack")), e.bag ? n.appendChild(this.gridEl(e.bag, "bag")) : n.appendChild(h("div", {
                class: "empty-state",
                style: `width:${r*5}px;padding:10px`
            }, E("pack"), "No backpack equipped")), n.appendChild(h("div", {
                class: "sec-h",
                style: "color:var(--cyan)"
            }, E("shield"), `Protected ${e.secure.w}`)), n.appendChild(this.gridEl(e.secure, "secure")), n.appendChild(h("div", {
                class: "muted",
                style: "font-size:11px;max-width:220px;line-height:1.3"
            }, "Protected items survive death. 1\xD71 items only.")), n.appendChild(h("div", {
                class: "sec-h"
            }, "Quick slots"));
            let l = h("div", {
                class: "row",
                style: "gap:4px"
            });
            for (let m = 0; m < 4; m++) {
                let p = e.quick[m],
                    f = p ? this.findKit(p) : null;
                l.appendChild(h("button", {
                    class: "qs" + (f ? "" : " empty"),
                    type: "button",
                    "aria-label": `Quick slot ${m+1}`,
                    onTap: () => {
                        this.selected && this.findKit(this.selected) && C(this.findKit(this.selected).id).use ? (this.act.quick(m, this.selected), this.act.refresh()) : f && (this.act.quick(m, null), this.act.refresh())
                    }
                }, h("span", {
                    class: "k"
                }, String(m + 1)), f ? h("img", {
                    src: Se(f.id, 34, 34),
                    alt: ""
                }) : null, f ? h("span", {
                    class: "n"
                }, String(this.countKit(f.id))) : null))
            }
            n.appendChild(l), n.appendChild(h("div", {
                class: "muted",
                style: "font-size:11px;max-width:220px"
            }, "Select a consumable, then tap a slot."));
            let c = h("div", {
                class: "inventory-layout",
                style: `gap:12px;align-items:start;min-height:0;flex:1;width:100%;display:grid;grid-template-columns:${r*6+8}px minmax(0,1fr);overflow:hidden`
            }, o, n);
            const paged = !!t && W.W < 1200;
            if (!t) this.view = "kit";
            if (paged) {
                const tabs = h("div", {class:"inventory-tabs"}, ...[["kit","YOUR KIT"],["other",t.kind === "stash" ? "STASH" : "NEARBY LOOT"]].map(([id,label]) => z(label,()=>{this.view=id;this.cancelInteraction();this.render();},"small "+(this.view===id?"primary":"ghost"))));
                this.root.appendChild(tabs);
                if(this.view === "other"){o.classList.add("hidden");n.classList.add("hidden");c.style.gridTemplateColumns="minmax(0,1fr)";}
            } else if (t) c.style.gridTemplateColumns=`${r*6+8}px minmax(0,1fr) minmax(0,1.4fr)`;
            if (this.root.appendChild(c), t) {
                let m = h("div", {
                    class: "col grow other-drop inventory-other" + (paged && this.view === "kit" ? " hidden" : ""),
                    style: "gap:6px;min-height:0;height:100%"
                });
                if (m.appendChild(h("div", {
                        class: "sec-h"
                    }, t.label)), t.kind === "stash" && t.grid) {
                    let p = h("div", {
                        class: "scroll",
                        style: "min-height:0;flex:1"
                    });
                    if (p.appendChild(this.gridEl(t.grid, "stash")), t.rack !== void 0 && (t.rackSlots ?? 0) > 0) {
                        p.appendChild(h("div", {
                            class: "sec-h",
                            style: "margin-top:10px"
                        }, `Weapon rack ${t.rack.length}/${t.rackSlots}`));
                        let f = h("div", {
                            class: "rack-drop",
                            style: `display:grid;grid-template-columns:repeat(2,${r*4}px);gap:4px`
                        });
                        for (let b of t.rack) {
                            let x = h("div", {
                                class: "eq-slot",
                                style: `width:${r*4}px;height:${r*1.1}px`
                            });
                            x.appendChild(this.itemEl(b, 4, 1.1, {
                                area: "rack"
                            }, !0)), f.appendChild(x)
                        }
                        for (let b = t.rack.length; b < (t.rackSlots ?? 0); b++) f.appendChild(h("div", {
                            class: "eq-slot",
                            "data-rack": "1",
                            style: `width:${r*4}px;height:${r*1.1}px`
                        }, h("span", {
                            class: "lbl"
                        }, "Empty mount")));
                        p.appendChild(f)
                    }
                    m.appendChild(p), t.extra && m.appendChild(t.extra)
                } else if (t.kind === "loot") {
                    let p = t.items ?? [],
                        f = h("div", {
                            class: "scroll loot-list",
                            style: "flex:1;min-height:0;display:flex;flex-wrap:wrap;align-content:flex-start;gap:4px"
                        });
                    p.length || f.appendChild(h("div", {
                        class: "empty-state",
                        style: "width:100%"
                    }, E("pack"), "Empty. Drag items here to leave them."));
                    for (let b of p) {
                        let x = C(b.id),
                            k = Math.min(x.w, 4),
                            M = Math.min(x.h, 2),
                            R = h("div", {
                                style: `position:relative;width:${k*r}px;height:${M*r}px`
                            });
                        R.appendChild(this.itemEl(b, k, M, {
                            area: "other"
                        }, !0)), f.appendChild(R)
                    }
                    m.appendChild(f), p.length && this.act.takeAll && m.appendChild(h("div", {
                        class: "row end"
                    }, z([E("check"), "Take all"], () => this.act.takeAll(), "primary small")))
                }
                c.appendChild(m)
            }
            this.root.querySelectorAll(".scroll").forEach((m, p) => {
                a[p] !== void 0 && (m.scrollTop = a[p])
            })
        }
        kitValue() {
            let e = 0,
                t = this.ctx.lo;
            for (let a of Ce) t.equip[a] && (e += le(t.equip[a]));
            for (let a of [t.pockets, t.bag, t.secure])
                if (a)
                    for (let r of a.items) e += le(r.item);
            return e
        }
        findKit(e) {
            let t = this.ctx.lo;
            for (let a of [t.pockets, t.bag, t.secure])
                if (a) {
                    for (let r of a.items)
                        if (r.item.uid === e) return r.item
                } return null
        }
        countKit(e) {
            let t = 0,
                a = this.ctx.lo;
            for (let r of [a.pockets, a.bag, a.secure])
                if (r)
                    for (let o of r.items) o.item.id === e && (t += o.item.qty);
            return t
        }
        gridEl(e, t) {
            let a = this.cell,
                r = h("div", {
                    class: "grid" + (e.smallOnly ? " secure" : ""),
                    "data-grid": t,
                    style: `width:${e.w*a}px;height:${e.h*a}px;background-size:${a}px ${a}px`
                });
            for (let o of e.items) {
                let s = C(o.item.id),
                    d = this.itemEl(o.item, s.w, s.h, {
                        area: "grid",
                        grid: t
                    });
                d.style.left = o.x * a + 1 + "px", d.style.top = o.y * a + 1 + "px", r.appendChild(d)
            }
            return r
        }
        itemEl(e, t, a, r, o = !1) {
            let s = this.cell,
                d = C(e.id),
                n = t * s - 2,
                l = a * s - 2,
                c = h("div", {
                    class: "item r-" + d.rarity + (this.selected === e.uid ? " sel" : "") + (this.ctx.newUids?.has(e.uid) ? " new" : ""),
                    style: `--rc:${ae[d.rarity]};${o?"position:absolute;inset:0;":`width:${n}px;height:${l}px;`}`,
                    role: "button",
                    "aria-label": `${d.name}${e.qty>1?" \xD7"+e.qty:""}`,
                    tabindex: "0"
                }),
                u = d.w > t ? t : d.w;
            if (c.appendChild(h("img", {
                    src: $e(e, Math.max(20, Math.round(u * s)), Math.max(20, Math.round(Math.min(d.h, a) * s))),
                    alt: "",
                    draggable: "false"
                })), e.qty > 1 && c.appendChild(h("span", {
                    class: "q"
                }, String(e.qty))), d.weapon && c.appendChild(h("span", {
                    class: "q",
                    style: "right:3px;top:1px;bottom:auto;font-size:10px;color:var(--dim)"
                }, `${e.ammo??0}/${ge(e).mag}`)), d.weapon || d.armour || d.melee) {
                let p = e.cond ?? 1;
                c.appendChild(h("div", {
                    class: "cond"
                }, h("i", {
                    style: `width:${p*100}%;background:${p>.6?"#7fbf5a":p>.3?"#c8ff2e":"#d9443a"}`
                })))
            }
            this.ctx.insured?.includes(e.uid) && c.appendChild(h("span", {
                class: "ins",
                title: "Insured"
            }, E("shield")));
            let m = this.ctx.lo.quick.indexOf(e.uid);
            return m >= 0 && c.appendChild(h("span", {
                class: "qk"
            }, String(m + 1))), c.addEventListener("pointerdown", p => this.dragStart(p, e, r, c, d.w, d.h)), c.addEventListener("keydown",p=>{if(p.key==="Enter"||p.key===" "){p.preventDefault();this.selected=e.uid;this.inspect(e,r);}}), c
        }
        dragStart(e, t, a, r, o, s) {
            if (this.destroyed || (e.button !== undefined && e.button !== 0)) return;
            this.cancelInteraction(); clearTimeout(this.tapTimer);
            e.preventDefault();e.stopPropagation();
            let d = st(e.clientX, e.clientY),
                n = xo(r),
                l = this.cell,
                c = Math.max(0, Math.min(o - 1, Math.floor((d.x - n.x) / l))),
                u = Math.max(0, Math.min(s - 1, Math.floor((d.y - n.y) / l)));
            try {
                this.root.setPointerCapture(e.pointerId)
            } catch {}
            let m = h("div", {
                class: "ghost-item item",
                style: `--rc:${ae[C(t.id).rarity]};width:${o*l-2}px;height:${s*l-2}px`
            }, h("img", {
                src: $e(t, o * l, s * l),
                alt: ""
            }));
            this.drag = {
                uid: t.uid,
                from: a,
                ghost: m,
                w: o,
                h: s,
                gx: c,
                gy: u,
                started: !1,
                sx: d.x,
                sy: d.y,
                pid: e.pointerId,
                srcEl: r,
                hl: null,
                target: null
            }
        }
        dragMove(e) {
            let t = this.drag;
            if (!t || e.pointerId !== t.pid) return;
            let a = st(e.clientX, e.clientY);
            if (!t.started) {
                if (Math.hypot(a.x - t.sx, a.y - t.sy) < 8) return;
                t.started = !0, t.srcEl.classList.add("dragging"), W.el.appendChild(t.ghost), F.play("zip")
            }
            let r = this.cell;
            t.ghost.style.left = a.x - t.gx * r - r / 2 + "px", t.ghost.style.top = a.y - t.gy * r - r / 2 + "px", t.ghost.style.display = "none";
            let o = document.elementFromPoint(e.clientX, e.clientY);
            if (t.ghost.style.display = "", t.hl && (t.hl.remove(), t.hl = null), this.root.querySelectorAll(".eq-slot.target").forEach(u => u.classList.remove("target")), t.target = null, !o) return;
            let s = o.closest(".grid"),
                d = o.closest(".eq-slot[data-slot]"),
                n = o.closest(".rack-drop"),
                l = o.closest(".other-drop"),
                c = this.lookup(t.uid);
            if (c)
                if (s) {
                    let u = s.dataset.grid,
                        m = this.gridById(u);
                    if (!m) return;
                    let p = xo(s),
                        f = Math.floor((a.x - p.x) / r) - t.gx,
                        b = Math.floor((a.y - p.y) / r) - t.gy,
                        x = C(c.id),
                        k = mt(m, f, b, x.w, x.h, t.uid) && !(m.smallOnly && (x.w > 1 || x.h > 1)),
                        M = m.items.find(w => w.item.uid !== t.uid && w.item.id === c.id && f + t.gx >= w.x && f + t.gx < w.x + x.w && b + t.gy >= w.y && b + t.gy < w.y + x.h);
                    M && x.stack > 1 && M.item.qty < x.stack && (k = !0);
                    let R = h("div", {
                        class: k ? "drop-ok" : "drop-bad",
                        style: `left:${Math.max(0,f)*r}px;top:${Math.max(0,b)*r}px;width:${x.w*r}px;height:${x.h*r}px`
                    });
                    s.appendChild(R), t.hl = R, k && (t.target = M ? {
                        kind: "grid",
                        grid: u,
                        x: f + t.gx,
                        y: b + t.gy
                    } : {
                        kind: "grid",
                        grid: u,
                        x: f,
                        y: b
                    })
                } else if (d) {
                let u = d.dataset.slot;
                ze(u, c) && (d.classList.add("target"), t.target = {
                    kind: "equip",
                    slot: u
                })
            } else n ? C(c.id).weapon && (t.target = {
                kind: "rack"
            }) : l && this.ctx.other?.kind === "loot" && (t.target = {
                kind: "other"
            })
        }
        dragEnd(e, t = !1) {
            let a = this.drag;
            if (!a || e.pointerId !== a.pid) return;
            if (this.drag = null, a.ghost.remove(), a.srcEl.classList.remove("dragging"), a.hl && a.hl.remove(), this.root.hasPointerCapture?.(a.pid) && this.root.releasePointerCapture(a.pid), !a.started) {
                t || (this.root.querySelectorAll(".item.sel").forEach(o => o.classList.remove("sel")), a.srcEl.classList.add("sel"), this.tap(a.uid, a.from));
                return
            }
            if (t || !a.target) {
                this.render();
                return
            }
            F.play("pickup");
            let r = a.target;
            if (a.from.area === "other") {
                if (r.kind === "other") return this.render();
                this.act.take?.(a.uid, r)
            } else r.kind === "other" ? this.act.put?.(a.uid) : this.act.move(a.uid, r);
            this.pendingRender = false;this.act.refresh()
        }
        cancelInteraction() {
            clearTimeout(this.tapTimer);this.tapTimer=0;
            const d=this.drag;this.drag=null;
            if(d){d.ghost.remove();d.hl?.remove();d.srcEl.classList.remove("dragging");try{if(this.root.hasPointerCapture(d.pid))this.root.releasePointerCapture(d.pid);}catch{}}
            this.root.querySelectorAll(".eq-slot.target").forEach(el=>el.classList.remove("target"));
            if(this.pendingRender&&!this.destroyed){this.pendingRender=false;this.render();}
        }
        destroy(){this.destroyed=true;this.cancelInteraction();window.removeEventListener("blur",this.onBlur);}
        gridById(e) {
            let t = this.ctx.lo;
            return e === "pockets" ? t.pockets : e === "bag" ? t.bag : e === "secure" ? t.secure : e === "stash" ? this.ctx.other?.grid ?? null : null
        }
        lookup(e) {
            let t = this.ctx.lo;
            for (let o of Ce)
                if (t.equip[o]?.uid === e) return t.equip[o];
            let a = this.findKit(e);
            if (a) return a;
            let r = this.ctx.other;
            if (r?.grid) {
                for (let o of r.grid.items)
                    if (o.item.uid === e) return o.item
            }
            if (r?.items) {
                for (let o of r.items)
                    if (o.uid === e) return o
            }
            if (r?.rack) {
                for (let o of r.rack)
                    if (o.uid === e) return o
            }
            return null
        }
        tap(e, t) {
            let a = performance.now(),
                r = this.lastTap.uid === e && a - this.lastTap.t < 340;
            this.lastTap = {
                uid: e,
                t: r ? 0 : a
            };
            let o = this.lookup(e);
            if (o) {
                if (clearTimeout(this.tapTimer), !r) {
                    this.selected = e, this.tapTimer = window.setTimeout(() => {
                        let s = this.lookup(e);
                        !this.destroyed && this.root.isConnected && s && this.inspect(s, t)
                    }, 300);
                    return
                } {
                    t.area === "other" ? this.act.take?.(e) : t.area === "grid" && t.grid === "stash" ? this.act.move(e, {
                        kind: "grid",
                        grid: "auto-kit",
                        x: 0,
                        y: 0
                    }) : t.area === "equip" || t.area === "rack" ? this.act.move(e, {
                        kind: "grid",
                        grid: "auto-stash",
                        x: 0,
                        y: 0
                    }) : C(o.id).use && this.ctx.inRaid ? this.act.use(e) : this.act.move(e, {
                        kind: "grid",
                        grid: "auto",
                        x: 0,
                        y: 0
                    }), this.selected = null, this.act.refresh();
                    return
                }
            }
        }
        inspect(e, t) {
            if(this.destroyed || !this.root.isConnected)return;
            let a = C(e.id),
                r = h("div", {
                    class: "col",
                    style: "gap:8px"
                }),
                o = h("div", {
                    class: "row",
                    style: "gap:12px;align-items:flex-start"
                }, h("div", {
                    class: "thumb" + (a.w > 1 ? " wide" : ""),
                    style: `--rc:${ae[a.rarity]};height:${a.w>2?44:64}px;width:${a.w>2?150:64}px`
                }, h("img", {
                    src: $e(e, a.w > 2 ? 150 : 60, a.w > 2 ? 44 : 60),
                    alt: "",
                    style: "max-width:100%;max-height:100%"
                })), h("div", {
                    class: "col grow",
                    style: "gap:3px"
                }, h("div", {
                    class: "row gap"
                }, h("span", {
                    class: "tag",
                    style: `color:${ae[a.rarity]};border-color:${ae[a.rarity]}66;background:${ae[a.rarity]}1a`
                }, ct[a.rarity]), h("span", {
                    class: "muted",
                    style: "font-size:12px;letter-spacing:.1em;text-transform:uppercase"
                }, er[a.cat])), h("div", {
                    class: "muted",
                    style: "font-size:14px;line-height:1.35"
                }, a.desc), h("div", {
                    class: "row gap mono",
                    style: "font-size:12px;color:var(--dim)"
                }, `Value ${G(le(e))}`, " \xB7 ", `${fi(e).toFixed(2)} kg`, e.qty > 1 ? ` \xB7 \xD7${e.qty}` : "")));
            if (r.appendChild(o), a.weapon) {
                let l = ge(e),
                    c = this.ctx.lo,
                    u = a.weapon.sidearm ? "sidearm" : "primary",
                    m = c.equip[u] && c.equip[u].uid !== e.uid ? c.equip[u] : null,
                    p = m && C(m.id).weapon ? ge(m) : null,
                    f = [
                        ["Damage", l.dmg * (l.pellets ?? 1), p ? p.dmg * (p.pellets ?? 1) : null, 180, !0, l.pellets ? `${Math.round(l.dmg)}\xD7${l.pellets}` : String(Math.round(l.dmg))],
                        ["Fire rate", l.rpm, p?.rpm ?? null, 950, !0, `${l.rpm} rpm`],
                        ["Accuracy", 10 - l.spread, p ? 10 - p.spread : null, 10, !0, l.spread.toFixed(1) + "\xB0"],
                        ["Recoil", l.recoil, p?.recoil ?? null, 14, !1, l.recoil.toFixed(1)],
                        ["Range", l.range, p?.range ?? null, 1300, !0, `${Math.round(l.range/32)} m`],
                        ["Noise", l.noise, p?.noise ?? null, 1300, !1, `${Math.round(l.noise/32)} m`],
                        ["Penetration", l.pen * 100, p ? p.pen * 100 : null, 100, !0, `${Math.round(l.pen*100)}%`],
                        ["Mobility", l.move * 100, p ? p.move * 100 : null, 100, !0, `${Math.round(l.move*100)}%`]
                    ],
                    b = h("div", {
                        class: "col"
                    });
                for (let [P, g, S, T, A, _] of f) {
                    let H = Math.max(0, Math.min(1, g / T)) * 100,
                        B = h("div", {
                            class: "b"
                        }, h("i", {
                            style: `width:${H}%`
                        }));
                    if (S !== null && Math.abs(S - g) > .01) {
                        let se = Math.max(0, Math.min(1, S / T)) * 100,
                            _e = A ? g > S : g < S;
                        B.appendChild(h("em", {
                            class: _e ? "" : "worse",
                            style: `left:${Math.min(H,se)}%;width:${Math.abs(H-se)}%`
                        }))
                    }
                    b.appendChild(h("div", {
                        class: "statbar"
                    }, h("div", null, P), B, h("span", null, _)))
                }
                r.appendChild(h("div", {
                    class: "row between muted",
                    style: "font-size:12px"
                }, h("span", null, `${tr[a.weapon.cal]} \xB7 ${l.mag} rounds \xB7 reload ${l.reload.toFixed(1)}s \xB7 ${a.weapon.modes.join("/").toUpperCase()}`), p ? h("span", null, "vs " + C(m.id).name) : null)), r.appendChild(b), r.appendChild(h("div", {
                    class: "row gap muted mono",
                    style: "font-size:12px"
                }, `Condition ${Math.round((e.cond??1)*100)}%`, ` \xB7 Loaded ${e.ammo??0}/${l.mag}`));
                let x = h("div", {
                    class: "col",
                    style: "gap:4px"
                });
                x.appendChild(h("div", {
                    class: "sec-h"
                }, "Attachments"));
                let k = h("div", {
                    class: "row",
                    style: "gap:6px;flex-wrap:wrap"
                });
                for (let P of a.weapon.slots) {
                    let g = e.att?.[P];
                    k.appendChild(h("button", {
                        class: "btn small " + (g ? "" : "ghost"),
                        onTap: () => {
                            g && (this.act.detach(e.uid, P), ue(), this.act.refresh())
                        }
                    }, g ? [h("img", {
                        src: Se(g, 22, 22),
                        alt: "",
                        style: "width:22px;height:22px"
                    }), C(g).name, E("close")] : `${P} \u2014 empty`))
                }
                x.appendChild(k);
                let M = [],
                    R = this.ctx.lo,
                    w = [];
                for (let P of [R.pockets, R.bag, R.secure, this.ctx.other?.grid ?? null])
                    if (P)
                        for (let g of P.items) w.push(g.item);
                for (let P of w) {
                    let g = C(P.id).attach;
                    g && a.weapon.slots.includes(g.slot) && M.push(P)
                }
                if (M.length) {
                    let P = h("div", {
                        class: "row",
                        style: "gap:6px;flex-wrap:wrap"
                    });
                    for (let g of M) P.appendChild(z([h("img", {
                        src: Se(g.id, 22, 22),
                        alt: "",
                        style: "width:22px;height:22px"
                    }), "Fit " + C(g.id).name], () => {
                        this.act.attach(g.uid, e.uid), ue(), this.act.refresh()
                    }, "small teal"));
                    x.appendChild(P)
                }
                r.appendChild(x)
            } else if (a.armour) r.appendChild(h("div", {
                class: "muted mono",
                style: "font-size:13px"
            }, `Protection ${Math.round(a.armour.prot*100)}% \xB7 Condition ${Math.round((e.cond??1)*100)}%${a.armour.toxic?" \xB7 Toxin filter":""}`));
            else if (a.melee) r.appendChild(h("div", {
                class: "muted mono",
                style: "font-size:13px"
            }, `Damage ${a.melee.dmg} \xB7 ${(1/a.melee.speed).toFixed(1)} swings/s \xB7 Stagger ${Math.round(a.melee.stagger*100)}%`));
            else if (a.use) {
                let l = a.use,
                    c = [];
                l.heal && c.push(`+${l.heal} health`), l.healOverTime && c.push(`+${l.healOverTime} health over time`), l.stopBleed && c.push("stops bleeding"), l.infection && c.push(`${l.infection} infection`), l.hunger && c.push(`${l.hunger>0?"+":""}${l.hunger} hunger`), l.thirst && c.push(`${l.thirst>0?"+":""}${l.thirst} thirst`), l.stamina && c.push(`+${l.stamina} stamina`), c.push(`${l.time}s to use`), r.appendChild(h("div", {
                    class: "muted",
                    style: "font-size:13px"
                }, c.join(" \xB7 ")))
            } else a.bag && r.appendChild(h("div", {
                class: "muted mono",
                style: "font-size:13px"
            }, `${a.bag.w}\xD7${a.bag.h} storage`));
            let s = h("div", {
                    class: "row",
                    style: "gap:6px;flex-wrap:wrap;margin-top:4px"
                }),
                d = (l, c, u = "") => s.appendChild(z(l, () => {
                    ue(), c(), this.act.refresh()
                }, "small " + u));
            if (t.area === "other") d("Take", () => this.act.take?.(e.uid), "primary");
            else {
                if (a.use && this.ctx.inRaid) for(let slot=0;slot<4;slot++) d(`Quick ${slot+1}`,()=>this.act.quick(slot,e.uid),"ghost");
                if (a.use && this.ctx.inRaid && d(a.cat === "food" || a.cat === "crop" ? "Eat" : a.cat === "drink" ? "Drink" : "Use", () => this.act.use(e.uid), "primary"), a.id === "tool_repair" && this.act.repair) {
                    let l = this.ctx.lo;
                    for (let c of ["primary", "secondary", "sidearm"]) {
                        let u = l.equip[c];
                        u && (u.cond ?? 1) < 1 && d(`Repair ${C(u.id).name}`, () => this.act.repair(e.uid, u.uid), "teal")
                    }
                }
                if (t.area === "equip") d("Unequip", () => this.act.move(e.uid, {
                    kind: "grid",
                    grid: this.ctx.inRaid ? "auto" : "auto-stash",
                    x: 0,
                    y: 0
                }));
                else {
                    let l = Ce.filter(c => ze(c, e));
                    if (l.length) {
                        let c = l.find(u => !this.ctx.lo.equip[u]) ?? l[0];
                        d(`Equip ${ya[c]}`, () => this.act.move(e.uid, {
                            kind: "equip",
                            slot: c
                        }), t.area === "grid" && t.grid === "stash" ? "primary" : ""), a.weapon && l.includes("secondary") && c !== "secondary" && d("Equip Secondary", () => this.act.move(e.uid, {
                            kind: "equip",
                            slot: "secondary"
                        }))
                    }
                }
                if (t.area === "grid" && t.grid === "stash" ? d("To kit", () => this.act.move(e.uid, {
                        kind: "grid",
                        grid: "auto-kit",
                        x: 0,
                        y: 0
                    })) : !this.ctx.inRaid && t.area !== "rack" && d("To stash", () => this.act.move(e.uid, {
                        kind: "grid",
                        grid: "auto-stash",
                        x: 0,
                        y: 0
                    })), t.area === "rack" && d("To stash", () => this.act.move(e.uid, {
                        kind: "grid",
                        grid: "auto-stash",
                        x: 0,
                        y: 0
                    })), a.weapon && !this.ctx.inRaid && t.area !== "rack" && (this.ctx.other?.rackSlots ?? 0) > 0 && d("To rack", () => this.act.move(e.uid, {
                        kind: "rack"
                    })), a.w === 1 && a.h === 1 && t.area === "grid" && t.grid !== "secure" && t.grid !== "stash") {
                    let l = this.ctx.lo.secure,
                        c = (() => {
                            for (let u = 0; u < l.w; u++)
                                if (mt(l, u, 0, 1, 1)) return u;
                            return -1
                        })();
                    c >= 0 && d("Protect", () => this.act.move(e.uid, {
                        kind: "grid",
                        grid: "secure",
                        x: c,
                        y: 0
                    }), "teal")
                }
                if (e.qty > 1 && t.area === "grid" && d(`Split ${Math.floor(e.qty/2)}`, () => this.act.split(e.uid, Math.floor(e.qty / 2))), this.act.insure && !this.ctx.inRaid && (a.weapon || a.armour || a.cat === "backpack" || a.melee) && (t.area === "equip" || t.area === "grid" && t.grid !== "stash" && t.grid !== "secure")) {
                    let l = this.ctx.insured?.includes(e.uid);
                    d(l ? "Remove insurance" : "Insure", () => this.act.insure(e.uid), "teal")
                }
                this.act.drop && this.ctx.inRaid && d("Drop", () => this.act.drop(e.uid), "ghost"), this.act.put && this.ctx.other?.kind === "loot" && d("Put in container", () => this.act.put(e.uid), "ghost")
            }
            r.appendChild(s);
            let n = this.act.insureInfo?.(e.uid);
            n && r.appendChild(h("div", {
                class: "muted",
                style: "font-size:12px"
            }, n)), De(r, {
                title: a.name,
                onClose: () => {
                    this.selected = null, this.render()
                }
            })
        }
    };
    var hi = class {
        constructor(e, t) {
            v(this, "host");
            v(this, "s");
            v(this, "world");
            v(this, "layer");
            v(this, "canvas");
            v(this, "renderer");
            v(this, "controls");
            v(this, "hud");
            v(this, "ctlLayer");
            v(this, "hudLayer");
            v(this, "overlay");
            v(this, "raf", 0);
            v(this, "last", 0);
            v(this, "hudT", 0);
            v(this, "running", !1);
            v(this, "target", null);
            v(this, "inv", null);
            v(this, "invOpen", !1);
            v(this, "ended", !1);
            v(this, "endT", -1);
            v(this, "fpsAcc", 0);
            v(this, "fpsN", 0);
            v(this, "fpsLow", 0);
            v(this, "fpsEl");
            v(this, "markers", {
                me: null,
                mates: [],
                pings: [],
                events: [],
                waypoint: null
            });
            v(this, "heartT", 0);
            v(this, "paused", !1);
            v(this, "lastHp", 100);
            v(this, "searchSoundT", 0);
            v(this, "newUids", new Set);
            v(this, "eventMarkers", []);
            v(this, "invEl", null);
            this.host = e, this.s = t, this.world = t.world, this.layer = h("div", {
                class: "layer"
            }), this.canvas = h("canvas", {
                id: "world"
            }), this.layer.appendChild(this.canvas), this.ctlLayer = h("div", {
                class: "layer hud-ctl"
            }), this.hudLayer = h("div", {
                class: "layer hud"
            }), this.overlay = h("div", {
                class: "layer raid-overlay",
                style: "pointer-events:none"
            }), this.layer.appendChild(this.ctlLayer), this.layer.appendChild(this.hudLayer), this.layer.appendChild(this.overlay), this.fpsEl = h("div", {
                class: "mono hidden",
                style: "position:absolute;left:50%;bottom:62px;transform:translateX(-50%);font-size:11px;color:#a9a48f;pointer-events:none"
            }), this.layer.appendChild(this.fpsEl), this.renderer = new di(this.canvas, this.world, t.meId), this.renderer.looks = t.looks, this.renderer.netMode = t.mode === "client", this.controls = new da(this.ctlLayer, {
                reload: () => this.cmd({
                    t: "reload"
                }),
                swap: () => this.cmd({
                    t: "swap"
                }),
                melee: () => this.cmd({
                    t: "melee"
                }),
                interact: () => this.interact(),
                inventory: () => this.invOpen ? this.closeInventory() : this.openInventory(),
                heal: () => this.cmd({
                    t: "heal"
                }),
                quick: a => this.cmd({
                    t: "quickUse",
                    i: a
                }),
                light: () => this.cmd({
                    t: "light"
                }),
                ping: () => this.pingWheel(),
                map: () => this.openMap(),
                pause: () => this.pause(),
                mode: () => this.cmd({
                    t: "mode"
                })
            }), this.controls.playerScreen = () => {
                let a = this.me;
                return a ? this.renderer.worldToScreen(a.x, a.y) : {
                    x: W.W / 2,
                    y: W.H / 2
                }
            }, this.controls.setPingVisible(this.world.players.length > 1), this.hud = new ua(this.hudLayer, {
                quick: a => this.cmd({
                    t: "quickUse",
                    i: a
                }),
                openMap: () => this.openMap(),
                pause: () => this.pause(),
                swapWeapon: () => this.cmd({
                    t: "swap"
                }),
                mode: () => this.cmd({
                    t: "mode"
                })
            }, e.name, t.looks.get(t.meId), e.level), this.safeBadge = h("div", {
                class: "safezone-badge hidden"
            }, "SAFE ZONE · PROTECTED"), this.hudLayer.appendChild(this.safeBadge), this.vehicleHud=h("div",{class:"vehicle-hud hidden"}), this.hudLayer.appendChild(this.vehicleHud), this.applySettings(), this.unsubscribeResize=ri(() => this.resize())
        }
        get me() {
            return this.world.player(this.s.meId)
        }
        applySettings() {
            let e = this.host.settings;
            this.controls.scale = e.controlScale, this.controls.fireOnAim = e.fireOnAim, this.controls.hapticsOn = e.haptics, this.ctlLayer.style.setProperty("--co", String(e.controlOpacity)), this.renderer.reduceShake = e.reduceShake;
            let t = e.quality === "auto" ? this.renderer.quality : e.quality;
            t !== this.renderer.quality && this.renderer.setQuality(t), this.fpsEl.classList.toggle("hidden", !e.showFps), this.controls.layout()
        }
        resize() {
            this.renderer.resize(W.W, W.H, W.dpr), this.controls.layout()
        }
        start(e) {
            e.appendChild(this.layer);
            let t = this.host.settings;
            if (t.quality === "auto") {
                let r = navigator.hardwareConcurrency || 4;
                this.renderer.setQuality(r >= 6 && W.dpr >= 2 ? "high" : "medium")
            } else this.renderer.setQuality(t.quality);
            this.resize(), this.running = !0, this.last = performance.now(), this.raf = requestAnimationFrame(r => this.frame(r)), this.s.tutorial?.begin(this);
            let a = this.me;
            this.lastHp = a.hp;
            for (let r of this.world.events) r.fired && r.x !== void 0 && this.eventMarkers.push({
                x: r.x,
                y: r.y,
                title: r.title,
                t: 0
            });
            this.host.track("raid_started", {
                mode: this.s.mode,
                hour: Math.round(this.world.opts.startHour),
                weather: this.world.weather,
                tutorial: !!this.s.tutorial
            })
        }
        stop() {
            this.unsubscribeResize?.();this.cancelPlacement();this.inv?.destroy();
            this.running = !1, cancelAnimationFrame(this.raf), this.controls.destroy(), this.layer.remove(), F.setAmbience({
                wind: 0,
                rain: 0,
                drone: .35,
                night: !1
            }, 0)
        }
        cmd(e) {
            this.ended || (this.s.mode === "client" ? this.s.net?.sendCommand(e) : (this.world.command(this.s.meId, e), this.world.applyCommands(this.s.meId), this.drainFx()))
        }
        frame(e) {
            if (!this.running) return;
            this.raf = requestAnimationFrame(d => this.frame(d));
            let t = (e - this.last) / 1e3;
            if (this.last = e, t > .1 && (t = .1), t <= 0) return;
            let a = this.me;
            if (!a) return;
            this.safeBadge && this.safeBadge.classList.toggle("hidden", !DZInsideSafe(this.world, a.x, a.y, -6));
            let r = this.controls.read();
            if ((this.invOpen || this.paused || a.dead || a.extracted) && (r = {
                    mx: 0,
                    my: 0,
                    aim: null,
                    fire: !1,
                    sprint: !1,
                    crouch: r.crouch
                }), this.s.mode === "client" ? this.s.net?.sendInput(r) : this.world.setInput(this.s.meId, r), !this.paused || this.world.players.length > 1)
                if (this.s.mode === "client") this.s.net?.update(t);
                else {
                    let d = t;
                    for (; d > 0;) {
                        let n = Math.min(d, this.renderer.quality === "low" ? .022222222222222223 : .016666666666666666);
                        this.world.step(n), d -= n
                    }
                    this.s.net?.hostTick?.(t)
                } this.drainFx(), this.s.tutorial?.update(t, this);
            let o = mo(a);
            this.renderer.aimPreview = a.input.aim !== null && o && !a.dead ? {
                angle: a.angle,
                spread: o.spread,
                range: o.range
            } : null, this.updateInteract(a), this.renderer.update(t), this.renderer.draw(), F.listener.x = a.x, F.listener.y = a.y;
            let s = this.world.light();
            if (F.setAmbience({
                    wind: this.world.weather === "rain" ? .8 : .5,
                    rain: this.world.weather === "rain" ? 1 : 0,
                    drone: a.hp < 35 ? .6 : .15,
                    night: s < .35
                }, t), a.hp < 30 && !a.dead && (this.heartT -= t, this.heartT <= 0 && (this.heartT = .6 + a.hp / 60, F.play("heart"))), a.searching && (this.searchSoundT -= t, this.searchSoundT <= 0 && (this.searchSoundT = .45, F.play("search", a.x, a.y, .7))), this.host.atlas.reveal(a.x, a.y), this.hudT -= t, this.hudT <= 0 && (this.hudT = this.renderer.quality === "low" ? 1 / 20 : 1 / 30, this.markers.me = {
                    x: a.x,
                    y: a.y,
                    a: a.angle
                }, this.markers.mates = this.world.players.filter(d => d.id !== a.id && !d.extracted && !d.dead).map(d => ({
                    x: d.x,
                    y: d.y,
                    down: d.downed
                })), this.markers.pings = this.renderer.pings.map(d => ({
                    x: d.x,
                    y: d.y,
                    kind: d.kind
                })), this.markers.events = this.eventMarkers.map(d => ({
                    x: d.x,
                    y: d.y,
                    title: d.title
                })), this.updateVehicleHud(a), this.updatePlacement(a), this.hud.update(1 / 15, this.world, a, this.host.atlas, this.markers), this.controls.els.reload.classList.toggle("reloading",a.reloadT>0), this.controls.setLight(a.light, this.renderer.hasLight(a)), this.invOpen && this.checkInventorySource(a)), this.fpsAcc += t, this.fpsN++, this.fpsAcc >= 1) {
                let d = this.fpsN / this.fpsAcc;
                this.fpsEl.textContent = `${d.toFixed(0)} FPS \xB7 ${this.renderer.quality}`, this.host.settings.quality === "auto" && (d < 42 ? this.fpsLow++ : this.fpsLow = Math.max(0, this.fpsLow - 1), this.fpsLow >= 3 && this.renderer.quality !== "low" && (this.renderer.setQuality(this.renderer.quality === "high" ? "medium" : "low"), this.resize(), this.fpsLow = 0)), this.fpsAcc = 0, this.fpsN = 0
            }
            this.s.mode === "host" && (a.extracted || a.dead && !a.downed) && !this.world.over && (() => {
                let d = this.world.players.find(n => !n.dead && !n.extracted);
                d && this.spectate(d.id)
            })(), !this.ended && this.s.mode !== "host" && (a.extracted || a.dead && !a.downed) && (this.endT < 0 && (this.endT = a.extracted ? 1 : 2.2), this.endT -= t, this.endT <= 0 && this.finish()), !this.ended && this.world.over && this.s.mode !== "client" && this.finish()
        }
        drainFx() {
            let e = this.s.mode === "client" ? this.s.net?.drainFx() ?? [] : this.world.fx.splice(0);
            for (let t of e) this.onFx(t);
            this.s.mode === "host" && this.s.net?.broadcastFx?.(e)
        }
        onFx(e) {
            this.renderer.onFx(e), this.s.tutorial?.onFx(e, this);
            let t = this.s.meId,
                a = r => this.world.player(r);
            switch (e.t) {
                case "shot": {
                    let r = C(e.w).weapon?.cls;
                    e.pid===t && this.controls.els.fire.animate([{borderColor:"#e6bd91"},{borderColor:"#bc7662"}],{duration:120}), F.gunshot(e.w, r, e.sup, e.x, e.y, e.pid === t), e.pid === t && Xe(r === "shotgun" || r === "sniper" ? 25 : 8, this.host.settings.haptics);
                    break
                }
                case "treehit":
                    F.play("thud", e.x, e.y, .45);
                    break;
                case "treecut":
                    F.play("door", e.x, e.y, .7);
                    break;
                case "worldbuild":
                    F.play("build", e.x, e.y, .75);
                    break;
                case "empty":
                    e.pid === t && F.play("empty");
                    break;
                case "reload": {
                    let r = a(e.pid);
                    r && F.play("reload", r.x, r.y, e.pid === t ? 1 : .6);
                    break
                }
                case "hit":
                    e.kind === "zombie" ? F.play("flesh", e.x, e.y, .7) : (e.kind === "armour" || Math.random() < .25) && F.play("ricochet", e.x, e.y, .6);
                    break;
                case "zdie":
                    F.play("thud", e.x, e.y, .6);
                    break;
                case "zgroan":
                    e.zt === "brute" ? F.play("brute", e.x, e.y, 1.2) : F.play(e.alert ? "snarl" : "groan", e.x, e.y, e.alert ? .9 : .6);
                    break;
                case "zattack":
                    F.play("snarl", e.x, e.y, .7);
                    break;
                case "pdmg":
                    e.pid === t && (F.play("hurt"), Xe(40, this.host.settings.haptics), this.hud.damage(e.a + Math.PI, 0));
                    break;
                case "melee": {
                    F.play("swing", e.x, e.y, e.pid === t ? 1 : .6), e.hit && F.play("thud", e.x, e.y, .8);
                    break
                }
                case "door": {
                    let r = this.world.map.doors[e.id];
                    r && F.play(e.bash ? "bash" : "door", (r.tx + .5) * y, (r.ty + .5) * y, .8);
                    break
                }
                case "opened":
                    e.pid === t && this.openInventory();
                    break;
                case "pickup":
                    if (e.pid === t) {
                        let r = C(e.id),
                            o = Ge[r.rarity] >= 2;
                        F.play(o ? "rare" : "pickup"), o && Xe([15, 40, 15], this.host.settings.haptics);
                        let s = this.me ? [...this.me.lo.pockets.items, ...this.me.lo.bag?.items ?? []].find(d => d.item.id === e.id) : null;
                        s && this.newUids.add(s.item.uid)
                    }
                    break;
                case "notice":
                    e.pid === t && (K(e.text, e.kind === "warn" ? "warn" : e.kind === "rare" ? "rare" : e.kind === "event" ? "event" : e.kind === "mission" ? "mission" : "info"), e.kind === "rare" && F.play("rare"));
                    break;
                case "xp":
                    e.pid === t && this.hud.xp(e.n, e.why);
                    break;
                case "used": {
                    let r = C(e.id),
                        o = a(e.pid);
                    o && F.play(r.cat === "medical" ? "heal" : "eat", o.x, o.y, e.pid === t ? 1 : .5);
                    break
                }
                case "extracted":
                    if (e.pid === t) F.play("extract"), Xe([30, 60, 30], this.host.settings.haptics);
                    else {
                        let r = a(e.pid);
                        r && K(`${r.name} extracted`, "good")
                    }
                    break;
                case "died":
                    if (e.pid === t) F.play("death"), Xe([80, 50, 120], this.host.settings.haptics), this.closeInventory();
                    else {
                        let r = a(e.pid);
                        r && K(`${r.name} was killed`, "warn")
                    }
                    break;
                case "downed":
                    if (e.pid === t) K("You are down. A teammate can revive you.", "warn", 4e3), this.closeInventory();
                    else {
                        let r = a(e.pid);
                        r && K(`${r.name} is down! Revive them.`, "warn", 3500)
                    }
                    break;
                case "revived": {
                    let r = a(e.pid);
                    r && K(e.pid === t ? "You were revived" : `${r.name} is back up`, "good");
                    break
                }
                case "ping": {
                    let r = a(e.pid);
                    r && (K(`${r.name}: ${qa[e.kind]??e.kind}`, e.kind === "enemy" || e.kind === "zombie" ? "warn" : "info", 2600), F.play("notice"));
                    break
                }
                case "step":
                    e.pid !== t ? F.play("step", e.x, e.y, e.sprint ? .62 : .32) : F.play("step", e.x, e.y, e.sprint ? .28 : .14);
                    break;
                case "swap":
                    e.pid === t && F.play("zip");
                    break;
                case "search":
                    e.pid === t && !e.done && F.play("search");
                    break;
                case "event":
                    this.hud.event(e.title, e.text), F.play("event"), e.x !== void 0 && e.y !== void 0 && (this.eventMarkers = this.eventMarkers.filter(r => r.title !== e.title), this.eventMarkers.push({
                        x: e.x,
                        y: e.y,
                        title: e.title,
                        t: 0
                    }));
                    break;
                case "explode":
                    F.play("explode", e.x, e.y, 1.4), Xe(60, this.host.settings.haptics);
                    break
            }
        }
        updateInteract(e) {
            if (e.dead || e.downed || e.extracted || this.invOpen) {
                this.target = null, this.controls.setInteract(null), this.renderer.interactTarget = null;
                return
            }
            let t = this.world;
            if (e.vehicle >= 0) {
                let v = t.vehicle(e.vehicle);
                this.target = {
                    kind: "vehicle",
                    id: e.vehicle,
                    label: "Exit vehicle",
                    rect: {
                        x: (v?.x ?? e.x) - 20,
                        y: (v?.y ?? e.y) - 14,
                        w: 40,
                        h: 28
                    },
                    ic: "exit"
                }, this.controls.setInteract("Exit vehicle", "exit"), this.renderer.interactTarget = null;
                return
            }
            let a = null,
                r = 1 / 0,
                o = (l, c, u) => {
                    let m = l.rect.x + l.rect.w / 2,
                        p = l.rect.y + l.rect.h / 2,
                        f = Math.atan2(p - e.y, m - e.x),
                        b = Math.cos(f - e.angle),
                        x = c + u - b * 12;
                    x < r && (r = x, a = l)
                };
            for (let l of t.players) {
                if (l.id === e.id || !l.downed || l.dead) continue;
                let c = Ze(e.x, e.y, l.x, l.y);
                c < 60 && o({
                    kind: "revive",
                    id: l.id,
                    label: `Revive ${l.name}`,
                    rect: {
                        x: l.x - 14,
                        y: l.y - 14,
                        w: 28,
                        h: 28
                    },
                    ic: "heart"
                }, c, -40)
            }
            for (let l = 0; l < t.map.containers.length; l++) {
                let c = t.map.containers[l],
                    u = V(e.x, c.x, c.x + c.w),
                    m = V(e.y, c.y, c.y + c.h),
                    p = Math.hypot(e.x - u, e.y - m);
                if (p > 64) continue;
                let f = c.x + c.w / 2,
                    b = c.y + c.h / 2;
                if (!t.canSee(e.x, e.y, f, b)) continue;
                let x = t.cstate[l],
                    k, M;
                c.locked && !x.unlocked ? (k = t.hasItem(e, c.locked) ? `Unlock ${c.label}` : `Locked ${c.label}`, M = 2) : x.opened ? x.items && x.items.length ? (k = `Open ${c.label}`, M = 6) : (k = `${c.label} (empty)`, M = 30) : (k = `Search ${c.label}`, M = 0), o({
                    kind: "container",
                    id: l,
                    label: k,
                    rect: {
                        x: c.x,
                        y: c.y,
                        w: c.w,
                        h: c.h
                    },
                    ic: "hand"
                }, p, M)
            }
            for (let l of t.ground) {
                let c = Ze(e.x, e.y, l.x, l.y);
                if (c > 56 || !t.canSee(e.x,e.y,l.x,l.y) || l.kind === "supply" && (l.landT ?? 0) > 0 || !l.items.length && l.kind !== "corpse") continue;
                let u = l.kind === "corpse" ? `Loot ${l.label}` : l.kind === "supply" ? "Open Supply Drop" : l.kind === "stash" ? `Search ${l.label}` : `Pick up (${l.items.length})`;
                o({
                    kind: "ground",
                    id: l.id,
                    label: u,
                    rect: {
                        x: l.x - 14,
                        y: l.y - 14,
                        w: 28,
                        h: 28
                    },
                    ic: "hand"
                }, c, 3)
            }
            for (let l = 0; l < t.map.trees.length; l++) {
                let c = t.map.trees[l];
                if (c.cut) continue;
                let u = Ze(e.x, e.y, c.x, c.y);
                if (u > 72 || !t.canSee(e.x, e.y, c.x, c.y)) continue;
                let m = Math.max(0, c.hp ?? 4),
                    p = this.world.activeItem(e)?.id === "m_axe" ? " · axe" : "";
                o({
                    kind: "tree",
                    id: l,
                    label: `Chop tree · ${m}/4${p}`,
                    rect: {
                        x: c.x - 16,
                        y: c.y - 16,
                        w: 32,
                        h: 32
                    },
                    ic: "hammer"
                }, u, 8)
            }
            for (let l of t.vehicles) {
                if (l.driver || l.hp <= 0) continue;
                let c = Ze(e.x, e.y, l.x, l.y);
                c < 72 && t.canSee(e.x,e.y,l.x,l.y) && o({
                    kind: "vehicle",
                    id: l.id,
                    label: `Drive ${l.kind.replaceAll("_"," ")}`,
                    rect: {
                        x: l.x - l.w / 2,
                        y: l.y - l.h / 2,
                        w: l.w,
                        h: l.h
                    },
                    ic: "car"
                }, c, -10)
            }
            let s = Math.floor(e.x / y),
                d = Math.floor(e.y / y);
            for (let l = d - 2; l <= d + 2; l++)
                for (let c = s - 2; c <= s + 2; c++) {
                    if (c < 0 || l < 0) continue;
                    let u = t.map.doorAt[Y(c, l)];
                    if (u === void 0 || u < 0) continue;
                    let m = t.map.doors[u],
                        p = Ze(e.x, e.y, (c + .5) * y, (l + .5) * y);
                    if (p > 64) continue;
                    let f = m.open ? "Close door" : m.locked ? t.hasItem(e, m.locked) ? "Unlock door" : "Locked door" : "Open door";
                    o({
                        kind: "door",
                        id: u,
                        label: f,
                        rect: {
                            x: c * y,
                            y: l * y,
                            w: y,
                            h: y
                        },
                        ic: "hand"
                    }, p, 14)
                }
            this.target = a;
            let n = a;
            this.controls.setInteract(n ? n.label : null, n?.kind === "revive" ? "heart" : n?.kind === "door" ? "exit" : n?.kind === "tree" ? "hammer" : "hand"), this.renderer.interactTarget = n && n.kind !== "door" ? n.rect : null
        }
        interact() {
            let e = this.target;
            e && (e.kind === "container" ? this.cmd({
                t: "interact",
                kind: "container",
                id: e.id
            }) : e.kind === "ground" ? this.cmd({
                t: "interact",
                kind: "ground",
                id: e.id
            }) : e.kind === "door" ? this.cmd({
                t: "interact",
                kind: "door",
                id: e.id
            }) : e.kind === "tree" ? this.cmd({
                t: "interact",
                kind: "tree",
                id: e.id
            }) : e.kind === "vehicle" ? this.cmd({
                t: "interact",
                kind: "vehicle",
                id: e.id
            }) : e.kind === "revive" && this.cmd({
                t: "interact",
                kind: "revive",
                id: e.id
            }))
        }
        openInventory() {
            let e = this.me;
            if (!(!e || e.dead || e.downed)) {
                if (!this.invOpen) {
                    this.invOpen = !0, this.controls.reset(), this.controls.enabled = false, this.ctlLayer.classList.add("inventory-covered"), this.hudLayer.classList.add("inventory-covered"), F.play("zip");
                    let t = h("div", {
                            class: "content",
                            style: "overflow:hidden"
                        }),
                        a = h("button", {
                            class: "ibtn",
                            "aria-label": "Close inventory",
                            onTap: () => this.closeInventory()
                        }, E("close"));
                    this.invEl = h("div", {
                        class: "screen inv-screen"
                    }, h("div", {
                        class: "topbar"
                    }, h("h2", null, "Inventory"), h("div", {
                        class: "sub grow"
                    }, "Tap an item for actions · drag within a panel"), a), t), this.overlay.appendChild(this.invEl), this.overlay.style.pointerEvents = "auto", this.inv = new ci(t, {
                        lo: e.lo,
                        other: null,
                        inRaid: !0,
                        newUids: this.newUids
                    }, this.invActions())
                }
                this.refreshInventory(), this.s.tutorial?.onInventory(this, !0)
            }
        }
        closeInventory() {
            if (!this.invOpen) return;
            this.invOpen = !1, this.inv?.destroy(), ni(), this.invEl?.remove(), this.invEl = null, this.inv = null, this.overlay.style.pointerEvents = "none";
            this.ctlLayer.classList.remove("inventory-covered");this.hudLayer.classList.remove("inventory-covered");this.controls.reset();this.controls.enabled = !this.paused;this.invStamp = null;
            let e = this.me;
            e && (e.openContainer >= 0 || e.openGround >= 0) && this.cmd({
                t: "cancel"
            }), this.newUids.clear(), this.s.tutorial?.onInventory(this, !1)
        }
        srcInfo(e) {
            if (e.openContainer >= 0) {
                let t = this.world.srcItems(e, "container", e.openContainer);
                if (t) return {
                    src: "container",
                    id: e.openContainer,
                    label: this.world.map.containers[e.openContainer].label,
                    items: t
                }
            }
            if (e.openGround >= 0) {
                let t = this.world.srcItems(e, "ground", e.openGround),
                    a = this.world.ground.find(r => r.id === e.openGround);
                if (t && a) return {
                    src: "ground",
                    id: e.openGround,
                    label: a.label,
                    items: t
                }
            }
            return null
        }
        checkInventorySource(e) {
            if (!this.inv) return;
            let t = this.srcInfo(e);
            const stamp=JSON.stringify([e.lo,t?.items,t?.id]);
            if(this.invStamp !== stamp)this.refreshInventory()
        }
        refreshInventory() {
            let e = this.me;
            if (!this.inv || !e) return;
            let t = this.srcInfo(e);
            this.invStamp=JSON.stringify([e.lo,t?.items,t?.id]);
            this.inv.ctx.lo = e.lo, this.inv.ctx.insured = this.s.insured, this.inv.ctx.other = t ? {
                kind: "loot",
                label: t.label,
                items: t.items ?? []
            } : null, this.inv.render()
        }
        invActions() {
            let e = a => a.kind === "equip" ? {
                    kind: "equip",
                    slot: a.slot
                } : a.kind === "grid" ? a.grid === "auto" || a.grid === "auto-kit" || a.grid === "auto-stash" ? {
                    kind: "auto"
                } : {
                    kind: "grid",
                    grid: a.grid,
                    x: a.x,
                    y: a.y
                } : {
                    kind: "auto"
                },
                t = () => {
                    let a = this.me;
                    return this.srcInfo(a)
                };
            return {
                move: (a, r) => this.cmd({
                    t: "move",
                    uid: a,
                    to: e(r)
                }),
                take: (a, r) => {
                    let o = t();
                    o && this.cmd({
                        t: "take",
                        src: o.src,
                        id: o.id,
                        uid: a,
                        to: r ? e(r) : void 0
                    })
                },
                takeAll: () => {
                    let a = t();
                    a && this.cmd({
                        t: "takeAll",
                        src: a.src,
                        id: a.id
                    }), this.refreshInventory()
                },
                put: a => {
                    let r = t();
                    r && this.cmd({
                        t: "put",
                        src: r.src,
                        id: r.id,
                        uid: a
                    })
                },
                use: a => {
                    this.cmd({
                        t: "use",
                        uid: a
                    }), this.closeInventory()
                },
                drop: a => this.cmd({
                    t: "move",
                    uid: a,
                    to: {
                        kind: "drop"
                    }
                }),
                split: (a, r) => this.cmd({
                    t: "split",
                    uid: a,
                    qty: r
                }),
                quick: (a, r) => this.cmd({
                    t: "quick",
                    i: a,
                    uid: r
                }),
                attach: (a, r) => this.cmd({
                    t: "attach",
                    uid: a,
                    weapon: r
                }),
                detach: (a, r) => this.cmd({
                    t: "detach",
                    weapon: a,
                    slot: r
                }),
                repair: (a, r) => this.cmd({
                    t: "repair",
                    uid: a,
                    weapon: r
                }),
                insureInfo: a => this.s.insured.includes(a) ? "Insured: returns to your safehouse if you die and nobody takes it." : null,
                refresh: () => setTimeout(() => this.refreshInventory(), this.s.mode === "client" ? 120 : 0)
            }
        }
        openMap() {
            let e = W.W,
                t = W.H,
                a = h("canvas", {
                    style: "position:absolute;inset:0;width:100%;height:100%;touch-action:none"
                });
            a.width = Math.round(e * W.dpr), a.height = Math.round(t * W.dpr);
            let r = this.me,
                o = (t - 20) / 160,
                s = r.x,
                d = r.y,
                n = () => {
                    let x = a.getContext("2d");
                    x.setTransform(W.dpr, 0, 0, W.dpr, 0, 0), li(x, this.host.atlas, this.world, e, t, s, d, o, {
                        ...this.markers,
                        me: {
                            x: r.x,
                            y: r.y,
                            a: r.angle
                        }
                    }, !0)
                },
                l = h("div", {
                    class: "panel",
                    style: "position:absolute;right:calc(10px + var(--sa-r));top:calc(10px + var(--sa-t));width:220px;max-height:calc(100% - 20px);overflow:auto;pointer-events:auto"
                });
            l.appendChild(h("h3", null, "Extractions"));
            for (let x of this.world.map.extracts) {
                if (!this.world.activeExtracts.has(x.id)) continue;
                let k = !x.req || this.world.hasItem(r, x.req);
                l.appendChild(h("div", {
                    class: "li-row",
                    style: "padding:6px 8px;margin-bottom:4px"
                }, h("div", {
                    class: "col"
                }, h("div", {
                    class: "ttl",
                    style: `color:${k?"#8dff8a":"var(--accHi)"}`
                }, x.name), h("div", {
                    class: "desc"
                }, x.req ? `Needs ${C(x.req).name}` : x.desc))))
            }
            let c = Math.round(this.host.atlas.percent() * 100);
            l.appendChild(h("div", {
                class: "muted",
                style: "font-size:12px;margin-top:6px"
            }, `Map explored: ${c}%. Unexplored ground stays dark until you have been there.`));
            let u = x => {
                    o = V(o * x, 1.2, 9), n()
                },
                m = h("div", {
                    class: "row gap",
                    style: "position:absolute;left:calc(12px + var(--sa-l));bottom:calc(12px + var(--sa-b));pointer-events:auto"
                }, z(E("minus"), () => u(.75), "small"), z(E("plus"), () => u(1.33), "small"), z("Centre", () => {
                    s = r.x, d = r.y, n()
                }, "small"), z("Close", () => p.remove(), "small primary")),
                p = h("div", {
                    class: "layer",
                    style: "background:#07070d;pointer-events:auto;z-index:20"
                }, a, l, m, h("div", {
                    class: "muted",
                    style: "position:absolute;left:calc(12px + var(--sa-l));top:calc(10px + var(--sa-t));font-size:12px;letter-spacing:.1em;text-transform:uppercase"
                }, "Harrowmere \xB7 drag to pan \xB7 tap to set a waypoint")),
                f = null;
            a.addEventListener("pointerdown", x => {
                let k = st(x.clientX, x.clientY);
                f = {
                    x: k.x,
                    y: k.y,
                    cx: s,
                    cy: d,
                    moved: !1
                }, a.setPointerCapture(x.pointerId)
            }), a.addEventListener("pointermove", x => {
                if (!f) return;
                let k = st(x.clientX, x.clientY);
                Math.hypot(k.x - f.x, k.y - f.y) > 6 && (f.moved = !0), s = f.cx - (k.x - f.x) / o * y, d = f.cy - (k.y - f.y) / o * y, n()
            }), a.addEventListener("pointerup", x => {
                if (f && !f.moved) {
                    let k = st(x.clientX, x.clientY),
                        M = s + (k.x - e / 2) / o * y,
                        R = d + (k.y - t / 2) / o * y;
                    this.markers.waypoint = this.markers.waypoint && Math.hypot(this.markers.waypoint.x - M, this.markers.waypoint.y - R) < 80 ? null : {
                        x: M,
                        y: R
                    }, n()
                }
                f = null
            }), this.overlay.appendChild(p), this.overlay.style.pointerEvents = "auto";
            let b = new MutationObserver(() => {
                p.isConnected || (this.overlay.style.pointerEvents = this.invOpen ? "auto" : "none", b.disconnect())
            });
            b.observe(this.overlay, {
                childList: !0
            }), n()
        }
        updateVehicleHud(player) {
            const vehicle=this.world.vehicle(player.vehicle), driving=!!vehicle;
            if(this.driving!==driving){
                this.driving=driving; this.ctlLayer.classList.toggle("driving",driving);this.hudLayer.classList.toggle("driving",driving);
                if(driving)this.controls.reset();
                this.vehicleHud.classList.toggle("hidden",!driving);
            }
            if(!vehicle)return;
            const text=`${DZVehicleTuning[vehicle.kind]?.name??vehicle.kind} · ${Math.round(Math.abs(vehicle.speed)*.18)} km/h · FUEL ${Math.round(vehicle.fuel)}% · CONDITION ${Math.round(vehicle.hp)}%`;
            if(text!==this.vehicleHud.textContent)this.vehicleHud.textContent=text;
        }
        beginPlacement(kind,cost) {
            this.cancelPlacement();this.placement={kind,cost,rotation:0};
            this.placementBar=h("div",{class:"placement-bar"},h("b",null,`${kind.toUpperCase()} · ${cost} TIMBER`),z("Rotate",()=>{this.placement.rotation=(this.placement.rotation+1)%4;},"small"),this.placeConfirm=z("Place",()=>{
                const p=this.placement;if(!p)return;
                const plan=this.world.buildPlan(this.me,p.kind,p.rotation);
                if(!plan.valid)return K("Placement blocked","warn");
                this.cmd({t:"build",kind:p.kind,rotation:p.rotation});this.cancelPlacement();
            },"small primary"),z("Cancel",()=>this.cancelPlacement(),"small"));
            this.hudLayer.appendChild(this.placementBar);
        }
        cancelPlacement(){this.placement=null;this.renderer.buildPreview=null;this.placementBar?.remove();}
        updatePlacement(player){
            if(!this.placement)return;
            if(player.dead||player.downed||player.vehicle>=0){this.cancelPlacement();return;}
            const plan=this.world.buildPlan(player,this.placement.kind,this.placement.rotation);
            const valid=plan.valid&&(player.wood??0)>=this.placement.cost;
            this.renderer.buildPreview={...plan,valid};this.placeConfirm.disabled=!valid;
        }
        openBuild() {
            let e = this.me;
            if (!e) return;
            let t = h("div", {
                    class: "build-menu col",
                    style: "gap:8px"
                }),
                a = [{
                    k: "shelter",
                    n: "Starter Shelter",
                    c: 14,
                    d: "Builds a 5×5 timber enclosure with a working door."
                }, {
                    k: "wall",
                    n: "Timber Wall",
                    c: 2,
                    d: "Blocks infected and gunfire."
                }, {
                    k: "door",
                    n: "Wooden Door",
                    c: 3,
                    d: "A proper door you can open and close."
                }, {
                    k: "crate",
                    n: "Storage Crate",
                    c: 4,
                    d: "Shared raid storage for your squad."
                }, {
                    k: "campfire",
                    n: "Campfire",
                    c: 2,
                    d: "Light and a landmark for your shelter."
                }];
            t.appendChild(h("div", {
                class: "build-stock"
            }, E("leaf"), h("div", null, h("b", null, `${e.wood??0} TIMBER`), h("span", null, "Chop trees in the raid to collect timber."))));
            for (let r of a) t.appendChild(h("button", {
                class: "build-option",
                type: "button",
                disabled: (e.wood ?? 0) < r.c,
                onTap: () => {
                    ue(), this.beginPlacement(r.k,r.c)
                }
            }, h("div", {
                class: "build-ico"
            }, E(r.k === "door" ? "exit" : r.k === "crate" ? "pack" : r.k === "campfire" ? "sun" : "hammer")), h("div", {
                class: "grow"
            }, h("b", null, r.n), h("span", null, r.d)), h("strong", null, `${r.c} timber`)));
            De(t, {
                title: "Field Building"
            })
        }
        pause() {
            if (this.paused) return;
            let e = this.world.players.length === 1 && this.s.mode === "solo";
            this.paused = e, this.controls.reset();
            let t = this.me,
                a = h("div", {
                    class: "col",
                    style: "gap:8px"
                }, h("div", {
                    class: "muted",
                    style: "font-size:14px"
                }, e ? "The raid is paused." : "Squad raids keep running while this menu is open."), z([E("play"), "Resume"], () => {
                    ue(), this.paused = !1
                }, "primary"), z([E("map"), "Map"], () => {
                    ue(), this.paused = !1, this.openMap()
                }), z([E("hammer"), `Build · ${t.wood??0} timber`], () => {
                    ue(), this.paused = !1, this.openBuild()
                }), z([E("gear"), "Settings"], () => {
                    ue(), this.paused = !1, this.host.openSettings(!0)
                }), Li() ? null : z([E(Lt() ? "shrink" : "expand"), Lt() ? "Exit full screen" : "Full screen"], () => {
                    ue(), this.paused = !1, Wa()
                }), z([E("exit"), this.s.tutorial ? "Skip tutorial" : "Abandon raid"], () => {
                    if (ue(), this.s.tutorial) {
                        this.paused = !1, this.s.tutorial.skip(this);
                        return
                    }
                    nt("Abandon raid?", "You will be treated as killed in action. Everything outside your protected slots is lost; insured gear comes back later.", "Abandon", () => {
                        this.paused = !1, this.world.killPlayer(t, "Abandoned the raid", "")
                    }, !0)
                }, "ghost"));
            De(a, {
                title: "Paused",
                onClose: () => this.paused = !1
            })
        }
        pingWheel() {
            let e = this.me,
                t = ["enemy", "zombie", "ammo", "food", "medicine", "here", "loot", "leave"],
                a = h("div", {
                    class: "ping-wheel",
                    style: `left:${W.W/2}px;top:${W.H/2}px`
                });
            t.forEach((r, o) => {
                let s = o / t.length * Math.PI * 2 - Math.PI / 2;
                a.appendChild(h("button", {
                    style: `left:${110+Math.cos(s)*76}px;top:${110+Math.sin(s)*76}px`,
                    onTap: () => {
                        let d = e.input.aim ?? e.angle;
                        this.cmd({
                            t: "ping",
                            kind: r,
                            x: e.x + Math.cos(d) * 160,
                            y: e.y + Math.sin(d) * 160
                        }), a.remove(), this.overlay.style.pointerEvents = "none"
                    }
                }, qa[r]))
            }), a.appendChild(h("button", {
                style: "left:110px;top:110px;color:var(--dim)",
                onTap: () => {
                    a.remove(), this.overlay.style.pointerEvents = "none"
                }
            }, "Cancel")), this.overlay.appendChild(a), this.overlay.style.pointerEvents = "auto"
        }
        finish() {
            if (this.ended) return;
            this.ended = !0, this.closeInventory(), ni();
            let e = this.s.mode === "client" ? this.s.net?.result() ?? null : this.world.result(this.s.meId);
            e && (this.host.raidEnded(e, {
                insured: this.s.insured,
                startValue: this.s.startValue,
                takenByOthers: this.world.takenByOthers(this.s.meId),
                world: this.world
            }), this.s.mode === "host" && this.s.net?.raidDone?.())
        }
        setObjective(e, t) {
            this.hud.objective = e, this.controls.highlight(t)
        }
        spectate(e) {
            this.renderer.me = e
        }
    };
    var qi = {
            id: "tut",
            name: "Harrow Lane",
            x: 25 * y,
            y: 80 * y,
            r: 70,
            always: !0,
            desc: "The lane west of Hillside Farmhouse."
        },
        $i = class {
            constructor() {
                v(this, "step", 0);
                v(this, "startX", 0);
                v(this, "startY", 0);
                v(this, "house", -1);
                v(this, "walker", -1);
                v(this, "runner", -1);
                v(this, "wait", 0);
                v(this, "finished", !1);
                v(this, "onStep", () => {});
                v(this, "steps", [])
            }
            static setupWorld(e) {
                e.map.extracts.push(qi), e.activeExtracts = new Set(["tut", "north", "marsh"]), e.events = [];
                let t = e.map.buildings.find(r => r.name === "Hillside Farmhouse");
                if (!t) return;
                let a = {
                    Wardrobe: [{
                        id: "bag_school",
                        qty: 1
                    }, {
                        id: "comp_cloth",
                        qty: 2
                    }],
                    "Chest of Drawers": [{
                        id: "val_watch",
                        qty: 1
                    }, {
                        id: "money_cash",
                        qty: 2
                    }],
                    "Kitchen Cupboard": [{
                        id: "food_beans",
                        qty: 1
                    }, {
                        id: "drink_water",
                        qty: 1
                    }],
                    Fridge: [{
                        id: "drink_cola",
                        qty: 1
                    }]
                };
                e.map.containers.forEach((r, o) => {
                    if (r.building !== t.id) return;
                    let s = a[r.label];
                    s && (e.cstate[o].items = s.map((d, n) => ({
                        uid: "tut" + o + "_" + n,
                        id: d.id,
                        qty: d.qty,
                        ...d.id === "bag_school" ? {} : {}
                    })), r.search = 1.2)
                })
            }
            begin(e) {
                let t = e.world,
                    a = e.me;
                a.x = t.safeZone.spawnX, a.y = t.safeZone.spawnY, a.angle = 0, a.active = "melee", t.zombies = t.zombies.filter(d => Math.hypot(d.x - a.x, d.y - a.y) > 1e3), this.startX = a.x, this.startY = a.y;
                let r = t.map.buildings.find(d => d.name === "Hillside Farmhouse");
                this.house = r.id;
                let o = {
                        x: 42.5 * y,
                        y: 76.2 * y
                    },
                    s = d => t.map.containers.findIndex(n => n.building === r.id && n.label === d);
                this.steps = [{
                    text: "Move with the left stick · leave through the east gate",
                    hl: null,
                    done: d => d.player(e.s.meId).x > d.safeZone.x+d.safeZone.w+64
                }, {
                    text: "Tap SWAP to equip your pistol",
                    hl: "swap",
                    done: d => d.player(e.s.meId).active === "sidearm"
                }, {
                    text: "Infected ahead. Aim with the right stick, then tap FIRE",
                    hl: "fire",
                    enter: d => {
                        let n = d.spawnZombie("walker", a.x + 300, a.y - 30, "wander");
                        n && (n.angle = Math.PI, this.walker = n.id)
                    },
                    done: d => d.player(e.s.meId).stats.zkills >= 1
                }, {
                    text: "Go inside the farmhouse and tap SEARCH near the wardrobe",
                    hl: "interact",
                    wp: o,
                    done: d => d.cstate[s("Wardrobe")]?.opened || d.player(e.s.meId).stats.searched >= 1
                }, {
                    text: "Take the rucksack: double-tap it, or drag it onto the Backpack slot",
                    hl: null,
                    done: d => !!d.player(e.s.meId).lo.equip.backpack
                }, {
                    text: "Valuables sell well. Search the chest of drawers",
                    hl: "interact",
                    done: d => d.hasItem(d.player(e.s.meId), "val_watch")
                }, {
                    text: "Something heard you. Fight it off!",
                    hl: "fire",
                    enter: d => {
                        let n = d.player(e.s.meId),
                            l = d.spawnZombie("runner", 43.5 * y, 79.5 * y, "chase");
                        l && (l.target = n.id, l.tx = n.x, l.ty = n.y, this.runner = l.id)
                    },
                    done: d => {
                        let n = d.player(e.s.meId),
                            l = d.zombies.find(c => c.id === this.runner);
                        return !l || l.state === "dead" || n.hp < 80
                    }
                }, {
                    text: "You're bleeding. Tap HEAL to patch yourself up",
                    hl: "heal",
                    enter: d => {
                        let n = d.player(e.s.meId);
                        n.bleed === 0 && (n.bleed = 1, n.hp = Math.min(n.hp, 74), K("You were scratched in the scuffle", "warn"))
                    },
                    done: d => d.player(e.s.meId).bleed === 0
                }, {
                    text: "Follow the EVAC marker and stand in the extraction zone",
                    hl: null,
                    wp: {
                        x: qi.x,
                        y: qi.y
                    },
                    done: d => d.player(e.s.meId).extracted
                }], this.enter(e)
            }
            enter(e) {
                let t = this.steps[this.step];
                t && (t.enter?.(e.world, this, e), e.setObjective(t.text, t.hl), e.renderer.waypoint = t.wp ?? null, this.onStep(this.step, t.text))
            }
            update(e, t) {
                if (this.finished) return;
                let a = this.steps[this.step];
                if (a) {
                    if (this.wait > 0) {
                        this.wait -= e, this.wait <= 0 && this.enter(t);
                        return
                    }
                    if (a.done(t.world, this)) {
                        if (this.step++, this.step >= this.steps.length) {
                            this.finished = !0, t.setObjective("", null), t.renderer.waypoint = null;
                            return
                        }
                        t.setObjective("", null), this.wait = .7
                    }
                }
            }
            onFx(e, t) {}
            onInventory(e, t) {
                t && this.step === 4 && e.setObjective("Double-tap the rucksack, or drag it onto the Backpack slot", null)
            }
            skip(e) {
                this.finished = !0, this.step = 99, e.setObjective("Tutorial skipped. Reach an extraction to keep your loot.", null), e.renderer.waypoint = {
                    x: qi.x,
                    y: qi.y
                }
            }
        };

    function vo(i, e, t, a, r, o, s) {
        let d = e.outcome === "extracted",
            n = d ? "Survived" : e.outcome === "mia" ? "Missing" : "You died",
            l = d ? `Extracted at ${e.extract} after ${Ct(e.time)}` : e.outcome === "mia" ? "The extraction window closed with you still inside." : `${e.cause}${e.killer?" \xB7 killed by "+e.killer:""} \xB7 survived ${Ct(e.time)}`,
            c = (w, P, g = "") => h("div", {
                class: "kv " + g
            }, h("b", null, P), h("span", null, w)),
            u = h("div", {
                class: "end-grid"
            }, c("Survival time", Ct(e.time)), c("Zombies killed", String(e.stats.zkills)), c("Players killed", String(e.stats.pkills)), d ? c("Loot gained", G(t.lootValue), "good") : c("Value lost", G(t.lostValue), "bad"), c("XP earned", "+" + G(t.xp), "good"), c("Distance", (e.stats.distance / 32 / 1e3).toFixed(2) + " km"), c("Rare finds", String(e.stats.rares.length)), c("Missions done", String(t.missionsDone.length))),
            m = h("div", {
                class: "loot-reel"
            }),
            p = h("div", {
                class: "sec-h"
            }, d ? "Brought home" : "Lost in the raid"),
            f = (d ? a : e.lost).slice().sort((w, P) => Ge[C(P.id).rarity] - Ge[C(w.id).rarity] || le(P) - le(w)),
            b = f.slice(0, 14);
        b.forEach((w, P) => {
            let g = C(w.id),
                S = !d && (s.s.insured ?? []).includes(w.uid),
                T = h("div", {
                    class: "li r-" + g.rarity + (d ? "" : " lost"),
                    style: `--rc:${ae[g.rarity]};animation-delay:${.5+P*.12}s`,
                    title: `${g.name}${w.qty>1?" \xD7"+w.qty:""}`
                }, h("img", {
                    src: $e(w, Math.min(46, g.w * 23), Math.min(46, g.h * 23)),
                    alt: g.name
                }), w.qty > 1 ? h("span", {
                    class: "q mono",
                    style: "position:absolute;right:3px;bottom:1px;font-size:11px"
                }, String(w.qty)) : null, S ? h("span", {
                    style: "position:absolute;left:2px;top:2px;color:var(--cyan)",
                    title: "Insured"
                }, E("shield")) : null);
            d && Ge[g.rarity] >= 2 && setTimeout(() => F.play("rare"), 500 + P * 120), m.appendChild(T)
        }), f.length > b.length && m.appendChild(h("div", {
            class: "muted",
            style: "align-self:center;font-size:13px"
        }, `+${f.length-b.length} more`)), f.length || m.appendChild(h("div", {
            class: "muted",
            style: "font-size:14px"
        }, d ? "Nothing new this time. Every run teaches you the map." : "You went in light. Nothing lost."));
        let x = h("div", {
            class: "col scroll",
            style: "gap:4px;font-size:14px;min-height:0;flex:1"
        });
        if (!d) {
            let w = e.loadout.secure.items.length;
            x.appendChild(h("div", {
                class: "row gap"
            }, E("shield"), `${w} protected item${w===1?"":"s"} kept`)), t.insuredBack ? x.appendChild(h("div", {
                class: "row gap",
                style: "color:var(--cyan)"
            }, E("clock"), `${t.insuredBack} insured item${t.insuredBack===1?"":"s"} will return to your safehouse`)) : x.appendChild(h("div", {
                class: "row gap muted"
            }, E("info"), "Nothing was insured. Insure your best gear before the next raid.")), i.profile.status.hp < 20 && x.appendChild(h("div", {
                class: "row gap",
                style: "color:var(--warn)"
            }, E("heart"), "You are too injured to redeploy. Heal at the medical station first."))
        }
        for (let w of t.levelRewards) x.appendChild(h("div", {
            class: "row gap",
            style: "color:var(--accHi)"
        }, E("star"), w));
        t.passLevels > 0 && x.appendChild(h("div", {
            class: "row gap",
            style: "color:var(--accHi)"
        }, E("star"), `Season pass +${t.passLevels} level${t.passLevels>1?"s":""}`));
        for (let w of t.missionsDone) x.appendChild(h("div", {
            class: "row gap",
            style: "color:var(--cyan)"
        }, E("check"), "Mission complete: " + w));
        let k = h("div", {
                class: "row gap",
                style: "margin-top:auto;justify-content:flex-end;flex:none"
            }),
            M = s.world.players.filter(w => w.id !== s.s.meId && !w.dead && !w.extracted);
        !d && M.length && k.appendChild(z([E("eye"), "Spectate squad"], () => {
            s.spectate(M[0].id), R.style.display = "none";
            let w = z("Return to safehouse", () => r(), "primary small");
            w.style.cssText += ";position:absolute;right:16px;bottom:16px;z-index:45", s.layer.appendChild(w)
        }, "ghost")), d && !o && i.profile.status.hp >= 20 && k.appendChild(z([E("play"), "Deploy again"], () => {
            r(), setTimeout(() => i.startRaid({
                hour: 12
            }), 80)
        }, "teal")), k.appendChild(z([E("house"), o && d ? "Back to the safehouse" : "Return to safehouse"], () => r(), "primary"));
        let R = h("div", {
            class: "raid-end" + (d ? " win" : "")
        }, h("div", {
            class: "row between",
            style: "align-items:flex-end"
        }, h("div", null, h("h1", null, n), h("div", {
            class: "cause"
        }, l)), h("div", {
            class: "muted mono",
            style: "font-size:12px;text-align:right"
        }, `Level ${i.profile.level}`, h("br"), `${G(i.profile.cash)} cash`)), u, h("div", {
            class: "row",
            style: "gap:18px;align-items:stretch;min-height:0;flex:1;overflow:hidden;margin-bottom:8px"
        }, h("div", {
            class: "col grow scroll",
            style: "gap:6px;min-width:0;min-height:0"
        }, p, m), h("div", {
            class: "col",
            style: "width:min(300px,38%);gap:6px;min-height:0"
        }, h("div", {
            class: "sec-h"
        }, "Report"), x)), k);
        return R
    }
    var ko = ["Gunshots carry. A suppressor cuts the noise by about two thirds, which keeps fights small.", "Anything in your protected slots survives death. Put your most valuable small item there.", "Night raids pay better, but infected see further and move faster. Bring a light.", "Insured gear comes back after you die, as long as nobody else walks out with it.", "Walls and closed doors block sight both ways. Use them.", "Sustained gunfire draws a horde. Shoot, then move.", "Crouch to move quietly. Sprinting is loud and drains water.", "The Brute hunts Checkpoint Echo after dark. Bring armour-piercing rounds.", "Toxic bloaters burst into gas. A gas mask makes you immune.", "Military gear lives at Checkpoint Echo. So do the soldiers who died guarding it."];

    function wo(i, e = !1) {
        let t = h("i", {
                style: "width:5%"
            }),
            a = e ? "Your safehouse is the old lock-keeper\u2019s cottage on the canal. Supplies are running out. Head into Little Harrow and bring something back." : ko[Math.floor(Math.random() * ko.length)],
            r = h("div", {
                class: "loading",
                role: "status",
                "aria-label": `Loading ${i}`
            }, h("div", {
                class: "ld-orb"
            }), h("div", {
                class: "ld-kicker holo-t"
            }, e ? "First run" : "Deploying to"), h("div", {
                class: "ld-where chrome"
            }, i), h("div", {
                class: "tip"
            }, h("b", null, e ? "Briefing" : "Field note"), a), h("div", {
                class: "lbar"
            }, t), h("div", {
                class: "studio"
            }, "Dovy Studio"));
        return {
            el: r,
            progress(o) {
                t.style.width = Math.max(5, Math.round(o * 100)) + "%"
            },
            close() {
                r.style.transition = "opacity .4s", r.style.opacity = "0", setTimeout(() => r.remove(), 420)
            }
        }
    }

    function DZTopPortrait(i, e = 160, t = -Math.PI / 2) {
        let a = pe(e * 2, e * 2),
            r = a.getContext("2d");
        r.translate(e, e), r.scale(e / 36 * 2, e / 36 * 2), r.rotate(t);
        let o = ye.find(s => s.id === i.outfit) ?? ye[0];
        return r.fillStyle = "rgba(0,0,0,0.3)", r.beginPath(), r.ellipse(2, 3, 15, 13, 0, 0, Math.PI * 2), r.fill(), lt(r, {
            r: 13,
            skin: _t[i.skin],
            hair: It[i.hair],
            cloth: o.jacket,
            cloth2: o.jacket,
            trousers: o.trousers,
            phase: .1,
            stride: .2,
            arms: "idle",
            pony: i.body === "f",
            thin: i.body === "f"
        }), dzOutfitDetail(r, o), DZSurvivorDetail(r,o), r.fillStyle = o.accent, r.fillRect(-6, -12.5, 3, 4), a.style.width = e + "px", a.style.height = e + "px", a
    }

    function So(i) {
        let e = {
                body: "m",
                skin: 1,
                hair: 0,
                outfit: "o_default",
                wskin: null
            },
            t = "",
            a = h("div", {
                class: "survivor-pad"
            }),
            r = () => {
                a.innerHTML = "", a.appendChild(At(e, 180))
            },
            o = h("input", {
                class: "text",
                id: "survivor-name",
                maxlength: "16",
                placeholder: "Survivor name",
                autocomplete: "off",
                spellcheck: "false",
                "aria-label": "Survivor name"
            });
        o.addEventListener("input", () => {
            t = o.value.replace(/[^\p{L}\p{N} _-]/gu, "").slice(0, 16), t !== o.value && (o.value = t), d.disabled = t.trim().length < 2
        });
        let s = (l, c, u, m) => {
                let p = h("div", {
                        class: "seg"
                    }),
                    f = () => {
                        p.innerHTML = "";
                        for (let b of c) p.appendChild(h("button", {
                            class: u() === b.v ? "on" : "",
                            type: "button",
                            "aria-label": `${l}: ${b.label}`,
                            onTap: () => {
                                m(b.v), f(), r()
                            }
                        }, b.swatch ? h("span", {
                            style: `display:inline-block;width:16px;height:16px;border-radius:50%;background:${b.swatch};box-shadow:inset 0 0 0 1px rgba(0,0,0,.5);vertical-align:middle`
                        }) : b.label))
                    };
                return f(), h("div", {
                    class: "col",
                    style: "gap:4px"
                }, h("div", {
                    class: "sec-h"
                }, l), p)
            },
            d = z([E("play"), "Begin"], () => {
                t.trim().length < 2 || i.createProfile(t.trim(), e)
            }, "primary");
        d.disabled = !0;
        let n = h("div", {
            class: "screen"
        }, h("div", {
            class: "topbar"
        }, h("div", {
            class: "col"
        }, h("h2", null, "New survivor"), h("div", {
            class: "sub"
        }, "Harrowmere, East Anglia \xB7 day 41 after the collapse"))), h("div", {
            class: "content",
            style: "align-items:center;justify-content:center;gap:28px"
        }, a, h("div", {
            class: "col",
            style: "gap:10px;width:min(360px,52%)"
        }, o, s("Build", [{
            v: "m",
            label: "Survivor A"
        }, {
            v: "f",
            label: "Survivor B"
        }], () => e.body, l => e.body = l), s("Skin", _t.map((l, c) => ({
            v: c,
            label: "Tone " + (c + 1),
            swatch: l
        })), () => e.skin, l => e.skin = l), s("Hair", It.map((l, c) => ({
            v: c,
            label: "Hair " + (c + 1),
            swatch: l
        })), () => e.hair, l => e.hair = l), h("div", {
            class: "row end"
        }, d))));
        return r(), setTimeout(() => o.focus(), 300), {
            el: n
        }
    }
    var Ga = class {
        constructor(e) {
            v(this, "canvas");
            v(this, "world");
            v(this, "r");
            v(this, "raf", 0);
            v(this, "last", 0);
            v(this, "t", 0);
            v(this, "running", !0);
            this.canvas = h("canvas"), this.world = new Rt({
                seed: 7,
                startHour: 22.5,
                raidLength: 99999,
                weather: Math.random() < .35 ? "rain" : "clear",
                events: !1
            }), this.world.zombies = [];
            let t = Ki(1);
            t.equip.primary = {
                uid: "bd",
                id: "w_fieldmaster",
                qty: 1,
                cond: 1,
                ammo: 5
            }, t.equip.backpack = {
                uid: "bp",
                id: "bag_hiker",
                qty: 1
            };
            let a = this.world.addPlayer(1, "", 1, t, {
                hp: 100,
                hunger: 100,
                thirst: 100,
                infection: 0
            }, 0);
            a.x = 46 * y + 70, a.y = 15 * y + 50, a.angle = Math.PI * .9, this.world.zombies = [], this.r = new di(this.canvas, this.world, 1), this.r.looks.set(1, e), this.r.showNames = !1, this.r.setQuality(W.dpr >= 2 ? "medium" : "low"), this.resize(), this.r.cam.x = a.x - 120, this.r.cam.y = a.y, this.raf = requestAnimationFrame(r => this.frame(r))
        }
        resize() {
            this.r.resize(W.W, W.H, W.dpr), this.r.zoomPref = 1.25
        }
        frame(e) {
            if (!this.running) return;
            this.raf = requestAnimationFrame(r => this.frame(r));
            let t = Math.min(.05, (e - this.last) / 1e3 || .016);
            if (e - this.last < 30) return;
            this.last = e, this.t += t;
            let a = this.world.players[0];
            a.animT += t * .2, a.angle = Math.PI * .9 + Math.sin(this.t * .4) * .12, this.world.clock = 22.5, this.r.update(t), this.r.cam.x = a.x - W.W * .16 / this.r.cam.zoom + Math.sin(this.t * .07) * 30, this.r.cam.y = a.y + Math.cos(this.t * .05) * 18, this.r.cam.zoom = this.r.baseZoom(), this.r.draw()
        }
        stop() {
            this.running = !1, cancelAnimationFrame(this.raf)
        }
    };

    function Mo(i) {
        let e = i.profile,
            t = new Ga(e.look),
            a = e.tutorial.step === 0 && !e.tutorial.done,
            r = (w, P, g, S, T = !1) => h("button", {
                class: "mnav",
                type: "button",
                onTap: g,
                style: T ? "color:var(--accHi)" : ""
            }, E(w), P, S ? h("span", {
                class: "note"
            }, S) : null),
            o = i.now(),
            s = Ft(e),
            d = Array.from({
                length: s
            }, (w, P) => P + 1).some(w => !e.pass.claimedFree.includes(w) || e.pass.premium && !e.pass.claimedPrem.includes(w)),
            n = [...e.missions.daily, ...e.missions.weekly].some(w => {
                let P = [...kt, ...wt].find(g => g.id === w.id);
                return !!P && !w.claimed && w.prog >= P.target
            }),
            l = !e.tutorial.done && e.tutorial.step === 1 ? "Sell the watch" : !e.tutorial.done && e.tutorial.step === 2 ? "Upgrade stash" : "",
            c = h("button", {
                class: "play-btn" + (a || !l && e.stats.raids < 3 ? " glow" : ""),
                type: "button",
                onTap: () => a ? i.startRaid({
                    hour: 10.5,
                    tutorial: !0
                }) : i.go("deploy")
            }, "Play", h("small", null, a ? "First run" : "Harrowmere", h("br"), a ? "Tutorial" : "Extraction")),
            u = h("div", {
                class: "menu-left"
            }, h("div", {
                class: "wordmark"
            }, h("span", {
                class: "dovy"
            }, "Dovy"), h("span", {
                class: "dz"
            }, "Deadzone"), h("i", {
                class: "spk s1"
            }), h("i", {
                class: "spk s2"
            })), h("div", {
                class: "menu-nav"
            }, c, r("house", "Safehouse", () => i.go("safehouse"), l === "Upgrade stash" ? "Upgrade stash" : e.builds.length ? "Building\u2026" : "", l === "Upgrade stash"), r("leaf", "Grow", () => i.go("safehouse", "garden"), e.plots.some(w => w.seed && w.watered && w.done <= o) ? "Harvest ready" : e.plots.some(w => w.seed) ? "Crops growing" : "Garden"), r("pack", "Gear", () => i.go("loadout")), r("coin", "Market", () => l === "Sell the watch" ? i.go("traders") : i.go("market"), l === "Sell the watch" ? "Sell the watch" : "Safe zone", l === "Sell the watch"), r("target", "Missions", () => i.go("missions"), n ? "Claim reward" : i.streakReady() ? "Daily reward" : ""), r("star", "Season pass", () => i.go("pass"), d ? "Rewards ready" : `Lv ${s}`))),
            m = zt(e.level),
            p = ho(),
            f = h("div", {
                class: "menu-top"
            }, h("div", {
                class: "lvl",
                title: `Level ${e.level}`
            }, h("div", {
                class: "num"
            }, String(e.level)), h("div", {
                class: "col",
                style: "gap:3px"
            }, h("div", {
                style: "font-size:12px;font-weight:700;letter-spacing:.06em"
            }, e.name), h("div", {
                class: "bar"
            }, h("i", {
                style: `width:${Math.min(100,e.xp/m*100)}%`
            })))), Pt("cash", e.cash), Pt("credits", e.credits, () => i.go("store", "credits")), Pt("tokens", e.tokens), p.el),
            b = h("div", {
                class: "menu-dock"
            }, h("button", {
                class: "dock-btn",
                type: "button",
                onTap: () => i.go("squad")
            }, E("users"), "Squad"), h("button", {
                class: "dock-btn hot",
                type: "button",
                onTap: () => i.go("store")
            }, E("cart"), "Store"), h("button", {
                class: "dock-btn",
                type: "button",
                onTap: () => i.go("profile")
            }, E("user"), "Profile"), h("button", {
                class: "dock-btn",
                type: "button",
                onTap: () => i.openSettings(!1)
            }, E("gear"), "Settings")),
            x = h("div", {
                class: "menu-news"
            }),
            k = (w, P, g, S) => x.appendChild(h("button", {
                class: "news",
                type: "button",
                onTap: S
            }, E(w), h("div", null, h("b", null, P), h("span", null, g)))),
            M = Bt(e, o);
        M.canClaim && k("star", `Daily reward \xB7 day ${M.day}`, "Log in every day for bigger rewards", () => i.go("missions")), !He(e, o) && e.stats.raids >= 2 && k("diamond", "DOVY+ Survivor", "+4 stash rows, 40 credits a day", () => i.go("store", "plus")), k("star", xi.name, `Lv ${s}/60 \xB7 ${e.pass.premium?"Premium":"Free"} track \xB7 ${pt-e.pass.xp%pt} XP to next`, () => i.go("pass")), e.claims.some(w => w.ready <= o && w.ready > 0) && k("shield", "Insurance returned", "Collect your gear at the safehouse", () => i.go("safehouse", "claims"));
        let R = h("div", {
            class: "menu"
        }, t.canvas, h("div", {
            class: "menu-shade"
        }), u, f, x, b, h("div", {
            class: "studio-mark"
        }, "A Dovy Studio game"));
        return za(R, () => {}, !0), a && F.play("notice"), {
            el: R,
            refresh() {
                t.resize()
            },
            destroy() {
                t.stop(), p.destroy()
            }
        }
    }

    function Le(i, e, t, a = {}) {
        let r = h("button", {
                class: "ibtn",
                "aria-label": "Back",
                onTap: a.back ?? (() => i.back())
            }, E("back")),
            o = a.currencies === !1 ? null : h("div", {
                class: "row gap"
            }, Pt("cash", i.profile.cash), Pt("credits", i.profile.credits, () => i.go("store", "credits")), Pt("tokens", i.profile.tokens));
        return h("div", {
            class: "topbar"
        }, r, h("div", {
            class: "col grow",
            style: "min-width:0"
        }, h("h2", null, e), t ? h("div", {
            class: "sub"
        }, t) : null), ...a.right ?? [], o)
    }

    function To(i, e) {
        let t = h("div", {
            class: "row",
            style: "gap:3px"
        });
        for (let a = 0; a < e; a++) t.appendChild(h("i", {
            style: `display:block;width:12px;height:5px;background:${a<i?"var(--acc)":"rgba(255,255,255,.12)"}`
        }));
        return t
    }

    function Ot(i, e, t) {
        let a = h("div", {
            class: "tabs",
            role: "tablist"
        });
        for (let r of i) a.appendChild(h("button", {
            class: "tab" + (r.id === e ? " on" : ""),
            role: "tab",
            "aria-selected": r.id === e ? "true" : "false",
            type: "button",
            onTap: () => t(r.id)
        }, r.label, r.dot ? h("span", {
            class: "badge-dot"
        }) : null));
        return a
    }
    var Co = [{
        id: "dawn",
        label: "Dawn",
        hour: 5.25,
        icon: "sun",
        note: "Low light, fog is common. Day breaks within minutes.",
        risk: "Medium"
    }, {
        id: "day",
        label: "Day",
        hour: 10.5,
        icon: "sun",
        note: "Best visibility. Infected see you sooner too.",
        risk: "Lowest"
    }, {
        id: "dusk",
        label: "Dusk",
        hour: 18.25,
        icon: "moon",
        note: "Night falls mid-raid. Bring a light.",
        risk: "High"
    }, {
        id: "night",
        label: "Night",
        hour: 22,
        icon: "moon",
        note: "Extra loot rolls and night-only finds. Infected are faster. The Brute may hunt.",
        risk: "Severe"
    }];

    function Ro(i) {
        let e = "day",
            t = h("div", {
                class: "content",
                style: "gap:12px"
            }),
            a = h("div", {
                class: "screen"
            }, Le(i, "Deploy", "Choose when to go in. Everything you carry is at risk."), t),
            r = () => {
                let o = i.profile,
                    s = i.now();
                Ye(o, s), me(t);
                let d = pe(220, 220);
                li(d.getContext("2d"), i.atlas, null, 220, 220, 2560, 2560, 1.35, {
                    me: null,
                    mates: [],
                    pings: [],
                    events: [],
                    waypoint: null
                }, !0), d.style.cssText = "width:84px;height:84px;flex:none;border-radius:12px;box-shadow:0 0 0 1px var(--lineHi)";
                let n = h("div", {
                        class: "col",
                        style: "gap:8px;width:min(230px,28%)"
                    }, h("div", {
                        class: "panel col",
                        style: "padding:10px;gap:8px"
                    }, h("div", {
                        class: "row",
                        style: "gap:10px"
                    }, d, h("div", {
                        class: "col",
                        style: "gap:6px;min-width:0"
                    }, h("b", {
                        class: "chrome",
                        style: "font-family:var(--display);font-weight:900;font-size:12px;letter-spacing:.03em"
                    }, "HARROWMERE"), h("span", {
                        class: "tag",
                        style: "align-self:flex-start"
                    }, `${Math.round(i.atlas.percent()*100)}% explored`))), h("span", {
                        class: "muted",
                        style: "font-size:12px;line-height:1.35"
                    }, "Village, farm, forest, industrial estate and a military checkpoint.")), h("div", {
                        class: "panel",
                        style: "padding:10px;opacity:.55"
                    }, h("div", {
                        class: "row gap"
                    }, E("lock"), h("div", {
                        class: "col"
                    }, h("b", null, "Saltmarsh Docks"), h("span", {
                        class: "muted",
                        style: "font-size:12px"
                    }, "Coming in Season 2"))))),
                    l = h("div", {
                        class: "col scroll",
                        style: "gap:6px;flex:1;min-width:0;min-height:0;padding-right:2px"
                    }, h("div", {
                        class: "sec-h"
                    }, "Time of day"));
                for (let w of Co) {
                    let P = e === w.id;
                    l.appendChild(h("button", {
                        class: "li-row",
                        type: "button",
                        style: `cursor:pointer;text-align:left;color:inherit;font:inherit;${P?"border-color:var(--acc);box-shadow:0 0 14px rgba(200,255,46,.25);background:rgba(200,255,46,.1)":""}`,
                        onTap: () => {
                            e = w.id, r()
                        }
                    }, E(w.icon), h("div", {
                        class: "col grow"
                    }, h("div", {
                        class: "ttl"
                    }, `${w.label} \xB7 ${String(Math.floor(w.hour)).padStart(2,"0")}:${String(Math.round(w.hour%1*60)).padStart(2,"0")}`), h("div", {
                        class: "desc"
                    }, w.note)), h("span", {
                        class: "tag" + (w.risk === "Severe" || w.risk === "High" ? " red" : "")
                    }, w.risk)))
                }
                let c = o.lo,
                    u = ft(c, !1),
                    m = c.secure.items.reduce((w, P) => w + le(P.item), 0),
                    p = h("div", {
                        class: "col panel",
                        style: "gap:8px;width:min(300px,36%);min-height:0"
                    }),
                    f = h("div", {
                        class: "col scroll",
                        style: "gap:6px;flex:1;min-height:0"
                    });
                p.appendChild(f), f.appendChild(h("h3", null, "Kit at risk"));
                let b = h("div", {
                    class: "row",
                    style: "gap:4px;flex-wrap:wrap"
                });
                for (let w of Ce) {
                    let P = c.equip[w];
                    if (!P) continue;
                    let g = C(P.id),
                        S = o.insureNext.includes(P.uid);
                    b.appendChild(h("div", {
                        class: "thumb" + (g.w > 2 ? " wide" : ""),
                        style: `--rc:${ae[g.rarity]};position:relative`,
                        title: g.name
                    }, h("img", {
                        src: $e(P, g.w > 2 ? 84 : 40, 40),
                        alt: g.name
                    }), S ? h("span", {
                        style: "position:absolute;left:1px;top:1px;color:var(--cyan)"
                    }, E("shield")) : null))
                }
                f.appendChild(b);
                let x = we(c).length,
                    k = o.insureNext.reduce((w, P) => {
                        let g = we(c).find(S => S.uid === P);
                        return w + (g ? ti(o, g) : 0)
                    }, 0),
                    M = {
                        food: Yt[o.safehouse.pantry],
                        water: Yt[o.safehouse.water]
                    };
                f.appendChild(h("table", {
                    class: "stats-table"
                }, h("tr", null, h("td", null, "Items carried"), h("td", null, String(x))), h("tr", null, h("td", null, "Value at risk"), h("td", {
                    style: "color:#ff7d95"
                }, G(u))), h("tr", null, h("td", null, "Protected (kept on death)"), h("td", {
                    style: "color:var(--cyan)"
                }, G(m))), h("tr", null, h("td", null, `Insured ${o.insureNext.length}/${Qt(o,s)}`), h("td", null, k ? G(k) + " cash" : "\u2014")), h("tr", null, h("td", null, "Health"), h("td", {
                    style: o.status.hp < 50 ? "color:#ff7d95" : ""
                }, Math.round(o.status.hp) + "%")), h("tr", null, h("td", null, "Hunger / thirst"), h("td", null, `${Math.round(Math.max(o.status.hunger,M.food))} / ${Math.round(Math.max(o.status.thirst,M.water))}`))));
                let R = [];
                if (!c.equip.primary && !c.equip.sidearm && !c.equip.secondary) R.push("No firearm equipped.");
                else {
                    let w = c.equip.primary ?? c.equip.sidearm ?? c.equip.secondary,
                        P = C(w.id).weapon.cal,
                        g = we(c).filter(S => S.id === P).reduce((S, T) => S + T.qty, 0) + (w.ammo ?? 0);
                    g < 15 && R.push(`Only ${g} rounds for your ${C(w.id).name}.`)
                }
                c.bag || R.push("No backpack: you can only carry 4 pocket items."), we(c).some(w => C(w.id).cat === "medical") || R.push("No medical supplies."), o.status.hp < 50 && R.push("You are injured. Heal at the medical station first."), (e === "night" || e === "dusk") && !we(c).some(w => w.att && Object.values(w.att).includes("att_light") || w.id === "att_light") && R.push("No tactical light for a night raid.");
                for (let w of R) f.appendChild(h("div", {
                    class: "row gap",
                    style: "font-size:13px;color:#ffcf8a"
                }, E("info"), w));
                p.appendChild(h("div", {
                    class: "row gap",
                    style: "flex:none"
                }, z([E("pack"), "Loadout"], () => i.go("loadout"), "ghost small"), z([E("play"), "Deploy"], () => i.startRaid({
                    hour: Co.find(w => w.id === e).hour
                }), "primary grow"))), t.appendChild(n), t.appendChild(l), t.appendChild(p)
            };
        return r(), {
            el: a,
            refresh: r
        }
    }
    var Is = {
        stash: "pack",
        rack: "target",
        bench: "hammer",
        medical: "medkit",
        generator: "bolt",
        pantry: "food",
        water: "drop",
        garden: "leaf",
        growroom: "flask",
        security: "shield",
        radio: "radio"
    };

    function ui(i, e = 40, t) {
        let a = C(i);
        return h("div", {
            class: "thumb",
            style: `--rc:${ae[a.rarity]};width:${e+4}px;height:${e+4}px;position:relative`,
            title: a.name
        }, h("img", {
            src: Se(i, e, e),
            alt: a.name
        }), t !== void 0 ? h("span", {
            class: "mono",
            style: "position:absolute;right:2px;bottom:0;font-size:10px;text-shadow:0 1px 2px #000"
        }, String(t)) : null)
    }

    function Po(i, e) {
        let t = typeof e == "string" ? e : "upgrades",
            a = h("div", {
                class: "content",
                style: "flex-direction:column;gap:8px"
            }),
            r = h("div", {
                class: "screen"
            }, Le(i, "Safehouse", "The lock-keeper\u2019s cottage, Harrow Cut"), a),
            o = () => {
                let s = i.profile,
                    d = i.now();
                Ye(s, d), me(a);
                let n = s.claims.some(m => m.ready <= d),
                    l = s.crafts.some(m => m.done <= d),
                    c = s.plots.some(m => m.seed && m.watered && m.done <= d);
                a.appendChild(Ot([{
                    id: "upgrades",
                    label: "Upgrades"
                }, {
                    id: "craft",
                    label: "Workbench",
                    dot: l
                }, {
                    id: "garden",
                    label: "Garden & grow room",
                    dot: c
                }, {
                    id: "claims",
                    label: "Insurance",
                    dot: n
                }], t, m => {
                    t = m, o()
                }));
                let u = h("div", {
                    class: "scroll",
                    style: "flex:1;min-height:0"
                });
                if (a.appendChild(u), t === "upgrades") {
                    let m = h("div", {
                        class: "row gap muted",
                        style: "font-size:13px;margin-bottom:6px;flex-wrap:wrap"
                    }, E("heart"), `Health ${Math.round(s.status.hp)}% (+${yi[s.safehouse.medical]>=999?"full":yi[s.safehouse.medical]+"/min"})`, " \xB7 ", E("pack"), `Stash 10\xD7${va(s,d)}`, " \xB7 ", E("target"), `Rack ${s.rack.length}/${Xt(s)}`, " \xB7 ", `Builds ${s.builds.length}/2`);
                    u.appendChild(m);
                    let p = h("div", {
                        style: "display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px"
                    });
                    for (let f of Ni) {
                        let b = s.safehouse[f.id],
                            x = f.levels.length,
                            k = s.builds.find(w => w.id === f.id),
                            M = f.levels[b],
                            R = h("div", {
                                class: "panel",
                                style: "padding:10px;display:flex;flex-direction:column;gap:6px" + (s.tutorial.step === 2 && f.id === "stash" && !s.tutorial.done ? ";box-shadow:inset 0 0 0 2px var(--accHi)" : "")
                            });
                        if (R.appendChild(h("div", {
                                class: "row gap"
                            }, E(Is[f.id]), h("b", {
                                style: "font-size:16px;letter-spacing:.04em"
                            }, f.name), h("div", {
                                class: "grow"
                            }), To(b, x))), R.appendChild(h("div", {
                                class: "muted",
                                style: "font-size:13px;line-height:1.3"
                            }, b > 0 ? `Now: ${f.levels[b-1].effect}` : f.blurb)), k) {
                            let w = k.done - d;
                            R.appendChild(h("div", {
                                class: "row gap"
                            }, E("clock"), h("span", {
                                class: "mono"
                            }, `Level ${k.level} in ${Qe(w)}`))), R.appendChild(h("div", {
                                class: "prog"
                            }, h("i", {
                                style: `width:${Math.max(0,Math.min(100,100-w/(M.minutes*6e4*Jt(s,d))*100))}%`
                            })));
                            let P = Ti(w);
                            R.appendChild(h("div", {
                                class: "row end"
                            }, z([E("diamond"), `Finish now \xB7 ${P}`], () => i.apply(yr(s, f.id, i.now()), "build"), "small teal")))
                        } else if (M) {
                            R.appendChild(h("div", {
                                style: "font-size:13px"
                            }, h("b", null, `Level ${b+1}: `), M.effect));
                            let w = h("div", {
                                class: "row",
                                style: "gap:4px;flex-wrap:wrap;align-items:center"
                            });
                            w.appendChild(h("span", {
                                class: "cur c-cash",
                                style: s.cash < M.cash ? "color:#ff7d95" : ""
                            }, E("coin"), G(M.cash)));
                            for (let S of M.items) {
                                let T = Zi(s, S.id),
                                    A = ui(S.id, 26, S.qty);
                                T < S.qty && (A.style.outline = "2px solid rgba(217,68,58,.7)"), A.title = `${C(S.id).name}: ${T}/${S.qty} in stash`, w.appendChild(A)
                            }
                            M.minutes && w.appendChild(h("span", {
                                class: "muted mono",
                                style: "font-size:12px;margin-left:4px"
                            }, "\u23F1 " + Qe(M.minutes * 6e4 * Jt(s, d)))), R.appendChild(w);
                            let P = Ta(s, f.id),
                                g = z(P.ok ? `Build level ${b+1}` : P.error, () => {
                                    let S = br(s, f.id, i.now());
                                    i.apply(S, "build") && (i.track("safehouse_upgrade", {
                                        id: f.id,
                                        level: b + 1
                                    }), f.id === "stash" && s.tutorial.step === 2 && !s.tutorial.done && (s.tutorial.done = !0, s.tutorial.step = 3, i.track("tutorial_completed"), i.save(!0), setTimeout(() => K("Tutorial complete. Every raid you survive makes the next one easier.", "mission", 5e3), 300)))
                                }, P.ok ? "small primary" : "small");
                            P.ok || g.classList.add("disabled"), R.appendChild(h("div", {
                                class: "row end",
                                style: "margin-top:auto"
                            }, g))
                        } else R.appendChild(h("div", {
                            class: "tag green"
                        }, E("check"), "Fully upgraded"));
                        p.appendChild(R)
                    }
                    u.appendChild(p)
                } else if (t === "craft") {
                    let m = h("div", {
                        class: "panel",
                        style: "padding:10px;margin-bottom:8px"
                    });
                    m.appendChild(h("h3", null, `Queue ${s.crafts.length}/${s.safehouse.bench>=2?3:2}`)), s.crafts.length || m.appendChild(h("div", {
                        class: "muted",
                        style: "font-size:13px"
                    }, s.safehouse.bench ? "Nothing crafting. Pick a recipe below." : "Build the Workbench in Upgrades to start crafting.")), s.crafts.forEach((p, f) => {
                        let b = Ht.find(k => k.id === p.recipe),
                            x = p.done - d;
                        m.appendChild(h("div", {
                            class: "li-row"
                        }, ui(b.out.id, 32, b.out.qty), h("div", {
                            class: "col grow"
                        }, h("div", {
                            class: "ttl"
                        }, C(b.out.id).name), h("div", {
                            class: "desc mono"
                        }, x > 0 ? Qe(x) : "Ready")), x > 0 ? z([E("diamond"), String(Ti(x))], () => i.apply(vr(s, f, i.now()), "pickup"), "small teal") : z("Collect", () => i.apply(Ra(s, f, i.now()), "pickup"), "small primary")))
                    }), u.appendChild(m);
                    for (let p of [1, 2, 3]) {
                        u.appendChild(h("div", {
                            class: "sec-h",
                            style: "margin-top:4px"
                        }, `Workbench level ${p}${s.safehouse.bench<p?" (locked)":""}`));
                        let f = h("div", {
                            style: "display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:6px;margin-bottom:8px"
                        });
                        for (let b of Ht.filter(x => x.bench === p)) {
                            let x = Ca(s, b.id),
                                k = h("div", {
                                    class: "row",
                                    style: "gap:4px;flex-wrap:wrap"
                                });
                            for (let R of b.inp) {
                                let w = Zi(s, R.id),
                                    P = ui(R.id, 22, R.qty);
                                P.title = `${C(R.id).name}: ${w}/${R.qty}`, w < R.qty && (P.style.opacity = "0.45"), k.appendChild(P)
                            }
                            let M = h("div", {
                                class: "li-row",
                                style: s.safehouse.bench < p ? "opacity:.5" : ""
                            }, ui(b.out.id, 34, b.out.qty), h("div", {
                                class: "col grow",
                                style: "gap:3px;min-width:0"
                            }, h("div", {
                                class: "ttl"
                            }, C(b.out.id).name + (b.out.qty > 1 ? ` \xD7${b.out.qty}` : "")), k, h("div", {
                                class: "desc mono"
                            }, Qe(b.seconds * 1e3 * Jt(s, d)) + (b.growroom ? " \xB7 needs grow room" : ""))), z("Craft", () => i.apply(xr(s, b.id, i.now()), "build"), "small" + (x.ok ? " primary" : " disabled")));
                            x.ok || (M.title = x.error), f.appendChild(M)
                        }
                        u.appendChild(f)
                    }
                } else if (t === "garden") {
                    s.plots.length || u.appendChild(h("div", {
                        class: "empty-state"
                    }, E("leaf"), "Build the Garden in Upgrades to grow food. The Grow Room (needs a generator) grows fictional contraband crops for the black market."));
                    let ready = s.plots.filter(P => P.seed && P.watered && P.done <= d).length,
                        growing = s.plots.filter(P => P.seed && P.watered && P.done > d).length;
                    u.appendChild(h("div", {
                        class: "farm-hero"
                    }, h("div", {
                        class: "farm-copy"
                    }, h("b", null, "SURVIVAL GARDEN"), h("span", null, "Grow food for raids or build a steady cash route. Upgrade the grow room for high-value fictional contraband.")), h("div", {
                        class: "farm-kpis"
                    }, h("span", null, `${growing} growing`), h("span", {
                        class: ready ? "ready" : ""
                    }, `${ready} ready`), h("span", null, `${s.plots.length} plots`))));
                    let m = h("div", {
                        class: "farm-grid"
                    });
                    s.plots.forEach((p, f) => {
                        let b = h("div", {
                            class: "panel grow-plot" + (p.room === "growroom" ? " contraband" : "") + (p.seed && p.watered && p.done <= d ? " harvest-ready" : ""),
                            style: "padding:10px;display:flex;flex-direction:column;gap:6px"
                        });
                        if (b.appendChild(h("div", {
                                class: "row between"
                            }, h("b", null, p.room === "garden" ? `Raised bed ${f+1}` : `Grow tent ${f+1-s.plots.filter(x=>x.room==="garden").length}`), p.room === "growroom" ? h("span", {
                                class: "tag red"
                            }, "Contraband") : null)), p.seed) {
                            let x = Dt.find(M => M.seed === p.seed);
                            if (b.appendChild(h("div", {
                                    class: "row gap"
                                }, ui(x.out, 30), h("div", {
                                    class: "col"
                                }, h("div", null, C(x.out).name), h("div", {
                                    class: "muted mono",
                                    style: "font-size:12px"
                                }, p.watered ? p.done > d ? Qe(p.done - d) : "Ready to harvest" : "Needs water")))), p.watered && p.done > d) {
                                let M = x.minutes * 6e4;
                                b.appendChild(h("div", {
                                    class: "prog teal"
                                }, h("i", {
                                    style: `width:${Math.max(0,100-(p.done-d)/M*100)}%`
                                })))
                            }
                            let k = h("div", {
                                class: "row",
                                style: "gap:4px;flex-wrap:wrap"
                            });
                            p.watered ? p.done > d && !p.fert && k.appendChild(z([E("leaf"), `Fertilise (${Zi(s,"farm_fert")})`], () => i.apply(Sr(s, f, i.now()), "pickup"), "small")) : k.appendChild(z([E("drop"), "Water"], () => i.apply(wr(s, f, i.now()), "pickup"), "small primary")), p.watered && p.done <= d && k.appendChild(z("Harvest", () => i.apply(Mr(s, f, i.now()), "coins"), "small primary")), b.appendChild(k)
                        } else {
                            b.appendChild(h("div", {
                                class: "muted",
                                style: "font-size:13px"
                            }, "Empty"));
                            let x = s.stash.items.filter(k => Dt.some(M => M.seed === k.item.id && M.room === p.room));
                            x.length ? b.appendChild(h("div", {
                                class: "row",
                                style: "gap:4px;flex-wrap:wrap"
                            }, ...x.map(k => z([h("img", {
                                src: Se(k.item.id, 20, 20),
                                alt: "",
                                style: "width:20px;height:20px"
                            }), "Plant " + C(k.item.id).name.split(" ")[0]], () => i.apply(kr(s, f, k.item.uid, i.now()), "pickup"), "small")))) : b.appendChild(h("div", {
                                class: "muted",
                                style: "font-size:12px"
                            }, p.room === "garden" ? "No seeds in the stash. Farms and Builder Bev have them." : "No contraband seeds. The Fence and some police evidence lockers have them."))
                        }
                        m.appendChild(b)
                    }), u.appendChild(m), u.appendChild(h("div", {
                        class: "muted",
                        style: "font-size:12px;margin-top:8px;max-width:70ch;line-height:1.4"
                    }, "Ghostleaf and Duskbloom are fictional crops. Raw harvests are pressed or refined at the Workbench and sold to The Fence. They are worth a lot and take up little space, which makes them exactly what you do not want to lose in a raid."))
                } else s.claims.length || u.appendChild(h("div", {
                    class: "empty-state"
                }, E("shield"), "No insurance claims. Insure weapons, armour and bags from your loadout before deploying. If you die and nobody takes them, they come back here.")), s.claims.forEach((m, p) => {
                    let f = m.ready - d,
                        b = h("div", {
                            class: "li-row",
                            style: "margin-bottom:6px"
                        });
                    b.appendChild(h("div", {
                        class: "row",
                        style: "gap:4px;flex-wrap:wrap"
                    }, ...m.items.slice(0, 8).map(x => ui(x.id, 30, x.qty > 1 ? x.qty : void 0)))), b.appendChild(h("div", {
                        class: "col grow"
                    }, h("div", {
                        class: "ttl"
                    }, m.ready === 0 ? "Overflow mailbox" : `${m.items.length} insured item${m.items.length===1?"":"s"}`), h("div", {
                        class: "desc mono"
                    }, f > 0 ? `Returns in ${Qe(f)}` : "Ready to collect"))), b.appendChild(z("Collect", () => i.apply(Rr(s, p, i.now()), "pickup"), "small" + (f > 0 ? " disabled" : " primary"))), u.appendChild(b)
                })
            };
        return o(), {
            el: r,
            refresh: o,
            ticks: !0
        }
    }

    function _o(i) {
        let e = i.profile,
            t = h("div", {
                class: "content",
                style: "overflow:hidden"
            }),
            a = z([E("pack"), "Loadouts"], () => u(), "small ghost"),
            r = z("Stow all", () => i.apply(mr(e, !1), "pickup"), "small ghost"),
            o = h("div", {
                class: "screen"
            }, Le(i, "Loadout", "Kit you take into the raid \xB7 stash stays safe", {
                right: [r, a],
                currencies: !1
            }), t),
            s = () => i.now(),
            d = m => m.kind === "equip" ? {
                kind: "equip",
                slot: m.slot
            } : m.kind === "rack" ? {
                kind: "rack"
            } : m.kind === "grid" ? m.grid === "stash" ? {
                kind: "stash",
                x: m.x,
                y: m.y
            } : m.grid === "auto-stash" ? {
                kind: "auto-stash"
            } : m.grid === "auto-kit" || m.grid === "auto" ? {
                kind: "auto-kit"
            } : {
                kind: "grid",
                grid: m.grid,
                x: m.x,
                y: m.y
            } : null,
            n = h("div", {
                class: "row between muted",
                style: "font-size:12px"
            }),
            l = new ci(t, {
                lo: e.lo,
                other: {
                    kind: "stash",
                    label: "Stash",
                    grid: e.stash,
                    rack: e.rack,
                    rackSlots: Xt(e),
                    extra: n
                },
                inRaid: !1,
                insured: e.insureNext
            }, {
                move: (m, p) => {
                    let f = d(p);
                    if (!f) return;
                    let b = Mt(e, m, f);
                    b.ok || (K(b.error, "warn"), F.play("empty")), i.save()
                },
                use: () => K("Use consumables in a raid, or let the safehouse take care of you.", "info"),
                split: (m, p) => i.apply(pr(e, m, p), null),
                quick: (m, p) => {
                    e.lo.quick[m] = p, i.save()
                },
                attach: (m, p) => {
                    Es(i, m, p)
                },
                detach: (m, p) => {
                    Ls(i, m, p)
                },
                repair: (m, p) => As(i, m, p),
                insure: m => {
                    let p = Tr(e, m, s());
                    i.apply(p, null)
                },
                insureInfo: m => {
                    let p = l.lookup(m);
                    if (!p) return null;
                    let f = C(p.id);
                    return f.weapon || f.armour || f.cat === "backpack" || f.melee ? `Insurance: ${G(ti(e,p))} cash, charged when you deploy. ${e.insureNext.length}/${Qt(e,s())} slots used.` : null
                },
                refresh: () => c()
            }),
            c = () => {
                Ye(e, s()), l.ctx.lo = e.lo, l.ctx.insured = e.insureNext, l.ctx.other = {
                    kind: "stash",
                    label: `Stash 10\xD7${e.stash.h}`,
                    grid: e.stash,
                    rack: e.rack,
                    rackSlots: Xt(e),
                    extra: n
                }, me(n), n.appendChild(h("span", null, `${e.stash.items.length} stacks \xB7 worth ${G(i.stashValue())}`)), e.ent.boughtRows < 10 && n.appendChild(z([E("diamond"), `+2 rows \xB7 ${ke.stashRows2}`], () => i.apply(Xi(e, s()), "build"), "small teal")), l.render()
            },
            u = () => {
                let m = La(e, s()),
                    p = h("div", {
                        class: "col",
                        style: "gap:6px"
                    });
                p.appendChild(h("div", {
                    class: "muted",
                    style: "font-size:13px"
                }, "Save your equipped gear as a loadout, then re-equip it from the stash in one tap after a raid."));
                for (let f = 0; f < Math.max(m, 3); f++) {
                    let b = e.presets[f],
                        x = f >= m;
                    p.appendChild(h("div", {
                        class: "li-row",
                        style: x ? "opacity:.5" : ""
                    }, h("div", {
                        class: "col grow"
                    }, h("div", {
                        class: "ttl"
                    }, x ? `Loadout ${f+1} (locked)` : b ? b.name : `Loadout ${f+1} (empty)`), h("div", {
                        class: "desc"
                    }, x ? "Extra loadout slots come with DOVY+ and the Warlord and Founder packs." : b ? Object.values(b.items).map(k => C(k).name).join(", ") : "Not saved")), x ? z("Store", () => {
                        ue(), i.go("store", "plus")
                    }, "small") : h("div", {
                        class: "row gap"
                    }, z("Save", () => {
                        i.apply(Or(e, f, s()), "tap"), ue()
                    }, "small"), b ? z("Equip", () => {
                        i.apply(qr(e, f), "pickup"), ue(), c()
                    }, "small primary") : null)))
                }
                De(p, {
                    title: "Saved loadouts"
                })
            };
        return c(), {
            el: o,
            refresh: c,
            destroy: () => l.destroy()
        }
    }

    function Es(i, e, t) {
        let a = i.profile,
            r = it(a, e),
            o = it(a, t);
        if (!r || !o) return;
        let s = C(r.item.id).attach,
            d = C(o.item.id).weapon;
        if (!s || !d || !d.slots.includes(s.slot)) {
            K("That attachment does not fit this weapon", "warn");
            return
        }
        o.item.att = o.item.att ?? {};
        let n = o.item.att[s.slot];
        if (r.remove(), o.item.att[s.slot] = r.item.id, n) {
            let c = {
                uid: Re(a, "a"),
                id: n,
                qty: 1
            };
            Me([a.stash], c) > 0 && Me(de(a.lo), c)
        }
        let l = ge(o.item);
        if ((o.item.ammo ?? 0) > l.mag) {
            let c = (o.item.ammo ?? 0) - l.mag;
            o.item.ammo = l.mag, Me([a.stash], {
                uid: Re(a, "a"),
                id: d.cal,
                qty: c
            })
        }
        F.play("zip"), i.save()
    }

    function Ls(i, e, t) {
        let a = i.profile,
            r = it(a, e);
        if (!r || !r.item.att) return;
        let o = r.item.att[t];
        if (!o) return;
        delete r.item.att[t];
        let s = {
            uid: Re(a, "a"),
            id: o,
            qty: 1
        };
        Me([a.stash], s) > 0 && Me(de(a.lo), s) > 0 && K("No room for the attachment", "warn");
        let d = ge(r.item);
        (r.item.ammo ?? 0) > d.mag && (Me([a.stash], {
            uid: Re(a, "a"),
            id: C(r.item.id).weapon.cal,
            qty: (r.item.ammo ?? 0) - d.mag
        }), r.item.ammo = d.mag), F.play("zip"), i.save()
    }

    function As(i, e, t) {
        let a = i.profile,
            r = it(a, e),
            o = it(a, t);
        !r || !o || r.item.id !== "tool_repair" || (r.item.qty -= 1, r.item.qty <= 0 && r.remove(), o.item.cond = Math.min(1, (o.item.cond ?? 1) + .35), K(`${C(o.item.id).name} repaired to ${Math.round((o.item.cond??1)*100)}%`, "good"), F.play("build"), i.save())
    }

    function Io(i) {
        let e = i.profile,
            t = "mags",
            a = e.tutorial.step === 1 && !e.tutorial.done ? "sell" : "buy",
            r = h("div", {
                class: "content",
                style: "gap:10px"
            }),
            o = h("div", {
                class: "screen"
            }, Le(i, "Market Traders", "Harrow Cut Safe Zone"), r),
            s = () => {
                let d = i.now();
                me(r);
                let n = h("div", {
                    class: "col scroll",
                    style: "gap:4px;width:min(210px,26%);flex:none"
                });
                for (let b of Ue) {
                    let x = Mi(e, b.id),
                        k = Si(e, b.id);
                    n.appendChild(h("button", {
                        class: "li-row",
                        type: "button",
                        style: `cursor:pointer;border:0;color:inherit;text-align:left;${t===b.id?`box-shadow:inset 3px 0 0 ${b.colour},inset 0 0 0 1px var(--lineHi);background:rgba(255,255,255,.05)`:""};${x?"":"opacity:.5"}`,
                        onTap: () => {
                            t = b.id, !Ue.find(M => M.id === t).stock.length && t !== "threads" && (a = "sell"), s()
                        }
                    }, h("div", {
                        style: `width:36px;height:36px;flex:none;display:grid;place-items:center;border-radius:11px;background:radial-gradient(120% 90% at 50% -10%,rgba(255,255,255,.3),transparent 55%),linear-gradient(180deg,${b.colour}55,${b.colour}18);box-shadow:inset 0 0 0 1px ${b.colour},0 0 10px ${b.colour}44;font-family:var(--display);font-weight:900;font-size:12px;color:#fff;text-shadow:0 0 6px ${b.colour}`
                    }, b.name.replace("The ", "").slice(0, 2).toUpperCase()), h("div", {
                        class: "col grow",
                        style: "min-width:0"
                    }, h("div", {
                        class: "ttl"
                    }, b.name), h("div", {
                        class: "desc"
                    }, x ? `${b.role} \xB7 rep ${k+1}` : "Locked")), x ? null : E("lock")))
                }
                r.appendChild(n);
                let l = Ue.find(b => b.id === t),
                    c = h("div", {
                        class: "col grow",
                        style: "gap:8px;min-width:0;min-height:0"
                    });
                r.appendChild(c);
                let u = Mi(e, l.id),
                    m = Si(e, l.id),
                    p = gi[m + 1];
                if (c.appendChild(h("div", {
                        class: "row",
                        style: "gap:10px;align-items:flex-start"
                    }, h("div", {
                        class: "col grow",
                        style: "min-width:0"
                    }, h("div", {
                        class: "row gap"
                    }, h("b", {
                        style: `font-family:var(--display);font-weight:900;font-size:18px;letter-spacing:.05em;color:${l.colour};text-shadow:0 0 12px ${l.colour}66`
                    }, l.name.toUpperCase()), h("span", {
                        class: "tag"
                    }, l.role)), h("div", {
                        class: "muted",
                        style: "font-size:13px"
                    }, l.blurb)), h("div", {
                        class: "col",
                        style: "width:160px;gap:3px"
                    }, h("div", {
                        class: "row between",
                        style: "font-size:12px"
                    }, h("span", null, `Reputation ${m+1}/4`), h("span", {
                        class: "mono muted"
                    }, p ? `${G(e.rep[l.id])}/${G(p)}` : "Max")), h("div", {
                        class: "prog"
                    }, h("i", {
                        style: `width:${p?Math.min(100,e.rep[l.id]/p*100):100}%`
                    })), h("div", {
                        class: "muted",
                        style: "font-size:11px"
                    }, `Stock rotates in ${Qe((wi(d)+1)*36e5-d)}`)))), !u) {
                    let b = l.unlock;
                    c.appendChild(h("div", {
                        class: "empty-state panel"
                    }, E("lock"), `Reach ${l.name} by building the Radio Mast${b.upgrade&&b.upgrade.level>1?" to level "+b.upgrade.level:""} in your safehouse${b.level?` and reaching survivor level ${b.level}`:""}.`));
                    return
                }
                c.appendChild(Ot([{
                    id: "buy",
                    label: l.id === "threads" ? "Outfits" : "Buy"
                }, {
                    id: "sell",
                    label: "Sell"
                }], a, b => {
                    a = b, s()
                }));
                let f = h("div", {
                    class: "scroll",
                    style: "flex:1;min-height:0"
                });
                if (c.appendChild(f), a === "buy") {
                    if (l.id === "threads") {
                        let x = h("div", {
                            style: "display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px"
                        });
                        for (let k of ye.filter(M => M.cash)) {
                            let M = e.ent.outfits.includes(k.id);
                            x.appendChild(h("div", {
                                class: "panel",
                                style: "padding:8px;display:flex;flex-direction:column;align-items:center;gap:4px"
                            }, At({
                                ...e.look,
                                outfit: k.id
                            }, 70), h("b", null, k.name), M ? h("span", {
                                class: "tag green"
                            }, "Owned") : z([E("coin"), G(k.cash)], () => i.apply(Ci(e, "outfit", k.id), "coins"), "small primary")))
                        }
                        f.appendChild(x), f.appendChild(h("div", {
                            class: "muted",
                            style: "font-size:12px;margin-top:8px"
                        }, "Outfits are cosmetic. Wear them from your Profile."));
                        return
                    }
                    let b = h("div", {
                        style: "display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:6px"
                    });
                    for (let x of l.stock) {
                        let k = C(x.id),
                            M = m < x.rep,
                            R = Ma(e, l.id, x.id, d),
                            w = x.tokens ? `${x.tokens} tokens` : G(ut(x)),
                            P = x.tokens ? e.tokens >= x.tokens : e.cash >= ut(x);
                        b.appendChild(h("button", {
                            class: "li-row",
                            type: "button",
                            style: `cursor:pointer;border:0;color:inherit;text-align:left;${M||R<=0?"opacity:.5":""}`,
                            onTap: () => {
                                if (M) return K(`Reach ${l.name} reputation ${x.rep+1} to buy this`, "warn");
                                let g = () => {
                                    i.apply(fr(e, l.id, x.id, i.now()), "coins") && i.track("trader_buy", {
                                        trader: l.id,
                                        item: x.id
                                    })
                                };
                                !x.tokens && ut(x) >= 4e3 ? nt("Confirm purchase", `Buy ${k.name}${x.qty&&x.qty>1?" \xD7"+x.qty:""} for ${G(ut(x))} cash?`, "Buy", g) : x.tokens ? nt("Confirm purchase", `Buy ${k.name} for ${x.tokens} Black-Market Tokens?`, "Buy", g) : g()
                            }
                        }, h("div", {
                            class: "thumb" + (k.w > 2 ? " wide" : ""),
                            style: `--rc:${ae[k.rarity]}`
                        }, h("img", {
                            src: Se(x.id, k.w > 2 ? 84 : 40, 40),
                            alt: ""
                        })), h("div", {
                            class: "col grow",
                            style: "min-width:0"
                        }, h("div", {
                            class: "ttl",
                            style: "white-space:nowrap;overflow:hidden;text-overflow:ellipsis"
                        }, k.name + (x.qty && x.qty > 1 ? ` \xD7${x.qty}` : "")), h("div", {
                            class: "desc",
                            style: `color:${ae[k.rarity]}`
                        }, ct[k.rarity] + (x.limit ? ` \xB7 ${R} left` : "")), h("div", {
                            class: "row gap mono",
                            style: `font-size:13px;${P?"":"color:#ff7d95"}`
                        }, E(x.tokens ? "hex" : "coin"), w, M ? h("span", {
                            class: "tag",
                            style: "margin-left:auto"
                        }, E("lock"), `Rep ${x.rep+1}`) : null))))
                    }
                    f.appendChild(b)
                } else {
                    let b = [];
                    for (let M of e.stash.items) b.push({
                        it: M.item,
                        where: "Stash"
                    });
                    for (let M of [e.lo.pockets, e.lo.bag])
                        if (M)
                            for (let R of M.items) b.push({
                                it: R.item,
                                where: "Kit"
                            });
                    for (let M of e.rack) b.push({
                        it: M,
                        where: "Rack"
                    });
                    let x = b.filter(M => wa(l.id, M.it.id)).sort((M, R) => le(R.it) - le(M.it));
                    x.length || f.appendChild(h("div", {
                        class: "empty-state"
                    }, E("coin"), `${l.name} is not interested in anything you have.`));
                    let k = h("div", {
                        style: "display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:6px"
                    });
                    for (let {
                            it: M,
                            where: R
                        }
                        of x) {
                        let w = C(M.id),
                            P = ka(e, l.id, M),
                            g = e.tutorial.step === 1 && !e.tutorial.done && M.id === "val_watch";
                        k.appendChild(h("button", {
                            class: "li-row" + (g ? " pulse-ring" : ""),
                            type: "button",
                            style: `cursor:pointer;border:0;color:inherit;text-align:left;position:relative;${g?"box-shadow:inset 0 0 0 2px var(--accHi)":""}`,
                            onTap: () => {
                                let S = () => {
                                    i.apply(gr(e, l.id, M.uid), "coins") && (i.track("trader_sell", {
                                        trader: l.id,
                                        item: M.id,
                                        price: P
                                    }), g && (e.tutorial.step = 2, i.save(!0), setTimeout(() => K("Now spend it: upgrade your stash at the Safehouse", "mission", 4500), 400)))
                                };
                                P >= 3e3 || w.weapon || ct[w.rarity] === "Prototype" ? nt("Sell item", `Sell ${w.name}${M.qty>1?" \xD7"+M.qty:""} to ${l.name} for ${G(P)} cash?`, "Sell", S) : S()
                            }
                        }, h("div", {
                            class: "thumb" + (w.w > 2 ? " wide" : ""),
                            style: `--rc:${ae[w.rarity]}`
                        }, h("img", {
                            src: $e(M, w.w > 2 ? 84 : 40, 40),
                            alt: ""
                        })), h("div", {
                            class: "col grow",
                            style: "min-width:0"
                        }, h("div", {
                            class: "ttl",
                            style: "white-space:nowrap;overflow:hidden;text-overflow:ellipsis"
                        }, w.name + (M.qty > 1 ? ` \xD7${M.qty}` : "")), h("div", {
                            class: "desc"
                        }, R), h("div", {
                            class: "row gap mono",
                            style: "font-size:13px;color:#c8ff2e"
                        }, E("coin"), G(P)))))
                    }
                    f.appendChild(k), e.tutorial.step === 1 && !e.tutorial.done && !we(e.lo).some(M => M.id === "val_watch") && !e.stash.items.some(M => M.item.id === "val_watch") && (e.tutorial.step = 2)
                }
            };
        return s(), {
            el: o,
            refresh: s,
            ticks: !1
        }
    }

    function Lo(i) {
        let e = h("div", {
                class: "content",
                style: "gap:12px"
            }),
            t = h("div", {
                class: "screen"
            }, Le(i, "Missions", "Daily missions reset at midnight UK time"), e),
            a = () => {
                let r = i.profile,
                    o = i.now();
                me(e);
                let s = Bt(r, o),
                    d = h("div", {
                        class: "panel col",
                        style: "gap:8px;width:min(260px,32%)"
                    }, h("h3", null, "Login streak")),
                    n = h("div", {
                        style: "display:grid;grid-template-columns:repeat(4,1fr);gap:4px"
                    });
                Ia.forEach((p, f) => {
                    let b = f + 1,
                        x = b < s.day || b === s.day && !s.canClaim,
                        k = b === s.day && s.canClaim;
                    n.appendChild(h("div", {
                        class: "kv",
                        style: `text-align:center;padding:5px 2px;${k?"box-shadow:inset 0 0 0 2px var(--acc)":""};${x?"opacity:.45":""}`
                    }, h("span", null, `Day ${b}`), h("div", {
                        style: "font-size:11px;line-height:1.2;margin-top:2px"
                    }, p.label)))
                }), d.appendChild(n), d.appendChild(s.canClaim ? z(`Claim day ${s.day}`, () => i.apply(_r(r, i.now()), "coins"), "primary small") : h("div", {
                    class: "muted",
                    style: "font-size:13px"
                }, "Claimed today. Come back tomorrow.")), e.appendChild(d);
                let l = h("div", {
                        class: "col scroll grow",
                        style: "gap:6px;min-height:0"
                    }),
                    c = (p, f, b, x) => {
                        l.appendChild(h("div", {
                            class: "sec-h"
                        }, `${p} \xB7 resets in ${Qe(x)}`));
                        for (let k of f) {
                            let M = b.find(w => w.id === k.id);
                            if (!M) continue;
                            let R = k.prog >= M.target;
                            l.appendChild(h("div", {
                                class: "li-row",
                                style: k.claimed ? "opacity:.5" : ""
                            }, h("div", {
                                class: "col grow",
                                style: "min-width:0"
                            }, h("div", {
                                class: "ttl"
                            }, M.text), h("div", {
                                class: "prog"
                            }, h("i", {
                                style: `width:${Math.min(100,k.prog/M.target*100)}%`
                            })), h("div", {
                                class: "desc mono"
                            }, `${Math.min(k.prog,M.target)}/${M.target} \xB7 ${G(M.cash)} cash \xB7 ${M.xp} XP${M.tokens?` \xB7 ${M.tokens} token${M.tokens>1?"s":""}`:""}`)), k.claimed ? h("span", {
                                class: "tag green"
                            }, E("check"), "Claimed") : R ? z("Claim", () => i.apply(Pr(r, k.id), "coins"), "small primary") : null))
                        }
                    },
                    u = new Date(tt(o) + "T00:00:00Z").getTime() + 864e5 - 36e5;
                c("Daily", r.missions.daily, kt, Math.max(0, u - o));
                let m = new Date(r.missions.week + "T00:00:00Z").getTime() + 7 * 864e5;
                c("Weekly", r.missions.weekly, wt, Math.max(0, m - o)), l.appendChild(h("div", {
                    class: "muted",
                    style: "font-size:12px;margin-top:4px"
                }, "Mission progress is counted when you extract or die. XP from missions also counts towards the season pass.")), e.appendChild(l)
            };
        return a(), {
            el: t,
            refresh: a
        }
    }

    function Eo(i, e) {
        let t;
        if (i.item) t = h("img", {
            src: Se(i.item.id, 36, 36),
            alt: "",
            style: "width:36px;height:36px"
        });
        else if (i.outfit) {
            let r = ye.find(o => o.id === i.outfit);
            t = h("div", {
                style: `width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 35% 35%,${r.accent},${r.jacket})`
            })
        } else if (i.skin) {
            let r = Ve.find(o => o.id === i.skin);
            t = h("div", {
                style: `width:34px;height:12px;background:${r.colour};box-shadow:inset 0 0 0 1px rgba(0,0,0,.5)`
            })
        } else t = E(i.credits ? "diamond" : i.tokens ? "hex" : i.booster ? "bolt" : "coin");
        let a = i.item ? ae[C(i.item.id).rarity] : i.outfit || i.skin ? "#b46ef0" : i.credits ? "#9a7bff" : "#d6b44a";
        return h("div", {
            class: "thumb",
            style: `--rc:${a};width:100%;height:58px;flex-direction:column;gap:2px;font-size:10px;text-align:center;line-height:1.1;padding:2px;${e?"filter:grayscale(.8) brightness(.6)":""}`
        }, t, h("span", null, i.label))
    }

    function Ao(i) {
        let e = h("div", {
                class: "content",
                style: "flex-direction:column;gap:8px"
            }),
            t = h("div", {
                class: "screen"
            }, Le(i, "Season pass", xi.name), e),
            a = -1,
            r = () => {
                let o = i.profile,
                    s = Ft(o),
                    d = e.querySelector(".scroll-x"),
                    n = d ? d.scrollLeft : -1;
                me(e);
                let l = o.pass.xp % pt;
                e.appendChild(h("div", {
                    class: "row",
                    style: "gap:12px;align-items:center"
                }, h("div", {
                    class: "col",
                    style: "gap:3px;min-width:220px"
                }, h("div", {
                    class: "row gap"
                }, h("b", {
                    class: "chrome",
                    style: "font-family:var(--display);font-weight:900;font-size:24px"
                }, `LEVEL ${s}`), h("span", {
                    class: "muted"
                }, `/ ${vt}`)), h("div", {
                    class: "prog",
                    style: "width:220px"
                }, h("i", {
                    style: `width:${s>=vt?100:l/pt*100}%`
                })), h("div", {
                    class: "muted mono",
                    style: "font-size:12px"
                }, s >= vt ? "Pass complete" : `${l}/${pt} XP \xB7 earn XP in raids and missions`)), h("div", {
                    class: "grow muted",
                    style: "font-size:13px;line-height:1.35"
                }, `Season ends ${new Date(xi.ends).toLocaleDateString("en-GB",{day:"numeric",month:"long"})}. The premium track has 1,000 DOVY Credits in it, more than it costs.`), o.pass.premium ? h("span", {
                    class: "tag teal"
                }, E("check"), "Premium active") : z([E("diamond"), `Premium \xB7 ${ke.passPremium}`], () => {
                    nt("Unlock premium pass", `Unlock the premium track for ${ke.passPremium} DOVY Credits? Every premium reward up to your current level becomes claimable straight away. No random rewards.`, "Unlock", () => {
                        if (o.credits < ke.passPremium) {
                            i.go("store", "credits");
                            return
                        }
                        i.apply(Er(o), "coins") && i.track("pass_premium_bought")
                    })
                }, "teal")));
                let c = h("div", {
                    class: "scroll-x",
                    style: "flex:1;min-height:0;display:flex;gap:4px;padding-bottom:4px"
                });
                for (let u of Bi) {
                    let m = s >= u.level,
                        p = o.pass.claimedFree.includes(u.level),
                        f = o.pass.claimedPrem.includes(u.level),
                        b = h("div", {
                            class: "col",
                            style: `gap:4px;width:92px;flex:none;${m?"":"opacity:.75"}`
                        });
                    b.appendChild(h("div", {
                        class: "mono",
                        style: `text-align:center;font-family:var(--lcd);font-size:18px;line-height:1.1;border-radius:999px;padding:1px;${m?"background:linear-gradient(180deg,#efffb0,#c8ff2e 55%,#86c000);color:#101800;box-shadow:0 0 8px rgba(200,255,46,.4)":"background:rgba(255,255,255,.06);color:var(--dim)"}`
                    }, String(u.level)));
                    let x = Eo(u.free, !1),
                        k = h("button", {
                            type: "button",
                            style: "border:0;padding:0;background:none;color:inherit;position:relative;cursor:pointer",
                            "aria-label": `Level ${u.level} free reward: ${u.free.label}`,
                            onTap: () => m && !p && i.apply(Ea(o, u.level, "free", i.now()), "coins")
                        }, x);
                    p ? k.appendChild(h("span", {
                        style: "position:absolute;inset:0;display:grid;place-items:center;background:rgba(10,12,8,.6);color:#8dff8a"
                    }, E("check"))) : m && k.appendChild(h("span", {
                        class: "tag",
                        style: "position:absolute;left:4px;right:4px;bottom:-6px;justify-content:center"
                    }, "Claim")), b.appendChild(h("div", {
                        class: "muted",
                        style: "font-size:10px;letter-spacing:.12em"
                    }, "FREE")), b.appendChild(k);
                    let M = Eo(u.prem, !o.pass.premium),
                        R = h("button", {
                            type: "button",
                            style: "border:0;padding:0;background:none;color:inherit;position:relative;cursor:pointer",
                            "aria-label": `Level ${u.level} premium reward: ${u.prem.label}`,
                            onTap: () => m && o.pass.premium && !f && i.apply(Ea(o, u.level, "prem", i.now()), "coins")
                        }, M);
                    o.pass.premium ? f ? R.appendChild(h("span", {
                        style: "position:absolute;inset:0;display:grid;place-items:center;background:rgba(10,12,8,.6);color:#8dff8a"
                    }, E("check"))) : m && R.appendChild(h("span", {
                        class: "tag teal",
                        style: "position:absolute;left:4px;right:4px;bottom:-6px;justify-content:center"
                    }, "Claim")) : R.appendChild(h("span", {
                        style: "position:absolute;right:3px;top:3px;color:var(--dim)"
                    }, E("lock"))), b.appendChild(h("div", {
                        style: "font-size:10px;letter-spacing:.12em;color:var(--cyan);margin-top:4px"
                    }, "PREMIUM")), b.appendChild(R), c.appendChild(b)
                }
                e.appendChild(c), requestAnimationFrame(() => {
                    n >= 0 ? c.scrollLeft = n : a < 0 && (c.scrollLeft = Math.max(0, (s - 2) * 96)), a = 0
                })
            };
        return r(), {
            el: t,
            refresh: r
        }
    }
    var qt = i => "\xA3" + i.toFixed(2);

    function pa() {
        return window.DZ_CONFIG ?? {}
    }
    async function Os(i, e, t, a) {
        i.track("purchase_started", {
            product: e,
            price: t
        });
        let r = pa();
        if (r.api) {
            try {
                let n = await (await fetch(r.api + "/api/checkout", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        product: e,
                        player: i.profile.id
                    }),
                    credentials: "include"
                })).json();
                if (n.url) return location.href = n.url, !0;
                K(n.error ?? "Checkout unavailable", "warn")
            } catch {
                K("Could not reach the store. Check your connection.", "warn")
            }
            return !1
        }
        return K("Store checkout is not enabled in this release build.", "warn", 3200), !1
    }

    function Ua(i, e, t, a, r, o = !1) {
        let s = h("div", {
            class: "col",
            style: "gap:8px"
        }, pa().api ? null : h("div", {
            class: "test-banner"
        }, "Store preview: checkout is disabled in this build; no payment or premium item is granted."), h("div", {
            class: "row between"
        }, h("b", {
            style: "font-size:18px"
        }, e), h("b", {
            class: "mono",
            style: "font-size:22px;color:var(--accHi)"
        }, qt(t) + (o ? "/month" : ""))), h("div", {
            class: "col",
            style: "gap:3px;font-size:14px"
        }, ...a.map(d => h("div", {
            class: "row gap"
        }, E("check"), d))), h("div", {
            class: "muted",
            style: "font-size:12px;line-height:1.35"
        }, o ? "Renews monthly until cancelled. Cancel any time; perks last until the end of the paid month." : "One-time purchase. Contents are fixed and shown in full above."), h("div", {
            class: "row end gap"
        }, z("Cancel", () => ue(), "ghost"), z(pa().api ? `Pay ${qt(t)}` : `Confirm (test) ${qt(t)}`, async () => {
            ue(), await Os(i, r, t, e)
        }, "primary")));
        De(s, {
            title: "Confirm purchase"
        })
    }

    function Oo(i) {
        let e = i.grant,
            t = [];
        for (let a of e.items ?? []) t.push(`${a.qty>1?a.qty+" \xD7 ":""}${C(a.id).name}${a.att?" with "+Object.values(a.att).map(r=>C(r).name).join(" + "):""}`);
        e.cash && t.push(`${G(e.cash)} cash`), e.credits && t.push(`${G(e.credits)} DOVY Credits`), e.tokens && t.push(`${e.tokens} Black-Market Tokens`), e.protectedSlots && t.push(`+${e.protectedSlots} permanent protected slot`), e.stashRows && t.push(`+${e.stashRows} permanent stash rows`), e.insuranceSlots && t.push(`+${e.insuranceSlots} insurance slot${e.insuranceSlots>1?"s":""}`), e.loadoutSlots && t.push(`+${e.loadoutSlots} saved loadout`), e.characterSlots && t.push(`+${e.characterSlots} character slot (when multiple survivors launch)`), e.craftSpeed && t.push(`Crafting and construction ${Math.round(e.craftSpeed*100)}% faster, permanently`), e.farmSpeed && t.push(`Crops grow ${Math.round(e.farmSpeed*100)}% faster, permanently`), e.repBoost && t.push(`+${e.repBoost} reputation level with every trader`);
        for (let a of e.outfits ?? []) t.push(`${ye.find(r=>r.id===a)?.name} outfit`);
        for (let a of e.skins ?? []) t.push(`${Ve.find(r=>r.id===a)?.name} weapon skin`);
        return e.badge && t.push(`${e.badge} profile badge`), t
    }

    function qo(i, e) {
        let t = typeof e == "string" ? e : "packs";
        t === "plus" && (t = "packs");
        let a = h("div", {
                class: "content",
                style: "flex-direction:column;gap:8px"
            }),
            r = h("div", {
                class: "screen"
            }, Le(i, "Store", "No loot boxes. No random rewards. Everything listed is what you get."), a);
        i.track("store_opened", {
            tab: t
        });
        let o = () => {
            let s = i.profile,
                d = i.now();
            me(a), a.appendChild(Ot([{
                id: "packs",
                label: "Packs & DOVY+"
            }, {
                id: "credits",
                label: "Credits"
            }, {
                id: "extras",
                label: "Upgrades"
            }, {
                id: "cosmetic",
                label: "Cosmetics"
            }], t, c => {
                t = c, o()
            })), pa().api || a.appendChild(h("div", {
                class: "test-banner"
            }, "Store preview: checkout is disabled until the Dovy Studio payment server is connected."));
            let n = h("div", {
                class: "scroll-x",
                style: "flex:1;min-height:0;display:flex;gap:8px;padding-bottom:6px;align-items:stretch"
            });
            a.appendChild(n);
            let l = c => {
                let u = h("div", {
                    class: "panel",
                    style: `width:250px;flex:none;display:flex;flex-direction:column;gap:6px;${c.accent?`box-shadow:inset 0 0 0 1px ${c.accent}`:""}`
                }, c.tag ? h("span", {
                    class: "tag",
                    style: "align-self:flex-start"
                }, c.tag) : null, c.head ?? null, h("b", {
                    style: "font-family:var(--display);font-weight:900;font-size:15px;letter-spacing:.04em;line-height:1.15"
                }, c.title.toUpperCase()), h("div", {
                    class: "col scroll",
                    style: "gap:2px;font-size:13px;flex:1;min-height:0"
                }, ...c.lines.map(m => h("div", {
                    class: "row",
                    style: "gap:6px;align-items:flex-start"
                }, h("span", {
                    style: "color:var(--acc)"
                }, "\u2022"), m))), c.owned ? h("span", {
                    class: "tag green",
                    style: "align-self:stretch;justify-content:center;padding:8px"
                }, E("check"), "Owned") : z(c.cta ?? c.price, c.onBuy, "primary"));
                return n.appendChild(u), u
            };
            if (t === "packs") {
                let c = He(s, d),
                    u = h("div", {
                        class: "row gap"
                    }, E("diamond"), h("span", {
                        class: "mono",
                        style: "color:#a98bff"
                    }, c ? `Active until ${new Date(s.ent.plusUntil).toLocaleDateString("en-GB")}` : `${qt(ve.price)} / month`)),
                    m = l({
                        title: ve.name,
                        price: qt(ve.price) + "/mo",
                        tag: "Monthly",
                        accent: "#9a7bff",
                        head: u,
                        lines: ve.perks.map(p => p.text),
                        cta: c ? "Extend 30 days" : `Subscribe ${qt(ve.price)}/mo`,
                        onBuy: () => {
                            i.track("pack_viewed", {
                                product: ve.id
                            }), Ua(i, ve.name, ve.price, ve.perks.map(p => p.text), ve.id, !0)
                        }
                    });
                c && s.ent.lastPlusDaily !== tt(d) && m.appendChild(z(`Collect ${ve.dailyCredits} credits today`, () => i.apply(Ir(s, i.now()), "coins"), "teal small"));
                for (let p of Fi) {
                    let f = s.ent.packs.includes(p.id),
                        b = p.grant.items?.[0],
                        x = b ? h("div", {
                            class: "thumb wide",
                            style: `--rc:${ae[C(b.id).rarity]};width:100%;height:56px`
                        }, h("img", {
                            src: Se(b.id, 200, 52),
                            alt: "",
                            style: "max-width:96%;max-height:52px"
                        })) : void 0;
                    l({
                        title: p.name,
                        price: qt(p.price),
                        tag: p.tag,
                        head: x,
                        lines: [p.blurb, ...Oo(p)],
                        owned: f,
                        onBuy: () => {
                            i.track("pack_viewed", {
                                product: p.id
                            }), Ua(i, p.name, p.price, Oo(p), p.id)
                        }
                    })
                }
                n.appendChild(h("div", {
                    class: "panel",
                    style: "width:220px;flex:none;font-size:13px;line-height:1.4;color:var(--dim)"
                }, h("h3", null, "Your account"), `Protected slots: ${ji(s)}/5`, h("br"), `Stash rows: +${s.ent.stashRows+s.ent.boughtRows}`, h("br"), `Insurance slots: +${s.ent.insuranceSlots}`, h("br"), `Purchases: ${s.ent.purchases.length}`, h("br"), h("br"), "Packs are one-time. Protected slots stop at 5 so nobody can buy a guaranteed win."))
            } else if (t === "credits")
                for (let c of Wi) l({
                    title: `${G(c.credits+c.bonus)} credits`,
                    price: qt(c.price),
                    tag: c.bonus ? `+${G(c.bonus)} bonus` : void 0,
                    head: h("div", {
                        style: "height:44px;display:grid;place-items:center;color:#a98bff"
                    }, E("diamond")),
                    lines: [`${G(c.credits)} DOVY Credits${c.bonus?` + ${G(c.bonus)} bonus`:""}`, "Spend on the premium pass, stash space, insurance slots, cosmetics and finishing timers early."],
                    onBuy: () => Ua(i, `${G(c.credits+c.bonus)} DOVY Credits`, c.price, [`${G(c.credits+c.bonus)} DOVY Credits added to your account`], c.id)
                });
            else if (t === "extras") {
                let c = (u, m, p, f, b = !1) => l({
                    title: u,
                    price: `${m} credits`,
                    lines: p,
                    owned: b,
                    cta: `${m} credits`,
                    head: h("div", {
                        style: "height:30px;display:flex;align-items:center;gap:6px;color:#a98bff"
                    }, E("diamond"), h("span", {
                        class: "mono"
                    }, `${m}`)),
                    onBuy: () => f()
                });
                c("Stash expansion", ke.stashRows2, ["+2 permanent stash rows", `Bought: ${s.ent.boughtRows/2}/5`], () => i.apply(Xi(s, i.now()), "build"), s.ent.boughtRows >= 10), c("Insurance slot", ke.insuranceSlot, ["Insure one more item every raid", `Owned: +${s.ent.insuranceSlots}`], () => i.apply(Lr(s), "build"), s.ent.insuranceSlots >= 4), n.appendChild(h("div", {
                    class: "panel",
                    style: "width:240px;flex:none;font-size:13px;line-height:1.4;color:var(--dim)"
                }, h("h3", null, "Timers"), `Builds and crafts can be finished early for ${ke.finishPerMinute} credits per remaining minute. The price is shown on the button before you tap.`))
            } else {
                for (let c of ye.filter(u => u.id !== "o_default")) {
                    let u = s.ent.outfits.includes(c.id);
                    l({
                        title: c.name,
                        price: c.credits ? `${c.credits} credits` : c.cash ? `${G(c.cash)} cash` : c.source,
                        head: h("div", {
                            style: "display:grid;place-items:center"
                        }, At({
                            ...s.look,
                            outfit: c.id
                        }, 64)),
                        lines: [`Source: ${c.source}`, "Cosmetic only"],
                        owned: u,
                        cta: c.credits ? `${c.credits} credits` : c.cash ? `${G(c.cash)} cash` : "Not for sale",
                        onBuy: () => c.credits || c.cash ? i.apply(Ci(s, "outfit", c.id), "coins") : K(`Unlock: ${c.source}`, "info")
                    })
                }
                for (let c of Ve) {
                    let u = s.ent.skins.includes(c.id);
                    l({
                        title: c.name + " skin",
                        price: c.credits ? `${c.credits} credits` : c.source,
                        head: h("div", {
                            style: `height:20px;background:${c.colour};box-shadow:inset 0 0 0 1px rgba(0,0,0,.5)`
                        }),
                        lines: [`Source: ${c.source}`, "Applies to every weapon you hold. Cosmetic only."],
                        owned: u,
                        cta: c.credits ? `${c.credits} credits` : "Not for sale",
                        onBuy: () => c.credits ? i.apply(Ci(s, "skin", c.id), "coins") : K(`Unlock: ${c.source}`, "info")
                    })
                }
            }
        };
        return o(), {
            el: r,
            refresh: o
        }
    }
    var qs = [{
        id: "first",
        name: "Home Before Dark",
        text: "Extract for the first time",
        test: i => i.profile.stats.extracts >= 1
    }, {
        id: "ten",
        name: "Regular",
        text: "Extract 10 times",
        test: i => i.profile.stats.extracts >= 10
    }, {
        id: "hundred",
        name: "Exterminator",
        text: "Kill 500 infected",
        test: i => i.profile.stats.zkills >= 500
    }, {
        id: "brute",
        name: "Bigger They Come",
        text: "Kill The Brute",
        test: i => i.profile.stats.bosses >= 1
    }, {
        id: "rich",
        name: "Hoarder",
        text: "Own 100,000 worth of gear",
        test: i => i.stashValue() >= 1e5
    }, {
        id: "map",
        name: "Cartographer",
        text: "Explore 60% of Harrowmere",
        test: i => i.atlas.percent() >= .6
    }, {
        id: "proto",
        name: "Ghost in the Machine",
        text: "Find a Prototype item",
        test: i => i.profile.collection.some(e => C(e).rarity === "prototype")
    }, {
        id: "collect",
        name: "Collector",
        text: "Discover 60 different items",
        test: i => i.profile.collection.length >= 60
    }, {
        id: "farm",
        name: "Green Fingers",
        text: "Build the Garden",
        test: i => i.profile.safehouse.garden >= 1
    }, {
        id: "fort",
        name: "Fortress",
        text: "Max out the Stash",
        test: i => i.profile.safehouse.stash >= 4
    }];

    function $o(i) {
        let e = "stats",
            t = h("div", {
                class: "content",
                style: "gap:12px"
            }),
            a = h("div", {
                class: "screen"
            }, Le(i, "Profile", "Survivor record"), t),
            r = () => {
                let o = i.profile;
                me(t);
                let s = o.stats,
                    d = h("div", {
                        class: "col panel",
                        style: "gap:6px;width:min(220px,28%);align-items:center"
                    }, At(o.look, 110), h("b", {
                        class: "chrome",
                        style: "font-family:var(--display);font-weight:900;font-size:16px;letter-spacing:.05em;text-align:center;overflow-wrap:anywhere"
                    }, o.name.toUpperCase()), h("div", {
                        class: "row gap"
                    }, h("span", {
                        class: "tag"
                    }, `Level ${o.level}`), ...o.ent.badges.map(c => h("span", {
                        class: "tag teal"
                    }, c))), h("div", {
                        class: "muted",
                        style: "font-size:12px"
                    }, `Survivor since ${new Date(o.created).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}`), h("div", {
                        class: "kv",
                        style: "width:100%;text-align:center"
                    }, h("b", null, G(i.stashValue())), h("span", null, "Total wealth")));
                t.appendChild(d);
                let n = h("div", {
                    class: "col grow",
                    style: "gap:8px;min-width:0;min-height:0"
                });
                t.appendChild(n), n.appendChild(Ot([{
                    id: "stats",
                    label: "Stats"
                }, {
                    id: "collection",
                    label: "Collection"
                }, {
                    id: "wardrobe",
                    label: "Wardrobe"
                }], e, c => {
                    e = c, r()
                }));
                let l = h("div", {
                    class: "scroll",
                    style: "flex:1;min-height:0"
                });
                if (n.appendChild(l), e === "stats") {
                    let c = s.raids ? Math.round(s.extracts / s.raids * 100) : 0,
                        u = (p, f) => h("div", {
                            class: "kv"
                        }, h("b", null, f), h("span", null, p));
                    l.appendChild(h("div", {
                        style: "display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:6px"
                    }, u("Raids", String(s.raids)), u("Extraction rate", c + "%"), u("Deaths", String(s.deaths)), u("Infected killed", G(s.zkills)), u("Players killed", G(s.pkills)), u("Bosses killed", String(s.bosses)), u("Time in raids", Ct(s.playTime)), u("Best haul", G(s.bestLoot)), u("Total looted", G(s.totalLoot)), u("Containers searched", G(s.searched)), u("Rare finds", G(s.rares)), u("Distance", (s.distance / 32e3).toFixed(1) + " km"), u("Map explored", Math.round(i.atlas.percent() * 100) + "%"))), l.appendChild(h("div", {
                        class: "sec-h",
                        style: "margin-top:10px"
                    }, "Achievements"));
                    let m = h("div", {
                        style: "display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:6px"
                    });
                    for (let p of qs) {
                        let f = p.test(i);
                        m.appendChild(h("div", {
                            class: "li-row",
                            style: f ? "" : "opacity:.45"
                        }, h("span", {
                            style: `color:${f?"var(--acc)":"var(--mute)"}`
                        }, E(f ? "trophy" : "lock")), h("div", {
                            class: "col"
                        }, h("div", {
                            class: "ttl"
                        }, p.name), h("div", {
                            class: "desc"
                        }, p.text))))
                    }
                    l.appendChild(m), l.appendChild(h("div", {
                        class: "sec-h",
                        style: "margin-top:10px"
                    }, "Prized possessions")), l.appendChild(h("div", {
                        class: "row",
                        style: "gap:6px;flex-wrap:wrap"
                    }, ...$r(o, 8).map(p => {
                        let f = C(p.id);
                        return h("div", {
                            class: "thumb" + (f.w > 2 ? " wide" : ""),
                            style: `--rc:${ae[f.rarity]}`,
                            title: f.name
                        }, h("img", {
                            src: $e(p, f.w > 2 ? 84 : 40, 40),
                            alt: f.name
                        }))
                    })))
                } else if (e === "collection") {
                    let c = new Set(o.collection),
                        u = mi.filter(m => c.has(m.id)).length;
                    l.appendChild(h("div", {
                        class: "row gap",
                        style: "margin-bottom:6px"
                    }, h("b", null, `${u} / ${mi.length} items discovered`), h("div", {
                        class: "prog grow"
                    }, h("i", {
                        style: `width:${u/mi.length*100}%`
                    }))));
                    for (let m of Ja) {
                        let p = mi.filter(f => f.rarity === m);
                        p.length && (l.appendChild(h("div", {
                            class: "sec-h",
                            style: `color:${ae[m]}`
                        }, `${ct[m]} \xB7 ${p.filter(f=>c.has(f.id)).length}/${p.length}`)), l.appendChild(h("div", {
                            class: "row",
                            style: "gap:4px;flex-wrap:wrap;margin-bottom:8px"
                        }, ...p.map(f => h("div", {
                            class: "thumb",
                            style: `--rc:${ae[f.rarity]};${c.has(f.id)?"":"filter:brightness(0) opacity(.35)"}`,
                            title: c.has(f.id) ? f.name : "Undiscovered"
                        }, h("img", {
                            src: Se(f.id, 38, 38),
                            alt: c.has(f.id) ? f.name : ""
                        }))))))
                    }
                } else {
                    l.appendChild(h("div", {
                        class: "sec-h"
                    }, "Outfits"));
                    let c = h("div", {
                        style: "display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:6px"
                    });
                    for (let m of [...ye].sort((a,b)=>Number(!!b.detail)-Number(!!a.detail))) {
                        let p = o.ent.outfits.includes(m.id),
                            f = o.look.outfit === m.id;
                        c.appendChild(h("button", {
                            class: "panel",
                            type: "button",
                            style: `display:flex;flex-direction:column;align-items:center;gap:3px;padding:8px;border:0;color:inherit;cursor:pointer;${f?"box-shadow:inset 0 0 0 2px var(--acc)":""};${p?"":"opacity:.5"}`,
                            onTap: () => {
                                p && (o.look.outfit = m.id, i.save(), r())
                            }
                        }, At({
                            ...o.look,
                            outfit: m.id
                        }, m.detail ? 108 : 60), h("b", {
                            style: "font-size:13px"
                        }, m.name), h("span", {
                            class: "muted",
                            style: "font-size:11px"
                        }, f ? "Wearing" : p ? "Tap to wear" : m.source)))
                    }
                    l.appendChild(c), l.appendChild(h("div", {
                        class: "sec-h",
                        style: "margin-top:10px"
                    }, "Weapon skin"));
                    let u = h("div", {
                        class: "row",
                        style: "gap:6px;flex-wrap:wrap"
                    });
                    u.appendChild(z("Factory finish", () => {
                        o.look.wskin = null, i.save(), r()
                    }, o.look.wskin === null ? "small primary" : "small"));
                    for (let m of Ve) {
                        let p = o.ent.skins.includes(m.id);
                        u.appendChild(z([h("i", {
                            style: `display:inline-block;width:16px;height:10px;background:${m.colour}`
                        }), m.name + (p ? "" : " \u{1F512}")], () => {
                            p && (o.look.wskin = m.id, i.save(), r())
                        }, o.look.wskin === m.id ? "small primary" : "small" + (p ? "" : " disabled")))
                    }
                    l.appendChild(u)
                }
            };
        return r(), {
            el: a,
            refresh: r
        }
    }

    function zo() {
        return window.DZ_CONFIG ?? {}
    }

    function Ho() {
        return !!zo().ws
    }
    var zi = class {
            constructor(e) {
                v(this, "app");
                v(this, "ws", null);
                v(this, "pid", 0);
                v(this, "code", "");
                v(this, "members", []);
                v(this, "ready", !1);
                v(this, "isLeader", !1);
                v(this, "session", null);
                v(this, "pending", new Map);
                v(this, "retryT", 0);
                v(this, "closing", !1);
                this.app = e
            }
            connect() {
                if (this.ws && this.ws.readyState === WebSocket.OPEN) return Promise.resolve(!0);
                let e = zo().ws;
                return e ? new Promise(t => {
                    this.closing = !1;
                    let a = new WebSocket(e);
                    this.ws = a, r = setTimeout(() => {
                        a.readyState !== WebSocket.OPEN && t(!1)
                    }, 6e3);
                    var r;
                    a.onopen = () => {
                        let o = this.app.profile;
                        this.send({
                            t: "hello",
                            id: o.id,
                            name: o.name,
                            level: o.level,
                            look: o.look,
                            lo: o.lo,
                            status: o.status
                        })
                    }, a.onmessage = o => {
                        let s;
                        try {
                            s = JSON.parse(String(o.data))
                        } catch {
                            return
                        }
                        s.t === "welcome" && (this.pid = s.pid, clearTimeout(r), this.session && (this.session.disconnected = !1), t(!0)), this.onMsg(s)
                    }, a.onclose = () => {
                        clearTimeout(r), t(false), this.session && (this.session.disconnected = !0), this.ws === a && (this.ws = null), !this.closing && this.code && (clearTimeout(this.retryT), this.retryT = window.setTimeout(() => {
                            this.connect().then(o => {
                                o && (this.session && (this.session.disconnected = !1), K("Squad connection restored", "good", 2200))
                            })
                        }, 1200))
                    }, a.onerror = () => {
                        clearTimeout(r), t(!1)
                    }
                }) : Promise.resolve(!1)
            }
            send(e) {
                this.ws && this.ws.readyState === WebSocket.OPEN && this.ws.send(JSON.stringify(e))
            }
            wait(e) {
                return new Promise(t => this.pending.set(e, t))
            }
            async create() {
                return await this.connect() ? (this.send({
                    t: "squad.create"
                }), (await Promise.race([this.wait("squad"), new Promise(t => setTimeout(() => t({
                    t: "timeout"
                }), 5e3))])).t === "squad") : !1
            }
            async join(e) {
                return await this.connect() ? (this.send({
                    t: "squad.join",
                    code: e
                }), (await Promise.race([this.wait("squad"), this.wait("error"), new Promise(a => setTimeout(() => a({
                    t: "timeout"
                }), 5e3))])).t === "squad") : !1
            }
            setReady(e) {
                this.ready = e, this.send({
                    t: "squad.ready",
                    ready: e
                })
            }
            sync() {
                let e = this.app.profile;
                this.send({
                    t: "hello",
                    id: e.id,
                    name: e.name,
                    level: e.level,
                    look: e.look,
                    lo: e.lo,
                    status: e.status
                })
            }
            leave() {
                this.closing = !0, clearTimeout(this.retryT), this.send({
                    t: "squad.leave"
                }), this.ws?.close(), this.code = "", this.ready = !1
            }
            deploy(e) {
                this.sync(), this.send({
                    t: "squad.deploy",
                    hour: e
                })
            }
            onMsg(e) {
                let t = this.pending.get(e.t);
                switch (t && (this.pending.delete(e.t), t(e)), e.t) {
                    case "squad": {
                        this.code = e.code;
                        let a = e.members;
                        this.members = a.map(r => ({
                            ...r,
                            you: r.id === this.pid
                        })), this.isLeader = this.members.some(r => r.you && r.leader), this.app.refresh();
                        break
                    }
                    case "error":
                        K(String(e.msg ?? "Server error"), "warn");
                        break;
                    case "raid.start":
                        this.startRaid(e);
                        break;
                    default:
                        this.session?.onMsg(e)
                }
            }
            startRaid(e) {
                let t = new Rt({
                        seed: e.seed,
                        startHour: e.hour,
                        raidLength: e.length,
                        weather: e.weather,
                        events: !1
                    }),
                    a = e.hostPid === this.pid || !e.hostPid && this.isLeader;
                a || (t.zombies = []);
                let r = new Map;
                for (let o of e.players) t.addPlayer(o.id, o.name, 1, o.lo, o.status ?? {
                    hp: 100,
                    hunger: 100,
                    thirst: 100,
                    infection: 0
                }), r.set(o.id, o.look);
                a || (t.zombies = []), this.session = a ? new DzHostNet(this, t, this.pid) : new Va(this, t, this.pid);
                let o = this.app;
                o.screen && (o.screen.destroy?.(), o.screen.el.remove(), o.screen = null), o.raid = new hi(o, {
                    world: t,
                    meId: this.pid,
                    mode: a ? "host" : "client",
                    looks: r,
                    tutorial: null,
                    insured: e.insured ?? [],
                    startValue: 0,
                    net: this.session
                }), o.raid.start(o.raidLayer)
            }
        },
        DzHostNet = class {
            constructor(e, t, a) {
                v(this, "squad");
                v(this, "world");
                v(this, "me");
                v(this, "snapT", 0);
                v(this, "pendingFx", []);
                v(this, "sent", new Set);
                v(this, "disconnected", !1);
                this.squad = e, this.world = t, this.me = a
            }
            sendInput(e) {}
            sendCommand(e) {}
            drainFx() {
                return []
            }
            result() {
                return this.world.result(this.me)
            }
            update(e) {}
            raidDone() {
                this.squad.send({
                    t: "raid.done"
                })
            }
            broadcastFx(e) {
                e?.length && this.pendingFx.push(...e)
            }
            state(e) {
                return {
                    hp: e.hp,
                    stamina: e.stamina,
                    hunger: e.hunger,
                    thirst: e.thirst,
                    infection: e.infection,
                    bleed: e.bleed,
                    immune: e.immune,
                    boost: e.boost,
                    hot: e.hot,
                    exhausted: e.exhausted,
                    crouch: e.crouch,
                    sprinting: e.sprinting,
                    moving: e.moving,
                    downed: e.downed,
                    downedT: e.downedT,
                    dead: e.dead,
                    extracted: e.extracted,
                    cause: e.cause,
                    killer: e.killer,
                    lo: e.lo,
                    active: e.active,
                    reloadT: e.reloadT,
                    reloadTotal: e.reloadTotal,
                    useT: e.useT,
                    useTotal: e.useTotal,
                    useUid: e.useUid,
                    bloom: e.bloom,
                    searching: e.searching,
                    openContainer: e.openContainer,
                    openGround: e.openGround,
                    extractT: e.extractT,
                    extractId: e.extractId,
                    light: e.light,
                    jammed: e.jammed,
                    speedMul: e.speedMul,
                    recoilKick: e.recoilKick,
                    aliveT: e.aliveT,
                    vehicle: e.vehicle,
                    wood: e.wood ?? 0,
                    stats: e.stats
                }
            }
            hostTick(e) {
                for (let t of this.world.players)
                    if (t.id !== this.me && (t.dead && !t.downed || t.extracted) && !this.sent.has(t.id)) {
                        this.sent.add(t.id);
                        let a = this.world.result(t.id);
                        a && this.squad.send({
                            t: "host.end",
                            pid: t.id,
                            result: a
                        })
                    } this.snapT -= e;
                if (this.snapT > 0) return;
                this.snapT = 1 / 20;
                let t = this.world,
                    a = t.players.map(r => [r.id, r.x, r.y, r.angle, r.hp, (r.downed ? 1 : 0) | (r.dead ? 2 : 0) | (r.extracted ? 4 : 0) | (r.light ? 8 : 0) | (r.crouch ? 16 : 0), ["primary", "secondary", "sidearm", "melee"].indexOf(r.active), 0, 0, r.vehicle ?? -1]),
                    r = t.zombies.filter(o => o.state !== "dead").map(o => [o.id, o.type, o.x, o.y, o.angle, Math.round(V(o.hp / o.maxHp, 0, 1) * 100), o.state === "attack" ? 2 : o.state === "chase" ? 1 : 0]),
                    o = t.map.doors.map(d => [d.id, d.open ? 1 : 0]),
                    n = t.cstate.map((d, l) => d.opened || d.unlocked ? [l, d.opened ? 1 : 0, d.items] : null).filter(Boolean),
                    c = t.vehicles.map(d => [d.id, d.x, d.y, d.a, d.speed, d.driver, d.fuel, d.hp]),
                    u = t.players.filter(d => d.id !== this.me).map(d => [d.id, this.state(d)]),
                    m = t.map.trees.map((d, l) => d.cut || d.hp !== 4 ? [l, d.cut ? 1 : 0, d.hp ?? 4] : null).filter(Boolean);
                this.squad.send({
                    t: "host.snap",
                    snap: {
                        time: t.time,
                        clock: t.clock,
                        weather: t.weather,
                        p: a,
                        z: r,
                        doors: o,
                        cs: n,
                        g: t.ground,
                        fx: this.pendingFx.splice(0),
                        ex: [...t.activeExtracts],
                        veh: c,
                        trees: m,
                        built: t.built,
                        safe: {guards:t.safeZone.guards.map(g=>[g.x,g.y,g.a,g.flash??0]),turrets:t.safeZone.turrets.map(g=>[g.x,g.y,g.a,g.flash??0])}
                    },
                    states: u
                })
            }
            onMsg(e) {
                if (e.t === "peer.pause") this.world.setInput(e.pid,{mx:0,my:0,aim:null,fire:false,sprint:false,crouch:false});
                else if (e.t === "peer.in") this.world.setInput(e.pid, e.i);
                else if (e.t === "peer.cmd") this.world.command(e.pid, e.c);
                else if (e.t === "peer.leave") {
                    let t = this.world.player(e.pid);
                    t && !t.dead && !t.extracted && this.world.killPlayer(t, "Disconnected", "")
                }
            }
        },
        Va = class {
            constructor(e, t, a) {
                v(this, "squad");
                v(this, "world");
                v(this, "me");
                v(this, "fx", []);
                v(this, "disconnected", !1);
                v(this, "res", null);
                v(this, "seq", 0);
                v(this, "sendT", 0);
                v(this, "lastInput", null);
                v(this, "targets", new Map);
                v(this, "ztargets", new Map);
                v(this, "vtargets", new Map);
                this.squad = e, this.world = t, this.me = a
            }
            sendInput(e) {
                this.lastInput = e
            }
            sendCommand(e) {
                this.squad.send({
                    t: "cmd",
                    c: e
                })
            }
            drainFx() {
                return this.fx.splice(0)
            }
            result() {
                return this.res
            }
            update(e) {
                this.sendT -= e, this.sendT <= 0 && this.lastInput && (this.sendT = 1 / 30, this.squad.send({
                    t: "in",
                    s: ++this.seq,
                    i: this.lastInput
                }));
                let t = this.world.player(this.me);
                if (t && this.lastInput && !t.dead && !t.downed && t.vehicle < 0) {
                    let r = (this.lastInput.sprint ? 206 : this.lastInput.crouch ? 70 : 128) * t.speedMul;
                    t.x += this.lastInput.mx * r * e, t.y += this.lastInput.my * r * e, this.world.collide(t, t.r), this.lastInput.aim !== null && (t.angle = this.lastInput.aim)
                }
                let a = 1 - Math.exp(-14 * e);
                for (let r of this.world.map.doors) r.openT += ((r.open ? 1 : 0) - (r.openT ?? (r.open ? 1 : 0))) * (1 - Math.exp(-12 * e));
                for (let r of this.world.players) {
                    let o = this.targets.get(r.id);
                    o && (r.id === this.me ? Math.hypot(o.x - r.x, o.y - r.y) > 120 ? (r.x = o.x, r.y = o.y) : (r.x += (o.x - r.x) * a * .22, r.y += (o.y - r.y) * a * .22) : (r.x += (o.x - r.x) * a, r.y += (o.y - r.y) * a, r.angle = o.a), r.animT += e)
                }
                for (let r of this.world.zombies) {
                    let o = this.ztargets.get(r.id);
                    o && (r.vx = (o.x - r.x) / Math.max(e, .016), r.vy = (o.y - r.y) / Math.max(e, .016), r.x += (o.x - r.x) * a, r.y += (o.y - r.y) * a, r.angle = o.a, r.animT += e, r.hitFlash = Math.max(0, r.hitFlash - e), r.lunge = Math.max(0, r.lunge - e))
                }
                for (let r of this.world.vehicles) {
                    let o = this.vtargets.get(r.id);
                    o && (r.x += (o.x - r.x) * a, r.y += (o.y - r.y) * a, r.a += Tt(r.a, o.a) * a, r.speed = o.speed, r.driver = o.driver, r.fuel = o.fuel, r.hp = o.hp)
                }
            }
            onMsg(e) {
                let t = this.world;
                if (e.t === "snap") {
                    t.time = e.time, t.clock = e.clock, t.weather = e.weather;
                    if(e.safe)for(const key of ["guards","turrets"])e.safe[key]?.forEach((state,index)=>{const defence=t.safeZone[key][index];if(defence)[defence.x,defence.y,defence.a,defence.flash]=state;});
                    for(const player of t.players)player.inSafeZone=DZInsideSafe(t,player.x,player.y,-4);
                    for (let r of e.p) {
                        let [o, s, d, n, l, c, u, , , m] = r, p = t.player(o);
                        p && (this.targets.set(o, {
                            x: s,
                            y: d,
                            a: n
                        }), p.hp = l, p.downed = !!(c & 1), p.dead = !!(c & 2), p.extracted = !!(c & 4), p.light = !!(c & 8), p.crouch = !!(c & 16), p.active = ["primary", "secondary", "sidearm", "melee"][u] ?? "melee", p.vehicle = m ?? -1)
                    }
                    let a = new Set;
                    for (let r of e.z) {
                        let [o, s, d, n, l, c, u] = r;
                        a.add(o);
                        let m = t.zombies.find(p => p.id === o);
                        if (!m) {
                            if (m = t.spawnZombie(s, d, n, "idle") ?? void 0, !m) continue;
                            m.id = o
                        }
                        m.hp = c / 100 * m.maxHp, u === 1 && (m.state = "chase"), u === 2 && m.lunge <= 0 && (m.lunge = .28), this.ztargets.set(o, {
                            x: d,
                            y: n,
                            a: l
                        })
                    }
                    if (t.zombies = t.zombies.filter(r => a.has(r.id)), e.built) {
                        let r = t.syncBuilt(e.built);
                        for (let o of r) this.fx.push({
                            t: "worldbuild",
                            x: (o.tx + .5) * y,
                            y: (o.ty + .5) * y,
                            kind: o.kind
                        })
                    }
                    if (e.trees) {
                        let r = !1;
                        for (let [o, s, d] of e.trees) {
                            let n = t.map.trees[o];
                            if (n && (n.cut !== !!s || n.hp !== d)) {
                                n.cut = !!s, n.hp = d, r = !0, s && this.fx.push({
                                    t: "treecut",
                                    x: n.x,
                                    y: n.y,
                                    id: o
                                })
                            }
                        }
                        r && t.buildCollision()
                    }
                    if (e.doors)
                        for (let [r, o] of e.doors) ii(t.map, t.map.doors[r], !!o);
                    if (e.cs)
                        for (let [r, o, s] of e.cs) t.cstate[r].opened = !!o, s && (t.cstate[r].items = s);
                    if (e.g && (t.ground = e.g), e.veh)
                        for (let r of e.veh) {
                            let o = t.vehicle(r[0]);
                            o && this.vtargets.set(r[0], {
                                x: r[1],
                                y: r[2],
                                a: r[3],
                                speed: r[4],
                                driver: r[5],
                                fuel: r[6],
                                hp: r[7]
                            })
                        }
                    if (e.me) {
                        let r = t.player(this.me);
                        r && Object.assign(r, e.me)
                    }
                    if (e.fx)
                        for (let r of e.fx) this.fx.push(r);
                    e.ex && (t.activeExtracts = new Set(e.ex))
                } else if (e.t === "raid.end") {
                    this.res = e.result;
                    let a = t.player(this.me);
                    a && (this.res.outcome === "extracted" ? a.extracted = !0 : a.dead = !0)
                }
            }
        };

    function Do(i) {
        let e = h("div", {
                class: "content squad-screen"
            }),
            t = h("div", {
                class: "screen"
            }, Le(i, "Squad", "Play together"), e),
            share = async code => {
                let u = new URL(location.href);
                u.searchParams.set("squad", code);
                let link = u.toString();
                try {
                    if (navigator.share) {
                        await navigator.share({
                            title: "DOVY: DEADZONE",
                            text: `Join my squad — code ${code}`,
                            url: link
                        });
                        return
                    }
                    if (navigator.clipboard?.writeText) {
                        await navigator.clipboard.writeText(link);
                        K("Invite link copied", "good", 2400);
                        return
                    }
                } catch {}
                K(`Squad code: ${code}`, "good", 5e3)
            }, a = () => {
                me(e);
                let r = Ho(),
                    status = h("div", {
                        class: `coop-status ${r?"online":"offline"}`
                    }, h("i"), r ? "CO-OP SERVER ONLINE" : "CO-OP OFFLINE");
                e.appendChild(status);
                if (!r) {
                    e.appendChild(h("div", {
                        class: "panel coop-offline"
                    }, h("h3", null, "Online server required"), h("p", null, "This copy is running in local/static preview mode. Friends cannot join a static page."), h("div", {
                        class: "coop-steps"
                    }, h("b", null, "To play with friends:"), h("span", null, "1. Deploy this whole package on a Node host."), h("span", null, "2. Start it with npm start."), h("span", null, "3. Everyone opens the same HTTPS game address."), h("span", null, "4. Open Squad → Host Squad → share the code.")), h("div", {
                        class: "test-banner"
                    }, "Your saves can still work locally; only online rooms need the server.")));
                    return
                }
                let d = i.squad;
                if (!d || !d.code) {
                    let invite = new URLSearchParams(location.search).get("squad")?.trim().toUpperCase() ?? "",
                        l = h("input", {
                            class: "text squad-code",
                            id: "squad-code",
                            maxlength: "4",
                            placeholder: "CODE",
                            autocomplete: "off",
                            value: /^[A-Z]{4}$/.test(invite) ? invite : ""
                        });
                    e.appendChild(h("div", {
                        class: "panel coop-start"
                    }, h("div", {
                        class: "coop-choice"
                    }, h("div", {
                        class: "coop-choice-copy"
                    }, h("h3", null, "Host a squad"), h("p", null, "Create a private room for up to four survivors.")), z([E("users"), "Host squad"], async () => {
                        i.squad = i.squad ?? new zi(i);
                        await i.squad.create() ? a() : K("Could not connect to the co-op server", "warn")
                    }, "primary")), h("div", {
                        class: "coop-divider"
                    }, "OR"), h("div", {
                        class: "coop-choice"
                    }, h("div", {
                        class: "coop-choice-copy"
                    }, h("h3", null, "Join a friend"), h("p", null, "Enter their four-letter squad code.")), h("div", {
                        class: "coop-join"
                    }, l, z("Join squad", async () => {
                        let c = l.value.trim().toUpperCase();
                        if (c.length !== 4) return K("Enter the four-letter squad code", "warn");
                        i.squad = i.squad ?? new zi(i);
                        await i.squad.join(c) ? a() : K("Squad not found or server unavailable", "warn")
                    })))));
                    return
                }
                let n = h("div", {
                    class: "list squad-members"
                });
                for (let l of d.members) n.appendChild(h("div", {
                    class: `li-row squad-member ${l.ready?"ready":""}`
                }, E(l.leader ? "star" : "user"), h("div", {
                    class: "col grow"
                }, h("div", {
                    class: "ttl"
                }, l.name + (l.you ? " · YOU" : "")), h("div", {
                    class: "desc"
                }, `Level ${l.level}`)), h("b", {
                    class: "ready-state"
                }, l.ready ? "READY" : "WAITING")));
                let room = h("div", {
                    class: "panel coop-room"
                }, h("div", {
                    class: "coop-room-head"
                }, h("div", null, h("div", {
                    class: "muted",
                    style: "font-size:11px;letter-spacing:.14em"
                }, "SQUAD CODE"), h("b", {
                    class: "coop-code"
                }, d.code)), z([E("users"), "Share invite"], () => share(d.code), "small")), n, h("div", {
                    class: "coop-actions"
                }, z(d.ready ? "Not ready" : "Ready", () => {
                    d.setReady(!d.ready), a()
                }, d.ready ? "ghost" : "primary"), d.isLeader ? z([E("play"), "Deploy squad"], () => d.deploy(10.5), "primary") : h("div", {
                    class: "coop-wait"
                }, "Waiting for the squad leader to deploy…"), z("Leave", () => {
                    d.leave(), i.squad = null, a()
                }, "ghost")));
                e.appendChild(room)
            };
        return a(), {
            el: t,
            refresh: a
        }
    }
    var DzCashCrates = [{
        id: "cache",
        name: "Scavenger Cache",
        price: 2500,
        ic: "pack",
        tag: "SUPPLIES",
        desc: "A fixed starter cache: bandages, water, food, 9mm and scrap.",
        pool: [
            ["med_bandage", 3],
            ["drink_water", 2],
            ["food_beans", 2],
            ["a9", 60],
            ["comp_scrap", 8]
        ]
    }, {
        id: "ration",
        name: "Ration Crate",
        price: 3500,
        ic: "food",
        tag: "RATIONS",
        desc: "Food and drink for several raids. Contents are guaranteed.",
        pool: [
            ["food_beans", 4],
            ["food_mre", 2],
            ["drink_water", 4],
            ["drink_cola", 2]
        ]
    }, {
        id: "builder",
        name: "Builder Crate",
        price: 5000,
        ic: "hammer",
        tag: "BUILD",
        desc: "Materials for safehouse work and field survival.",
        pool: [
            ["comp_scrap", 10],
            ["comp_screws", 10],
            ["comp_tape", 3],
            ["comp_rope", 2],
            ["tool_toolbox", 1]
        ]
    }, {
        id: "medic",
        name: "Medic Crate",
        price: 7000,
        ic: "medkit",
        tag: "MEDICAL",
        desc: "A guaranteed medical restock for harder runs.",
        pool: [
            ["med_firstaid", 2],
            ["med_bandage", 4],
            ["med_pills", 3],
            ["med_antibiotics", 1]
        ]
    }, {
        id: "mechanic",
        name: "Mechanic Crate",
        price: 7500,
        ic: "wrench",
        tag: "GARAGE",
        desc: "Repair and utility supplies for weapons, generators and vehicle runs.",
        pool: [
            ["tool_repair", 1],
            ["comp_fuel", 1],
            ["comp_tape", 2],
            ["comp_scrap", 8],
            ["comp_solvent", 2]
        ]
    }, {
        id: "armour",
        name: "Protection Crate",
        price: 9000,
        ic: "shield",
        tag: "GEAR",
        desc: "Guaranteed body protection plus medical supplies.",
        pool: [
            ["arm_vest", 1],
            ["med_firstaid", 2],
            ["med_bandage", 3]
        ]
    }, {
        id: "marksman",
        name: "Marksman Crate",
        price: 13500,
        ic: "scope",
        tag: "MARKSMAN",
        desc: "Fieldmaster rifle, 7.62 ammunition and a 4× optic. Fixed contents.",
        pool: [
            ["w_fieldmaster", 1],
            ["a762", 36],
            ["att_scope", 1]
        ]
    }, {
        id: "assault",
        name: "Assault Crate",
        price: 15000,
        ic: "target",
        tag: "ASSAULT",
        desc: "VR-556 carbine, 5.56 ammunition and a red-dot. Fixed contents.",
        pool: [
            ["w_vr556", 1],
            ["a556", 90],
            ["att_reddot", 1]
        ]
    }, {
        id: "outfit",
        name: "Outfit Case",
        price: 12000,
        ic: "user",
        tag: "STYLE",
        desc: "Unlocks the next market-exclusive survivor outfit you do not already own.",
        outfits: ["o_nomad", "o_raider2", "o_civildef", "o_frost"]
    }];

    function DZCrateDetails(app,crate){
        const panel=h("div",{class:"crate-details col gap"},h("h3",null,crate.name),h("p",null,crate.desc),h("b",{class:"c-cash"},`${G(crate.price)} RAID CASH`),h("p",{class:"muted"},"Earned cash only · listed supplies secured to stash"));
        const contents=crate.pool?.map(([id,count])=>`${count} × ${C(id).name}`)??crate.outfits.map(id=>ye.find(o=>o.id===id)?.name??id);
        panel.appendChild(h("div",{class:"crate-contents"},...contents.map(name=>h("div",null,name))));
        if(crate.outfits)panel.appendChild(h("small",null,"Next unowned outfit; if all owned, 60% cash refund."));
        let opened=false;
        const button=z(`OPEN · ${G(crate.price)}`,()=>{
            if(opened||app.profile.cash<crate.price)return;
            opened=true;button.disabled=true;panel.classList.add("opening");
            DzOpenCashCrate(app,crate,true);ue();De(panel,{title:"Opening supply crate",noClose:true});
            panel.appendChild(h("div",{class:"crate-opening",role:"status"},E("pack"),"UNSEALING SUPPLIES…"));
        },"primary");button.disabled=app.profile.cash<crate.price;panel.appendChild(button);De(panel,{title:"Supply Crate"});
    }
    function DzCrateReveal(i, e) {
        let t = h("div", {
                class: "crate-reveal"
            }, h("div", {
                class: "crate-reveal-mark"
            }, E(e.id === "outfit" ? "user" : "pack")), h("div", {
                class: "crate-reveal-copy"
            }, h("b", null, e.name), h("span", null, "SECURED TO STASH"))),
            a = h("div", {
                class: "crate-reward-list"
            });
        for (let r of i) a.appendChild(h("div", {
            class: `crate-reward rarity-${r.rarity??"common"}`
        }, h("span", null, r.name), h("b", null, "SECURED")));
        t.appendChild(a), t.appendChild(z("Done", () => ue(), "primary")), De(t, {
            title: "Crate opened",
            noClose: !0
        })
    }

    function DzOpenCashCrate(i, e, animate=false) {
        let t = i.profile;
        if (t.cash < e.price) return K("Not enough raid cash", "warn");
        t.cash -= e.price;
        let a = [];
        if (e.outfits) {
            let r = e.outfits.filter(o => !t.ent.outfits.includes(o));
            if (r.length) {
                let o = r[0];
                t.ent.outfits.push(o);
                let s = ye.find(d => d.id === o);
                a.push({
                    name: s?.name ?? "Outfit",
                    rarity: "epic"
                })
            } else t.cash += Math.floor(e.price * .6), a.push({
                name: "All market outfits owned · 60% cash refunded",
                rarity: "rare"
            })
        } else
            for (let [r, o] of e.pool) {
                ei(t, Ne(Re(t, "mk"), r, o), i.now());
                let s = C(r);
                a.push({
                    name: `${o} × ${s.name}`,
                    rarity: s.rarity
                })
            }
        i.save(!0), i.track("cash_crate_opened", {
            crate: e.id,
            price: e.price
        }), F.play("pickup"), K(`${e.name} opened`, "good", 2200), i.refresh(), animate ? setTimeout(()=>{ue();DzCrateReveal(a,e)},720) : DzCrateReveal(a, e)
    }

    function DzMarket(i) {
        let category="All";
        const matches=(crate)=>category==="All"||category==="Weapons"&&["marksman","assault"].includes(crate.id)||category==="Wardrobe"&&crate.id==="outfit"||category==="Supplies"&&!["marksman","assault","outfit"].includes(crate.id);
        let e = i.profile,
            t = h("div", {
                class: "content market-screen col"
            }),
            a = h("div", {
                class: "screen market-shell"
            }, Le(i, "Harrow Cut Market", "SAFE ZONE · weapons holstered"), t),
            r = () => {
                me(t);
                let o = h("section", {
                    class: "market-hero"
                }, h("div", {
                    class: "market-safe"
                }, E("shield"), "SAFE ZONE"), h("div", null, h("h2", null, "Harrow Cut Exchange"), h("p", null, "Spend the cash you bring home. Trade gear, open supply crates and change your survivor look without entering a raid.")), h("div", {
                    class: "market-wallet"
                }, E("coin"), h("div", null, h("span", null, "AVAILABLE CASH"), h("b", null, G(e.cash)))));
                t.appendChild(o);
                let s = h("div", {
                    class: "market-stalls"
                });
                s.appendChild(h("button", {
                    class: "market-stall trader",
                    type: "button",
                    onTap: () => i.go("traders")
                }, h("div", {
                    class: "stall-icon"
                }, E("cart")), h("div", null, h("b", null, "Trader Row"), h("span", null, "Buy, sell and build reputation with every Harrow Cut trader.")), h("strong", null, "ENTER")));
                s.appendChild(h("button", {
                    class: "market-stall wardrobe",
                    type: "button",
                    onTap: () => i.go("profile")
                }, h("div", {
                    class: "stall-icon"
                }, E("user")), h("div", null, h("b", null, "Threads & Wardrobe"), h("span", null, "Equip survivor skins and inspect your collection.")), h("strong", null, "BROWSE")));
                s.appendChild(h("button", {
                    class: "market-stall garage",
                    type: "button",
                    onTap: () => De(h("div",{class:"col gap garage-info"},h("p",null,"Find parked vehicles in Harrow Cut and across Harrowmere. Approach and use DRIVE."),h("p",null,"Left stick up: accelerate. Down: brake, then reverse. Left/right: steer. USE exits when the side is clear."),...Object.values(DZVehicleTuning).map(v=>h("div",{class:"panel"},h("b",null,v.name),h("span",{class:"muted"},` · ${Math.round(v.max*.18)} km/h · ${v.mass>=3?"Heavy transport":v.mass>=2?"Slow field utility":v.mass>=1.5?"Stable utility":"Responsive patrol"}`))),h("p",{class:"muted"},"Fuel and condition are tracked in the vehicle HUD. Vehicles remain in the raid world.")),{title:"Harrow Cut Garage"})
                }, h("div", {
                    class: "stall-icon"
                }, E("wrench")), h("div", null, h("b", null, "Garage"), h("span", null, "Vehicle tips, fuel and field repairs. Cars remain raid-world finds.")), h("strong", null, "INFO")));
                s.appendChild(h("button",{class:"market-stall stash",type:"button",onTap:()=>i.go("loadout")},h("div",{class:"stall-icon"},E("pack")),h("div",null,h("b",null,"Stash & Loadout"),h("span",null,"Manage secured supplies and prepare your next run.")),h("strong",null,"OPEN")));
                t.appendChild(s);
                const nav=h("div",{class:"market-categories",role:"group","aria-label":"Crate categories"});
                for(const label of ["All","Supplies","Weapons","Wardrobe"])nav.appendChild(z(label,()=>{category=label;r();},label===category?"small primary":"small"));
                t.appendChild(nav);
                t.appendChild(h("div", {
                    class: "market-sec"
                }, h("div", null, h("h3", null, "Cash Crates"), h("p", null, "Bought only with cash earned in the game. Contents are shown before you open them.")), h("span", {
                    class: "market-note"
                }, "NO PREMIUM CURRENCY")));
                let d = h("div", {
                    class: "crate-grid"
                });
                for (let n of DzCashCrates.filter(matches)) {
                    let l = h("button", {
                        class: "cash-crate",
                        type: "button",
                        disabled: false,
                        onTap: () => DZCrateDetails(i,n)
                    }, h("div", {
                        class: "crate-top"
                    }, h("div", {
                        class: "crate-icon"
                    }, E(n.ic)), h("span", null, n.tag)), h("h4", null, n.name), h("p", null, n.desc), h("div", {
                        class: "crate-price"
                    }, E("coin"), G(n.price), e.cash < n.price ? h("small", null, "Need more cash") : h("small", null, "Open crate")));
                    d.appendChild(l)
                }
                t.appendChild(d);
                t.appendChild(h("div", {
                    class: "market-foot panel"
                }, E("house"), h("div", null, h("b", null, "Safe-zone rules"), h("span", null, "No infected, no combat and no gear loss here. Your raid cash and stash are safe while you shop."))))
            };
        r();
        return {
            el: a,
            refresh: r
        }
    }
    var No = {
        menu: Mo,
        create: So,
        deploy: Ro,
        safehouse: Po,
        loadout: _o,
        traders: Io,
        market: DzMarket,
        missions: Lo,
        pass: Ao,
        store: qo,
        profile: $o,
        squad: Do
    };
    var pi = ["#728087", "#e2a64a", "#b58a58", "#f0d7a5", "#8e989d"],
        $s = 1800,
        Ka = () => new Promise(i => {
            document.hidden ? setTimeout(i, 0) : requestAnimationFrame(() => i())
        }),
        ma = class {
            constructor(e, t) {
                v(this, "el");
                v(this, "cv");
                v(this, "c");
                v(this, "raf", 0);
                v(this, "last", 0);
                v(this, "t", 0);
                v(this, "alive", !0);
                v(this, "W", 0);
                v(this, "H", 0);
                v(this, "dpr", 1);
                v(this, "target", 0);
                v(this, "shown", 0);
                v(this, "t0", performance.now());
                v(this, "bar");
                v(this, "pct");
                v(this, "stepEl");
                v(this, "slot");
                v(this, "stars", []);
                v(this, "bubbles", []);
                v(this, "unsub");
                v(this, "warp", 0);
                this.cv = h("canvas"), this.c = this.cv.getContext("2d"), this.bar = h("i", {
                    style: "width:0%"
                }), this.pct = h("span", {
                    class: "pct"
                }, "LOADING 000%"), this.stepEl = h("span", {
                    class: "step"
                }, "Starting up"), this.slot = h("div", {
                    class: "col",
                    style: "gap:0"
                }, h("div", {
                    class: "boot-bar",
                    role: "progressbar",
                    "aria-label": "Loading"
                }, this.bar), h("div", {
                    class: "boot-lcd"
                }, this.pct, this.stepEl));
                let a = h("div", {
                    class: "wordmark"
                }, h("span", {
                    class: "dovy"
                }, "Dovy"), h("span", {
                    class: "dz"
                }, "Deadzone"), h("i", {
                    class: "spk s1"
                }), h("i", {
                    class: "spk s2"
                }), h("i", {
                    class: "spk s3"
                }));
                this.el = h("div", {
                    class: "boot",
                    "aria-live": "polite"
                }, this.cv, h("div", {
                    class: "boot-scan"
                }), h("div", {
                    class: "boot-left"
                }, h("div", {
                    class: "boot-kick"
                }, "Dovy Studio presents"), a, h("div", {
                    class: "boot-sub"
                }, "Extraction survival ", h("b", null, "//"), " Season 1: Harrowmere"), this.slot), h("div", {
                    class: "boot-foot"
                }, h("b", null, "A Dovy Studio game"), ` \xB7 v${t}`), h("div", {
                    class: "boot-flash"
                })), e.appendChild(this.el), this.seed(), this.resize(), this.unsub = ri(() => this.resize()), this.raf = requestAnimationFrame(r => this.frame(r))
            }
            async run(e) {
                let t = e.reduce((r, o) => r + o.weight, 0) || 1,
                    a = 0;
                for (let r of e) {
                    this.stepEl.textContent = r.label;
                    let o = a,
                        s = (d, n) => {
                            this.target = Math.max(this.target, (o + r.weight * Math.min(1, Math.max(0, d))) / t), n && (this.stepEl.textContent = n)
                        };
                    try {
                        await r.run(s)
                    } catch (d) {
                        console.warn("boot step failed:", r.label, d)
                    }
                    a += r.weight, this.target = a / t, await Ka()
                }
                for (this.target = 1; this.alive && (this.shown < .995 || performance.now() - this.t0 < $s);) await new Promise(r => setTimeout(r, 40));
                this.stepEl.textContent = "Ready"
            }
            waitTap(e) {
                return new Promise(t => {
                    this.slot.innerHTML = "";
                    let a = h("button", {
                        class: "boot-start",
                        type: "button"
                    }, "Tap to start");
                    this.slot.appendChild(a), this.slot.appendChild(h("div", {
                        class: "boot-hint"
                    }, E("sound"), "Sound on recommended"));
                    let r = !1,
                        o = d => {
                            if (!r) {
                                r = !0, d?.preventDefault(), this.el.removeEventListener("pointerup", o), a.removeEventListener("click", o), window.removeEventListener("keydown", s);
                                try {
                                    e()
                                } catch (n) {
                                    console.warn(n)
                                }
                                t()
                            }
                        },
                        s = d => {
                            (d.key === "Enter" || d.key === " ") && o(d)
                        };
                    this.el.addEventListener("pointerup", o), a.addEventListener("click", o), window.addEventListener("keydown", s), setTimeout(() => a.focus({
                        preventScroll: !0
                    }), 300)
                })
            }
            error(e) {
                this.slot.appendChild(h("div", {
                    class: "boot-err"
                }, e))
            }
            close() {
                this.el.isConnected && (this.el.classList.add("leaving"), this.warp = 1, setTimeout(() => this.el.style.opacity = "0", 160), setTimeout(() => this.destroy(), 760))
            }
            destroy() {
                this.alive = !1, cancelAnimationFrame(this.raf), this.unsub(), this.el.remove()
            }
            seed() {
                let e = 1337,
                    t = () => (e = e * 1664525 + 1013904223 >>> 0) / 4294967296;
                for (let a = 0; a < 56; a++) this.stars.push({
                    x: t(),
                    y: t() * .66,
                    s: .6 + t() * t() * 3.2,
                    p: t() * 6.28,
                    v: .6 + t() * 1.8
                });
                for (let a = 0; a < 9; a++) this.bubbles.push({
                    x: .52 + t() * .46,
                    y: t() * 1.2,
                    r: 5 + t() * 16,
                    v: .025 + t() * .05,
                    ph: t() * 6.28
                })
            }
            resize() {
                this.W = W.W, this.H = W.H, this.dpr = Math.min(1.5, W.dpr || 1), this.cv.width = Math.round(this.W * this.dpr), this.cv.height = Math.round(this.H * this.dpr)
            }
            frame(e) {
                if (!this.alive || (this.raf = requestAnimationFrame(r => this.frame(r)), e - this.last < 32)) return;
                let t = Math.min(.1, (e - this.last) / 1e3 || .033);
                this.last = e, this.t += t, this.shown += (this.target - this.shown) * Math.min(1, t * 7), this.target >= 1 && this.shown > .985 && (this.shown = 1);
                let a = Math.round(this.shown * 100);
                this.bar.style.width = Math.max(3, a) + "%", this.pct.textContent = "LOADING " + String(a).padStart(3, "0") + "%", this.draw(t)
            }
            draw(e) {
                let t = this.c,
                    a = this.W,
                    r = this.H,
                    o = this.t;
                t.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
                let s = r * .64,
                    d = a * .73,
                    n = r * .4,
                    l = Math.max(40, Math.min(r * .26, a * .16)),
                    c = t.createLinearGradient(0, 0, 0, r);
                c.addColorStop(0, "#07070d"), c.addColorStop(.5, "#110c26"), c.addColorStop(.64, "#1c1036"), c.addColorStop(.66, "#0b0918"), c.addColorStop(1, "#07070d"), t.fillStyle = c, t.fillRect(0, 0, a, r);
                let u = t.createRadialGradient(d, n, l * .2, d, n, l * 2.6);
                u.addColorStop(0, "rgba(169,139,255,0.34)"), u.addColorStop(.5, "rgba(120,80,220,0.1)"), u.addColorStop(1, "rgba(169,139,255,0)"), t.fillStyle = u, t.fillRect(0, 0, a, r), t.save(), t.translate(d, s), t.scale(1, .32), u = t.createRadialGradient(0, 0, 4, 0, 0, a * .62), u.addColorStop(0, "rgba(255,94,200,0.34)"), u.addColorStop(.6, "rgba(255,94,200,0.08)"), u.addColorStop(1, "rgba(255,94,200,0)"), t.fillStyle = u, t.fillRect(-a, -a, a * 2, a * 2), t.restore();
                for (let w of this.stars) {
                    let P = Math.pow(Math.max(0, Math.sin(o * w.v + w.p)), 3);
                    if (P < .03) continue;
                    let g = w.x * a,
                        S = w.y * r;
                    t.globalAlpha = P, w.s > 2 ? this.star4(g, S, w.s * 2.4, "#ffffff") : (t.fillStyle = "#e6e9ff", t.fillRect(g, S, w.s, w.s))
                }
                t.globalAlpha = 1;
                let m = d;
                t.save(), t.beginPath(), t.rect(0, s, a, r - s), t.clip();
                let p = t.createLinearGradient(0, s, 0, r);
                p.addColorStop(0, "rgba(40,20,80,0.5)"), p.addColorStop(1, "rgba(7,7,13,0)"), t.fillStyle = p, t.fillRect(0, s, a, r - s);
                let f = t.createLinearGradient(0, s, 0, r);
                f.addColorStop(0, "rgba(169,139,255,0)"), f.addColorStop(.25, "rgba(169,139,255,0.35)"), f.addColorStop(1, "rgba(94,246,255,0.6)"), t.strokeStyle = f, t.lineWidth = 1, t.beginPath();
                let b = 14,
                    x = o * (.55 + this.warp * 4) % 1;
                for (let w = 0; w < b; w++) {
                    let P = (w + x) / b,
                        g = s + (r - s) * Math.pow(P, 2.2);
                    t.moveTo(0, g), t.lineTo(a, g)
                }
                let k = a * .16;
                for (let w = -14; w <= 14; w++) t.moveTo(m + w * 6, s), t.lineTo(m + w * k, r + 4);
                t.stroke(), t.restore();
                let M = t.createLinearGradient(0, 0, a, 0);
                pi.forEach((w, P) => M.addColorStop(P / (pi.length - 1), w)), t.globalAlpha = .75, t.fillStyle = M, t.fillRect(0, s - .5, a, 1.2), t.globalAlpha = 1;
                let R = -.32;
                this.orbit(d, n, l, R, o, !0), u = t.createRadialGradient(d - l * .35, n - l * .4, l * .1, d, n, l), u.addColorStop(0, "rgba(60,40,120,0.55)"), u.addColorStop(.75, "rgba(14,10,34,0.9)"), u.addColorStop(1, "rgba(169,139,255,0.35)"), t.fillStyle = u, t.beginPath(), t.arc(d, n, l, 0, Math.PI * 2), t.fill(), this.wireGlobe(d, n, l, o * .32), u = t.createRadialGradient(d - l * .42, n - l * .48, 1, d - l * .42, n - l * .48, l * .5), u.addColorStop(0, "rgba(255,255,255,0.4)"), u.addColorStop(1, "rgba(255,255,255,0)"), t.fillStyle = u, t.beginPath(), t.arc(d, n, l, 0, Math.PI * 2), t.fill(), this.orbit(d, n, l, R, o, !1);
                for (let w of this.bubbles) w.y -= w.v * e * (1 + this.warp * 3), w.y < -.1 && (w.y = 1.1, w.x = .52 + Math.random() * .46), this.bubble(w.x * a + Math.sin(o * .8 + w.ph) * 10, w.y * r, w.r)
            }
            star4(e, t, a, r) {
                let o = this.c;
                o.fillStyle = r, o.beginPath(), o.moveTo(e, t - a), o.quadraticCurveTo(e, t, e + a, t), o.quadraticCurveTo(e, t, e, t + a), o.quadraticCurveTo(e, t, e - a, t), o.quadraticCurveTo(e, t, e, t - a), o.fill()
            }
            wireGlobe(e, t, a, r) {
                let o = this.c,
                    s = .38,
                    d = Math.cos(s),
                    n = Math.sin(s),
                    l = new Path2D,
                    c = new Path2D,
                    u = f => {
                        for (let b = 1; b < f.length; b++) {
                            let x = f[b - 1],
                                k = f[b],
                                M = x[2] + k[2] > 0 ? l : c;
                            M.moveTo(e + x[0] * a, t - x[1] * a), M.lineTo(e + k[0] * a, t - k[1] * a)
                        }
                    },
                    m = (f, b) => {
                        let x = Math.cos(f) * Math.sin(b),
                            k = Math.sin(f),
                            M = Math.cos(f) * Math.cos(b);
                        return [x, k * d - M * n, k * n + M * d]
                    };
                for (let f = 0; f < 9; f++) {
                    let b = f / 9 * Math.PI * 2 + r,
                        x = [];
                    for (let k = 0; k <= 22; k++) x.push(m(-Math.PI / 2 + k / 22 * Math.PI, b));
                    u(x)
                }
                for (let f = 1; f < 7; f++) {
                    let b = -Math.PI / 2 + f / 7 * Math.PI,
                        x = [];
                    for (let k = 0; k <= 30; k++) x.push(m(b, k / 30 * Math.PI * 2));
                    u(x)
                }
                let p = o.createLinearGradient(e - a, t - a, e + a, t + a);
                pi.forEach((f, b) => p.addColorStop(b / (pi.length - 1), f)), o.strokeStyle = p, o.lineWidth = 1, o.globalAlpha = .18, o.stroke(c), o.globalAlpha = .9, o.lineWidth = 1.3, o.shadowColor = "rgba(169,139,255,0.8)", o.shadowBlur = 6, o.stroke(l), o.shadowBlur = 0, o.globalAlpha = 1
            }
            orbit(e, t, a, r, o, s) {
                let d = this.c,
                    n = [{
                        rx: a * 1.55,
                        ry: a * .36,
                        speed: .7,
                        col: "#5ef6ff"
                    }, {
                        rx: a * 1.28,
                        ry: a * .22,
                        speed: -.45,
                        col: "#ff5ec8"
                    }];
                for (let l of n) {
                    d.save(), d.translate(e, t), d.rotate(r), d.strokeStyle = l.col, d.globalAlpha = s ? .22 : .6, d.lineWidth = 1, d.beginPath(), s ? d.ellipse(0, 0, l.rx, l.ry, 0, Math.PI, Math.PI * 2) : d.ellipse(0, 0, l.rx, l.ry, 0, 0, Math.PI), d.stroke();
                    let c = o * l.speed % (Math.PI * 2),
                        u = Math.sin(c);
                    if (u >= 0 !== s) {
                        let m = Math.cos(c) * l.rx,
                            p = u * l.ry;
                        d.globalAlpha = s ? .4 : 1;
                        let f = d.createRadialGradient(m, p, 0, m, p, 9);
                        f.addColorStop(0, "#ffffff"), f.addColorStop(.3, l.col), f.addColorStop(1, "rgba(0,0,0,0)"), d.fillStyle = f, d.beginPath(), d.arc(m, p, 9, 0, Math.PI * 2), d.fill()
                    }
                    d.restore()
                }
                d.globalAlpha = 1
            }
            bubble(e, t, a) {
                let r = this.c,
                    o = r.createRadialGradient(e, t, a * .55, e, t, a);
                o.addColorStop(0, "rgba(255,255,255,0)"), o.addColorStop(.8, "rgba(169,139,255,0.12)"), o.addColorStop(1, "rgba(94,246,255,0.32)"), r.fillStyle = o, r.beginPath(), r.arc(e, t, a, 0, Math.PI * 2), r.fill();
                let s = r.createLinearGradient(e - a, t - a, e + a, t + a);
                pi.forEach((d, n) => s.addColorStop(n / (pi.length - 1), d)), r.strokeStyle = s, r.globalAlpha = .55, r.lineWidth = 1, r.stroke(), r.globalAlpha = .85, r.fillStyle = "#ffffff", r.beginPath(), r.ellipse(e - a * .38, t - a * .42, a * .22, a * .12, -.7, 0, Math.PI * 2), r.fill(), r.globalAlpha = 1
            }
        };
    var zs = ["900 20px Orbitron", "700 20px Orbitron", '700 16px "Chakra Petch"', '600 16px "Chakra Petch"', "20px VT323", '14px "Share Tech Mono"'],
        Hs = [
            ["walker", 0],
            ["walker", 1],
            ["walker", 2],
            ["walker", 3],
            ["runner", 0],
            ["runner", 1],
            ["runner", 2],
            ["runner", 3],
            ["crawler", 0]
        ],
        Ds = i => new Promise(e => setTimeout(e, i));

    function Fo(i, e) {
        let t = null;
        return [{
            label: "Linking save data",
            weight: 2,
            run: async a => {
                await i.init(), a(.5), e(await i.load())
            }
        }, {
            label: "Loading typefaces",
            weight: 1,
            run: async () => {
                let a = document.fonts;
                a && await Promise.race([Promise.all(zs.map(r => a.load(r).catch(() => null))), Ds(2500)])
            }
        }, {
            label: "Surveying Harrowmere",
            weight: 2,
            run: a => {
                t = Ri(1337), a(1, `${t.buildings.length} buildings \xB7 ${t.containers.length} containers`)
            }
        }, {
            label: "Furnishing buildings",
            weight: 2,
            run: async a => {
                if (!t) return;
                let r = [];
                for (let o of t.props) r.push(() => {
                    yt(o.kind, o.w, o.h, o.v)
                });
                for (let o of t.containers) r.push(() => {
                    yt(o.kind, o.w, o.h, o.id % 4, !0)
                });
                await ja(r, 24, a)
            }
        }, {
            label: "Baking the infected",
            weight: 3,
            run: async a => {
                await ja(Hs.map(([r, o]) => () => {
                    Ii(r, o)
                }), 1, a)
            }
        }, {
            label: "Growing Blackwood",
            weight: 1,
            run: async a => {
                if (!t) return;
                let r = new Set,
                    o = [];
                for (let s of t.trees) {
                    let d = s.x < 72 * y && s.y < 52 * y,
                        n = s.v + (d ? "c" : "d");
                    r.has(n) || (r.add(n), o.push(() => {
                        oa(s.v, d)
                    }))
                }
                await ja(o, 2, a)
            }
        }]
    }
    async function ja(i, e, t) {
        for (let a = 0; a < i.length; a++) i[a](), (a + 1) % e === 0 && (t((a + 1) / i.length), await Ka());
        t(1)
    }
    var Ya = "0.5.10 (Harrow Cut artwork + inventory fix)";

    function Wo(i, e) {
        let t = i.profile.settings,
            a = () => {
                i.applySettings(), i.save()
            },
            r = (n, l, c, u, m, p, f, b) => {
                let x = h("span", {
                        class: "mono",
                        style: "width:44px;text-align:right"
                    }, b(c)),
                    k = h("input", {
                        type: "range",
                        class: "slider",
                        id: n,
                        min: String(u),
                        max: String(m),
                        step: String(p),
                        value: String(c),
                        "aria-label": l
                    });
                return k.addEventListener("input", () => {
                    f(Number(k.value)), x.textContent = b(Number(k.value)), a()
                }), k.style.touchAction = "pan-x", h("div", {
                    class: "row",
                    style: "gap:10px"
                }, h("label", {
                    for: n,
                    style: "width:120px;font-size:14px"
                }, l), k, x)
            },
            o = (n, l, c, u, m) => {
                let p = h("input", {
                    type: "checkbox",
                    class: "switch",
                    id: n,
                    "aria-label": l
                });
                return p.checked = c, p.addEventListener("change", () => {
                    u(p.checked), a()
                }), h("div", {
                    class: "row",
                    style: "gap:10px"
                }, h("label", {
                    for: n,
                    class: "col grow",
                    style: "font-size:14px"
                }, l, m ? h("span", {
                    class: "muted",
                    style: "font-size:12px"
                }, m) : null), p)
            },
            s = (n, l, c, u) => {
                let m = h("div", {
                        class: "seg"
                    }),
                    p = f => {
                        m.innerHTML = "";
                        for (let b of l) m.appendChild(h("button", {
                            type: "button",
                            class: b === f ? "on" : "",
                            onTap: () => {
                                u(b), a(), p(b)
                            }
                        }, b))
                    };
                return p(c), h("div", {
                    class: "row",
                    style: "gap:10px"
                }, h("span", {
                    style: "width:120px;font-size:14px"
                }, n), m)
            },
            d = h("div", {
                class: "col",
                style: "gap:10px"
            }, h("div", {
                class: "sec-h"
            }, "Audio"), r("set-sound", "Sound effects", t.sound, 0, 1, .05, n => t.sound = n, n => Math.round(n * 100) + "%"), r("set-music", "Ambience", t.music, 0, 1, .05, n => t.music = n, n => Math.round(n * 100) + "%"), o("set-haptics", "Haptics", t.haptics, n => t.haptics = n, "Vibration on Android. iPhone browsers do not allow web vibration."), h("div", {
                class: "sec-h"
            }, "Graphics"), s("Quality", ["auto", "high", "medium", "low"], t.quality, n => t.quality = n), o("set-fps", "Show FPS", t.showFps, n => t.showFps = n), o("set-shake", "Reduce camera shake", t.reduceShake, n => t.reduceShake = n), h("div", {
                class: "sec-h"
            }, "Controls"), r("set-cscale", "Control size", t.controlScale, .8, 1.3, .05, n => t.controlScale = n, n => Math.round(n * 100) + "%"), r("set-copa", "Control opacity", t.controlOpacity, .35, 1, .05, n => t.controlOpacity = n, n => Math.round(n * 100) + "%"), o("set-fire", "Auto-fire with aim stick", t.fireOnAim, n => t.fireOnAim = n, "Off is recommended: aim with the right stick and tap FIRE."), h("div", {
                class: "muted",
                style: "font-size:12px"
            }, "Controls automatically scale to the screen. Use Control size and opacity to fine-tune them."), h("div", {
                class: "sec-h"
            }, "Display"), s("Orientation", ["auto", "rotate"], "auto", n => ia(n === "rotate" ? !0 : null)), h("div", {
                class: "muted",
                style: "font-size:12px"
            }, "The game always plays in landscape. If your app locks portrait, it rotates itself: turn your phone sideways."), h("div", {
                class: "sec-h"
            }, "About"), h("div", {
                style: "font-size:14px;line-height:1.5"
            }, h("b", null, "DOVY: DEADZONE"), ` \xB7 version ${Ya}`, h("br"), "Developed and published by Dovy Studio, Essex, UK.", h("br"), h("span", {
                class: "muted"
            }, `Progress saving: ${i.store.mode==="db"?"cloud (your account)":i.store.mode==="local"?"this device only":"off (private browsing)"} \xB7 analytics events this device: ${gt.log.length}`)), e ? null : h("div", {
                class: "row gap",
                style: "margin-top:6px"
            }, z([E("exit"), "Sign out"], () => window.DZ_LOGOUT?.(), "small"), z([E("close"), "Reset progress"], () => {
                nt("Reset all progress?", "This deletes your survivor, stash, safehouse and purchases on this device and account. It cannot be undone.", "Delete everything", () => {
                    i.store.wipeLocal();
                    let n = i.profile.id;
                    i.profile.v = 0, i.store.save(i.profile, !0), K("Progress reset. Reloading\u2026", "warn"), setTimeout(() => location.reload(), 900)
                }, !0)
            }, "danger small")));
        De(d, {
            title: "Settings",
            onClose: () => ue
        })
    }
    var fa = class {
        constructor(e) {
            v(this, "stageEl");
            v(this, "screenLayer");
            v(this, "raidLayer");
            v(this, "modalLayer");
            v(this, "toastLayer");
            v(this, "profile");
            v(this, "store", new aa);
            v(this, "atlas");
            v(this, "raid", null);
            v(this, "screen", null);
            v(this, "history", []);
            v(this, "tickTimer", 0);
            v(this, "squad", null);
            this.stageEl = e, this.raidLayer = h("div", {
                class: "layer"
            }), this.screenLayer = h("div", {
                class: "layer",
                style: "pointer-events:none"
            }), this.modalLayer = h("div", {
                class: "layer",
                style: "pointer-events:none;z-index:60"
            }), this.toastLayer = h("div", {
                id: "toasts"
            }), e.appendChild(this.raidLayer), e.appendChild(this.screenLayer), e.appendChild(this.modalLayer), e.appendChild(this.toastLayer), new MutationObserver(() => {
                this.modalLayer.style.pointerEvents = this.modalLayer.children.length ? "auto" : "none"
            }).observe(this.modalLayer, {
                childList: !0
            }), Qr(this.modalLayer), Xr(this.toastLayer)
        }
        get settings() {
            return this.profile.settings
        }
        get name() {
            return this.profile.name
        }
        get level() {
            return this.profile.level
        }
        now() {
            return Date.now()
        }
        track(e, t) {
            gt.track(e, t);
            this.store.api && fetch(this.store.api + "/api/event", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    type: e,
                    data: t ?? {}
                }),
                keepalive: !0
            }).catch(() => {})
        }
        async boot() {
            jr(this.stageEl), ri(() => this.screen?.refresh?.());
            let e = new ma(this.stageEl, Ya.split(" ")[0]),
                t = null;
            try {
                await e.run(Fo(this.store, a => t = a))
            } catch (a) {
                console.warn("boot", a)
            }
            await e.waitTap(() => {
                F.unlock(), sa()
            }), t ? (this.profile = t, this.migrate(), await this.claimPurchases(), this.atlas = new Ei(Ri(1337), this.profile.atlas), gt.userId = this.profile.id, this.applySettings(), this.recoverInterruptedRaid(), Ye(this.profile, this.now()), gt.retention(this.profile.created, this.now()), gt.track("session_start", {
                level: this.profile.level,
                plus: He(this.profile, this.now())
            }), this.go("menu")) : this.go("create"), e.close(), this.tickTimer = window.setInterval(() => this.tick(), 1e3), document.addEventListener("visibilitychange", () => {
                document.hidden && this.profile && this.store.save(this.profile, !0)
            })
        }
        async claimPurchases() {
            if (!this.store.api) return;
            try {
                let e = await fetch(this.store.api + "/api/purchases/pending", {
                    credentials: "include",
                    cache: "no-store"
                });
                if (!e.ok) return;
                let t = await e.json(),
                    a = [];
                for (let r of t.purchases ?? []) {
                    let o = Ar(this.profile, r.productId, this.now());
                    o.ok && a.push(r.id)
                }
                if (a.length) {
                    await fetch(this.store.api + "/api/purchases/ack", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        credentials: "include",
                        body: JSON.stringify({
                            ids: a
                        })
                    });
                    this.save(!0);
                    setTimeout(() => K(`Purchase delivered${a.length>1?"s":""}. Thank you for supporting Dovy Studio.`, "good", 4200), 650)
                }
            } catch (e) {
                console.warn("purchase claim", e)
            }
        }
        migrate() {
            let e = this.profile;
            e.flags = e.flags ?? {}, e.settings = {
                sound: .8,
                music: .5,
                haptics: !0,
                quality: "auto",
                controlScale: 1,
                controlOpacity: .85,
                fireOnAim: !1,
                leftHanded: !1,
                showFps: !1,
                reduceShake: !1,
                ...e.settings
            }, e.flags.professionalControlsV3 || (e.settings.fireOnAim = !1, e.settings.reduceShake = !0, e.flags.professionalControlsV3 = 1), Wt(e, this.now())
        }
        createProfile(e, t) {
            let a = (this.store.userId ? "u" + jt(this.store.userId).toString(36) : "l" + Math.random().toString(36).slice(2, 10)) + Date.now().toString(36).slice(-4);
            this.profile = ur(a, e, t, this.now()), this.atlas = new Ei(Ri(1337)), gt.userId = a, this.applySettings(), this.save(!0), gt.track("account_created", {}), this.startRaid({
                hour: 10.5,
                tutorial: !0
            })
        }
        recoverInterruptedRaid() {
            let e = this.profile,
                t = e.flags ?? {};
            if (!t.inRaid) return;
            if (delete t.inRaid, t.inTutorial) {
                delete t.inTutorial;
                return
            }
            let a = we(e.lo).filter(s => !e.lo.secure.items.some(d => d.item.uid === s.uid)),
                r = e.flags?.insuredList ?? [],
                o = {
                    pid: 1,
                    outcome: "mia",
                    cause: "Disconnected during a raid",
                    killer: "",
                    time: 0,
                    extract: "",
                    loadout: {
                        equip: {},
                        pockets: {
                            ...e.lo.pockets,
                            items: []
                        },
                        bag: null,
                        secure: e.lo.secure,
                        quick: [null, null, null, null]
                    },
                    lost: a,
                    stats: {
                        zkills: 0,
                        pkills: 0,
                        shots: 0,
                        hits: 0,
                        dmgDealt: 0,
                        distance: 0,
                        searched: 0,
                        rares: [],
                        xp: 0,
                        bosses: 0,
                        missionsHit: {}
                    },
                    status: {
                        hp: 100,
                        hunger: e.status.hunger,
                        thirst: e.status.thirst,
                        infection: 0
                    }
                };
            Pa(e, o, Array.isArray(r) ? r : [], new Set, this.now(), 0), this.save(!0), setTimeout(() => K("Your last raid was interrupted. Your survivor was listed missing in action.", "warn", 5e3), 800)
        }
        applySettings() {
            let e = this.profile.settings;
            F.setVolumes(e.sound, e.music), this.stageEl.style.setProperty("--cs", String(e.controlScale)), this.raid?.applySettings()
        }
        save(e = !1) {
            this.profile && (this.profile.atlas = this.atlas?.save(), this.store.save(this.profile, e))
        }
        tick() {
            if (!this.profile || this.raid) return;
            let e = Ye(this.profile, this.now());
            for (let t of e) K(t, "good"), F.play("build");
            e.length && this.save(), this.screen?.ticks && this.screen.refresh?.()
        }
        go(e, t, a = !1) {
            ni(), this.screen && (this.screen.destroy?.(), this.screen.el.remove(), !a && this.screen.name !== e && this.screen.name !== "create" && this.history.push(this.screen.name));
            let r = No[e],
                o = r(this, t);
            this.screen = {
                ...o,
                name: e
            }, this.screenLayer.appendChild(o.el), e === "menu" && (this.history = []), this.track("screen_view", {
                screen: e
            })
        }
        back() {
            let e = this.history.pop() ?? "menu";
            this.go(e, void 0, !0)
        }
        refresh() {
            this.screen?.refresh?.()
        }
        apply(e, t = "tap") {
            return e.ok ? (e.msg && K(e.msg, "good"), t && F.play(t), this.save(), this.refresh(), !0) : (K(e.error, "warn"), F.play("empty"), !1)
        }
        openSettings(e) {
            Wo(this, e)
        }
        startRaid(e) {
            let t = this.profile,
                a = this.now(),
                r = Cr(t, a);
            if (!r.ok || !r.plan) {
                K(r.ok ? "Cannot deploy" : r.error, "warn", 3500);
                return
            }
            let o = r.plan,
                s = Math.random() * 2 ** 31 >>> 0,
                d = wo(e.tutorial ? "Little Harrow outskirts" : "Harrowmere", e.tutorial);
            this.stageEl.appendChild(d.el), d.progress(.2);
            let n = ft(o.loadout),
                l = new Set(we(o.loadout).map(c => c.uid));
            t.flags = t.flags ?? {}, t.flags.inRaid = a, e.tutorial && (t.flags.inTutorial = 1), t.flags.insuredList = o.insured, this.save(!0), this.track(e.tutorial ? "tutorial_started" : "raid_deployed", {
                hour: e.hour,
                value: n,
                insured: o.insured.length
            }), e.tutorial || this.track("first_run_started"), o.insured.length && this.track("item_insured", {
                n: o.insured.length,
                cost: o.insuranceCost
            }), setTimeout(() => {
                let c = new Rt({
                    seed: s,
                    startHour: e.hour,
                    raidLength: e.tutorial ? 1500 : 1800,
                    weather: e.tutorial ? "clear" : e.weather,
                    tutorial: e.tutorial,
                    events: !e.tutorial
                });
                d.progress(.6), e.tutorial && $i.setupWorld(c);
                let u = c.addPlayer(1, t.name, 1, o.loadout, o.status, void 0, o.insured),
                    m = new Map([
                        [1, t.look]
                    ]),
                    p = e.tutorial ? new $i : null;
                p && (p.onStep = (f, b) => this.track("tutorial_step", {
                    i: f,
                    text: b
                })), ni(), this.screen && (this.screen.destroy?.(), this.screen.el.remove(), this.screen = null), this.raid = new hi(this, {
                    world: c,
                    meId: 1,
                    mode: "solo",
                    looks: m,
                    tutorial: p,
                    insured: o.insured,
                    startValue: n,
                    net: null
                }), this.raid.startUids = l, this.raid.start(this.raidLayer), d.progress(1), setTimeout(() => d.close(), 450)
            }, 120)
        }
        raidEnded(e, t) {
            let a = this.profile,
                r = this.raid,
                o = r.startUids ?? new Set,
                s = !!r.s.tutorial,
                d = e.outcome === "extracted" ? we(e.loadout).filter(c => !o.has(c.uid)) : [],
                n = Pa(a, e, t.insured, t.takenByOthers, this.now(), t.startValue);
            a.flags && (delete a.flags.inRaid, delete a.flags.inTutorial), s && e.outcome === "extracted" && (a.tutorial.step = 1, this.track("tutorial_raid_extracted")), e.outcome === "extracted" ? this.track("first_extraction", {
                value: n.lootValue
            }) : this.track("first_death", {
                cause: e.cause
            }), this.track("raid_ended", {
                outcome: e.outcome,
                time: Math.round(e.time),
                zkills: e.stats.zkills,
                loot: n.lootValue,
                lost: n.lostValue,
                xp: n.xp
            });
            for (let c of n.missionsDone) this.track("mission_completed", {
                text: c
            });
            this.save(!0);
            let l = vo(this, e, n, d, () => {
                l.remove(), r.stop(), this.raid = null, me(this.raidLayer), this.go("menu"), n.missionsDone.length && setTimeout(() => K(`Mission complete: ${n.missionsDone[0]}${n.missionsDone.length>1?` (+${n.missionsDone.length-1})`:""}`, "mission", 3500), 600)
            }, s, r);
            this.raidLayer.appendChild(l)
        }
        streakReady() {
            return Bt(this.profile, this.now()).canClaim
        }
        stashValue() {
            let e = 0;
            for (let t of this.profile.stash.items) e += le(t.item);
            for (let t of this.profile.rack) e += le(t);
            return e + ft(this.profile.lo)
        }
        itemName(e) {
            return C(e).name
        }
        stageSize() {
            return {
                W: W.W,
                H: W.H
            }
        }
    };

    function Bo() {
        let i = document.createElement("style");
        i.textContent = Qa, document.head.appendChild(i);
        let e = document.getElementById("stage");
        e || (e = document.createElement("div"), e.id = "stage", document.body.appendChild(e)), document.addEventListener("gesturestart", a => a.preventDefault()), document.addEventListener("contextmenu", a => a.preventDefault());
        let t = new fa(e);
        window.__dz = t, t.boot().catch(a => {
            console.error(a), e.innerHTML = `<div style="padding:24px;font:16px sans-serif;color:#eef0ff;background:#07070d">Something went wrong starting the game. Reload to try again.<br><small>${String(a).replace(/</g,"&lt;")}</small></div>`
        })
    }
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Bo) : Bo();
})();