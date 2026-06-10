<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact — Esteban Bellantonio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>

  <header class="mobile-header">
    <div class="mobile-header__name">
      <a href="index.html" class="mobile-back">← Back</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </header>

  <aside class="sidebar" id="sidebar">
    <div class="sidebar__brand">
      <a href="index.html" style="text-decoration:none;color:inherit">
        <p class="sidebar__name">ESTEBAN<br>BELLANTONIO</p>
        <p class="sidebar__role">UX/UI DESIGNER</p>
      </a>
    </div>
    <nav class="sidebar__nav">
      <a href="index.html" class="nav__back">← Home</a>
    </nav>
    <nav class="sidebar__nav sidebar__nav--bottom">
      <ul>
        <li><a href="about.html" class="nav__link">About Me</a></li>
        <li><a href="contact.html" class="nav__link nav__link--active">Contact</a></li>
      </ul>
    </nav>
  </aside>

  <div class="sidebar-overlay" id="sidebarOverlay"></div>

  <main class="main">
    <article class="static-page">
      <header class="static-page__header">
        <span class="static-page__eyebrow">Contact</span>
        <h1 class="static-page__title">Let's work together</h1>
        <p class="static-page__subtitle">Open for freelance projects and full-time opportunities.</p>
      </header>

      <div class="static-page__body">
        <p>If you have a product that needs thoughtful UX or a frontend that needs to match the design, feel free to reach out.</p>
      </div>

      <div class="contact-links">
        <a href="mailto:esteban.bellantonio@dicsys.com" class="contact-link">
          <span class="contact-link__icon">✉</span>
          <span class="contact-link__text">esteban.bellantonio@dicsys.com</span>
        </a>
        <a href="https://linkedin.com/in/ebellantonio" target="_blank" rel="noopener" class="contact-link">
          <span class="contact-link__icon">in</span>
          <span class="contact-link__text">linkedin.com/in/ebellantonio</span>
        </a>
      </div>
    </article>
  </main>

  <script src="js/main.js"></script>
</body>
</html>
