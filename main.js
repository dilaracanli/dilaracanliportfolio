(() => {
  const C = window.CONTENT;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  let lang = "en";
  try { lang = localStorage.getItem("lang") || (navigator.language.startsWith("tr") ? "tr" : "en"); } catch (_) {}
  let filter = "all";

  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en : v);
  const get = (path) => path.split(".").reduce((o, k) => o?.[k], C);

  // Görsel eklenmemiş projeler için çizgisel mimari yer tutucular
  const placeholders = [
    `<path d="M80 60h240v180H80z"/><path d="M80 150h110v90M190 60v60h130M230 150h90"/><path d="M190 150a30 30 0 0 1 30-30"/>`,
    `<path d="M60 240h280M90 240V110l110-60 110 60v130"/><path d="M140 240v-60h40v60M230 140h50v40h-50zM120 140h40v40h-40z"/>`,
    `<path d="M200 40l140 70v100l-140 70-140-70V110z"/><path d="M200 40v100l140-30M200 140L60 110M200 140v140"/>`,
    `<path d="M70 250V70h260v180"/><path d="M70 120h260M70 170h260M70 220h260M135 70v180M200 70v180M265 70v180"/>`,
    `<circle cx="200" cy="150" r="100"/><path d="M200 50v200M100 150h200"/><path d="M130 80l140 140M270 80L130 220"/>`,
    `<path d="M60 230h280"/><path d="M80 230V90h70v140M170 230V60h70v170M260 230V120h60v110"/><path d="M100 110h30M100 140h30M190 90h30M190 120h30M280 140h20"/>`,
  ];
  const ph = (i) =>
    `<svg class="ph" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.2" opacity=".7">${placeholders[i % placeholders.length]}</g></svg>`;

  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(get(el.dataset.i18n))));
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(get(el.dataset.i18nAria))));
    document.querySelectorAll(".lang span").forEach((s) => s.classList.toggle("on", s.dataset.l === lang));

    $(".hero__name").innerHTML = C.name.split(" ").map(esc).join("<br/>");
    $("#heroRoles").innerHTML = t(C.roles).map((r) => `<span>${esc(r)}</span>`).join("");
    const cv = $("#cvBtn");
    cv.hidden = !C.cv;
    if (C.cv) cv.href = C.cv;

    // Filtreler
    const used = new Set(C.projects.map((p) => p.category));
    $("#filters").innerHTML = Object.entries(C.categories)
      .filter(([k]) => k === "all" || used.has(k))
      .map(([k, v]) => `<button data-f="${k}" class="${k === filter ? "on" : ""}">${esc(t(v))}</button>`)
      .join("");

    // Projeler
    $("#worksGrid").innerHTML = C.projects
      .map((p, i) => `
        <button class="work reveal ${filter !== "all" && p.category !== filter ? "hide" : ""}" data-i="${i}">
          <div class="work__img" data-cat="${esc(t(C.categories[p.category]))}">
            ${p.cover ? `<img src="${esc(p.cover)}" alt="${esc(t(p.title))}" loading="lazy"/>` : ph(i)}
          </div>
          <div class="work__meta">
            <h3 class="work__title">${esc(t(p.title))}</h3>
            <span class="work__info">${esc(p.location)} · ${esc(p.year)}</span>
          </div>
        </button>`)
      .join("");

    // Hakkımda
    $("#aboutText").innerHTML = t(C.about).map((p) => `<p class="reveal">${esc(p)}</p>`).join("");
    $("#stats").innerHTML = C.stats
      .map((s) => `<div class="stat reveal"><div class="stat__v">${esc(s.value)}</div><div class="stat__l">${esc(t(s.label))}</div></div>`)
      .join("");
    $("#skills").innerHTML = C.skills
      .map((g) => `<div class="skillgroup reveal"><h4>${esc(t(g.group))}</h4><div class="tags">${g.items.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div></div>`)
      .join("");
    $("#languages").innerHTML = C.languages
      .map((l) => `<div class="langrow reveal"><div class="langrow__top"><span>${esc(t(l.name))}</span><span>${esc(t(l.level))}</span></div><div class="bar"><i data-w="${l.value}"></i></div></div>`)
      .join("");

    // Deneyim & eğitim
    $("#experienceList").innerHTML = C.experience
      .map((e) => `
        <li class="reveal">
          <div class="t__period">${esc(t(e.period))}</div>
          <div><div class="t__role">${esc(t(e.role))}</div><div class="t__company">${esc(e.company)} <em>— ${esc(e.place)}</em></div></div>
          <p class="t__text">${esc(t(e.text))}</p>
        </li>`)
      .join("");
    $("#educationList").innerHTML = C.education
      .map((e) => `
        <li class="reveal">
          <div class="t__period">${esc(t(e.period))}</div>
          <div class="t__role">${esc(t(e.degree))}</div>
          <div><div class="t__company">${esc(e.school)} <em>— ${esc(e.place)}</em></div>${e.note ? `<span class="t__note">${esc(t(e.note))}</span>` : ""}</div>
        </li>`)
      .join("");

    $("#awardsList").innerHTML = (C.awards || [])
      .map((a) => `
        <li class="reveal">
          <div class="t__period">${esc(a.year)}</div>
          <div class="t__role">${esc(t(a.title))}</div>
          <div><div class="t__company">${esc(t(a.org))}</div>${(a.sources || (a.link ? [{ name: a.source, link: a.link }] : [])).map((src) => `<a class="t__note" href="${esc(src.link)}" target="_blank" rel="noopener">${esc(t(C.ui.readOn))} ${esc(t(src.name) || "")} ↗</a>`).join("<br/>")}</div>
        </li>`)
      .join("");

    // İletişim
    const mail = $("#mailLink");
    mail.href = `mailto:${C.email}`;
    mail.textContent = C.email;
    $("#socialLinks").innerHTML = [
      C.linkedin && `<a href="${esc(C.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
      C.github && `<a href="${esc(C.github)}" target="_blank" rel="noopener">GitHub</a>`,
    ].filter(Boolean).join("");
    $("#year").textContent = new Date().getFullYear();

    observe();
  }

  // Kaydırınca beliren öğeler
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll(".bar i").forEach((b) => (b.style.width = b.dataset.w + "%"));
        io.unobserve(en.target);
      }), { threshold: 0.12 })
    : null;
  function observe() {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
    if (!io) document.querySelectorAll(".bar i").forEach((b) => (b.style.width = b.dataset.w + "%"));
  }

  // Proje penceresi
  const modal = $("#modal");
  function openProject(i) {
    const p = C.projects[i];
    const imgs = [p.cover, ...(p.images || [])].filter(Boolean);
    $("#modalBody").innerHTML = `
      <div class="modal__cat">${esc(t(C.categories[p.category]))}</div>
      <h2 class="modal__title">${esc(t(p.title))}</h2>
      <div class="modal__meta"><span>${esc(p.location)}</span><span>${esc(p.year)}</span>${(p.tools || []).length ? `<span>${p.tools.map(esc).join(" · ")}</span>` : ""}</div>
      <p class="modal__summary">${esc(t(p.summary))}</p>
      <div class="modal__imgs">${imgs.length ? imgs.map((src) => `<img src="${esc(src)}" alt="" loading="lazy"/>`).join("") : `<div class="modal__soon">${esc(t(C.ui.comingSoon))}</div>`}</div>`;
    modal.showModal();
    document.body.style.overflow = "hidden";
  }
  modal.addEventListener("close", () => (document.body.style.overflow = ""));
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
  $("#modalClose").addEventListener("click", () => modal.close());

  // Olaylar
  document.addEventListener("click", (e) => {
    const f = e.target.closest("[data-f]");
    if (f) {
      filter = f.dataset.f;
      document.querySelectorAll("#filters button").forEach((b) => b.classList.toggle("on", b === f));
      document.querySelectorAll(".work").forEach((w) => {
        const p = C.projects[w.dataset.i];
        w.classList.toggle("hide", filter !== "all" && p.category !== filter);
      });
      return;
    }
    const w = e.target.closest(".work");
    if (w) openProject(+w.dataset.i);
  });

  $("#langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "tr" : "en";
    try { localStorage.setItem("lang", lang); } catch (_) {}
    render();
  });

  const burger = $("#burger"), links = $("#navLinks");
  const setMenu = (open) => { burger.setAttribute("aria-expanded", open); links.classList.toggle("open", open); };
  burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
  links.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));

  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  render();
})();
