/* =========================================
   TOKENS
   ========================================= */
:root {
  --bg:          #181818;
  --bg-card:     #222222;
  --bg-hover:    rgba(0, 0, 0, 0.72);
  --text-primary:   #FFFFFF;
  --text-secondary: #9A9A9A;
  --text-muted:     #555555;
  --accent:      #0057B8;
  --accent-hover:#0070E8;
  --sidebar-w:   220px;
  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'Inter', sans-serif;
  --radius:       4px;
  --transition:   0.28s cubic-bezier(.4,0,.2,1);
}

/* =========================================
   RESET / BASE
   ========================================= */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { font-size: 16px; }

body {
  background: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-body);
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }
ul { list-style: none; }
img { display: block; width: 100%; height: 100%; object-fit: cover; }

/* =========================================
   SIDEBAR
   ========================================= */
.sidebar {
  width: var(--sidebar-w);
  min-height: 100vh;
  background: var(--bg);
  border-right: 1px solid #2A2A2A;
  padding: 40px 28px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0; left: 0;
  z-index: 100;
  transition: transform var(--transition);
}

.sidebar__brand { margin-bottom: 48px; }

.sidebar__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--text-primary);
}

.sidebar__role {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--text-secondary);
  margin-top: 6px;
}

.sidebar__nav { margin-bottom: 32px; }
.sidebar__nav--bottom { margin-top: auto; margin-bottom: 0; }

.nav__label {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--text-muted);
  margin-bottom: 14px;
}

.nav__back {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
  transition: color var(--transition);
}
.nav__back:hover { color: var(--text-primary); }

.nav__link {
  display: block;
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--text-secondary);
  padding: 5px 0;
  transition: color var(--transition);
  line-height: 1.5;
}
.nav__link:hover,
.nav__link--active { color: var(--text-primary); }

/* =========================================
   MOBILE HEADER
   ========================================= */
.mobile-header {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 56px;
  background: var(--bg);
  border-bottom: 1px solid #2A2A2A;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  z-index: 200;
}

.mobile-header__name {
  display: flex;
  flex-direction: column;
}
.name-line {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  line-height: 1.2;
}
.name-role {
  font-family: var(--font-display);
  font-size: 0.55rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--text-secondary);
}

.mobile-back {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--text-secondary);
  transition: color var(--transition);
}
.mobile-back:hover { color: var(--text-primary); }

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  transition: all var(--transition);
}
.hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.is-open span:nth-child(2) { opacity: 0; }
.hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 90;
}
.sidebar-overlay.is-visible { display: block; }

/* =========================================
   MAIN CONTENT
   ========================================= */
.main {
  margin-left: var(--sidebar-w);
  padding: 40px;
  flex: 1;
  min-height: 100vh;
}

/* =========================================
   PROJECTS GRID
   ========================================= */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
}

/* =========================================
   CARD
   ========================================= */
.card {
  display: block;
  background: var(--bg-card);
  cursor: pointer;
  position: relative;
  text-decoration: none;
  overflow: hidden;
}

.card__image-wrap {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #2A2A2A;
}

/* Placeholder when no image */
.card__image-wrap--placeholder::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--transition), filter 0.5s var(--transition);
  filter: grayscale(100%) brightness(0.7);
}

/* Hover overlay — the signature element */
.card__hover-overlay {
  position: absolute;
  inset: 0;
  background: var(--bg-hover);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 32px;
  opacity: 0;
  transition: opacity var(--transition);
}

.card__hover-label {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin-bottom: 4px;
}

.card__hover-company {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.card__hover-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.05;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: -0.01em;
}

/* Card hover state */
.card:hover .card__img {
  transform: scale(1.03);
  filter: grayscale(60%) brightness(0.5);
}
.card:hover .card__hover-overlay { opacity: 1; }

/* Card meta (below image) */
.card__meta {
  padding: 20px 24px 24px;
}

.card__eyebrow {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
}

.card__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.card__subtitle {
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--text-secondary);
  font-style: italic;
  line-height: 1.5;
}

/* =========================================
   PROJECT DETAIL
   ========================================= */
.project-detail {
  max-width: 800px;
}

.project-detail__loading {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.project-detail__header {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid #2A2A2A;
}

.project-detail__eyebrow {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: var(--accent);
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}

.project-detail__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.project-detail__subtitle {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-secondary);
  font-style: italic;
  line-height: 1.6;
}

.project-detail__hero {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #2A2A2A;
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: var(--radius);
}

.project-detail__hero img {
  filter: grayscale(30%) brightness(0.85);
  transition: filter 0.4s ease;
}
.project-detail__hero img:hover { filter: grayscale(0%) brightness(1); }

.project-detail__section {
  margin-bottom: 40px;
}

.project-detail__section-label {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.project-detail__section-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.project-detail__text {
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

.project-detail__text strong {
  color: var(--text-primary);
  font-weight: 500;
}

/* Material-style Figma button */
.btn-figma {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--accent);
  color: #FFFFFF;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: var(--radius);
  margin-top: 32px;
  transition: background var(--transition), box-shadow var(--transition), transform var(--transition);
  box-shadow: 0 2px 8px rgba(0,87,184,0.3);
}

.btn-figma:hover {
  background: var(--accent-hover);
  box-shadow: 0 4px 16px rgba(0,87,184,0.5);
  transform: translateY(-1px);
}

.btn-figma:active { transform: translateY(0); }

.btn-figma__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* =========================================
   STATIC PAGES (About / Contact)
   ========================================= */
.static-page {
  max-width: 680px;
}

.static-page__header {
  margin-bottom: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid #2A2A2A;
}

.static-page__eyebrow {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: var(--accent);
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}

.static-page__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--text-primary);
  margin-bottom: 10px;
}

.static-page__subtitle {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.static-page__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.static-page__body p {
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

.static-page__body strong {
  color: var(--text-primary);
  font-weight: 500;
}

/* Skills grid */
.static-page__skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.skill-group__label {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.skill-group ul {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-group li {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Contact links */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: color var(--transition);
}
.contact-link:hover { color: var(--text-primary); }

.contact-link__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #333;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: var(--font-display);
  color: var(--text-secondary);
  flex-shrink: 0;
  transition: border-color var(--transition), color var(--transition);
}
.contact-link:hover .contact-link__icon {
  border-color: var(--accent);
  color: var(--accent);
}

/* =========================================
   RESPONSIVE
   ========================================= */
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  body { display: block; }

  .mobile-header { display: flex; }

  .sidebar {
    transform: translateX(-100%);
    top: 0;
    height: 100%;
  }
  .sidebar.is-open { transform: translateX(0); }

  .main {
    margin-left: 0;
    padding: 80px 20px 40px;
  }

  .projects-grid { gap: 1px; }

  .card__meta { padding: 14px 16px 18px; }

  .card__hover-title {
    font-size: clamp(1.2rem, 6vw, 2rem);
  }

  .project-detail__title,
  .static-page__title {
    font-size: clamp(1.4rem, 6vw, 2rem);
  }

  .static-page__skills {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .main { padding: 72px 16px 32px; }

  .card__hover-overlay { padding: 20px; }

  .btn-figma { width: 100%; justify-content: center; }
}

/* =========================================
   REDUCED MOTION
   ========================================= */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; }
}
