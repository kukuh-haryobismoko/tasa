const Confetti = (function() {
    const colors = ["#FFC107", "#FF9800", "#FF5722", "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B"];
    let particles = [];
    
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 10 + 5,
            speed: Math.random() * 3 + 2,
            drift: Math.random() * 2 - 1
        };
    }
    
    function updateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.y += p.speed;
            p.x += p.drift;
            
            if (p.y > canvas.height) {
                particles.splice(i, 1);
            }
        }
        
        while (particles.length < 300) {
            particles.push(createParticle());
        }
    }
    
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        }
    }
    
    function loop() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(loop);
    }
    
    function start() {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        loop();
    }
    
    return {
        start: start
    };
})();

Confetti.start();
