const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const trackEl = document.getElementById('track');
const artistEl = document.getElementById('artist');

let currentTrack = null;

/* NAVIGATION */
function go(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* RECOMMENDATIONS */
const recommendations = [
  { title: 'Falling in Love (Remix)', artist: 'amxre', src: 'audio/sample.mp3' },
  { title: 'Night Drive', artist: 'Waveform', src: 'audio/sample.mp3' },
  { title: 'Yellow Pulse', artist: 'Glass Beats', src: 'audio/sample.mp3' }
];

const container = document.getElementById('recommendations');
recommendations.forEach(track => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerText = track.title;
  div.onclick = () => play(track);
  container.appendChild(div);
});

/* PLAYER */
function play(track) {
  currentTrack = track;
  audio.src = track.src;
  trackEl.innerText = track.title;
  artistEl.innerText = track.artist;
  audio.play();
  playBtn.innerText = '⏸';
}

playBtn.onclick = () => {
  if (!currentTrack) return;
  if (audio.paused) {
    audio.play();
    playBtn.innerText = '⏸';
  } else {
    audio.pause();
    playBtn.innerText = '▶';
  }
};
