const giftContainer = document.getElementById('giftBox');
const messageContent = document.getElementById('message-content');

const partyColors = [ 'red', 'blue', 'green', 'purple', 'orange'];

giftContainer.addEventListener('touchstart', () => {
    openGift();
});

giftContainer.addEventListener('click', () => {
    openGift();
});

function openGift() {
    
    giftContainer.classList.add('open');
    

    setTimeout(() => {
        messageContent.classList.add('show');
    }, 250);

    triggerFireworks();
    launchBalloons();
}


function triggerFireworks() {
    const particleCount = 80;
    const body = document.body;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.backgroundColor = partyColors[Math.floor(Math.random() * partyColors.length)];
        
        
        particle.style.left = '50%';
        particle.style.top = '50%';

    
        const angle = Math.random() * Math.PI * 2;
        const force = 60 + Math.random() * 180;
        const dx = Math.cos(angle) * force + 'px';
        const dy = Math.sin(angle) * force + 'px';
        
        particle.style.setProperty('--dx', dx);
        particle.style.setProperty('--dy', dy);

        body.appendChild(particle);

        
        setTimeout(() => { particle.remove(); }, 1200);
    }
}

function launchBalloons(){
    for (let i = 0; i < 12; i++) {
        setTimeout(spawnBalloon, i * 180);
    }

    setInterval(spawnBalloon, 1200);
}

function spawnBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    balloon.style.backgroundColor = partyColors[Math.floor(Math.random() * partyColors.length)];
    balloon.style.left = (Math.random() * 85 + 5) + 'vw'; 
    balloon.style.animationDuration = (4 + Math.random() * 3) + 's'; 
    
    document.body.appendChild(balloon);


    setTimeout(() => { balloon.remove(); }, 7000);
}
