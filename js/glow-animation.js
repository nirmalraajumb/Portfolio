// Neon text glow animation
const logo = document.querySelector('.logo');
const glowColors = ['#00ffff', '#ff00ff', '#00ff00'];
let currentColorIndex = 0;

function updateGlow() {
    const color = glowColors[currentColorIndex];
    logo.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
    currentColorIndex = (currentColorIndex + 1) % glowColors.length;
}

// Smooth color transition every 3 seconds
setInterval(updateGlow, 3000);

// Add hover effect to navigation links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3), 0 0 30px rgba(0, 255, 255, 0.1)';
    });
});
