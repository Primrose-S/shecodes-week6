function showWeather (response){
		let currentTemperatureElement = document.querySelector("#current-temp");
	    let temperature = Math.round(response.data.temperature.current);
	let searchInputElement = document.querySelector("#search-input");
		
		let cityInputElement = document.querySelector("#current-city");
	    cityInputElement.innerHTML = searchInputElement.value;
	    currentTemperatureElement.innerHTML = temperature; 
	   console.log(response.data.temperature.current);
	
}

function search (event){
	event.preventDefault();
	let searchInputElement = document.querySelector("#search-input");
	
	let city = searchInputElement.value;

	let apiKey = "b2a5adcct04b33178913oc335f405433";
	let apiUrl =  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;


    axios.get(apiUrl).then(showWeather);

}

function formatDate (date){
	let minutes =date.getMinutes();
	let hours = date.getHours();
	let day = date.getDay();
	let year = date.getFullYear();
	
	if (minutes < 10 ){
		minutes =`0 ${minutes}`
	}
	if (hours <10){
	hours = `0${hours}`
	}
	 
	 let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	 let formatedDay = days[day];
	 return `${formatedDay} ${hours}:${minutes} ${year}`;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
	
let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date;
currentDateElement.innerHTML = formatDate(currentDate) 



