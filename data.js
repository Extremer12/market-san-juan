/* ============================================
   MARKET SAN JUAN — Dummy Database
   ============================================ */

// Inicializar base de datos en localStorage si no existe
function initDB() {
  if (!localStorage.getItem('msj_products')) {
    const defaultProducts = [
      { id: 1, title: 'Bicicleta Mountain Bike R29', price: 185000, category: 'sports', location: 'Capital', seller: { name: 'Juan Pérez', verified: true, rating: 4.8, sales: 15, avatar: 'JP' }, badge: 'Verificada', favorites: 14, views: 230, date: 'Hace 2 días', condition: 'Usado - Como nuevo', description: 'Bicicleta rodado 29 de aluminio. Cambios Shimano 21 velocidades. Freno a disco manual. Impecable estado.' },
      { id: 2, title: 'iPhone 14 — Impecable', price: 850000, category: 'tech', location: 'Rawson', seller: { name: 'MacStore SJ', verified: true, rating: 5.0, sales: 142, avatar: 'MS' }, badge: 'Tienda', favorites: 45, views: 890, date: 'Hace 5 horas', condition: 'Usado - Excelente', description: 'iPhone 14 128GB. Color Midnight. Batería al 92%. Incluye caja original y cable. No acepto permutas.' },
      { id: 3, title: 'Mesa de algarrobo artesanal', price: 120000, category: 'home', location: 'Rivadavia', seller: { name: 'Carlos Díaz', verified: false, rating: 4.2, sales: 3, avatar: 'CD' }, badge: 'Buen Precio', favorites: 8, views: 120, date: 'Hace 1.semana', condition: 'Usado - Buen estado', description: 'Mesa redonda de algarrobo macizo. 1.20m de diámetro. Ideal para quincho o comedor diario.' },
      { id: 4, title: 'Notebook Lenovo ThinkPad T480', price: 380000, category: 'tech', location: 'Santa Lucía', seller: { name: 'Tech San Juan', verified: true, rating: 4.9, sales: 150, avatar: 'TS' }, badge: 'Tienda Oficial', favorites: 88, views: 1200, date: 'Hace 10 min', condition: 'Usado - Reacondicionado', description: 'Intel Core i5 de 8va Gen, 16GB RAM, 512GB SSD NVMe. Teclado retroiluminado. Batería impecable con 4 horas de autonomía. Equipo corporativo.' },
      { id: 5, title: 'Campera The North Face M', price: 85000, category: 'clothing', location: 'Capital', seller: { name: 'Lucía M.', verified: true, rating: 4.6, sales: 12, avatar: 'LM' }, badge: 'Envío Gratis', favorites: 22, views: 304, date: 'Ayer', condition: 'Usado - Como nuevo', description: 'Campera original comprada en Chile el año pasado. Se vende por error de talle. Casi sin uso.' },
      { id: 6, title: 'Volkswagen Gol Trend 2018', price: 6500000, category: 'vehicles', location: 'Pocito', seller: { name: 'Autos Sur', verified: true, rating: 4.7, sales: 88, avatar: 'AS' }, badge: 'Agencia', favorites: 156, views: 4050, date: 'Hace 3 días', condition: 'Usado - 65.000 km', description: 'VTV al día. Listo para transferir. Único dueño. Versión Pack III con llantas de aleación y pantalla táctil.' }
    ];
    localStorage.setItem('msj_products', JSON.stringify(defaultProducts));
  }

  if (!localStorage.getItem('msj_moderation_queue')) {
    const queue = [
      { id: 101, title: 'Samsung Galaxy A54', price: 280000, user: 'Juan P.', time: 'Hace 2h', reason: 'Revisión estándar', category: 'tech', location: 'Capital' },
      { id: 102, title: 'Mermeladas caseras artesanales x6', price: 7500, user: 'María L.', time: 'Hace 4h', reason: 'Revisión comercial', category: 'food', location: 'Jáchal' },
    ];
    localStorage.setItem('msj_moderation_queue', JSON.stringify(queue));
  }

  if (!localStorage.getItem('msj_chats')) {
    const chats = [
      {
        id: 1, contact: 'Tech San Juan', initials: 'TS', time: '10:45 AM', color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', unread: 1, online: true, role:'Tienda Oficial',
        product: { id: 4, title: 'Notebook Lenovo ThinkPad T480', price: 380000 },
        messages: [
          { sender: 'me', text: 'Hola, ¿todavía tenés la notebook? ¿Aceptas Mercado Pago?', time: '10:15 AM' },
          { sender: 'them', text: 'Hola! Sí, todavía la tengo. Acepto Mercado Pago o transferencia bancaria.', time: '10:20 AM' },
          { sender: 'me', text: 'Buenísimo. ¿Se puede pasar a ver hoy a la tarde? Si está todo bien, te hago la transferencia ahí mismo.', time: '10:30 AM' },
          { sender: 'them', text: 'Dale perfecto. Te reservo la notebook hasta mañana a la tarde. Estamos en Santa Lucía, cerca de la plaza.', time: '10:45 AM' }
        ]
      },
      {
        id: 2, contact: 'Lucía M.', initials: 'LM', time: 'Ayer', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', unread: 0, online: false, role:'Usuario',
        product: { id: 5, title: 'Campera The North Face M', price: 85000 },
        messages: [
          { sender: 'them', text: '¿Tenés la campera The North Face en talle M?', time: 'Ayer 15:30' },
          { sender: 'me', text: 'Sí Lucía, está disponible. Es talle Medium de mujer.', time: 'Ayer 16:00' },
          { sender: 'them', text: 'Dale, a la salida del trabajo te aviso y coordinamos.', time: 'Ayer 17:10' }
        ]
      }
    ];
    localStorage.setItem('msj_chats', JSON.stringify(chats));
  }

  if (!localStorage.getItem('msj_deliveries')) {
    const deliveries = [
      { id: 201, reward: 3500, distance: '2.5 km total', from: 'Tech San Juan (Santa Lucía)', fromType: 'Retiro (Tienda)', to: 'Av. Libertador al 1200 (Capital)', toType: 'Entrega (Comprador)' },
      { id: 202, reward: 8000, distance: '14 km total', from: 'Rawson Centro', fromType: 'Retiro (Particular)', to: 'Chimbas', toType: 'Entrega' }
    ];
    localStorage.setItem('msj_deliveries', JSON.stringify(deliveries));
  }

  if (!localStorage.getItem('msj_my_store')) {
    const defaultStore = {
      name: 'Tech San Juan',
      description: 'Tecnología corporativa de alta exigencia, con garantía directa y envíos asegurados en San Juan.',
      color: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)' // Default emerald
    };
    localStorage.setItem('msj_my_store', JSON.stringify(defaultStore));
  }
}

initDB();

// Global References para facilitar acceso
const PRODUCTS = JSON.parse(localStorage.getItem('msj_products'));
const MODERATION_QUEUE = JSON.parse(localStorage.getItem('msj_moderation_queue'));
const CHATS = JSON.parse(localStorage.getItem('msj_chats'));
const DELIVERIES = JSON.parse(localStorage.getItem('msj_deliveries'));
const MY_STORE = JSON.parse(localStorage.getItem('msj_my_store'));

function updateDB(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Formatters and helpers
function formatPrice(num) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(num);
}

function getGradient(str) {
  const hash = str.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
  const hue1 = Math.abs(hash % 360);
  const hue2 = (hue1 + 40) % 360;
  return `linear-gradient(135deg, hsl(${hue1}, 70%, 65%), hsl(${hue2}, 80%, 75%))`;
}
