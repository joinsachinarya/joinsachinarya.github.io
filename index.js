const setTheme = (theme) => {
  const isLightTheme = theme === 'light';
  const iconSrc = isLightTheme ? "public/moon.svg" : "public/sun.svg";
  const headerClass = isLightTheme ? "bg-[#ffffff]" : "bg-[#0a0a0a]";
  const oppositeHeaderClass = isLightTheme ? "bg-[#0a0a0a]" : "bg-[#ffffff]";

  document.body.classList.toggle('light-theme', isLightTheme);
  document.querySelector("#theme-toggle-icon").src = iconSrc;
  const header = document.querySelector("header");
  header.classList.add(headerClass);
  header.classList.remove(oppositeHeaderClass);

  localStorage.setItem('theme', theme);
};

const toggleTheme = () => {
  const currentTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
  setTheme(currentTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
});
