function toggleTheme() {
  document.body.classList.toggle('light-theme');
  let isLightTheme = document.body.classList.contains('light-theme');
  localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
  document.querySelector("#theme-toggle-icon").src = isLightTheme ? "public/moon.svg" : "public/sun.svg";
  
  document.querySelector("header").classList.toggle("bg-[#ffffff]", isLightTheme);
  document.querySelector("header").classList.toggle("bg-[#0a0a0a]", !isLightTheme);
}