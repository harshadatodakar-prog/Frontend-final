/* DabbaCartel - frontend-only demo storage and navigation */
(function () {
  const KEY = 'dabbacartel_state';
  const defaultState = {
    user: { name: 'Ganesh Lad', email: 'demo@dabbacartel.com', phone: '9876543210', location: 'Panvel, Maharashtra', role: 'Donor', about: 'Food lover and believer in sharing is caring' },
    listings: [],
    messages: [],
    impact: { foodRescued: '1,250 kg', mealsRedistributed: '3,420', donors: '480', organizations: '120', donations: '620', wasteReduced: '1,250 kg', beneficiaries: '8,900' }
  };

  function getState() {
    try { return Object.assign({}, defaultState, JSON.parse(localStorage.getItem(KEY) || '{}')); }
    catch (_) { return Object.assign({}, defaultState); }
  }
  function saveState(state) { localStorage.setItem(KEY, JSON.stringify(state)); }
  window.DabbaCartel = { getState, saveState };

  function setUserText() {
    const state = getState();
    document.querySelectorAll('[data-user-name]').forEach(el => el.textContent = state.user?.name || 'Ganesh Lad');
    const welcome = document.querySelector('.welcome-section h1');
    if (welcome && /Welcome back,/.test(welcome.textContent)) {
      welcome.innerHTML = `Welcome back, ${escapeHtml(state.user?.name || 'Ganesh Lad')}! 👋`;
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  function logout() {
    localStorage.removeItem(KEY);
    window.location.href = '../Login/login.html';
  }

  function wireLogout() {
    document.querySelectorAll('.logout, a[href="#logout"]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) logout();
      });
    });
  }



  document.addEventListener('DOMContentLoaded', () => {
    setUserText(); wireLogout();
  });
})();

// Dashboard impact metrics (frontend-only demo data)
window.addEventListener('DOMContentLoaded', () => {
  const state = window.DabbaCartel?.getState?.() || {};
  const defaults = {
    foodRescued: '1,250 kg',
    mealsRedistributed: '3,420',
    donors: '480',
    organizations: '120',
    donations: '620',
    wasteReduced: '1,250 kg',
    beneficiaries: '8,900'
  };
  const impact = Object.assign({}, defaults, state.impact || {});
  document.querySelectorAll('[data-impact]').forEach(el => {
    const key = el.dataset.impact;
    if (impact[key] !== undefined) el.textContent = impact[key];
  });
});
