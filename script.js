// Daftar musik
const playlist = [
    "music1.mp3",
    "music2.mp3",
    "music3.mp3"
];

let currentTrackIndex = 0;
const audio = document.getElementById('backgroundMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
const nextBtn = document.getElementById('nextBtn');

// Fungsi untuk memutar musik
// Fungsi untuk memutar musik setelah interaksi pengguna
function playMusic() {
    audio.src = playlist[currentTrackIndex];
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
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
