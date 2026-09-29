document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const cards = () => document.querySelectorAll('.listing-card');
  tabs.forEach(tab => tab.addEventListener('click', function () {
    tabs.forEach(t => t.classList.remove('active')); this.classList.add('active');
    cards().forEach(card => card.style.display = card.dataset.status === this.dataset.tab ? '' : 'none');
  }));
  document.addEventListener('click', e => {
    const view = e.target.closest('.view-btn'); if (view) alert('Viewing listing: ' + view.closest('.listing-card').querySelector('h2').textContent);
    const more = e.target.closest('.more-btn'); if (more && confirm('Remove this listing?')) { more.closest('.listing-card').remove(); }
  });
});
