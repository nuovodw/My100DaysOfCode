const key = 'p6WqcUxVySBDjHDgfTYjzEwixHbo0GAx'; // from AccuWeather API

// Get Weather Info
const getWeather = async (locationKey) => {
	const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query = `${locationKey}?apikey=${key}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};

/////////////////////
//Get City Info
const getCity = async (city) => {
	// Base URL of the API Endpoint we want to make a request
	const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

	//Add query parameters to the end of a url by using ? at the end
	//In code --> ? denotes beginning of the query parameter
	const query = `?apikey=${key}&q=${city}`;

	//Combine Base and Query to fetch the resource
	const response = await fetch(base + query); // fetch() resolves promise
	const data = await response.json();

	return data[0]; //Sometimes there are multiple cities with same/similar names --> the first array returned is usually the closest (double check this every time)
};
