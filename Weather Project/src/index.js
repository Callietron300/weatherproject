//Update Date
let dateText = document.querySelector("#date");
let timeText = document.querySelector("#time");

let now = new Date();
let min = now.getMinutes();
let hour = now.getHours(); 
let dayNum = now.getDate();

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
let day = days[now.getDay()];

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = months[now.getMonth()]; 

let year = now.getFullYear(); 

dateText.innerHTML = `${day} ${dayNum} ${month} ${year}`;
timeText.innerHTML = `${hour}:${min}`;

// Search bar
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let cityText = document.querySelector("#cityText");

  cityText.innerHTML = searchInput.value;

};

let searchCity = document.querySelector("#searchCity");

searchCity.addEventListener("submit", search);

//Temp Update
let temp = document.querySelector("#temp");
let currentTemp = 20

function updateCelcius() {
  temp.innerHTML = currentTemp;
  celciusBtn.classList.add("bold");
  fahrenheitBtn.classList.remove("bold");
}

function updateFahrenheit() {
  temp.innerHTML = (currentTemp * 9) / 5 + 32;
  fahrenheitBtn.classList.add("bold");
  celciusBtn.classList.remove("bold");
}

let celciusBtn = document.querySelector("#celcius")
celciusBtn.addEventListener("click", updateCelcius);

let fahrenheitBtn = document.querySelector("#fahrenheit")
fahrenheitBtn.addEventListener("click", updateFahrenheit);

