import { useEffect, useState } from "react"
import "./weatherApp.css"
import search_icon from "../Assets/search.png"
import cloud_icon from "../Assets/cloud.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"

function WeatherApp() {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY
  const [city, setCity] = useState(null)

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Connected to API")
        setCity(data.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="city-input"
          placeholder="Search for a city"
        />
        <div className="search-icon">
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div>
        <div className="weather-image">
          <img src={cloud_icon} alt="weather icon" />
        </div>
      </div>
      <div className="weather-temp">24</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
