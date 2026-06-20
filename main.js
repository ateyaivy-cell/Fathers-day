const giftContainer = document.getElementById('giftBox');
const messageContent = document.getElementById('message-content');

// Vibrant neon/festive colors for the fireworks and balloons
const partyColors = [ 'red', 'blue', 'green', 'purple', 'orange'];

giftContainer.addEventListener('click', openGift);

function openGift() {
    // Animate and hide the gift container
    giftContainer.classList.add('open');
    
    // Pop the text into view
    setTimeout(() => {
        messageContent.classList.add('show');
    }, 250);

    // Trigger the visual celebration
    triggerFireworks();
    launchBalloons();
}

// --- Sparkly Firework Burst ---
function triggerFireworks() {
    const particleCount = 80;
    const body = document.body;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.backgroundColor = partyColors[Math.floor(Math.random() * partyColors.length)];
        
        // Start from the screen's dead center
        particle.style.left = '50%';
        particle.style.top = '50%';

        // Shoot out radially in all directions
        const angle = Math.random() * Math.PI * 2;
        const force = 60 + Math.random() * 180;
        const dx = Math.cos(angle) * force + 'px';
        const dy = Math.sin(angle) * force + 'px';
        
        particle.style.setProperty('--dx', dx);
        particle.style.setProperty('--dy', dy);

        body.appendChild(particle);

        // Clean up elements from DOM
        setTimeout(() => { particle.remove(); }, 1200);
    }
}

// --- Continuous Balloon Floating stream ---
function launchBalloons() {
    // Spawn initial burst of balloons immediately
    for (let i = 0; i < 12; i++) {
        setTimeout(spawnBalloon, i * 180);
    }
    // Keep producing balloons over time
    setInterval(spawnBalloon, 1200);
}

function spawnBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    balloon.style.backgroundColor = partyColors[Math.floor(Math.random() * partyColors.length)];
    balloon.style.left = (Math.random() * 85 + 5) + 'vw'; // Random horizontal spawn spread
    balloon.style.animationDuration = (4 + Math.random() * 3) + 's'; // Varied floating speeds
    
    document.body.appendChild(balloon);

    // Clean up off-screen elements
    setTimeout(() => { balloon.remove(); }, 7000);
}