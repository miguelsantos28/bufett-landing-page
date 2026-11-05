/* =========================================================
   LANDING PAGE DO BUFFET
   Organização do arquivo:
   1. SITE_CONFIG   : TODOS os dados editáveis (comece por aqui)
   2. Utilitários
   3. Conteúdo      : monta atrações, cardápio, depoimentos, contato e mapa
   4. Interações    : WhatsApp, navbar, filtros do cardápio, carrossel
   5. Animações     : GSAP + ScrollTrigger
   6. Inicialização
   ========================================================= */

/* =========================================================
   1. CONFIGURAÇÃO CENTRAL
   Tudo que é específico do buffet fica aqui. Cada linha marcada
   com "SUBSTITUIR" precisa ser trocada antes de publicar.
   ========================================================= */
const SITE_CONFIG = {
  /* ---- MARCA ---- */
  brand: {
    name: "Nome do Buffet",                                   // SUBSTITUIR: nome do buffet (título da aba, rodapé e copyright)
    slogan: "[Slogan do buffet: a frase principal da sua proposta]", // SUBSTITUIR: título grande do hero
    shortDescription: "[Breve descrição institucional do buffet.]",  // SUBSTITUIR: texto do rodapé
    logo: "assets/images/logo-placeholder.svg",               // SUBSTITUIR: caminho da logo oficial
    logoAlt: "Logo do Nome do Buffet",                        // SUBSTITUIR: texto alternativo da logo
  },

  /* ---- WHATSAPP (usado por TODOS os botões "Fale Conosco" e pelo botão flutuante) ---- */
  whatsapp: {
    number: "55DDDNUMERO",                                    // SUBSTITUIR: só dígitos, com país e DDD. Ex.: 5511999999999
    display: "(DDD) 90000-0000",                              // SUBSTITUIR: como o número aparece na seção de contato
    message: "Olá! Gostaria de conhecer melhor o buffet e obter informações sobre os eventos e serviços oferecidos.", // SUBSTITUIR se quiser
  },

  /* ---- CONTATO ---- */
  contact: {
    address: "[Rua, número, bairro, cidade e estado]",        // SUBSTITUIR: endereço completo
    phoneDisplay: "(DDD) 0000-0000",                          // SUBSTITUIR: como aparece na tela
    phoneRaw: "+55DDD00000000",                               // SUBSTITUIR: usado no link tel: (com +55 e DDD)
    email: "contato@seudominio.com.br",                       // SUBSTITUIR
    hours: "[Dias e horários de atendimento]",                // SUBSTITUIR, ou deixe "" para ocultar a linha
    // Redes sociais: deixe "url" vazio ("") para ocultar uma rede. "icon" aceita: instagram, facebook, youtube.
    social: [
      { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/" },   // SUBSTITUIR pelo perfil real
      { label: "Facebook",  icon: "facebook",  url: "https://www.facebook.com/" },    // SUBSTITUIR pela página real
    ],
  },

  /* ---- MAPA ----
     Opção 1 (mais simples): preencha "address" com um endereço que o Google Maps entenda.
     Opção 2: cole em "embedUrl" a URL do atributo src do iframe (Google Maps > Compartilhar > Incorporar um mapa).
     Com os dois vazios, aparece um aviso no lugar do mapa (nenhum local aleatório é exibido). */
  map: {
    address: "",   // SUBSTITUIR. Ex.: "Av. Paulista, 1000, São Paulo - SP"
    embedUrl: "",  // OU colar a URL de incorporação aqui
    title: "Mapa com a localização do buffet",
  },

  /* ---- ATRAÇÕES ----
     Para adicionar: copie um bloco { ... } e cole no array. Para remover: apague o bloco.
     "featured: true" deixa o card largo (use no primeiro). Com 5, 7 ou 9 itens a grade fecha sem espaços vazios.
     "tag" é opcional (deixe "" para não mostrar o selo). */
  attractions: [
    { featured: true, name: "[Nome da atração 1]", description: "[Descrição breve da atração.]", tag: "[Destaque]", image: "assets/images/attractions/attraction-1.svg" },
    { name: "[Nome da atração 2]", description: "[Descrição breve da atração.]", tag: "[Destaque]", image: "assets/images/attractions/attraction-2.svg" },
    { name: "[Nome da atração 3]", description: "[Descrição breve da atração.]", tag: "",            image: "assets/images/attractions/attraction-3.svg" },
    { name: "[Nome da atração 4]", description: "[Descrição breve da atração.]", tag: "[Destaque]", image: "assets/images/attractions/attraction-4.svg" },
    { name: "[Nome da atração 5]", description: "[Descrição breve da atração.]", tag: "",            image: "assets/images/attractions/attraction-5.svg" },
  ],

  /* ---- CARDÁPIO ----
     As categorias criam os botões de filtro. O "id" precisa ser igual ao campo "category" dos itens.
     "image" é opcional: deixe "" para um prato sem foto (para a grade ficar uniforme, use foto em todos ou em nenhum). */
  menu: {
    categories: [
      { id: "entradas",        label: "Entradas" },
      { id: "principais",      label: "Pratos principais" },
      { id: "acompanhamentos", label: "Acompanhamentos" },
      { id: "sobremesas",      label: "Sobremesas" },
      { id: "bebidas",         label: "Bebidas" },
    ],
    items: [
      { category: "entradas",        name: "[Nome da entrada 1]",          description: "[Descrição do item.]", image: "assets/images/menu/menu-placeholder.svg" },
      { category: "entradas",        name: "[Nome da entrada 2]",          description: "[Descrição do item.]", image: "assets/images/menu/menu-placeholder.svg" },
      { category: "principais",      name: "[Nome do prato principal 1]",  description: "[Descrição do item.]", image: "assets/images/menu/menu-placeholder.svg" },
      { category: "principais",      name: "[Nome do prato principal 2]",  description: "[Descrição do item.]", image: "assets/images/menu/menu-placeholder.svg" },
      { category: "acompanhamentos", name: "[Nome do acompanhamento 1]",   description: "[Descrição do item.]", image: "assets/images/menu/menu-placeholder.svg" },
      { category: "acompanhamentos", name: "[Nome do acompanhamento 2]",   description: "[Descrição do item.]", image: "assets/images/menu/menu-placeholder.svg" },
      { category: "sobremesas",      name: "[Nome da sobremesa 1]",        description: "[Descrição do item.]", image: "assets/images/menu/menu-placeholder.svg" },
      { category: "sobremesas",      name: "[Nome da sobremesa 2]",        description: "[Descrição do item.]", image: "assets/images/menu/menu-placeholder.svg" },
      { category: "bebidas",         name: "[Nome da bebida 1]",           description: "[Descrição do item.]", image: "assets/images/menu/menu-placeholder.svg" },
      { category: "bebidas",         name: "[Nome da bebida 2]",           description: "[Descrição do item.]", image: "assets/images/menu/menu-placeholder.svg" },
    ],
  },

  /* ---- DEPOIMENTOS ----
     Deixe showDemoNotice em true enquanto os textos forem demonstrativos (aparece o selo "Conteúdo demonstrativo").
     Ao publicar com avaliações reais, mude para false. "avatar" é opcional. */
  testimonials: {
    showDemoNotice: true,
    items: [
      { text: "Depoimento demonstrativo: substitua pelo texto real de um cliente.", name: "[Nome do cliente]", event: "[Tipo de evento]", avatar: "assets/images/testimonials/avatar-placeholder.svg" },
      { text: "Depoimento demonstrativo: substitua pelo texto real de um cliente.", name: "[Nome do cliente]", event: "[Tipo de evento]", avatar: "assets/images/testimonials/avatar-placeholder.svg" },
      { text: "Depoimento demonstrativo: substitua pelo texto real de um cliente.", name: "[Nome do cliente]", event: "[Tipo de evento]", avatar: "" },
    ],
  },
};

/* =========================================================
   2. UTILITÁRIOS
   ========================================================= */
const FALLBACK_IMAGE = "assets/images/image-fallback.svg";
const SVG_NS = "http://www.w3.org/2000/svg";

const getByPath = (object, path) => path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), object);
const isPlaceholder = (value) => !value || /^\s*\[/.test(value);
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Cria elementos sem usar innerHTML (evita injeção de HTML a partir da configuração). */
function createElement(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => {
    if (value === undefined || value === null || value === false) return;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value === true ? "" : value);
  });
  [].concat(children).forEach((child) => child && node.append(child));
  return node;
}

/** Cria um SVG de 24x24 a partir de uma lista de formas [tag, atributos]. */
function createIcon(shapes) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "22");
  svg.setAttribute("height", "22");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  shapes.forEach(([tag, attrs]) => {
    const shape = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([k, v]) => shape.setAttribute(k, v));
    svg.append(shape);
  });
  return svg;
}

const SOCIAL_ICONS = {
  instagram: [["rect", { x: 3, y: 3, width: 18, height: 18, rx: 5 }], ["circle", { cx: 12, cy: 12, r: 4 }], ["path", { d: "M17.5 6.5h.01" }]],
  facebook: [["path", { d: "M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5A.5.5 0 0 1 14 8z" }]],
  youtube: [["rect", { x: 2.5, y: 5.5, width: 19, height: 13, rx: 4 }], ["path", { d: "M10 9.5v5l4.5-2.5z" }]],
  link: [["path", { d: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" }], ["path", { d: "M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" }]],
};

/** Monta a URL do WhatsApp. Número e mensagem vêm de um único lugar: SITE_CONFIG.whatsapp. */
function buildWhatsAppUrl() {
  const { number, message } = SITE_CONFIG.whatsapp;
  const cleanNumber = String(number).replace(/[\s()+-]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/* =========================================================
   3. CONTEÚDO
   ========================================================= */
/** Aplica os textos e imagens de marca marcados com data-bind, data-bind-src e data-bind-alt. */
function bindStaticContent() {
  document.title = `${SITE_CONFIG.brand.name} | Buffet para eventos`;
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const value = getByPath(SITE_CONFIG, el.dataset.bind);
    if (value) el.textContent = value;
  });
  document.querySelectorAll("[data-bind-src]").forEach((el) => {
    const value = getByPath(SITE_CONFIG, el.dataset.bindSrc);
    if (value) el.setAttribute("src", value);
  });
  document.querySelectorAll("[data-bind-alt]").forEach((el) => {
    const value = getByPath(SITE_CONFIG, el.dataset.bindAlt);
    if (value) el.setAttribute("alt", value);
  });
  const year = document.getElementById("footer-year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function createImage(src, alt, { width, height, className, lazy = true }) {
  return createElement("img", { src, alt, width, height, class: className, loading: lazy ? "lazy" : null, decoding: "async" });
}

function renderAttractions() {
  const grid = document.getElementById("attractions-grid");
  if (!grid) return;
  SITE_CONFIG.attractions.forEach((item) => {
    grid.append(
      createElement("li", { class: `attraction-item${item.featured ? " attraction-item--featured" : ""}` }, [
        createElement("article", { class: "attraction-card" }, [
          createElement("div", { class: "attraction-card__media" }, [
            createImage(item.image, `${item.name}: imagem ilustrativa`, { width: 900, height: 675 }),
          ]),
          createElement("div", { class: "attraction-card__body" }, [
            item.tag ? createElement("span", { class: "attraction-card__tag", text: item.tag }) : null,
            createElement("h3", { class: "attraction-card__title", text: item.name }),
            createElement("p", { class: "attraction-card__text", text: item.description }),
          ]),
        ]),
      ])
    );
  });
}

function createDishCard(item, categoryLabel) {
  const hasImage = Boolean(item.image);
  return createElement("li", {}, [
    createElement("article", { class: `dish-card${hasImage ? "" : " dish-card--no-image"}` }, [
      hasImage
        ? createElement("div", { class: "dish-card__media" }, [createImage(item.image, `${item.name}: imagem ilustrativa`, { width: 640, height: 480 })])
        : null,
      createElement("div", {}, [
        createElement("span", { class: "dish-card__category", text: categoryLabel }),
        createElement("h3", { class: "dish-card__title", text: item.name }),
        createElement("p", { class: "dish-card__text", text: item.description }),
      ]),
    ]),
  ]);
}

function renderTestimonials() {
  const track = document.getElementById("testimonials-track");
  if (!track) return;
  const { items, showDemoNotice } = SITE_CONFIG.testimonials;
  items.forEach((item) => {
    track.append(
      createElement("li", {}, [
        createElement("figure", { class: "testimonial-card", style: "margin:0;height:100%" }, [
          showDemoNotice ? createElement("span", { class: "testimonial-card__badge", text: "Conteúdo demonstrativo" }) : null,
          createElement("blockquote", { class: "testimonial-card__quote", text: item.text, style: "margin:0" }),
          createElement("figcaption", { class: "testimonial-card__author" }, [
            item.avatar ? createImage(item.avatar, "", { width: 52, height: 52, className: "testimonial-card__avatar" }) : null,
            createElement("div", {}, [
              createElement("cite", { class: "testimonial-card__name", text: item.name, style: "font-style:normal" }),
              item.event ? createElement("span", { class: "testimonial-card__event", text: item.event }) : null,
            ]),
          ]),
        ]),
      ])
    );
  });
}

function renderContact() {
  const { contact, whatsapp } = SITE_CONFIG;
  const hasAddress = !isPlaceholder(contact.address);
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

  document.querySelectorAll("[data-contact]").forEach((el) => {
    const field = el.dataset.contact;
    if (field === "address") {
      el.textContent = contact.address;
      if (hasAddress) el.setAttribute("href", mapsSearchUrl);
      else { el.setAttribute("href", "#contato"); el.removeAttribute("target"); el.removeAttribute("rel"); }
    } else if (field === "address-text") {
      el.textContent = contact.address;
    } else if (field === "phone") {
      el.textContent = contact.phoneDisplay;
      el.setAttribute("href", `tel:${contact.phoneRaw}`);
    } else if (field === "whatsapp") {
      el.textContent = whatsapp.display; // o href vem de initWhatsAppLinks()
    } else if (field === "email") {
      el.textContent = contact.email;
      el.setAttribute("href", `mailto:${contact.email}`);
    } else if (field === "hours") {
      if (contact.hours) el.textContent = contact.hours;
      else el.closest("li")?.remove();
    }
  });

  ["contact-socials", "footer-socials"].forEach((id) => {
    const list = document.getElementById(id);
    if (!list) return;
    contact.social.filter((s) => s.url).forEach((s) => {
      list.append(
        createElement("li", {}, [
          createElement("a", { href: s.url, target: "_blank", rel: "noopener noreferrer", "aria-label": `${s.label} (abre em nova aba)` }, [
            createIcon(SOCIAL_ICONS[s.icon] || SOCIAL_ICONS.link),
          ]),
        ])
      );
    });
  });
}

function renderMap() {
  const container = document.getElementById("map-container");
  if (!container) return;
  const { map } = SITE_CONFIG;
  let src = "";
  if (map.embedUrl) src = map.embedUrl;
  else if (map.address) src = `https://maps.google.com/maps?q=${encodeURIComponent(map.address)}&output=embed`;

  if (!src) {
    const code = (text) => createElement("code", { text });
    container.append(
      createElement("div", { class: "map__notice", role: "note" }, [
        createElement("strong", { text: "Mapa ainda não configurado" }),
        createElement("p", {}, [
          document.createTextNode("Em "),
          code("js/script.js"),
          document.createTextNode(", preencha "),
          code("SITE_CONFIG.map.address"),
          document.createTextNode(" (ou "),
          code("embedUrl"),
          document.createTextNode(") para exibir a localização do buffet aqui."),
        ]),
      ])
    );
    return;
  }
  container.append(createElement("iframe", { src, title: map.title, loading: "lazy", referrerpolicy: "no-referrer-when-downgrade", allowfullscreen: true }));
}

/** Imagens que falham ao carregar trocam para o placeholder; se ele também falhar, o CSS (.is-broken) mantém o espaço. */
function initImageFallback() {
  const handle = (img) => {
    if (img.dataset.fallbackApplied) { img.classList.add("is-broken"); return; }
    img.dataset.fallbackApplied = "true";
    img.src = FALLBACK_IMAGE;
  };
  document.addEventListener("error", (event) => {
    if (event.target instanceof HTMLImageElement) handle(event.target);
  }, true);
  document.querySelectorAll("img").forEach((img) => {
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) handle(img);
  });
}

/* =========================================================
   4. INTERAÇÕES
   ========================================================= */
/** Aponta todos os elementos [data-whatsapp] (incluindo o botão flutuante) para a mesma URL. */
function initWhatsAppLinks() {
  const url = buildWhatsAppUrl();
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
  if (!/^\d{10,15}$/.test(String(SITE_CONFIG.whatsapp.number).replace(/[\s()+-]/g, ""))) {
    console.warn("[Buffet] O número de WhatsApp ainda é um placeholder. Edite SITE_CONFIG.whatsapp.number (somente dígitos, com país e DDD).");
  }
}

function initNavbar() {
  const header = document.getElementById("site-header");
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  if (!header || !nav || !toggle) return;

  const setMenu = (open) => {
    header.classList.toggle("is-open", open);
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => event.matches && setMenu(false));

  // Fundo sólido depois de rolar um pouco
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Marca o link da seção visível
  const links = [...nav.querySelectorAll(".site-nav__list a")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((section) => observer.observe(section));
  }
}

/** Filtros do cardápio. onRender recebe os elementos recém-criados (usado para animar). */
function initMenuFilters(onRender) {
  const filters = document.getElementById("menu-filters");
  const grid = document.getElementById("menu-grid");
  if (!filters || !grid) return { animateInitial: false };
  const { categories, items } = SITE_CONFIG.menu;
  const labelOf = (id) => (categories.find((c) => c.id === id) || {}).label || "";

  const render = (categoryId, animate) => {
    grid.replaceChildren();
    const visible = categoryId === "todos" ? items : items.filter((item) => item.category === categoryId);
    if (!visible.length) {
      grid.append(createElement("li", { class: "noscript-note", text: "Nenhum item nesta categoria ainda." }));
      return;
    }
    visible.forEach((item) => grid.append(createDishCard(item, labelOf(item.category))));
    if (animate) onRender([...grid.children]);
  };

  [{ id: "todos", label: "Todos" }, ...categories].forEach((category, index) => {
    const button = createElement("button", { class: "filter-chip", type: "button", "data-category": category.id, "aria-pressed": String(index === 0), text: category.label });
    button.addEventListener("click", () => {
      filters.querySelectorAll(".filter-chip").forEach((chip) => chip.setAttribute("aria-pressed", String(chip === button)));
      render(category.id, true);
    });
    filters.append(button);
  });

  render("todos", false);
}

function initCarousel() {
  const carousel = document.getElementById("testimonials-carousel");
  const track = document.getElementById("testimonials-track");
  const prev = document.getElementById("testimonials-prev");
  const next = document.getElementById("testimonials-next");
  if (!carousel || !track || !prev || !next) return;

  const step = () => {
    const first = track.firstElementChild;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first ? first.getBoundingClientRect().width + gap : carousel.clientWidth;
  };
  const behavior = () => (prefersReducedMotion() ? "auto" : "smooth");
  const update = () => {
    const max = carousel.scrollWidth - carousel.clientWidth;
    prev.disabled = carousel.scrollLeft <= 2;
    next.disabled = carousel.scrollLeft >= max - 2;
  };

  prev.addEventListener("click", () => carousel.scrollBy({ left: -step(), behavior: behavior() }));
  next.addEventListener("click", () => carousel.scrollBy({ left: step(), behavior: behavior() }));
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") { event.preventDefault(); next.click(); }
    if (event.key === "ArrowLeft") { event.preventDefault(); prev.click(); }
  });
  let ticking = false;
  carousel.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* =========================================================
   5. ANIMAÇÕES (GSAP + ScrollTrigger)
   Regras: o conteúdo nunca depende do GSAP para aparecer. Se a biblioteca
   não carregar, ou se o visitante preferir menos movimento, nada fica escondido.
   ========================================================= */
const animations = {
  ready: false,

  animateMenuItems(elements) {
    if (!window.gsap || prefersReducedMotion() || !elements.length) return;
    window.gsap.from(elements, { autoAlpha: 0, y: 18, duration: 0.45, stagger: 0.05, ease: "power2.out", clearProps: "opacity,visibility,transform" });
  },
};

function splitHeroTitle() {
  const title = document.querySelector(".hero__title");
  if (!title) return () => {};
  const original = title.textContent;
  title.textContent = "";
  original.trim().split(/\s+/).forEach((word, index, all) => {
    title.append(createElement("span", { class: "word" }, [createElement("span", { class: "word__inner", text: word })]));
    if (index < all.length - 1) title.append(document.createTextNode(" "));
  });
  return () => { title.textContent = original; };
}

function initAnimations() {
  const { gsap, ScrollTrigger } = window;
  if (!gsap || !ScrollTrigger) return; // sem GSAP: a página continua completa, só sem movimento
  gsap.registerPlugin(ScrollTrigger);

  // Elementos que entram com revelação ao rolar (os que já têm data-reveal no HTML também entram)
  document.querySelectorAll(".section-head, .attraction-item, #menu-grid > li, #testimonials-track > li, .contact-list li, .contact__map, .about__media")
    .forEach((el) => el.setAttribute("data-reveal", ""));

  const media = gsap.matchMedia();
  media.add("(prefers-reduced-motion: no-preference)", () => {
    const targets = gsap.utils.toArray("[data-reveal]");
    const restoreTitle = splitHeroTitle();
    try {
      /* Entrada do hero: uma sequência curta (cerca de 1,3 s) */
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".ring", { strokeDashoffset: 1, duration: 1.6, stagger: 0.15, ease: "power2.out" }, 0)
        .from(".hero__title .word__inner", { yPercent: 110, duration: 0.8, stagger: 0.06 }, 0.05)
        .from(".hero__subtitle", { autoAlpha: 0, y: 18, duration: 0.6 }, 0.4)
        .from(".hero__actions > *", { autoAlpha: 0, y: 16, duration: 0.5, stagger: 0.08 }, 0.55)
        .from(".hero__figure", { autoAlpha: 0, y: 28, scale: 0.97, duration: 0.9 }, 0.2);

      /* Giro lento dos anéis decorativos */
      gsap.to(".hero__rings", { rotation: 360, duration: 240, repeat: -1, ease: "none", transformOrigin: "50% 50%" });

      /* Revelações ao rolar, em lotes (cards chegam em sequência) */
      gsap.set(targets, { autoAlpha: 0, y: 28 });
      ScrollTrigger.batch(targets, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => gsap.to(batch, {
          autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", overwrite: true,
          clearProps: "opacity,visibility,transform",
        }),
      });

      /* Movimento sutil na imagem de apoio da seção Sobre */
      gsap.to(".about__img--side", {
        yPercent: -10, ease: "none",
        scrollTrigger: { trigger: ".about__media", start: "top bottom", end: "bottom top", scrub: true },
      });
    } catch (error) {
      console.error("[Buffet] Falha nas animações; exibindo o conteúdo sem movimento.", error);
      gsap.set(targets, { clearProps: "all" });
    }
    // Limpeza automática quando o visitante ativar "reduzir movimento" no sistema
    return () => { restoreTitle(); gsap.set(targets, { clearProps: "all" }); };
  });

  window.addEventListener("load", () => ScrollTrigger.refresh());
  animations.ready = true;
}

/* =========================================================
   6. INICIALIZAÇÃO
   A ordem importa: primeiro o conteúdo é montado, depois as animações o encontram.
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  bindStaticContent();
  renderAttractions();
  renderTestimonials();
  renderContact();
  renderMap();
  initMenuFilters((items) => animations.animateMenuItems(items));
  initWhatsAppLinks();
  initImageFallback();
  initNavbar();
  initCarousel();
  initAnimations();
});
