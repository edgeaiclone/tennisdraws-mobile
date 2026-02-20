/* ═══════════════════════════════════════════════ */
/* edgeAI Landing — Minimal Black + Pixel Tools    */
/* ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Pixel Logo Renderer (robot + edgeAI text) ───
  // Robot: 9x10 grid, Text: "edgeAI" 5px tall pixel font
  // Colors: W = white, G = green, D = dim gray, . = transparent

  const ROBOT_GRID = [
    '..GGG..',
    '.GWWWG.',
    '.GW.WG.',
    '.GWWWG.',
    '..GGG..',
    '.GGGGG.',
    'G.GGG.G',
    '..GGG..',
    '.G...G.',
    '.G...G.',
  ];

  // 5px tall pixel font for "edgeAI" — each char is a grid
  const PIXEL_FONT = {
    'e': [
      'WWW',
      'W..',
      'WW.',
      'W..',
      'WWW',
    ],
    'd': [
      'WW.',
      'W.W',
      'W.W',
      'W.W',
      'WW.',
    ],
    'g': [
      '.WW',
      'W..',
      'W.W',
      'W.W',
      '.WW',
    ],
    'A': [
      '.G.',
      'G.G',
      'GGG',
      'G.G',
      'G.G',
    ],
    'I': [
      'GGG',
      '.G.',
      '.G.',
      '.G.',
      'GGG',
    ],
  };

  function drawPixelLogo(canvasId, scale) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const ps = scale; // pixel size
    const gap = Math.max(1, Math.floor(scale / 4));

    // Robot dimensions
    const robotCols = 7;
    const robotRows = 10;
    const robotW = robotCols * (ps + gap);
    const robotH = robotRows * (ps + gap);

    // Text: "edgeAI" — 6 chars, each 3px wide + 1px spacing
    const text = ['e','d','g','e','A','I'];
    const charW = 3;
    const charH = 5;
    const charSpacing = 1;
    const textTotalCols = text.length * (charW + charSpacing) - charSpacing;
    const textW = textTotalCols * (ps + gap);
    const textH = charH * (ps + gap);

    // Spacing between robot and text
    const midGap = ps * 3;

    const totalW = robotW + midGap + textW;
    const totalH = Math.max(robotH, textH);

    canvas.width = totalW * dpr;
    canvas.height = totalH * dpr;
    canvas.style.width = totalW + 'px';
    canvas.style.height = totalH + 'px';
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = false;

    const colors = { 'W': '#FFFFFF', 'G': '#00E68A', 'D': 'rgba(255,255,255,0.15)' };

    // Draw robot (vertically centered)
    const robotOffY = Math.floor((totalH - robotH) / 2);
    for (let r = 0; r < ROBOT_GRID.length; r++) {
      for (let c = 0; c < ROBOT_GRID[r].length; c++) {
        const ch = ROBOT_GRID[r][c];
        if (ch === '.') continue;
        ctx.fillStyle = colors[ch] || '#fff';
        ctx.fillRect(c * (ps + gap), robotOffY + r * (ps + gap), ps, ps);
      }
    }

    // Draw text (vertically centered)
    const textOffX = robotW + midGap;
    const textOffY = Math.floor((totalH - textH) / 2);
    let cursorX = 0;
    for (const letter of text) {
      const glyph = PIXEL_FONT[letter];
      if (!glyph) { cursorX += charW + charSpacing; continue; }
      for (let r = 0; r < glyph.length; r++) {
        for (let c = 0; c < glyph[r].length; c++) {
          const ch = glyph[r][c];
          if (ch === '.') continue;
          ctx.fillStyle = colors[ch] || '#fff';
          ctx.fillRect(textOffX + (cursorX + c) * (ps + gap), textOffY + r * (ps + gap), ps, ps);
        }
      }
      cursorX += charW + charSpacing;
    }
  }

  // Draw all three logos at different scales
  drawPixelLogo('bootLogoCanvas', 5);
  drawPixelLogo('navLogoCanvas', 3);
  drawPixelLogo('footerLogoCanvas', 2);

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

  // ─── 11 Pixel Art Illustrations (24x24 grids) ───
  function parsePixelArt(str) {
    return str.trim().split('\n').map(row =>
      row.split('').map(ch => ch === '.' ? 0 : parseInt(ch) || 0)
    );
  }

  const PIXEL_ART = {
    // 01: Live Scores — scoreboard with live dot
    'live-scores': parsePixelArt(
      '........................\n' +
      '..11111111111111111111..\n' +
      '..1..................1..\n' +
      '..1..77777....11111..1..\n' +
      '..1..77777....11111..1..\n' +
      '..1..................1..\n' +
      '..1..55555....22222..1..\n' +
      '..1..55555....22222..1..\n' +
      '..1..................1..\n' +
      '..1..11111....55555..1..\n' +
      '..1..11111....55555..1..\n' +
      '..1..................1..\n' +
      '..11111111111111111111..\n' +
      '........................\n' +
      '........................\n' +
      '........66..............\n' +
      '.......6666.............\n' +
      '........66..............\n' +
      '..........777777777777..\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 02: Dropping Odds — downward arrow + chart bars
    'dropping-odds': parsePixelArt(
      '........................\n' +
      '..........66............\n' +
      '..........66............\n' +
      '.........6666...........\n' +
      '........666666..........\n' +
      '.......66666666.........\n' +
      '..........66............\n' +
      '..........66............\n' +
      '..........66............\n' +
      '..........66............\n' +
      '........................\n' +
      '..11.................1..\n' +
      '..11..55............11..\n' +
      '..11..55..22.......111..\n' +
      '..11..55..22..11..111...\n' +
      '..11..55..22..11..11....\n' +
      '..11..55..22..11........\n' +
      '..11..55..22..11........\n' +
      '..11..55..22..11........\n' +
      '..88888888888888888888..\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 03: Bet365 Monitors — eye + lock
    'bet365': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '....11111111111111......\n' +
      '..11................11..\n' +
      '.1.......222222......1..\n' +
      '1......2222222222.....1.\n' +
      '1.....222277222222....1.\n' +
      '1.....222277222222....1.\n' +
      '1......2222222222.....1.\n' +
      '.1.......222222......1..\n' +
      '..11................11..\n' +
      '....11111111111111......\n' +
      '........................\n' +
      '..........5555..........\n' +
      '.........5....5.........\n' +
      '.........5....5.........\n' +
      '........55555555........\n' +
      '........5......5........\n' +
      '........5..55..5........\n' +
      '........5..55..5........\n' +
      '........55555555........\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 04: MTO Intel — medical cross + heartbeat
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
      '..1111..................\n' +
      '..1..1..................\n' +
      '..1..1.......1..........\n' +
      '..1..1......1.1.........\n' +
      '..1..1.....1...1...1....\n' +
      '..1..1....1.....1.1.1...\n' +
      '..1..1...1.......1......\n' +
      '..1111..................\n' +
      '........................'
    ),
    // 05: Fatigue Tracker — running figure + clock
    'fatigue': parsePixelArt(
      '........................\n' +
      '....55..................\n' +
      '...5555.................\n' +
      '....55..................\n' +
      '...5115.................\n' +
      '...5115.................\n' +
      '...5115.................\n' +
      '....55..................\n' +
      '...5..5.................\n' +
      '...5..5.................\n' +
      '..5....5................\n' +
      '........................\n' +
      '...........22222222.....\n' +
      '..........2........2....\n' +
      '.........2..........2...\n' +
      '.........2....22....2...\n' +
      '.........2....2.....2...\n' +
      '.........2....2222..2...\n' +
      '.........2..........2...\n' +
      '..........2........2....\n' +
      '...........22222222.....\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 06: Rain Delays — cloud + rain drops
    'rain': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '........222222..........\n' +
      '......2222222222........\n' +
      '....222222222222222.....\n' +
      '...22222222222222222....\n' +
      '...22222222222222222....\n' +
      '...22222222222222222....\n' +
      '....222222222222222.....\n' +
      '........................\n' +
      '.....2.....2.....2......\n' +
      '....2.....2.....2.......\n' +
      '.....2.....2.....2......\n' +
      '....2.....2.....2.......\n' +
      '.....2.....2.....2......\n' +
      '....2.....2.....2.......\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 07: Entry Lists & Draws — bracket/list
    'entries': parsePixelArt(
      '........................\n' +
      '..1111111111............\n' +
      '..1........1............\n' +
      '..1111111111............\n' +
      '..........1.............\n' +
      '..........11111111111...\n' +
      '..........1.........1...\n' +
      '..........11111111111...\n' +
      '........................\n' +
      '..1111111111............\n' +
      '..1........1............\n' +
      '..1111111111............\n' +
      '..........1.............\n' +
      '..........11111111111...\n' +
      '..........1.........1...\n' +
      '..........11111111111...\n' +
      '........................\n' +
      '..1111111111............\n' +
      '..1........1............\n' +
      '..1111111111............\n' +
      '..........1.............\n' +
      '..........11111111111...\n' +
      '........................\n' +
      '........................'
    ),
    // 08: Retired / Returned — exit door + return arrow
    'retired': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '...66666666666666666....\n' +
      '...6...............6....\n' +
      '...6...............6....\n' +
      '...6.......66......6....\n' +
      '...6.......66......6....\n' +
      '...6.......66......6....\n' +
      '...6......6666.....6....\n' +
      '...6...............6....\n' +
      '...6...............6....\n' +
      '...66666666666666666....\n' +
      '........................\n' +
      '........1111111.........\n' +
      '.......1..............1.\n' +
      '......1...............1.\n' +
      '.....1111111111111111...\n' +
      '......1.................\n' +
      '.......1................\n' +
      '........1111111.........\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
    // 09: AI Chat — brain + chat bubble
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
    // 10: Live Alerts — bell + notification waves
    'alerts': parsePixelArt(
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
    // 11: 24/7 Uptime — shield + checkmark
    'uptime': parsePixelArt(
      '........................\n' +
      '........................\n' +
      '.......1111111111.......\n' +
      '......111111111111......\n' +
      '.....11111111111111.....\n' +
      '.....11............11...\n' +
      '.....11............11...\n' +
      '.....11.......55..11....\n' +
      '.....11......55...11....\n' +
      '.....11.....55....11....\n' +
      '.....11..55.55....11....\n' +
      '.....11...555.....11....\n' +
      '.....11....5......11....\n' +
      '.....11...........11....\n' +
      '......111111111111......\n' +
      '.......1111111111.......\n' +
      '........11111111........\n' +
      '.........111111.........\n' +
      '..........1111..........\n' +
      '...........11...........\n' +
      '........................\n' +
      '........................\n' +
      '........................\n' +
      '........................'
    ),
  };

  // Tool metadata
  const TOOL_DATA = {
    'live-scores': {
      title: 'Live Scores & Stats',
      desc: 'Point-by-point live scores across ATP, WTA, ITF, and Challengers. Serve stats, aces, break points, first serve % — full match data pipeline in real-time.',
    },
    'dropping-odds': {
      title: 'Dropping Odds Monitor',
      desc: 'Scrapes live odds every hour across all matches. Tracks which player\'s odds are falling, by how much, and flags sharp money movement — the earliest signal of insider info.',
    },
    'bet365': {
      title: 'Bet365 Monitors',
      desc: 'Three dedicated monitors watching Bet365 around the clock — odds lock detection, score freeze alerts, and tiebreak triggers. Instant Telegram alerts when anomalies hit.',
    },
    'mto': {
      title: 'MTO Intel',
      desc: 'Detects Medical Time-Outs the instant they happen. Tracks historical win/loss stats after MTOs per player — building the deepest injury-impact model in tennis.',
    },
    'fatigue': {
      title: 'Fatigue Tracker',
      desc: 'Spots same-day double-headers and flags marathon 3h+ matches. Calculates recovery windows and fatigue risk for the next match — edges others miss.',
    },
    'rain': {
      title: 'Rain Delays',
      desc: 'Monitors live rain delays across every venue. Alerts when play stops and resumes — key for momentum disruption and in-play opportunities.',
    },
    'entries': {
      title: 'Entry Lists & Draws',
      desc: '3,000+ players tracked across every tier. Grand Slams to ITF Futures. Full entry lists, draws, withdrawal reasons, lucky losers, and qualifiers.',
    },
    'retired': {
      title: 'Retired / Returned',
      desc: 'Tracks every mid-match retirement with date, tournament, score, and odds at retirement. Monitors who is returning to play and flags re-injury risk.',
    },
    'ai-chat': {
      title: 'AI Chatbot',
      desc: 'RAG-powered AI with all tennis data in a vector database. Ask anything — player form, H2H stats, MTO history, odds movement — in natural language.',
    },
    'alerts': {
      title: 'Live Alerts',
      desc: 'Real-time Telegram alerts across every monitor. MTOs, odds locks, rain delays, score freezes, dropping odds — instant notifications to your phone.',
    },
    'uptime': {
      title: '24/7 Uptime',
      desc: '21+ services running around the clock. MongoDB health checks, service watchdogs, auto-recovery. Zero downtime — every match, every edge, always on.',
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


  // ─── TextScramble Class (throttled for perf) ───
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
      // Throttle: only update DOM every 3rd rAF tick
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
    { text: '> Live match feed connected...              [ARMED]', delay: 40 },
    { text: '> ATP / WTA / Challenger / ITF livescores...[ARMED]', delay: 30 },
    { text: '> MTO tracking & alerts pipeline...         [ARMED]', delay: 30 },
    { text: '> Retired & Returned player monitor...      [ARMED]', delay: 30 },
    { text: '> Entry lists, draws & withdrawals...       [ARMED]', delay: 30 },
    { text: '> AI Stats engine — live comparisons...     [ARMED]', delay: 30 },
    { text: '> edgeAI Tools loaded...                    [ARMED]', delay: 30 },
    { text: '> AI Chatbot ready...                       [ARMED]', delay: 80 },
  ];

  const bootLinesEl = document.getElementById('bootLines');
  const bootProgressCanvas = document.getElementById('bootProgressCanvas');
  const bootScreen = document.getElementById('bootScreen');
  const navbar = document.getElementById('navbar');

  // Pixelated progress bar drawn on canvas
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

    const blockW = 8;
    const gap = 3;
    const totalBlocks = Math.floor(w / (blockW + gap));
    const filledBlocks = Math.floor(progress * totalBlocks);

    // Dim empty blocks
    for (let i = 0; i < totalBlocks; i++) {
      ctx.fillStyle = 'rgba(0, 230, 138, 0.08)';
      ctx.fillRect(i * (blockW + gap), 1, blockW, h - 2);
    }
    // Filled blocks with glow
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
      await typewriterLine(bootLinesEl, text, 10);
      const pct = (i + 1) / bootLines.length;
      drawPixelProgress(pct);
      updateBootPct(pct);
      await sleep(delay);
    }
    await sleep(400);
    bootScreen.classList.add('done');
    navbar.classList.add('visible');
    initToolCarousel();
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
          typeDesc(descEl, data.desc);
        }
      }, 600);

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

    function typeDesc(el, text) {
      el.textContent = '';
      let i = 0;
      descTimer = setInterval(() => {
        i += 3; // type 3 chars per tick for speed
        el.textContent = text.substring(0, Math.min(i, text.length));
        if (i >= text.length) clearInterval(descTimer);
      }, 16);
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
