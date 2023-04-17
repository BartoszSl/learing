const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=81deced5c860ace44dd7cdb50bfdf6f0';
const API_LANGUAGE = '&lang=pl';
const API_UNITS = '&units=metric';

const getWeather = () => {
	const city = input.value || 'Kielce';
	const URL = API_LINK + city + API_KEY + API_LANGUAGE + API_UNITS;
	input.value = '';
	warning.textContent = ''

	axios.get(URL).then((res) => {
		const temp = res.data.main.temp;
		const hum = res.data.main.humidity;
		const status = Object.assign({}, ...res.data.weather);

		weather.textContent = status.main;
		cityName.textContent = res.data.name;
		temperature.textContent = Math.floor(temp) + '°C';
		humidity.textContent = hum + '%';

		if (status.id > 800 && status.id < 900) {
			photo.setAttribute('src', './img/cloud.png');
		} else if (status.id == 800) {
			photo.setAttribute('src', './img/sun.png');
		} else if (status.id <= 799 && status.id >= 700) {
			photo.setAttribute('src', './img/fog.png');
		} else if (status.id <= 699 && status.id >= 600) {
			photo.setAttribute('src', './img/ice.png');
		} else if (status.id <= 599 && status.id >= 500) {
			photo.setAttribute('src', './img/rain.png');
		} else if (status.id <= 399 && status.id >= 300) {
			photo.setAttribute('src', './img/drizzle.png');
		} else if (status.id <= 299 && status.id >= 200) {
			photo.setAttribute('src', './img/thunderstorm.png');
		} else {
			photo.setAttribute('src', './img/every.png');
		}
	}).catch(() => warning.textContent = 'Wpisz poprawną nazwę miasta!')
};

const enterCheck = (e) => {
	if(e.key === 'Enter') {
		getWeather()
	}
}

getWeather();
button.addEventListener('click', getWeather);
input.addEventListener('keyup', enterCheck)