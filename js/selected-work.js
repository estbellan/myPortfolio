/* Independent portfolio case studies. All diagrams are illustrations, never client screenshots. */
const CASES = {
  extractos: {
    number: "01",
    name: "Todo Extractos",
    category: "Independent product · Product design · Financial workflows",
    status: "Private beta",
    headline: "Making messy financial information easier to act on.",
    intro: "A workflow for turning bank statement PDFs into reviewable, categorized accounting data. Instead of hiding complexity behind an automatic result, the experience makes uncertainty visible and keeps the human in control.",
    challenge: "Bank statements vary in structure, transaction labels and balance conventions. A useful interface must help accounting professionals identify what was interpreted correctly, resolve exceptions and reach a trustworthy export.",
    response: "I structured the experience around progressive disclosure: choose a bank and file, inspect parsed transactions, review missing or suspicious categories, and finalize only after the important inconsistencies are resolved.",
    decisions: [
      ["Guided review", "A step-by-step flow helps users understand where they are, what remains unresolved and when an export is ready."],
      ["Explicit feedback", "Warnings and validation states surface uncertainty instead of letting ambiguous entries silently pass."],
      ["Reusable learning", "User-defined categorization rules make repeated work more consistent without removing manual control."]
    ],
    outputs: ["Information architecture and interaction flows", "Responsive product interface", "Validation and feedback patterns", "Angular Material implementation"],
    results: "The repository documents a functional parsing and categorization interface, including rule learning, balance checks, authentication and export-oriented review. Public adoption or time-savings metrics have not been independently established.",
    lessons: "In operational UX, clarity is not just visual simplicity. It is the ability to understand and correct the system's decisions.",
    flow: ["Upload statement", "Review transactions", "Resolve exceptions", "Export summary"],
    labels: ["Human review", "Validation", "Rules"],
    disclaimer: "Illustrative process diagram. No bank documents, user data or production screenshots are shown.",
    hue: "lime"
  },
  auturno: {
    number: "02",
    name: "Auturno",
    category: "Independent product · Service design · B2B2C",
    status: "In development",
    headline: "A more coherent journey from booking to vehicle delivery.",
    intro: "Auturno explores a workshop operations platform designed to connect scheduling, diagnosis, quotations, repairs and customer communication into one service journey.",
    challenge: "A repair workshop is a network of dependencies: availability, diagnosis, approvals, technician capacity and delivery expectations. If each stage is designed in isolation, information and trust are lost along the way.",
    response: "The product model follows the life cycle of a work order, clarifies the difference between diagnosis and repair, and treats workshop capacity as time rather than simply a count of vehicles.",
    decisions: [
      ["One visible journey", "Work-order states connect front-desk work, technicians and customer-facing updates."],
      ["Capacity-aware scheduling", "Availability is framed around actual workshop time and realistic delivery promises."],
      ["Clear responsibility", "Business rules belong to the API, while the interface focuses on the next meaningful user action."]
    ],
    outputs: ["Product scope and service blueprint", "State model for work orders", "Mobile-first interaction principles", "Angular / NestJS architecture"],
    results: "A documented product model and application architecture exist in the repository. This is an ongoing independent product, not a claim of commercial launch or measured customer impact.",
    lessons: "Good service design makes operational constraints understandable without exposing unnecessary system complexity.",
    flow: ["Book", "Diagnose", "Approve quote", "Repair & deliver"],
    labels: ["Workshop", "Customer", "Work order"],
    disclaimer: "Illustrative service-flow diagram. The interface is under development.",
    hue: "blue"
  },
  contadores: {
    number: "03",
    name: "Todo Contadores",
    category: "Independent web project · Visual communication · Front-end",
    status: "Website implementation",
    headline: "A clearer identity for a specialized digital service.",
    intro: "A branded web presence for an accounting-focused offer. The design challenge is to communicate a technical service in a language that feels direct, credible and approachable.",
    challenge: "Specialized services often struggle with a gap between what a product does and what potential users immediately understand. A useful landing page needs clear hierarchy, consistent identity and a simple path to explore the offer.",
    response: "The website uses a structured hero, service sections, FAQs and contact pathways. Typography, identity elements and a bilingual content structure support clarity across audiences.",
    decisions: [
      ["Start with the promise", "A strong hero and service hierarchy prioritize understanding over feature overload."],
      ["Design for scanning", "Typography, section rhythm and focused calls to action help readers locate information quickly."],
      ["Language-aware interface", "Spanish and English content can be presented through a shared design without separate disconnected layouts."]
    ],
    outputs: ["Visual hierarchy and branded landing page", "Responsive HTML and CSS", "Bilingual interaction patterns", "Navigation, FAQ and contact sections"],
    results: "The repository contains the website implementation, including branding assets, a responsive layout, accessibility affordances and language controls. Conversion metrics have not been verified.",
    lessons: "Brand design on the web is not decoration: it helps people understand what a business stands for and what they can do next.",
    flow: ["Understand offer", "Explore services", "Find answers", "Make contact"],
    labels: ["Identity", "Typography", "Web"],
    disclaimer: "Illustrative brand-system diagram, not a captured production screen.",
    hue: "peach"
  },
  atelier: {
    number: "04",
    name: "ATELIER",
    category: "Independent concept · Design systems · Creative technology",
    status: "Concept prototype",
    headline: "A design language that survives the trip from idea to code.",
    intro: "An original portfolio experiment for a fictional creative-project management product. It demonstrates how visual decisions can be organized as reusable design tokens, components and interaction states.",
    challenge: "A polished screen alone is difficult to scale. The design needs rules for typography, color, spacing, surfaces, component states and responsive behavior.",
    response: "The prototype explores a compact visual identity, semantic CSS tokens, light and dark themes, interface components and a guided multi-step interaction.",
    decisions: [
      ["Build foundations first", "Tokens provide a shared vocabulary for appearance and behavior rather than isolated screen-level values."],
      ["Show component states", "Buttons, fields and progress feedback communicate how the system responds to people."],
      ["Make handoff tangible", "Implementation in HTML, CSS and JavaScript demonstrates how design decisions map into a working interface."]
    ],
    outputs: ["Original visual identity exploration", "CSS tokens and component patterns", "Responsive interaction prototype", "Documented three-step flow"],
    results: "A local prototype and case-study draft have been produced. A native Figma component library, formal user testing and measured product outcomes are not yet part of this work.",
    lessons: "The credibility of a design system comes from repeatable rules and real implementation, not just a gallery of attractive components.",
    flow: ["Foundations", "Components", "Interaction", "Implementation"],
    labels: ["Tokens", "States", "Handoff"],
    disclaimer: "Original concept illustration. This is not client work and does not imply an existing Figma library.",
    hue: "violet"
  }
};

function safeCaseId() {
  const id = new URLSearchParams(window.location.search).get("id");
  return Object.prototype.hasOwnProperty.call(CASES, id) ? id : null;
}
function renderCase() {
  const container = document.getElementById("case-root");
  if (!container) return;
  const id = safeCaseId();
  if (!id) {
    container.innerHTML = '<div class="case-error"><h1>Case study not found.</h1><p><a href="index.html#work">Return to selected work</a></p></div>';
    return;
  }
  const c = CASES[id];
  document.title = c.name + " — Case Study | Esteban Bellantonio";
  const nextIds = ["extractos", "auturno", "contadores", "atelier"];
  const next = CASES[nextIds[(nextIds.indexOf(id) + 1) % nextIds.length]];
  const nextId = nextIds[(nextIds.indexOf(id) + 1) % nextIds.length];
  const decisions = c.decisions.map((d, i) => '<div class="case-decision"><span class="case-decision__index">0' + (i + 1) + '</span><div><h3>' + d[0] + '</h3><p>' + d[1] + '</p></div></div>').join("");
  const outputs = c.outputs.map(s => '<li>' + s + '</li>').join("");
  const steps = c.flow.map((s, i) => '<li><span>0' + (i + 1) + '</span>' + s + '</li>').join("");
  const chips = c.labels.map(s => '<span class="case-chip">' + s + '</span>').join("");
  container.innerHTML = '<div class="case-kicker"><a href="index.html#work">← Selected work</a><span>Case study / ' + c.number + '</span></div>' +
  '<header class="case-intro"><span class="eyebrow">' + c.category + '</span><h1>' + c.headline + '</h1><p>' + c.intro + '</p><span class="case-status">' + c.status + '</span></header>' +
  '<section class="case-illustration case-illustration--' + c.hue + '" aria-label="Illustrative diagram for ' + c.name + '"><div class="case-illustration__top"><b>' + c.name + '</b><span>INDEPENDENT WORK / ' + c.number + '</span></div><div class="case-illustration__center"><div class="case-illustration__monogram">' + c.number + '</div><div class="case-illustration__chips">' + chips + '</div></div><div class="case-illustration__bottom">DESIGN · THINKING · EXECUTION</div></section>' +
  '<p class="illustration-caption">' + c.disclaimer + '</p>' +
  '<section class="case-columns"><div><span class="eyebrow">The challenge</span><h2>Understanding the real problem.</h2></div><p>' + c.challenge + '</p></section>' +
  '<section class="case-columns"><div><span class="eyebrow">The response</span><h2>Structuring a useful solution.</h2></div><p>' + c.response + '</p></section>' +
  '<section class="case-panel"><span class="eyebrow">Illustrative user journey</span><ol class="case-flow">' + steps + '</ol><p class="case-panel__note">Conceptual reconstruction of the product flow; not a captured production artifact.</p></section>' +
  '<section class="case-decisions"><span class="eyebrow">Key design decisions</span><h2>Why it works this way.</h2><div class="case-decisions__list">' + decisions + '</div></section>' +
  '<section class="case-columns"><div><span class="eyebrow">Artifacts & implementation</span><h2>Beyond the mockup.</h2></div><ul class="case-outputs">' + outputs + '</ul></section>' +
  '<section class="case-columns"><div><span class="eyebrow">Evidence & current status</span><h2>What can be demonstrated.</h2></div><p>' + c.results + '</p></section>' +
  '<section class="case-quote"><span class="eyebrow">Takeaway</span><blockquote>“' + c.lessons + '”</blockquote></section>' +
  '<footer class="case-end"><a href="index.html#work">← All selected work</a><a href="case-study.html?id=' + nextId + '">Next: ' + next.name + ' ↗</a></footer>';
}
function initPortfolioMenu() {
  const toggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  if (!toggle || !sidebar) return;
  toggle.addEventListener("click", () => {
    const open = sidebar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  sidebar.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    sidebar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}
document.addEventListener("DOMContentLoaded", () => { renderCase(); initPortfolioMenu(); });
