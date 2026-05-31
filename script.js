// Create floating stars and bubbles on page load
window.addEventListener('DOMContentLoaded', () => {
    createStars();
    createBubbles();
});

// Create random stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create floating bubbles
function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 50 + 20;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = (Math.random() * 8 + 8) + 's';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        bubblesContainer.appendChild(bubble);
    }
}

// Motivational Speeches
const speeches = {
    motivational: "Hey beautiful! 💖 You've come so far, and I'm so proud of you! This month is going to be your month. Believe in yourself because I believe in you. You are stronger than your doubts, smarter than your fears, and more capable than you know. Take care of yourself, stay positive, and remember—you've already overcome so much. This is YOUR time to shine! 🌟 Go out there and show the world what you're made of!",
    
    examTips: "Here are your winning exam strategies: 📚\n\n1. Start your day with a positive mindset - YOU CAN DO THIS!\n2. Take deep breaths when stressed - calm mind, clear thoughts\n3. Read each question carefully twice before answering\n4. Manage your time - don't spend too long on one question\n5. Skip difficult questions and come back to them\n6. Review your answers before submitting\n7. Remember: You've studied hard, trust yourself! 💪\n\nGo ace that exam! You're ready! 🎓",
    
    wisdomQuote: "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" - Winston Churchill\n\nYour journey through these exams is a testament to your dedication and perseverance. Every challenge you face is making you stronger. Remember, this is not the end—it's just the beginning of your success story. Embrace the struggle, celebrate your efforts, and know that you are destined for greatness! ✨"
};

// Display speech
function displaySpeech(text) {
    const speechDisplay = document.getElementById('speech-display');
    const speechText = document.getElementById('speech-text');
    
    speechText.textContent = text;
    speechDisplay.classList.remove('hidden');
    
    // Scroll to speech display
    setTimeout(() => {
        speechDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Button click handlers
function playMotivationalSpeech() {
    displaySpeech(speeches.motivational);
    triggerConfetti();
}

function playExamTips() {
    displaySpeech(speeches.examTips);
    triggerConfetti();
}

function playWisdomQuote() {
    displaySpeech(speeches.wisdomQuote);
    triggerConfetti();
}

// Confetti effect
function triggerConfetti() {
    const colors = ['#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#fa709a', '#fee140'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '1000';
        confetti.style.pointerEvents = 'none';
        confetti.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
        
        document.body.appendChild(confetti);
        
        animateConfetti(confetti);
    }
}

function animateConfetti(element) {
    let x = parseFloat(element.style.left);
    let y = 0;
    let vx = (Math.random() - 0.5) * 8;
    let vy = Math.random() * 5 + 3;
    let rotation = Math.random() * 360;
    let rotationSpeed = Math.random() * 10 - 5;
    let duration = 3000;
    let startTime = Date.now();
    
    function animate() {
        let elapsed = Date.now() - startTime;
        let progress = elapsed / duration;
        
        if (progress > 1) {
            element.remove();
            return;
        }
        
        y += vy;
        vy += 0.15; // gravity
        x += vx * (1 - progress * 0.5);
        rotation += rotationSpeed;
        
        element.style.left = x + '%';
        element.style.top = y + 'px';
        element.style.transform = `rotate(${rotation}deg)`;
        element.style.opacity = 1 - progress;
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Fireworks effect
function triggerFireworks() {
    const container = document.getElementById('fireworks-container');
    const container_rect = container.getBoundingClientRect();
    
    // Create multiple fireworks bursts
    for (let burst = 0; burst < 5; burst++) {
        setTimeout(() => {
            const x = Math.random() * (window.innerWidth - 200) + 100;
            const y = Math.random() * (window.innerHeight * 0.6) + 100;
            
            createFireworkBurst(x, y);
        }, burst * 200);
    }
    
    // Sound effect (visual feedback)
    showCelebrationMessage();
}

function createFireworkBurst(x, y) {
    const container = document.getElementById('fireworks-container');
    const colors = ['#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#fa709a', '#fee140', '#ffffff'];
    const particleCount = 60;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${particle.style.backgroundColor}`;
        
        container.appendChild(particle);
        
        animateParticle(particle, x, y);
    }
}

function animateParticle(particle, startX, startY) {
    const velocity = Math.random() * 8 + 4;
    const angle = (Math.PI * 2 * Math.random());
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    let x = startX;
    let y = startY;
    let opacity = 1;
    const duration = 1500;
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress > 1) {
            particle.remove();
            return;
        }
        
        x += vx * (1 - progress * 0.5);
        y += vy * (1 - progress * 0.5);
        y += 2 * progress; // gravity effect
        opacity = 1 - progress;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.opacity = opacity;
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function showCelebrationMessage() {
    const celebrationMessages = [
        "🎆 You are AMAZING! 🎆",
        "🌟 Keep Shining! 🌟",
        "💖 You've Got This! 💖",
        "🎉 Go Ace Those Exams! 🎉",
        "✨ Believe in Yourself! ✨",
        "🚀 Sky's Not the Limit! 🚀"
    ];
    
    const message = celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)];
    
    const messageEl = document.createElement('div');
    messageEl.style.position = 'fixed';
    messageEl.style.top = '50%';
    messageEl.style.left = '50%';
    messageEl.style.transform = 'translate(-50%, -50%)';
    messageEl.style.fontSize = '2.5rem';
    messageEl.style.fontWeight = 'bold';
    messageEl.style.color = '#fff';
    messageEl.style.textShadow = '0 0 20px rgba(0,0,0,0.5)';
    messageEl.style.zIndex = '2000';
    messageEl.style.pointerEvents = 'none';
    messageEl.style.animation = 'celebrationPop 2s ease-out forwards';
    messageEl.textContent = message;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => messageEl.remove(), 2000);
}

// Add celebration animation
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrationPop {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -150%) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add heart rain effect on page load (optional continuous background effect)
function createHeartRain() {
    const hearts = ['💕', '💖', '✨', '🌸', '🦋', '🌷'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-30px';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.opacity = '0.7';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '0';
        heart.style.animation = `fall ${Math.random() * 5 + 8}s linear forwards`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 8000);
    }, 3000);
}

// Uncomment below if you want continuous heart rain
// createHeartRain();

// Add keyboard shortcut for fireworks (press Space)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        triggerFireworks();
    }
});

// Add fall animation for hearts
const fallStyle = document.createElement('style');
fallStyle.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(fallStyle);
