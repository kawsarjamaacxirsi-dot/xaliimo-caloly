const themeToggle = document.getElementById('themeToggle');
const currentDate = document.getElementById('currentDate');

if (currentDate) {
  currentDate.textContent = new Date().toLocaleDateString('en', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}
