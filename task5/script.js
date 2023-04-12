const input = document.querySelector('#send');
const send = document.querySelector('.js-btn-send');
const geo = document.querySelector('.js-btn-geo');
const content = document.querySelector('#receive');
const enteredText = document.querySelector("#enteredText");


send.addEventListener('click', () => {
    content.textContent = input.value;
});

// input.oninput = function() {
//   content.textContent = input.value;
// };

enteredText.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value);
  event.target.reset();
})

geo.addEventListener('click', () => {
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
            .then(json => content.textContent = 'Геолокация - ' + json.timezone)
        });
    }
    
});
