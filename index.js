const applyLightTheme = () => {
  document.body.classList.add('light-theme');
  document.querySelector("#theme-toggle-icon").src = "public/moon.svg";
  document.querySelector("header").classList.add("bg-[#ffffff]");
  document.querySelector("header").classList.remove("bg-[#0a0a0a]");
}

const applyDarkTheme = () => {
  document.body.classList.remove('light-theme');
  document.querySelector("#theme-toggle-icon").src = "public/sun.svg";
  document.querySelector("header").classList.remove("bg-[#ffffff]");
  document.querySelector("header").classList.add("bg-[#0a0a0a]");
}


function toggleTheme() {
  let isLightTheme = document.body.classList.contains('light-theme');
  if (isLightTheme) {
    applyDarkTheme();
  } else {
    applyLightTheme();
  }
  localStorage.setItem('theme', isLightTheme ? 'dark' : 'light');
}


document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem('theme') === "light") {
    applyLightTheme();
  } else if (localStorage.getItem('theme') === "dark") {
    applyDarkTheme();
  }
})