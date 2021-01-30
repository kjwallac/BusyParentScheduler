const api = '26e36a8540be0a27401889bb4d6409b0';

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');

window.addEventListener('load', () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const { temp, feels_like } = data.main;
                    const place = data.name;
                    const { description, icon } = data.weather[0];

                    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                    const fahrenheit = (temp * 9) / 5 + 32;
                    iconImg.src = iconUrl;
                    loc.textContent = `${place}`;
                    desc.textContent = `${description}`;
                    tempF.textContent = `${fahrenheit.toFixed()} °F`;

                });
        });
    }
});