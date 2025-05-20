async function getWeather() {
      const city = document.getElementById("cityInput").value;
      const apiKey = "e8ce9d327630db696e7c3b050e3accf2"; // Replace with your actual API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
    
        const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
    
        document.getElementById("weatherResult").innerHTML = weatherInfo;
      } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
      }
    }
    