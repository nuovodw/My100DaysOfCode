const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time'); // .time class inside img
const icon = document.querySelector('.icon img'); //img inside the icon class

// update city info
// async because it will use async functions from forecast.js
const newCity = async (city) => {
	const cityInfo = await getCity(city);
	const weather = await getWeather(cityInfo.Key);

	/*
	return {
		Clarinet: cityInfo, // object name can be anything (change to 'City Info'); value is taken from const cityInfo
		Weather: weather,
	};
*/
	return { cityInfo, weather }; //shorthand for above object
	//When property name and value are identical, use the name once and it'll be assumed that property/value names are the same.
	//You can put them next to each other.
};

const updateUI = (anyData) => {
	// (Pre-destructuring)
	// const cityInfo = anyData.cityInfo;
	// const weather = anyData.weather;
	console.log(anyData);
	// Destructure object properties
	const { cityInfo, weather } = anyData;
	// from the "anyData" property, get the cityInfo and weather properties and store them in constants with SAME NAMES.

	//update details template
	details.innerHTML = `
	<h5 class="my-3">${cityInfo.EnglishName}</h5>
					<div class="my-3">${weather.WeatherText}</div>
					<div class="display-4 my-4">
						<span>${weather.Temperature.Imperial.Value} </span>
						<span>&deg;F</span>
					</div>
	`;

	// update the night/day & icon images
	const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
	icon.setAttribute('src', iconSrc);

	let timeSrc;
	if (weather.IsDayTime) {
		timeSrc = 'img/day.svg';
	} else {
		timeSrc = 'img/night.svg';
	}
	time.setAttribute('src', timeSrc);

	// remove d-none class if present
	if (card.classList.contains('d-none')) {
		card.classList.remove('d-none');
	}
};

cityForm.addEventListener('submit', (e) => {
	// prevent default action
	e.preventDefault();

	// Get city name from the user
	//.city.value 👉 came from index-input-name-"city"
	//.trim() removes white space from both ends of string
	const city = cityForm.city.value.trim();
	cityForm.reset(); //👉 Clears the form after value is entered

	// update the UI with new city
	newCity(city)
		.then((anyData) => updateUI(anyData))
		.catch((err) => console.log(err));

	// newCity(city).then((data) => console.log(data));
});
