const products = [
  {
    id: "iget-soul-mango-ice",
    name: "IGET Soul B40000",
    category: "disposable",
    flavor: "Mango Ice",
    description: "A premium high-puff disposable with tropical mango sweetness and a crisp icy finish.",
    notes: "Ripe mango, chilled inhale, smooth finish",
    puffCount: "Up to 40000 puffs",
    battery: "Rechargeable high-capacity battery",
    image: "images/products/real/iget-soul-b40000-mango-ice.webp"
  },
  {
    id: "iget-soul-strawberry-raspberry",
    name: "IGET Soul B40000",
    category: "disposable",
    flavor: "Strawberry Raspberry",
    description: "A layered berry profile with bright strawberry top notes and a deeper raspberry body.",
    notes: "Strawberry, raspberry, candy-fruit finish",
    puffCount: "Up to 40000 puffs",
    battery: "Rechargeable high-capacity battery",
    image: "images/products/real/iget-soul-b40000-strawberry-raspberry.webp"
  },
  {
    id: "iget-soul-strawberry-kiwi-ice",
    name: "IGET Soul B40000",
    category: "disposable",
    flavor: "Strawberry Kiwi Ice",
    description: "A fresh fruit-forward disposable that blends juicy strawberry, tart kiwi, and cooling ice.",
    notes: "Strawberry, kiwi, cool exhale",
    puffCount: "Up to 40000 puffs",
    battery: "Rechargeable high-capacity battery",
    image: "images/products/real/iget-soul-b40000-strawberry-kiwi-ice.png"
  },
  {
    id: "nasty-bar-passion-fruit",
    name: "Nasty Bar 8500 Puffs",
    category: "disposable",
    flavor: "Passion Fruit",
    description: "Compact disposable styling with a bright tropical profile and easy all-day carry.",
    notes: "Passion fruit, juicy citrus lift, sweet finish",
    puffCount: "Up to 8500 puffs",
    battery: "Rechargeable battery",
    image: "images/products/real/nasty-bar-8500-passion-fruit.webp"
  },
  {
    id: "vaporesso-xros-2",
    name: "Vaporesso XROS 2",
    category: "pod-system",
    flavor: "All Colors Edition",
    description: "A sleek refillable pod system with a polished metal body and clean everyday usability.",
    notes: "Refillable pod, adjustable airflow, compact premium finish",
    puffCount: "Reusable",
    battery: "1000 mAh",
    image: "images/products/real/vaporesso-xros-2.jpg"
  },
  {
    id: "gk3-pod-kit",
    name: "GK3 Pod Kit",
    category: "pod-system",
    flavor: "Refillable Device",
    description: "A modern pod kit option for adult users who want a compact body with clean portability.",
    notes: "Pocket-friendly build, refillable system, smooth draw",
    puffCount: "Reusable",
    battery: "Integrated rechargeable battery",
    image: "images/products/real/gk3.jpg"
  },
  {
    id: "caliburn-g4-mini",
    name: "Caliburn G4 Mini",
    category: "pod-system",
    flavor: "Compact Pod Device",
    description: "A minimalist pod device with a refined silhouette designed for a premium beginner-friendly setup.",
    notes: "Compact chassis, refillable pod, modern styling",
    puffCount: "Reusable",
    battery: "Integrated rechargeable battery",
    image: "images/products/real/caliburn-g4-mini.webp"
  },
  {
    id: "xros-2-style-pack",
    name: "XROS 2 Style Pack",
    category: "pod-system",
    flavor: "Color Range",
    description: "A presentation-focused variant highlighting the premium colorway appeal of the XROS line.",
    notes: "Color options, premium metal finish, sleek carry profile",
    puffCount: "Reusable",
    battery: "1000 mAh",
    image: "images/products/real/vaporesso-xros-2.jpg"
  },
  {
    id: "mango-ice-profile",
    name: "Soul Series Flavor Profile",
    category: "flavors",
    flavor: "Mango Ice",
    description: "A tropical icy flavor story built for users who prefer sweet fruit with a cooler finish.",
    notes: "Mango sweetness, icy airflow, bright tropical body",
    puffCount: "Flavor profile",
    battery: "N/A",
    image: "images/products/real/iget-soul-b40000-mango-ice.webp"
  },
  {
    id: "strawberry-kiwi-profile",
    name: "Soul Series Flavor Profile",
    category: "flavors",
    flavor: "Strawberry Kiwi Ice",
    description: "An energetic fruit blend balancing sweetness, tartness, and a chilled modern finish.",
    notes: "Strawberry candy note, kiwi tartness, cool exhale",
    puffCount: "Flavor profile",
    battery: "N/A",
    image: "images/products/real/iget-soul-b40000-strawberry-kiwi-ice.png"
  },
  {
    id: "xros-replacement-pods",
    name: "XROS Replacement Pods",
    category: "accessories",
    flavor: "Accessory",
    description: "Supporting accessory content for the XROS lineup, designed to round out the demo catalog.",
    notes: "Magnetic fit, smooth draw support, everyday essential",
    puffCount: "Accessory pack",
    battery: "N/A",
    image: "images/products/real/vaporesso-xros-2.jpg"
  },
  {
    id: "caliburn-carry-case",
    name: "Caliburn Carry Case",
    category: "accessories",
    flavor: "Accessory",
    description: "Lifestyle accessory content built around compact protection and premium device storage.",
    notes: "Compact carry, soft protection, discreet everyday use",
    puffCount: "Accessory case",
    battery: "N/A",
    image: "images/products/real/caliburn-g4-mini.webp"
  }
];

const whatsappNumber = "919999999999";

function createProductCard(product) {
  const message = encodeURIComponent(`I'm interested in this product: ${product.name} - ${product.flavor}`);
  return `
    <article class="glass-card product-card" data-category="${product.category}" data-reveal>
      <div class="product-card__media">
        <img src="${product.image}" alt="${product.name} ${product.flavor}">
      </div>
      <div class="product-card__body">
        <span class="product-card__meta">${product.category.replace("-", " ")} | ${product.flavor}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-card__actions">
          <a class="btn btn-secondary" href="product-details.html?product=${product.id}">View Details</a>
          <a class="btn btn-primary" href="https://wa.me/${whatsappNumber}?text=${message}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  const container = document.getElementById("featuredProducts");
  if (!container) return;
  container.innerHTML = products.slice(0, 6).map(createProductCard).join("");
  revealElements();
}

function renderAllProducts() {
  const container = document.getElementById("allProducts");
  if (!container) return;
  container.innerHTML = products.map(createProductCard).join("");
  bindFilters();
  revealElements();
}

function bindFilters() {
  const chips = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll(".product-card");
  if (!chips.length || !cards.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((item) => item.classList.remove("is-active"));
      chip.classList.add("is-active");
      const selected = chip.dataset.filter;

      cards.forEach((card) => {
        const match = selected === "all" || card.dataset.category === selected;
        card.style.display = match ? "" : "none";
      });
    });
  });
}

function renderProductDetail() {
  const container = document.getElementById("productDetail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("product");
  const product = products.find((item) => item.id === requestedId) || products[0];
  const message = encodeURIComponent(`I'm interested in this product: ${product.name} - ${product.flavor}`);

  container.innerHTML = `
    <div class="product-detail__image" data-reveal>
      <div class="glass-card">
        <img src="${product.image}" alt="${product.name} ${product.flavor}">
      </div>
    </div>
    <div class="product-detail__content">
      <div data-reveal>
        <p class="eyebrow">${product.category.replace("-", " ")} | ${product.flavor}</p>
        <h1>${product.name}</h1>
        <p class="hero__lead">${product.description}</p>
      </div>
      <div class="glass-card product-detail__specs" data-reveal>
        <h3>Product Info</h3>
        <ul>
          <li><span>Flavor notes</span><strong>${product.notes}</strong></li>
          <li><span>Puff count</span><strong>${product.puffCount}</strong></li>
          <li><span>Battery capacity</span><strong>${product.battery}</strong></li>
        </ul>
      </div>
      <div class="product-detail__notice" data-reveal>
        <strong>21+ Only.</strong>
        <p>Nicotine products are intended for adult consumers.</p>
      </div>
      <div data-reveal>
        <a class="btn btn-primary" href="https://wa.me/${whatsappNumber}?text=${message}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
      </div>
    </div>
  `;

  revealElements();
}

function setupNavigation() {
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");
  if (!navToggle || !siteNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

let revealObserver;

function revealElements() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
  }

  elements.forEach((element) => {
    if (!element.classList.contains("is-visible")) {
      revealObserver.observe(element);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderFeaturedProducts();
  renderAllProducts();
  renderProductDetail();
  revealElements();
});
