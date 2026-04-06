/* ============================================
   MARKET SAN JUAN — App Logic v3 (Data Driven)
   ============================================ */

// SVG Icon helpers
const ICONS = {
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style="width:14px;height:14px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>',
  alertCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
  smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;"><path d="M20.38 3.46 16 2 12 5 8 2 3.62 3.46a2 2 0 0 0-1.34 1.86v.72a2 2 0 0 0 1.34 1.86L8 10v12h8V10l4.38-2.1a2 2 0 0 0 1.34-1.86v-.72a2 2 0 0 0-1.34-1.86z"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>',
  apple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'
};

const CATEGORY_ICONS = {
  tech: ICONS.smartphone, vehicles: ICONS.car, home: ICONS.home,
  clothing: ICONS.shirt, sports: ICONS.dumbbell, food: ICONS.apple,
  services: ICONS.wrench, crafts: ICONS.palette
};

// ---- Modular Components Layout System ----
const COMPONENTS = {
  navbar() {
    const user = AUTH.getUser();
    const isLoggedIn = AUTH.isLoggedIn();
    const path = window.location.pathname;
    const isPage = (p) => path.includes(p);
    
    // Variación para Repartidores
    const isDelivery = isPage('delivery.html');
    const brandName = isDelivery ? 'SJ Repartos' : 'Market San Juan';
    const brandIcon = isDelivery 
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;color:var(--primary-light);"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>`;

    return `
      <div class="container">
        <a href="index.html" class="navbar__brand">
          <span class="navbar__logo">${brandIcon}</span>
          ${brandName}
        </a>
        <div class="nav-links" id="navLinks">
          <a href="marketplace.html" class="${isPage('marketplace') ? 'active' : ''}">Explorar</a>
          <a href="publish.html" class="${isPage('publish') ? 'active' : ''}">Publicar</a>
          ${isLoggedIn ? `<a href="profile.html" class="${isPage('profile') ? 'active' : ''}">Mi Perfil</a>` : ''}
          ${isLoggedIn && user?.role === 'store' ? `<a href="store-admin.html" class="${isPage('store-admin') ? 'active' : ''}" style="color:var(--accent);font-weight:700;">Panel Tienda</a>` : ''}
          ${isLoggedIn && user?.role === 'driver' ? `<a href="delivery.html" class="${isPage('delivery') ? 'active' : ''}" style="color:var(--success);font-weight:700;">Panel Envios</a>` : ''}
          
          <a href="${isLoggedIn ? 'profile.html' : 'login.html'}" class="nav-cta">
            ${isLoggedIn ? user.name.split(' ')[0] : 'Ingresar'}
          </a>
        </div>
        <button class="nav-toggle" id="navToggle" aria-label="Menú"><span></span><span></span><span></span></button>
      </div>`;
  },
  
  inject() {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
      const navElement = document.createElement('nav');
      navElement.id = 'navbar';
      const path = window.location.pathname;
      
      // Lógica de clases y estilos
      let navClass = 'navbar';
      if (document.body.dataset.navTransparent === 'true') {
        navClass += ' navbar--transparent';
      } else {
        navClass += ' navbar--solid';
      }
      
      if (path.includes('delivery.html')) navClass += ' scrolled nav-dark';
      
      navElement.className = navClass;
      
      // Style overrides (ej: Chat necesita relative)
      if (path.includes('chat.html')) navElement.style.position = 'relative';
      
      navElement.innerHTML = this.navbar();
      navPlaceholder.appendChild(navElement);
      
      // Re-vincular eventos
      const toggle = navElement.querySelector('#navToggle');
      const links = navElement.querySelector('#navLinks');
      if (toggle && links) {
        toggle.addEventListener('click', () => links.classList.toggle('open'));
        links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
      }
      
      // Re-vincular scroll si es transparente
      if (navElement.classList.contains('navbar--transparent')) {
        const updateNav = () => {
          if (window.scrollY > 50) {
            navElement.classList.remove('navbar--transparent');
            navElement.classList.add('navbar--solid');
          } else {
            navElement.classList.add('navbar--transparent');
            navElement.classList.remove('navbar--solid');
          }
        };
        window.addEventListener('scroll', updateNav);
        updateNav();
      }
    }
  }
};


// ---- Core Navbar & UI ----
const navbar = document.getElementById('navbar');
if (navbar) {
  const updateNav = () => {
    if (!navbar.dataset.transparent) return;
    if (window.scrollY > 50) {
      navbar.classList.remove('navbar--transparent');
      navbar.classList.add('navbar--solid');
    } else {
      navbar.classList.add('navbar--transparent');
      navbar.classList.remove('navbar--solid');
    }
  };
  if (navbar.classList.contains('navbar--transparent')) {
    navbar.dataset.transparent = 'true';
    window.addEventListener('scroll', updateNav);
    updateNav();
  }
}

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; obs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.anim-fade-up, .anim-fade, .anim-scale').forEach(el => { el.style.animationPlayState = 'paused'; obs.observe(el); });

// ---- Theme Module ----
const THEME = {
  iconSun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  iconMoon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  init() {
    const isDark = localStorage.getItem('msj_theme') === 'dark';
    if(isDark) document.documentElement.classList.add('dark-theme');
    this.injectToggle();
  },
  toggle() {
    const root = document.documentElement;
    root.classList.toggle('dark-theme');
    const isDark = root.classList.contains('dark-theme');
    localStorage.setItem('msj_theme', isDark ? 'dark' : 'light');
    document.getElementById('themeToggleBtn').innerHTML = isDark ? this.iconSun : this.iconMoon;
  },
  injectToggle() {
    const navRight = document.querySelector('.nav-links');
    if(!navRight) return;
    const btn = document.createElement('button');
    btn.id = 'themeToggleBtn';
    btn.className = 'btn btn-icon';
    btn.style.color = 'var(--text)';
    btn.style.marginLeft = '12px';
    const isDark = document.documentElement.classList.contains('dark-theme');
    btn.innerHTML = isDark ? this.iconSun : this.iconMoon;
    btn.onclick = () => this.toggle();
    navRight.appendChild(btn);
  }
};
THEME.init();

function showToast(message, type = 'info') {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  const colors = { success: 'var(--success)', error: 'var(--danger)', warning: 'var(--warning)', info: 'var(--primary)' };
  const icons = { success: ICONS.check, error: ICONS.alertCircle, warning: ICONS.alertCircle, info: ICONS.shield };
  t.style.borderLeftColor = colors[type];
  t.innerHTML = `<span style="color:${colors[type]}">${icons[type]}</span> ${message}`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(10px)'; t.style.transition = '0.3s ease'; setTimeout(() => t.remove(), 300); }, 3500);
}

// ---- Modulo Productos ----
function renderProductCard(product) {
  const gradient = getGradient(product.title);
  const badgeClass = product.badge === 'Tienda Oficial' ? '' : product.badge === 'Destacado' ? 'product-card__badge--accent' : 'product-card__badge--success';
  const icon = CATEGORY_ICONS[product.category] || ICONS.tag;
  return `
    <div class="product-card" onclick="window.location='product.html?id=${product.id}'">
      <div class="product-card__img">
        <div class="product-card__img-inner" style="background:${gradient};">
          <span style="color:rgba(255,255,255,0.6);transform:scale(1.5);">${icon}</span>
        </div>
        <span class="product-card__badge ${badgeClass}">${product.badge}</span>
        <button class="product-card__fav" onclick="event.stopPropagation();toggleFav(${product.id})">${ICONS.heart}</button>
      </div>
      <div class="product-card__body">
        <h3 class="product-card__title">${product.title}</h3>
        <div class="product-card__location">${ICONS.mapPin} ${product.location}, San Juan</div>
        <div class="product-card__price">${formatPrice(product.price)}</div>
        <div class="product-card__footer">
          <div class="product-card__seller">
            <div class="product-card__avatar" style="background:${getGradient(product.seller.name)}">${product.seller.avatar}</div>
            <span class="product-card__seller-name">${product.seller.name}</span>
          </div>
          <div class="product-card__rating">${ICONS.star} ${product.seller.rating}</div>
        </div>
      </div>
    </div>`;
}

function renderProducts(cid, prods) {
  const c = document.getElementById(cid);
  if (!c) return;
  c.innerHTML = prods.length ? prods.map(renderProductCard).join('') : '<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);">No hay productos en esta categoría.</p>';
  const count = document.getElementById('resultCount');
  if (count) count.textContent = prods.length;
}

function filterProducts(category, containerId = 'productsGrid', fullArray = PRODUCTS) {
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  if (event) event.target.classList.add('active');
  renderProducts(containerId, category === 'all' ? fullArray : fullArray.filter(p => p.category === category));
}

function searchProducts() {
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase();
  renderProducts('productsGrid', PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
  ));
}

function toggleFav(id) {
  const f = JSON.parse(localStorage.getItem('msj_favs') || '[]');
  const i = f.indexOf(id);
  if (i > -1) f.splice(i, 1); else f.push(id);
  localStorage.setItem('msj_favs', JSON.stringify(f));
  showToast(i > -1 ? 'Removido de favoritos' : 'Guardado en favoritos', 'info');
}

// ---- Modulo Store ----
function renderStore() {
  const c = document.getElementById('storeProductsGrid');
  if(!c) return;

  // Si estamos en store.html público, pintamos el branding grabado
  if(document.getElementById('storeName') && MY_STORE) {
    document.getElementById('storeBanner').style.background = MY_STORE.color;
    document.getElementById('storeInitials').style.background = MY_STORE.color;
    document.getElementById('storeInitials').textContent = MY_STORE.name.substring(0,2).toUpperCase();
    document.getElementById('storeName').textContent = MY_STORE.name;
    document.getElementById('storeDesc').textContent = MY_STORE.description;
  }

  // Filtrar productos reales para mostrar en el catálogo: 
  // En una DB real usaríamos el ID de la tienda. Usamos el nombre como demo.
  const storeProducts = PRODUCTS.filter(p => p.seller.name === MY_STORE.name || p.seller.name === 'Tech San Juan');
  renderProducts('storeProductsGrid', storeProducts);
}

// ---- Modulo Store Admin (Branding) ----
let selectedStoreColor = '';

function initStoreAdmin() {
  const brandName = document.getElementById('brandName');
  if(!brandName) return; // Not on store-admin.html
  
  brandName.value = MY_STORE.name;
  document.getElementById('brandDesc').value = MY_STORE.description;
  selectedStoreColor = MY_STORE.color;
  
  // Highlight active swatch
  document.querySelectorAll('.color-swatch').forEach(el => {
    if(el.dataset.color === MY_STORE.color) el.classList.add('active');
    else el.classList.remove('active');
  });

  const adminInv = document.getElementById('storeAdminInventory');
  if(adminInv) {
    const prods = PRODUCTS.filter(p => p.seller.name === MY_STORE.name || p.seller.name === 'Tech San Juan');
    adminInv.innerHTML = prods.length ? prods.map(p => `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;border:1px solid var(--border-subtle);border-radius:var(--radius);background:rgba(255,255,255,0.02);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:40px;height:40px;background:${getGradient(p.title)};border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;color:#fff;">${CATEGORY_ICONS[p.category] || ICONS.tag}</div>
          <div><div style="font-weight:600;">${p.title}</div><div style="font-size:0.85rem;color:var(--text-secondary);">${formatPrice(p.price)} &middot; ${p.views} vistas</div></div>
        </div>
        <button class="btn btn-icon btn-sm" onclick="showToast('Editando ${p.title} (Simulado)', 'info')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></button>
      </div>
    `).join('') : '<p>No hay productos activos.</p>';
  }
}

function selectStoreColor(el) {
  document.querySelectorAll('.color-swatch').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  selectedStoreColor = el.dataset.color;
}

function handleStoreBrandingUpdate(e) {
  e.preventDefault();
  const newName = document.getElementById('brandName').value.trim();
  const newDesc = document.getElementById('brandDesc').value.trim();
  
  MY_STORE.name = newName;
  MY_STORE.description = newDesc;
  MY_STORE.color = selectedStoreColor;
  
  updateDB('msj_my_store', MY_STORE);
  
  const user = AUTH.getUser();
  if(user) { user.name = newName; user.avatar = newName.substring(0,2).toUpperCase(); updateDB('msj_user', user); }
  
  showToast('Identidad de la tienda actualizada con éxito', 'success');
}

// ---- Modulo Chat (Interactivo) ----
let currentChatId = null;

function renderChatList() {
  const list = document.getElementById('chatContactsList');
  if (!list) return;
  list.innerHTML = CHATS.map(c => `
    <div onclick="selectChat(${c.id})" style="padding:20px 24px;border-bottom:1px solid var(--border-subtle);cursor:pointer;display:flex;gap:16px;align-items:center;transition:var(--transition);background:${currentChatId === c.id ? 'var(--primary-lighter)' : 'transparent'};border-left:4px solid ${currentChatId === c.id ? 'var(--primary)' : 'transparent'};">
      <div style="width:48px;height:48px;border-radius:50%;background:${c.color};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;flex-shrink:0;">${c.initials}</div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;align-items:center;">
          <h4 style="font-size:1rem;margin:0;color:${currentChatId === c.id ? 'var(--primary-dark)' : 'var(--text)'};">${c.contact}</h4>
          <span style="font-size:0.75rem;color:${c.unread ? 'var(--primary)' : 'var(--text-muted)'};font-weight:${c.unread ? '600' : '400'};">${c.time}</span>
        </div>
        <p style="font-size:0.9rem;color:var(--text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;${c.unread ? 'font-weight:600;color:var(--text);' : ''}">${c.messages[c.messages.length-1].text}</p>
      </div>
      ${c.unread ? '<div style="width:8px;height:8px;background:var(--primary);border-radius:50%;flex-shrink:0;"></div>' : ''}
    </div>`).join('');
}

function selectChat(id) {
  currentChatId = id;
  const chat = CHATS.find(c => c.id === id);
  if (!chat) return;
  chat.unread = 0; // mark read
  updateDB('msj_chats', CHATS);
  renderChatList();
  
  // Render Header
  document.getElementById('chatHeaderName').innerHTML = `${chat.contact} ${chat.role === 'Tienda Oficial' ? '<span class="badge badge--success" style="padding:2px 8px;font-size:0.7rem;">'+ICONS.check+' Tienda Oficial</span>' : ''}`;
  document.getElementById('chatHeaderAvatar').style.background = chat.color;
  document.getElementById('chatHeaderAvatar').textContent = chat.initials;
  document.getElementById('chatHeaderStatus').innerHTML = chat.online 
    ? '<span style="display:inline-block;width:8px;height:8px;background:var(--success);border-radius:50%;"></span> En línea' 
    : '<span style="display:inline-block;width:8px;height:8px;background:var(--text-muted);border-radius:50%;"></span> Últ. vez ayer';

  // Render Product context
  document.getElementById('chatProductContext').innerHTML = `
    <a href="product.html?id=${chat.product.id}" style="font-size:1.1rem;font-weight:600;color:var(--primary-dark);display:block;margin-bottom:4px;">${chat.product.title}</a>
    <div style="font-weight:800;color:var(--primary);font-size:1.3rem;font-family:var(--font-heading);">${formatPrice(chat.product.price)}</div>`;
  
  const icon = CATEGORY_ICONS[PRODUCTS.find(p=>p.id===chat.product.id)?.category] || ICONS.tag;
  document.getElementById('chatProductImage').innerHTML = `<span style="color:rgba(255,255,255,0.8);transform:scale(0.8);">${icon}</span>`;
  document.getElementById('chatProductImage').style.background = chat.color;

  // Render Messages
  const area = document.getElementById('chatMessagesArea');
  area.innerHTML = chat.messages.map(m => {
    if(m.sender === 'me') return `
      <div style="display:flex;justify-content:flex-end;">
        <div style="background:var(--primary);color:#fff;padding:14px 20px;border-radius:18px 18px 0 18px;max-width:75%;font-size:0.95rem;box-shadow:0 4px 10px rgba(37,99,235,0.15);line-height:1.6;">${m.text}</div>
      </div>`;
    else return `
      <div style="display:flex;justify-content:flex-start;">
        <div style="background:var(--bg-card);border:1px solid var(--border-subtle);color:var(--text);padding:14px 20px;border-radius:18px 18px 18px 0;max-width:75%;font-size:0.95rem;box-shadow:var(--shadow-sm);line-height:1.6;">${m.text}</div>
      </div>`;
  }).join('') + `
    <div style="text-align:center;font-size:0.85rem;color:var(--success);margin-top:20px;background:var(--success-light);border:1px solid rgba(5,150,105,0.2);padding:12px 24px;border-radius:var(--radius-full);width:fit-content;margin-left:auto;margin-right:auto;display:flex;align-items:center;gap:8px;">
      ${ICONS.shield} <strong>Transacción Segura:</strong> Todo queda registrado.
    </div>`;
  
  area.scrollTop = area.scrollHeight;
}

function handleSendMessage(e) {
  e.preventDefault();
  const input = document.getElementById('msgInput');
  const text = input.value.trim();
  if(!text || !currentChatId) return;

  const chat = CHATS.find(c => c.id === currentChatId);
  chat.messages.push({ sender: 'me', text, time: 'Ahora' });
  chat.time = 'Ahora';
  updateDB('msj_chats', CHATS);
  
  input.value = '';
  selectChat(currentChatId); // re-render
}

function initChat() {
  if(document.getElementById('chatContactsList') && CHATS.length > 0) {
    if(!currentChatId) currentChatId = CHATS[0].id; // auto select first
    renderChatList();
    selectChat(currentChatId);
  }
}

// ---- Modulo Repartidor (Delivery) ----
function renderDeliveries() {
  const c = document.getElementById('deliveryQueue');
  if(!c) return;
  
  if (DELIVERIES.length === 0) {
    c.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted);">No hay viajes disponibles en tu zona.</div>`;
    return;
  }

  c.innerHTML = DELIVERIES.map(d => `
    <div class="driver-card" style="cursor:pointer;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.1)'">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
        <span style="font-size:1.4rem;font-weight:800;color:var(--success);font-family:var(--font-heading);">${formatPrice(d.reward)}</span>
        <span style="color:rgba(255,255,255,0.6);font-size:0.85rem;display:flex;align-items:center;gap:4px;">
          ${ICONS.mapPin} ${d.distance}
        </span>
      </div>
      <div style="display:flex;flex-direction:column;gap:16px;position:relative;margin-bottom:24px;">
        <div style="position:absolute;left:10px;top:24px;bottom:24px;width:2px;background:rgba(255,255,255,0.1);z-index:0;"></div>
        <div style="display:flex;gap:16px;align-items:start;position:relative;z-index:1;">
          <div style="width:22px;height:22px;border-radius:50%;background:var(--primary);border:4px solid var(--bg-dark-card);margin-top:2px;"></div>
          <div><div style="font-size:0.8rem;color:rgba(255,255,255,0.5);margin-bottom:2px;">${d.fromType}</div><div style="font-weight:600;color:#fff;">${d.from}</div></div>
        </div>
        <div style="display:flex;gap:16px;align-items:start;position:relative;z-index:1;">
          <div style="width:22px;height:22px;border-radius:50%;background:var(--accent);border:4px solid var(--bg-dark-card);margin-top:2px;"></div>
          <div><div style="font-size:0.8rem;color:rgba(255,255,255,0.5);margin-bottom:2px;">${d.toType}</div><div style="font-weight:600;color:#fff;">${d.to}</div></div>
        </div>
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="acceptDelivery(${d.id})">Aceptar Viaje</button>
    </div>`
  ).join('');
}

function acceptDelivery(id) {
  const index = DELIVERIES.findIndex(d => d.id === id);
  if(index > -1) DELIVERIES.splice(index, 1);
  updateDB('msj_deliveries', DELIVERIES);
  showToast('Viaje aceptado, redirigiendo al GPS...', 'success');
  renderDeliveries();
}

// ---- Modulo Administrador (Moderation) ----
function renderModerationQueue() {
  const c = document.getElementById('adminQueueList');
  const countSpan = document.getElementById('adminQueueCount');
  if(!c) return;
  
  if (countSpan) countSpan.textContent = `${MODERATION_QUEUE.length} pendientes`;

  if(MODERATION_QUEUE.length === 0) {
    c.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);">La cola de revisión está vacía. ¡Buen trabajo!</div>`;
    return;
  }

  c.innerHTML = MODERATION_QUEUE.map(item => `
    <div style="display:flex;gap:20px;padding:24px;border:1px solid var(--border-subtle);border-radius:var(--radius-lg);background:var(--bg);align-items:center;flex-wrap:wrap;">
      <div style="width:64px;height:64px;border-radius:var(--radius);background:${getGradient(item.title)};flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#fff;transform:scale(1);">
        ${CATEGORY_ICONS[item.category] || ICONS.tag}
      </div>
      <div style="flex:1;min-width:200px;">
        <h4 style="font-size:1.05rem;margin-bottom:4px;">${item.title}</h4>
        <p style="font-size:0.85rem;color:var(--text-secondary);display:flex;align-items:center;gap:6px;">
          Por: ${item.user} &middot; ${item.time} &middot; <strong style="color:var(--text);">${formatPrice(item.price)}</strong>
        </p>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-sm" style="background:var(--success);color:#fff;" onclick="decideModeration(${item.id}, 'approve')">Aprobar</button>
        <button class="btn btn-sm" style="background:var(--danger);color:#fff;" onclick="decideModeration(${item.id}, 'reject')">Rechazar</button>
      </div>
    </div>`
  ).join('');
}

function decideModeration(id, action) {
  const index = MODERATION_QUEUE.findIndex(q => q.id === id);
  if(index > -1) {
    const item = MODERATION_QUEUE[index];
    if(action === 'approve') {
      PRODUCTS.unshift({
        id: Date.now(),
        title: item.title,
        price: item.price,
        category: item.category,
        location: item.location,
        seller: { name: item.user, verified: true, rating: 5.0, sales: 0, avatar: item.user.substring(0,2).toUpperCase() },
        badge: 'Nuevo', favorites: 0, views: 0, date: 'Recién', condition: 'Nuevo - En revisión', description: 'Aprobado recientemente por el sistema de moderación oficial.'
      });
      updateDB('msj_products', PRODUCTS);
      showToast('Publicación aprobada y publicada al marketplace', 'success');
    } else {
      showToast('Publicación rechazada y devuelta al emisor', 'error');
    }
    MODERATION_QUEUE.splice(index, 1);
    updateDB('msj_moderation_queue', MODERATION_QUEUE);
    renderModerationQueue();
  }
}

// ---- Auth ----
const AUTH = {
  isLoggedIn: () => localStorage.getItem('msj_user') !== null,
  getUser: () => JSON.parse(localStorage.getItem('msj_user') || 'null'),
  login(email) {
    const u = { id: 1, name: 'Usuario Demo', email, avatar: 'UD', verified: true, rating: 4.5, sales: 12 };
    localStorage.setItem('msj_user', JSON.stringify(u)); return u;
  },
  register(d) {
    const u = { id: Date.now(), name: d.name, email: d.email, avatar: d.name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase(), verified: false, rating: 0, sales: 0 };
    localStorage.setItem('msj_user', JSON.stringify(u)); return u;
  },
  logout() { localStorage.removeItem('msj_user'); window.location.href = 'index.html'; }
};

function handleLogin(e) { 
  e.preventDefault(); 
  const email = e.target.querySelector('input[type="email"]').value;
  const pass = e.target.querySelector('input[type="password"]').value;
  if (!email || !pass) return showToast('Todos los campos son obligatorios', 'warning');
  if (pass.length < 6) return showToast('La contraseña debe tener al menos 6 caracteres', 'error');
  
  AUTH.login(email); 
  showToast('Autenticación exitosa. Redirigiendo...', 'success'); 
  setTimeout(() => window.location.href = 'marketplace.html', 1000); 
}

let activeRegistrationRole = '';

function selectRole(role) {
  activeRegistrationRole = role;
  document.querySelectorAll('.role-card').forEach(c => {
    c.classList.remove('selected');
    c.querySelector('.role-indicator').style.display = 'none';
  });
  const ev = event.currentTarget || event.target.closest('.role-card');
  if(ev) {
    ev.classList.add('selected');
    ev.querySelector('.role-indicator').style.display = 'block';
  }
  document.getElementById('btnContinueStep').disabled = false;
}

function goToStep2() {
  if(!activeRegistrationRole) return;
  document.getElementById('regStep1').style.display = 'none';
  document.getElementById('regStep2').style.display = 'block';
  
  // Ocultar todos los dicondicionales y mostrar el seleccionado
  document.querySelectorAll('.role-fields').forEach(f => f.classList.remove('active'));
  
  const labels = { 'user': 'Usuario Particular', 'store': 'Tienda Comercial', 'driver': 'Repartidor / Vehículo' };
  document.getElementById('labelRolEscogido').textContent = labels[activeRegistrationRole];
  
  if(activeRegistrationRole === 'user' || activeRegistrationRole === 'driver') document.getElementById('fieldsDni').classList.add('active');
  if(activeRegistrationRole === 'store') document.getElementById('fieldsStore').classList.add('active');
  if(activeRegistrationRole === 'driver') document.getElementById('fieldsDriver').classList.add('active');
}

function goToStep1() {
  document.getElementById('regStep2').style.display = 'none';
  document.getElementById('regStep1').style.display = 'block';
}

function handleMultiRegister(e) { 
  e.preventDefault(); 
  const inputs = Array.from(e.target.querySelectorAll('input:not([type="checkbox"])'));
  if (inputs.some(i => i.offsetParent !== null && !i.value.trim())) return showToast('Por favor, completá los datos obligatorios para tu perfil', 'warning');
  
  const rules = document.getElementById('terms');
  if (rules && !rules.checked) return showToast('Debes aceptar los términos y condiciones', 'error');

  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  
  const userObj = AUTH.register({name, email, role: activeRegistrationRole}); 
  showToast('Identidad provisoria creada exitosamente', 'success'); 
  
  setTimeout(() => {
    if(activeRegistrationRole === 'driver') window.location.href = 'delivery.html';
    else if(activeRegistrationRole === 'store') window.location.href = 'store-admin.html';
    else window.location.href = 'marketplace.html';
  }, 1500); 
}

function handlePublish(e) { 
  e.preventDefault(); 
  const title = e.target.querySelector('input[type="text"]').value;
  const price = e.target.querySelector('input[type="number"]').value;
  if (title.length < 10) return showToast('El título es muy corto, detallá un poco más', 'error');
  if (price <= 0) return showToast('El precio sugerido no es válido', 'error');

  const u = AUTH.getUser() || {name: 'Anónimo'};
  MODERATION_QUEUE.push({
    id: Date.now(),
    title, price: parseInt(price),
    user: u.name, time: 'Ahora mismo',
    reason: 'Revisión por Inteligencia Algorítmica',
    category: 'tech', location: 'Capital'
  });
  updateDB('msj_moderation_queue', MODERATION_QUEUE);

  console.log(e.target);
  e.target.reset();
  showToast('Publicación enviada a la cola de moderación oficial', 'success'); 
  setTimeout(() => window.location.href = 'profile.html', 2000); 
}

// ---- Render Product Detail (Dynamic) ----
function renderProductDetail() {
  const c = document.getElementById('productDetail');
  if (!c) return;
  const idParams = new URLSearchParams(window.location.search).get('id');
  if(!idParams) return c.innerHTML = '<h2 style="text-align:center;">Producto no especificado</h2>';
  
  const id = parseInt(idParams);
  const product = PRODUCTS.find(x => x.id === id);
  if(!product) return c.innerHTML = '<h2 style="text-align:center;">El producto ya no existe o fue eliminado</h2>';

  const gradient = getGradient(product.title);
  const icon = CATEGORY_ICONS[product.category] || ICONS.tag;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:48px;align-items:start;">
      <div style="width:100%;height:420px;background:${gradient};border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;">
        <span style="color:rgba(255,255,255,0.5);transform:scale(2.5);">${icon}</span>
      </div>
      <div>
        <span class="badge badge--success" style="margin-bottom:14px;">${ICONS.check} ${product.badge}</span>
        <h1 style="font-size:1.8rem;margin-bottom:8px;">${product.title}</h1>
        <p style="color:var(--text-muted);margin-bottom:20px;display:flex;align-items:center;gap:6px;">${ICONS.mapPin} ${product.location}, San Juan &middot; ${product.condition}</p>
        <div style="font-size:2.2rem;font-weight:800;color:var(--primary);margin-bottom:28px;font-family:var(--font-heading);">${formatPrice(product.price)}</div>
        <p style="line-height:1.8;margin-bottom:28px;color:var(--text-secondary);">${product.description}</p>
        <div style="display:flex;gap:12px;margin-bottom:36px;">
          <button class="btn btn-primary btn-lg" style="flex:1;" onclick="window.location='chat.html'">Contactar Vendedor</button>
          <button class="btn btn-outline btn-icon" onclick="toggleFav(${product.id})">${ICONS.heart}</button>
        </div>
        <div class="card" style="padding:20px;cursor:pointer;" onclick="window.location='store.html'">
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;">
            <div style="width:48px;height:48px;border-radius:50%;background:${getGradient(product.seller.name)};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">${product.seller.avatar}</div>
            <div>
              <h3 style="font-size:1rem;">${product.seller.name}</h3>
              <div style="display:flex;gap:16px;font-size:0.82rem;color:var(--text-secondary);">
                <span style="display:flex;align-items:center;gap:4px;">${ICONS.star} ${product.seller.rating}</span>
                <span>${product.seller.sales} ventas</span>
                <span class="badge badge--success">${ICONS.shield} Verificado</span>
              </div>
            </div>
          </div>
        </div>
        <div style="display:flex;gap:24px;margin-top:20px;font-size:0.82rem;color:var(--text-muted);">
          <span>${product.views} vistas</span>
          <span>${product.favorites} favoritos</span>
          <span>${product.date}</span>
        </div>
      </div>
    </div>`;
}

// ---- App Initialization ----
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inyectar Componentes primero
  COMPONENTS.inject();
  
  // 2. Inicializar Temas (ya que ahora existe el botón si se inyectó la nav)
  THEME.init();
  
  // 3. Otros módulos
  if (document.getElementById('productsGrid')) renderProducts('productsGrid', PRODUCTS);
  if (document.getElementById('productDetail')) renderProductDetail();
  if (document.getElementById('storeProductsGrid')) renderStore();
  if (document.getElementById('brandName')) initStoreAdmin();
  if (document.getElementById('chatContactsList')) initChat();
  if (document.getElementById('deliveryQueue')) renderDeliveries();
  if (document.getElementById('adminQueueList')) renderModerationQueue();
});
