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