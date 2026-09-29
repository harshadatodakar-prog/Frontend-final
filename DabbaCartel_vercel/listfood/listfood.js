document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[action="#list-food"]');
  const imageInput = document.getElementById('food_image');
  const expiry = document.getElementById('expiry');
  if (expiry) {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    expiry.min = now.toISOString().slice(0,16);
    if (!expiry.value) {
      const oneHour = new Date(now.getTime() + 60*60*1000);
      expiry.value = oneHour.toISOString().slice(0,16);
    }
  }
  if (imageInput) imageInput.addEventListener('change', previewImage);
  if (form) form.addEventListener('submit', submitListing);
});

function previewImage(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) { alert('Please upload a valid image file.'); event.target.value=''; return; }
  if (file.size > 5*1024*1024) { alert('Image size must not exceed 5MB.'); event.target.value=''; return; }
}

function submitListing(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const foodName = form.elements.food_name.value.trim();
  const category = form.elements.category.value;
  const quantity = form.elements.quantity.value.trim();
  const expiry = form.elements.expiry.value;
  const address = form.elements.address.value.trim();
  const description = form.elements.description.value.trim();
  if (foodName.length < 3) return alert('Food name must be at least 3 characters long.');
  if (!category) return alert('Please select a food category.');
  if (!/^\d+(\.\d+)?/.test(quantity)) return alert('Please enter a valid quantity.');
  if (!expiry || new Date(expiry) <= new Date()) return alert('Expiry date and time must be in the future.');
  if (!address) return alert('Please enter a pickup address.');
  let state; try { state = JSON.parse(localStorage.getItem('dabbacartel_state')) || {}; } catch (_) { state = {}; }
  state.listings = state.listings || [];
  state.listings.unshift({ id: Date.now(), foodName, category, quantity, expiry, address, description, status: 'active' });
  localStorage.setItem('dabbacartel_state', JSON.stringify(state));
  alert('Food listed successfully!');
  window.location.href = '../Dashboard/dashboard.html';
}
window.previewImage = previewImage;
