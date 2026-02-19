/* ═══════════════════════════════════════════════ */
/* EdgeAI Landing — Pixel Art Creative Overhaul    */
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
  // Each string row maps chars to palette indices: .=0 1-9=colors
  function parsePixelArt(str) {
    return str.trim().split('\n').map(row =>
      row.split('').map(ch => ch === '.' ? 0 : parseInt(ch) || 0)
    );
  }

  const PIXEL_ART = {
    // 01: Live Scores — tennis court + scoreboard + ball
    'live-scores': parsePixelArt(
      '........................\n' +
      '..888888888888888888..\n' +
      '..811111111111111118..\n' +
      '..81..............18..\n' +
      '..81.577.577.577..18..\n' +
      '..81..............18..\n' +
      '..81..............18..\n' +
      '..888888888888888888..\n' +
      '........................\n' +
      '..1111111111111111111...\n' +
      '..1.........7.........1.\n' +
      '..1.........7.........1.\n' +
      '..1.........7.........1.\n' +
      '..1...55....7.........1.\n' +
      '..1...55....7.........1.\n' +
      '..1.........7.........1.\n' +
      '..1.........7.........1.\n' +
      '..1.........7.........1.\n' +
      '..1111111111111111111...\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 02: Odds Master — bar chart with trend line
    'odds-master': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '..7.....................\n' +
      '..7.....................\n' +
      '..7.......22...........\n' +
      '..7.......22...11......\n' +
      '..7..22...22...11......\n' +
      '..7..22...22...11..66..\n' +
      '..7..22...22...11..66..\n' +
      '..7..22...22...11..66..\n' +
      '..7..22.5.22.5.11..66..\n' +
      '..7..22.5.22...11..66..\n' +
      '..7..22...22...11..66..\n' +
      '..7..22...22...11..66..\n' +
      '..77777777777777777777..\n' +
      '........................\n' +
      '..5555..5..55555..555...\n' +
      '..5..5..5..5......5..5..\n' +
      '..5..5..5..555....5..5..\n' +
      '..5..5..5..5......5..5..\n' +
      '..5555..5..55555..555...\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 03: MTO Tracker — medical cross + heartbeat
    'mto': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '........6666............\n' +
      '........6666............\n' +
      '........6666............\n' +
      '..666666666666666666....\n' +
      '..666666666666666666....\n' +
      '........6666............\n' +
      '........6666............\n' +
      '........6666............\n' +
      '........................\n' +
      '........................\n' +
      '1.........1.............\n' +
      '1.........1.............\n' +
      '1........1.1............\n' +
      '1.......1...1...........\n' +
      '1......1.....1..11....1.\n' +
      '1.....1.......1.11...1..\n' +
      '.1...1.........1.1..1...\n' +
      '..1.1...............1...\n' +
      '...1..............1.....\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 04: edgeAI Tools — gear + lightning bolt
    'edgeai-tools': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '.......333..............\n' +
      '......33333.............\n' +
      '..333.33333.333.........\n' +
      '..3333333333333.........\n' +
      '...33333333333..........\n' +
      '..3333.333.3333.........\n' +
      '..3333.333.3333.........\n' +
      '...33333333333..........\n' +
      '..3333333333333.........\n' +
      '..333.33333.333.........\n' +
      '......33333.............\n' +
      '.......333..............\n' +
      '........................\n' +
      '..............555.......\n' +
      '.............555........\n' +
      '............555.........\n' +
      '...........5555555......\n' +
      '.............555........\n' +
      '............555.........\n' +
      '...........555..........\n' +
      '........................\n' +
      '........................'
    ),
    // 05: Live AI — brain with neural dots
    'live-ai': parsePixelArt(
      '........................\n' +
      '........111111..........\n' +
      '......11......11........\n' +
      '.....1..333333..1.......\n' +
      '....1..3......3..1......\n' +
      '....1.3..2..2..3.1......\n' +
      '....1.3.2..2.2.3.1......\n' +
      '....1.3..2..2..3.1......\n' +
      '....1.3.2.22.2.3.1......\n' +
      '....1..3......3..1......\n' +
      '.....1..333333..1.......\n' +
      '......11......11........\n' +
      '........111111..........\n' +
      '........................\n' +
      '...5.......5.......5....\n' +
      '....5.....5.....55......\n' +
      '.....5...5...55.........\n' +
      '......5.5.55............\n' +
      '.......5................\n' +
      '........................\n' +
      '..55..1111..55..1111....\n' +
      '..55..1111..55..1111....\n' +
      '........................\n' +
      '........................'
    ),
    // 06: Retirements — player walking away + trophy
    'retirements': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '..555..........77.......\n' +
      '..555.........7557......\n' +
      '...5..........7557......\n' +
      '..565..........55.......\n' +
      '..565..........55.......\n' +
      '.56565.........55.......\n' +
      '..565........555555.....\n' +
      '...5.........555555.....\n' +
      '...5..........555.......\n' +
      '..5.5.....................\n' +
      '..5..5.........6........\n' +
      '.5....5........66.......\n' +
      '5......5......6666......\n' +
      '........................\n' +
      '........................\n' +
      '...666666666666666......\n' +
      '........................\n' +
      '..77..77..7777..777.....\n' +
      '..7..7..7.7.....7..7...\n' +
      '..77.7777.777...7..7...\n' +
      '..7..7..7.7.....777.....\n' +
      '........................'
    ),
    // 07: Entry Lists & Draws — bracket tree
    'draws': parsePixelArt(
      '........................\n' +
      '..22222.................\n' +
      '..22222.111.............\n' +
      '........1...............\n' +
      '..22222.1...............\n' +
      '..22222..1..............\n' +
      '..........1.111.........\n' +
      '..........1.1...........\n' +
      '..22222..1..1...........\n' +
      '..22222.1...1...........\n' +
      '........1....1.111......\n' +
      '..22222.1....1.1........\n' +
      '..22222..1...1.1........\n' +
      '..........1..1..1.11111.\n' +
      '..22222..1..1...1.11111.\n' +
      '..22222.1...1..1........\n' +
      '........1....1.1........\n' +
      '..22222.1....1.111......\n' +
      '..22222..1...1..........\n' +
      '..........1.1...........\n' +
      '..22222..1.1............\n' +
      '..22222.1...............\n' +
      '........111.............\n' +
      '........................'
    ),
    // 08: Chatrooms — speech bubbles
    'chatrooms': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '..111111111111..........\n' +
      '..1..........1..........\n' +
      '..1..77..77..1..........\n' +
      '..1..........1..........\n' +
      '..111111111111..........\n' +
      '....11..................\n' +
      '........................\n' +
      '..........2222222222222.\n' +
      '..........2...........2.\n' +
      '..........2..77.77.77.2.\n' +
      '..........2...........2.\n' +
      '..........2222222222222.\n' +
      '....................22...\n' +
      '........................\n' +
      '..111111111111..........\n' +
      '..1..........1..........\n' +
      '..1..3..3..3.1..........\n' +
      '..1..........1..........\n' +
      '..111111111111..........\n' +
      '....11..................\n' +
      '........................\n' +
      '........................'
    ),
    // 09: Smart Notifications — bell with ringing lines
    'notifications': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '...........55...........\n' +
      '...........55...........\n' +
      '........55555555........\n' +
      '.......5555555555.......\n' +
      '......555555555555......\n' +
      '......555555555555......\n' +
      '.....55555555555555.....\n' +
      '.....55555555555555.....\n' +
      '.....55555555555555.....\n' +
      '......555555555555......\n' +
      '......555555555555......\n' +
      '.....5555555555555555...\n' +
      '....555555555555555555..\n' +
      '........................\n' +
      '..........5555..........\n' +
      '..........5555..........\n' +
      '........................\n' +
      '..11................11..\n' +
      '...11..............11...\n' +
      '....11............11....\n' +
      '........................\n' +
      '........................'
    ),
  };

  // Tool metadata for the reveal section
  const TOOL_DATA = {
    'live-scores': {
      title: 'Live Scores & Stats',
      desc: 'Point-by-point tracking. Serve indicators. Aces, break points, first serve %. Momentum analysis and full H2H history across every match.',
      tags: ['Point-by-Point', 'Live Stats', 'H2H'],
    },
    'odds-master': {
      title: 'Odds Master',
      desc: 'Live in-play odds with minute-by-minute tracking. Dropping odds monitor. Pre-match line movement. Decimal, fractional, and US formats.',
      tags: ['Live Odds', 'Dropping Odds', 'Pre-match'],
    },
    'mto': {
      title: 'MTO Tracker',
      desc: 'Deep MTO intelligence. Integrity check on retirement history. Match dynamics with momentum tracking. Set-by-set performance analytics.',
      tags: ['Integrity Check', 'Match Dynamics', 'Analytics'],
    },
    'edgeai-tools': {
      title: 'edgeAI Tools',
      desc: 'Burnout Watch flags 3h+ marathons. Fatigue Tracker spots same-day doubles. After MTO tracks next-match risk. Opening Odds Alert on Bet365.',
      tags: ['Burnout Watch', 'Fatigue Tracker', 'After MTO'],
    },
    'live-ai': {
      title: 'Live AI Predictions',
      desc: 'Our AI engine analyzes live match data to generate statistical predictions. Pattern recognition across thousands of matches to give you the edge.',
      tags: ['AI Engine', 'Predictions', 'Pattern Analysis'],
    },
    'retirements': {
      title: 'Retirements & Returns',
      desc: 'Track retired players with date, tournament, score, and odds at retirement. Monitor who is returning. Never miss a retirement event.',
      tags: ['Retired', 'Returning', 'Odds at Ret.'],
    },
    'draws': {
      title: 'Entry Lists & Draws',
      desc: '3,000+ players tracked across every tier. Grand Slams to ITF Futures. Full withdrawal reasons, alternate lists, and knockout brackets.',
      tags: ['3000+ Players', 'All Tiers', 'Brackets'],
    },
    'chatrooms': {
      title: 'Live Chatrooms',
      desc: 'Global tennis community. Discuss live matches, share insights, debate predictions. Connect with fellow sharp bettors in real-time.',
      tags: ['Global Chat', 'Live Discussion', 'Community'],
    },
    'notifications': {
      title: 'Smart Notifications',
      desc: 'Real-time alerts for live MTOs, odds shifts, rain delays, momentum changes, and match results. Powered by edgeAI so you act first.',
      tags: ['Live MTOs', 'Odds Shifts', 'edgeAI Powered'],
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

      // Responsive pixel size
      const isMobile = window.innerWidth < 768;
      this.pixelSize = pixelSize || (isMobile ? 7 : 9);

      // DPR scaling
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
      // Fisher-Yates shuffle
      for (let i = this.revealOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.revealOrder[i], this.revealOrder[j]] = [this.revealOrder[j], this.revealOrder[i]];
      }

      this.lastProgress = -1;
    }

    drawAtProgress(progress) {
      // Avoid redundant redraws
      const quantized = Math.round(progress * 200) / 200;
      if (quantized === this.lastProgress) return;
      this.lastProgress = quantized;

      const ctx = this.ctx;
      const ps = this.pixelSize;
      const gap = this.gap;
      ctx.clearRect(0, 0, this.logW, this.logH);

      if (progress <= 0) {
        // Draw scrambled noise
        this._drawScrambled();
        return;
      }

      const revealCount = Math.floor(progress * this.totalPixels);

      // Draw revealed pixels (correct colors)
      for (let i = 0; i < revealCount && i < this.revealOrder.length; i++) {
        const [r, c] = this.revealOrder[i];
        const colorIdx = this.grid[r][c];
        const color = PIXEL_PALETTE[colorIdx];
        if (color === 'transparent') continue;
        ctx.fillStyle = color;
        ctx.fillRect(c * (ps + gap), r * (ps + gap), ps, ps);
      }

      // Draw remaining as scrambled noise (dimmer)
      for (let i = revealCount; i < this.revealOrder.length; i++) {
        const [r, c] = this.revealOrder[i];
        if (Math.random() < 0.3) {
          const randColors = ['#00E68A', '#4DA6FF', '#A78BFA', '#FF6B9D', '#F7C948'];
          ctx.fillStyle = randColors[Math.floor(Math.random() * randColors.length)];
          ctx.globalAlpha = 0.08 + Math.random() * 0.12;
          ctx.fillRect(c * (ps + gap), r * (ps + gap), ps, ps);
          ctx.globalAlpha = 1;
        }
      }
    }

    drawFull() {
      const ctx = this.ctx;
      const ps = this.pixelSize;
      const gap = this.gap;
      ctx.clearRect(0, 0, this.logW, this.logH);
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          const colorIdx = this.grid[r] ? this.grid[r][c] : 0;
          if (colorIdx === 0) continue;
          const color = PIXEL_PALETTE[colorIdx];
          if (color === 'transparent') continue;
          ctx.fillStyle = color;
          ctx.fillRect(c * (ps + gap), r * (ps + gap), ps, ps);
        }
      }
    }

    _drawScrambled() {
      const ctx = this.ctx;
      const ps = this.pixelSize;
      const gap = this.gap;
      const colors = ['#00E68A', '#4DA6FF', '#A78BFA', '#FF6B9D', '#F7C948', '#EF4444'];
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          if (Math.random() < 0.15) {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.globalAlpha = 0.05 + Math.random() * 0.15;
            ctx.fillRect(c * (ps + gap), r * (ps + gap), ps, ps);
            ctx.globalAlpha = 1;
          }
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
          output += '<span class="scramble-char">' + char + '</span>';
        } else {
          output += '<span class="scramble-char">' + this.chars[Math.floor(Math.random() * this.chars.length)] + '</span>';
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
    { text: '> EDGE AI v2.1.0 — Initializing...', delay: 0 },
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
    initHeroCanvas();
    startLiveTicker();
    startLiveOdds();
    initMysteryIntro();
    initPixelReveals();
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

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    bootScreen.classList.add('done');
    navbar.classList.add('visible');
    startLiveTicker();
    startLiveOdds();
    setTimeout(() => { initMysteryIntro(); initPixelReveals(); }, 100);
  } else {
    runBootSequence();
  }


  // ─── Hero Canvas — Interactive Particle Network ───
  function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;
    let particles = [];
    let mouse = { x: -9999, y: -9999 };
    let animId;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.r = Math.random() * 1.8 + 0.5;
        const colors = ['#00E68A', '#4DA6FF', '#A78BFA', '#FF6B9D'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.2;
      }
      update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          this.vx += (dx / dist) * 0.15;
          this.vy += (dy / dist) * 0.15;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.99;
        this.vy *= 0.99;
        if (this.x < 0) this.x = W;
        if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H;
        if (this.y > H) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const count = Math.min(100, Math.floor(W * H / 12000));
    for (let i = 0; i < count; i++) particles.push(new Particle());

    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

    function drawConnections() {
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(0, 230, 138, ' + alpha + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animId = requestAnimationFrame(loop);
    }
    loop();

    const heroSection = document.getElementById('hero');
    const canvasObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { if (!animId) loop(); }
        else { cancelAnimationFrame(animId); animId = null; }
      });
    }, { threshold: 0.1 });
    canvasObserver.observe(heroSection);
  }


  // ─── Live Ticker ───
  const tickerMessages = [
    'Alcaraz vs Medvedev is now live \u2014 1st set underway',
    'MTO Alert: Medical timeout called in Set 2',
    'Odds Shift: Nadal vs Djokovic \u2014 Nadal 2.10 \u2192 1.85',
    'Burnout Watch: Alcaraz \u2014 18h recovery after 4h 21m marathon',
    'Fatigue Tracker: Djokovic \u2014 2 matches today, 7h gap',
    'Dropping Odds: Medvedev -21.4% for Barcelona Open',
    'AI Prediction: 73% chance of upset in Rune vs Sinner',
    'After MTO: Hijikata won with MTO, next match in 16h',
    'ATP 250 Estoril \u2014 play suspended due to rain',
    'Entry List Update: Nadal added to Barcelona Open draws',
  ];

  let tickerIdx = 0;
  const tickerEl = document.getElementById('heroTicker');

  function startLiveTicker() {
    if (!tickerEl) return;
    rotateTicker();
    setInterval(rotateTicker, 3500);
  }

  function rotateTicker() {
    tickerEl.style.opacity = '0';
    tickerEl.style.transform = 'translateY(-6px)';
    setTimeout(() => {
      tickerEl.textContent = tickerMessages[tickerIdx++ % tickerMessages.length];
      tickerEl.style.opacity = '1';
      tickerEl.style.transform = 'translateY(0)';
    }, 300);
  }


  // ─── Live Odds Simulation ───
  function startLiveOdds() {
    const odd1El = document.getElementById('odd1');
    const odd2El = document.getElementById('odd2');
    if (!odd1El || !odd2El) return;

    setInterval(() => {
      const change1 = (Math.random() - 0.5) * 0.08;
      let val1 = parseFloat(odd1El.textContent) + change1;
      val1 = Math.max(1.05, Math.min(4.0, val1));
      const oldVal1 = parseFloat(odd1El.textContent);
      odd1El.textContent = val1.toFixed(2);

      odd1El.classList.remove('flash-up', 'flash-down');
      void odd1El.offsetWidth;
      odd1El.classList.add(val1 > oldVal1 ? 'flash-up' : 'flash-down');
      setTimeout(() => odd1El.classList.remove('flash-up', 'flash-down'), 600);

      const change2 = -change1 * 0.8 + (Math.random() - 0.5) * 0.04;
      let val2 = parseFloat(odd2El.textContent) + change2;
      val2 = Math.max(1.05, Math.min(4.0, val2));
      const oldVal2 = parseFloat(odd2El.textContent);
      odd2El.textContent = val2.toFixed(2);

      odd2El.classList.remove('flash-up', 'flash-down');
      void odd2El.offsetWidth;
      odd2El.classList.add(val2 > oldVal2 ? 'flash-up' : 'flash-down');
      setTimeout(() => odd2El.classList.remove('flash-up', 'flash-down'), 600);
    }, 2500);
  }


  // ─── Scroll Progress Bar ───
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    if (scrollProgress) scrollProgress.style.width = scrolled + '%';
  });


  // ─── Smart Navbar ───
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
      if (currentScroll > lastScroll + 5) {
        navbar.classList.remove('visible');
      } else if (currentScroll < lastScroll - 5) {
        navbar.classList.add('visible');
      }
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('visible');
    }
    lastScroll = currentScroll;
  });


  // ─── Mobile Menu ───
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }




  // ─── Mystery Intro — Scrambled Text Reveal ───
  function initMysteryIntro() {
    const mysteryLines = document.querySelectorAll('.mystery-line');
    if (!mysteryLines.length) return;

    const scramblers = [];
    mysteryLines.forEach(line => {
      const originalText = line.textContent;
      line.dataset.original = originalText;
      // Start scrambled
      line.innerHTML = originalText.split('').map(() =>
        '<span class="scramble-char">' + '!<>-_\\/[]{}=+*^?#'[Math.floor(Math.random() * 18)] + '</span>'
      ).join('');
      scramblers.push(new TextScramble(line));
    });

    const mysterySection = document.querySelector('.mystery-intro');
    if (!mysterySection) return;

    let revealed = [false, false, false];

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = Array.from(mysteryLines).indexOf(entry.target);
          if (idx >= 0 && !revealed[idx]) {
            revealed[idx] = true;
            scramblers[idx].setText(entry.target.dataset.original);
          }
        }
      });
    }, { threshold: 0.5, rootMargin: '-10% 0px -10% 0px' });

    mysteryLines.forEach(line => observer.observe(line));
  }


  // ─── Pixel Art Reveal System ───
  let currentRenderer = null;
  let currentToolKey = null;
  const toolKeys = ['live-scores', 'odds-master', 'mto', 'edgeai-tools', 'live-ai', 'retirements', 'draws', 'chatrooms', 'notifications'];
  const renderers = {};

  function initPixelReveals() {
    const pixelCanvas = document.getElementById('pixelArtCanvas');
    const titleEl = document.getElementById('pixelToolTitle');
    const descEl = document.getElementById('pixelToolDesc');
    const numEl = document.getElementById('pixelToolNum');
    const tagsEl = document.getElementById('pixelToolTags');
    const triggers = document.querySelectorAll('.pixel-trigger');

    if (!pixelCanvas || !triggers.length) return;

    // Create a renderer for the shared canvas (we'll swap grids)
    const titleScramble = new TextScramble(titleEl);
    let activeIdx = -1;
    let lastActiveIdx = -1;
    let isTypingDesc = false;

    // Scroll-driven update
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateReveals();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    function updateReveals() {
      const vh = window.innerHeight;
      let bestIdx = -1;
      let bestDist = Infinity;

      triggers.forEach((trigger, idx) => {
        const rect = trigger.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - vh / 2);

        // Pick the trigger whose center is closest to the viewport center
        if (rect.bottom > 0 && rect.top < vh && dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      if (bestIdx >= 0) {
        const trigger = triggers[bestIdx];
        const rect = trigger.getBoundingClientRect();
        // rawProgress: 0 when trigger top enters viewport bottom, 1 when trigger top exits viewport top
        const rawProgress = Math.max(0, Math.min(1, (vh - rect.top) / vh));
        // Remap: start building at 15% progress, complete at 75%
        const artProgress = Math.max(0, Math.min(1, (rawProgress - 0.15) / 0.6));

        const toolKey = trigger.dataset.tool;

        // Switch tool if different
        if (bestIdx !== lastActiveIdx) {
          lastActiveIdx = bestIdx;
          currentToolKey = toolKey;

          // Create or reuse renderer
          if (!renderers[toolKey] && PIXEL_ART[toolKey]) {
            // We need a fresh canvas context for each, so we recreate
            renderers[toolKey] = new PixelArtRenderer(pixelCanvas, PIXEL_ART[toolKey]);
          }
          currentRenderer = renderers[toolKey] || null;

          // Actually we need to re-create renderer each time since we share one canvas
          if (PIXEL_ART[toolKey]) {
            currentRenderer = new PixelArtRenderer(pixelCanvas, PIXEL_ART[toolKey]);
          }

          // Update number
          if (numEl) numEl.textContent = trigger.dataset.num;

          // Scramble title
          const data = TOOL_DATA[toolKey];
          if (data && titleEl) {
            titleScramble.setText(data.title);
          }

          // Clear desc and tags (will type in when progress > 0.7)
          if (descEl) { descEl.textContent = ''; descEl.style.opacity = '0'; }
          if (tagsEl) { tagsEl.innerHTML = ''; tagsEl.style.opacity = '0'; }
          isTypingDesc = false;
        }

        // Draw pixel art at progress
        if (currentRenderer) {
          currentRenderer.drawAtProgress(artProgress);
        }

        // Type description when art is >70% built
        if (artProgress > 0.7 && !isTypingDesc) {
          isTypingDesc = true;
          const data = TOOL_DATA[toolKey];
          if (data) {
            if (descEl) {
              descEl.style.opacity = '1';
              typewriterText(descEl, data.desc, 8);
            }
            if (tagsEl && data.tags) {
              setTimeout(() => {
                tagsEl.style.opacity = '1';
                tagsEl.innerHTML = data.tags.map(t => '<span class="fd-tag">' + t + '</span>').join('') +
                  '<span class="free-badge-inline">FREE</span>';
              }, 400);
            }
          }
        }
      }
    }

    // Simple typewriter for description text
    function typewriterText(el, text, speed) {
      el.textContent = '';
      let i = 0;
      const timer = setInterval(() => {
        el.textContent = text.substring(0, ++i);
        if (i >= text.length) clearInterval(timer);
      }, speed);
    }

    // Initial call
    updateReveals();
  }


  // ─── "100% FREE" Pixel Text Canvas ───
  const freeCanvas = document.getElementById('freePixelCanvas');
  if (freeCanvas) {
    // 5x7 pixel font for "100% FREE"
    const PIXEL_FONT = {
      '1': [[0,1,0],[1,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[1,1,1]],
      '0': [[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]],
      '%': [[1,0,1],[0,0,1],[0,1,0],[0,1,0],[0,1,0],[1,0,0],[1,0,1]],
      ' ': [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
      'F': [[1,1,1,1],[1,0,0,0],[1,0,0,0],[1,1,1,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]],
      'R': [[1,1,1,0],[1,0,0,1],[1,0,0,1],[1,1,1,0],[1,0,1,0],[1,0,0,1],[1,0,0,1]],
      'E': [[1,1,1,1],[1,0,0,0],[1,0,0,0],[1,1,1,0],[1,0,0,0],[1,0,0,0],[1,1,1,1]],
    };

    const text = '100% FREE';
    const ps = window.innerWidth < 768 ? 5 : 8;
    const gap = 1;
    const charGap = ps * 2;

    // Calculate total width
    let totalW = 0;
    for (const ch of text) {
      const glyph = PIXEL_FONT[ch];
      if (glyph) totalW += glyph[0].length * (ps + gap) + charGap;
    }
    totalW -= charGap;
    const totalH = 7 * (ps + gap);

    const dpr = window.devicePixelRatio || 1;
    freeCanvas.width = totalW * dpr;
    freeCanvas.height = totalH * dpr;
    freeCanvas.style.width = totalW + 'px';
    freeCanvas.style.height = totalH + 'px';
    const fctx = freeCanvas.getContext('2d');
    fctx.scale(dpr, dpr);

    let freeRevealed = false;
    let freeProgress = 0;

    // Collect all pixel positions
    const freePixels = [];
    let xOff = 0;
    for (const ch of text) {
      const glyph = PIXEL_FONT[ch];
      if (!glyph) continue;
      for (let r = 0; r < glyph.length; r++) {
        for (let c = 0; c < glyph[r].length; c++) {
          if (glyph[r][c]) {
            freePixels.push({ x: xOff + c * (ps + gap), y: r * (ps + gap) });
          }
        }
      }
      xOff += glyph[0].length * (ps + gap) + charGap;
    }

    // Shuffle
    for (let i = freePixels.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [freePixels[i], freePixels[j]] = [freePixels[j], freePixels[i]];
    }

    function drawFreeText(progress) {
      fctx.clearRect(0, 0, totalW, totalH);
      const count = Math.floor(progress * freePixels.length);
      for (let i = 0; i < count; i++) {
        const p = freePixels[i];
        fctx.fillStyle = '#00E68A';
        fctx.fillRect(p.x, p.y, ps, ps);
      }
      // Noise for unrevealed
      for (let i = count; i < freePixels.length; i++) {
        if (Math.random() < 0.2) {
          const p = freePixels[i];
          fctx.fillStyle = '#00E68A';
          fctx.globalAlpha = 0.08;
          fctx.fillRect(p.x, p.y, ps, ps);
          fctx.globalAlpha = 1;
        }
      }
    }

    // Reveal free text with scroll-triggered animation
    const freeSection = document.querySelector('.free-section');
    if (freeSection) {
      const freeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !freeRevealed) {
            freeRevealed = true;
            let prog = 0;
            function animFree() {
              prog += 0.02;
              drawFreeText(Math.min(prog, 1));
              if (prog < 1) requestAnimationFrame(animFree);
            }
            animFree();
            freeObserver.unobserve(freeSection);
          }
        });
      }, { threshold: 0.1 });
      freeObserver.observe(freeSection);
    }
    // Fallback: if not revealed after 8s, just show it
    setTimeout(() => {
      if (!freeRevealed) {
        freeRevealed = true;
        drawFreeText(1);
      }
    }, 8000);
  }


  // ─── Memory Match Puzzle Game ───
  class MemoryMatchPuzzle {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');

      // Responsive sizing
      const vw = window.innerWidth || canvas.parentElement.clientWidth || 360;
      const isMobile = vw < 768;

      // Card and grid dimensions
      this.cols = 4;
      this.rows = 3;
      this.cardW = isMobile ? 60 : 72;
      this.cardH = isMobile ? 68 : 80;
      this.gap = isMobile ? 10 : 12;
      this.padding = isMobile ? 12 : 16;

      const logW = this.cols * this.cardW + (this.cols - 1) * this.gap + this.padding * 2;
      const logH = this.rows * this.cardH + (this.rows - 1) * this.gap + this.padding * 2;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = logW * dpr;
      canvas.height = logH * dpr;
      canvas.style.width = logW + 'px';
      canvas.style.height = logH + 'px';
      this.ctx.scale(dpr, dpr);

      this.W = logW;
      this.H = logH;

      // Game state
      this.matchesFound = 0;
      this.matchesNeeded = 3;
      this.failedAttempts = 0;
      this.maxFails = 8;
      this.state = 'idle'; // idle | firstPick | secondPick | checking | won
      this.firstPick = null;
      this.secondPick = null;
      this.solved = false;

      // Pick 6 random tools from the 9 available
      const allKeys = Object.keys(PIXEL_ART);
      const shuffled = allKeys.slice().sort(() => Math.random() - 0.5);
      this.toolKeys = shuffled.slice(0, 6);

      // Create 12 cards (6 pairs), shuffle positions
      this.cards = [];
      for (let i = 0; i < 6; i++) {
        this.cards.push({ toolKey: this.toolKeys[i], matched: false, flipped: false });
        this.cards.push({ toolKey: this.toolKeys[i], matched: false, flipped: false });
      }
      // Fisher-Yates shuffle
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }

      // Pre-render mini pixel art for each tool into offscreen canvases
      this.miniArts = {};
      const miniSize = isMobile ? 2 : 3; // pixel size for mini art
      for (const key of this.toolKeys) {
        const grid = PIXEL_ART[key];
        if (!grid) continue;
        const rows = grid.length;
        const cols = grid[0] ? grid[0].length : 0;
        const offCanvas = document.createElement('canvas');
        const artW = cols * miniSize;
        const artH = rows * miniSize;
        offCanvas.width = artW;
        offCanvas.height = artH;
        const offCtx = offCanvas.getContext('2d');
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const colorIdx = grid[r][c];
            if (colorIdx === 0) continue;
            const color = PIXEL_PALETTE[colorIdx];
            if (color === 'transparent') continue;
            offCtx.fillStyle = color;
            offCtx.fillRect(c * miniSize, r * miniSize, miniSize, miniSize);
          }
        }
        this.miniArts[key] = { canvas: offCanvas, w: artW, h: artH };
      }

      this._setupEvents();
      this._draw();
    }

    _setupEvents() {
      let lastTapTime = 0;
      const self = this;

      const handler = (e) => {
        e.preventDefault();
        const now = Date.now();
        if (now - lastTapTime < 300) return;
        lastTapTime = now;
        if (self.solved) return;
        if (self.state === 'checking') return;

        // Get click position relative to canvas
        const rect = self.canvas.getBoundingClientRect();
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          clientX = e.clientX;
          clientY = e.clientY;
        }
        const x = (clientX - rect.left) * (self.W / rect.width);
        const y = (clientY - rect.top) * (self.H / rect.height);

        self._handleTap(x, y);
      };

      this.canvas.addEventListener('pointerdown', handler, { passive: false });
      this.canvas.addEventListener('touchstart', handler, { passive: false });
      this.canvas.addEventListener('click', handler);

      // Skip button
      const skipBtn = document.getElementById('puzzleSkip');
      if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
          e.preventDefault();
          self.solved = true;
          self.state = 'won';
          self._onPuzzleSolved();
        });
      }
    }

    _getCardAt(x, y) {
      for (let i = 0; i < this.cards.length; i++) {
        const { cx, cy } = this._cardPosition(i);
        if (x >= cx && x <= cx + this.cardW && y >= cy && y <= cy + this.cardH) {
          return i;
        }
      }
      return -1;
    }

    _cardPosition(idx) {
      const col = idx % this.cols;
      const row = Math.floor(idx / this.cols);
      const cx = this.padding + col * (this.cardW + this.gap);
      const cy = this.padding + row * (this.cardH + this.gap);
      return { cx, cy };
    }

    _handleTap(x, y) {
      const idx = this._getCardAt(x, y);
      if (idx === -1) return;

      const card = this.cards[idx];
      if (card.matched || card.flipped) return;

      if (this.state === 'idle' || this.state === 'firstPick') {
        if (this.state === 'idle') {
          // First card
          card.flipped = true;
          this.firstPick = idx;
          this.state = 'firstPick';
          this._draw();
        } else if (this.state === 'firstPick') {
          // Second card — must be different from first
          if (idx === this.firstPick) return;
          card.flipped = true;
          this.secondPick = idx;
          this.state = 'checking';
          this._draw();

          // Check match after short delay
          setTimeout(() => this._checkMatch(), 800);
        }
      }
    }

    _checkMatch() {
      const card1 = this.cards[this.firstPick];
      const card2 = this.cards[this.secondPick];

      if (card1.toolKey === card2.toolKey) {
        // Match found!
        card1.matched = true;
        card2.matched = true;
        this.matchesFound++;
        this._updateDots();

        if (this.matchesFound >= this.matchesNeeded) {
          this.solved = true;
          this.state = 'won';
          this._draw();
          setTimeout(() => this._onPuzzleSolved(), 500);
          return;
        }
      } else {
        // No match
        card1.flipped = false;
        card2.flipped = false;
        this.failedAttempts++;

        if (this.failedAttempts >= this.maxFails) {
          const skipBtn = document.getElementById('puzzleSkip');
          if (skipBtn) skipBtn.style.display = 'inline-block';
        }
      }

      this.firstPick = null;
      this.secondPick = null;
      this.state = 'idle';
      this._draw();
    }

    _updateDots() {
      const dots = document.querySelectorAll('.match-dot');
      dots.forEach((dot, i) => {
        if (i < this.matchesFound) dot.classList.add('filled');
      });
    }

    _onPuzzleSolved() {
      const rewardEl = document.getElementById('puzzleReward');

      if (rewardEl) {
        rewardEl.style.display = 'flex';
        rewardEl.classList.add('active');

        launchConfetti();

        setTimeout(() => {
          const unlockedEl = document.querySelector('.reward-pixel-text');
          if (unlockedEl) unlockedEl.classList.add('visible');
        }, 400);

        setTimeout(() => {
          const priceEl = document.querySelector('.reward-price');
          if (priceEl) priceEl.classList.add('visible');
        }, 800);

        setTimeout(() => {
          const btnsEl = document.querySelector('.reward-buttons');
          if (btnsEl) btnsEl.classList.add('visible');
        }, 1200);

        setTimeout(() => {
          rewardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    }

    _draw() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.W, this.H);

      for (let i = 0; i < this.cards.length; i++) {
        const card = this.cards[i];
        const { cx, cy } = this._cardPosition(i);

        if (card.matched) {
          // Matched card — green glow background, show art
          ctx.fillStyle = 'rgba(0, 230, 138, 0.12)';
          ctx.strokeStyle = '#00E68A';
          ctx.lineWidth = 2;
          this._roundRect(ctx, cx, cy, this.cardW, this.cardH, 8, true, true);

          // Draw mini pixel art centered
          this._drawCardArt(ctx, card.toolKey, cx, cy);

          // Green checkmark
          ctx.fillStyle = '#00E68A';
          ctx.font = 'bold 12px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillText('✓', cx + this.cardW / 2, cy + this.cardH - 6);
        } else if (card.flipped) {
          // Flipped card — dark background, show art
          ctx.fillStyle = 'rgba(17, 17, 24, 0.9)';
          ctx.strokeStyle = 'rgba(77, 166, 255, 0.5)';
          ctx.lineWidth = 2;
          this._roundRect(ctx, cx, cy, this.cardW, this.cardH, 8, true, true);

          // Draw mini pixel art centered
          this._drawCardArt(ctx, card.toolKey, cx, cy);
        } else {
          // Face-down card — accent border, question mark
          ctx.fillStyle = 'rgba(10, 10, 15, 0.95)';
          ctx.strokeStyle = 'rgba(0, 230, 138, 0.25)';
          ctx.lineWidth = 1.5;
          this._roundRect(ctx, cx, cy, this.cardW, this.cardH, 8, true, true);

          // Pixel question mark
          ctx.fillStyle = '#00E68A';
          ctx.globalAlpha = 0.4;
          ctx.font = 'bold ' + (this.cardW * 0.4) + 'px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('?', cx + this.cardW / 2, cy + this.cardH / 2);
          ctx.globalAlpha = 1;
          ctx.textBaseline = 'alphabetic';

          // Subtle pixel grid pattern
          ctx.fillStyle = 'rgba(0, 230, 138, 0.03)';
          const ps = 4;
          for (let py = cy + 6; py < cy + this.cardH - 6; py += ps + 2) {
            for (let px = cx + 6; px < cx + this.cardW - 6; px += ps + 2) {
              if (Math.random() < 0.3) {
                ctx.fillRect(px, py, ps, ps);
              }
            }
          }
        }
      }

      // Match count indicator on canvas
      for (let i = 0; i < this.matchesNeeded; i++) {
        ctx.fillStyle = '#00E68A';
        ctx.globalAlpha = i < this.matchesFound ? 1 : 0.2;
        const dotX = this.W / 2 - (this.matchesNeeded * 16) / 2 + i * 16 + 4;
        ctx.fillRect(dotX, this.H - 6, 8, 4);
      }
      ctx.globalAlpha = 1;
    }

    _drawCardArt(ctx, toolKey, cx, cy) {
      const art = this.miniArts[toolKey];
      if (!art) return;
      // Center the mini art in the card
      const artX = cx + (this.cardW - art.w) / 2;
      const artY = cy + (this.cardH - art.h) / 2 - 2;
      ctx.drawImage(art.canvas, artX, artY);
    }

    _roundRect(ctx, x, y, w, h, r, fill, stroke) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
      if (fill) ctx.fill();
      if (stroke) ctx.stroke();
    }
  }

  // Init puzzle immediately — no observer, no delay, no duplicates
  const puzzleCanvas = document.getElementById('puzzleCanvas');
  if (puzzleCanvas && !puzzleCanvas._puzzleInit) {
    puzzleCanvas._puzzleInit = true;
    new MemoryMatchPuzzle(puzzleCanvas);
  }


  // ─── Confetti System ───
  function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;

    const parent = canvas.parentElement;
    const dpr = window.devicePixelRatio || 1;
    const W = parent.offsetWidth;
    const H = parent.offsetHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const colors = ['#00E68A', '#4DA6FF', '#A78BFA', '#FF6B9D', '#F7C948', '#EF4444', '#FFFFFF'];
    const particles = [];

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: W / 2,
        y: H / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 4,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.15 + Math.random() * 0.1,
      });
    }

    let frame = 0;
    function animConfetti() {
      ctx.clearRect(0, 0, W, H);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.99;
        p.rotation += p.rotationSpeed;
        p.alpha -= 0.008;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation * Math.PI / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      });

      ctx.globalAlpha = 1;
      frame++;
      if (alive && frame < 180) requestAnimationFrame(animConfetti);
    }
    animConfetti();
  }


  // ─── Animated Pixel Art EdgeBot (Canvas) — Claude-inspired ───
  const robotCanvas = document.getElementById('robotCanvas');
  if (robotCanvas) {
    const rctx = robotCanvas.getContext('2d');
    const isMobileRobot = (window.innerWidth || document.documentElement.clientWidth || 400) < 768;
    const RP = isMobileRobot ? 8 : 11;

    // EdgeBot sprite: 24 wide x 32 tall pixel grid
    // Inspired by Claude's friendly, rounded aesthetic
    // Colors: 0=transparent, 1=accent green, 2=blue, 3=dark fill, 4=pink, 5=gold, 7=white, 8=darker, 9=soft green
    const EDGEBOT = [
      // Row 0-1: Antenna
      '............11..........',
      '............11..........',
      // Row 2: Antenna stem
      '............11..........',
      // Row 3: Head top — rounded
      '.......1111111111.......',
      // Row 4-5: Head expanding
      '.....111111111111111....',
      '....11111111111111111...',
      // Row 6: Head — wide
      '...1113333333333331111..',
      // Row 7: Face — top
      '...1133333333333333111..',
      // Row 8: Eyes
      '...1133311333113333111..',
      // Row 9: Eyes bottom
      '...1133311333113333111..',
      // Row 10: Face middle
      '...1133333333333333111..',
      // Row 11: Smile
      '...1133332222233333111..',
      // Row 12: Below smile
      '...1133333333333333111..',
      // Row 13: Head bottom — rounded
      '....11133333333331111...',
      // Row 14: Head base
      '.....111111111111111....',
      // Row 15: Neck
      '..........111111........',
      // Row 16: Shoulders
      '......11111111111111....',
      // Row 17: Body top — with arm stubs
      '..11..13333333333331.11.',
      // Row 18: Body
      '..11..13333333333331.11.',
      // Row 19: Body — core glow
      '..11..13335555333331.11.',
      // Row 20: Body — core glow
      '..11..13335555333331.11.',
      // Row 21: Body
      '..11..13333333333331.11.',
      // Row 22: Body bottom
      '......13333333333331....',
      // Row 23: Body base
      '.......1111111111111....',
      // Row 24: Gap
      '........................',
      // Row 25: Hover disc — top
      '.......222222222222.....',
      // Row 26: Hover disc — center bright
      '......22222222222222....',
      // Row 27: Hover disc — bottom
      '.......222222222222.....',
      // Row 28-31: Glow trails
      '.........22222222.......',
      '..........222222........',
      '...........2222.........',
      '............22..........',
    ];

    const robotGrid = EDGEBOT.map(row => row.split('').map(ch => ch === '.' ? 0 : parseInt(ch)));
    const RCOLS = robotGrid[0].length;
    const RROWS = robotGrid.length;

    const rLogW = RCOLS * RP;
    const rLogH = RROWS * RP;
    const rdpr = window.devicePixelRatio || 1;
    robotCanvas.width = rLogW * rdpr;
    robotCanvas.height = rLogH * rdpr;
    robotCanvas.style.width = rLogW + 'px';
    robotCanvas.style.height = rLogH + 'px';
    rctx.scale(rdpr, rdpr);

    const ROBOT_COLORS = {
      0: null,
      1: '#00E68A',  // green accent — outline, antenna
      2: '#4DA6FF',  // blue — hover disc
      3: '#1A1A2E',  // dark fill — body/face interior
      4: '#FF6B9D',  // pink
      5: '#F7C948',  // gold — core glow
      7: '#FFFFFF',  // white
      8: '#0D0D14',  // darker
      9: '#00B368',  // soft green
    };

    let robotFrame = 0;
    let robotBlinkTimer = 0;

    function drawEdgeBot() {
      rctx.clearRect(0, 0, rLogW, rLogH);
      robotFrame++;
      robotBlinkTimer++;

      // Blink: close eyes every ~240 frames for 8 frames
      const isBlinking = robotBlinkTimer > 240 && robotBlinkTimer < 250;
      if (robotBlinkTimer > 250) robotBlinkTimer = 0;

      // Breathing — subtle vertical offset for body rows
      const breathOffset = Math.sin(robotFrame * 0.03) * 0.5;

      // Core glow pulse
      const corePulse = 0.5 + Math.sin(robotFrame * 0.06) * 0.5;

      // Hover disc shimmer
      const hoverPulse = 0.4 + Math.sin(robotFrame * 0.08) * 0.3;

      for (let r = 0; r < RROWS; r++) {
        for (let c = 0; c < RCOLS; c++) {
          let colorIdx = robotGrid[r][c];
          if (colorIdx === 0) continue;

          let drawX = c * RP;
          let drawY = r * RP;

          // ─ Antenna glow (rows 0-2) ─
          if (r <= 2 && colorIdx === 1) {
            const glowPulse = 0.4 + Math.sin(robotFrame * 0.08) * 0.6;
            rctx.fillStyle = '#00E68A';
            rctx.globalAlpha = 0.3 + glowPulse * 0.7;
            rctx.fillRect(drawX, drawY, RP - 1, RP - 1);
            // Glow halo around antenna tip (row 0 only)
            if (r === 0) {
              rctx.fillStyle = '#00E68A';
              rctx.globalAlpha = glowPulse * 0.15;
              rctx.fillRect(drawX - RP, drawY - RP, RP * 3, RP * 3);
            }
            rctx.globalAlpha = 1;
            continue;
          }

          // ─ Eye blink (rows 8-9) ─
          if (isBlinking && (r === 8 || r === 9) && colorIdx === 1) {
            // Replace eye with dark fill during blink
            rctx.fillStyle = ROBOT_COLORS[3];
            rctx.fillRect(drawX, drawY, RP - 1, RP - 1);
            continue;
          }

          // ─ Smile animation — subtle width change (row 11) ─
          if (r === 11 && colorIdx === 2) {
            const smilePhase = Math.floor(robotFrame / 60) % 3;
            // On phase 1, skip outer smile pixels for a smaller smile
            if (smilePhase === 1 && (c === 9 || c === 15)) {
              rctx.fillStyle = ROBOT_COLORS[3];
              rctx.fillRect(drawX, drawY, RP - 1, RP - 1);
              continue;
            }
          }

          // ─ Arm wave (rows 17-21, cols 2-3 and 22-23) ─
          if ((c <= 3 || c >= 21) && r >= 17 && r <= 21 && colorIdx === 1) {
            const side = c <= 3 ? 0 : 1;
            const wave = Math.sin(robotFrame * 0.04 + side * 2.5) * 1.5;
            const waveY = drawY + Math.round(wave) * RP;
            rctx.fillStyle = ROBOT_COLORS[1];
            if (waveY >= 0 && waveY < rLogH) {
              rctx.fillRect(drawX, waveY, RP - 1, RP - 1);
            }
            continue;
          }

          // ─ Core glow (rows 19-20, color 5 = gold) ─
          if ((r === 19 || r === 20) && colorIdx === 5) {
            rctx.fillStyle = '#F7C948';
            rctx.globalAlpha = 0.4 + corePulse * 0.6;
            rctx.fillRect(drawX, drawY, RP - 1, RP - 1);
            // Glow halo
            rctx.globalAlpha = corePulse * 0.12;
            rctx.fillRect(drawX - 1, drawY - 1, RP + 1, RP + 1);
            rctx.globalAlpha = 1;
            continue;
          }

          // ─ Hover disc (rows 25-31, color 2) — shimmer ─
          if (r >= 25 && colorIdx === 2) {
            const discFade = r >= 28 ? (0.6 - (r - 28) * 0.15) : 0.8;
            rctx.fillStyle = '#4DA6FF';
            rctx.globalAlpha = Math.max(0.05, discFade * hoverPulse);
            rctx.fillRect(drawX, drawY, RP - 1, RP - 1);
            rctx.globalAlpha = 1;
            continue;
          }

          // ─ Body breathing offset (rows 16-23) ─
          if (r >= 16 && r <= 23) {
            drawY += Math.round(breathOffset);
          }

          // ─ Default draw ─
          const color = ROBOT_COLORS[colorIdx];
          if (color) {
            rctx.fillStyle = color;
            rctx.fillRect(drawX, drawY, RP - 1, RP - 1);
          }
        }
      }

      requestAnimationFrame(drawEdgeBot);
    }

    // Start EdgeBot animation immediately
    drawEdgeBot();
  }


  // ─── Glitch Effect on $0 ───
  const glitchEl = document.querySelector('.glitch-price');
  if (glitchEl) {
    setInterval(() => {
      glitchEl.classList.add('glitching');
      setTimeout(() => glitchEl.classList.remove('glitching'), 200);
    }, 3000);
  }


  // ─── Magnetic Button Effect ───
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.25;
      const dy = (e.clientY - cy) * 0.25;
      btn.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });


  // ─── Smooth Anchor Scroll ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
