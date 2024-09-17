// Countdown timer
const countdownDate = new Date("Sep 22, 2024 09:00:00").getTime();
const countdownElement = document.getElementById('countdown-timer');

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "It's time for our ride!";
    }
}, 1000);
