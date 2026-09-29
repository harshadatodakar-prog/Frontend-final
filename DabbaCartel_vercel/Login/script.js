document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');
  if (signupForm) signupForm.addEventListener('submit', handleSignup);
  if (loginForm) loginForm.addEventListener('submit', handleLogin);
});

function getState() {
  try { return JSON.parse(localStorage.getItem('dabbacartel_state')) || {}; } catch (_) { return {}; }
}
function saveState(state) { localStorage.setItem('dabbacartel_state', JSON.stringify(state)); }
function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function togglePassword() {
  const password = document.getElementById('password');
  if (password) password.type = password.type === 'password' ? 'text' : 'password';
}
window.togglePassword = togglePassword;

function handleSignup(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const username = form.elements.username.value.trim();
  const phone = form.elements.phone.value.trim();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value;
  if (username.length < 3) return alert('Username must be at least 3 characters.');
  if (!/^\d{10,}$/.test(phone)) return alert('Enter a valid phone number (at least 10 digits).');
  if (!validateEmail(email)) return alert('Enter a valid email address.');
  if (password.length < 6) return alert('Password must be at least 6 characters.');
  const state = getState();
  state.user = { name: username, email, phone, location: 'Panvel, Maharashtra', role: 'Donor', about: 'Food lover and believer in sharing is caring' };
  state.demoPassword = password;
  state.listings = state.listings || [];
  state.messages = state.messages || [];
  saveState(state);
  alert('Account created successfully!');
  window.location.href = '../Dashboard/dashboard.html';
}

function handleLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value;
  if (!validateEmail(email)) return alert('Enter a valid email address.');
  if (!password) return alert('Enter your password.');
  const state = getState();
  state.user = state.user || { name: 'Ganesh Lad', email, phone: '9876543210', location: 'Panvel, Maharashtra', role: 'Donor', about: 'Food lover and believer in sharing is caring' };
  state.user.email = email;
  state.demoPassword = password;
  saveState(state);
  window.location.href = '../Dashboard/dashboard.html';
}
