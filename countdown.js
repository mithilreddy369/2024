document.addEventListener('DOMContentLoaded', function () {
    const newYearDate = new Date('January 1, 2024 00:00:00 GMT+0530').getTime();

    function updateCountdown() {
        const currentDate = new Date().getTime() + (5.5 * 60 * 60 * 1000); // Add 5.5 hours for IST
        const difference = newYearDate - currentDate;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days + 'd';
        document.getElementById('hours').innerHTML = hours + 'h';
        document.getElementById('minutes').innerHTML = minutes + 'm';
        document.getElementById('seconds').innerHTML = seconds + 's';
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Call it once to avoid initial delay
});
