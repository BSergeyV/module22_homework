const btn = document.querySelector('.j-btn-test');
const geolocation = document.querySelector('#location');
const time = document.querySelector('#time');

btn.addEventListener('click', () => {


    // Запрос на данные о геолокации
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            const options = {
                method: 'GET',
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            }

            // запрос за данными по координатам
            fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`, options)
            .then(response => response.json())
            .then(json => geolocation.textContent = 'Геолокация - ' + json.timezone)
            fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`, options)
            .then(response => response.json())
            .then(json => time.textContent = 'Местное время - ' + json.date_time_txt)
        });
    }
    
});