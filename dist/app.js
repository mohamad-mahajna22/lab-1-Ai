const icons = {
  "search-heart": '<path d="M11 19a8 8 0 1 1 5.3-14"/><path d="m21 21-4.35-4.35"/><path d="M15.5 8.4c.6-1.8 3.2-1.8 3.8 0 .4 1.3-.4 2.6-1.9 3.6-1.5-1-2.3-2.3-1.9-3.6Z"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "arrow-up-right": '<path d="M7 17 17 7M7 7h10v10"/>',
  sparkles: '<path d="m12 3-1.2 3.3L7.5 7.5l3.3 1.2L12 12l1.2-3.3 3.3-1.2-3.3-1.2L12 3ZM5 14l-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14Zm13-1-.9 2.6-2.6.9 2.6.9L18 20l.9-2.6 2.6-.9-2.6-.9L18 13Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
  list: '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r=".5" fill="currentColor"/><circle cx="4" cy="12" r=".5" fill="currentColor"/><circle cx="4" cy="18" r=".5" fill="currentColor"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  "shield-check": '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M12 12v6M9 15h6"/>',
  "scan-search": '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="11" cy="11" r="4"/><path d="m16 16-2.2-2.2"/>',
  handshake: '<path d="m11 17 2 2a2.8 2.8 0 0 0 4-4l-3-3M8.5 14.5l4-4a2.8 2.8 0 0 1 4 0l.5.5 4-4M3 8l5 5M2 7l3-3 4 4-3 3-4-4Zm20 0-3-3-4 4 3 3 4-4Z"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  "image-plus": '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m3 16 5-5 4 4 2-2 7 7M17 6v5M14.5 8.5h5"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  tag: '<path d="M20 13 13 20 4 11V4h7l9 9Z"/><circle cx="8.5" cy="8.5" r="1.2"/>',
  headphones: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M18 19c1.1 0 2-.9 2-2v-3h-4v5h2ZM6 19c-1.1 0-2-.9-2-2v-3h4v5H6Z"/>',
  bottle: '<path d="M9 2h6v4l2 3v10a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9l2-3V2ZM9 6h6M7 12h10"/>',
  wallet: '<path d="M3 6a2 2 0 0 1 2-2h13v4H5a2 2 0 0 0 0 4h16v8H5a2 2 0 0 1-2-2V6Z"/><path d="M16 12v4h5v-4h-5Z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"/><path d="M4 6h16"/>',
  keys: '<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8M15 8l3 3M17 6l2 2"/>',
  glasses: '<circle cx="7" cy="15" r="4"/><circle cx="17" cy="15" r="4"/><path d="M11 15h2M3 15 5 7h3M21 15l-2-8h-3"/>',
  backpack: '<path d="M8 7V5a4 4 0 0 1 8 0v2M6 7h12a2 2 0 0 1 2 2v12H4V9a2 2 0 0 1 2-2ZM8 14h8M9 17h6"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};

function icon(name, className = "") {
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.search}</svg>`;
}

document.querySelectorAll("[data-icon]").forEach((node) => {
  node.innerHTML = icon(node.dataset.icon);
});

const palette = {
  electronics: "#acd1e2",
  accessories: "#efc2b4",
  books: "#d9c9ee",
  keys: "#f0d36d",
  other: "#bcd9bf"
};

const sampleItems = [
  { id: 1, type: "found", title: "Wireless headphones", category: "electronics", location: "Engineering Hall ֲ· Room 204", daysAgo: 0, icon: "headphones", color: "#add3e4", description: "Black over-ear headphones found beneath a desk after the afternoon circuits lecture." },
  { id: 2, type: "lost", title: "Green water bottle", category: "other", location: "Main Library ֲ· 2nd floor", daysAgo: 1, icon: "bottle", color: "#b7d2a3", description: "Dark green metal bottle with a loop lid. I last had it near the silent study area." },
  { id: 3, type: "found", title: "Brown card wallet", category: "accessories", location: "Student Center ֲ· East lobby", daysAgo: 1, icon: "wallet", color: "#e8bcae", description: "Slim brown card wallet found beside the vending machines. Cards are safely inside." },
  { id: 4, type: "lost", title: "Biology lab notebook", category: "books", location: "Science Building ֲ· Lab 3", daysAgo: 2, icon: "book", color: "#cbb9e6", description: "A5 black notebook filled with handwritten biology notes and a few colored tabs." },
  { id: 5, type: "found", title: "Keys with blue tag", category: "keys", location: "Athletics Center ֲ· Entrance", daysAgo: 2, icon: "keys", color: "#ead06e", description: "Three keys on a metal ring with a rectangular blue plastic tag." },
  { id: 6, type: "lost", title: "Round reading glasses", category: "accessories", location: "Humanities Quad", daysAgo: 3, icon: "glasses", color: "#d4c4ac", description: "Thin, dark metal frames in a soft gray case. Possibly left on an outdoor bench." }
];

let storedItems = [];
try { storedItems = JSON.parse(localStorage.getItem("unifind-reports") || "[]"); } catch (_) { storedItems = []; }
let items = [...storedItems, ...sampleItems];
let activeStatus = "all";
let activeCategory = "all";
let searchTerm = "";
let showingMine = false;

const grid = document.getElementById("itemsGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function relativeDate(item) {
  if (Number.isFinite(item.daysAgo)) {
    return item.daysAgo === 0 ? "Today" : item.daysAgo === 1 ? "Yesterday" : `${item.daysAgo} days ago`;
  }
  const date = new Date(`${item.date}T12:00:00`);
  return Number.isNaN(date.getTime()) ? "Recently" : new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(date);
}

function filteredItems() {
  return items.filter((item) => {
    const statusMatch = activeStatus === "all" || item.type === activeStatus;
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const haystack = `${item.title} ${item.location} ${item.category} ${item.description}`.toLowerCase();
    const textMatch = !searchTerm || haystack.includes(searchTerm);
    const mineMatch = !showingMine || item.mine;
    return statusMatch && categoryMatch && textMatch && mineMatch;
  });
}

function renderItems() {
  const visible = filteredItems();
  grid.innerHTML = visible.map((item) => `
    <article class="item-card" tabindex="0" data-item-id="${escapeHTML(item.id)}" aria-label="View ${escapeHTML(item.title)} report">
      <div class="item-visual" style="--card-color:${escapeHTML(item.color || palette[item.category])}">
        ${item.image ? `<img src="${escapeHTML(item.image)}" alt="" style="width:100%;height:100%;object-fit:cover">` : icon(item.icon || "backpack")}
        <span class="item-status ${item.type === "lost" ? "lost" : ""}">${escapeHTML(item.type)}</span>
      </div>
      <div class="item-body">
        <div class="item-meta"><span>${escapeHTML(item.category)}</span><span>${escapeHTML(relativeDate(item))}</span></div>
        <h3>${escapeHTML(item.title)}</h3>
        <div class="item-location">${icon("pin")}<span>${escapeHTML(item.location)}</span></div>
        <div class="item-footer"><span>${item.mine ? "Your report" : "Campus report"}</span><button type="button" aria-label="View details">${icon("arrow-up-right")}</button></div>
      </div>
    </article>
  `).join("");
  resultsCount.textContent = `Showing ${visible.length} report${visible.length === 1 ? "" : "s"}${showingMine ? " from you" : ""}`;
  emptyState.hidden = visible.length > 0;
  grid.hidden = visible.length === 0;
}

function clearFilters() {
  activeStatus = "all";
  activeCategory = "all";
  searchTerm = "";
  showingMine = false;
  document.getElementById("searchInput").value = "";
  document.querySelectorAll("#statusFilters button").forEach((b) => b.classList.toggle("active", b.dataset.status === "all"));
  document.querySelectorAll("#categoryFilters button").forEach((b) => b.classList.toggle("active", b.dataset.category === "all"));
  renderItems();
}

document.getElementById("statusFilters").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-status]");
  if (!button) return;
  activeStatus = button.dataset.status;
  showingMine = false;
  document.querySelectorAll("#statusFilters button").forEach((b) => b.classList.toggle("active", b === button));
  renderItems();
});

document.getElementById("categoryFilters").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  showingMine = false;
  document.querySelectorAll("#categoryFilters button").forEach((b) => b.classList.toggle("active", b === button));
  renderItems();
});

document.getElementById("heroSearch").addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
  showingMine = false;
  renderItems();
  document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("searchInput").addEventListener("input", (event) => {
  if (!event.target.value) { searchTerm = ""; renderItems(); }
});

document.getElementById("clearFilters").addEventListener("click", clearFilters);
document.getElementById("emptyClear").addEventListener("click", clearFilters);

document.getElementById("myReportsButton").addEventListener("click", () => {
  showingMine = true;
  activeStatus = "all";
  activeCategory = "all";
  document.querySelectorAll("#statusFilters button").forEach((b) => b.classList.toggle("active", b.dataset.status === "all"));
  document.querySelectorAll("#categoryFilters button").forEach((b) => b.classList.toggle("active", b.dataset.category === "all"));
  renderItems();
  document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
  document.querySelector(".main-nav").classList.remove("open");
});

const reportModal = document.getElementById("reportModal");
const detailModal = document.getElementById("detailModal");
const reportForm = document.getElementById("reportForm");

function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  setTimeout(() => modal.querySelector("input, button")?.focus(), 80);
}
function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal-shell.open")) document.body.classList.remove("modal-open");
}

document.querySelectorAll(".open-report").forEach((button) => button.addEventListener("click", () => {
  const requestedType = button.dataset.reportType;
  if (requestedType) reportForm.elements.type.value = requestedType;
  reportForm.elements.date.valueAsDate = new Date();
  openModal(reportModal);
}));
document.querySelectorAll("[data-close-modal]").forEach((node) => node.addEventListener("click", () => closeModal(reportModal)));
document.querySelectorAll("[data-close-detail]").forEach((node) => node.addEventListener("click", () => closeModal(detailModal)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(reportModal);
    closeModal(detailModal);
  }
});

let selectedImage = "";
document.getElementById("photoInput").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    selectedImage = reader.result;
    const preview = document.getElementById("photoPreview");
    preview.src = selectedImage;
    preview.hidden = false;
    document.querySelector(".photo-field").classList.add("has-photo");
    document.getElementById("photoLabel").querySelector("strong").textContent = "Change photo";
  };
  reader.readAsDataURL(file);
});

reportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(reportForm);
  const category = data.get("category");
  const iconForCategory = { electronics: "phone", accessories: "backpack", books: "book", keys: "keys", other: "bottle" };
  const item = {
    id: `mine-${Date.now()}`,
    type: data.get("type"),
    title: data.get("title").trim(),
    category,
    date: data.get("date"),
    location: data.get("location").trim(),
    description: data.get("description").trim(),
    privateDetail: data.get("privateDetail").trim(),
    image: selectedImage,
    icon: iconForCategory[category],
    color: palette[category],
    mine: true
  };
  storedItems.unshift(item);
  try { localStorage.setItem("unifind-reports", JSON.stringify(storedItems)); } catch (_) { /* Large photos may exceed browser storage. */ }
  items = [...storedItems, ...sampleItems];
  clearFilters();
  closeModal(reportModal);
  reportForm.reset();
  reportForm.elements.date.valueAsDate = new Date();
  selectedImage = "";
  const preview = document.getElementById("photoPreview");
  preview.hidden = true;
  preview.removeAttribute("src");
  document.querySelector(".photo-field").classList.remove("has-photo");
  document.getElementById("photoLabel").querySelector("strong").textContent = "Add a photo";
  showToast("Report published", "Your item is now visible on the board.");
  document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
});

function showDetail(item) {
  const detail = document.getElementById("detailContent");
  detail.innerHTML = `
    <div class="detail-visual" style="--card-color:${escapeHTML(item.color || palette[item.category])}">
      ${item.image ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" style="width:100%;height:100%;object-fit:cover">` : icon(item.icon || "backpack")}
    </div>
    <div class="detail-copy">
      <span class="item-status ${item.type === "lost" ? "lost" : ""}" style="position:static;display:inline-flex">${escapeHTML(item.type)}</span>
      <h2 id="detailTitle">${escapeHTML(item.title)}</h2>
      <p>${escapeHTML(item.description)}</p>
      <div class="detail-facts">
        <div>${icon("pin")}<span>Location<strong>${escapeHTML(item.location)}</strong></span></div>
        <div>${icon("calendar")}<span>Reported<strong>${escapeHTML(relativeDate(item))}</strong></span></div>
        <div>${icon("tag")}<span>Category<strong>${escapeHTML(item.category)}</strong></span></div>
        <div>${icon("shield-check")}<span>Handoff<strong>Verify before meeting</strong></span></div>
      </div>
      <div class="contact-row">
        <p>${item.mine ? "This is your report." : "Think this item may be yours? Be ready to describe a private detail."}</p>
        <button class="button button-dark" type="button" id="contactButton">${item.mine ? "Manage report" : item.type === "found" ? "This might be mine" : "I may have found it"} ${icon("arrow-right")}</button>
      </div>
    </div>`;
  openModal(detailModal);
  document.getElementById("contactButton").addEventListener("click", () => {
    closeModal(detailModal);
    showToast(item.mine ? "Report is active" : "Contact request ready", item.mine ? "Students can now discover it in search." : "In a full campus launch, this securely messages the reporter.");
  });
}

grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-item-id]");
  if (!card) return;
  const item = items.find((entry) => String(entry.id) === card.dataset.itemId);
  if (item) showDetail(item);
});
grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-item-id]");
  if (!card) return;
  event.preventDefault();
  const item = items.find((entry) => String(entry.id) === card.dataset.itemId);
  if (item) showDetail(item);
});

let toastTimer;
function showToast(title, message) {
  const toast = document.getElementById("toast");
  toast.querySelector("strong").textContent = title;
  toast.querySelector("small").textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

document.getElementById("mobileMenu").addEventListener("click", () => document.querySelector(".main-nav").classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", () => document.querySelector(".main-nav").classList.remove("open")));

reportForm.elements.date.valueAsDate = new Date();
renderItems();

