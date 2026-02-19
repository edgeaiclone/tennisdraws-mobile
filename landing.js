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


  // ─── Djokovic Face Pixel Puzzle ───
  class DjokovicPuzzle {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');

      const vw = window.innerWidth || canvas.parentElement.clientWidth || 360;
      const isMobile = vw < 768;

      // Grid: 24 cols x 32 rows
      this.gridCols = 24;
      this.gridRows = 32;
      this.ps = isMobile ? 6 : 9; // pixel size
      this.padding = isMobile ? 12 : 20;

      // Space for loose pieces on the right
      this.pieceAreaW = isMobile ? 80 : 120;

      const gridW = this.gridCols * this.ps;
      const gridH = this.gridRows * this.ps;
      this.gridOffX = this.padding;
      this.gridOffY = this.padding;

      const logW = gridW + this.pieceAreaW + this.padding * 3;
      const logH = gridH + this.padding * 2;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = logW * dpr;
      canvas.height = logH * dpr;
      canvas.style.width = logW + 'px';
      canvas.style.height = logH + 'px';
      this.ctx.scale(dpr, dpr);
      this.W = logW;
      this.H = logH;

      // Djokovic pixel face — 24x32
      // Colors: 0=transparent, 1=green, 2=blue(headband), 3=skin, 4=hair(dark), 5=gold, 6=red, 7=white, 8=dark, 9=darker
      this.face = [
        '........................', // 0
        '......44444444444.......',  // 1
        '.....4444444444444......',  // 2
        '....444444444444444.....',  // 3
        '...44444444444444444....',  // 4
        '..7777777777777777777...',  // 5 headband
        '..7777777777777777777...',  // 6 headband
        '..4433333333333333344...',  // 7
        '..4433333333333333344...',  // 8
        '..3333333333333333333...',  // 9
        '..3338833338833333333...',  // 10 eyes
        '..3338833338833333333...',  // 11 eyes
        '..3333333333333333333...',  // 12
        '..3333333333333333333...',  // 13
        '..3333388888833333333...',  // 14 eyebrows
        '..3333333333333333333...',  // 15
        '..3333333883333333333...',  // 16 nose
        '..3333333883333333333...',  // 17 nose
        '..3333333333333333333...',  // 18
        '..3333366666663333333...',  // 19 mouth
        '..3333367777763333333...',  // 20 mouth/teeth
        '..3333366666663333333...',  // 21 mouth
        '..3333333333333333333...',  // 22
        '...33333333333333333....',  // 23 jaw
        '....333333333333333.....',  // 24 jaw
        '.....3333333333333......',  // 25 chin
        '......33333333333.......',  // 26 chin
        '.......333333333........',  // 27
        '........................',  // 28
        '..1111111111111111111...',  // 29 shirt
        '..1111115551111111111...',  // 30 shirt
        '..1111111111111111111...',  // 31 shirt
      ].map(row => row.split('').map(ch => ch === '.' ? 0 : parseInt(ch)));

      // Define 2 missing pieces (row range, col range)
      // Piece A: headband area (rows 5-6, cols 10-17) — 2 rows x 8 cols
      // Piece B: chin/mouth area (rows 23-26, cols 7-16) — 4 rows x 10 cols
      this.pieces = [
        { id: 'A', r1: 5, r2: 6, c1: 10, c2: 17, placed: false },
        { id: 'B', r1: 23, r2: 26, c1: 7, c2: 16, placed: false },
      ];

      // Position loose pieces in the right area
      const pieceAreaX = gridW + this.padding * 2;
      this.loosePieces = this.pieces.map((p, i) => {
        const pw = (p.c2 - p.c1 + 1) * this.ps;
        const ph = (p.r2 - p.r1 + 1) * this.ps;
        return {
          ...p,
          looseX: pieceAreaX + (this.pieceAreaW - pw) / 2,
          looseY: this.padding + 20 + i * (ph + 40),
          w: pw,
          h: ph,
        };
      });

      this.selectedPiece = null; // index of selected loose piece
      this.state = 'idle'; // idle | piecePicked | solved
      this.wrongFlash = null; // {slotIdx, timer}
      this.failedAttempts = 0;
      this.solved = false;

      this._setupEvents();
      this._draw();
    }

    _setupEvents() {
      let lastTapTime = 0;
      const self = this;

      const handler = (e) => {
        e.preventDefault();
        const now = Date.now();
        if (now - lastTapTime < 250) return;
        lastTapTime = now;
        if (self.solved) return;

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

      const skipBtn = document.getElementById('puzzleSkip');
      if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
          e.preventDefault();
          self.solved = true;
          self.state = 'solved';
          self.pieces.forEach(p => p.placed = true);
          self._draw();
          self._onPuzzleSolved();
        });
      }
    }

    _handleTap(x, y) {
      if (this.state === 'idle') {
        // Check if tapping a loose piece
        for (let i = 0; i < this.loosePieces.length; i++) {
          const lp = this.loosePieces[i];
          if (lp.placed) continue;
          if (x >= lp.looseX && x <= lp.looseX + lp.w &&
              y >= lp.looseY && y <= lp.looseY + lp.h) {
            this.selectedPiece = i;
            this.state = 'piecePicked';
            this._draw();
            return;
          }
        }
      } else if (this.state === 'piecePicked') {
        // Check if tapping the correct slot on the face
        const piece = this.loosePieces[this.selectedPiece];

        // Check each slot
        for (let si = 0; si < this.pieces.length; si++) {
          const slot = this.pieces[si];
          if (slot.placed) continue;

          const slotX = this.gridOffX + slot.c1 * this.ps;
          const slotY = this.gridOffY + slot.r1 * this.ps;
          const slotW = (slot.c2 - slot.c1 + 1) * this.ps;
          const slotH = (slot.r2 - slot.r1 + 1) * this.ps;

          if (x >= slotX && x <= slotX + slotW && y >= slotY && y <= slotY + slotH) {
            if (si === this.selectedPiece) {
              // Correct slot!
              piece.placed = true;
              slot.placed = true;
              this.selectedPiece = null;
              this.state = 'idle';
              this._draw();

              // Check if all placed
              if (this.pieces.every(p => p.placed)) {
                this.solved = true;
                this.state = 'solved';
                setTimeout(() => this._onPuzzleSolved(), 500);
              }
              return;
            } else {
              // Wrong slot — flash red
              this.wrongFlash = { slotIdx: si, timer: 20 };
              this.failedAttempts++;
              this.selectedPiece = null;
              this.state = 'idle';
              this._draw();
              this._animateWrongFlash();

              if (this.failedAttempts >= 6) {
                const skipBtn = document.getElementById('puzzleSkip');
                if (skipBtn) skipBtn.style.display = 'inline-block';
              }
              return;
            }
          }
        }

        // Tapped elsewhere — also check if re-tapping a loose piece to switch selection
        for (let i = 0; i < this.loosePieces.length; i++) {
          const lp = this.loosePieces[i];
          if (lp.placed) continue;
          if (x >= lp.looseX && x <= lp.looseX + lp.w &&
              y >= lp.looseY && y <= lp.looseY + lp.h) {
            this.selectedPiece = i;
            this._draw();
            return;
          }
        }

        // Deselect
        this.selectedPiece = null;
        this.state = 'idle';
        this._draw();
      }
    }

    _animateWrongFlash() {
      if (!this.wrongFlash || this.wrongFlash.timer <= 0) {
        this.wrongFlash = null;
        this._draw();
        return;
      }
      this.wrongFlash.timer--;
      this._draw();
      requestAnimationFrame(() => this._animateWrongFlash());
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
      const ps = this.ps;
      ctx.clearRect(0, 0, this.W, this.H);

      // Skin color map
      const FACE_COLORS = {
        0: null,
        1: '#00E68A',  // green shirt
        2: '#4DA6FF',  // blue
        3: '#D4A574',  // skin
        4: '#2C1810',  // hair (dark brown)
        5: '#F7C948',  // gold detail
        6: '#CC4444',  // lips/mouth
        7: '#FFFFFF',  // white (headband + teeth)
        8: '#1A1A2E',  // dark (eyes, eyebrows)
        9: '#0D0D14',  // darker
      };

      // Draw the face grid
      for (let r = 0; r < this.gridRows; r++) {
        for (let c = 0; c < this.gridCols; c++) {
          const colorIdx = this.face[r] ? this.face[r][c] : 0;
          if (colorIdx === 0) continue;

          // Check if this pixel is in a missing (unplaced) piece
          let inMissingPiece = false;
          for (const p of this.pieces) {
            if (!p.placed && r >= p.r1 && r <= p.r2 && c >= p.c1 && c <= p.c2) {
              inMissingPiece = true;
              break;
            }
          }

          const drawX = this.gridOffX + c * ps;
          const drawY = this.gridOffY + r * ps;

          if (inMissingPiece) {
            // Draw a dark hatched placeholder
            ctx.fillStyle = '#0A0A0F';
            ctx.fillRect(drawX, drawY, ps, ps);
            // Hatching pattern
            if ((r + c) % 2 === 0) {
              ctx.fillStyle = 'rgba(0, 230, 138, 0.06)';
              ctx.fillRect(drawX, drawY, ps, ps);
            }
          } else {
            const color = FACE_COLORS[colorIdx];
            if (color) {
              ctx.fillStyle = color;
              ctx.fillRect(drawX, drawY, ps - (ps > 6 ? 1 : 0), ps - (ps > 6 ? 1 : 0));
            }
          }
        }
      }

      // Draw slot outlines for missing pieces
      for (let si = 0; si < this.pieces.length; si++) {
        const slot = this.pieces[si];
        if (slot.placed) continue;

        const slotX = this.gridOffX + slot.c1 * ps;
        const slotY = this.gridOffY + slot.r1 * ps;
        const slotW = (slot.c2 - slot.c1 + 1) * ps;
        const slotH = (slot.r2 - slot.r1 + 1) * ps;

        // Flash red on wrong attempt
        if (this.wrongFlash && this.wrongFlash.slotIdx === si && this.wrongFlash.timer > 0) {
          ctx.strokeStyle = '#EF4444';
          ctx.lineWidth = 3;
          ctx.setLineDash([]);
          ctx.strokeRect(slotX, slotY, slotW, slotH);
          ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
          ctx.fillRect(slotX, slotY, slotW, slotH);
        } else {
          // Dashed outline
          ctx.strokeStyle = 'rgba(0, 230, 138, 0.4)';
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 4]);
          ctx.strokeRect(slotX, slotY, slotW, slotH);
        }
        ctx.setLineDash([]);

        // Label in center
        ctx.fillStyle = 'rgba(0, 230, 138, 0.3)';
        ctx.font = 'bold ' + Math.max(10, ps * 1.2) + 'px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('?', slotX + slotW / 2, slotY + slotH / 2);
        ctx.textBaseline = 'alphabetic';
      }

      // Draw loose pieces on the right side
      const pieceAreaX = this.gridOffX + this.gridCols * ps + this.padding;

      // Label
      ctx.fillStyle = 'rgba(0, 230, 138, 0.5)';
      ctx.font = 'bold 10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('PIECES', pieceAreaX + this.pieceAreaW / 2, this.padding + 10);

      for (let i = 0; i < this.loosePieces.length; i++) {
        const lp = this.loosePieces[i];
        if (lp.placed) continue;

        const isSelected = this.selectedPiece === i;

        // Draw piece background
        ctx.fillStyle = isSelected ? 'rgba(0, 230, 138, 0.12)' : 'rgba(17, 17, 24, 0.8)';
        ctx.strokeStyle = isSelected ? '#00E68A' : 'rgba(0, 230, 138, 0.25)';
        ctx.lineWidth = isSelected ? 2.5 : 1.5;
        this._roundRect(ctx, lp.looseX - 4, lp.looseY - 4, lp.w + 8, lp.h + 8, 6, true, true);

        // Draw the piece pixel art
        for (let r = lp.r1; r <= lp.r2; r++) {
          for (let c = lp.c1; c <= lp.c2; c++) {
            const colorIdx = this.face[r] ? this.face[r][c] : 0;
            if (colorIdx === 0) continue;
            const color = FACE_COLORS[colorIdx];
            if (!color) continue;
            ctx.fillStyle = color;
            const px = lp.looseX + (c - lp.c1) * ps;
            const py = lp.looseY + (r - lp.r1) * ps;
            ctx.fillRect(px, py, ps - (ps > 6 ? 1 : 0), ps - (ps > 6 ? 1 : 0));
          }
        }

        // Piece label
        ctx.fillStyle = isSelected ? '#00E68A' : 'rgba(255,255,255,0.3)';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(isSelected ? 'SELECTED' : 'TAP', lp.looseX + lp.w / 2, lp.looseY + lp.h + 16);
      }

      // Progress indicator at bottom
      const placed = this.pieces.filter(p => p.placed).length;
      ctx.fillStyle = '#00E68A';
      ctx.font = 'bold 11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.globalAlpha = 0.6;
      ctx.fillText(placed + '/2 pieces placed', this.W / 2, this.H - 8);
      ctx.globalAlpha = 1;
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
    new DjokovicPuzzle(puzzleCanvas);
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


  // ─── Dynamic AI Wanderer — Full-Width Canvas ───
  const aiCanvas = document.getElementById('aiCanvas');
  if (aiCanvas) {
    const actx = aiCanvas.getContext('2d');
    const aiSection = document.getElementById('ai-section');

    // Same sprite as before but rendered on a full-width canvas and moving
    const AI_SPRITE = [
      '............11..........',
      '............11..........',
      '............11..........',
      '.......1111111111.......',
      '.....111111111111111....',
      '....11111111111111111...',
      '...1113333333333331111..',
      '...1133333333333333111..',
      '...1133311333113333111..',
      '...1133311333113333111..',
      '...1133333333333333111..',
      '...1133332222233333111..',
      '...1133333333333333111..',
      '....11133333333331111...',
      '.....111111111111111....',
      '..........111111........',
      '......11111111111111....',
      '..11..13333333333331.11.',
      '..11..13333333333331.11.',
      '..11..13335555333331.11.',
      '..11..13335555333331.11.',
      '..11..13333333333331.11.',
      '......13333333333331....',
      '.......1111111111111....',
      '........................',
      '.......222222222222.....',
      '......22222222222222....',
      '.......222222222222.....',
      '.........22222222.......',
      '..........222222........',
      '...........2222.........',
      '............22..........',
    ];

    const spriteGrid = AI_SPRITE.map(row => row.split('').map(ch => ch === '.' ? 0 : parseInt(ch)));
    const SCOLS = spriteGrid[0].length;
    const SROWS = spriteGrid.length;

    const AI_COLORS = {
      0: null, 1: '#00E68A', 2: '#4DA6FF', 3: '#1A1A2E',
      4: '#FF6B9D', 5: '#F7C948', 7: '#FFFFFF', 8: '#0D0D14', 9: '#00B368',
    };

    let aW, aH;
    const isMobileAI = (window.innerWidth || 400) < 768;
    const SP = isMobileAI ? 5 : 7; // sprite pixel size
    const spriteW = SCOLS * SP;
    const spriteH = SROWS * SP;

    // Position & velocity
    let ax, ay, avx, avy;
    let aiFrame = 0;
    let aiBlinkTimer = 0;
    let dirChangeTimer = 0;

    // Trail for particle effect
    const trail = [];
    const TRAIL_MAX = 20;

    function resizeAI() {
      if (!aiSection) return;
      aW = aiSection.offsetWidth;
      aH = aiSection.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      aiCanvas.width = aW * dpr;
      aiCanvas.height = aH * dpr;
      aiCanvas.style.width = aW + 'px';
      aiCanvas.style.height = aH + 'px';
      actx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initAIPosition() {
      resizeAI();
      ax = aW * 0.3 + Math.random() * aW * 0.4;
      ay = aH * 0.3 + Math.random() * aH * 0.3;
      avx = (Math.random() - 0.5) * 1.5;
      avy = (Math.random() - 0.5) * 1.0;
    }
    initAIPosition();
    window.addEventListener('resize', resizeAI);

    function drawSpriteAt(x, y) {
      aiFrame++;
      aiBlinkTimer++;

      const isBlinking = aiBlinkTimer > 240 && aiBlinkTimer < 250;
      if (aiBlinkTimer > 250) aiBlinkTimer = 0;

      const corePulse = 0.5 + Math.sin(aiFrame * 0.06) * 0.5;
      const hoverPulse = 0.4 + Math.sin(aiFrame * 0.08) * 0.3;
      const breathOffset = Math.sin(aiFrame * 0.03) * 0.5;

      for (let r = 0; r < SROWS; r++) {
        for (let c = 0; c < SCOLS; c++) {
          let colorIdx = spriteGrid[r][c];
          if (colorIdx === 0) continue;

          let drawX = x + c * SP;
          let drawY = y + r * SP;

          // Antenna glow
          if (r <= 2 && colorIdx === 1) {
            const gp = 0.4 + Math.sin(aiFrame * 0.08) * 0.6;
            actx.fillStyle = '#00E68A';
            actx.globalAlpha = 0.3 + gp * 0.7;
            actx.fillRect(drawX, drawY, SP - 1, SP - 1);
            if (r === 0) {
              actx.globalAlpha = gp * 0.15;
              actx.fillRect(drawX - SP, drawY - SP, SP * 3, SP * 3);
            }
            actx.globalAlpha = 1;
            continue;
          }

          // Eye blink
          if (isBlinking && (r === 8 || r === 9) && colorIdx === 1) {
            actx.fillStyle = AI_COLORS[3];
            actx.fillRect(drawX, drawY, SP - 1, SP - 1);
            continue;
          }

          // Core glow
          if ((r === 19 || r === 20) && colorIdx === 5) {
            actx.fillStyle = '#F7C948';
            actx.globalAlpha = 0.4 + corePulse * 0.6;
            actx.fillRect(drawX, drawY, SP - 1, SP - 1);
            actx.globalAlpha = corePulse * 0.12;
            actx.fillRect(drawX - 1, drawY - 1, SP + 1, SP + 1);
            actx.globalAlpha = 1;
            continue;
          }

          // Hover disc shimmer
          if (r >= 25 && colorIdx === 2) {
            const discFade = r >= 28 ? (0.6 - (r - 28) * 0.15) : 0.8;
            actx.fillStyle = '#4DA6FF';
            actx.globalAlpha = Math.max(0.05, discFade * hoverPulse);
            actx.fillRect(drawX, drawY, SP - 1, SP - 1);
            actx.globalAlpha = 1;
            continue;
          }

          // Body breathing
          if (r >= 16 && r <= 23) {
            drawY += Math.round(breathOffset);
          }

          // Arm wave
          if ((c <= 3 || c >= 21) && r >= 17 && r <= 21 && colorIdx === 1) {
            const side = c <= 3 ? 0 : 1;
            const wave = Math.sin(aiFrame * 0.04 + side * 2.5) * 1.5;
            const waveY = drawY + Math.round(wave) * SP;
            actx.fillStyle = AI_COLORS[1];
            actx.fillRect(drawX, waveY, SP - 1, SP - 1);
            continue;
          }

          const color = AI_COLORS[colorIdx];
          if (color) {
            actx.fillStyle = color;
            actx.fillRect(drawX, drawY, SP - 1, SP - 1);
          }
        }
      }
    }

    function drawTrail() {
      for (let i = 0; i < trail.length; i++) {
        const t = trail[i];
        const age = i / trail.length; // 0 = oldest, 1 = newest
        actx.fillStyle = '#00E68A';
        actx.globalAlpha = age * 0.15;
        const size = 3 + age * 4;
        actx.beginPath();
        actx.arc(t.x + spriteW / 2, t.y + spriteH / 2, size, 0, Math.PI * 2);
        actx.fill();
      }
      actx.globalAlpha = 1;
    }

    let aiAnimId = null;

    function loopAI() {
      actx.clearRect(0, 0, aW, aH);

      // Update direction periodically
      dirChangeTimer++;
      if (dirChangeTimer > 120 + Math.random() * 120) {
        dirChangeTimer = 0;
        avx += (Math.random() - 0.5) * 1.2;
        avy += (Math.random() - 0.5) * 0.8;
        // Speed limit
        const speed = Math.sqrt(avx * avx + avy * avy);
        const maxSpeed = isMobileAI ? 1.5 : 2.0;
        if (speed > maxSpeed) {
          avx = (avx / speed) * maxSpeed;
          avy = (avy / speed) * maxSpeed;
        }
      }

      // Move
      ax += avx;
      ay += avy;

      // Bounce off edges
      const margin = 20;
      if (ax < margin) { ax = margin; avx = Math.abs(avx) * 0.7; }
      if (ax + spriteW > aW - margin) { ax = aW - margin - spriteW; avx = -Math.abs(avx) * 0.7; }
      if (ay < margin) { ay = margin; avy = Math.abs(avy) * 0.7; }
      if (ay + spriteH > aH - margin) { ay = aH - margin - spriteH; avy = -Math.abs(avy) * 0.7; }

      // Damping
      avx *= 0.998;
      avy *= 0.998;

      // Record trail
      if (aiFrame % 3 === 0) {
        trail.push({ x: ax, y: ay });
        if (trail.length > TRAIL_MAX) trail.shift();
      }

      // Draw trail then sprite
      drawTrail();
      drawSpriteAt(ax, ay);

      aiAnimId = requestAnimationFrame(loopAI);
    }

    // Start when section is visible
    const aiObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!aiAnimId) loopAI();
        } else {
          if (aiAnimId) { cancelAnimationFrame(aiAnimId); aiAnimId = null; }
        }
      });
    }, { threshold: 0.05 });
    if (aiSection) aiObserver.observe(aiSection);

    // Fallback: start after 3s if observer doesn't fire
    setTimeout(() => { if (!aiAnimId) loopAI(); }, 3000);
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
