(function() {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const content = window.SITE_CONTENT;

  // Header year
  $('#year').textContent = new Date().getFullYear();

  // Populate About
  function renderAbout() {
    $('#about-summary').textContent = content.about.summary;
    $('#about-location').textContent = content.person.location;
    const emailEl = $('#about-email');
    emailEl.href = `mailto:${content.person.email}`; emailEl.textContent = content.person.email;
    const phoneEl = $('#about-phone');
    phoneEl.href = `tel:${content.person.phone}`; phoneEl.textContent = content.person.phone;
    $('#about-mission').textContent = content.about.mission;

    const pointsWrap = $('#about-points');
    pointsWrap.innerHTML = '';
    content.about.points.forEach(p => {
      const item = document.createElement('div');
      item.className = 'point';
      item.innerHTML = `<div class="dot"></div><div>${p}</div>`;
      pointsWrap.appendChild(item);
    });
  }

  // Skills: groups with 3D cubes + progress rings
  function renderSkills() {
    const wrap = $('#skills-wrap');
    wrap.innerHTML = '';
    content.skills.forEach(group => {
      const groupEl = document.createElement('div');
      groupEl.className = 'skill-group glass tilt';
      groupEl.innerHTML = `<div class="skill-title">${group.group}<span class="chip">${group.items.length} skills</span></div>`;

      const grid = document.createElement('div');
      grid.className = 'skill-grid';

      group.items.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        const cube = `
          <div class="cube" style="animation-delay:${idx * 0.2}s">
            <div class="face f1">${item.name}</div>
            <div class="face f2">${item.name}</div>
            <div class="face f3">${item.name}</div>
            <div class="face f4">${item.name}</div>
            <div class="face f5">${item.name}</div>
            <div class="face f6">${item.name}</div>
          </div>`;

        const ring = createProgressRing(item.level);

        card.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px">
            ${ring.outerHTML}
            <div style="display:grid; gap:4px">
              <div style="font-weight:800">${item.name}</div>
              <div class="muted small">Proficiency: ${item.level}%</div>
            </div>
          </div>
          <div style="margin-top:10px">${cube}</div>`;
        grid.appendChild(card);
      });

      groupEl.appendChild(grid);
      wrap.appendChild(groupEl);
    });
  }

  function createProgressRing(percent) {
    const size = 88, radius = 38, circumference = 2 * Math.PI * radius;
    const el = document.createElement('div'); el.className = 'progress-ring';
    el.innerHTML = `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <defs>
          <linearGradient id="grad-${percent}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00ffd5" />
            <stop offset="100%" stop-color="#8b5cf6" />
          </linearGradient>
        </defs>
        <circle cx="44" cy="44" r="${radius}" stroke="rgba(255,255,255,0.1)" stroke-width="8" fill="none" />
        <circle cx="44" cy="44" r="${radius}" stroke="url(#grad-${percent})" stroke-linecap="round" stroke-width="8" fill="none"
          stroke-dasharray="${circumference}" stroke-dashoffset="${circumference * (1 - percent/100)}" />
      </svg>
      <div class="label">${percent}%</div>`;
    return el;
  }

  // Projects
  function renderProjects() {
    const grid = $('#projects-grid'); grid.innerHTML = '';
    content.projects.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'project-card tilt';
      card.innerHTML = `
        <div class="project-thumb">
          <svg width="140" height="60" viewBox="0 0 200 80" aria-hidden="true">
            <defs>
              <linearGradient id="g${i}" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#00ffd5"/>
                <stop offset="100%" stop-color="#8b5cf6"/>
              </linearGradient>
            </defs>
            <g fill="none" stroke="url(#g${i})" stroke-width="4">
              <rect x="10" y="10" width="180" height="60" rx="12" opacity="0.4"/>
              <path d="M30 40 h140" />
              <path d="M30 28 h70" opacity="0.6" />
              <path d="M30 52 h100" opacity="0.6" />
            </g>
          </svg>
        </div>
        <div class="project-meta">
          <div class="chip">${p.category}</div>
          <h3 style="margin:6px 0 0">${p.title}</h3>
          <div class="muted small">${p.description}</div>
          <div class="project-actions">
            <a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener">Live</a>
            <a class="btn btn-primary" href="${p.source}" target="_blank" rel="noopener">Case Study</a>
          </div>
        </div>`;
      grid.appendChild(card);
    });
  }

  // Services
  function renderServices() {
    const grid = $('#services-grid'); grid.innerHTML = '';
    content.services.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'service-card tilt';
      card.innerHTML = `
        <div class="chip">Package</div>
        <h3 style="margin:8px 0 0">${s.name}</h3>
        <div class="price">${s.price}</div>
        <ul class="service-features">${s.features.map(f => `<li>• ${f}</li>`).join('')}</ul>
        <div style="margin-top:12px">
          <button class="btn btn-primary" data-service-cta="${i}">${s.cta}</button>
        </div>`;
      grid.appendChild(card);
    });
  }

  // Testimonials
  function renderTestimonials() {
    const track = $('#slider-track'); track.innerHTML = '';
    content.testimonials.forEach(t => {
      const el = document.createElement('div');
      el.className = 'testimonial';
      el.innerHTML = `
        <div class="stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
        <blockquote style="margin:8px 0">${t.quote}</blockquote>
        <div class="muted small">${t.name} — ${t.role}</div>`;
      track.appendChild(el);
    });
  }

  // Socials
  function renderSocials() {
    const wrap = $('#social-links'); wrap.innerHTML = '';
    content.socials.forEach(s => {
      const a = document.createElement('a'); a.href = s.url; a.target = '_blank'; a.rel = 'noopener';
      a.textContent = s.name; wrap.appendChild(a);
    });
  }

  // Tilt effect
  function enableTilt() {
    const els = $$('.tilt');
    els.forEach(el => {
      let rect;
      function onMove(e) {
        rect = rect || el.getBoundingClientRect();
        const cx = rect.left + rect.width/2; const cy = rect.top + rect.height/2;
        const dx = (e.clientX - cx) / rect.width; const dy = (e.clientY - cy) / rect.height;
        el.style.transform = `rotateX(${dy * -10}deg) rotateY(${dx * 12}deg) translateY(-2px)`;
      }
      function onLeave() { el.style.transform = ''; rect = null; }
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  // Contact form
  function setupForm() {
    const form = $('#contact-form'); const status = $('#form-status');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Sending…';
      try {
        const data = new FormData(form);
        const res = await fetch('/', { method: 'POST', body: data });
        if (res.ok) { status.textContent = 'Thanks! I will reply within 24 hours.'; form.reset(); }
        else throw new Error('Network error');
      } catch (err) {
        // Fallback: mailto
        window.location.href = `mailto:${content.person.email}?subject=Portfolio Inquiry&body=${encodeURIComponent($('#message').value)}`;
        status.textContent = 'Opening your email client…';
      }
    });

    $('#btn-security').addEventListener('click', () => {
      $('#message').value = 'I would like a free security assessment for my app/website. Please advise on scope and timelines.';
      $('#name').focus();
    });
  }

  // GSAP + ScrollTrigger
  function setupAnimations() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // Respect user preference
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('.section-title', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: '.section', start: 'top 80%' } });
      $$('.tilt').forEach(el => {
        gsap.from(el, { y: 24, opacity: 0, duration: 0.8, scrollTrigger: { trigger: el, start: 'top 85%' } });
      });
    }
  }

  // IntersectionObserver for in-view class
  function observeInView() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
    }, { threshold: 0.2 });
    $$('.section').forEach(s => io.observe(s));
  }

  // Three.js Hero scene
  function startHero3D() {
    const canvas = document.getElementById('hero-canvas');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0.5, 3.6);

    // Lights
    const light = new THREE.PointLight(0x00ffd5, 1.2, 10); light.position.set(2, 2, 2); scene.add(light);
    const light2 = new THREE.PointLight(0x8b5cf6, 1.0, 10); light2.position.set(-2, -1, 2); scene.add(light2);
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    // Central object: torus knot
    const geo = new THREE.TorusKnotGeometry(0.6, 0.18, 220, 24);
    const mat = new THREE.MeshPhysicalMaterial({ color: 0x0ffff0, metalness: 0.6, roughness: 0.2, transmission: 0.6, thickness: 0.8, clearcoat: 1, clearcoatRoughness: 0.1 });
    const knot = new THREE.Mesh(geo, mat); scene.add(knot);

    // Particles
    const particles = createParticles(prefersReduced ? 300 : 1400); scene.add(particles);

    // Tech icon billboards (simple rings)
    const ringGeo = new THREE.RingGeometry(0.35, 0.38, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
    const ring = new THREE.Mesh(ringGeo, ringMat); ring.position.set(-1.4, 0.4, 0.4); scene.add(ring);
    const ring2 = ring.clone(); ring2.material = ringMat.clone(); ring2.material.color = new THREE.Color(0x00e5ff); ring2.position.set(1.2, -0.2, 0.2); scene.add(ring2);

    // Mouse parallax
    const mouse = { x: 0, y: 0 };
    window.addEventListener('pointermove', (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouse.x = x; mouse.y = y;
    });

    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (canvas.width !== w || canvas.height !== h) {
        renderer.setSize(w, h, false);
        camera.aspect = w / h; camera.updateProjectionMatrix();
      }
    }

    function animate(t) {
      requestAnimationFrame(animate);
      resize();
      if (!prefersReduced) {
        knot.rotation.x += 0.004; knot.rotation.y += 0.006;
        knot.position.x = mouse.x * 0.2; knot.position.y = -mouse.y * 0.1;
      }
      ring.lookAt(camera.position); ring2.lookAt(camera.position);
      renderer.render(scene, camera);
    }
    animate(0);

    // Hide loader once WebGL is ready
    setTimeout(() => { document.getElementById('page-loader').classList.add('hidden'); }, 600);
  }

  function createParticles(count) {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({ color: 0x00ffd5, size: 0.02, transparent: true, opacity: 0.7 });
    const points = new THREE.Points(geo, mat);
    return points;
  }

  // Matrix-like subtle background text rain (optional lightweight CSS effect)
  // Intentionally omitted heavy canvas rain to keep performance high with WebGL scene.

  // Events & init
  function bindCTAs() {
    $$('[data-service-cta]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-service-cta'));
        const svc = content.services[idx];
        $('#message').value = `${svc.cta} — I’m interested in ${svc.name}.`;
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        $('#name').focus();
      });
    });

    $$('[data-cta]')?.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('href');
        if (target?.startsWith('#')) document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // Testimonials slider controls and autoplay
  function setupSlider() {
    const track = $('#slider-track'); if (!track) return;
    const prev = $('.slider-btn.prev'); const next = $('.slider-btn.next');
    const slideWidth = () => track.getBoundingClientRect().width / Math.round(track.scrollWidth / track.getBoundingClientRect().width * 3) || 300;
    const step = () => track.getBoundingClientRect().width * 0.9; // move by viewport width fraction

    function move(delta) { track.scrollBy({ left: delta, behavior: 'smooth' }); }
    prev.addEventListener('click', () => move(-step()));
    next.addEventListener('click', () => move(step()));
    track.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') move(step()); if (e.key === 'ArrowLeft') move(-step()); });

    let autoplay; const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function start() { if (!prefersReduced) autoplay = setInterval(() => move(step()), 5000); }
    function stop() { clearInterval(autoplay); }
    start();
    track.addEventListener('mouseenter', stop); track.addEventListener('mouseleave', start);
  }

  function init() {
    renderAbout();
    renderSkills();
    renderProjects();
    renderServices();
    renderTestimonials();
    renderSocials();
    enableTilt();
    setupForm();
    setupAnimations();
    observeInView();
    startHero3D();
    bindCTAs();
    setupSlider();
  }

  window.addEventListener('DOMContentLoaded', init);
})();

