document.addEventListener('DOMContentLoaded', function () {
    const newYearDate = new Date('January 1, 2024 00:00:00 GMT+0530');

    function updateCountdown() {
        // Fetch the current time in Asia/Kolkata time zone
        fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
            .then(response => response.json())
            .then(data => {
                const currentDateTime = new Date(data.utc_datetime).getTime();
                const difference = newYearDate - currentDateTime;

                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                document.getElementById('days').innerHTML = days + 'd';
                document.getElementById('hours').innerHTML = hours + 'h';
                document.getElementById('minutes').innerHTML = minutes + 'm';
                document.getElementById('seconds').innerHTML = seconds + 's';
            })
            .catch(error => {
                console.error('Error fetching time:', error);
            });
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Call it once to avoid initial delay
});
