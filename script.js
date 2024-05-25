document.getElementById('reveal-btn').addEventListener('click', function() {
    document.getElementById('special-message').classList.remove('hidden');
    document.getElementById('confetti-canvas').classList.remove('hidden');
    document.getElementById('birthday-song').play();
    Confetti.start();
});
