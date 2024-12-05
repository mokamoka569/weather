let rowData = document.getElementById("rowData");
let searchInput = document.getElementById("searchInput");
let btnFind = document.getElementById("btnFind");
let alertError = document.getElementById("alertError");
let loadind = document.querySelector("#loadind");

btnFind.addEventListener("click", function () {
  getWeather(searchInput.value);
});

getWeather("cairo");
let allWeather;
async function getWeather(countery) {
  try {
    loadind.classList.remove("d-none");
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=797e37365ef741e89d5132005240212&q=${countery}&days=3`
    );
    let final = await response.json();
    allWeather = final;
    console.log(allWeather);

    display();

    alertError.classList.add("d-none");
  } catch (error) {
    alertError.classList.remove("d-none");
  } finally {
    loadind.classList.add("d-none");
  }
}

function display() {
  let date = formatDate("2024-12-05");
  console.log(allWeather.forecast.forecastday[0].date);

  let day1 = formatDateDayName(`${allWeather.forecast.forecastday[0].date}`);
  let day2 = formatDateDayName(`${allWeather.forecast.forecastday[1].date}`);

  let day3 = formatDateDayName(`${allWeather.forecast.forecastday[2].date}`);
  let cartona = "";
  cartona += `
   <div class="col-md-4">
                <div class="card">
                    <div class="header d-flex justify-content-between px-3">
                        <p>${day1}</p>
                        <p>${allWeather.forecast.forecastday[0].date}</p>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">${allWeather.location.name}</h5>
                     <div class="">
                      <h2>${allWeather.forecast.forecastday[0].day.maxtemp_c} c</h2>
                      <img src="${allWeather.forecast.forecastday[0].day.condition.icon}" class="w-25 px-3" alt="">
                     </div>
                    <p class="text-info">${allWeather.forecast.forecastday[0].day.condition.text}</p>
                    </div>
                   <div class="icon d-flex px-3 py-2">
                    <div class="mx-2">
                        <img src="imgs/icon-umberella.png" alt="">
                        <span>20%</span>
                    </div>
                    <div class="mx-2">
                        <img src="imgs/icon-wind.png" alt="">
                        <span>18km/h</span>
                    </div>
                    <div class="mx-2">
                        <img src="imgs/icon-compass.png" alt="">
                        <span>East</span>
                    </div>
                   </div>
                </div>
                </div>
 
                <div class="col-md-4">
                    <div class="card  text-center ">
                        <div class="header  d-flex justify-content-between px-3">
                            <p class="mx-auto">${day2}</p>
                        </div>
                        <div class="card-body special  ">
                          <img src="${allWeather.forecast.forecastday[1].day.condition.icon}" class="w-25 px-3" alt="">
                          <h2>${allWeather.forecast.forecastday[1].day.maxtemp_c} c</h2>
                          <h6>${allWeather.forecast.forecastday[1].day.mintemp_c} c</h6>
                          <p class="text-info">${allWeather.forecast.forecastday[1].day.condition.text}</p>
                        </div>
                      
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card  text-center">
                        <div class="header  d-flex justify-content-between px-3">
                            <p class="mx-auto">${day3}</p>
                        </div>
                        <div class="card-body">
                           <img src="${allWeather.forecast.forecastday[2].day.condition.icon}" class="w-25 px-3" alt="">
                          <h2>${allWeather.forecast.forecastday[2].day.maxtemp_c} c</h2>

                          <h6>${allWeather.forecast.forecastday[2].day.mintemp_c} c</h6>

                          <p class="text-info">${allWeather.forecast.forecastday[2].day.condition.text}</p>
                        </div>
                      
                    </div>
                </div>
  `;
  document.getElementById("rowData").innerHTML = cartona;
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });

  return `${day} ${month}`;
}

function formatDateDayName(dateString) {
  dateString =dateString.replace(/-/g,'/');
  const date = new Date(dateString);

  return date.toLocaleString("default", { weekday: "long" });
}
const formattedDate = formatDate("12/5/2024");
console.log(formattedDate);

const DateDayName = formatDateDayName("2024/12/05");
console.log(DateDayName);
