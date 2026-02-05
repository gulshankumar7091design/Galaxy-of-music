const tracks = [
  {
    id: 'g1',
    title: 'Radhe teri chano me',
    artist: 'Bhumika Sharma',
    src: "music/1.mp3",
    art: 'image/Radhe.jpeg'
  },
  {
    id: 'g2',
    title: 'Aaja Dil me a Larki Diwani',
    artist: 'Neelkamal singh',
    src: "music/2.mp3",
    art: 'image/download.jpeg'
  },
  {
    id: 'g3',
    title: 'mai phir bhi tum ko chahuga',
    artist: 'arjit singh',
    src: "music/3.mp3", 
    art: 'image/phir bhi.jpg'
  },
  {
    id: 'g4',
    title: 'Dulri mayariya aagaili',
    artist: 'pawan singh singh',
    src: "music/4.mp3",
    art: 'image/dulri pawan singh.avif'
  },
{
  id: 'g5',
  title: 'Ha ham bihari hai ji',
  artist:'Manoj tiwari',
  src: "music/5.mp3",
  art: 'image/ha ham bihari hai ji.jpg'
},
{
id: 'g6',
  title: 'Chand Chhupa Badal me',
  artist:'Alka Yagnik',
  src: "music.3/6.mp3",
  art: 'image/chand chhupa.webp'
},
{
  id: 'g7',
  title: 'Choti Si Pyari Si Nanhi',
  artist:'Alka Yagnik',
  src: "music.3/7.mp3",
  art: 'image/choti si.webp'
},
{
  id: 'g8',
  title: 'neend churai meri.mp3',
  artist:'Alka Yagnik, Kavita Krishnamurthy, Kumar Sanu, Udit Narayan',
  src: "music.3/8.mp3",
  art: 'image/neend churai.webp'
},
{
  id: 'g9',
  title: 'pehli pehli',
  artist:'Kumar Sanu and Alka Yagnik.',
  src: "music.3/9.mp3",
  art: 'image/pehli pehli.webp'
},
{
  id: 'g10',
  title: 'Tip Tip Barsa Pani.mp3',
  artist:'Alka Yagnik, Udit Narayan',
  src: "music.3/10.mp3",
  art: 'image/tip tip.jpg'
},
{
  id: 'g11',
  title: 'aapke pyaar mein hum',
  artist:'Alka Yagnik',
  src: "music.6/11.mp3",
  art: 'image.2/1.jpg'
},
{
  id: 'g12',
  title: 'Dil Laga Liya Maine Tumse Pyaar Karke',
  artist:'Alka Yagnik and Udit Narayan',
  src: "music.2/12.mp3",
  art: 'image.2/3.jpg'
},
{
  id: 'g13',
  title: 'Likhe Jo Khat Tujhe',
  artist:'Mohammed Raf',
  src: "music.5/13.mp3",
  art: 'image.2/4.jpg'
},
{
  id: 'g14',
  title: 'Main Agar Saamne',
  artist:'Abhijeet Bhattacharya and Alka Yagnik',
  src: "music.2/14.mp3",
  art: 'image.2/5.jpg'
},
{
  id: 'g15',
  title: 'Tera Mera Pyar Amar ',
  artist:'Lata Mangeshkar',
  src: "music.2/15.mp3",
  art: 'image.2/7.jpg'
},
{
    id: 'g16',
    title: 'Yeh Ratein Ye Mausam Dilli Ka',
    artist: 'Kishore Kumar and Asha Bhosle',
    src: "music.5/16.mp3",
    art: 'image.2/10.jpg'
  },
  {
  id: 'g17',
  title: 'Main Yahaan Hoon',
  artist:'Udit Narayan',
  src: "music.6/17.mp3",
  art: 'image.2/6.jpg'
},
{
  id: 'g18',
  title: 'Dil Deewana Na Jane',
  artist:'Anuradha Paudwal and Kumar Sanu',
  src: "music.4/18.mp3",
  art: 'image.2/2.jpg'
},
{
  id: 'g19',
  title: 'Tujhe Pyar Se Dekhne Wala Ek Dil Hai',
  artist:' Kumar Sanu and Alka Yagnik',
  src: "music.4/19.mp3",
  art: 'image.2/9.jpg'
},
{
  id: 'g20',
  title: 'Tujhe Na Dekhu Toh ',
  artist:'Alka Yagnik, Kumar Sanu',
  src: "music.7/20.mp3",
  art: 'image.2/8.jpg'
},
];

const tracksContainer = document.getElementById('tracks');
const audio = document.getElementById('audio');
const nowTitle = document.getElementById('now-title');
const nowArtist = document.getElementById('now-artist');
const nowArt = document.getElementById('now-art');
const queueEl = document.getElementById('queue');
const yearEl = document.getElementById('year');
const themeBtn = document.getElementById('themeBtn');
const search = document.getElementById('search');

let queue = [...tracks];
let currentIndex = 0;

// RENDER FEATURED TRACKS
function renderTracks(list) {
  tracksContainer.innerHTML = '';
  list.forEach(t => {
    const div = document.createElement('div');
    div.className = 'track-card';
    div.innerHTML = `
      <img src="${t.art}" alt="${t.title}">
      <h4>${t.title}</h4>
      <p>${t.artist}</p>
      <button data-id="${t.id}" class="play-btn">▶ Play</button>
    `;
    tracksContainer.appendChild(div);
  });
}

renderTracks(tracks);

// HANDLE PLAY BUTTONS
tracksContainer.addEventListener('click', e => {
  if (e.target.classList.contains('play-btn')) {
    const id = e.target.dataset.id;
    const track = tracks.find(t => t.id === id);
    playTrack(track);
  }
});

function playTrack(track) {
  audio.src = track.src;
  audio.play();
  nowTitle.textContent = track.title;
  nowArtist.textContent = track.artist;
  nowArt.src = track.art;
}

// QUEUE
function renderQueue() {
  queueEl.innerHTML = '';
  queue.forEach((t, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${i + 1}. ${t.title} — ${t.artist}`;
    queueEl.appendChild(li);
  });
}
renderQueue();

// BASIC PLAYER CONTROLS
document.getElementById('playPauseBtn').addEventListener('click', () => {
  if (audio.paused) audio.play();
  else audio.pause();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % queue.length;
  playTrack(queue[currentIndex]);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + queue.length) % queue.length;
  playTrack(queue[currentIndex]);
});

audio.addEventListener('ended', () => {
  currentIndex = (currentIndex + 1) % queue.length;
  playTrack(queue[currentIndex]);
});

// SEARCH
search.addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  const filtered = tracks.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.artist.toLowerCase().includes(q)
  );
  renderTracks(filtered);
});const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');

// Format time (mm:ss)
function formatTime(seconds) {
  let m = Math.floor(seconds / 60);
  let s = Math.floor(seconds % 60);
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  return `${m}:${s}`;
}

// Show total time when song loads
audio.addEventListener("loadedmetadata", () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

// Update current time while playing
audio.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(audio.currentTime);
});// When track starts playing (auto update button)
audio.addEventListener("play", () => {
  playPauseBtn.textContent = "⏸ Pause";
});

// When paused (auto update button)
audio.addEventListener("pause", () => {
  playPauseBtn.textContent = "▶ Play";
});

