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


  // ─── Stat Counter Animation ───
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
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

    function startFreeReveal() {
      if (freeRevealed) return;
      freeRevealed = true;
      let prog = 0;
      function animFree() {
        prog += 0.02;
        drawFreeText(Math.min(prog, 1));
        if (prog < 1) requestAnimationFrame(animFree);
      }
      animFree();
    }

    const freeSection = document.querySelector('.free-section');
    if (freeSection) {
      const freeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startFreeReveal();
            freeObserver.unobserve(freeSection);
          }
        });
      }, { threshold: 0.3 });
      freeObserver.observe(freeSection);
      // Fallback: reveal after 6s if observer hasn't fired
      setTimeout(startFreeReveal, 6000);
    }
  }


  // ─── Tennis Rally Puzzle Game ───
  class TennisRallyPuzzle {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');

      // Responsive sizing
      const isMobile = window.innerWidth < 768;
      const logW = isMobile ? Math.min(340, Math.max(280, window.innerWidth - 40)) : 360;
      const vh = window.innerHeight || 800;
      const logH = isMobile ? Math.min(460, Math.max(360, vh * 0.55)) : 480;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = logW * dpr;
      canvas.height = logH * dpr;
      canvas.style.width = logW + 'px';
      canvas.style.height = logH + 'px';
      this.ctx.scale(dpr, dpr);

      this.W = logW;
      this.H = logH;
      this.ps = isMobile ? 4 : 5;

      // Game state
      this.ralliesWon = 0;
      this.ralliesNeeded = 3;
      this.misses = 0;
      this.maxMisses = 5;
      this.state = 'idle'; // idle | falling | hit | miss | won
      this.ballX = this.W / 2;
      this.ballY = 40;
      this.ballVY = 0;
      this.ballVX = 0;
      this.baseSpeed = isMobile ? 1.8 : 2.0; // slower for playability
      this.racketY = this.H - 70;
      this.racketX = this.W / 2;
      this.netY = this.H * 0.4;
      this.hitZoneSize = isMobile ? 70 : 60; // much more generous hit zone
      this.flashTimer = 0;
      this.flashColor = null;
      this.solved = false;
      this.showSkip = false;
      this.clickBlocked = false; // prevent double-fire from click+touch

      this._setupEvents();
      this._startIdle();
    }

    _setupEvents() {
      let lastTapTime = 0;

      const self = this;
      const handler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Prevent double-firing from both click and touchstart
        const now = Date.now();
        if (now - lastTapTime < 250) return;
        lastTapTime = now;

        if (self.solved) return;

        console.log('[PUZZLE] tap state=' + self.state + ' ballY=' + Math.round(self.ballY));
        if (self.state === 'falling') {
          // Check hit zone — very generous
          if (self.ballY >= self.racketY - self.hitZoneSize && self.ballY <= self.racketY + 20) {
            self._onHit();
          } else {
            console.log('[PUZZLE] tap during fall but out of zone, ballY=' + Math.round(self.ballY) + ' zone=' + (self.racketY - self.hitZoneSize) + '-' + (self.racketY + 20));
          }
        } else if (self.state === 'idle') {
          self._launchBall();
          console.log('[PUZZLE] ball launched! speed=' + self.ballVY);
        }
      };

      this.canvas.addEventListener('click', handler);
      this.canvas.addEventListener('touchstart', handler, { passive: false });

      // Skip button
      const skipBtn = document.getElementById('puzzleSkip');
      if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.solved = true;
          this.state = 'won';
          this._onPuzzleSolved();
        });
      }
    }

    _startIdle() {
      this.state = 'idle';
      this.ballX = this.W / 2;
      this.ballY = 40;
      this._loop();
    }

    _launchBall() {
      this.state = 'falling';
      this.ballY = 30;
      // Ball spawns closer to center for easier play
      this.ballX = this.W / 2 + (Math.random() - 0.5) * (this.W * 0.25);
      this.ballVY = this.baseSpeed + (this.ralliesWon * 0.3); // gentler speed ramp
      this.ballVX = (Math.random() - 0.5) * 0.8;
      this.racketX = this.ballX + (Math.random() - 0.5) * 20;
    }

    _onHit() {
      this.state = 'hit';
      this.ralliesWon++;
      this.flashColor = '#00E68A';
      this.flashTimer = 15;

      this._updateDots();

      if (this.ralliesWon >= this.ralliesNeeded) {
        this.solved = true;
        setTimeout(() => {
          this.state = 'won';
          this._onPuzzleSolved();
        }, 600);
      } else {
        // Ball bounces back up
        this.ballVY = -(this.baseSpeed + this.ralliesWon * 0.3) * 1.8;
        setTimeout(() => {
          this.state = 'idle';
        }, 1000);
      }
    }

    _onMiss() {
      this.state = 'miss';
      this.misses++;
      this.flashColor = '#EF4444';
      this.flashTimer = 15;

      if (this.misses >= this.maxMisses) {
        this.showSkip = true;
        const skipBtn = document.getElementById('puzzleSkip');
        if (skipBtn) skipBtn.style.display = 'inline-block';
      }

      setTimeout(() => {
        this.state = 'idle';
        this.ballY = 40;
        this.ballX = this.W / 2;
      }, 600);
    }

    _updateDots() {
      const dots = document.querySelectorAll('.rally-dot');
      dots.forEach((dot, i) => {
        if (i < this.ralliesWon) dot.classList.add('filled');
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

        // Scroll to reward
        setTimeout(() => {
          rewardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    }

    _draw() {
      const ctx = this.ctx;
      const ps = this.ps;
      ctx.clearRect(0, 0, this.W, this.H);

      // Flash effect
      if (this.flashTimer > 0) {
        ctx.fillStyle = this.flashColor;
        ctx.globalAlpha = this.flashTimer / 30;
        ctx.fillRect(0, 0, this.W, this.H);
        ctx.globalAlpha = 1;
        this.flashTimer--;
      }

      // Draw pixel court
      ctx.fillStyle = '#0D1A0D';
      ctx.fillRect(20, 20, this.W - 40, this.H - 40);

      // Court lines
      ctx.fillStyle = '#1A3A1A';
      for (let y = 20; y < this.H - 20; y += ps + 1) {
        ctx.fillRect(20, y, ps, ps);
        ctx.fillRect(this.W - 20 - ps, y, ps, ps);
      }
      for (let x = 20; x < this.W - 20; x += ps + 1) {
        ctx.fillRect(x, 20, ps, ps);
        ctx.fillRect(x, this.H - 20 - ps, ps, ps);
      }

      // Net
      ctx.fillStyle = '#FFFFFF';
      for (let x = 20; x < this.W - 20; x += ps * 2) {
        ctx.globalAlpha = 0.6;
        ctx.fillRect(x, this.netY, ps, ps * 2);
        ctx.globalAlpha = 1;
      }

      // Hit zone indicator — show a clear green line where to tap
      if (this.state === 'falling') {
        const distToRacket = Math.abs(this.ballY - this.racketY);
        if (distToRacket < this.hitZoneSize * 2.5) {
          const intensity = 1 - (distToRacket / (this.hitZoneSize * 2.5));
          ctx.fillStyle = '#00E68A';
          ctx.globalAlpha = intensity * 0.25;
          ctx.fillRect(20, this.racketY - this.hitZoneSize, this.W - 40, this.hitZoneSize + 20);
          ctx.globalAlpha = 1;
        }
      }

      // Racket — wider and more visible
      ctx.fillStyle = '#FFFFFF';
      const rw = ps * 12;
      const rx = this.state === 'falling' ?
        this.racketX + (this.ballX - this.racketX) * 0.5 :
        this.W / 2;
      for (let i = 0; i < 12; i++) {
        ctx.fillRect(rx - rw / 2 + i * (ps + 1), this.racketY, ps, ps * 2);
      }

      // Ball — larger and more visible
      ctx.fillStyle = '#F7C948';
      const bps = ps * 2;
      ctx.fillRect(this.ballX - bps, this.ballY - bps, bps * 2, bps * 2);
      // Ball trail when falling
      if (this.state === 'falling') {
        ctx.fillStyle = '#F7C948';
        ctx.globalAlpha = 0.2;
        ctx.fillRect(this.ballX - bps, this.ballY - bps - 8, bps * 2, 8);
        ctx.globalAlpha = 0.1;
        ctx.fillRect(this.ballX - bps, this.ballY - bps - 16, bps * 2, 8);
        ctx.globalAlpha = 1;
      }
      // Ball shine
      ctx.fillStyle = '#FFFFFF';
      ctx.globalAlpha = 0.4;
      ctx.fillRect(this.ballX - bps, this.ballY - bps, bps * 0.7, bps * 0.7);
      ctx.globalAlpha = 1;

      // Score dots on canvas
      for (let i = 0; i < this.ralliesNeeded; i++) {
        ctx.fillStyle = '#00E68A';
        ctx.globalAlpha = i < this.ralliesWon ? 1 : 0.2;
        ctx.fillRect(this.W / 2 - 20 + i * 16, this.H - 14, 8, 8);
      }
      ctx.globalAlpha = 1;

      // Instructions
      if (this.state === 'idle') {
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = 0.5 + Math.sin(Date.now() / 400) * 0.3;
        ctx.font = '14px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(this.ralliesWon > 0 ? 'TAP TO SERVE AGAIN' : 'TAP TO SERVE', this.W / 2, this.H / 2 + 40);
        ctx.globalAlpha = 1;
      }

      // Miss feedback
      if (this.state === 'miss') {
        ctx.fillStyle = '#EF4444';
        ctx.globalAlpha = 0.6;
        ctx.font = 'bold 16px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('MISS!', this.W / 2, this.H / 2 + 40);
        ctx.globalAlpha = 1;
      }
    }

    _update() {
      if (this.state === 'falling') {
        this.ballY += this.ballVY;
        this.ballX += this.ballVX;

        // Bounce off walls
        if (this.ballX < 30 || this.ballX > this.W - 30) {
          this.ballVX *= -1;
        }

        // Racket tracks ball loosely
        this.racketX += (this.ballX - this.racketX) * 0.04;

        // Miss: ball goes past racket
        if (this.ballY > this.racketY + 50) {
          this._onMiss();
        }
      }

      if (this.state === 'hit') {
        this.ballY += this.ballVY;
        this.ballVY += 0.15;
        if (this.ballY < -30) {
          this.state = 'idle';
        }
      }
    }

    _loop() {
      if (this.solved && this.state === 'won') return;
      this._update();
      this._draw();
      this._frameCount = (this._frameCount || 0) + 1;
      if (this._frameCount % 300 === 1) console.log('[PUZZLE] frame=' + this._frameCount + ' state=' + this.state);
      requestAnimationFrame(() => this._loop());
    }
  }

  // Init puzzle when section is visible
  const puzzleCanvas = document.getElementById('puzzleCanvas');
  if (puzzleCanvas) {
    let puzzleStarted = false;
    function startPuzzleOnce() {
      if (puzzleStarted) return;
      puzzleStarted = true;
      new TennisRallyPuzzle(puzzleCanvas);
    }
    const puzzleObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startPuzzleOnce();
          puzzleObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    puzzleObserver.observe(puzzleCanvas);
    // Fallback: init after 5s if observer hasn't fired
    setTimeout(startPuzzleOnce, 5000);
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


  // ─── Animated Pixel Art Robot (Canvas) ───
  const robotCanvas = document.getElementById('robotCanvas');
  if (robotCanvas) {
    const rctx = robotCanvas.getContext('2d');
    const isMobileRobot = window.innerWidth < 768;
    const RP = isMobileRobot ? 8 : 12;

    // Robot sprite: 18 wide x 24 tall pixel grid
    // Colors: 0=transparent, 1=accent green, 2=blue, 3=dark fill, 8=dark bg, 5=gold, 7=white
    const ROBOT_BASE = [
      '..................',
      '.......11.........',
      '.......11.........',
      '......1111........',
      '....11111111......',
      '...1111111111.....',
      '...1333333331.....',
      '...1333333331.....',
      '...13311113331....',
      '...13311113331....',
      '...1333333331.....',
      '...1332222331.....',
      '...1332222331.....',
      '...1333333331.....',
      '....11111111......',
      '..1.11111111.1....',
      '..1.13333331.1....',
      '..1.13311331.1....',
      '..1.13355331.1....',
      '..1.13355331.1....',
      '..1.13311331.1....',
      '..1.13333331.1....',
      '....11111111......',
      '....11....11......',
      '....11....11......',
      '....11....11......',
    ];

    const robotGrid = ROBOT_BASE.map(row => row.split('').map(ch => ch === '.' ? 0 : parseInt(ch)));
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
      1: '#00E68A',
      2: '#4DA6FF',
      3: '#1A1A2E',
      5: '#F7C948',
      7: '#FFFFFF',
      8: '#0D0D14',
    };

    let robotFrame = 0;
    let robotBlinkTimer = 0;
    let robotMouthFrame = 0;

    function drawRobot() {
      rctx.clearRect(0, 0, rLogW, rLogH);
      robotFrame++;
      robotBlinkTimer++;
      robotMouthFrame++;

      // Blink: close eyes every 120 frames for 6 frames
      const isBlinking = robotBlinkTimer > 120 && robotBlinkTimer < 128;
      if (robotBlinkTimer > 128) robotBlinkTimer = 0;

      // Mouth animation: alternate width
      const mouthPhase = Math.floor(robotMouthFrame / 20) % 3;

      for (let r = 0; r < RROWS; r++) {
        for (let c = 0; c < RCOLS; c++) {
          let colorIdx = robotGrid[r][c];
          if (colorIdx === 0) continue;

          // Eye blink: rows 8-9, the "11" eye pixels
          if (isBlinking && (r === 8 || r === 9) && colorIdx === 1) {
            if (r === 9) continue; // hide bottom row of eye
          }

          // Mouth animation: rows 11-12, the "2222" mouth pixels
          if ((r === 11 || r === 12) && colorIdx === 2) {
            if (mouthPhase === 1 && (c === 5 || c === 10)) continue; // shrink
            if (mouthPhase === 2 && c === 5) { colorIdx = 2; } // normal
          }

          // Arm wave: rows 15-21, columns 2 and 13
          if ((c === 2 || c === 13) && r >= 15 && r <= 21) {
            const wave = Math.sin(robotFrame * 0.05 + (c === 2 ? 0 : 1.5)) * 2;
            const drawR = r + Math.round(wave);
            const color = ROBOT_COLORS[colorIdx];
            if (color && drawR >= 0 && drawR < RROWS) {
              rctx.fillStyle = color;
              rctx.fillRect(c * RP, drawR * RP, RP - 1, RP - 1);
            }
            continue;
          }

          // Antenna glow: rows 0-1
          if (r <= 1 && colorIdx === 1) {
            const glowPulse = 0.5 + Math.sin(robotFrame * 0.08) * 0.5;
            rctx.fillStyle = '#00E68A';
            rctx.globalAlpha = 0.3 + glowPulse * 0.7;
            rctx.fillRect(c * RP, r * RP, RP - 1, RP - 1);
            // Glow halo
            rctx.fillStyle = '#00E68A';
            rctx.globalAlpha = glowPulse * 0.2;
            rctx.fillRect(c * RP - 2, r * RP - 2, RP + 3, RP + 3);
            rctx.globalAlpha = 1;
            continue;
          }

          const color = ROBOT_COLORS[colorIdx];
          if (color) {
            rctx.fillStyle = color;
            rctx.fillRect(c * RP, r * RP, RP - 1, RP - 1);
          }
        }
      }

      requestAnimationFrame(drawRobot);
    }

    // Start animation when visible
    let robotStarted = false;
    function startRobotOnce() {
      if (robotStarted) return;
      robotStarted = true;
      drawRobot();
    }
    const robotSection = document.querySelector('.ai-robot-section');
    if (robotSection) {
      const robObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          startRobotOnce();
          robObserver.unobserve(robotSection);
        }
      }, { threshold: 0.2 });
      robObserver.observe(robotSection);
      // Fallback: start after 4s if observer hasn't fired (e.g. user scrolled fast)
      setTimeout(startRobotOnce, 4000);
    } else {
      // No section found, just start
      startRobotOnce();
    }
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
