// AI assistant chat and planting definition module
console.log('AI Assistant module loaded');

const chatMessages = document.getElementById('chat-messages');
const chatInput    = document.getElementById('chat-input');
const chatSend     = document.getElementById('chat-send');
const quickTopics  = document.querySelectorAll('.quick-topics li');

const plantingTopicSelect = document.getElementById('planting-topic');
const plantingDefinitionBody = document.getElementById('planting-definition-body');
const selectedTopicContent = document.getElementById('selected-topic-content');
const searchTopicBtn = document.getElementById('search-topic-btn');
const topicWindow = document.getElementById('topic-window');
const topicWindowContent = document.getElementById('topic-window-content');
const closeTopicWindow = document.getElementById('close-topic-window');

function appendMessage(text, role) {
  if (!chatMessages) return;
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
  if (!chatMessages) return;
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

function pickRandom(responseArray) {
  if (!Array.isArray(responseArray)) return responseArray;
  return responseArray[Math.floor(Math.random() * responseArray.length)];
}

function getAIResponse(userMsg) {
  const msg = userMsg.toLowerCase();
  if (msg.includes('yellow') || msg.includes('yellowing'))       return pickRandom(AI_RESPONSES.yellow);
  if (msg.includes('tomato'))                                    return pickRandom(AI_RESPONSES.tomato);
  if (msg.includes('pepper'))                                    return pickRandom(AI_RESPONSES.pepper);
  if (msg.includes('fertiliser') || msg.includes('fertilizer')) return pickRandom(AI_RESPONSES.fertiliser);
  if (msg.includes('irrig') || msg.includes('water'))           return pickRandom(AI_RESPONSES.irrigation);
  if (msg.includes('rain') || msg.includes('flood'))             return pickRandom(AI_RESPONSES.rain);
  if (msg.includes('drought') || msg.includes('dry'))            return pickRandom(AI_RESPONSES.drought);
  if (msg.includes('disease') || msg.includes('blight') || msg.includes('fungus')) return pickRandom(AI_RESPONSES.disease);
  if (msg.includes('plant') && msg.includes('when'))             return pickRandom(AI_RESPONSES.planting);
  if (msg.includes('potato'))                                    return pickRandom(AI_RESPONSES.potato);
  return pickRandom(AI_RESPONSES.default);
}

function sendChatMessage(text) {
  if (!chatInput) return;
  text = text.trim();
  if (!text) return;
  appendMessage(text, 'user');
  chatInput.value = '';
  showTyping();

  setTimeout(() => {
    removeTyping();
    appendMessage(getAIResponse(text), 'ai');
  }, 1100 + Math.random() * 500);
}

function updatePlantingDefinition() {
  if (!plantingTopicSelect || !plantingDefinitionBody) return;
  const selected = plantingTopicSelect.value;
  const info = PLANTING_DEFS[selected] || PLANTING_DEFS.seedbed;

  plantingDefinitionBody.innerHTML = `
    <tr>
      <td>${info.term}</td>
      <td>${info.definition}</td>
      <td>${info.tip}</td>
    </tr>
  `;

  if (selectedTopicContent) {
    selectedTopicContent.innerHTML = `
      <div class="selected-topic-term"><strong>${info.term}</strong></div>
      <div class="selected-topic-definition">${info.definition}</div>
      <div class="selected-topic-tip">Tip: ${info.tip}</div>
    `;
  }
}

function openTopicWindow() {
  if (!topicWindow) return;
  topicWindow.classList.add('open');
  topicWindow.setAttribute('aria-hidden', 'false');
}

function closeTopicWindowFn() {
  if (!topicWindow) return;
  topicWindow.classList.remove('open');
  topicWindow.setAttribute('aria-hidden', 'true');
}

function updateTopicWindowContent(info) {
  if (!topicWindowContent) return;
  topicWindowContent.innerHTML = `
    <div class="selected-topic-term"><strong>${info.term}</strong></div>
    <div class="selected-topic-definition">${info.definition}</div>
    <div class="selected-topic-tip">Tip: ${info.tip}</div>
  `;
}

if (chatSend && chatInput) {
  chatSend.addEventListener('click', () => sendChatMessage(chatInput.value));
  chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendChatMessage(chatInput.value); });
}

if (quickTopics) {
  quickTopics.forEach(li => {
    li.addEventListener('click', () => {
      sendChatMessage(li.dataset.q);
      chatMessages?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

if (plantingTopicSelect) {
  plantingTopicSelect.addEventListener('change', () => updatePlantingDefinition());
  updatePlantingDefinition();
}

if (searchTopicBtn) {
  searchTopicBtn.addEventListener('click', () => {
    const selected = plantingTopicSelect ? plantingTopicSelect.value : 'seedbed';
    const info = PLANTING_DEFS[selected] || PLANTING_DEFS.seedbed;
    updateTopicWindowContent(info);
    openTopicWindow();
  });
}

if (closeTopicWindow) {
  closeTopicWindow.addEventListener('click', closeTopicWindowFn);
}

document.addEventListener('click', (event) => {
  if (!topicWindow || !topicWindow.classList.contains('open')) return;
  const target = event.target;
  if (target instanceof Node && !topicWindow.contains(target) && target !== searchTopicBtn) {
    closeTopicWindowFn();
  }
});
