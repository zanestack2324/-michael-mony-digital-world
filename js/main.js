// Michael Mony Digital World - Main JavaScript

// ========================
// PRODUCT DATA
// ========================
const baseProducts = [
  {id:1,name:'ANTIGRAVITY A1',category:'Drones',price:2300000,oldPrice:2300000,rating:4.5,reviews:24,condition:'new',image:'GADGETS/ANTIGRAVITY A1.png',desc:'Professional-grade drone with advanced stabilization and 4K HDR video capture. Perfect for aerial cinematography.'},
  {id:2,name:'ATEM Mini Extreme ISO G2',category:'Video Production',price:3200000,oldPrice:3750000,rating:4.8,reviews:56,condition:'new',image:'GADGETS/ATEM MINI EXTRM ISO.png',desc:'8-channel HDMI live streaming switcher with ISO recording. Broadcast-quality production in a compact form factor.'},
  {id:3,name:'ATEM Television Studio K8',category:'Video Production',price:12000000,oldPrice:6200000,rating:4.7,reviews:31,condition:'new',image:'GADGETS/ATEM TELEVISION STUDIO K8.png',desc:'Professional broadcast switcher with 8 inputs, built-in streaming, and advanced chroma keying.'},
  {id:4,name:'Blimp Suspension Winsfield System',category:'Audio',price:240000,oldPrice:650000,rating:4.3,reviews:18,condition:'new',image:'GADGETS/BLIMP SESPENSION WINSFIELD SYSTEM.png',desc:'Professional blimp suspension system for crystal-clear audio capture in outdoor environments.'},
  {id:5,name:'BOYA BY-WS1000',category:'Audio',price:200000,oldPrice:200000,rating:4.2,reviews:42,condition:'new',image:'GADGETS/BOYA BY-WS1000.png',desc:'Wireless microphone system with exceptional range and clarity for content creators.'},
  {id:6,name:'Canon EOS G7',category:'Cameras',price:1250000,oldPrice:1450000,rating:4.6,reviews:89,condition:'new',image:'GADGETS/CANON EOS G7.png',desc:'Compact system camera with 4K video, fast autofocus, and excellent low-light performance.'},
  {id:7,name:'Canon EOS Mark III',category:'Cameras',price:5200000,oldPrice:6000000,rating:4.9,reviews:127,condition:'new',image:'GADGETS/CANON EOS MARK III.png',desc:'Full-frame mirrorless camera with 32MP sensor, 7K video, and professional-grade autofocus.'},
  {id:8,name:'Canon G7 X',category:'Cameras',price:1900000,oldPrice:1900000,rating:4.5,reviews:203,condition:'new',image:'GADGETS/CANON G7 X.png',desc:'Premium compact camera with 1-inch sensor, 4K video, perfect for vlogging and travel.'},
  {id:9,name:'Canon HD XA25',category:'Cameras',price:1400000,oldPrice:4300000,rating:4.4,reviews:37,condition:'new',image:'GADGETS/CANON HD XA25.png',desc:'Professional HD camcorder with 20x optical zoom, XLR audio inputs, and broadcast-quality video.'},
  {id:10,name:'Clapper Board',category:'Accessories',price:18000,oldPrice:75000,rating:4.1,reviews:65,condition:'new',image:'GADGETS/CLAPPER BOARD.jpeg',desc:'Professional clapperboard for film production. Essential for syncing audio and video in post-production.'},
  {id:11,name:'CVM-WM300{A}',category:'Audio',price:800000,oldPrice:800000,rating:4.3,reviews:28,condition:'new',image:'GADGETS/CVM-WM300{A}.png',desc:'Professional wireless microphone system with dual-channel receiver for interviews and presentations.'},
  {id:12,name:'DJI Lito X1',category:'Drones',price:1450000,oldPrice:1700000,rating:4.6,reviews:44,condition:'new',image:'GADGETS/DJI LITO X1.png',desc:'Compact FPV drone with HD transmission and immersive flight experience for creative pilots.'},
  {id:13,name:'DJI Matrice 4 Series Battery',category:'Drones',price:560000,oldPrice:650000,rating:4.5,reviews:19,condition:'new',image:'GADGETS/DJI MATRICE 4 SERIES BATTERY.png',desc:'High-capacity intelligent flight battery for DJI Matrice 4 series. Extended flight time for professional operations.'},
  {id:14,name:'DJI Mavic 4 Pro',category:'Drones',price:6500000,oldPrice:6500000,rating:4.8,reviews:156,condition:'new',image:'GADGETS/DJI MAVIC 4 PRO.png',desc:'Flagship folding drone with Hasselblad camera, omnidirectional obstacle sensing, and 45-min flight time.'},
  {id:15,name:'DJI Mic Mini',category:'Audio',price:250000,oldPrice:320000,rating:4.4,reviews:88,condition:'new',image:'GADGETS/DJI MIC MINI.png',desc:'Ultra-compact wireless microphone system with 48-hour battery life and noise cancellation.'},
  {id:16,name:'DJI Mini 3',category:'Drones',price:1400000,oldPrice:1400000,rating:4.7,reviews:342,condition:'new',image:'GADGETS/DJI MINI 3.png',desc:'Lightweight drone with 4K HDR video, 38-min flight time, and vertical shooting for social media.'},
  {id:17,name:'DJI Mini 3 (Fly More)',category:'Drones',price:700000,oldPrice:1300000,rating:4.7,reviews:189,condition:'new',image:'GADGETS/DJI MINI 3 (2).png',desc:'DJI Mini 3 Fly More Combo with extra batteries, charging hub, and shoulder bag for extended adventures.'},
  {id:18,name:'DJI Mini 4K',category:'Drones',price:750000,oldPrice:750000,rating:4.5,reviews:98,condition:'new',image:'GADGETS/DJI MINI 4K.png',desc:'Entry-level 4K drone with stabilized camera, 31-min flight, and user-friendly features for beginners.'},
  {id:19,name:'DJI Neo',category:'Drones',price:350000,oldPrice:750000,rating:4.3,reviews:52,condition:'new',image:'GADGETS/DJI NEO.png',desc:'Compact selfie drone with AI tracking, 4K video, and palm control for effortless content creation.'},
  {id:20,name:'DJI Osmo Mobile 8P',category:'Gimbals',price:450000,oldPrice:450000,rating:4.6,reviews:312,condition:'new',image:'GADGETS/DJI OSMO MOBILE 8P.png',desc:'Smartphone gimbal with ActiveTrack 7.0, extended battery life, and built-in extension rod.'},
  {id:21,name:'DJI RS 5',category:'Gimbals',price:850000,oldPrice:1050000,rating:4.8,reviews:73,condition:'new',image:'GADGETS/DJI RS 5.png',desc:'Professional camera gimbal with 3kg payload, touchscreen tracking, and 14-hour battery life.'},
  {id:22,name:'F01 Selfie Tripod',category:'Accessories',price:27000,oldPrice:92000,rating:4.2,reviews:145,condition:'new',image:'GADGETS/F01 SELFIE TRIPOD.png',desc:'Versatile selfie tripod with Bluetooth remote, perfect for vlogging and group photos.'},
  {id:23,name:'Feelworld 5.5" 4K Monitor',category:'Monitors',price:380000,oldPrice:460000,rating:4.4,reviews:37,condition:'new',image:"GADGETS/FEELWORLD 5.5'' 4K CAMERA MONITOR.png",desc:'Compact 5.5-inch 4K camera monitor with HDMI input, peaking, and false color for precise focus.'},
  {id:24,name:'Feelworld F7 Plus',category:'Monitors',price:400000,oldPrice:680000,rating:4.5,reviews:41,condition:'new',image:'GADGETS/FEELWORLD F7 PLUS.png',desc:'7-inch Full HD camera monitor with 3D LUT support, waveform, and professional monitoring tools.'},
  {id:25,name:'Feelworld Teleprompter TP10',category:'Accessories',price:1500000,oldPrice:1500000,rating:4.3,reviews:22,condition:'new',image:'GADGETS/FEELWORLD TELEPROMPTER TP10 .png',desc:'Professional 10-inch teleprompter with beam-splitter glass, ideal for on-camera presentations.'},
  {id:26,name:'GFM Dolly',category:'Accessories',price:5000000,oldPrice:5000000,rating:4.1,reviews:15,condition:'new',image:'GADGETS/GFM DOLLY.png',desc:'Professional camera dolly for smooth tracking shots. Compatible with most tripod systems.'},
  {id:27,name:'Godox AD600BM',category:'Lighting',price:620000,oldPrice:780000,rating:4.6,reviews:67,condition:'new',image:'GADGETS/GODOX AD600BM.png',desc:'600Ws all-in-one outdoor flash with lithium battery, 500 full-power flashes, and HSS support.'},
  {id:28,name:'Godox Litemons',category:'Lighting',price:140000,oldPrice:680000,rating:4.4,reviews:33,condition:'new',image:'GADGETS/GODOX LITEMONS.png',desc:'Versatile LED lighting system with app control, RGB capability, and high CRI for accurate colors.'},
  {id:29,name:'Gostream Duet',category:'Video Production',price:1700000,oldPrice:1700000,rating:4.5,reviews:29,condition:'new',image:'GADGETS/GOSTREAM DUET.png',desc:'Portable live streaming encoder with dual HDMI inputs for multi-camera productions.'},
  {id:30,name:'Gostream Duet ISO',category:'Video Production',price:1680000,oldPrice:1950000,rating:4.6,reviews:17,condition:'new',image:'GADGETS/GOSTREAM DUET ISO.png',desc:'Advanced live streaming encoder with ISO recording and multi-track audio support.'},
  {id:31,name:'Insta360 X4',category:'Cameras',price:800000,oldPrice:1450000,rating:4.7,reviews:289,condition:'new',image:'GADGETS/INSTA 360 X4.png',desc:'8K 360-degree action camera with FlowState stabilization, 72MP photos, and waterproof design.'},
  {id:32,name:'Osmo Pocket 4',category:'Cameras',price:1050000,oldPrice:1050000,rating:4.8,reviews:167,condition:'new',image:'GADGETS/OSMO POCKET 4.png',desc:'3-axis stabilized pocket camera with 1-inch sensor, 4K/120fps, and AI tracking capabilities.'},
  {id:33,name:'Panasonic AVCCAM',category:'Cameras',price:3400000,oldPrice:3900000,rating:4.3,reviews:24,condition:'new',image:'GADGETS/PANASONIC AVCCAM.png',desc:'Professional AVCHD camcorder with 3MOS sensors, 20x zoom, and broadcast-quality recording.'},
  {id:34,name:'RF 24-240mm F4-6.3 IS USM',category:'Lenses',price:2800000,oldPrice:2800000,rating:4.5,reviews:78,condition:'new',image:'GADGETS/RF 24-240MM F4-6.3 IS UMS.png',desc:'All-in-one zoom lens with 10x range, image stabilization, and fast USM autofocus for Canon RF mount.'},
  {id:35,name:'RO6 Drone',category:'Drones',price:300000,oldPrice:2000000,rating:4.4,reviews:31,condition:'new',image:'GADGETS/RO6 DRONE.png',desc:'Professional 6-rotor drone with heavy lift capacity, GPS positioning, and 4K camera payload.'},
  {id:36,name:'Roland V-80HDD',category:'Video Production',price:6000000,oldPrice:6200000,rating:4.7,reviews:14,condition:'new',image:'GADGETS/ROLAND V-80HDD.png',desc:'Professional video switcher with 8 inputs, multi-view, and seamless switching for live events.'},
  {id:37,name:'Seekcom S1',category:'Audio',price:750000,oldPrice:750000,rating:4.1,reviews:93,condition:'new',image:'GADGETS/SEEKCOM S1.png',desc:'Compact conference speakerphone with 360-degree audio pickup. Ideal for hybrid meetings and content creation.'},
  {id:38,name:'Sony HXR-NX70C',category:'Cameras',price:1800000,oldPrice:5300000,rating:4.5,reviews:44,condition:'new',image:'GADGETS/SONY HXR-NX70C.png',desc:'Professional dust and rain-proof NXCAM camcorder with 96GB internal memory and 26.3mm wide-angle lens.'},
  {id:39,name:'Sprolink Neolive N5',category:'Video Production',price:2000000,oldPrice:3400000,rating:4.6,reviews:21,condition:'new',image:'GADGETS/SPROLINK NEOLIVE N5.png',desc:'All-in-one live production encoder with 4 HDMI inputs, streaming, recording, and touchscreen control.'},
  {id:40,name:'Boya BY-WS1000 Used',category:'Audio',price:110000,oldPrice:165000,rating:4.0,reviews:12,condition:'used',image:'GADGETS/BOYA BY-WS1000.png',desc:'Pre-owned wireless microphone system in excellent condition. Fully tested and backed by warranty.'}
];

// ========================
// STATE
// ========================
const state = {
  cart: JSON.parse(localStorage.getItem('mmw_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('mmw_wishlist') || '[]'),
  compare: [],
  currentLang: 'en'
};
window.state = state;

const CATALOG_STORAGE_KEY = 'mmw_catalog';
const DEFAULT_CATEGORIES = ['Cameras', 'Drones', 'Audio', 'Lighting', 'Video Production', 'Gimbals', 'Monitors', 'Lenses', 'Accessories'];

function normalizeProduct(raw, fallbackId = 0) {
  const price = Number(raw?.price) || 0;
  const oldPrice = Number(raw?.oldPrice);
  const id = Number(raw?.id) || fallbackId;
  return {
    id,
    name: String(raw?.name || '').trim(),
    category: String(raw?.category || 'Accessories').trim(),
    price,
    oldPrice: Number.isFinite(oldPrice) && oldPrice > 0 ? oldPrice : price,
    rating: Math.max(0, Math.min(5, Number(raw?.rating) || 0)),
    reviews: Math.max(0, parseInt(raw?.reviews, 10) || 0),
    condition: raw?.condition === 'used' ? 'used' : 'new',
    image: String(raw?.image || 'DRONE.png').trim(),
    desc: String(raw?.desc || '').trim()
  };
}

function loadCatalogProducts() {
  try {
    const saved = JSON.parse(localStorage.getItem(CATALOG_STORAGE_KEY) || 'null');
    if (Array.isArray(saved) && saved.length) {
      return saved.map((item, index) => normalizeProduct(item, index + 1)).sort((a, b) => a.id - b.id);
    }
  } catch (e) {}
  return baseProducts.map((item) => normalizeProduct(item, item.id)).sort((a, b) => a.id - b.id);
}

function saveCatalogProducts(list) {
  localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(list.map((item) => normalizeProduct(item, item.id))));
}

function nextProductId() {
  return products.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0) + 1;
}

let products = loadCatalogProducts();

// ========================
// LOCALIZATION
// ========================
const translations = {
  en: {
    shop: 'Shop', categories: 'Categories', about: 'About', blog: 'Blog', contact: 'Contact',
    heroTitle: 'Your Professional Gear,\nDelivered <span>Instantly</span>',
    heroSub: 'Premium cameras, drones, audio gear, and lighting equipment for content creators, filmmakers, and professionals. Get what you need, when you need it.',
    shopNow: 'Shop Now', learnMore: 'Learn More', scrollDown: 'Scroll Down',
    newArrivals: 'New Arrivals', featured: 'Featured Products', categoryTitle: 'Shop by Category',
    whyUs: 'Why Michael Mony Digital World', whyUsDesc: 'We redefine the gear buying experience with speed, expertise, and care.',
    instantDelivery: 'Instant Delivery', instantDeliveryDesc: 'Get your items delivered almost immediately within local areas. No more waiting days for essential equipment.',
    oneOnOne: 'One-on-One Chat', oneOnOneDesc: 'Speak directly with our team for personalized advice and support. Real humans, real conversations.',
    warranty: 'All Items Warranty', warrantyDesc: 'Every purchase comes with comprehensive warranty coverage. Your gear is protected, always.',
    insurance: 'Insured Delivery', insuranceDesc: 'All fragile items are professionally packaged and fully insured before delivery. We specialize in handling delicate equipment.',
    testimonials: 'Trusted by Creators', testimonialsDesc: 'Hear from filmmakers, content creators, and professionals who rely on us.',
    fromBlog: 'From Our Blog', fromBlogDesc: 'Tips, tutorials, and buying guides to help you make the best choices for your craft.',
    newsletter: 'Stay in the Loop', newsletterDesc: 'Subscribe for exclusive deals, new arrivals, and pro tips.',
    subscribe: 'Subscribe', emailPlaceholder: 'Enter your email',
    quickView: 'Quick View', addToCart: 'Add to Cart', addToWishlist: 'Wishlist', buyNow: 'Buy Now',
    yourCart: 'Your Cart', cartEmpty: 'Your cart is empty', checkout: 'Checkout', total: 'Total',
    noProducts: 'No products found', sortBy: 'Sort by', allCategories: 'All Categories',
    searchProducts: 'Search products...', newest: 'Newest', priceLow: 'Price: Low to High',
    priceHigh: 'Price: High to Low', topRated: 'Top Rated',
    yourWishlist: 'Your Wishlist', wishlistEmpty: 'Your wishlist is empty',
    compare: 'Compare', compareEmpty: 'Add products to compare', clearAll: 'Clear All',
    liveChat: 'Live Chat', chatPlaceholder: 'Type a message...', chatWelcome: 'Welcome to Michael Mony Digital World! How can we help you today?',
    reviews: 'Reviews', writeReview: 'Write a Review', submitReview: 'Submit Review',
    compatCheck: 'Compatibility Checker', checkCompat: 'Check Compatibility',
    tracking: 'Track Your Order', trackBtn: 'Track', trackingPlaceholder: 'Enter order number',
    referral: 'Refer & Earn', referralDesc: 'Share your referral code with friends and earn rewards on every purchase.',
    tradeIn: 'Trade-In Your Gear', tradeInDesc: 'Upgrade your equipment and get value for your old gear. We accept trade-ins.',
    repairs: 'Repairs & Maintenance', repairsDesc: 'Professional repair and maintenance services for all your equipment. We keep you shooting.',
    support: 'Support', privacy: 'Privacy Policy', terms: 'Terms of Service',
    allRights: 'All rights reserved.', madeIn: 'Made with passion for creators worldwide.',
    aboutTitle: 'About Michael Mony Digital World',
    aboutDesc: 'We are a premier provider of professional photography, videography, and content creation equipment. Our mission is to empower creators with the tools they need, delivered when they need them.',
    contactTitle: 'Get In Touch',
    contactDesc: 'Have a question? We\'d love to hear from you. Send us a message and we\'ll respond promptly.',
    namePlaceholder: 'Your Name', messagePlaceholder: 'Your Message',
    send: 'Send Message', services: 'Services',
    compatible: '✓ These items are compatible!', incompatible: '✗ These items are not compatible.',
    multiCurrency: 'Multi-Currency Support',
    compareTitle: 'Product Comparison',
    warrantyCert: 'Warranty Certificate Included',
    sameDay: 'Same-Day Delivery Available',
    localShip: 'Local, National & International Shipping'
  }
};

function t(key) { return translations[state.currentLang]?.[key] || translations.en[key] || key; }

// ========================
// DOM HELPERS
// ========================
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }
function html(el, str) { el.innerHTML = str; }
function createEl(tag, cls = '', html = '') {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

// ========================
// TOAST
// ========================
function showToast(msg, type = 'info') {
  const t = createEl('div', `toast ${type}`, msg);
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000);
}

// ========================
// CART
// ========================
function updateCart() {
  localStorage.setItem('mmw_cart', JSON.stringify(state.cart));
  const count = state.cart.reduce((a, b) => a + b.qty, 0);
  $$('.cart-count').forEach(el => el.textContent = count);
  if ($('.cart-sidebar')) renderCartSidebar();
}

function addToCart(id) {
  const p = products.find(x => x.id === id);
  const existing = state.cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else state.cart.push({ id, qty: 1, name: p.name, price: p.price, image: p.image });
  updateCart();
  showToast(`${p.name} added to cart!`, 'success');
  if (!$('.cart-sidebar')?.classList.contains('open')) toggleCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(x => x.id !== id);
  updateCart();
}

function updateQty(id, delta) {
  const item = state.cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) removeFromCart(id);
  else updateCart();
}

function cartTotal() {
  return state.cart.reduce((a, b) => a + b.price * b.qty, 0);
}

function toggleCart() {
  $('.cart-sidebar')?.classList.toggle('open');
}

function renderCartSidebar() {
  const container = $('.cart-items');
  if (!container) return;
  if (!state.cart.length) {
    html(container, `<div class="cart-empty"><div class="icon">🛒</div><p>${t('cartEmpty')}</p></div>`);
    $('.cart-total span:last-child').textContent = '₦0';
    return;
  }
  html(container, state.cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='DRONE.png'">
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-price">₦${item.price.toLocaleString()}</div>
        <div class="item-qty">
          <button onclick="updateQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id},1)">+</button>
        </div>
      </div>
    </div>
  `).join(''));
  $('.cart-total span:last-child').textContent = `₦${cartTotal().toLocaleString()}`;
}

// ========================
// WISHLIST
// ========================
function updateWishlistCount() {
  const count = state.wishlist.length;
  const el = $('.wishlist-count');
  if (el) {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  }
}

function toggleWishlist(id) {
  const idx = state.wishlist.indexOf(id);
  if (idx > -1) { state.wishlist.splice(idx, 1); showToast('Removed from wishlist', 'info'); }
  else { state.wishlist.push(id); showToast('Added to wishlist!', 'success'); }
  localStorage.setItem('mmw_wishlist', JSON.stringify(state.wishlist));
  updateWishlistCount();
  renderProducts();
  if (window.location.hash === '#wishlist') renderWishlistPage();
}

function isWishlisted(id) { return state.wishlist.includes(id); }

function renderWishlistPage() {
  const container = $('#wishlist-items');
  if (!container) return;
  state.wishlist = state.wishlist.filter((id) => getCatalogProductById(id));
  const items = products.filter(p => state.wishlist.includes(p.id));
  if (!items.length) {
    html(container, `<div class="wishlist-empty"><div class="icon">🤍</div><p>${t('wishlistEmpty')}</p></div>`);
    return;
  }
  html(container, items.map(p => `
    <div class="product-card">
      <div class="image-wrap">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='DRONE.png'">
        <div class="badges"><span class="badge badge-${p.condition}">${p.condition}</span></div>
        <button class="wishlist-btn active" onclick="toggleWishlist(${p.id})">❤</button>
      </div>
      <div class="info">
        <div class="category-label">${p.category}</div>
        <h3>${p.name}</h3>
        <div class="price"><span class="price-current">₦${p.price.toLocaleString()}</span>${p.oldPrice ? `<span class="price-old">₦${p.oldPrice.toLocaleString()}</span>` : ''}</div>
        <div class="rating"><span class="stars">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '½' : ''}</span> (${p.reviews})</div>
        <button class="add-to-cart" onclick="addToCart(${p.id})">${t('addToCart')}</button>
      </div>
    </div>
  `).join(''));
}

// ========================
// COMPARE
// ========================
function toggleCompare(id) {
  const idx = state.compare.indexOf(id);
  if (idx > -1) { state.compare.splice(idx, 1); showToast('Removed from comparison', 'info'); }
  else {
    if (state.compare.length >= 4) { showToast('Maximum 4 items for comparison', 'error'); return; }
    state.compare.push(id); showToast('Added to comparison', 'info');
  }
  updateCompareBar();
  renderProducts();
}

function updateCompareBar() {
  const bar = $('.compare-bar');
  if (!bar) return;
  state.compare = state.compare.filter((id) => getCatalogProductById(id));
  if (state.compare.length) bar.classList.add('active');
  else bar.classList.remove('active');
  const container = $('.compare-items');
  if (!container) return;
  html(container, state.compare.map(id => {
    const p = products.find(x => x.id === id);
    return `<div class="compare-item"><img src="${p.image}" onerror="this.src='DRONE.png'"><button class="remove" onclick="toggleCompare(${id})">×</button></div>`;
  }).join(''));
  $('.compare-count').textContent = `${state.compare.length}/4`;
}

function openCompareModal() {
  state.compare = state.compare.filter((id) => getCatalogProductById(id));
  if (state.compare.length < 2) { showToast('Select at least 2 products to compare', 'error'); return; }
  const items = state.compare.map(id => products.find(p => p.id === id));
  const modal = $('.modal-overlay');
  const content = $('.modal-content');
  modal.classList.add('active');
  html(content, `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <h2 style="margin-bottom: 30px;text-align:center;">${t('compareTitle')}</h2>
    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;min-width:600px">
        <tr><td style="padding:12px;border:1px solid var(--border);font-weight:600;min-width:140px">Product</td>
          ${items.map(p => `<td style="padding:12px;border:1px solid var(--border);text-align:center"><img src="${p.image}" style="height:80px;object-fit:contain" onerror="this.src='DRONE.png'"><br><strong>${p.name}</strong></td>`).join('')}
        </tr>
        <tr><td style="padding:12px;border:1px solid var(--border);font-weight:600">Price</td>
          ${items.map(p => `<td style="padding:12px;border:1px solid var(--border);text-align:center;color:var(--accent);font-weight:700">₦${p.price.toLocaleString()}</td>`).join('')}
        </tr>
        <tr><td style="padding:12px;border:1px solid var(--border);font-weight:600">Category</td>
          ${items.map(p => `<td style="padding:12px;border:1px solid var(--border);text-align:center">${p.category}</td>`).join('')}
        </tr>
        <tr><td style="padding:12px;border:1px solid var(--border);font-weight:600">Rating</td>
          ${items.map(p => `<td style="padding:12px;border:1px solid var(--border);text-align:center">${'★'.repeat(Math.floor(p.rating))} (${p.reviews})</td>`).join('')}
        </tr>
        <tr><td style="padding:12px;border:1px solid var(--border);font-weight:600">Condition</td>
          ${items.map(p => `<td style="padding:12px;border:1px solid var(--border);text-align:center;text-transform:capitalize">${p.condition}</td>`).join('')}
        </tr>
      </table>
    </div>
  `);
}

// ========================
// PRODUCT RENDERING
// ========================
function renderProducts(data = products) {
  const grid = $('#products-grid');
  if (!grid) return;
  if (!data.length) {
    html(grid, `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)"><p>${t('noProducts')}</p></div>`);
    return;
  }
  html(grid, data.map(p => productCardHTML(p)).join(''));
  if (window.refreshReveals) requestAnimationFrame(window.refreshReveals);
}

function renderFeatured() {
  const grid = $('#featured-products-grid');
  if (!grid) return;
  const featured = products.filter(p => p.rating >= 4.5).slice(0, 8);
  html(grid, featured.map(p => productCardHTML(p)).join(''));
  if (window.refreshReveals) requestAnimationFrame(window.refreshReveals);
}

function refreshCatalogViews() {
  if ($('#products-grid')) {
    if ($('#search-input') || $('#category-filter') || $('#sort-filter')) filterProducts();
    else renderProducts();
  }
  renderFeatured();
  updateCompareBar();
  if (window.location.hash === '#wishlist') renderWishlistPage();
  if ($('#admin-product-list') || $('#admin-editing-id')) renderAdminPanel();
  if (window.refreshReveals) window.refreshReveals();
}

window.refreshCatalogViews = refreshCatalogViews;

function setCatalogProducts(list, options = {}) {
  products = list.map((item, index) => normalizeProduct(item, item.id || index + 1)).sort((a, b) => a.id - b.id);
  saveCatalogProducts(products);
  if (!options.silent) refreshCatalogViews();
}

function resetCatalogToDefaults() {
  setCatalogProducts(baseProducts.map((item) => normalizeProduct(item, item.id)));
}

function getCatalogProductById(id) {
  return products.find((item) => Number(item.id) === Number(id));
}

function parseNumericField(value, fallback = 0) {
  const num = Number(String(value).replace(/[^0-9.-]/g, ''));
  return Number.isFinite(num) ? num : fallback;
}

let filterTimer = null;
function scheduleFilterProducts() {
  clearTimeout(filterTimer);
  filterTimer = setTimeout(filterProducts, 120);
}

function renderAdminPanel() {
  const list = $('#admin-product-list');
  const stats = $('#admin-stats');
  if (!list) return;

  const orders = getOrders();
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalProducts = products.length;
  const categories = new Set(products.map((item) => item.category)).size;

  if (stats) {
    stats.innerHTML = `
      <div class="admin-stat"><span>Total Products</span><strong>${totalProducts}</strong></div>
      <div class="admin-stat"><span>Total Orders</span><strong>${totalOrders}</strong></div>
      <div class="admin-stat"><span>Revenue</span><strong>₦${totalRevenue.toLocaleString()}</strong></div>
      <div class="admin-stat"><span>Categories</span><strong>${categories}</strong></div>
    `;
  }

  list.innerHTML = products.map((product) => `
    <article class="admin-product-row">
      <img src="${product.image}" alt="${product.name}" onerror="this.src='DRONE.png'">
      <div class="admin-product-meta">
        <h4>${product.name}</h4>
        <p>${product.category} · ₦${product.price.toLocaleString()} · ${product.condition}</p>
      </div>
      <div class="admin-product-actions">
        <button class="btn btn-dark" type="button" onclick="editCatalogProduct(${product.id})">Edit</button>
        <button class="btn btn-outline" type="button" onclick="deleteCatalogProduct(${product.id})">Delete</button>
      </div>
    </article>
  `).join('');
}

function switchAdminTab(tab) {
  $$('.admin-tab').forEach(t => t.classList.toggle('active', t.dataset.adtab === tab));
  $$('.admin-tab-content').forEach(t => t.classList.toggle('active', t.id === 'admin-tab-' + tab));
}

function renderAdminOrders() {
  const container = $('#admin-orders-list');
  if (!container) return;
  const orders = getOrders();
  if (!orders.length) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--ash)"><p>No orders yet.</p></div>';
    return;
  }
  container.innerHTML = orders.map(function(o) {
    const items = (o.items || []).map(function(i) { return i.name + ' x' + i.qty; }).join(', ');
    const paymentInfo = o.payment ? o.payment.label || o.payment.method : 'N/A';
    return '<article class="admin-product-row" style="grid-template-columns:minmax(0,1fr) auto">' +
      '<div class="admin-product-meta">' +
        '<h4>' + sanitize(o.id) + '</h4>' +
        '<p>' + sanitize(o.date) + ' · ' + sanitize(o.shipping?.name || '') + ' · ' + sanitize(items) + '</p>' +
      '</div>' +
      '<div class="admin-product-actions" style="flex-direction:column;align-items:flex-end;gap:4px">' +
        '<span style="font-size:16px;font-weight:700;color:var(--brass)">₦' + (o.total || 0).toLocaleString() + '</span>' +
        '<span style="font-size:11px;padding:2px 8px;background:rgba(46,204,113,.15);color:var(--success);border:1px solid rgba(46,204,113,.2)">' + sanitize(o.status || 'Confirmed') + '</span>' +
        '<span style="font-size:10px;color:var(--ash)">' + sanitize(paymentInfo) + '</span>' +
      '</div>' +
    '</article>';
  }).join('');
}

window.switchAdminTab = switchAdminTab;
window.renderAdminOrders = renderAdminOrders;

function getOrders() {
  try { return JSON.parse(localStorage.getItem('mmw_orders') || '[]'); } catch(e) { return []; }
}

function clearAdminForm() {
  const form = $('#admin-product-form');
  if (form) form.reset();
  const idField = $('#admin-editing-id');
  if (idField) idField.value = '';
  const preview = $('#admin-image-preview');
  if (preview) {
    preview.src = 'DRONE.png';
    preview.alt = 'Preview';
  }
  const label = $('#admin-form-title');
  if (label) label.textContent = 'Add Product';
}

function editCatalogProduct(id) {
  const product = getCatalogProductById(id);
  if (!product) return;
  $('#admin-editing-id').value = product.id;
  $('#admin-name').value = product.name;
  $('#admin-category').value = product.category;
  $('#admin-price').value = product.price;
  $('#admin-old-price').value = product.oldPrice;
  $('#admin-rating').value = product.rating;
  $('#admin-reviews').value = product.reviews;
  $('#admin-condition').value = product.condition;
  $('#admin-image').value = product.image;
  $('#admin-desc').value = product.desc;
  const preview = $('#admin-image-preview');
  if (preview) preview.src = product.image || 'DRONE.png';
  const label = $('#admin-form-title');
  if (label) label.textContent = `Edit Product #${product.id}`;
  navigate('admin');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteCatalogProduct(id) {
  const product = getCatalogProductById(id);
  if (!product) return;
  if (!window.confirm(`Delete ${product.name}?`)) return;
  setCatalogProducts(products.filter((item) => Number(item.id) !== Number(id)));
  showToast('Product deleted', 'info');
}

function readCatalogImage(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve('');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Unable to read image file'));
    reader.readAsDataURL(file);
  });
}

async function saveCatalogProduct(event) {
  event?.preventDefault();
  const id = Number($('#admin-editing-id').value || 0);
  const name = $('#admin-name').value.trim();
  const category = $('#admin-category').value.trim();
  const price = parseNumericField($('#admin-price').value);
  const oldPriceRaw = parseNumericField($('#admin-old-price').value, price);
  const rating = Math.max(0, Math.min(5, Number($('#admin-rating').value) || 0));
  const reviews = Math.max(0, parseInt($('#admin-reviews').value, 10) || 0);
  const condition = $('#admin-condition').value === 'used' ? 'used' : 'new';
  const imageField = $('#admin-image').value.trim();
  const desc = $('#admin-desc').value.trim();
  const file = $('#admin-image-file')?.files?.[0];

  if (!name || !category || !price) {
    showToast('Name, category, and price are required', 'error');
    return;
  }

  let image = imageField || 'DRONE.png';
  if (file) image = await readCatalogImage(file);

  const existing = id ? getCatalogProductById(id) : null;
  const record = normalizeProduct({
    id: id || nextProductId(),
    name,
    category,
    price,
    oldPrice: oldPriceRaw || price,
    rating,
    reviews,
    condition,
    image,
    desc
  }, id || nextProductId());

  const nextList = id
    ? products.map((item) => Number(item.id) === Number(id) ? record : item)
    : [...products, record];

  setCatalogProducts(nextList);
  if (existing) showToast('Product updated', 'success');
  else showToast('Product added', 'success');
  clearAdminForm();
}

async function importCatalogFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const text = await file.text();
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    showToast('Invalid catalog JSON', 'error');
    return;
  }
  if (!Array.isArray(parsed)) {
    showToast('Catalog file must contain an array of products', 'error');
    return;
  }
  setCatalogProducts(parsed.map((item, index) => normalizeProduct(item, index + 1)));
  clearAdminForm();
  event.target.value = '';
  showToast('Catalog imported', 'success');
}

function exportCatalog() {
  const blob = new Blob([JSON.stringify(products, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mmw-catalog.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const brandIcons = {
  'Canon': '📷', 'DJI': '🛸', 'Godox': '💡', 'Sony': '📹', 'Panasonic': '🎥',
  'Boya': '🎙️', 'Roland': '🎛️', 'Feelworld': '🖥️', 'Blackmagic': '🎬',
  'Insta360': '🔵', 'Sprolink': '📡', 'Gostream': '📺', 'Seekcom': '📞',
  'Antigravity': '⚡', 'RØDE': '🎤', 'GFM': '🎥'
};

function detectBrand(name) {
  const upper = name.toUpperCase();
  for (const [b, icon] of Object.entries(brandIcons)) {
    if (upper.startsWith(b.toUpperCase())) return { name: b, icon };
  }
  if (upper.includes('ATEM')) return { name: 'Blackmagic', icon: '🎬' };
  if (upper.includes('OSMO') || upper.includes('POCKET')) return { name: 'DJI', icon: '🛸' };
  if (upper.includes('RF ')) return { name: 'Canon', icon: '📷' };
  if (upper.startsWith('CVM')) return { name: 'Boya', icon: '🎙️' };
  return null;
}

function productCardHTML(p) {
  const inWish = isWishlisted(p.id);
  const inComp = state.compare.includes(p.id);
  const sale = p.oldPrice > p.price;
  const brand = detectBrand(p.name);
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="image-wrap">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='DRONE.png'">
      <div class="badges">
        ${sale ? '<span class="badge badge-sale">Sale</span>' : ''}
        <span class="badge badge-${p.condition}">${p.condition}</span>
      </div>
      <button class="wishlist-btn ${inWish ? 'active' : ''}" onclick="toggleWishlist(${p.id})" title="${t('addToWishlist')}">${inWish ? '❤' : '🤍'}</button>
      <button class="compare-btn ${inComp ? 'active' : ''}" onclick="toggleCompare(${p.id})" title="${t('compare')}">⇄</button>
    </div>
    <div class="info">
      <div class="category-label">${p.category}</div>
      <h3>${p.name}</h3>
      ${brand ? `<div class="brand-tag">${brand.icon} ${brand.name}</div>` : ''}
      <div class="price">
        <span class="price-current">₦${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="price-old">₦${p.oldPrice.toLocaleString()}</span>` : ''}
        ${p.condition === 'used' ? `<span class="price-match">Used - Save ₦${(p.oldPrice - p.price).toLocaleString()}</span>` : ''}
      </div>
      <div class="rating"><span class="stars">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '½' : ''}</span> (${p.reviews} ${t('reviews').toLowerCase()})</div>
      <button class="add-to-cart" onclick="addToCart(${p.id})" ${p.id === 40 ? '' : ''}>${t('addToCart')}</button>
    </div>
  </div>`;
}

// ========================
// FILTERS
// ========================
function filterProducts() {
  const search = ($('#search-input')?.value || '').toLowerCase();
  const category = $('#category-filter')?.value || 'all';
  const sort = $('#sort-filter')?.value || 'newest';
  let filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search) || p.category.toLowerCase().includes(search);
    const matchCat = category === 'all' || p.category === category;
    return matchSearch && matchCat;
  });
  switch (sort) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    default: break;
  }
  renderProducts(filtered);
}

// ========================
// QUICK VIEW
// ========================
function quickView(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const modal = $('.modal-overlay');
  const content = $('.modal-content');
  modal.classList.add('active');
  html(content, `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="quick-view-grid">
      <div class="quick-view-image">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='DRONE.png'">
      </div>
      <div class="quick-view-info">
        <div class="category-name">${p.category}</div>
        <h2 class="title">${p.name}</h2>
        <div class="price-display">₦${p.price.toLocaleString()} ${p.oldPrice ? `<span style="font-size:18px;color:var(--text-muted);text-decoration:line-through;font-weight:400">₦${p.oldPrice.toLocaleString()}</span>` : ''}</div>
        <div class="rating" style="margin-bottom:16px"><span class="stars">${'★'.repeat(Math.floor(p.rating))}</span> ${p.rating} (${p.reviews} ${t('reviews').toLowerCase()})</div>
        <div class="description">${p.desc}</div>
        <div class="actions">
          <button class="btn btn-primary" onclick="addToCart(${p.id}); closeModal();">${t('addToCart')}</button>
          <button class="btn btn-outline" onclick="toggleWishlist(${p.id}); closeModal();">${t('addToWishlist')}</button>
        </div>
      </div>
    </div>
  `);
}

function closeModal() {
  $('.modal-overlay')?.classList.remove('active');
}

// ========================
// COMPATIBILITY CHECKER
// ========================
function checkCompatibility() {
  const item1 = $('#comp-item1')?.value;
  const item2 = $('#comp-item2')?.value;
  const result = $('#comp-result');
  if (!item1 || !item2) { showToast('Please select two items', 'error'); return; }
  if (item1 === item2) { showToast('Please select different items', 'error'); return; }
  const p1 = products.find(p => p.id == item1);
  const p2 = products.find(p => p.id == item2);
  if (!p1 || !p2) return;
  const compatible = p1.category === p2.category;
  result.className = `comp-result ${compatible ? 'compatible' : 'incompatible'}`;
  result.style.display = 'block';
  html(result, compatible ? `✓ ${p1.name} and ${p2.name} are compatible (same category: ${p1.category})` : `✗ ${p1.name} and ${p2.name} are from different categories and may not be compatible.`);
}

// ========================
// TRACKING
// ========================
function trackOrder() {
  const num = $('#track-input')?.value.trim().toUpperCase();
  const result = $('#track-result');
  if (!num || num.length < 5) { showToast('Please enter a valid order number', 'error'); return; }
  result.style.display = 'block';
  html(result, `
    <div style="padding:20px;background:rgba(46,204,113,.1);border-radius:8px">
      <h4 style="color:var(--success);margin-bottom:10px">✓ Order Found: ${num}</h4>
      <div style="color:var(--text-muted);font-size:14px;line-height:1.8">
        <p><strong>Status:</strong> In Transit</p>
        <p><strong>Estimated Delivery:</strong> ${new Date(Date.now() + 3*86400000).toLocaleDateString()}</p>
        <p><strong>Carrier:</strong> MM Logistics</p>
        <p><strong>Insurance:</strong> ✓ Fully Insured</p>
      </div>
    </div>
  `);
}

// ========================
// LIVE CHAT
// ========================
function toggleChat() {
  $('.chat-box')?.classList.toggle('open');
}

function sendChat() {
  const input = $('#chat-input');
  const msg = input?.value.trim();
  if (!msg) return;
  const container = $('.chat-messages');
  container.innerHTML += `<div class="chat-msg sent">${msg}</div>`;
  input.value = '';
  container.scrollTop = container.scrollHeight;
  setTimeout(() => {
    container.innerHTML += `<div class="chat-msg received">Thanks for your message! One of our team members will respond shortly. How can we assist you with your gear needs? 🎥</div>`;
    container.scrollTop = container.scrollHeight;
  }, 800);
}

// ========================
// NAVIGATION
// ========================
function navigate(page) {
  $$('.page').forEach(p => p.style.display = 'none');
  const target = $(`#page-${page}`);
  if (target) target.style.display = 'block';
  $$('.nav-link').forEach(l => l.classList.remove('active'));
  $$(`[data-page="${page}"]`).forEach(l => l.classList.add('active'));
  $('.mobile-menu')?.classList.remove('open');
  window.location.hash = page;
  if (page === 'wishlist') renderWishlistPage();
  if (page === 'shop') renderProducts();
  if (page === 'admin') { renderAdminPanel(); renderAdminOrders(); }
  renderFeatured();
  requestAnimationFrame(() => {
    if (page === 'home') {
      window.scrollTo({ top: 0 });
    } else {
      const wrapper = document.querySelector('.overlay-wrapper');
      if (wrapper) wrapper.scrollIntoView({ block: 'start' });
    }
    if (window.refreshReveals) window.refreshReveals();
  });
}

// Register Service Worker for offline caching
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

document.addEventListener('DOMContentLoaded', () => {
  // Hash routing
  const page = window.location.hash.slice(1) || 'home';
  navigate(page);

  // Navbar hide on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const curr = window.scrollY;
    $('.navbar').classList.toggle('hidden', curr > lastScroll && curr > 100);
    lastScroll = curr;
    // Back to top
    $('.back-to-top')?.classList.toggle('visible', curr > 500);
  });

  // Mobile menu
  $('.mobile-toggle')?.addEventListener('click', () => {
    $('.mobile-menu')?.classList.toggle('open');
  });

  // Close modal on overlay click
  $('.modal-overlay')?.addEventListener('click', (e) => {
    if (e.target === $('.modal-overlay')) closeModal();
  });

  // Newsletter
  $('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input?.value) {
      showToast('Subscribed! Check your inbox for exclusive offers.', 'success');
      input.value = '';
    }
  });

  // Chat
  $('#chat-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendChat();
  });

  // Language selector
  $('#lang-select')?.addEventListener('change', (e) => {
    state.currentLang = e.target.value;
    showToast('Language preference saved', 'info');
  });

  // Populate compatibility checker dropdowns
  const comp1 = $('#comp-item1');
  const comp2 = $('#comp-item2');
  if (comp1 && comp2) {
    const opts = products.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    comp1.innerHTML += opts;
    comp2.innerHTML += opts;
  }

  // Update wishlist count
  function updateWishlistCount() {
    const count = state.wishlist.length;
    const el = $('.wishlist-count');
    if (el) {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    }
  }
  updateWishlistCount();

  // Initial renders
  updateCart();
  updateCompareBar();
  filterProducts();
  if (window.location.hash.slice(1) === 'admin') renderAdminPanel();

  if (window.refreshReveals) window.refreshReveals();
});
