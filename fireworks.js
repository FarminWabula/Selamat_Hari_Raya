const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];
let particles = [];

class Firework {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.radius = 3;
        this.velocity = {
            x: (Math.random() - 0.5) * 2,
            y: Math.random() * -3 - 3
        };
        this.gravity = 0.02;
        this.opacity = 1;
    }

    update() {
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= 0.005;

        if (this.opacity <= 0) {
            this.explode();
            fireworks.splice(fireworks.indexOf(this), 1);
        }
    }

    explode() {
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle(this.x, this.y, this.color));
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.closePath();
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 2 + 1;
        this.velocity = {
            x: (Math.random() - 0.5) * 4,
            y: (Math.random() - 0.5) * 4
        };
        this.gravity = 0.05;
        this.opacity = 1;
        this.fade = Math.random() * 0.02 + 0.01;
    }

    update() {
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= this.fade;

        if (this.opacity <= 0) {
            particles.splice(particles.indexOf(this), 1);
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.closePath();
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((firework) => {
        firework.update();
        firework.draw();
    });

    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    if (Math.random() < 0.03) {
        fireworks.push(new Firework());
    }

    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function shareToWhatsApp() {
    const letterText = document.getElementById('letterText').innerText;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${letterText}\n\nBaca selengkapnya di: ${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareToSocialMedia() {
    const letterText = document.getElementById('letterText').innerText;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${letterText}\n\nBaca selengkapnya di: ${url}`);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

if (!friendList.includes(nameInput)) {
    friendList.push(nameInput);
    const listItem = document.createElement('li');
    listItem.textContent = nameInput;
    friendListElement.appendChild(listItem);
}

function generateLetter() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const letterText = document.getElementById('letterText');
    const letterContainer = document.getElementById('letterContainer');

    if (nameInput === "") {
        alert("Silakan masukkan nama teman Anda!");
        return;
    }
    
    // Daftar pantun
    const pantunList = [
        `Pergi ke warung beli ketan,<br>
        Pulangnya bawa sate padang.<br>
        Lebaran ini maaf ku ucapkan,<br>
        Tapi THR kapan cair di rekening abang?! 🤨`,

        `Jalan-jalan ke kota Blitar,<br>
        Jangan lupa beli buah mangga.<br>
        Selamat Hari Raya Idul Fitri,<br>
        Mohon maaf lahir dan batin ya! 😊`,

        `Naik kereta ke Surabaya,<br>
        Jangan lupa bawa payung.<br>
        Maafkan segala salah dan khilaf,<br>
        Semoga silaturahmi tetap terjaga. 🤝`,

        `Pergi ke pasar beli pepaya,<br>
        Jangan lupa beli jeruk bali.<br>
        Taqabbalallahu minna wa minkum,<br>
        Semoga kita selalu dalam lindungan-Nya. 🌟`,

        `Makan siang pakai sambal,<br>
        Jangan lupa minum es teh.<br>
        Mohon maaf lahir dan batin,<br>
        Semoga rezeki lancar dan berkah. 🍀`,

        `Ketupat sayur enak rasanya,<br>
        Dimakan hangat dengan kerupuk.<br>
        Katanya mau insaf tahun lalu,<br>
        Eh, tahun ini masih suka ngeprank grup! 😂`,
    ];

    // Pilih pantun secara acak
    const randomPantun = pantunList[Math.floor(Math.random() * pantunList.length)];

    const letter = `
        Kepada ${nameInput},<br><br>
        Dengan penuh kerendahan hati, saya mengucapkan:<br>
        <strong>Selamat Hari Raya Idul Fitri 1446 H</strong>.<br><br>
        Mohon maaf lahir dan batin atas segala kesalahan dan khilaf yang telah saya perbuat, baik yang disengaja maupun tidak disengaja. 🙏🏻🙏🏻🙏🏻<br><br>
        ${randomPantun}<br><br>
        Hormat saya,<br>
        Farmin Wabula/Fahmi 😜
    `;

    letterText.innerHTML = letter;
    letterContainer.style.display = "block";
}
