/* ═══════════════════════════════════════════════ */
/* edgeAI Landing — "The Terminal" Design          */
/* ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Pixel Logo Renderer ───
  const PIXEL_FONT = {
    // edgeAI logo letters
    'e': ['WWW','W..','WW.','W..','WWW'],
    'd': ['WW.','W.W','W.W','W.W','WW.'],
    'g': ['.WW','W..','W.W','W.W','.WW'],
    'A': ['.G.','G.G','GGG','G.G','G.G'],
    'I': ['GGG','.G.','.G.','.G.','GGG'],
    // Full alphabet for hero title
    'T': ['WWW','.W.','.W.','.W.','.W.'],
    'h': ['W..','W..','WW.','W.W','W.W'],
    's': ['.WW','W..','WW.','.W.','WW.'],
    'm': ['W.W','WWW','WWW','W.W','W.W'],
    'a': ['.W.','W.W','WWW','W.W','W.W'],
    'r': ['WW.','W.W','WW.','W.W','W.W'],
    't': ['WWW','.W.','.W.','.W.','.W.'],
    'b': ['WW.','W.W','WW.','W.W','WW.'],
    'o': ['.W.','W.W','W.W','W.W','.W.'],
    'n': ['W.W','WW.','W.W','W.W','W.W'],
    'p': ['WW.','W.W','WW.','W..','W..'],
    '.': ['...','...','..','..','.W.'],
    'i': ['.W.','...','.W.','.W.','.W.'],
    'l': ['W..','W..','W..','W..','WW.'],
    'c': ['.WW','W..','W..','W..','.WW'],
    'u': ['W.W','W.W','W.W','W.W','.WW'],
    'w': ['W.W','W.W','WWW','WWW','W.W'],
    'y': ['W.W','W.W','.W.','.W.','.W.'],
    'f': ['WWW','W..','WW.','W..','W..'],
    'k': ['W.W','WW.','W..','WW.','W.W'],
    'B': ['WW.','W.W','WW.','W.W','WW.'],
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
    const colors = { 'W': '#FFFFFF', 'G': '#00D4AA' };
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


  // ─── Pixel Text Renderer (multi-line) ───
  function drawPixelText(canvasId, lines, scale, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const ps = scale;
    const gap = Math.max(1, Math.floor(scale / 4));
    const charW = 3, charH = 5, charSpacing = 1, lineSpacing = 2;

    // Calculate canvas size
    let maxCols = 0;
    for (const line of lines) {
      const cols = line.length * (charW + charSpacing) - charSpacing;
      if (cols > maxCols) maxCols = cols;
    }
    const totalW = maxCols * (ps + gap);
    const totalH = (lines.length * charH + (lines.length - 1) * lineSpacing) * (ps + gap);

    canvas.width = totalW * dpr;
    canvas.height = totalH * dpr;
    canvas.style.width = totalW + 'px';
    canvas.style.height = totalH + 'px';
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = false;

    let rowOffset = 0;
    for (const line of lines) {
      let cursorX = 0;
      for (const ch of line) {
        if (ch === ' ') { cursorX += charW + charSpacing; continue; }
        const glyph = PIXEL_FONT[ch];
        if (!glyph) { cursorX += charW + charSpacing; continue; }
        for (let r = 0; r < glyph.length; r++) {
          for (let c = 0; c < glyph[r].length; c++) {
            const px = glyph[r][c];
            if (px === '.') continue;
            ctx.fillStyle = color;
            ctx.fillRect((cursorX + c) * (ps + gap), (rowOffset + r) * (ps + gap), ps, ps);
          }
        }
        cursorX += charW + charSpacing;
      }
      rowOffset += charH + lineSpacing;
    }
  }

  drawPixelText('heroTitleCanvas', ['The edge', 'smart bettors', 'need.'], 7, '#FFFFFF');
  drawPixelText('sectionTitleCanvas', ['Built for the edge'], 5, '#00D4AA');

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
    const blockW = 8, gapB = 3;
    const totalBlocks = Math.floor(w / (blockW + gapB));
    const filledBlocks = Math.floor(progress * totalBlocks);
    for (let i = 0; i < totalBlocks; i++) {
      ctx.fillStyle = 'rgba(0, 212, 170, 0.08)';
      ctx.fillRect(i * (blockW + gapB), 1, blockW, h - 2);
    }
    ctx.shadowColor = '#00D4AA';
    ctx.shadowBlur = 4;
    for (let i = 0; i < filledBlocks; i++) {
      ctx.fillStyle = '#00D4AA';
      ctx.fillRect(i * (blockW + gapB), 0, blockW, h);
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
    initAnimations();
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
    setTimeout(() => { initAnimations(); }, 100);
  } else {
    runBootSequence();
  }




  // ─── GSAP Scroll Animations ───
  function initAnimations() {
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero text stagger
    gsap.from('.hero-label', {
      y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.1,
    });
    gsap.from('.hero-title', {
      y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.25,
    });
    gsap.from('.hero-sub', {
      y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.4,
    });
    gsap.from('.hero-buttons', {
      y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.55,
    });
    gsap.from('.hero-trust', {
      opacity: 0, duration: 0.6, delay: 0.7,
    });

    // Hero phone
    gsap.from('.hero-phone', {
      y: 50, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2,
    });

    // Section title — Features
    gsap.from('.features-header', {
      scrollTrigger: { trigger: '.features', start: 'top 75%' },
      y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
    });

    // Feature cards
    gsap.from('.feature-card', {
      scrollTrigger: { trigger: '.features-grid', start: 'top 80%' },
      y: 50, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
    });

    // Bento cells
    gsap.from('.bento-cell', {
      scrollTrigger: { trigger: '.bento-grid', start: 'top 80%' },
      y: 40, opacity: 0, scale: 0.97, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    });

    // CTA
    gsap.from('.cta-title', {
      scrollTrigger: { trigger: '.cta', start: 'top 75%' },
      y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.cta-sub', {
      scrollTrigger: { trigger: '.cta', start: 'top 75%' },
      y: 30, opacity: 0, duration: 0.7, delay: 0.1, ease: 'power3.out',
    });
    gsap.from('.cta .store-btn', {
      scrollTrigger: { trigger: '.store-buttons', start: 'top 85%' },
      y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
    });
  }


  // ─── Navbar Scroll Behavior ───
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
        ticking = false;
      });
      ticking = true;
    }
  });


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
  ], { '1': '#00D4AA' });

  // Hero store icons (same graphics, different canvas IDs)
  drawPixelIcon('heroIosIcon', [
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

  drawPixelIcon('heroAndroidIcon', [
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
  ], { '1': '#00D4AA' });

});
