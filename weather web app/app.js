window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com";
      const api = "${proxy}https://api.darksky.net/forecast/071881a0701d352e9714ec864a4d1e37/${lat},${long}";

      fetch(api);
      .then(Response => {
          return Response.json();
          
      })
      .then(data => {
        const { temperature, summary } = data.currently;
        //Set DOM Elements from API
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.Timezone;
      });
    });
  }
});
