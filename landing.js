/* ═══════════════════════════════════════════════ */
/* EdgeAI Landing — Interactions & Animations      */
/* ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Boot Sequence ───
  const bootLines = [
    { text: '> EDGE AI v2.1.0 — Initializing...', delay: 0 },
    { text: '> Connecting to live match feed...       [OK]', delay: 100 },
    { text: '> Loading ATP / WTA data pipeline...     [OK]', delay: 80 },
    { text: '> Odds stream connected...               [OK]', delay: 100 },
    { text: '> MTO / Rain / Suspension tracker...     ARMED', delay: 80 },
    { text: '> Entry list aggregator...               SYNCED', delay: 80 },
    { text: '> Neural inference engine...              READY', delay: 120 },
    { text: '> System nominal. Welcome.', delay: 200 },
  ];

  const bootLinesEl = document.getElementById('bootLines');
  const bootProgressBar = document.getElementById('bootProgressBar');
  const bootScreen = document.getElementById('bootScreen');
  const navbar = document.getElementById('navbar');

  async function runBootSequence() {
    for (let i = 0; i < bootLines.length; i++) {
      const { text, delay } = bootLines[i];
      await typewriterLine(bootLinesEl, text, 18);
      bootProgressBar.style.width = ((i + 1) / bootLines.length * 100) + '%';
      await sleep(delay);
    }
    await sleep(500);
    bootScreen.classList.add('done');
    navbar.classList.add('visible');
    initHeroCanvas();
    startLiveTicker();
    startLiveOdds();
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
    // Skip boot, show everything immediately
    bootScreen.classList.add('done');
    navbar.classList.add('visible');
    startLiveTicker();
    startLiveOdds();
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
        // Mouse repulsion
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

    // Scale particles based on screen size
    const count = Math.min(100, Math.floor(W * H / 12000));
    for (let i = 0; i < count; i++) particles.push(new Particle());

    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener('mouseleave', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

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
            ctx.strokeStyle = `rgba(0, 230, 138, ${alpha})`;
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

    // Pause when not visible
    const heroSection = document.getElementById('hero');
    const canvasObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animId) loop();
        } else {
          cancelAnimationFrame(animId);
          animId = null;
        }
      });
    }, { threshold: 0.1 });
    canvasObserver.observe(heroSection);
  }


  // ─── Live Ticker ───
  const tickerMessages = [
    'Djokovic 6-4, 3-2* Alcaraz — Roland Garros QF | LIVE',
    'Swiatek 7-5, 6-3 Gauff — Australian Open SF | FINISHED',
    'MTO: Sinner (back) — Monte Carlo R3, Set 2',
    'Rain Delay: Rune vs Medvedev — Wimbledon Court 1',
    'RETIRED: Tsitsipas def. Hurkacz — abdominal, Set 3',
    'WD: Medvedev OUT of Dubai — shoulder injury',
    'Odds Shift: Alcaraz 1.45 → 1.28 — Indian Wells Final',
    'Sinner 4-6, 6-3, 2-1* Zverev — Wimbledon R16 | LIVE',
    'Entry List: Nadal confirmed for Barcelona Open',
    'SUSPENDED: Rublev vs Fritz — bad light, Halle QF',
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

      // Inverse correlation for odds
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
    scrollProgress.style.width = scrolled + '%';
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


  // ─── Sticky Scroll Feature Showcase ───
  const featureData = {
    'live-scores': {
      title: 'Live Scores',
      desc: 'Real-time set-by-set match tracking with serve indicators, game-by-game updates, and live commentary — refreshed every second.',
      tags: ['Real-time', 'All Courts', 'Serve Tracking'],
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
    },
    'fast-odds': {
      title: 'Fast Odds',
      desc: 'Sub-second odds movement tracking across all major bookmakers. See odds shift before the market catches up.',
      tags: ['Multi-book', 'Flash Alerts', 'Line Movement'],
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>'
    },
    'live-stats': {
      title: 'Live Stats',
      desc: 'In-match statistical analysis with aces, break points, first serve percentage, and momentum indicators updated in real time.',
      tags: ['Break Points', 'Serve %', 'Momentum'],
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>'
    },
    'mto': {
      title: 'MTO Tracker',
      desc: 'Instant medical timeout alerts with injury details, player history context, and return-to-play analysis.',
      tags: ['Injury Details', 'History', 'Impact Analysis'],
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'
    },
    'suspended': {
      title: 'Suspended Matches',
      desc: 'Track mid-match suspensions with score snapshots, estimated resume times, and court assignments.',
      tags: ['Resume Times', 'Score Freeze', 'Court Info'],
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>'
    },
    'rain': {
      title: 'Rain Delays',
      desc: 'Weather-driven delay tracking across all courts and venues with real-time updates and schedule impact analysis.',
      tags: ['Weather Data', 'All Venues', 'Schedule Impact'],
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8" y2="20"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="16" y1="16" x2="16" y2="20"/></svg>'
    },
    'retirements': {
      title: 'Retirements',
      desc: 'Instant player retirement and walkover alerts as they happen, with injury details and return timeline tracking.',
      tags: ['Instant Alerts', 'Injury Info', 'Timeline'],
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
    },
    'draws': {
      title: 'Entry Lists & Draws',
      desc: '3,000+ players tracked across every tier — Grand Slams to ITF Futures. Know who\'s in, who withdrew, and why.',
      tags: ['3000+ Players', 'All Tiers', 'WD Reasons'],
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/></svg>'
    },
    'profiles': {
      title: 'Player Profiles',
      desc: 'Deep-dive any player with full tournament schedule, entry history, ranking progression, and competitive stats.',
      tags: ['Full Schedule', 'Rankings', 'Entry History'],
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
    },
    'notifications': {
      title: 'Smart Notifications',
      desc: 'Push alerts for your followed players — match starts, score updates, MTO events, withdrawals, and odds shifts.',
      tags: ['Custom Alerts', 'Player Watch', 'Real-time'],
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>'
    },
  };

  const triggers = document.querySelectorAll('.feature-trigger');
  const featureTitle = document.getElementById('featureTitle');
  const featureDesc = document.getElementById('featureDesc');
  const featureNum = document.getElementById('featureNum');
  const featureIcon = document.getElementById('featureIcon');
  const featureTags = document.getElementById('featureTags');

  if (triggers.length && featureTitle) {
    const featureObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Deactivate all, activate current
          triggers.forEach(t => t.classList.remove('active'));
          entry.target.classList.add('active');

          const key = entry.target.dataset.feature;
          const num = entry.target.dataset.num;
          const data = featureData[key];

          if (data) {
            // Smooth transition
            featureTitle.style.opacity = '0';
            featureDesc.style.opacity = '0';

            setTimeout(() => {
              featureTitle.textContent = data.title;
              featureDesc.textContent = data.desc;
              featureNum.textContent = num;
              featureIcon.innerHTML = data.iconSvg;
              featureTags.innerHTML = data.tags.map(t => `<span class="fd-tag">${t}</span>`).join('');

              featureTitle.style.opacity = '1';
              featureDesc.style.opacity = '1';
            }, 200);
          }
        }
      });
    }, {
      threshold: 0.6,
      rootMargin: '-20% 0px -20% 0px'
    });

    triggers.forEach(t => featureObserver.observe(t));
  }


  // ─── 3D Tilt Cards ───
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = e.clientX - rect.left - cx;
      const dy = e.clientY - rect.top - cy;
      const rotX = -(dy / cy) * 6;
      const rotY = (dx / cx) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;

      // Update shimmer position
      const mouseXPct = ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + '%';
      const mouseYPct = ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + '%';
      card.style.setProperty('--mouse-x', mouseXPct);
      card.style.setProperty('--mouse-y', mouseYPct);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  });


  // ─── Magnetic Button Effect ───
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.25;
      const dy = (e.clientY - cy) * 0.25;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
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
