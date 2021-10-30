$(function () {
  let weatherData;

  const $form = $("form");
  const $input = $('input[type="text"]');
  const $main = $("main");
  const $div = $(".div");

  $form.on("submit", handleSubmit);

  function handleSubmit(evt) {
    evt.preventDefault();

      const cityName = $input.val();

    $.ajax(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=27fc4b9dadf7068e74490511a36cc2e9`
    ).then(
      function (data) {
        weatherData = data;
        

        console.log(data);
        render();
      },
      function (error) {
        // failure callback function
        console.log(error);
      }
    );
  }

  function render() {
    $div.html(`
  
    <p id="name">Weather in: ${weatherData.name} <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" class="icon"/></p> 
    <p id="temp">${weatherData.main["temp"]} &deg C</p>
    <p id="weather">${weatherData.weather[0].main}  </p>
    <p id="feels_like">Feels like: ${weatherData.main["feels_like"]} &deg C</p>
`);
  }
});


