/* History app: memory cards, timeline and who's who games, and exam practice.
   Content lives in germany.js. Shared helpers (saving, speech, sound, confetti) come first, from the maths app. */

/* ---------- small helpers ---------- */
const INTERVALS = [0, 1, 2, 4, 7, 14];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ymd = d => d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
const today = () => ymd(new Date());
const addDays = (s, n) => { const [y,m,d] = s.split("-").map(Number); return ymd(new Date(y, m-1, d+n)); };
function niceDate(s){
  if (!s || s <= today()) return "today";
  if (s === addDays(today(), 1)) return "tomorrow";
  const [y,m,d] = s.split("-").map(Number);
  return new Date(y, m-1, d).toLocaleDateString("en-GB", {weekday:"long", day:"numeric", month:"short"});
}
const shuffle = a => { const b = a.slice(); for (let i = b.length-1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const LS = {
  get(k, d){ try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
};
const uid36 = () => Date.now().toString(36) + Math.random().toString(36).slice(2,6);

const I = {
  star: (f, s=20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z" fill="${f}" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  flame: `<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 4 5 6 5 11a5 5 0 01-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3-1-3 0-6.5 1-9.5z" fill="var(--warm)" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  gear: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M2.5 12h3M18.5 12h3M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></svg>`,
  speak: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/></svg>`,
  back: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>`,
  bulb: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/></svg>`,
  heart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"/></svg>`,
  plus: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>`,
  cards: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="13" height="15" rx="2.5"/><path d="M8 3h10.5A2.5 2.5 0 0121 5.5V18"/></svg>`,
  quiz: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 114 2c-1 .6-1.5 1.2-1.5 2.3M12 17h.01"/></svg>`,
  match: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="14" width="7" height="6" rx="1.5"/><path d="M10 7h4a3 3 0 013 3v4" stroke-linecap="round"/></svg>`,
  order: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 5l1-1v4M3.5 11.5c0-1 2.5-1 2.5 0S3.5 13.5 3.5 14H6M3.5 17h2.2l-1 1.2c1 0 1.3.5 1.3 1s-.5 1-1.2 1H3.5"/></svg>`,
  logo: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg>`
};

/* ---------- sound and speech ---------- */
let actx = null;
function chime(good){
  if (!S.settings.sound) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const notes = good ? [660, 880] : [392];
    notes.forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = "sine"; o.frequency.value = f;
      const t = actx.currentTime + i * 0.11;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.07, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 0.4);
    });
  } catch(e){}
}
function speak(text){
  try {
    const ss = window.speechSynthesis; if (!ss) { toast("Read aloud is not available here."); return; }
    ss.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB"; u.rate = 0.9;
    const v = ss.getVoices().find(v => /en-GB/i.test(v.lang)); if (v) u.voice = v;
    ss.speak(u);
  } catch(e){ toast("Read aloud is not available here."); }
}
const speakBtn = text => `<button class="iconbtn" data-act="speak" data-text="${esc(text)}" aria-label="Read aloud" title="Read aloud">${I.speak}</button>`;

let toastTimer;
function toast(msg){
  const r = document.getElementById("toastRoot");
  r.innerHTML = `<div class="toast" role="status">${esc(msg)}</div>`;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => r.innerHTML = "", 3200);
}

function confetti(){
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = document.createElement("canvas"); c.className = "confetti"; document.body.appendChild(c);
  const x = c.getContext("2d"); const W = c.width = innerWidth, H = c.height = innerHeight;
  const cs = getComputedStyle(document.documentElement);
  const cols = ["--sun","--teal","--good","--warm","--berry"].map(v => cs.getPropertyValue(v).trim());
  const P = Array.from({length:110}, () => ({x: W/2 + (Math.random()-.5)*W*.3, y: H*.35, vx:(Math.random()-.5)*11, vy:-Math.random()*12-4, r:Math.random()*6+4, c:cols[Math.floor(Math.random()*cols.length)], a:Math.random()*6}));
  let t = 0;
  (function f(){ x.clearRect(0,0,W,H); for (const p of P){ p.vy += .35; p.x += p.vx; p.y += p.vy; p.a += .2; x.save(); x.translate(p.x,p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2); x.restore(); }
    if (++t < 110) requestAnimationFrame(f); else c.remove(); })();
}

/* ---------- visual aids ---------- */
function visualHTML(v){
  if (!v) return "";
  if (v.kind === "table") return `<div class="vtable"><table><thead><tr>${v.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${v.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  if (v.kind === "steps") return `<ol class="vsteps">${v.steps.map(s => `<li><span>${esc(s)}</span></li>`).join("")}</ol>`;
  return "";
}
const hookHTML = h => h ? `<div class="hook">${I.bulb}<span><span class="small" style="display:block;font-weight:800">Memory hook</span>${esc(h)}</span></div>` : "";
function ringHTML(pct, big, small, cls = ""){
  const r = 52, C = 2 * Math.PI * r, off = C * (1 - Math.max(0, Math.min(100, pct)) / 100);
  return `<div class="ring ${cls}"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="14"/><circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--good)" stroke-width="14" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${off}"/></svg><div class="num"><div><b>${big}</b><span>${small}</span></div></div></div>`;
}

Object.assign(I, {
  timeline: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 12h18"/><circle cx="6" cy="12" r="2.2" fill="currentColor"/><circle cx="12" cy="12" r="2.2" fill="currentColor"/><circle cx="18" cy="12" r="2.2" fill="currentColor"/><path d="M6 9V5M12 15v4M18 9V5"/></svg>`,
  people: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.7 5 5.8"/></svg>`,
  pen: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>`,
  tick: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg>`
});

/* ---------- state ---------- */
const PKEY = "sgr-history-progress", AKEY = "sgr-history-answers";
const S = {
  view: "home", topicId: null, examId: null, taskId: null,
  progress: Object.assign({xp:0, streak:0, lastDay:null, cards:{}, done:{}}, LS.get(PKEY, {})),
  answers: LS.get(AKEY, {}),
  settings: Object.assign({tint:"cream", size:"l", spacing:false, sound:true, theme:"auto"}, LS.get("sgr-settings", {})),
  round: null, showSample: false, showCheck: false, checks: {}
};
S.progress.done = S.progress.done || {};

const findTopic = id => TOPICS.find(t => t.id === id);
const findExam = id => EXAM.find(e => e.id === id);
const keyOf = (topic, card) => topic.id + ":" + card.id;
const cardState = k => S.progress.cards[k] || {box:0, due:null};
const isDue = k => { const c = cardState(k); return c.box === 0 || !c.due || c.due <= today(); };

function topicStats(t){
  const n = t.cards.length || 1;
  let sum = 0, remembered = 0, due = 0, next = null;
  for (const c of t.cards){
    const st = cardState(keyOf(t, c));
    sum += st.box; if (st.box >= 2) remembered++;
    if (isDue(keyOf(t, c))) due++;
    else if (!next || st.due < next) next = st.due;
  }
  return {strength: Math.round(100 * sum / (5 * n)), remembered, due, next, total: t.cards.length};
}
function missionCards(){
  const out = [];
  for (const t of TOPICS) for (const c of t.cards) if (isDue(keyOf(t, c))) out.push({topic:t, card:c, seen: cardState(keyOf(t,c)).box > 0});
  // reviews first (they are about to be forgotten), then new cards in specification order
  out.sort((a, b) => (b.seen - a.seen));
  return out.slice(0, 8);
}
function nextCheck(){
  let next = null;
  for (const t of TOPICS) for (const c of t.cards){ const st = cardState(keyOf(t,c)); if (st.box > 0 && st.due && st.due > today() && (!next || st.due < next)) next = st.due; }
  return next;
}
const level = () => 1 + Math.floor(S.progress.xp / 150);
const levelPct = () => Math.round(100 * (S.progress.xp % 150) / 150);
const examTotal = () => EXAM.reduce((n, e) => n + e.tasks.length, 0);
const examDone = (e) => (e ? e.tasks : EXAM.flatMap(x => x.tasks)).filter(t => S.progress.done[t.id]).length;

/* ---------- saving ---------- */
function saveProgress(){ LS.set(PKEY, S.progress); }
function saveAnswers(){ LS.set(AKEY, S.answers); }
function saveSettings(){ LS.set("sgr-settings", S.settings); applySettings(); }
function applySettings(){
  const r = document.documentElement;
  r.setAttribute("data-tint", S.settings.tint);
  r.setAttribute("data-size", S.settings.size);
  r.setAttribute("data-spacing", S.settings.spacing ? "wide" : "normal");
  if (S.settings.theme === "auto") r.removeAttribute("data-theme"); else r.setAttribute("data-theme", S.settings.theme);
}
// A short summary for the landing page, which shows every subject together.
function saveSummary(){
  const due = TOPICS.reduce((n, t) => n + topicStats(t).due, 0);
  LS.set("sgr-sum-history", {due, xp: S.progress.xp, streak: streakNow(), lastDay: S.progress.lastDay, exam: examDone(), examTotal: examTotal()});
}

function grade(k, ok){
  const st = Object.assign({box:0}, cardState(k));
  st.box = ok ? Math.min(5, st.box + 1) : 1;
  st.due = addDays(today(), INTERVALS[st.box]);
  S.progress.cards[k] = st;
}
function addXP(n){ S.progress.xp += n; }
function markDay(){
  const t = today();
  if (S.progress.lastDay === t) return;
  S.progress.streak = (S.progress.lastDay === addDays(t, -1)) ? S.progress.streak + 1 : 1;
  S.progress.lastDay = t;
}
function streakNow(){ const l = S.progress.lastDay; return (l === today() || l === addDays(today(), -1)) ? S.progress.streak : 0; }

/* ---------- views ---------- */
function topBar(){
  return `<header class="bar">
    <button class="brand" data-act="home" aria-label="History home"><span class="logo">${I.logo}</span><span>History</span></button>
    <span class="chip" title="Days in a row">${I.flame}<span>${streakNow()} day${streakNow() === 1 ? "" : "s"}</span></span>
    <span class="chip" title="Level">${I.star("var(--sun)", 18)}<span>Level ${level()}</span></span>
    <button class="iconbtn" data-act="settings" aria-label="Settings" title="Settings">${I.gear}</button>
  </header>`;
}

function homeView(){
  const m = missionCards(), next = nextCheck();
  const totalCards = TOPICS.reduce((n, t) => n + t.cards.length, 0);
  const remembered = TOPICS.reduce((n, t) => n + topicStats(t).remembered, 0);
  const doneToday = S.progress.lastDay === today();
  const mission = m.length
    ? `<div class="mission">${ringHTML(doneToday ? 100 : 0, m.length, m.length === 1 ? "card" : "cards")}
        <div class="txt"><span class="eyebrow">Today's mission</span>
        <h1>${m.length} card${m.length === 1 ? "" : "s"} to check</h1>
        <p class="muted">${m.filter(x => x.seen).length ? "Some of these are ready to fade. Checking them now makes them stick for longer." : "New cards to learn. Take your time, there is no timer."}</p>
        <div class="row"><button class="btn" data-act="mission">Start mission</button></div></div></div>`
    : `<div class="mission">${ringHTML(100, "✓", "done")}
        <div class="txt"><span class="eyebrow">Today's mission</span><h1>All done for today</h1>
        <p class="muted">Your memory is safe. The next check is ${niceDate(next)}.</p>
        <div class="row"><button class="btn ghost" data-act="practise">Practise anyway</button></div></div></div>`;
  return `${topBar()}
  ${mission}
  <div class="calm">${I.heart}<p><b>Worried about forgetting?</b> That is normal, and it is how memory works. This app keeps track for you. It brings each card back just before it would fade, and every time you remember it, it stays for longer.</p></div>
  <div class="stats">
    <div class="stat"><span class="lbl">Level ${level()}</span><span class="big">${S.progress.xp} XP</span><div class="xpbar" aria-label="${levelPct()}% to next level"><i style="width:${levelPct()}%"></i></div></div>
    <div class="stat"><span class="lbl">Days in a row</span><span class="big">${streakNow()}</span><span class="lbl">${doneToday ? "Done today" : "Do one game to keep it going"}</span></div>
    <div class="stat"><span class="lbl">Cards remembered</span><span class="big">${remembered} / ${totalCards}</span><span class="lbl">Checked at least twice</span></div>
  </div>
  <section class="sheet"><div><h2>${esc(OPTION.title)}</h2><p class="small muted">${esc(OPTION.paper)} · Edexcel ${esc(OPTION.code)}</p></div>
    <div class="grid">
      ${TOPICS.map(t => { const s = topicStats(t); return `<button class="deck" data-act="topic" data-id="${t.id}">${ringHTML(s.strength, s.strength + "%", "", "sm")}<span class="info"><span class="subj History">Key topic ${t.num}</span><b>${esc(t.title)}</b><span class="small muted">${s.due ? s.due + " to check" : "Next check " + niceDate(s.next)}</span></span></button>`; }).join("")}
    </div>
  </section>
  <section class="sheet"><h2>Games for the whole option</h2>
    <div class="games">
      <button class="game g1" data-act="timeline"><span class="gi">${I.timeline}</span><b>Timeline</b><span>Put events in date order, from 1918 to 1939.</span></button>
      <button class="game g2" data-act="people"><span class="gi">${I.people}</span><b>Who's who</b><span>Match each person to what they did.</span></button>
      <button class="game g4" data-act="exam"><span class="gi">${I.pen}</span><b>Exam practice</b><span>Paper 3 questions, step by step. ${examDone()} of ${examTotal()} done.</span></button>
    </div>
  </section>
  <div class="panel"><h3>Your other History papers</h3><p class="muted">Paper 1 and Paper 2 will appear here once your options have been added.</p></div>
  <a class="home-link" href="../">← All subjects</a>`;
}

function topicView(){
  const t = findTopic(S.topicId); if (!t) { S.view = "home"; return homeView(); }
  const s = topicStats(t);
  const byS = sub => t.cards.filter(c => c.sub === sub.n);
  return `${topBar()}
  <button class="back" data-act="home">${I.back} All topics</button>
  <div class="panel">
    <div class="row" style="align-items:center">${ringHTML(s.strength, s.strength + "%", "memory")}
      <div style="display:flex;flex-direction:column;gap:6px;flex:1;min-width:200px"><span class="subj History">Key topic ${t.num}</span><h1>${esc(t.title)}</h1>
      <p class="muted">You remember ${s.remembered} of ${s.total} cards. ${s.due ? s.due + " are ready to check now." : "Next check: " + niceDate(s.next) + "."}</p></div></div>
  </div>
  <section class="sheet"><h2>Choose a game</h2>
    <div class="games">
      <button class="game g1" data-act="play" data-mode="quiz"><span class="gi">${I.quiz}</span><b>Quick quiz</b><span>Pick the right answer from four. About 5 minutes.</span></button>
      <button class="game g2" data-act="play" data-mode="flip"><span class="gi">${I.cards}</span><b>Flip cards</b><span>Think of the answer, then flip to check.</span></button>
      <button class="game g3" data-act="play" data-mode="match"><span class="gi">${I.match}</span><b>Match the words</b><span>Pair each key word with its meaning.</span></button>
      <button class="game g4" data-act="play" data-mode="order"><span class="gi">${I.order}</span><b>Order the events</b><span>Put what happened in the right order.</span></button>
      <button class="game g1" data-act="timeline" data-kt="${t.num}"><span class="gi">${I.timeline}</span><b>Timeline</b><span>Put this topic's events in date order.</span></button>
    </div>
  </section>
  <section class="sheet"><h2>Revision sheet</h2>
    <details open><summary>What you need to know</summary><div class="sheet">${t.spec.map(sp => `<div class="sheetcard"><b>${esc(sp.n)} ${esc(sp.name)}</b><ul class="points">${sp.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>`).join("")}</div></details>
    <details><summary>Key words</summary><div class="kw">${t.keywords.map(k => `<div class="t">${esc(k.term)}</div><div>${esc(k.meaning)}</div>`).join("")}</div></details>
    <details><summary>Events in order</summary><div class="sheet">${t.methods.map(m => `<div class="sheetcard"><b>${esc(m.name)}</b>${visualHTML({kind:"steps", steps:m.steps})}</div>`).join("")}</div></details>
    ${t.spec.map(sp => `<details><summary>Cards: ${esc(sp.name)} (${byS(sp).length})</summary><div class="sheet">
      ${byS(sp).map(c => `<div class="sheetcard"><div class="qa"><div><p>${esc(c.q)}</p><p class="ans">${esc(c.a)}</p></div>${speakBtn(c.q + ". " + c.a)}</div>${visualHTML(c.visual)}${hookHTML(c.hook)}</div>`).join("")}
    </div></details>`).join("")}
  </section>`;
}

/* ---------- rounds ---------- */
function startRound(mode, items, opts){
  S.round = Object.assign({mode, items, i:0, right:0, total:items.length, xp:0, results:[], answered:false, flipped:false, hint:false, sel:null, matched:{}, built:[], misses:0}, opts);
  S.view = "play"; render(); window.scrollTo(0, 0);
}
function cardItem(topic, c){
  return {topic, card:c, choices: shuffle(c.choices)};
}
function playTopic(mode){
  const t = findTopic(S.topicId);
  const again = () => playTopic(mode);
  if (mode === "quiz" || mode === "flip"){
    const order = t.cards.slice().sort((a, b) => (isDue(keyOf(t,b)) - isDue(keyOf(t,a))) || (cardState(keyOf(t,a)).box - cardState(keyOf(t,b)).box));
    startRound(mode, order.slice(0, 8).map(c => cardItem(t, c)), {topicId: t.id, again});
  } else if (mode === "match"){
    startMatch(t.keywords.map(k => ({term:k.term, meaning:k.meaning})), {topicId: t.id, again, prompt: "Tap a key word, then tap its meaning.", what: "word"});
  } else if (mode === "order"){
    startRound("order", shuffle(t.methods).slice(0, 3).map(m => ({method:m, pool:shuffle(m.steps.map((s, i) => ({i, s})))})), {topicId: t.id, again});
  }
}
function startMatch(all, opts){
  const pairs = shuffle(all).slice(0, 6);
  startRound("match", [{pairs, left:shuffle(pairs.map((k,i) => ({i, t:k.term}))), right:shuffle(pairs.map((k,i) => ({i, t:k.meaning})))}], opts);
  S.round.total = pairs.length;
}
function playPeople(){
  startMatch(PEOPLE.map(p => ({term:p.name, meaning:p.role})), {again: playPeople, prompt: "Tap a person, then tap what they did.", what: "person"});
}
// Each timeline round is 5 events from different years, to be tapped from earliest to latest.
function playTimeline(kt){
  const pool = EVENTS.filter(e => !kt || e.kt === kt);
  const rounds = [];
  for (let n = 0; n < 3; n++){
    const pick = [], years = new Set();
    for (const e of shuffle(pool)){ const y = e.when.slice(0, 7); if (!years.has(y)){ years.add(y); pick.push(e); } if (pick.length === 5) break; }
    pick.sort((a, b) => a.when < b.when ? -1 : 1);
    rounds.push({method: {name: "Earliest first", steps: pick.map(e => e.text), dates: pick.map(e => e.date)}, pool: shuffle(pick.map((e, i) => ({i, s: e.text})))});
  }
  startRound("order", rounds, {topicId: kt ? TOPICS[kt - 1].id : null, again: () => playTimeline(kt), timeline: true});
}

function dotsHTML(){
  const r = S.round;
  if (r.mode === "match") return `<div class="dots" aria-hidden="true">${r.items[0].pairs.map((_, i) => `<i class="${r.matched[i] ? "done" : ""}"></i>`).join("")}</div>`;
  return `<div class="dots" aria-hidden="true">${r.items.map((_, i) => `<i class="${i < r.results.length ? (r.results[i] ? "done" : "miss") : (i === r.i ? "now" : "")}"></i>`).join("")}</div>`;
}

function playView(){
  const r = S.round;
  const count = r.mode === "match" ? Object.keys(r.matched).length + " of " + r.total : (r.timeline ? "Round " : r.mode === "order" ? "List " : "Card ") + Math.min(r.i + 1, r.items.length) + " of " + r.items.length;
  const head = `<div class="playtop"><button class="btn ghost sm" data-act="stop">${I.back} Stop</button>${dotsHTML()}<span class="small muted">${count}</span></div>`;
  let body = "";
  if (r.mode === "quiz"){
    const it = r.items[r.i], c = it.card;
    body = `<div class="big-card"><div class="qhead"><div><span class="eyebrow">${esc(it.topic.short)}</span><p class="qtext">${esc(c.q)}</p></div>${speakBtn(c.q)}</div>
      <div class="choices">${it.choices.map((ch, k) => {
        let cls = ""; if (r.answered){ if (ch === c.a) cls = "right"; else if (ch === r.sel) cls = "wrong"; }
        return `<button class="choice ${cls}" data-act="pick" data-k="${k}" ${r.answered ? "disabled" : ""}><span class="k">${"ABCD"[k]}</span><span>${esc(ch)}</span></button>`; }).join("")}</div>
      ${!r.answered && c.hint ? (r.hint ? `<div class="hintbox"><b>Hint:</b> ${esc(c.hint)}</div>` : `<div><button class="btn ghost sm" data-act="hint">Show a hint</button></div>`) : ""}
      ${r.answered ? feedbackHTML(c, r.sel === c.a) : ""}</div>`;
  } else if (r.mode === "flip"){
    const it = r.items[r.i], c = it.card;
    body = `<div class="big-card"><div class="qhead"><div><span class="eyebrow">${esc(it.topic.short)}</span><p class="qtext">${esc(c.q)}</p></div>${speakBtn(c.q)}</div>
      ${!r.flipped ? `<p class="muted">Say or write your answer. Then flip the card.</p>
        ${c.hint ? (r.hint ? `<div class="hintbox"><b>Hint:</b> ${esc(c.hint)}</div>` : `<div><button class="btn ghost sm" data-act="hint">Show a hint</button></div>`) : ""}
        <button class="btn teal wide" data-act="flip">Flip the card</button>`
      : `<div class="qhead"><p class="flip-ans">${esc(c.a)}</p>${speakBtn(c.a)}</div>${visualHTML(c.visual)}${hookHTML(c.hook)}
        <p><b>Did you know it?</b></p>
        <div class="choices"><button class="btn warm" data-act="self" data-ok="0">Not yet</button><button class="btn good" data-act="self" data-ok="1">I knew it</button></div>`}</div>`;
  } else if (r.mode === "match"){
    const it = r.items[0];
    body = `<div class="big-card"><p class="qtext">${esc(r.prompt)}</p>
      <div class="match"><div class="col">${it.left.map(x => `<button class="tile term ${r.matched[x.i] ? "ok" : ""} ${r.sel === x.i ? "sel" : ""}" data-act="mterm" data-i="${x.i}" ${r.matched[x.i] ? "disabled" : ""}>${esc(x.t)}</button>`).join("")}</div>
      <div class="col">${it.right.map(x => `<button class="tile ${r.matched[x.i] ? "ok" : ""}" data-act="mdef" data-i="${x.i}" ${r.matched[x.i] ? "disabled" : ""}>${esc(x.t)}</button>`).join("")}</div></div>
      ${r.msg ? `<p class="small muted" role="status">${esc(r.msg)}</p>` : ""}</div>`;
  } else if (r.mode === "order"){
    const it = r.items[r.i], m = it.method, nextI = r.built.length;
    const complete = nextI === m.steps.length;
    const step = (s, n) => `<div class="stepok"><b>${n + 1}</b><span>${esc(m.steps[s])}${m.dates ? `<span class="when">${esc(m.dates[s])}</span>` : ""}</span></div>`;
    body = `<div class="big-card"><div><span class="eyebrow">${r.timeline ? "Timeline" : "Events in order"}</span><p class="qtext">${esc(m.name)}</p></div>
      <p class="muted">${r.timeline ? "Tap the event that happened first. Then the next one, and so on." : "Tap the events in the order they happened. Start with the first."}</p>
      <div class="built">${r.built.length ? r.built.map(step).join("") : `<span class="small muted">Your order goes here.</span>`}</div>
      ${complete ? `<div class="feedback ok"><span class="head">${r.timeline ? "All in date order" : "All in order"}</span><button class="btn good" data-act="nextorder">${r.i + 1 < r.items.length ? "Next" : "Finish"}</button></div>`
      : `<div class="pool">${it.pool.filter(p => !r.built.includes(p.i)).map(p => `<button class="tile ${r.misses >= 2 && p.i === nextI ? "glow" : ""}" data-act="ostep" data-i="${p.i}">${esc(p.s)}</button>`).join("")}</div>`}
      ${r.msg ? `<p class="small muted" role="status">${esc(r.msg)}</p>` : ""}</div>`;
  }
  return head + body;
}
function feedbackHTML(c, ok){
  const r = S.round;
  return `<div class="feedback ${ok ? "ok" : "notyet"}"><span class="head">${ok ? "Yes, that's right." : "Not yet. The answer is " + esc(c.a) + "."}</span>
    ${ok ? "" : `<p class="small">This card will come back soon, so you get another go.</p>`}
    ${visualHTML(c.visual)}${hookHTML(c.hook)}
    <div class="row"><button class="btn ${ok ? "good" : "teal"}" data-act="next">${r.i + 1 < r.items.length ? "Next card" : "Finish"}</button></div></div>`;
}

function doneView(){
  const r = S.round, total = r.total || 1, pct = r.right / total;
  const stars = pct >= .9 ? 3 : pct >= .6 ? 2 : 1;
  const back = r.topicId ? `<button class="btn ghost" data-act="topic" data-id="${esc(r.topicId)}">Back to topic</button>` : "";
  const ret = r.mode === "quiz" || r.mode === "flip" ? r.items.filter((_, i) => r.results[i] === false).length : 0;
  const what = r.mode === "order" ? (r.timeline ? "rounds without a slip" : "lists without a slip") : r.mode === "match" ? "pairs first time" : "right";
  return `${topBar()}<div class="panel done">
    <div class="stars">${[0,1,2].map(i => I.star(i < stars ? "var(--sun)" : "var(--surface-2)", 64)).join("")}</div>
    <h1>${stars === 3 ? "Brilliant work" : stars === 2 ? "Great effort" : "Well done for trying"}</h1>
    <p>You got <b>${r.right} out of ${total}</b> ${what}. You earned <b>${r.xp} XP</b>.</p>
    ${ret ? `<p class="muted">${ret} card${ret === 1 ? "" : "s"} will come back tomorrow for another go. That is how they stick.</p>` : ""}
    <div class="row" style="justify-content:center"><button class="btn" data-act="again">Play again</button>${back}<button class="btn ghost" data-act="home">Home</button></div>
  </div>`;
}
function finishRound(){
  markDay(); saveProgress(); S.view = "done"; render(); window.scrollTo(0, 0);
  if (S.round.right / (S.round.total || 1) >= .6) confetti();
}

/* ---------- exam practice ---------- */
const TAGS = {point: "Point", evidence: "Evidence", explain: "Explain", source: "Source content", provenance: "Provenance", context: "Own knowledge", judgement: "Judgement"};
const marksText = e => e.marks + " marks" + (e.spag ? " + " + e.spag + " for SPaG" : "");

function examView(){
  return `${topBar()}<button class="back" data-act="home">${I.back} History home</button>
  <div class="panel"><span class="eyebrow">Exam practice</span><h1>Paper 3: Weimar and Nazi Germany</h1>
    <p>${esc(OPTION.exam)}</p>
    <p class="muted"><b>Section A:</b> Question 1, then Question 2(a) or 2(b). <b>Section B:</b> Question 3(a) to 3(d), using two sources and two interpretations.</p></div>
  <div class="calm">${I.heart}<p>The times are only a guide to how long each question takes in the exam. There is no timer here. Your answers are saved on this device as you type.</p></div>
  <section class="sheet"><h2>Choose a question type</h2>
    <div class="grid">${EXAM.map(e => `<button class="deck" data-act="etype" data-id="${e.id}"><span class="qbadge">${e.marks}</span><span class="info"><span class="subj History">${esc(e.label)}</span><b>${esc(e.title)}</b><span class="small muted">${marksText(e)} · about ${e.minutes} minutes · ${examDone(e)} of ${e.tasks.length} done</span></span></button>`).join("")}</div>
  </section>`;
}

function examTypeView(){
  const e = findExam(S.examId); if (!e) { S.view = "exam"; return examView(); }
  return `${topBar()}<button class="back" data-act="exam">${I.back} All question types</button>
  <div class="panel"><span class="eyebrow">${esc(e.label)} · ${marksText(e)} · about ${e.minutes} minutes</span><h1>${esc(e.title)}</h1>
    <div class="qhead"><p><b>The question asks:</b> ${esc(e.asks)}</p>${speakBtn(e.asks + " " + e.explain)}</div>
    <p>${esc(e.explain)}</p></div>
  <section class="sheet"><h2>Practice questions</h2>
    ${e.tasks.map((t, n) => `<button class="deck" data-act="task" data-id="${t.id}"><span class="qbadge ${S.progress.done[t.id] ? "ok" : ""}">${S.progress.done[t.id] ? I.tick : n + 1}</span><span class="info"><b>${esc(t.prompt)}</b><span class="small muted">${S.progress.done[t.id] ? "Done. Tap to look again." : (S.answers[t.id] ? "Started" : "Not started")}</span></span></button>`).join("")}
  </section>
  <section class="sheet"><h2>How the marks work</h2>
    <div class="vtable"><table class="levels"><tbody>${e.levels.map(([l, d]) => `<tr><th>${esc(l)}</th><td>${esc(d)}</td></tr>`).join("")}</tbody></table></div>
    <details><summary>Writing frame</summary>${visualHTML({kind:"steps", steps:e.frame})}</details>
    <details><summary>Check list</summary><ul class="points">${e.check.map(c => `<li>${esc(c)}</li>`).join("")}</ul></details>
  </section>`;
}

function docHTML(d){ return `<div class="doc"><b>${esc(d.label)}</b><p class="prov">${esc(d.prov)}</p><p>${esc(d.text)}</p><div class="row">${speakBtn(d.label + ". " + d.prov + " " + d.text)}</div></div>`; }

function taskView(){
  const e = findExam(S.examId), t = e && e.tasks.find(x => x.id === S.taskId);
  if (!t) { S.view = "exam"; return examView(); }
  const set = t.set ? SETS[t.set] : null;
  const usesSources = e.id === "q3a" || e.id === "q3c";
  const ans = S.answers[t.id] || "";
  const words = ans.trim() ? ans.trim().split(/\s+/).length : 0;
  return `${topBar()}<button class="back" data-act="etype" data-id="${e.id}">${I.back} ${esc(e.title)}</button>
  <div class="panel"><span class="eyebrow">${esc(e.label)} · ${marksText(e)} · about ${e.minutes} minutes</span>
    <div class="qhead"><p class="qtext">${esc(t.prompt)}</p>${speakBtn(t.prompt)}</div>
    ${t.stim ? `<div class="hintbox"><p><b>You may use the following in your answer:</b></p><ul class="points">${t.stim.map(s => `<li>${esc(s)}</li>`).join("")}</ul><p><b>You must also use information of your own.</b></p></div>` : ""}
    ${e.id === "q3a" || e.id === "q3d" ? `<p class="small muted">${e.id === "q3a" ? "Explain your answer, using Sources B and C and your knowledge of the historical context." : "Explain your answer, using both interpretations and your knowledge of the historical context."}</p>` : ""}
  </div>
  ${t.source ? docHTML(t.source) : ""}
  ${set ? `<details ${usesSources ? "open" : ""}><summary>Sources B and C</summary><div class="sheet">${set.sources.map(docHTML).join("")}</div></details>
    <details ${e.id !== "q3a" ? "open" : ""}><summary>Interpretations 1 and 2</summary><div class="sheet">${set.interps.map(docHTML).join("")}</div></details>
    <p class="small muted">These sources and interpretations were written for practice in the style of the exam. They are not real documents.</p>` : ""}
  <div class="panel"><h3>Writing frame</h3><p class="small muted">Tap a sentence starter to add it to your answer.</p>
    <div class="starters">${e.frame.map((f, i) => `<button class="tile" data-act="starter" data-i="${i}">${esc(f)}</button>`).join("")}</div>
    ${t.own ? `<details><summary>Stuck for your own point? Ideas</summary><ul class="points">${t.own.map(o => `<li>${esc(o)}</li>`).join("")}</ul></details>` : ""}
    <label class="f" for="ans">My answer<textarea id="ans" placeholder="Write your answer here. It saves as you type.">${esc(ans)}</textarea></label>
    <p class="small muted" id="wc">${words} word${words === 1 ? "" : "s"}</p>
    <div class="row"><button class="btn teal" data-act="checkans">Check my answer</button><button class="btn ghost" data-act="sample">${S.showSample ? "Hide" : "Show"} a sample answer</button><button class="btn ghost sm" data-act="copyans">Copy my answer</button></div>
  </div>
  ${S.showCheck ? `<div class="panel" id="checkPanel"><h3>Check list</h3><p class="small muted">Read your answer again. Tick each one that is true.</p>
    <div class="checks">${e.check.map((c, i) => `<button class="checkrow" data-act="tick" data-i="${i}" aria-pressed="${!!S.checks[i]}"><span class="box">${S.checks[i] ? I.tick : ""}</span><span>${esc(c)}</span></button>`).join("")}</div>
    ${e.check.every((_, i) => S.checks[i]) ? `<div class="feedback ok"><span class="head">${S.progress.done[t.id] ? "Done. Well checked." : "Every box ticked"}</span>${S.progress.done[t.id] ? "" : `<button class="btn good" data-act="finishtask">Mark as done (+15 XP)</button>`}</div>` : ""}
  </div>` : ""}
  ${S.showSample ? `<div class="panel"><h3>Sample answer (part)</h3>
    <p class="small muted">This shows how to start. The colours show which part earns which kind of mark.</p>
    <div class="legend">${[...new Set(t.sample.map(s => s[1]))].map(tag => `<span class="mk mk-${tag}">${TAGS[tag]}</span>`).join("")}</div>
    <div class="sample">${t.sample.map(([txt, tag]) => `<span class="mk-${tag}">${esc(txt)}</span>`).join("")}</div>
    <div class="row">${speakBtn(t.sample.map(s => s[0]).join(" "))}</div></div>` : ""}`;
}

/* ---------- settings ---------- */
function settingsView(){
  const st = S.settings;
  const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([v, l, sw]) => `<button data-act="set" data-k="${key}" data-v="${v}" aria-pressed="${String(st[key]) === String(v)}">${sw ? `<span class="swatch" style="background:${sw}"></span>` : ""}${l}</button>`).join("")}</div>`;
  return `${topBar()}<button class="back" data-act="home">${I.back} Back</button>
  <div class="panel"><h1>Make it comfortable</h1><p class="muted">These settings stay on this device, and apply to every subject.</p>
    <h3>Background colour</h3>${seg("tint", [["cream","Cream","#FBF6E4"],["sky","Sky","#E7F1F8"],["mint","Mint","#E8F4EC"],["rose","Rose","#F8EAEC"],["white","White","#FFFFFF"]])}
    <h3>Light or dark</h3>${seg("theme", [["auto","Match my device"],["light","Light"],["dark","Dark"]])}
    <h3>Text size</h3>${seg("size", [["m","Medium"],["l","Large"],["xl","Extra large"]])}
    <h3>Letter spacing</h3>${seg("spacing", [["false","Normal"],["true","Wider"]])}
    <h3>Sounds</h3>${seg("sound", [["true","On"],["false","Off"]])}
  </div>
  <div class="panel"><h3>How the app helps you remember</h3>
    <p>Each card sits in one of five memory boxes. Get it right and it moves up a box and comes back later: tomorrow, then in 2 days, 4 days, a week, two weeks. If you are not sure yet, it goes back to box 1 so you can practise it again soon. You never lose points for getting something wrong.</p>
    <p class="small muted">Your progress and exam answers are saved in this browser on this device.</p></div>
  <div class="panel"><h3>Backup</h3>
    <p>Save a backup file to keep your History progress and exam answers safe, or to move them to another device or browser.</p>
    <div class="row"><button class="btn teal sm" data-act="backup">Save a backup file</button><button class="btn ghost sm" data-act="restore">Load a backup file</button></div>
    <input type="file" id="rfile" accept=".json,application/json" hidden></div>`;
}

function render(){
  const app = document.getElementById("app");
  const views = {home: homeView, topic: topicView, play: playView, done: doneView, exam: examView, etype: examTypeView, task: taskView, settings: settingsView};
  app.innerHTML = (views[S.view] || homeView)();
  saveSummary();
}
function go(view, extra){ Object.assign(S, extra || {}, {view}); render(); window.scrollTo(0, 0); }

document.addEventListener("click", async e => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const act = b.dataset.act, r = S.round;
  switch (act){
    case "home": go("home"); break;
    case "settings": go("settings"); break;
    case "topic": go("topic", {topicId: b.dataset.id}); break;
    case "speak": speak(b.dataset.text); break;
    case "set": { let v = b.dataset.v; if (v === "true") v = true; else if (v === "false") v = false; S.settings[b.dataset.k] = v; saveSettings(); render(); break; }
    case "mission": startMission(); break;
    case "practise": { const pick = () => startRound("quiz", shuffle(TOPICS.flatMap(t => t.cards.map(c => ({t, c})))).slice(0, 8).map(x => cardItem(x.t, x.c)), {again: pick}); pick(); break; }
    case "play": playTopic(b.dataset.mode); break;
    case "timeline": playTimeline(Number(b.dataset.kt) || 0); break;
    case "people": playPeople(); break;
    case "stop": S.view = r && r.topicId ? "topic" : "home"; if (r && r.topicId) S.topicId = r.topicId; if (r && r.results.length) { markDay(); saveProgress(); } render(); break;
    case "hint": r.hint = true; render(); break;
    case "pick": {
      if (r.answered) break;
      const it = r.items[r.i]; r.sel = it.choices[Number(b.dataset.k)]; r.answered = true;
      const ok = r.sel === it.card.a; grade(keyOf(it.topic, it.card), ok);
      r.results.push(ok); if (ok) r.right++; const g = ok ? 10 : 3; r.xp += g; addXP(g); chime(ok); saveProgress(); render(); break; }
    case "flip": r.flipped = true; render(); break;
    case "self": {
      const it = r.items[r.i], ok = b.dataset.ok === "1"; grade(keyOf(it.topic, it.card), ok);
      r.results.push(ok); if (ok) r.right++; const g = ok ? 10 : 3; r.xp += g; addXP(g); chime(ok); saveProgress();
      nextCard(); break; }
    case "next": nextCard(); break;
    case "mterm": r.sel = Number(b.dataset.i); r.msg = ""; render(); break;
    case "mdef": {
      if (r.sel == null){ r.msg = "Tap a " + r.what + " first."; render(); break; }
      const i = Number(b.dataset.i);
      if (i === r.sel){ r.matched[i] = true; if (!r.firstMiss || !r.firstMiss[i]) r.right++; r.xp += 5; addXP(5); chime(true); r.sel = null; r.msg = "";
        if (Object.keys(r.matched).length === r.items[0].pairs.length){ render(); setTimeout(finishRound, 500); break; } render(); }
      else { r.firstMiss = r.firstMiss || {}; r.firstMiss[r.sel] = true; r.msg = "Not that one. Try another."; b.classList.add("shake"); setTimeout(() => b.classList.remove("shake"), 350); const m = document.querySelector('[role="status"]'); if (m) m.textContent = r.msg; else render(); }
      break; }
    case "ostep": {
      const i = Number(b.dataset.i), want = r.built.length;
      if (i === want){ r.built.push(i); r.misses = 0; r.msg = ""; r.xp += 4; addXP(4); chime(true); render(); }
      else { r.misses++; r.stepSlip = true; r.msg = r.misses >= 2 ? "The glowing one comes next." : (r.timeline ? "Not yet. Which of these happened earlier?" : "Not that one yet. What comes " + (want === 0 ? "first" : "after number " + want) + "?"); render(); const nb = document.querySelector(`[data-act="ostep"][data-i="${i}"]`); if (nb){ nb.classList.add("shake"); } }
      break; }
    case "nextorder": if (!r.stepSlip) r.right++; r.stepSlip = false; r.built = []; r.misses = 0; r.msg = ""; r.results.push(true);
      if (r.i + 1 < r.items.length){ r.i++; render(); } else finishRound(); break;
    case "again": if (r && r.again) r.again(); else go("home"); break;
    case "exam": go("exam"); break;
    case "etype": go("etype", {examId: b.dataset.id}); break;
    case "task": go("task", {taskId: b.dataset.id, showSample: false, showCheck: false, checks: {}}); break;
    case "starter": {
      const e = findExam(S.examId), ta = document.getElementById("ans"); if (!ta) break;
      const add = e.frame[Number(b.dataset.i)];
      ta.value = ta.value + (ta.value && !/\n$/.test(ta.value) ? "\n" : "") + add + " ";
      ta.dispatchEvent(new Event("input", {bubbles: true})); ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); break; }
    case "sample": S.showSample = !S.showSample; render(); break;
    case "checkans": S.showCheck = true; render(); { const p = document.getElementById("checkPanel"); if (p) p.scrollIntoView({behavior: "smooth", block: "start"}); } break;
    case "tick": S.checks[b.dataset.i] = !S.checks[b.dataset.i]; render(); break;
    case "finishtask": {
      if (S.progress.done[S.taskId]) break;
      S.progress.done[S.taskId] = true; addXP(15); markDay(); saveProgress(); chime(true); confetti(); toast("Question done. +15 XP"); render(); break; }
    case "copyans": {
      const text = S.answers[S.taskId] || "";
      if (!text.trim()){ toast("Write your answer first."); break; }
      const e = findExam(S.examId), t = e.tasks.find(x => x.id === S.taskId);
      try { await navigator.clipboard.writeText(t.prompt + "\n\n" + text); toast("Answer copied. You can paste it into a message or document."); }
      catch(err){ toast("Could not copy. Select the text and copy it instead."); }
      break; }
    case "backup": {
      const data = JSON.stringify({app: "sophie-history", version: 1, savedAt: new Date().toISOString(), progress: S.progress, answers: S.answers}, null, 1);
      const url = URL.createObjectURL(new Blob([data], {type: "application/json"}));
      const link = document.createElement("a"); link.href = url; link.download = "history-backup-" + today() + ".json";
      document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
      toast("Backup saved to your downloads."); break; }
    case "restore": document.getElementById("rfile").click(); break;
  }
});
function startMission(){
  const m = missionCards();
  if (!m.length){ go("home"); return; }
  startRound("quiz", m.map(x => cardItem(x.topic, x.card)), {again: startMission});
}
function nextCard(){
  const r = S.round;
  if (r.i + 1 < r.items.length){ r.i++; r.answered = false; r.flipped = false; r.hint = false; r.sel = null; render(); window.scrollTo(0, 0); }
  else finishRound();
}
document.addEventListener("input", e => {
  if (e.target.id !== "ans") return;
  S.answers[S.taskId] = e.target.value; saveAnswers();
  const n = e.target.value.trim() ? e.target.value.trim().split(/\s+/).length : 0;
  const wc = document.getElementById("wc"); if (wc) wc.textContent = n + " word" + (n === 1 ? "" : "s");
});
document.addEventListener("change", async e => {
  if (e.target.id !== "rfile" || !e.target.files.length) return;
  try {
    const b = JSON.parse(await e.target.files[0].text());
    if (!b || b.app !== "sophie-history") throw 0;
    if (b.progress && (b.progress.xp || 0) >= (S.progress.xp || 0)) S.progress = Object.assign({xp:0, streak:0, lastDay:null, cards:{}, done:{}}, b.progress);
    else if (b.progress && b.progress.cards){ for (const k in b.progress.cards) if (!S.progress.cards[k]) S.progress.cards[k] = b.progress.cards[k]; }
    S.progress.done = Object.assign({}, b.progress && b.progress.done, S.progress.done);
    // Keep the longer answer when both copies have one.
    for (const k in (b.answers || {})) if (!S.answers[k] || String(b.answers[k]).length > S.answers[k].length) S.answers[k] = String(b.answers[k]);
    saveProgress(); saveAnswers(); toast("Backup loaded."); render();
  } catch(err){ toast("That file is not a History backup."); }
  e.target.value = "";
});

/* ---------- start ---------- */
applySettings(); render();
