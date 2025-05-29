// Typewriter effect for cover title
document.addEventListener('DOMContentLoaded', function () {
    const titleEl = document.getElementById('coverTitle');
    const text = '<i class="bi bi-book-half"></i> AA Yardmen Websites';
    let i = 0;
    function typeWriter() {
        if (i <= text.length) {
            titleEl.innerHTML = text.slice(0, i);
            i++;
            setTimeout(typeWriter, 55);
        } else {
            titleEl.innerHTML = text;
            titleEl.classList.remove('typewriter');
        }
    }
    typeWriter();

    // Pixel rain effect
    const pixelContainer = document.querySelector('.cover-pixels');
    const pixelColors = ['#ff4e50', '#f9d423', '#f7971e', '#36d1c4', '#fffbe7'];
    for (let j = 0; j < 32; j++) {
        const px = document.createElement('div');
        px.className = 'cover-pixel';
        px.style.left = Math.random() * 98 + '%';
        px.style.background = pixelColors[Math.floor(Math.random() * pixelColors.length)];
        px.style.animationDelay = (Math.random() * 1.2) + 's';
        px.style.opacity = 0.5 + Math.random() * 0.5;
        px.style.width = px.style.height = (8 + Math.random() * 12) + 'px';
        pixelContainer.appendChild(px);
    }
});
