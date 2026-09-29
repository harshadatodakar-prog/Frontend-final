document.addEventListener('DOMContentLoaded', function () {
  let state; try { state = JSON.parse(localStorage.getItem('dabbacartel_state')) || {}; } catch (_) { state = {}; }
  state.user = Object.assign({name:'Ganesh Lad', email:'demo@dabbacartel.com', phone:'9876543210', location:'Panvel, Maharashtra', role:'Donor', about:'Food lover and believer in sharing is caring'}, state.user || {});
  const values = document.querySelectorAll('.profile-row .profile-value');
  const fields = ['name','email','phone','location','role','about'];
  fields.forEach((field, i) => { if (values[i]) values[i].textContent = state.user[field] || values[i].textContent; });
  const title = document.querySelector('.profile-title h2'); if (title) title.textContent = state.user.name;
  document.querySelectorAll('.edit-btn').forEach(button => button.addEventListener('click', function () {
    const field = this.dataset.field;
    const map = {'Full Name':'name','Email':'email','Location':'location','Who am I':'role'};
    const key = map[field]; if (!key) return;
    const newValue = prompt('Enter your new ' + field + ':', state.user[key] || '');
    if (newValue && newValue.trim()) {
      state.user[key] = newValue.trim();
      localStorage.setItem('dabbacartel_state', JSON.stringify(state));
      const value = this.closest('.profile-row').querySelector('.profile-value'); if (value) value.textContent = state.user[key];
      if (key === 'name' && title) title.textContent = state.user.name;
      alert(field + ' updated successfully!');
    }
  }));
  const phoneStatus = document.querySelector('.phone-status');
  if (phoneStatus) phoneStatus.addEventListener('click', () => alert('Your phone number is verified.'));
});
