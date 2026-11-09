// Drop a direct .mp3/.ogg URL here later to replace the generated ambience
// with a real devotional track. Empty = built-in Web Audio ambience.
export const MUSIC_URL = "";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let playing = false;
let bellTimer: ReturnType<typeof setTimeout> | null = null;
let htmlAudio: HTMLAudioElement | null = null;

function scheduleBell() {
  bellTimer = setTimeout(() => {
    if (!playing || !ctx) return;
    ring();
    scheduleBell();
  }, 6500 + Math.random() * 7500);
}

function ring() {
  if (!ctx || !master) return;
  const t = ctx.currentTime;
  (
    [
      [659.26, 0.05],
      [659.26 * 2.76, 0.016],
    ] as const
  ).forEach(([f, g]) => {
    const o = ctx!.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(f, t);
    o.frequency.exponentialRampToValueAtTime(f * 0.985, t + 3);
    const og = ctx!.createGain();
    og.gain.setValueAtTime(0.0001, t);
    og.gain.exponentialRampToValueAtTime(g, t + 0.03);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 3.4);
    o.connect(og);
    og.connect(master!);
    o.start(t);
    o.stop(t + 3.6);
  });
}

export function startMusic() {
  if (playing) return;
  playing = true;
  if (MUSIC_URL) {
    htmlAudio = new Audio(MUSIC_URL);
    htmlAudio.loop = true;
    htmlAudio.volume = 0.55;
    htmlAudio.play().catch(() => {});
    return;
  }
  const AC =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext })
      .webkitAudioContext;
  ctx = ctx || new AC();
  if (ctx.state === "suspended") void ctx.resume();
  master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, ctx.currentTime);
  master.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 2.4);
  master.connect(ctx.destination);

  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 540;
  lp.connect(master);

  (
    [
      [110, 0.4],
      [110.5, 0.28],
      [164.81, 0.2],
      [220, 0.16],
      [220.7, 0.07],
      [329.63, 0.05],
    ] as const
  ).forEach(([f, g]) => {
    const o = ctx!.createOscillator();
    o.type = "sine";
    o.frequency.value = f;
    const og = ctx!.createGain();
    og.gain.value = g;
    const lfo = ctx!.createOscillator();
    lfo.frequency.value = 0.06 + Math.random() * 0.07;
    const lg = ctx!.createGain();
    lg.gain.value = g * 0.45;
    lfo.connect(lg);
    lg.connect(og.gain);
    o.connect(og);
    og.connect(lp);
    o.start();
    lfo.start();
  });
  scheduleBell();
}

export function stopMusic() {
  if (!playing) return;
  playing = false;
  if (bellTimer) clearTimeout(bellTimer);
  if (htmlAudio) {
    htmlAudio.pause();
    htmlAudio = null;
  }
  if (master && ctx) {
    const c = ctx;
    master.gain.linearRampToValueAtTime(0.0001, c.currentTime + 0.7);
    setTimeout(() => void c.suspend(), 800);
  }
}
