import { useEffect, useState } from "react"
import "./weatherApp.css"
import cloud_icon from "../Assets/cloud.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"

function WeatherApp() {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY
  const [search, setSearch] = useState("")
  const [weatherData, setWeatherData] = useState(null)

  const searchPressed = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data)
      })
  }

  useEffect(() => {
    if (weatherData) {
      console.log(weatherData)
    }
  }, [weatherData])

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="city-input"
          placeholder="Search for a city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-icon" onClick={searchPressed}>
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
      <div>
        <div className="weather-image">
          <img src={cloud_icon} alt="weather icon" />
        </div>
      </div>
      <div className="weather-temp">
        {" "}
        {weatherData ? `${weatherData.main.temp}°C` : "No data"}
      </div>
      <div className="weather-location">
        {weatherData ? `${weatherData.name}` : "No country selected"}
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">
              {weatherData ? `${weatherData.main.humidity}` : "No data"}
            </div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">
              {weatherData ? `${weatherData.wind.speed}` : "No data"}
            </div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
