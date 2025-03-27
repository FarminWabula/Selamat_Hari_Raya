// Daftar musik
const playlist = [
    "music.mp3",
    "music1.mp3",
    "music2.mp3",
    "music3.mp3"
];

let currentTrackIndex = 0;
// script.js yang dimodifikasi
const audio = document.getElementById('backgroundMusic');
let isMusicEnabled = false;

function enableMusic() {
    isMusicEnabled = true;
    localStorage.setItem('musicEnabled', 'true');
    playMusic();
}

// Cek preferensi sebelumnya
if (localStorage.getItem('musicEnabled') === 'true') {
    enableMusic();
}

// Event listener untuk tombol besar
document.getElementById('enableMusic').addEventListener('click', enableMusic);

// Fungsi playMusic() tetap sama, tapi dengan error handling
function playMusic() {
    if (!isMusicEnabled) return;
    
    audio.src = playlist[currentTrackIndex];
    audio.play().catch(e => {
        console.warn("Autoplay prevented, waiting for interaction");
    });
}

// Fungsi untuk memutar musik berikutnya
function nextMusic() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    playMusic();
}

// Fungsi untuk menghentikan/memutar musik
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// Event listener untuk tombol kontrol musik
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', nextMusic);

// Otomatis memutar musik berikutnya setelah selesai
audio.addEventListener('ended', nextMusic);

// Mulai memutar musik pertama saat halaman dimuat
playMusic();
