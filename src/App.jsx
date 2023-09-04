import loader from "./assets/loader.svg";
import "./App.css";
import { useEffect, useState } from "react";
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData({
          city: responseData.data.city,
          country: responseData.data.country,
          iconId: responseData.data.current.weather.ic,
          temperature: responseData.data.current.weather.tp,
        });
      });
  }, []);

  return (
    <main>
      <div classname="loader-container">
        <img src={loader} alt="loading icon" />
      </div>
      <p className="city-name">Mont de marsan</p>
      <p className="country-name">France</p>
      <p className="temperature">17</p>
      <div className="info-icon-container">
        <img src="/icons/01d.svg" className="info-icon" alt="weather icon" />
      </div>
    </main>
  );
}

export default App;
