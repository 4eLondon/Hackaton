/* =============================================================
   DATA STORES
   ============================================================= */

/** Products for the marketplace */
const PRODUCTS = [
  { id:1, name:'Vine Tomatoes',   category:'vegetable', price:'$3.50/kg',  seller:'Green Hills Farm',   img:'https://images.unsplash.com/photo-1592924357229-d23a5e11a8a7?w=400&q=80' },
  { id:2, name:'Sweet Pepper',    category:'vegetable', price:'$4.20/kg',  seller:'Sunrise Agro',       img:'https://images.unsplash.com/photo-1601004890657-fe80ebc7b9c7?w=400&q=80' },
  { id:3, name:'Irish Potato',    category:'vegetable', price:'$2.80/kg',  seller:'Blue Mountain Farms',img:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80' },
  { id:4, name:'Callaloo',        category:'vegetable', price:'$1.90/bunch',seller:'Hanover Fresh Co.',  img:'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80' },
  { id:5, name:'Carrots',         category:'vegetable', price:'$2.10/kg',  seller:'St. Elizabeth Growers',img:'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80' },
  { id:6, name:'Scotch Bonnet',   category:'vegetable', price:'$6.00/kg',  seller:'Clarendon Spice Farm',img:'https://images.unsplash.com/photo-1563635815-47ce8deb5847?w=400&q=80' },
  { id:7, name:'Watermelon',      category:'fruit',     price:'$1.50/kg',  seller:'Westmoreland Farms', img:'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80' },
  { id:8, name:'Bananas',         category:'fruit',     price:'$1.20/lb',  seller:'Trelawny Banana Co.',img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80' },
  { id:9, name:'Breadfruit',      category:'fruit',     price:'$2.40/each',seller:'Portland Produce',   img:'https://images.unsplash.com/photo-1628115706401-a5e03c9ab30d?w=400&q=80' },
  { id:10,name:'Corn',            category:'grain',     price:'$0.80/ear', seller:'Manchester Grains',  img:'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&q=80' },
  { id:11,name:'Sugar Cane',      category:'grain',     price:'$0.60/stalk',seller:'Westmoreland Sugar', img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80' },
  { id:12,name:'Pumpkin',         category:'vegetable', price:'$1.80/kg',  seller:'Mandeville Fresh',   img:'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400&q=80' },
];

/** Weather alerts */
const WEATHER_ALERTS = [
  { icon:'⛈️', type:'high',   title:'Heavy Rainfall Warning',   risk:'High Risk',    advice:'Improve field drainage immediately. Delay fertiliser application and protect seedlings from flooding.' },
  { icon:'🌬️', type:'medium', title:'Tropical Storm Watch',      risk:'Medium Risk',  advice:'Secure greenhouses and nets. Harvest mature crops early. Brace root structures of young plants.' },
  { icon:'☀️', type:'medium', title:'Heat Stress Advisory',      risk:'Medium Risk',  advice:'Increase irrigation frequency. Mulch soil to retain moisture. Provide shade for heat-sensitive crops.' },
  { icon:'🌵', type:'low',    title:'Dry Spell Forecast',        risk:'Low Risk',     advice:'Monitor soil moisture daily. Consider drip irrigation. Prioritise watering of high-value crops.' },
  { icon:'🌫️', type:'info',   title:'Mist & Low Visibility',    risk:'Advisory',     advice:'Fungal disease risk elevated. Increase ventilation in enclosed growing areas and monitor crops.' },
  { icon:'🌪️', type:'high',   title:'Strong Wind Alert',         risk:'High Risk',    advice:'Stake tall crops such as plantain and corn. Remove dead branches that could cause wind damage.' },
];

/** 5-day forecast */
const FORECAST = [
  { day:'Mon', icon:'⛈️', temp:'27°C' },
  { day:'Tue', icon:'🌤️', temp:'29°C' },
  { day:'Wed', icon:'☀️', temp:'32°C' },
  { day:'Thu', icon:'🌧️', temp:'26°C' },
  { day:'Fri', icon:'⛅', temp:'28°C' },
];

/** Agricultural news */
const NEWS = [
  {
    region:'jamaica',
    title:'Jamaica Invests $500M in Agri-Tech Infrastructure',
    summary:'The Ministry of Agriculture has announced a major digital transformation initiative to modernise farming across parishes.',
    date:'June 12, 2025',
    img:'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&q=80'
  },
  {
    region:'jamaica',
    title:'Drone Technology Revolutionising Crop Monitoring in St. Elizabeth',
    summary:'Local farmers in the breadbasket of Jamaica are using affordable drone technology to survey large fields and detect crop stress early.',
    date:'June 8, 2025',
    img:'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=500&q=80'
  },
  {
    region:'caribbean',
    title:'CARICOM Agriculture Ministers Sign Regional Food Security Pact',
    summary:'A landmark agreement aims to reduce the Caribbean\'s food import bill by 25% over the next five years through regional production.',
    date:'June 5, 2025',
    img:'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=500&q=80'
  },
  {
    region:'caribbean',
    title:'Trinidad Launches $200M Hydroponic Hub',
    summary:'Trinidad and Tobago breaks ground on the Caribbean\'s largest hydroponic facility, capable of producing 1,000 tonnes of vegetables monthly.',
    date:'May 30, 2025',
    img:'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&q=80'
  },
  {
    region:'usa',
    title:'US Climate-Smart Agriculture Grants Reach $3.1 Billion',
    summary:'USDA expands its Partnerships for Climate-Smart Commodities programme, offering grants to farmers adopting sustainable practices.',
    date:'May 25, 2025',
    img:'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&q=80'
  },
  {
    region:'global',
    title:'UN Report: AI Could Boost Global Food Production by 70%',
    summary:'A new UN FAO report highlights the transformative potential of artificial intelligence in optimising crop yields and reducing post-harvest losses.',
    date:'May 20, 2025',
    img:'https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?w=500&q=80'
  },
  {
    region:'global',
    title:'Vertical Farming Market Set to Reach $40B by 2030',
    summary:'Global investment in vertical and indoor farming is accelerating as water scarcity and climate change drive demand for controlled-environment agriculture.',
    date:'May 15, 2025',
    img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80'
  },
  {
    region:'caribbean',
    title:'Barbados Farmers Adopt Solar-Powered Irrigation Systems',
    summary:'A pilot programme in Barbados has installed solar-powered drip irrigation across 400 small farms, cutting water use by 40%.',
    date:'May 10, 2025',
    img:'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80'
  },
];

/** AI farming response database */
const AI_RESPONSES = {
  yellow: "Yellow leaves often signal a nitrogen deficiency. Apply a balanced nitrogen fertiliser (e.g., urea at 46-0-0) and ensure proper soil drainage. If yellowing starts at the base and moves upward, this is a classic nitrogen deficiency pattern. Consider a soil test to confirm.",
  tomato: "For tomatoes, ensure full sun (6–8 hours), well-drained soil with a pH of 6.0–6.8, and consistent watering. Common diseases include early blight and bacterial wilt. Rotate crops yearly and use copper-based fungicides preventatively.",
  pepper: "Sweet peppers thrive in warm, well-drained soil. Space plants 45cm apart and water deeply but infrequently. Blossom drop is often caused by temperature extremes. Provide afternoon shade in peak heat (above 35°C).",
  fertiliser: "A general guideline: use NPK 10-10-10 at planting for balanced establishment. Switch to a lower-nitrogen, higher-phosphorus and potassium blend (e.g., 5-10-10) during flowering and fruiting to encourage yield over leaf growth.",
  irrigation: "Drip irrigation is 90% more efficient than overhead sprinklers for most crops. Water early morning to reduce evaporation. For vegetables, aim for 25–35mm of water per week. Install a soil moisture sensor to avoid over- or under-watering.",
  rain: "Before heavy rain, ensure field drainage channels are clear. Hill up soil around root crops. Stake tall plants like corn and plantains. After flooding, apply a preventative fungicide as wet conditions promote disease.",
  drought: "During drought, mulch soil with 5–8cm of organic material to retain moisture. Use deficit irrigation — water only when crops show mild stress signs. Prioritise water for reproductive stages (flowering, fruit set).",
  disease: "Common crop diseases in Jamaica include Phytophthora blight, anthracnose, and bacterial wilt. Prevention is key: use disease-resistant varieties, practice crop rotation, and avoid overhead watering. Remove and destroy infected plant material immediately.",
  planting: "Best planting times in Jamaica depend on rainfall patterns. The main dry season (December–March) suits crops that need less water. The rainy season (May–November) is ideal for most vegetables with good drainage.",
  potato: "Irish potatoes grow best at elevations above 500m in Jamaica. Plant certified seed potatoes in well-drained, slightly acidic soil (pH 5.5–6.5). Hill soil as plants grow. Harvest when foliage yellows.",
  default: "That's a great question! For the best agricultural advice tailored to your specific crop and location, I'd recommend also consulting with your local parish agricultural extension officer. Generally, healthy crops need balanced nutrition, consistent moisture, good drainage, and disease prevention. What crop or specific challenge are you dealing with?"
};

/* =============================================================
   NAVIGATION
   ============================================================= */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
const navItems  = document.querySelectorAll('.nav-item');

// Sticky navbar shadow on scroll
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  updateActiveNav();
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close nav when link clicked (mobile)
navItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/** Highlight the active nav item based on scroll position */
function updateActiveNav() {
  const sections = ['home','features','marketplace','ai-assistant','weather','news','about','contact'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  navItems.forEach(item => {
    const href = item.getAttribute('href')?.replace('#','');
    item.classList.toggle('active', href === current);
  });
}

/* =============================================================
   SCROLL REVEAL
   ============================================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger sibling cards
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      let delay = 0;
      siblings.forEach((el, idx) => { if (el === entry.target) delay = idx * 80; });
      entry.target.style.transitionDelay = `${delay}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =============================================================
   MARKETPLACE
   ============================================================= */
const productsGrid  = document.getElementById('products-grid');
const productSearch = document.getElementById('product-search');
const filterTabs    = document.getElementById('filter-tabs');

let currentFilter = 'all';
let searchQuery   = '';

/** Render products based on current filter + search */
function renderProducts() {
  const filtered = PRODUCTS.filter(p => {
    const matchCat    = currentFilter === 'all' || p.category === currentFilter;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.seller.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  productsGrid.innerHTML = filtered.length
    ? filtered.map(p => `
        <div class="product-card">
          <div class="product-img-wrap">
            <img src="${p.img}" alt="${p.name}" loading="lazy" />
          </div>
          <div class="product-body">
            <div class="product-category">${p.category}</div>
            <div class="product-name">${p.name}</div>
            <div class="product-price">${p.price}</div>
            <div class="product-seller">Sold by ${p.seller}</div>
            <button class="btn-order" data-id="${p.id}" data-name="${p.name}">Order Now</button>
          </div>
        </div>
      `).join('')
    : '<p style="color:var(--gray-400);padding:20px">No products match your search.</p>';

  // Attach order button listeners
  document.querySelectorAll('.btn-order').forEach(btn => {
    btn.addEventListener('click', () => openOrderModal(btn.dataset.id, btn.dataset.name));
  });
}

// Filter tabs
filterTabs.addEventListener('click', e => {
  if (!e.target.classList.contains('filter-tab')) return;
  currentFilter = e.target.dataset.filter;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  renderProducts();
});

// Search
productSearch.addEventListener('input', e => {
  searchQuery = e.target.value;
  renderProducts();
});

renderProducts(); // Initial render

/* =============================================================
   ORDER MODAL
   ============================================================= */
const orderModal       = document.getElementById('order-modal');
const modalClose       = document.getElementById('modal-close');
const orderForm        = document.getElementById('order-form');
const orderSuccess     = document.getElementById('order-success');
const modalProductName = document.getElementById('modal-product-name');
const successMsg       = document.getElementById('success-msg');
const closeSuccess     = document.getElementById('close-success');

let activeProductName = '';

function openOrderModal(id, name) {
  activeProductName = name;
  modalProductName.textContent = `Order: ${name}`;
  orderForm.style.display = 'block';
  orderSuccess.style.display = 'none';
  orderModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
  orderModal.classList.remove('active');
  document.body.style.overflow = '';
  orderForm.reset();
}

modalClose.addEventListener('click', closeOrderModal);
orderModal.addEventListener('click', e => { if (e.target === orderModal) closeOrderModal(); });
closeSuccess.addEventListener('click', closeOrderModal);

// Order form submit
orderForm.addEventListener('submit', e => {
  e.preventDefault();
  const name     = document.getElementById('order-name').value.trim();
  const email    = document.getElementById('order-email').value.trim();
  const qty      = document.getElementById('order-qty').value;
  const location = document.getElementById('order-location').value.trim();
  if (!name || !email || !qty || !location) return;

  // Simulate processing
  orderForm.style.display = 'none';
  orderSuccess.style.display = 'block';
  successMsg.textContent = `Thank you, ${name}! Your order of ${qty}kg of ${activeProductName} will be delivered to ${location}. Confirmation sent to ${email}.`;
});

/* =============================================================
   AI FARMING ASSISTANT
   ============================================================= */
const chatMessages = document.getElementById('chat-messages');
const chatInput    = document.getElementById('chat-input');
const chatSend     = document.getElementById('chat-send');
const quickTopics  = document.querySelectorAll('.quick-topics li');

/** Add a message bubble to the chat */
function appendMessage(text, role) {
  const msg = document.createElement('div');
  msg.className = `chat-msg ${role}`;
  const avatar = role === 'ai' ? '🌿' : '👤';
  msg.innerHTML = `
    <div class="msg-avatar">${avatar}</div>
    <div class="msg-bubble">${text}</div>
  `;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/** Show typing indicator */
function showTyping() {
  const indicator = document.createElement('div');
  indicator.className = 'chat-msg ai chat-typing';
  indicator.id = 'typing-indicator';
  indicator.innerHTML = `
    <div class="msg-avatar">🌿</div>
    <div class="msg-bubble">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  chatMessages.appendChild(indicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/** Remove typing indicator */
function removeTyping() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

/** Generate AI farming response based on keywords */
function getAIResponse(userMsg) {
  const msg = userMsg.toLowerCase();
  if (msg.includes('yellow') || msg.includes('yellowing'))       return AI_RESPONSES.yellow;
  if (msg.includes('tomato'))                                    return AI_RESPONSES.tomato;
  if (msg.includes('pepper'))                                    return AI_RESPONSES.pepper;
  if (msg.includes('fertiliser') || msg.includes('fertilizer')) return AI_RESPONSES.fertiliser;
  if (msg.includes('irrig') || msg.includes('water'))           return AI_RESPONSES.irrigation;
  if (msg.includes('rain') || msg.includes('flood'))             return AI_RESPONSES.rain;
  if (msg.includes('drought') || msg.includes('dry'))            return AI_RESPONSES.drought;
  if (msg.includes('disease') || msg.includes('blight') || msg.includes('fungus')) return AI_RESPONSES.disease;
  if (msg.includes('plant') && msg.includes('when'))             return AI_RESPONSES.planting;
  if (msg.includes('potato'))                                    return AI_RESPONSES.potato;
  return AI_RESPONSES.default;
}

/** Handle sending a chat message */
function sendChatMessage(text) {
  text = text.trim();
  if (!text) return;
  appendMessage(text, 'user');
  chatInput.value = '';
  showTyping();
  // Simulate AI thinking delay
  setTimeout(() => {
    removeTyping();
    appendMessage(getAIResponse(text), 'ai');
  }, 1200 + Math.random() * 600);
}

chatSend.addEventListener('click', () => sendChatMessage(chatInput.value));
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendChatMessage(chatInput.value); });

// Quick topic shortcuts
quickTopics.forEach(li => {
  li.addEventListener('click', () => {
    sendChatMessage(li.dataset.q);
    // On mobile, make chat visible
    chatMessages.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* =============================================================
   WEATHER ALERTS
   ============================================================= */

/** Render 5-day forecast */
function renderForecast() {
  const strip = document.getElementById('forecast-strip');
  strip.innerHTML = FORECAST.map(f => `
    <div class="forecast-day">
      <div class="fd-day">${f.day}</div>
      <div class="fd-icon">${f.icon}</div>
      <div class="fd-temp">${f.temp}</div>
    </div>
  `).join('');
}

/** Render weather alert cards */
function renderAlerts() {
  const grid = document.getElementById('alerts-grid');
  grid.innerHTML = WEATHER_ALERTS.map(a => `
    <div class="alert-card ${a.type}">
      <div class="alert-top">
        <span class="alert-icon">${a.icon}</span>
        <span class="alert-badge">${a.risk}</span>
      </div>
      <div class="alert-title">${a.title}</div>
      <div class="alert-advice">${a.advice}</div>
    </div>
  `).join('');
}

/** Simulate dynamic weather data refresh */
function simulateWeather() {
  const conditions = ['Partly Cloudy','Sunny','Scattered Showers','Overcast','Humid & Warm'];
  const temps      = [26, 27, 28, 29, 30, 31, 32];
  const humidities = [65, 68, 72, 75, 78, 82];
  const winds      = ['12 km/h', '15 km/h', '18 km/h', '20 km/h', '24 km/h'];

  document.getElementById('cw-temp').textContent    = `${temps[Math.floor(Math.random()*temps.length)]}°C`;
  document.getElementById('cw-desc').textContent    = conditions[Math.floor(Math.random()*conditions.length)];
  document.getElementById('cw-humidity').textContent= `${humidities[Math.floor(Math.random()*humidities.length)]}%`;
  document.getElementById('cw-wind').textContent    = winds[Math.floor(Math.random()*winds.length)];
}

renderForecast();
renderAlerts();
simulateWeather();
// Refresh weather data every 30 seconds
setInterval(simulateWeather, 30000);

/* =============================================================
   FARMING NEWS
   ============================================================= */
const newsGrid   = document.getElementById('news-grid');
const newsFilter = document.getElementById('news-filter');

function regionLabel(r) {
  return { jamaica:'Jamaica', caribbean:'Caribbean', usa:'USA', global:'Global' }[r] || r;
}

/** Render news cards filtered by region */
function renderNews(region = 'all') {
  const filtered = region === 'all' ? NEWS : NEWS.filter(n => n.region === region);
  newsGrid.innerHTML = filtered.map(n => `
    <div class="news-card">
      <div class="news-img-wrap">
        <img src="${n.img}" alt="${n.title}" loading="lazy" />
      </div>
      <div class="news-body">
        <div class="news-meta">
          <span class="news-region">${regionLabel(n.region)}</span>
          <span class="news-date">${n.date}</span>
        </div>
        <div class="news-title">${n.title}</div>
        <div class="news-summary">${n.summary}</div>
        <button class="btn-read-more">Read full article →</button>
      </div>
    </div>
  `).join('');

  // "Read more" buttons open a simple alert (placeholder for real article routing)
  document.querySelectorAll('.btn-read-more').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      alert(`"${filtered[i].title}" — Full article coming soon in the PlantLink News Hub.`);
    });
  });
}

newsFilter.addEventListener('change', e => renderNews(e.target.value));
renderNews(); // Initial render

/* =============================================================
   CONTACT FORM VALIDATION
   ============================================================= */
const contactForm    = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');

/** Validate a single field and show/clear error message */
function validateField(id, errorId, validator, errorMsg) {
  const field = document.getElementById(id);
  const error = document.getElementById(errorId);
  if (!validator(field.value.trim())) {
    error.textContent = errorMsg;
    field.style.borderColor = 'var(--red-400)';
    return false;
  }
  error.textContent = '';
  field.style.borderColor = '';
  return true;
}

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const validName  = validateField('c-name',  'err-name',  v => v.length >= 2,              'Please enter your full name.');
  const validEmail = validateField('c-email', 'err-email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Please enter a valid email address.');
  const validMsg   = validateField('c-msg',   'err-msg',   v => v.length >= 15,             'Please enter a message of at least 15 characters.');

  if (validName && validEmail && validMsg) {
    contactSuccess.style.display = 'block';
    contactForm.reset();
    // Hide success after 6 seconds
    setTimeout(() => { contactSuccess.style.display = 'none'; }, 6000);
  }
});

// Clear field errors on input
['c-name','c-email','c-msg'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    const errId = { 'c-name':'err-name', 'c-email':'err-email', 'c-msg':'err-msg' }[id];
    document.getElementById(errId).textContent = '';
    document.getElementById(id).style.borderColor = '';
  });
});

/* =============================================================
   SMOOTH SCROLLING (supplement for browsers without native support)
   ============================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 80; // account for sticky navbar
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* =============================================================
   INITIALISATION LOG
   ============================================================= */
console.log('%c🌿 PlantLink loaded', 'color:#0ea5e9;font-weight:700;font-size:14px');
console.log(`Products: ${PRODUCTS.length} | News: ${NEWS.length} | Alerts: ${WEATHER_ALERTS.length}`);
