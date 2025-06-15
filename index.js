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







document.addEventListener('DOMContentLoaded', () => {
  const tracks = [
    'https://archive.org/download/FurEliseLudwigVanBeethoven/fur%20elise%20%28Ludwig%20van%20Beethoven%29.mp3',
    'https://archive.org/download/MozartEineKleineNachtmusik_102/MozartALittleNightMusic.mp3',
    'https://archive.org/download/mozart-kv-525-string-serenade-no.-13-eine-kleine-nachtmusik/Mozart%20-%20KV%20525%20-%20String%20Serenade%20No.%2013%20Eine%20Kleine%20Nachtmusik.mp3',
    'https://archive.org/download/bach-j.s.-o-brandenburg-concertos-1-3-collegium-aureum-dvg/%2801-04%29%20Bach%2C%20J.S.%20-%20Brandenburg%20Concerto%20no.%201%20in%20F%20major%2C%20BWV%201046.mp3'
  ];

  const eq = document.getElementById('equalizer');
  const audio = new Audio();
  let isPlaying = false;

  eq.querySelectorAll('span').forEach(el => {
    el.style.setProperty('--d', (Math.random() * 0.8 + 1.5).toFixed(2) + 's');
    el.style.setProperty('--l', (Math.random() * 0.8).toFixed(2) + 's');
  });

  function playRandomTrack() {
    const idx = Math.floor(Math.random() * tracks.length);
    audio.src = tracks[idx];
    audio.play();
  }

  eq.addEventListener('click', () => {
    if (!isPlaying) {
      playRandomTrack();
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play', () => {
    isPlaying = true;
    eq.classList.add('playing');
  });

  audio.addEventListener('pause', () => {
    isPlaying = false;
    eq.classList.remove('playing');
  });

  audio.addEventListener('ended', () => {
    if (isPlaying) playRandomTrack();
  });
});

function injectHeaderFooter() {
  const headerHTML = `
    <header class="flex justify-between items-center sticky top-0 py-12 bg-[#0a0a0a] z-[1]">
      <h1 class="text-lg font-bold">
        <a href="/" class="hover:text-gray-700">Sachin Arya</a>
      </h1>
      <nav class="space-x-6 text-xs">
        <label for="theme-toggle" class="theme-toggle-label cursor-pointer" onclick="toggleTheme()">
          <img src="public/sun.svg" alt="Toggle theme" id="theme-toggle-icon" class="w-4 h-4 hover:opacity-75">
        </label>
      </nav>
    </header>
  `;
  const footerHTML = `
    <footer class="mt-12 text-center">
      <div class="flex justify-center space-x-4 tracking-tight">
        <a href="https://x.com/joinsachinarya" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline text-xs">twitter / x</a>
        <a href="mailto:joinsachinarya@gmail.com" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline text-xs">email</a>
        <a href="https://github.com/joinsachinarya" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline text-xs">github</a>
        <a href="https://www.linkedin.com/in/joinsachinarya" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline text-xs">linkedin</a>
        <a href="https://www.youtube.com/@joinsachinarya" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline text-xs">youtube</a>
        <a href="https://www.instagram.com/joinsachinarya" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline text-xs">more</a>
      </div>
    </footer>
  `;
  const container = document.querySelector('.max-w-xl');
  if (container) {
    const oldHeader = container.querySelector('header');
    if (oldHeader) oldHeader.outerHTML = headerHTML;
    const oldFooter = container.querySelector('footer');
    if (oldFooter) oldFooter.outerHTML = footerHTML;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectHeaderFooter);
} else {
  injectHeaderFooter();
}
