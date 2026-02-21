/* ═══════════════════════════════════════════════ */
/* edgeAI Landing — Sticky Phone Showcase          */
/* ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Pixel Logo Renderer (edgeAI text only) ───
  const PIXEL_FONT = {
    'e': ['WWW','W..','WW.','W..','WWW'],
    'd': ['WW.','W.W','W.W','W.W','WW.'],
    'g': ['.WW','W..','W.W','W.W','.WW'],
    'A': ['.G.','G.G','GGG','G.G','G.G'],
    'I': ['GGG','.G.','.G.','.G.','GGG'],
  };

  function drawPixelLogo(canvasId, scale) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const ps = scale;
    const gap = Math.max(1, Math.floor(scale / 4));
    const text = ['e','d','g','e','A','I'];
    const charW = 3, charH = 5, charSpacing = 1;
    const textTotalCols = text.length * (charW + charSpacing) - charSpacing;
    const totalW = textTotalCols * (ps + gap);
    const totalH = charH * (ps + gap);
    canvas.width = totalW * dpr;
    canvas.height = totalH * dpr;
    canvas.style.width = totalW + 'px';
    canvas.style.height = totalH + 'px';
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = false;
    const colors = { 'W': '#FFFFFF', 'G': '#00E68A' };
    let cursorX = 0;
    for (const letter of text) {
      const glyph = PIXEL_FONT[letter];
      if (!glyph) { cursorX += charW + charSpacing; continue; }
      for (let r = 0; r < glyph.length; r++) {
        for (let c = 0; c < glyph[r].length; c++) {
          const ch = glyph[r][c];
          if (ch === '.') continue;
          ctx.fillStyle = colors[ch] || '#fff';
          ctx.fillRect((cursorX + c) * (ps + gap), r * (ps + gap), ps, ps);
        }
      }
      cursorX += charW + charSpacing;
    }
  }

  drawPixelLogo('bootLogoCanvas', 4);
  drawPixelLogo('navLogoCanvas', 4);
  drawPixelLogo('footerLogoCanvas', 4);


  // ─── Tool Data ───
  const TOOL_DATA = {
    'livescores': {
      title: 'Livescores',
      desc: 'Get livescores for all tennis tournaments, including ATP, WTA, Challenger, and ITF, enhanced by additional live match stats to ensure you don\'t miss a thing, plus the ability to explore historical data on past matches, tournaments, and player performances.',
    },
    'live-mtos': {
      title: 'Live MTOs',
      desc: 'Track medical timeouts in real time with instant alerts and enhanced MTO details, including live match context, medical info, integrity checks, recent form, match dynamics, and performance analytics such as serve metrics, points won, break points, and trend changes.',
    },
    'ai-chatbot': {
      title: 'AI Chatbot',
      desc: 'Ask our AI chatbot anything and get instant, data-driven answers on player history, match stats, injuries, retirements, and more, giving you the edge you need to make smarter decisions.',
    },
    'ai-stats': {
      title: 'AI Stats',
      desc: 'Compare all players currently in action and see who is performing well or poorly in real time, using key stat categories like first serve, double faults, aces, and other live performance indicators.',
    },
    'retired-returned': {
      title: 'Retired & Returned Players',
      desc: 'Track players who have recently retired from a match and those who have returned to competition after a retirement, with full details including the tournament, match, score at retirement, and live odds for every entry.',
    },
    'draws-entries': {
      title: 'Draws, Entry Lists & Withdrawals',
      desc: 'View draws, entry lists, and withdrawals in one place, with fast updates when players pull out and replacements move into the field so you always know the latest lineup.',
    },
    'edgeai-tools': {
      title: 'edgeAI Tools',
      desc: 'Opening Odds Alert, Burnout Watch for 3h+ marathon matches, Fatigue Tracker for same-day doubles, and After MTO Tracker for players heading into their next match after winning with an MTO.',
    },
    'chatrooms': {
      title: 'Chatrooms',
      desc: 'Join dedicated chatrooms for every match and player, plus a global chat, where you can discuss live action, share insights, and connect with other members in real time.',
    },
  };


  // ─── TextScramble Class ───
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      this.frameReq = null;
      this.tickCount = 0;
    }
    setText(newText) {
      const length = newText.length;
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const to = newText[i];
        const start = Math.floor(Math.random() * 10);
        const end = start + Math.floor(Math.random() * 10) + 4;
        this.queue.push({ to, start, end, char: '' });
      }
      cancelAnimationFrame(this.frameReq);
      this.frame = 0;
      this.tickCount = 0;
      return new Promise(resolve => {
        this.resolve = resolve;
        this._update();
      });
    }
    _update() {
      this.tickCount++;
      if (this.tickCount % 3 !== 0) {
        this.frame++;
        this.frameReq = requestAnimationFrame(() => this._update());
        return;
      }
      let output = '';
      let complete = 0;
      for (let i = 0; i < this.queue.length; i++) {
        let { to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.queue[i].char = char;
          }
          output += '<span style="color:rgba(255,255,255,0.3)">' + char + '</span>';
        } else {
          output += '<span style="color:rgba(255,255,255,0.15)">' + this.chars[Math.floor(Math.random() * this.chars.length)] + '</span>';
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        if (this.resolve) this.resolve();
      } else {
        this.frameReq = requestAnimationFrame(() => this._update());
        this.frame++;
      }
    }
  }


  // ─── Boot Sequence ───
  const bootLines = [
    { text: '> edgeAI — Initializing...', delay: 0 },
    { text: '> Live match feed connected...              [ARMED]', delay: 20 },
    { text: '> ATP / WTA / Challenger / ITF livescores...[ARMED]', delay: 15 },
    { text: '> MTO tracking & alerts pipeline...         [ARMED]', delay: 15 },
    { text: '> Retired & Returned player monitor...      [ARMED]', delay: 15 },
    { text: '> Entry lists, draws & withdrawals...       [ARMED]', delay: 15 },
    { text: '> AI Stats engine — live comparisons...     [ARMED]', delay: 15 },
    { text: '> edgeAI Tools loaded...                    [ARMED]', delay: 15 },
    { text: '> AI Chatbot ready...                       [ARMED]', delay: 30 },
  ];

  const bootLinesEl = document.getElementById('bootLines');
  const bootProgressCanvas = document.getElementById('bootProgressCanvas');
  const bootScreen = document.getElementById('bootScreen');
  const navbar = document.getElementById('navbar');

  function drawPixelProgress(progress) {
    const canvas = bootProgressCanvas;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const blockW = 8, gap = 3;
    const totalBlocks = Math.floor(w / (blockW + gap));
    const filledBlocks = Math.floor(progress * totalBlocks);
    for (let i = 0; i < totalBlocks; i++) {
      ctx.fillStyle = 'rgba(0, 230, 138, 0.08)';
      ctx.fillRect(i * (blockW + gap), 1, blockW, h - 2);
    }
    ctx.shadowColor = '#00E68A';
    ctx.shadowBlur = 4;
    for (let i = 0; i < filledBlocks; i++) {
      ctx.fillStyle = '#00E68A';
      ctx.fillRect(i * (blockW + gap), 0, blockW, h);
    }
    ctx.shadowBlur = 0;
  }

  const bootPctEl = document.getElementById('bootPct');

  async function runBootSequence() {
    drawPixelProgress(0);
    updateBootPct(0);
    for (let i = 0; i < bootLines.length; i++) {
      const { text, delay } = bootLines[i];
      await typewriterLine(bootLinesEl, text, 5);
      const pct = (i + 1) / bootLines.length;
      drawPixelProgress(pct);
      updateBootPct(pct);
      await sleep(delay);
    }
    await sleep(200);
    bootScreen.classList.add('done');
    navbar.classList.add('visible');
    initShowcase();
  }

  function updateBootPct(pct) {
    if (bootPctEl) bootPctEl.textContent = Math.round(pct * 100) + '%';
  }

  function typewriterLine(container, text, speed) {
    return new Promise(resolve => {
      const p = document.createElement('p');
      p.className = 'boot-line';
      container.appendChild(p);
      let i = 0;
      const timer = setInterval(() => {
        const partial = text.substring(0, ++i);
        p.innerHTML = partial.replace(/\[ARMED\]/g, '<span class="armed">[ARMED]</span>');
        if (i >= text.length) {
          clearInterval(timer);
          resolve();
        }
      }, speed);
    });
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    bootScreen.classList.add('done');
    navbar.classList.add('visible');
    setTimeout(() => { initShowcase(); }, 100);
  } else {
    runBootSequence();
  }


  // ─── Sticky Phone Showcase (GSAP ScrollTrigger) ───
  function initShowcase() {
    gsap.registerPlugin(ScrollTrigger);

    const panels = document.querySelectorAll('.feature-panel');
    const screenImgs = document.querySelectorAll('.screen-img');
    const progressBar = document.getElementById('scrollProgress');
    const progressFill = document.getElementById('scrollProgressFill');
    const dotsContainer = document.getElementById('scrollProgressDots');

    if (!panels.length) return;

    // Build progress dots
    panels.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'progress-dot' + (i === 0 ? ' active' : '');
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.progress-dot');
    let currentFeature = -1;
    let transitionTimeline = null;
    let lastTransitionTime = 0;
    const MIN_TRANSITION_GAP = 100;

    const wipeBar = document.getElementById('screenWipeBar');
    const wipeTrail = document.getElementById('screenWipeTrail');

    // Master ScrollTrigger for progress bar
    ScrollTrigger.create({
      trigger: '#showcase',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        progressFill.style.height = (self.progress * 100) + '%';
      },
      onEnter: () => progressBar.classList.add('visible'),
      onLeave: () => progressBar.classList.remove('visible'),
      onEnterBack: () => progressBar.classList.add('visible'),
      onLeaveBack: () => progressBar.classList.remove('visible'),
    });

    // Per-panel ScrollTriggers
    panels.forEach((panel, i) => {
      const featureKey = panel.dataset.feature;

      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => activateFeature(i, featureKey),
        onEnterBack: () => activateFeature(i, featureKey),
      });
    });

    function activateFeature(index, featureKey) {
      if (index === currentFeature) return;

      const prevIndex = currentFeature;
      const direction = index > prevIndex ? 1 : -1; // 1=forward, -1=backward
      const isFirst = prevIndex === -1;

      // Kill any in-progress transition
      const now = Date.now();
      if (transitionTimeline) {
        if (now - lastTransitionTime < MIN_TRANSITION_GAP) {
          transitionTimeline.progress(1);
        }
        transitionTimeline.kill();
      }
      lastTransitionTime = now;

      const oldImg = prevIndex >= 0
        ? document.querySelector('.screen-img[data-feature="' + panels[prevIndex].dataset.feature + '"]')
        : null;
      const newImg = document.querySelector('.screen-img[data-feature="' + featureKey + '"]');
      if (!newImg) return;

      // Feature content visibility
      panels.forEach((p, i) => {
        const content = p.querySelector('.feature-content');
        if (i === index) {
          content.classList.add('visible');
        } else {
          content.classList.remove('visible');
        }
      });

      // Update progress dots
      dots.forEach((d, i) => {
        d.classList.toggle('active', i <= index);
      });

      currentFeature = index;

      // --- SCREEN TRANSITION: Horizontal Slide ---
      if (isFirst || prefersReducedMotion) {
        if (oldImg) gsap.set(oldImg, { opacity: 0, x: 0 });
        gsap.set(newImg, { opacity: 1, x: 0 });
        return;
      }

      const duration = 0.5;
      const ease = 'power3.inOut';
      const phoneW = document.getElementById('phoneDevice').offsetWidth;

      transitionTimeline = gsap.timeline({
        onComplete: () => {
          if (oldImg) gsap.set(oldImg, { opacity: 0, x: 0 });
          gsap.set(wipeBar, { opacity: 0 });
          transitionTimeline = null;
        }
      });

      // New screen starts off-screen to the right (forward) or left (backward)
      gsap.set(newImg, {
        opacity: 1,
        x: direction * phoneW,
        zIndex: 5
      });

      // Green accent line on the leading edge
      gsap.set(wipeBar, {
        top: 0,
        bottom: 0,
        height: '100%',
        width: '3px',
        left: direction === 1 ? 'auto' : '0',
        right: direction === 1 ? '0' : 'auto',
        opacity: 0
      });

      // 1. Old screen slides out to the opposite side
      if (oldImg) {
        transitionTimeline.to(oldImg, {
          x: direction * -phoneW,
          duration: duration,
          ease: ease,
        }, 0);
      }

      // 2. New screen slides in from the side
      transitionTimeline.to(newImg, {
        x: 0,
        duration: duration,
        ease: ease,
      }, 0);

      // 3. Brief green accent flash on leading edge
      transitionTimeline.fromTo(wipeBar, {
        opacity: 1,
      }, {
        opacity: 0,
        duration: duration * 0.6,
        ease: 'power1.out',
      }, 0);
    }

    // Hero parallax fade on scroll
    gsap.to('.hero-content', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
      y: -60,
      ease: 'none',
    });

    // Initialize first feature as visible
    activateFeature(0, panels[0].dataset.feature);
  }


  // ─── Pixelated Store Icons ───
  function drawPixelIcon(canvasId, grid, colors) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = 28;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);
    const rows = grid.length;
    const cols = grid[0].length;
    const ps = size / Math.max(rows, cols);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const ch = grid[r][c];
        if (ch === '.') continue;
        ctx.fillStyle = colors[ch] || '#fff';
        ctx.fillRect(c * ps, r * ps, ps, ps);
      }
    }
  }

  drawPixelIcon('iosIcon', [
    '....77....',
    '...77.....',
    '..7777777.',
    '.77777777.',
    '777777777.',
    '777777777.',
    '777777777.',
    '.77777777.',
    '..7777777.',
    '..777.777.',
    '..77...77.',
    '..7.....7.',
  ], { '7': '#ffffff' });

  drawPixelIcon('androidIcon', [
    '..1....1..',
    '...1..1...',
    '.11111111.',
    '1111111111',
    '1111111111',
    '1.11111.11',
    '1111111111',
    '1111111111',
    '.11111111.',
    '.11....11.',
    '.11....11.',
    '.11....11.',
  ], { '1': '#00E68A' });

});
