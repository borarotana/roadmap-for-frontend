const toggleBtn = document.getElementById('darkToggle');
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '☀️ Light Mode';
}
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  // Optional: Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
