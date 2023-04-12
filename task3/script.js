const btn = document.querySelector('.j-btn-test');
const size = document.querySelector('#size');
const size_2 = document.querySelector('#size-2');
const width = document.querySelector('#width');
const height = document.querySelector('#height');
const width_2 = document.querySelector('#width-2');
const height_2 = document.querySelector('#height-2');

const geolocation = document.querySelector('#geolocation');
const status = document.querySelector('#status');
// Функция, выводящая текст об ошибке
const error = () => {
  status.textContent = 'Информация о местоположении недоступна';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
}

btn.addEventListener('click', () => {

    //Определяем размер экрана
    size.textContent = 'Размер экрана без учёта полосы прокрутки';
    width.textContent = 'Ширина - ' + document.documentElement.clientWidth + 'px';
    height.textContent = 'Высота - ' + document.documentElement.clientHeight  + 'px';

    size_2.textContent = 'Размер экрана с учётом полосы прокрутки';
    width_2.textContent = 'Ширина - ' + window.innerWidth + 'px';
    height_2.textContent = 'Высота - ' + window.innerHeight  + 'px';

    geolocation.textContent = 'Геолокация';
    // Запрос на данные о геолокации
    if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      console.log(coords.latitude, coords.longitude);
    });
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

});