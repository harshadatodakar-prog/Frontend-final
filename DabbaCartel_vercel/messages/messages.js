document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('messageInput');
  const send = document.getElementById('sendMessage');
  const cards = [...document.querySelectorAll('.message-card')];
  document.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const type = card.dataset.type;
      const unread = card.dataset.read === 'false';
      card.style.display = filter === 'all' || (filter === 'unread' && unread) || type === filter ? '' : 'none';
    });
  }));
  const search = document.getElementById('searchMessages');
  if (search) search.addEventListener('input', () => {
    const q = search.value.toLowerCase().trim();
    cards.forEach(card => card.style.display = card.textContent.toLowerCase().includes(q) ? '' : 'none');
  });
  function sendMessage() {
    const message = input.value.trim();
    if (!message) return alert('Please type a message.');
    let state; try { state = JSON.parse(localStorage.getItem('dabbacartel_state')) || {}; } catch (_) { state = {}; }
    state.messages = state.messages || [];
    state.messages.push({ text: message, time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) });
    localStorage.setItem('dabbacartel_state', JSON.stringify(state));
    const section = document.querySelector('.messages-area');
    if (section) section.insertAdjacentHTML('beforeend', `<div class="message-card" data-type="donor" data-read="true"><div class="message-avatar"><i class="fa-solid fa-user"></i></div><div class="message-info"><div class="message-header"><h3>You</h3><span>Just now</span></div><p class="message-type">Donor</p><p class="message-text"></p></div></div>`);
    const added = section?.lastElementChild?.querySelector('.message-text'); if (added) added.textContent = message;
    input.value = '';
  }
  if (send) send.addEventListener('click', sendMessage);
  if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); sendMessage(); } });
});
