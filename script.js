
const PRODUCTS = [
  { id:1, name:'Tomatoes',   category:'vegetable', price:'JMD 350/lb',  seller:'Green Hills Farm',   img:'https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpg?itok=AFHF0CtR'},
  { id:2, name:'Sweet Pepper',    category:'vegetable', price:'JMD 400/lb',  seller:'St.Ann Farm Go',       img:'https://www.easytogrowbulbs.com/cdn/shop/files/SweetBellPepperPlantinaRaisedBed_Gemini-sqWeb.jpg?v=1739994661&width=823' },
  { id:3, name:'Irish Potato',    category:'vegetable', price:'JMD 300/lb',  seller:'Blue Mountain Farms',img:'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1920,h_960,g_auto/dpr_auto/f_auto/q_auto:eco/v1/hith-after-168-years-potato-famine-mystery-solved-2?_a=BAVAZGB00' },
  { id:4, name:'Callaloo',        category:'vegetable', price:'JMD 350/bunch',seller:'Hanover Fresh Co.',  img:'https://seasonedskilletblog.com/wp-content/uploads/2022/09/Jamaican-Callaloo-1.jpg' },
  { id:5, name:'Carrots',         category:'vegetable', price:'JMD 450/lb',  seller:'St. Elizabeth Growers',img:'https://tuigarden.co.nz/media/p2qgrthy/tui-how-to-grow-carrots_512x276.png?width=600' },
  { id:6, name:'Scotch Bonnet pepper',   category:'vegetable', price:'JMD 500/lb',  seller:'Clarendon Spice Farm',img:'https://jamaicainseason.com/wp-content/uploads/2024/03/Image-5632-scaled.jpg' },
  { id:7, name:'Watermelon',      category:'fruit',     price:'JMD 320/lb',  seller:'Westmoreland Farms', img:'https://whatscookingamerica.net/wp-content/uploads/2015/03/Watermelon-Sliced-Eqyptian5.jpg' },
  { id:8, name:'Bananas',         category:'fruit',     price:'JMD 380/lb',  seller:'Trelawny Banana Co.',img:'https://www.islandorganicsbali.com/cdn/shop/products/banana_17897f33-44e4-4f06-84ba-c18134816788.jpg?v=1669430721&width=823' },
  { id:9, name:'Breadfruit',      category:'fruit',     price:'JMD 700/each',seller:'Portland Produce',   img:'https://cdn.shopify.com/s/files/1/0062/8532/8445/products/Breadfruit_3_BB.jpg?v=1666028851' },
  { id:10,name:'Corn',            category:'grain',     price:'JMD 800/ear', seller:'Manchester Grains',  img:'https://www.southernliving.com/thmb/EAP2MOnddeJ69OoOlrT5-q0g6f8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-763286485-2000-6607f1726c1c4c38ade506ebafd2f9ab.jpg' },
  { id:11,name:'Sugar Cane',      category:'grain',     price:'JMD 900/stalk',seller:'Westmoreland Sugar', img:'https://www.saveur.com/uploads/2022/03/05/sugarcane-linda-xiao.jpg?dpr=1.5&format=auto&optimize=high&width=1440' },
  { id:12,name:'Pumpkin',         category:'vegetable', price:'JMD 480/lb',  seller:'Mandeville Fresh',   img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Cucurbita_2011_G1_Large.jpg/1280px-Cucurbita_2011_G1_Large.jpg' },
];


const WEATHER_ALERTS = [
  { icon:'⛈️', type:'high',   title:'Heavy Rainfall Warning',   risk:'High Risk',    advice:'Improve field drainage immediately. Delay fertiliser application and protect seedlings from flooding.' },
  { icon:'🌬️', type:'medium', title:'Tropical Storm Watch',      risk:'Medium Risk',  advice:'Secure greenhouses and nets. Harvest mature crops early. Brace root structures of young plants.' },
  { icon:'☀️', type:'medium', title:'Heat Stress Advisory',      risk:'Medium Risk',  advice:'Increase irrigation frequency. Mulch soil to retain moisture. Provide shade for heat-sensitive crops.' },
  { icon:'🌵', type:'low',    title:'Dry Spell Forecast',        risk:'Low Risk',     advice:'Monitor soil moisture daily. Consider drip irrigation. Prioritise watering of high-value crops.' },
  { icon:'🌫️', type:'info',   title:'Mist & Low Visibility',    risk:'Advisory',     advice:'Fungal disease risk elevated. Increase ventilation in enclosed growing areas and monitor crops.' },
  { icon:'🌪️', type:'high',   title:'Strong Wind Alert',         risk:'High Risk',    advice:'Stake tall crops such as plantain and corn. Remove dead branches that could cause wind damage.' },
];


const FORECAST = [
  { day:'Mon', icon:'⛈️', temp:'27°C' },
  { day:'Tue', icon:'🌤️', temp:'29°C' },
  { day:'Wed', icon:'☀️', temp:'32°C' },
  { day:'Thu', icon:'🌧️', temp:'26°C' },
  { day:'Fri', icon:'⛅', temp:'28°C' },
];


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


const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
const navItems  = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  updateActiveNav();
});


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});


navItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});


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


const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      
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



const buyerSearchInput    = document.getElementById('buyer-search-input');
const buyerCategoryFilter = document.getElementById('buyer-category-filter');
const listingsGrid        = document.getElementById('listings-grid');
const resultsLabel        = document.getElementById('results-label');
const toggleListingsBtn   = document.getElementById('toggle-listings-btn');

const sellerForm     = document.getElementById('seller-form');
  const sfToast        = document.getElementById('sf-toast');
  const sfToastMsg     = document.getElementById('sf-toast-msg');
  const imageUrlInput  = document.getElementById('sf-image-url');
  const imageFileInput = document.getElementById('sf-image-file');
  const imagePreview   = document.getElementById('sf-image-preview');
  const imageError     = document.getElementById('err-image-url');
  const fileError      = document.getElementById('err-image-file');

let sellerListings = PRODUCTS.map(p => ({
  id: p.id,
  name: p.name,
  seller: p.seller,
  category: p.category,
  price: p.price,
  img: p.img,
  description: `Fresh from ${p.seller}`,
  socials: {}
}));
let nextListingId = PRODUCTS.length + 1;

const hiddenListings = new Set();

if (buyerSearchInput && buyerCategoryFilter && listingsGrid && resultsLabel && toggleListingsBtn && sellerForm && sfToast && sfToastMsg && imageUrlInput && imageFileInput && imagePreview && imageError && fileError) {
  let listingsVisible = true;

  function updateToggleLabel() {
    toggleListingsBtn.textContent = listingsVisible ? 'Hide listings' : 'Show listings';
  }

  toggleListingsBtn.addEventListener('click', () => {
    listingsVisible = !listingsVisible;
    listingsGrid.style.display = listingsVisible ? '' : 'none';
    updateToggleLabel();
  });

  let selectedImageDataUrl = '';

  function setPreview(src) {
    imagePreview.innerHTML = src
      ? `<img src="${src}" alt="Listing preview" />`
      : '';
  }

  imageFileInput.addEventListener('change', () => {
    fileError.textContent = '';
    if (!imageFileInput.files || !imageFileInput.files[0]) {
      selectedImageDataUrl = '';
      setPreview('');
      return;
    }

    const file = imageFileInput.files[0];
    if (!file.type.startsWith('image/')) {
      fileError.textContent = 'Please select an image file.';
      selectedImageDataUrl = '';
      setPreview('');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      selectedImageDataUrl = reader.result;
      setPreview(selectedImageDataUrl);
    };
    reader.readAsDataURL(file);
  });

  function renderSellerListings() {
    const query = buyerSearchInput.value.trim().toLowerCase();
    const filter = buyerCategoryFilter.value;
    const filtered = sellerListings.filter(item => {
      if (hiddenListings.has(item.id)) return false;
      const matchCat = filter === 'all' || item.category === filter;
      const matchSearch = item.name.toLowerCase().includes(query) ||
                          item.seller.toLowerCase().includes(query) ||
                          (item.description || '').toLowerCase().includes(query);
      return matchCat && matchSearch;
    });

    resultsLabel.textContent = filtered.length
      ? `Showing ${filtered.length} listing${filtered.length === 1 ? '' : 's'}`
      : 'No listings match your search.';

    // Ensure the toggle label is correct when listings are filtered
    updateToggleLabel();

    listingsGrid.innerHTML = filtered.length
      ? filtered.map(item => `
          <div class="listing-card">
            <div class="listing-img-wrap">
              <img class="listing-img" src="${item.img || 'https://via.placeholder.com/420x260?text=No+Image'}" alt="${item.name}" loading="lazy" />
            </div>
            <div class="listing-card-top">
              <div class="listing-item-name">${item.name}</div>
              <span class="listing-badge badge-${item.category}">${item.category}</span>
            </div>
            <div class="listing-seller">${item.seller}</div>
            <div class="listing-desc">${item.description || ''}</div>
            ${item.socials && (item.socials.phone || item.socials.facebook || item.socials.instagram || item.socials.twitter) ? `
            <div class="listing-socials">
              ${item.socials.phone ? `<a href="tel:${item.socials.phone}" class="social-link">📞 ${item.socials.phone}</a>` : ''}
              ${item.socials.facebook ? `<a href="${item.socials.facebook}" target="_blank" class="social-link">FB</a>` : ''}
              ${item.socials.instagram ? `<a href="${item.socials.instagram}" target="_blank" class="social-link">IG</a>` : ''}
              ${item.socials.twitter ? `<a href="${item.socials.twitter}" target="_blank" class="social-link">TW</a>` : ''}
            </div>
            ` : ''}
            <div class="listing-footer">
              <div class="listing-price">${item.price}</div>
              <button class="listing-order-btn" data-id="${item.id}" data-name="${item.name}">Order Now</button>
              <button class="listing-message-btn" data-id="${item.id}" data-seller="${item.seller}">Message</button>
              <button class="listing-hide-btn" data-id="${item.id}">Hide</button>
            </div>
          </div>
        `).join('')
      : '<div class="listings-empty"><p>No products match your search. Try a different keyword or category.</p></div>';

    listingsGrid.querySelectorAll('.listing-order-btn').forEach(btn => {
      btn.addEventListener('click', () => openOrderModal(btn.dataset.id, btn.dataset.name));
    });

    listingsGrid.querySelectorAll('.listing-message-btn').forEach(btn => {
      btn.addEventListener('click', () => openChatModal(Number(btn.dataset.id), btn.dataset.seller));
    });

    listingsGrid.querySelectorAll('.listing-hide-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        hiddenListings.add(Number(btn.dataset.id));
        renderSellerListings();
      });
    });
  }

  buyerSearchInput.addEventListener('input', renderSellerListings);
  buyerCategoryFilter.addEventListener('change', renderSellerListings);

  sellerForm.addEventListener('submit', e => {
    e.preventDefault();
    const sellerName = document.getElementById('sf-seller-name').value.trim();
    const itemName   = document.getElementById('sf-item-name').value.trim();
const imageUrl   = imageUrlInput.value.trim();
      const category   = document.getElementById('sf-category').value;
      const price      = document.getElementById('sf-price').value.trim();
      const description= document.getElementById('sf-description').value.trim();
      const facebook   = document.getElementById('sf-facebook').value.trim();
      const instagram  = document.getElementById('sf-instagram').value.trim();
      const twitter    = document.getElementById('sf-twitter').value.trim();
      const phone      = document.getElementById('sf-phone').value.trim();

      
      if (!imageUrl && !selectedImageDataUrl) {
        imageError.textContent = 'Please provide an image URL or upload an image.';
        return;
      }
      imageError.textContent = '';
      fileError.textContent = '';

      if (!sellerName || !itemName || !category || !price) return;

      sellerListings.unshift({
        id: nextListingId++,
        name: itemName,
        seller: sellerName,
        category,
        price: `JMD ${price}`,
        img: selectedImageDataUrl || imageUrl,
        description,
        socials: { facebook, instagram, twitter, phone }
      });

    
      selectedImageDataUrl = '';
      setPreview('');
      imageFileInput.value = '';

    sellerForm.reset();

    sfToastMsg.textContent = 'Listing added successfully!';
    sfToast.classList.add('show');
    setTimeout(() => sfToast.classList.remove('show'), 2500);
    document.getElementById('buyer-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    renderSellerListings(); 
  });

  updateToggleLabel();
  renderSellerListings(); 
}


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

// Submit the order form 
orderForm.addEventListener('submit', e => {
  e.preventDefault();
  const name     = document.getElementById('order-name').value.trim();
  const email    = document.getElementById('order-email').value.trim();
  const qty      = document.getElementById('order-qty').value;
  const location = document.getElementById('order-location').value.trim();
  if (!name || !email || !qty || !location) return;

  
  orderForm.style.display = 'none';
  orderSuccess.style.display = 'block';
  successMsg.textContent = `Thank you, ${name}! Your order of ${qty}lb of ${activeProductName} will be delivered to ${location}. Confirmation sent to ${email}.`;
});


const sellerChatModal        = document.getElementById('seller-chat-modal');
const sellerChatClose        = document.getElementById('seller-chat-close');
const sellerChatSellerName   = document.getElementById('seller-chat-seller-name');
const sellerChatMessages     = document.getElementById('seller-chat-messages');
const sellerChatInput        = document.getElementById('seller-chat-input');
const sellerChatSend         = document.getElementById('seller-chat-send');

let activeChatId = null;
const chatHistory = {};

function renderChatHistory(listingId) {
  const history = chatHistory[listingId] || [];
  sellerChatMessages.innerHTML = history.map(msg => `
    <div class="chat-bubble ${msg.role}">
      <div class="chat-bubble-text">${msg.text}</div>
    </div>
  `).join('');
  sellerChatMessages.scrollTop = sellerChatMessages.scrollHeight;
}

function openChatModal(listingId, seller) {
  activeChatId = listingId;
  sellerChatSellerName.textContent = `Message ${seller}`;
  renderChatHistory(listingId);
  sellerChatInput.value = '';
  sellerChatModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeChatModal() {
  sellerChatModal.classList.remove('active');
  document.body.style.overflow = '';
}

function addChatMessage(listingId, text, role) {
  if (!chatHistory[listingId]) chatHistory[listingId] = [];
  chatHistory[listingId].push({ role, text, time: Date.now() });
}

function sendChat() {
  const text = sellerChatInput.value.trim();
  if (!text || activeChatId == null) return;

  addChatMessage(activeChatId, text, 'user');
  renderChatHistory(activeChatId);
  sellerChatInput.value = '';

  
  setTimeout(() => {
    const response = `Hi there! Thanks for reaching out. We'll get back to you soon.`;
    addChatMessage(activeChatId, response, 'seller');
    renderChatHistory(activeChatId);
  }, 1000 + Math.random() * 800);
}

sellerChatSend.addEventListener('click', sendChat);
sellerChatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendChat(); });

sellerChatClose.addEventListener('click', closeChatModal);
sellerChatModal.addEventListener('click', e => { if (e.target === sellerChatModal) closeChatModal(); });

const chatMessages = document.getElementById('chat-messages');
const chatInput    = document.getElementById('chat-input');
const chatSend     = document.getElementById('chat-send');
const quickTopics  = document.querySelectorAll('.quick-topics li');


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

function removeTyping() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}


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


function sendChatMessage(text) {
  text = text.trim();
  if (!text) return;
  appendMessage(text, 'user');
  chatInput.value = '';
  showTyping();
  
  setTimeout(() => {
    removeTyping();
    appendMessage(getAIResponse(text), 'ai');
  }, 1200 + Math.random() * 600);
}

chatSend.addEventListener('click', () => sendChatMessage(chatInput.value));
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendChatMessage(chatInput.value); });


quickTopics.forEach(li => {
  li.addEventListener('click', () => {
    sendChatMessage(li.dataset.q);
   
    chatMessages.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


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


const newsGrid   = document.getElementById('news-grid');
const newsFilter = document.getElementById('news-filter');

function regionLabel(r) {
  return { jamaica:'Jamaica', caribbean:'Caribbean', usa:'USA', global:'Global' }[r] || r;
}

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

  
  document.querySelectorAll('.btn-read-more').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      alert(`"${filtered[i].title}" — Full article coming soon in the PlantLink News Hub.`);
    });
  });
}

newsFilter.addEventListener('change', e => renderNews(e.target.value));
renderNews(); // Initial render


const contactForm    = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');


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
  
    setTimeout(() => { contactSuccess.style.display = 'none'; }, 6000);
  }
});


['c-name','c-email','c-msg'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    const errId = { 'c-name':'err-name', 'c-email':'err-email', 'c-msg':'err-msg' }[id];
    document.getElementById(errId).textContent = '';
    document.getElementById(id).style.borderColor = '';
  });
});


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


console.log('%c🌿 PlantLink loaded', 'color:#0ea5e9;font-weight:700;font-size:14px');
console.log(`Products: ${PRODUCTS.length} | News: ${NEWS.length} | Alerts: ${WEATHER_ALERTS.length}`);