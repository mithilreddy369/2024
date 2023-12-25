document.addEventListener('DOMContentLoaded', function () {
    // Set the new year date in 'Asia/Kolkata' time zone
    const newYearDate = new Date('January 1, 2024 00:00:00 GMT+0530');

    function updateCountdown() {
        // Use the 'Asia/Kolkata' time zone for the current date
        const currentDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        const currentDateTime = new Date(currentDate).getTime();

        const difference = newYearDate - currentDateTime;

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
