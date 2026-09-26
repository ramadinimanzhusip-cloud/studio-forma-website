(() => {
  const root = document.getElementById('app-root');
  const header = document.getElementById('site-header');
  const menu = document.getElementById('main-nav');
  const menuToggle = document.getElementById('menu-toggle');
  const projects = window.STUDIO_PROJECTS || [];
  const routes = ['home', 'works', 'about', 'estimate'];
  const image = (src, alt, loading = 'lazy') => `<img src="${src}" alt="${alt}" loading="${loading}">`;

  function projectCard(project, index) {
    return `<a class="project-card" href="#/works/${project.id}" data-project="${project.id}" aria-label="Open ${project.title} case study">
      <div class="project-image">${image(project.image, project.alt)}<div class="project-hover"><span>${project.location}</span><span>${project.area} sq ft · ${project.year}</span></div></div>
      <div class="project-meta"><div><h3>${project.title}</h3><p>${project.category} / ${project.location}</p></div><span class="project-number">0${index + 1}</span></div>
    </a>`;
  }

  function homePage() {
    return `<div class="page home-page">
      <section class="home-hero" aria-label="Studio Forma introduction">
        <div class="hero-content">
          <div class="hero-topline"><span class="eyebrow">Independent architecture & interiors</span><span class="hero-index">EST. 2011 — NEW YORK / COPENHAGEN</span></div>
          <h1 class="hero-title">Architecture<br>as an extension<br>of <span class="outline">human ecology.</span></h1>
          <div class="hero-bottom"><p class="hero-note">We make enduring spaces that connect people to place, material, and one another.</p><div class="hero-stats"><div class="hero-stat"><strong>14</strong><span>Years in practice</span></div><div class="hero-stat"><strong>80+</strong><span>Global projects</span></div><div class="hero-stat"><strong>06</strong><span>AIA awards</span></div></div></div>
        </div><span class="scroll-cue">SCROLL TO EXPLORE ↓</span>
      </section>
      <section class="home-intro section-wrap"><div class="intro-grid"><div><span class="eyebrow">Our point of view</span><h2>Good architecture begins with paying attention.</h2></div><div class="intro-copy"><p>To the way light moves across a room. To the grain of a material. To the people who will gather there, and the living systems just beyond the threshold.</p><a class="text-link" href="#/about" data-route="about">Meet the studio <span>↗</span></a></div></div></section>
      <section class="feature-work section-wrap"><div class="section-head"><div><span class="eyebrow">Selected work · 2021—24</span><h2>Places with<br>a pulse.</h2></div><a class="text-link" href="#/works" data-route="works">View all projects <span>↗</span></a></div><div class="feature-grid">${projectCard(projects[0], 0)}${projectCard(projects[1], 1)}</div></section>
      <section class="home-quote"><div class="quote-inner"><span class="quote-mark">FIELD NOTE 01 / 04</span><blockquote>“The most lasting thing we can make is a place that gives something back.”</blockquote><span class="quote-credit">Studio Forma<br>Practice principle, no. 03</span></div></section>
    </div>`;
  }

  function worksPage() {
    return `<div class="page works-page"><section class="page-intro"><span class="eyebrow">A living portfolio / 2011—25</span><h1>Work in<br>good company.</h1><div class="page-intro-row"><p>Buildings are never solitary objects. Each project is an ongoing conversation with its setting, its materials, and the people who make it their own.</p><span class="micro-label">New York · Copenhagen · Beyond</span></div></section>
      <section class="section-wrap"><div class="filter-bar" role="group" aria-label="Filter projects">${['All', 'Residential', 'Commercial', 'Cultural', 'Adaptive Reuse'].map((label, i) => `<button class="filter-button${i === 0 ? ' active' : ''}" type="button" data-filter="${label}" aria-pressed="${i === 0}">${label}</button>`).join('')}</div>
      <div class="works-grid" id="works-grid">${projects.map((p, i) => `<div data-category="${p.category}">${projectCard(p, i)}</div>`).join('')}</div></section>
      <div class="drawer-backdrop" id="drawer-backdrop"></div><aside class="case-drawer" id="case-drawer" aria-label="Project case study" aria-hidden="true"></aside></div>`;
  }

  function aboutPage() {
    const partners = [
      ['Mara Ellison', 'Founding Partner · Design', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85', 'Portrait of architect Mara Ellison'],
      ['Jonas Berg', 'Founding Partner · Practice', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85', 'Portrait of architect Jonas Berg'],
      ['Sofia Reyes', 'Partner · Interiors', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85', 'Portrait of interior architect Sofia Reyes']
    ];
    const logos = ['KIN FOLK', 'ACE HOTEL', 'MOMA PS1', 'FIELDWORK', 'THE LINE', 'PUBLIC WORKS', 'NORTH + CO', 'A24', 'HAY', 'GOODLAND'];
    return `<div class="page about-page"><section class="page-intro"><span class="eyebrow">People, place, possibility</span><h1>Small studio.<br>Wide lens.</h1><div class="page-intro-row"><p>We are an independent architecture and interiors practice working across scales, geographies, and disciplines.</p><span class="micro-label">Brooklyn · Copenhagen</span></div></section>
      <section class="manifesto"><span class="manifesto-label">01 / How we work</span><div class="manifesto-copy"><h2>We believe the best spaces are <em>generous, grounded,</em> and alive to the world around them.</h2><p>Studio Forma is a collaborative practice of architects, interior designers, and curious people. Since 2011, we have brought clear thinking and a light touch to homes, workspaces, cultural places, and the spaces in between. Our process is open, our work is specific, and our measure of success is how a place feels long after the photographs are made.</p></div></section>
      <div class="studio-image">${image('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=88', 'Studio Forma team gathered around a worktable', 'eager')}</div>
      <section class="partners-section section-wrap"><div class="partners-head"><div><span class="eyebrow">The people behind the work</span><h2>Good work is<br>a team sport.</h2></div><p>Three partners · One shared practice</p></div><div class="partner-grid">${partners.map(p => `<article class="partner-card">${image(p[2], p[3])}<h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('')}</div></section>
      <section class="clients-section section-wrap"><span class="eyebrow">In thoughtful company</span><div class="client-grid">${logos.map((logo, i) => `<div class="client-logo">${i % 3 === 0 ? `<small>${logo}</small>` : logo}</div>`).join('')}</div></section></div>`;
  }

  function estimatePage() {
    return `<div class="page estimate-page"><section class="page-intro"><span class="eyebrow">A good place to begin</span><div class="estimate-title-row"><h1>Make room<br>for an idea.</h1><p>Tell us a little about what you’re imagining. This early range helps frame the conversation; every project is shaped around its own brief.</p></div></section>
      <section class="section-wrap"><div class="estimator-layout"><div class="estimator-main"><div class="step-row"><span><strong>01</strong> / Project type</span><span class="estimate-step-label">Choose a direction</span></div><div class="step-content" data-step-content="1"><h2>What are we making together?</h2><div class="type-options"><button class="type-option selected" data-type="residence" type="button"><span>01 / Private</span><strong>Custom<br>Residence</strong></button><button class="type-option" data-type="commercial" type="button"><span>02 / Public</span><strong>Commercial<br>Interior</strong></button><button class="type-option" data-type="reuse" type="button"><span>03 / Existing</span><strong>Adaptive<br>Reuse</strong></button></div></div>
        <div class="step-row"><span><strong>02</strong> / Project area</span><span class="estimate-step-label">Set a scale</span></div><div class="step-content" data-step-content="2"><h2>How much space are we shaping?</h2><div class="area-value"><output id="area-output">4,000</output> <small>sq ft</small></div><div class="range-wrap"><input class="area-range" id="area-range" type="range" min="1000" max="20000" step="250" value="4000" aria-label="Total project area"><div class="range-labels"><span>1,000 SQ FT</span><span>20,000 SQ FT</span></div></div></div>
        <div class="step-row"><span><strong>03</strong> / Scope</span><span class="estimate-step-label">Add your services</span></div><div class="step-content" data-step-content="3"><h2>What support would be useful?</h2><div class="addon-list"><label class="addon-option"><span class="addon-left"><input class="addon-check" type="checkbox" value="permit"><span><span class="addon-name">Permit handling</span><span class="addon-description">Coordination, filings, and agency review</span></span></span><span class="addon-rate">+8% OF FEE</span></label><label class="addon-option"><span class="addon-left"><input class="addon-check" type="checkbox" value="landscape"><span><span class="addon-name">Landscape architecture</span><span class="addon-description">Site, planting, and outdoor rooms</span></span></span><span class="addon-rate">+12% OF FEE</span></label><label class="addon-option"><span class="addon-left"><input class="addon-check" type="checkbox" value="interiors"><span><span class="addon-name">Full interior design</span><span class="addon-description">Furniture, fixtures, and finish detailing</span></span></span><span class="addon-rate">+25% OF FEE</span></label></div></div>
        <div class="estimate-actions"><span class="estimate-progress" id="estimate-progress">01 — 03 / Scope builder</span><button id="continue-inquiry" type="button">Continue to inquiry <span>↗</span></button></div>
        <form class="inquiry-form" id="inquiry-form"><h2>Let’s start a conversation.</h2><p>Share your details and we’ll follow up to learn more about the project.</p><div class="form-grid"><div class="field"><label for="contact-name">Your name</label><input id="contact-name" name="name" required autocomplete="name" placeholder="Name"></div><div class="field"><label for="contact-email">Email address</label><input id="contact-email" name="email" type="email" required autocomplete="email" placeholder="you@example.com"></div><div class="field"><label for="contact-location">Project location</label><input id="contact-location" name="location" placeholder="City, State / Country"></div><div class="field"><label for="contact-timeline">Ideal start</label><select id="contact-timeline" name="timeline"><option value="Exploring">Just exploring</option><option value="Within 6 months">Within 6 months</option><option value="6–12 months">6–12 months</option><option value="12+ months">12+ months</option></select></div><div class="field full"><label for="contact-brief">A few words about your idea</label><textarea id="contact-brief" name="brief" placeholder="What are you hoping to make?" rows="3"></textarea></div></div><button class="submit-inquiry" type="submit">Prepare project inquiry <span>↗</span></button><div class="form-confirmation" id="form-confirmation" role="status"></div></form>
      </div><aside class="estimate-summary" aria-live="polite"><div class="summary-top"><span>Preliminary design fee</span><span>Live estimate</span></div><div class="summary-label">Estimated range · USD</div><div class="summary-range" id="summary-range">$112k–$168k</div><div class="summary-unit" id="summary-unit">$28–$42 per sq ft · 4,000 sq ft</div><hr class="summary-rule"><div class="summary-breakdown"><span>Project type</span><span id="summary-type">Custom residence</span></div><div class="summary-breakdown"><span>Base design fee</span><span id="summary-base">$112k–$168k</span></div><div class="summary-breakdown"><span>Selected add-ons</span><span id="summary-addons">None</span></div><p class="summary-note">A directional range for early planning. Final fees depend on site, scope, schedule, and project complexity.</p></aside></div></section></div>`;
  }

  function floorPlan(project) {
    const layouts = {
      'cedar-house': '<rect x="22" y="22" width="120" height="74"/><rect x="142" y="22" width="104" height="74"/><rect class="plan-fill" x="22" y="96" width="224" height="42"/><path d="M82 22v45h60M189 22v74M142 67h47"/><text x="40" y="53">LIVING</text><text x="165" y="53">PRIVATE</text><text x="101" y="119">COURT</text>',
      'atelier-north': '<rect x="22" y="27" width="224" height="108"/><rect class="plan-fill" x="91" y="27" width="85" height="108"/><path d="M91 75H22M176 75h70M55 27v48M210 75v60"/><text x="109" y="62">COMMONS</text><text x="35" y="101">STUDIO</text><text x="189" y="106">MAKER</text>',
      'house-of-water': '<rect x="22" y="40" width="224" height="72"/><rect class="plan-fill" x="22" y="112" width="224" height="25"/><path d="M93 40v72M164 40v72M22 78h71M164 78h82"/><text x="40" y="65">LIVING</text><text x="112" y="65">SLEEP</text><text x="181" y="65">STUDY</text><text x="110" y="129">GARDEN</text>',
      'common-ground': '<rect x="28" y="20" width="210" height="120"/><rect class="plan-fill" x="97" y="20" width="72" height="120"/><path d="M28 80h69M169 80h69M62 20v60M203 80v60M97 52h72"/><text x="111" y="44">GALLERY</text><text x="37" y="111">STUDIO</text><text x="179" y="111">HALL</text>',
      'still-life': '<rect x="35" y="20" width="195" height="120"/><rect class="plan-fill" x="35" y="20" width="65" height="120"/><path d="M100 20v120M165 20v120M100 72h65M165 93h65"/><text x="48" y="78">GALLERY</text><text x="116" y="50">WORK</text><text x="176" y="66">LIVING</text>',
      'foundry-09': '<rect x="20" y="22" width="230" height="116"/><rect class="plan-fill" x="89" y="22" width="93" height="116"/><path d="M89 22v116M182 22v116M20 80h69M182 80h68M44 22v58M225 80v58"/><text x="110" y="79">COMMON HALL</text><text x="32" y="111">WORK</text><text x="195" y="111">WORK</text>'
    };
    return `<svg class="plan-svg" viewBox="0 0 270 160" role="img" aria-label="Schematic floor plan for ${project.title}">${layouts[project.id] || layouts['cedar-house']}</svg>`;
  }

  function openProject(id) {
    const project = projects.find(item => item.id === id);
    const drawer = document.getElementById('case-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (!project || !drawer || !backdrop) return;
    drawer.innerHTML = `<button class="drawer-close" type="button" aria-label="Close case study">×</button><p class="drawer-kicker">Selected work / ${project.category}</p><h2>${project.title}</h2><p class="drawer-subtitle">${project.location} · ${project.year}</p>${image(project.image, project.alt, 'eager')}<div class="drawer-stats"><div class="drawer-stat"><strong>${project.area}</strong><span>Square feet</span></div><div class="drawer-stat"><strong>${project.year}</strong><span>Completed</span></div><div class="drawer-stat"><strong>${project.category}</strong><span>Typology</span></div></div><section class="drawer-section"><h3>Design philosophy</h3><p>${project.philosophy}</p></section><section class="drawer-section"><h3>Plan / ${project.plan}</h3>${floorPlan(project)}</section><section class="drawer-section"><h3>Construction notes</h3><div class="spec-list">${Object.entries(project.specs).map(([key, value]) => `<div><span>${key}</span>${value}</div>`).join('')}</div></section><a href="#/estimate" data-route="estimate" class="text-link drawer-start">Discuss a project like this <span>↗</span></a>`;
    drawer.classList.add('open'); backdrop.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); document.body.classList.add('drawer-open');
    drawer.querySelector('.drawer-close').addEventListener('click', closeDrawer);
    drawer.querySelector('[data-route="estimate"]').addEventListener('click', () => { closeDrawer(); navigate('estimate'); });
    backdrop.addEventListener('click', closeDrawer, { once: true });
  }

  function closeDrawer() {
    const drawer = document.getElementById('case-drawer'); const backdrop = document.getElementById('drawer-backdrop');
    if (!drawer || !backdrop) return;
    drawer.classList.remove('open'); backdrop.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); document.body.classList.remove('drawer-open');
  }

  function setFilter(category) {
    document.querySelectorAll('.filter-button').forEach(button => {
      const selected = button.dataset.filter === category;
      button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('#works-grid > [data-category]').forEach(card => { card.hidden = category !== 'All' && card.dataset.category !== category; });
  }

  function currentRoute() {
    const path = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    return { page: routes.includes(path[0]) ? path[0] : 'home', project: path[0] === 'works' ? path[1] : null };
  }

  function navigate(page, projectId = null) {
    const next = projectId ? `#/works/${projectId}` : `#/${page}`;
    if (location.hash === next) render(); else location.hash = next;
  }

  function render() {
    const { page, project } = currentRoute();
    const pageTemplates = { home: homePage, works: worksPage, about: aboutPage, estimate: estimatePage };
    root.innerHTML = pageTemplates[page]();
    header.classList.toggle('is-light', page !== 'home');
    menu.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('[data-route]').forEach(link => {
      if (link.dataset.boundRoute) return;
      link.dataset.boundRoute = 'true';
      link.addEventListener('click', event => { event.preventDefault(); const route = link.dataset.route; navigate(route); });
    });
    if (page === 'works') {
      document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
      document.querySelectorAll('[data-project]').forEach(card => card.addEventListener('click', event => { event.preventDefault(); navigate('works', card.dataset.project); }));
      if (project) openProject(project);
    }
    if (page === 'estimate' && window.initEstimator) window.initEstimator();
    root.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: 'instant' });
  }

  menuToggle.addEventListener('click', () => {
    const open = !menu.classList.contains('open'); menu.classList.toggle('open', open); menuToggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeDrawer(); });
  window.addEventListener('hashchange', render);
  document.getElementById('download-zip').addEventListener('click', async () => {
    const status = document.getElementById('zip-status');
    if (!window.JSZip) { status.textContent = 'The ZIP library could not load. Check your connection and try again.'; return; }
    const files = ['index.html', 'css/main.css', 'js/router.js', 'js/estimator.js', 'js/projectsData.js', 'README.md'];
    const button = document.getElementById('download-zip'); button.disabled = true; status.textContent = 'Preparing the complete codebase…';
    try {
      const archive = new window.JSZip();
      await Promise.all(files.map(async path => {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Could not read ${path} (${response.status})`);
        archive.file(path, await response.blob());
      }));
      const blob = await archive.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob); const link = document.createElement('a');
      link.href = url; link.download = 'studio-forma-website.zip'; document.body.appendChild(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000); status.textContent = 'Your codebase download is ready.';
    } catch (error) {
      status.textContent = `${error.message}. Open the site through a local web server to create the ZIP.`;
    } finally { button.disabled = false; }
  });
  if (!location.hash) history.replaceState(null, '', '#/home');
  render();
})();
