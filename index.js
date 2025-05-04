function toggleTheme() {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  document.querySelector("#theme-toggle-icon").src = document.body.classList.contains("light-theme") ? "public/moon.svg" : "public/sun.svg";
}