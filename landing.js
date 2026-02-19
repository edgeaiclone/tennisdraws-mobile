/* ═══════════════════════════════════════════════ */
/* edgeAI Landing — Minimal Black + Pixel Tools    */
/* ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Pixel Art Color Palette ───
  const PIXEL_PALETTE = {
    0: 'transparent',
    1: '#00E68A',  // green (accent)
    2: '#4DA6FF',  // blue
    3: '#A78BFA',  // purple
    4: '#FF6B9D',  // pink
    5: '#F7C948',  // gold
    6: '#EF4444',  // red
    7: '#FFFFFF',  // white
    8: '#1A1A2E',  // dark fill
    9: '#0D0D14',  // darker bg
  };

  // ─── 9 Pixel Art Illustrations (24x24 grids) ───
  function parsePixelArt(str) {
    return str.trim().split('\n').map(row =>
      row.split('').map(ch => ch === '.' ? 0 : parseInt(ch) || 0)
    );
  }

  const PIXEL_ART = {
    // 01: Live Scores — scoreboard
    'live-scores': parsePixelArt(
      '........................\n' +
      '..88888888888888888888..\n' +
      '..8..................8..\n' +
      '..8..1111..77..55.55.8..\n' +
      '..8..1.....77..55.55.8..\n' +
      '..8..1111..77..55.55.8..\n' +
      '..8.....1..77..55.55.8..\n' +
      '..8..1111..77..55.55.8..\n' +
      '..8..................8..\n' +
      '..8..2222..77..55.55.8..\n' +
      '..8..2.....77..55.55.8..\n' +
      '..8..2222..77..55.55.8..\n' +
      '..8..2.....77..55.55.8..\n' +
      '..8..2222..77..55.55.8..\n' +
      '..8..................8..\n' +
      '..88888888888888888888..\n' +
      '..........8888..........\n' +
      '..........8888..........\n' +
      '......8888888888888.....\n' +
      '......8888888888888.....\n' +
      '........................\n' +
      '....1..1111..66..5......\n' +
      '....1..1..1..66..5......\n' +
      '....1..1111..55..5......'
    ),
    // 02: Odds Master — bar chart with arrow
    'odds-master': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '..............11........\n' +
      '.............111........\n' +
      '............1111........\n' +
      '...........11.11........\n' +
      '..........11..11........\n' +
      '.........11...11........\n' +
      '..............11........\n' +
      '..............11........\n' +
      '..22..........11........\n' +
      '..22..55......11........\n' +
      '..22..55..11..11........\n' +
      '..22..55..11..11..66....\n' +
      '..22..55..11..11..66....\n' +
      '..22..55..11..11..66....\n' +
      '..22..55..11..11..66....\n' +
      '..22..55..11..11..66....\n' +
      '..22..55..11..11..66....\n' +
      '..88888888888888888888..\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 03: MTO — medical cross + heartbeat
    'mto': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '.........6666...........\n' +
      '.........6666...........\n' +
      '.........6666...........\n' +
      '....666666666666666.....\n' +
      '....666666666666666.....\n' +
      '....666666776666666.....\n' +
      '....666666776666666.....\n' +
      '....666666666666666.....\n' +
      '....666666666666666.....\n' +
      '.........6666...........\n' +
      '.........6666...........\n' +
      '.........6666...........\n' +
      '........................\n' +
      '..11111.................\n' +
      '..1...1.................\n' +
      '..1...1.......1.........\n' +
      '..1...1......1.1........\n' +
      '..1...1.....1...1...1...\n' +
      '..1...1....1.....1.1.1..\n' +
      '..1...1...1.......1.....\n' +
      '..11111.................\n' +
      '........................'
    ),
    // 04: edgeAI Tools — CPU chip
    'edgeai-tools': parsePixelArt(
      '........................\n' +
      '........1...1...1.......\n' +
      '........1...1...1.......\n' +
      '......8888888888888.....\n' +
      '..1...8...........8...1.\n' +
      '..1...8..2222222..8...1.\n' +
      '......8..2.....2..8.....\n' +
      '..1...8..2.333.2..8...1.\n' +
      '......8..2.3.3.2..8.....\n' +
      '..1...8..2.333.2..8...1.\n' +
      '......8..2.....2..8.....\n' +
      '..1...8..2222222..8...1.\n' +
      '..1...8...........8...1.\n' +
      '......8888888888888.....\n' +
      '........1...1...1.......\n' +
      '........1...1...1.......\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 05: Live AI — eye
    'live-ai': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........11111111........\n' +
      '......11........11......\n' +
      '....11....3333....11....\n' +
      '...1...33322233....1....\n' +
      '..1...3222222223...1....\n' +
      '..1...3228828223...1....\n' +
      '..1...3228828223...1....\n' +
      '..1...3222222223...1....\n' +
      '...1...33322233....1....\n' +
      '....11....3333....11....\n' +
      '......11........11......\n' +
      '........11111111........\n' +
      '........................\n' +
      '........................\n' +
      '...2..2..2..2..2..2.....\n' +
      '........................\n' +
      '...55.1111.22.1111......\n' +
      '........................\n' +
      '...22.11.55.11.22.......\n' +
      '........................\n' +
      '........................'
    ),
    // 06: Retirements — person + exit door
    'retirements': parsePixelArt(
      '........................\n' +
      '...........88888888888..\n' +
      '...........8.........8..\n' +
      '...........8.........8..\n' +
      '....66.....8.........8..\n' +
      '...6666....8.........8..\n' +
      '....66.....8....55...8..\n' +
      '...6116....8.........8..\n' +
      '...6116....8.........8..\n' +
      '...6116....8.........8..\n' +
      '....66.....8.........8..\n' +
      '...6..6....8.........8..\n' +
      '...6..6....8.........8..\n' +
      '..6....6...8.........8..\n' +
      '...........88888888888..\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 07: Draws — bracket + trophy
    'draws': parsePixelArt(
      '........................\n' +
      '..2222..................\n' +
      '..2222..11..............\n' +
      '........11..............\n' +
      '..2222..11..............\n' +
      '..2222...11.............\n' +
      '..........11.11.........\n' +
      '..........11.11.........\n' +
      '..2222...11..11.........\n' +
      '..2222..11...11.........\n' +
      '........11....11.5555...\n' +
      '..2222..11....11.5..5...\n' +
      '..2222...11...11.5..5...\n' +
      '..........11..11.5..5...\n' +
      '..2222...11..11..5555...\n' +
      '..2222..11...11...55....\n' +
      '........11....11..55....\n' +
      '..2222..11....11.5555...\n' +
      '..2222...11...11........\n' +
      '..........11.11.........\n' +
      '..2222...11.11..........\n' +
      '..2222..11..............\n' +
      '........111.............\n' +
      '........................'
    ),
    // 08: Chatrooms — two speech bubbles
    'chatrooms': parsePixelArt(
      '........................\n' +
      '..1111111111111111......\n' +
      '..1..............1......\n' +
      '..1..77777777....1......\n' +
      '..1..............1......\n' +
      '..1..7777777.....1......\n' +
      '..1..............1......\n' +
      '..1111111111111111......\n' +
      '...11...................\n' +
      '....1...................\n' +
      '........................\n' +
      '......2222222222222222..\n' +
      '......2..............2..\n' +
      '......2....55555555..2..\n' +
      '......2..............2..\n' +
      '......2....5555555...2..\n' +
      '......2..............2..\n' +
      '......2222222222222222..\n' +
      '.................22.....\n' +
      '..................2.....\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 09: Notifications — bell + waves
    'notifications': parsePixelArt(
      '........................\n' +
      '...........55...........\n' +
      '...........55...........\n' +
      '.........111111.........\n' +
      '........11111111........\n' +
      '.......1111111111.......\n' +
      '.......1111111111.......\n' +
      '.......1111111111.......\n' +
      '.......1111111111.......\n' +
      '.......1111111111.......\n' +
      '.......1111111111.......\n' +
      '......111111111111......\n' +
      '.....11111111111111.....\n' +
      '...1111111111111111111..\n' +
      '........................\n' +
      '..........1111..........\n' +
      '..........1111..........\n' +
      '........................\n' +
      '...66..............66...\n' +
      '....66............66....\n' +
      '.....66..........66.....\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 10: AI Chat — brain + chat bubble
    'ai-chat': parsePixelArt(
      '........................\n' +
      '......3333333333........\n' +
      '....33..........33......\n' +
      '...3..3333..3333..3.....\n' +
      '..3..33..33.33.33..3....\n' +
      '..3..3....3.3...3..3....\n' +
      '..3..33..33.33.33..3....\n' +
      '...3..3333..3333..3.....\n' +
      '....33..........33......\n' +
      '......3333333333........\n' +
      '........................\n' +
      '..1111111111111111111...\n' +
      '..1.................1...\n' +
      '..1..77777777777....1...\n' +
      '..1.................1...\n' +
      '..1..7777777777.....1...\n' +
      '..1.................1...\n' +
      '..1..777777.........1...\n' +
      '..1111111111111111111...\n' +
      '...11...................\n' +
      '....1...................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 11: Live Stats — bar chart with percentages
    'live-stats': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '..77...77..77...........\n' +
      '..77...77..77...........\n' +
      '........................\n' +
      '..1111111111111111111...\n' +
      '..1.................1...\n' +
      '..1..11111111111....1...\n' +
      '..1.................1...\n' +
      '..1..22222222222....1...\n' +
      '..1.................1...\n' +
      '..1..55555555.......1...\n' +
      '..1.................1...\n' +
      '..1..66666666666....1...\n' +
      '..1.................1...\n' +
      '..1..11111111.......1...\n' +
      '..1.................1...\n' +
      '..1111111111111111111...\n' +
      '........................\n' +
      '...1..66..55..22..1.....\n' +
      '...1..66..55..22..1.....\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
  };

  // Tool metadata
  const TOOL_DATA = {
    'live-scores': {
      title: 'Live Scores & Stats',
      desc: 'Point-by-point tracking. Serve indicators. Aces, break points, first serve %. Momentum analysis and full H2H history.',
    },
    'odds-master': {
      title: 'Odds Master',
      desc: 'Live in-play odds with minute-by-minute tracking. Dropping odds monitor. Pre-match line movement.',
    },
    'mto': {
      title: 'MTO Tracker',
      desc: 'Deep MTO intelligence. Integrity check on retirement history. Match dynamics with momentum tracking.',
    },
    'edgeai-tools': {
      title: 'edgeAI Tools',
      desc: 'Burnout Watch flags 3h+ marathons. Fatigue Tracker spots same-day doubles. After MTO tracks next-match risk.',
    },
    'live-ai': {
      title: 'Live AI Predictions',
      desc: 'AI analyzes live match data to generate statistical predictions. Pattern recognition across thousands of matches.',
    },
    'retirements': {
      title: 'Retirements & Returns',
      desc: 'Track retired players with date, tournament, score, and odds at retirement. Monitor who is returning.',
    },
    'draws': {
      title: 'Entry Lists & Draws',
      desc: '3,000+ players tracked across every tier. Grand Slams to ITF Futures. Full withdrawal reasons and brackets.',
    },
    'chatrooms': {
      title: 'Live Chatrooms',
      desc: 'Global tennis community. Discuss live matches, share insights, debate predictions in real-time.',
    },
    'notifications': {
      title: 'Smart Notifications',
      desc: 'Real-time alerts for live MTOs, odds shifts, rain delays, momentum changes, and match results.',
    },
    'ai-chat': {
      title: 'AI Chat Model',
      desc: 'Chat with our tennis AI. Ask about any player, matchup, form, or stat. Trained on live data — knows what happened 5 minutes ago.',
    },
    'live-stats': {
      title: 'Live Stats & Insights',
      desc: 'Deep performance tracking. Who is on fire, who is struggling. First serve %, break point conversion, live form ratings across every match.',
    },
  };


  // ─── PixelArtRenderer Class ───
  class PixelArtRenderer {
    constructor(canvas, grid, pixelSize) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.grid = grid;
      this.rows = grid.length;
      this.cols = grid[0] ? grid[0].length : 0;
      this.gap = 1;

      const isMobile = window.innerWidth < 768;
      this.pixelSize = pixelSize || (isMobile ? 7 : 9);

      const dpr = window.devicePixelRatio || 1;
      const logW = this.cols * (this.pixelSize + this.gap);
      const logH = this.rows * (this.pixelSize + this.gap);
      canvas.width = logW * dpr;
      canvas.height = logH * dpr;
      canvas.style.width = logW + 'px';
      canvas.style.height = logH + 'px';
      this.ctx.scale(dpr, dpr);
      this.logW = logW;
      this.logH = logH;

      // Build reveal order (shuffled)
      this.revealOrder = [];
      this.totalPixels = 0;
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          if (this.grid[r] && this.grid[r][c] !== 0) {
            this.revealOrder.push([r, c]);
            this.totalPixels++;
          }
        }
      }
      for (let i = this.revealOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.revealOrder[i], this.revealOrder[j]] = [this.revealOrder[j], this.revealOrder[i]];
      }
      this.lastProgress = -1;
    }

    drawAtProgress(progress) {
      const quantized = Math.round(progress * 200) / 200;
      if (quantized === this.lastProgress) return;
      this.lastProgress = quantized;

      const ctx = this.ctx;
      const ps = this.pixelSize;
      const gap = this.gap;
      ctx.clearRect(0, 0, this.logW, this.logH);

      if (progress <= 0) return;

      const revealCount = Math.floor(progress * this.totalPixels);

      for (let i = 0; i < revealCount && i < this.revealOrder.length; i++) {
        const [r, c] = this.revealOrder[i];
        const colorIdx = this.grid[r][c];
        const color = PIXEL_PALETTE[colorIdx];
        if (color === 'transparent') continue;
        ctx.fillStyle = color;
        ctx.fillRect(c * (ps + gap), r * (ps + gap), ps, ps);
      }

      // Remaining as faint noise
      for (let i = revealCount; i < this.revealOrder.length; i++) {
        const [r, c] = this.revealOrder[i];
        if (Math.random() < 0.25) {
          ctx.fillStyle = 'rgba(255,255,255,0.04)';
          ctx.fillRect(c * (ps + gap), r * (ps + gap), ps, ps);
        }
      }
    }
  }


  // ─── TextScramble Class ───
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      this.frameReq = null;
    }

    setText(newText) {
      const length = newText.length;
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const to = newText[i];
        const start = Math.floor(Math.random() * 15);
        const end = start + Math.floor(Math.random() * 15) + 5;
        this.queue.push({ to, start, end, char: '' });
      }
      cancelAnimationFrame(this.frameReq);
      this.frame = 0;
      return new Promise(resolve => {
        this.resolve = resolve;
        this._update();
      });
    }

    _update() {
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
    { text: '> edgeAI v2.1.0 — Initializing...', delay: 0 },
    { text: '> Live match feed connected...           [OK]', delay: 40 },
    { text: '> ATP / WTA / ITF data pipeline...       [OK]', delay: 30 },
    { text: '> Odds Master stream online...           [OK]', delay: 30 },
    { text: '> edgeAI tools loaded...                 ARMED', delay: 30 },
    { text: '> Live AI predictions engine...          ARMED', delay: 30 },
    { text: '> Subscription check...                  FREE TIER', delay: 30 },
    { text: '> System nominal. Welcome.', delay: 80 },
  ];

  const bootLinesEl = document.getElementById('bootLines');
  const bootProgressBar = document.getElementById('bootProgressBar');
  const bootScreen = document.getElementById('bootScreen');
  const navbar = document.getElementById('navbar');

  async function runBootSequence() {
    for (let i = 0; i < bootLines.length; i++) {
      const { text, delay } = bootLines[i];
      await typewriterLine(bootLinesEl, text, 10);
      bootProgressBar.style.width = ((i + 1) / bootLines.length * 100) + '%';
      await sleep(delay);
    }
    await sleep(250);
    bootScreen.classList.add('done');
    navbar.classList.add('visible');
    initToolCarousel();
  }

  function typewriterLine(container, text, speed) {
    return new Promise(resolve => {
      const p = document.createElement('p');
      p.className = 'boot-line';
      container.appendChild(p);
      let i = 0;
      const timer = setInterval(() => {
        p.textContent = text.substring(0, ++i);
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
    setTimeout(() => { initToolCarousel(); }, 100);
  } else {
    runBootSequence();
  }


  // ─── Tool Carousel (click + auto-cycle) ───
  function initToolCarousel() {
    const buttons = document.querySelectorAll('.tool-btn');
    const pixelCanvas = document.getElementById('pixelArtCanvas');
    const titleEl = document.getElementById('pixelToolTitle');
    const descEl = document.getElementById('pixelToolDesc');

    if (!pixelCanvas || !buttons.length) return;

    const titleScramble = new TextScramble(titleEl);
    let currentIdx = 0;
    let autoTimer = null;
    let revealRaf = null;
    let descTimer = null;

    function showTool(idx) {
      const btn = buttons[idx];
      if (!btn) return;
      const toolKey = btn.dataset.tool;
      const data = TOOL_DATA[toolKey];

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (revealRaf) cancelAnimationFrame(revealRaf);
      if (descTimer) clearInterval(descTimer);

      if (PIXEL_ART[toolKey]) {
        const renderer = new PixelArtRenderer(pixelCanvas, PIXEL_ART[toolKey]);
        animateReveal(renderer);
      }

      if (data && titleEl) {
        titleScramble.setText(data.title);
      }

      if (descEl) { descEl.textContent = ''; descEl.style.opacity = '0'; }

      setTimeout(() => {
        if (data && descEl) {
          descEl.style.opacity = '1';
          typeDesc(descEl, data.desc, 10);
        }
      }, 1000);

      currentIdx = idx;
    }

    function animateReveal(renderer) {
      let progress = 0;
      function step() {
        progress += 0.015;
        renderer.drawAtProgress(Math.min(1, progress));
        if (progress < 1) {
          revealRaf = requestAnimationFrame(step);
        }
      }
      step();
    }

    function typeDesc(el, text, speed) {
      el.textContent = '';
      let i = 0;
      descTimer = setInterval(() => {
        el.textContent = text.substring(0, ++i);
        if (i >= text.length) clearInterval(descTimer);
      }, speed);
    }

    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        showTool(idx);
        resetAutoTimer();
      });
    });

    function resetAutoTimer() {
      clearInterval(autoTimer);
      autoTimer = setInterval(() => {
        showTool((currentIdx + 1) % buttons.length);
      }, 5500);
    }

    showTool(0);
    resetAutoTimer();
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

  // Apple logo — 10x12 pixel grid
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

  // Android robot — 10x12 pixel grid
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
