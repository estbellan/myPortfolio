// =============================================
// PROJECTS DATA — edit this to add/update projects
// =============================================
const PROJECTS = {
  onboard: {
    company: "Volkswagen Financial Services",
    title: "Pre-approved Credit Platform",
    subtitle: "Designing a smooth onboarding experience to boost loan requests",
    heroImage: "images/onboard.jpg",
    sections: [
      {
        label: "Project Overview",
        text: `<strong>Volkswagen Financial Services</strong> needed to improve the experience of users looking to acquire a new vehicle through financing. The goal was simple: encourage users to complete the pre-approval form, increasing conversion from interest to submitted applications.`,
      },
      {
        label: "The Challenge",
        text: `The existing flow had too many steps with little visual feedback on progress. Users abandoned the form before reaching the final submission step, and the design lacked trust signals that would reassure first-time applicants.`,
      },
      {
        label: "My Role",
        text: `I led the UX research, information architecture, and full Figma prototyping. I collaborated with the backend team to simplify the form field structure and introduced a step indicator (Paso 1 de 2 / Paso 2 de 2) that reduced perceived complexity.`,
      },
    ],
    figmaUrl: "https://www.figma.com/proto/your-link-here",
  },

  backoffice: {
    company: "Volkswagen Financial Services",
    title: "Backoffice Migration",
    subtitle: "A journey into user-specific design challenges",
    heroImage: "images/backoffice.jpg",
    sections: [
      {
        label: "Project Overview",
        text: `The original backoffice system for <strong>VWFS corporate clients</strong> was built on a dated VB6 framework — a maze of modal windows and buttons with little visual distinction or usability. Our goal was to migrate the system to the cloud with a modern interface.`,
      },
      {
        label: "The Challenge",
        text: `Legacy systems carry years of edge cases and hidden business logic. Before designing, I conducted structured interviews with the actual users (loan officers and backoffice operators) to map every workflow and identify where the old system caused daily friction.`,
      },
      {
        label: "Outcome",
        text: `The new interface reduced average task completion time significantly, with operators reporting a notably smoother experience navigating client records and approvals. The system was deployed to production on Azure.`,
      },
    ],
    figmaUrl: "https://www.figma.com/proto/your-link-here",
  },

  corporate: {
    company: "Volkswagen Financial Services",
    title: "From Paper to Platform",
    subtitle: "Transforming corporate onboarding into a streamlined, digital-first experience",
    heroImage: "images/corporate.jpg",
    sections: [
      {
        label: "Project Overview",
        text: `We developed a new web platform for <strong>corporate clients</strong>, focusing on simplifying their digital <strong>onboarding process</strong>. This project aimed to <strong>streamline the registration and documentation</strong> for legal entities, which previously involved a <strong>cumbersome, paper-heavy process</strong>.`,
      },
      {
        label: "The Process",
        text: `Working closely with legal and compliance teams, I mapped every document requirement and translated it into a guided digital flow. Each screen was tested with real corporate account managers before moving to development.`,
      },
      {
        label: "Impact",
        text: `The platform reduced onboarding time from days to hours, eliminated physical document handling, and improved data accuracy through inline validation. The design system built for this project became the foundation for subsequent VWFS products.`,
      },
    ],
    figmaUrl: "https://www.figma.com/proto/your-link-here",
  },

  vehicle: {
    company: "Volkswagen Financial Services",
    title: "Post Oferta Web Enhancement",
    subtitle: "Refreshing the Web Experience and Optimizing Vehicle Dispatch Operations",
    heroImage: "images/vehicle.jpg",
    sections: [
      {
        label: "Project Overview",
        text: `The Post Oferta platform <strong>manages vehicles after credit approval</strong> within VWFS. We were tasked with <strong>refreshing the UI</strong> of the existing system and <strong>adding a new module</strong> to manage vehicle lots, assignments, and dispatches.`,
      },
      {
        label: "The Challenge",
        text: `The existing UI had grown organically over years without a coherent design language. Tables, forms, and modals each followed different interaction patterns. The new vehicle lot module also had to integrate seamlessly with the existing codebase without a full rewrite.`,
      },
      {
        label: "Solution",
        text: `I established a consistent component library within Figma, aligned with VWFS brand guidelines, and used it to standardize all existing screens while designing the new lot management module from scratch. The result is a cohesive interface that operators can navigate predictably.`,
      },
    ],
    figmaUrl: "https://www.figma.com/proto/your-link-here",
  },
};

// =============================================
// RENDER
// =============================================
function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function renderProject(id) {
  const project = PROJECTS[id];
  const container = document.getElementById('projectContent');
  if (!container) return;

  if (!project) {
    container.innerHTML = `
      <div class="project-detail__loading">
        Project not found. <a href="index.html" style="color:var(--accent)">← Go home</a>
      </div>`;
    return;
  }

  // Update page title
  document.title = `${project.title} — Esteban Bellantonio`;

  // Mark active nav link
  document.querySelectorAll('.nav__link').forEach(link => {
    if (link.href.includes(id)) link.classList.add('nav__link--active');
  });

  const sectionsHTML = project.sections.map(s => `
    <div class="project-detail__section">
      <p class="project-detail__section-label">${s.label}</p>
      <p class="project-detail__text">${s.text}</p>
    </div>
  `).join('');

  const heroHTML = `
    <div class="project-detail__hero">
      <img
        src="${project.heroImage}"
        alt="${project.title}"
        onerror="this.parentElement.style.background='#2a2a2a'"
      />
    </div>
  `;

  const figmaBtn = project.figmaUrl ? `
    <a
      href="${project.figmaUrl}"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-figma"
    >
      <svg class="btn-figma__icon" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="white"/>
        <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="white"/>
        <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="white"/>
        <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="white"/>
        <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="white"/>
      </svg>
      View Prototype in Figma
    </a>
  ` : '';

  container.innerHTML = `
    <header class="project-detail__header">
      <span class="project-detail__eyebrow">Project · ${project.company}</span>
      <h1 class="project-detail__title">${project.title}</h1>
      <p class="project-detail__subtitle">"${project.subtitle}"</p>
    </header>
    ${heroHTML}
    ${sectionsHTML}
    ${figmaBtn}
  `;
}

// Init on project page
const pid = getProjectId();
if (pid) renderProject(pid);
