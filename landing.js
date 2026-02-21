/* ═══════════════════════════════════════════════ */
/* edgeAI Landing — Tab-Based Showcase             */
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
    initTabSystem();
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
    setTimeout(() => { initTabSystem(); }, 100);
  } else {
    runBootSequence();
  }


  // ─── Tab System ───
  let currentTab = null;
  let currentFeature = null;
  let tabTimeline = null;

  function initTabSystem() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const indicator = document.getElementById('tabIndicator');
    const screenImgs = document.querySelectorAll('.screen-img');

    if (!tabBtns.length) return;

    // Position indicator on first tab
    updateIndicator(tabBtns[0], indicator);

    // Show first phone screen (first card of first tab)
    const firstPanel = document.querySelector('.tab-panel.active');
    if (firstPanel) {
      const firstCard = firstPanel.querySelector('.feature-card.active');
      if (firstCard) {
        const featureKey = firstCard.dataset.feature;
        const img = document.querySelector('.screen-img[data-feature="' + featureKey + '"]');
        if (img) {
          img.classList.add('active');
          currentFeature = featureKey;
        }
      }
    }
    currentTab = 'live';

    // Animate initial cards in
    if (!prefersReducedMotion) {
      const initialCards = document.querySelectorAll('.tab-panel.active .feature-card');
      gsap.fromTo(initialCards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: 'power2.out', delay: 0.2 }
      );
    }

    // Tab click handlers
    tabBtns.forEach((btn, btnIndex) => {
      btn.addEventListener('click', () => {
        const tabKey = btn.dataset.tab;
        if (tabKey === currentTab) return;

        // Determine direction
        const tabOrder = ['live', 'ai', 'players', 'tools'];
        const oldIndex = tabOrder.indexOf(currentTab);
        const newIndex = tabOrder.indexOf(tabKey);
        const direction = newIndex > oldIndex ? 1 : -1;

        // Update tab button states
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Animate indicator
        updateIndicator(btn, indicator);

        // Get old and new panels
        const oldPanel = document.querySelector('.tab-panel[data-tab="' + currentTab + '"]');
        const newPanel = document.querySelector('.tab-panel[data-tab="' + tabKey + '"]');
        if (!oldPanel || !newPanel) return;

        // Kill any in-progress animation
        if (tabTimeline) {
          tabTimeline.kill();
          tabTimeline = null;
        }

        currentTab = tabKey;

        if (prefersReducedMotion) {
          // Instant swap
          oldPanel.classList.remove('active');
          newPanel.classList.add('active');
          activateDefaultCard(newPanel);
          return;
        }

        // Animate tab panel transition
        const oldCards = oldPanel.querySelectorAll('.feature-card');

        tabTimeline = gsap.timeline({
          onComplete: () => { tabTimeline = null; }
        });

        // Fade out old panel cards, then swap panels and animate new cards in
        tabTimeline.to(oldCards, {
          opacity: 0,
          x: direction * -30,
          duration: 0.2,
          stagger: 0.04,
          ease: 'power2.in',
          onComplete: () => {
            oldPanel.classList.remove('active');
            // Reset old cards for next time
            gsap.set(oldCards, { opacity: 1, x: 0 });

            // Show new panel
            newPanel.classList.add('active');

            // Activate default card and phone screen
            activateDefaultCard(newPanel);

            // Now animate new cards in (panel is visible)
            const newCards = newPanel.querySelectorAll('.feature-card');
            gsap.fromTo(newCards,
              { opacity: 0, x: direction * 30 },
              {
                opacity: 1,
                x: 0,
                duration: 0.35,
                stagger: 0.08,
                ease: 'power2.out',
              }
            );
          }
        });
      });
    });

    // Card click handlers
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('click', () => {
        const featureKey = card.dataset.feature;
        if (featureKey === currentFeature) return;

        // Update card active states within same tab panel
        const panel = card.closest('.tab-panel');
        if (panel) {
          panel.querySelectorAll('.feature-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
        }

        // Animate phone screen swap
        animatePhoneScreen(featureKey);
      });
    });
  }

  function updateIndicator(btn, indicator) {
    if (!btn || !indicator) return;
    const rect = btn.getBoundingClientRect();
    const parentRect = btn.parentElement.getBoundingClientRect();
    indicator.style.left = (rect.left - parentRect.left) + 'px';
    indicator.style.width = rect.width + 'px';
  }

  function activateDefaultCard(panel) {
    // First card with .active class in this panel
    const activeCard = panel.querySelector('.feature-card.active');
    if (activeCard) {
      animatePhoneScreen(activeCard.dataset.feature);
    }
  }

  function animatePhoneScreen(featureKey) {
    const oldImg = currentFeature
      ? document.querySelector('.screen-img[data-feature="' + currentFeature + '"]')
      : null;
    const newImg = document.querySelector('.screen-img[data-feature="' + featureKey + '"]');
    if (!newImg) return;

    currentFeature = featureKey;

    if (prefersReducedMotion) {
      if (oldImg) oldImg.classList.remove('active');
      newImg.classList.add('active');
      return;
    }

    // GSAP phone screen transition
    const tl = gsap.timeline();

    if (oldImg && oldImg !== newImg) {
      tl.to(oldImg, {
        opacity: 0,
        scale: 0.97,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          oldImg.classList.remove('active');
          gsap.set(oldImg, { scale: 1 });
        }
      });
    }

    tl.fromTo(newImg,
      { opacity: 0, scale: 1.03 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: 'power2.out',
        onStart: () => {
          newImg.classList.add('active');
        }
      },
      oldImg && oldImg !== newImg ? '-=0.05' : 0
    );
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

  // ─── Recalculate tab indicator on resize ───
  window.addEventListener('resize', () => {
    const activeBtn = document.querySelector('.tab-btn.active');
    const indicator = document.getElementById('tabIndicator');
    if (activeBtn && indicator) {
      updateIndicator(activeBtn, indicator);
    }
  });

});
