import React from 'react'

const DisplayWeather = ( currentWeather ) => {
    return (
      <div>
    <p>Temperature: {currentWeather.current.temperature} celcius</p>
    <img src={currentWeather.current.weather_icons[0]} alt="weather image" ></img>
    <p>Wind: {currentWeather.current.wind_speed} mph, direction {currentWeather.current.wind_dir}</p>
      </div>
         )
}

export default DisplayWeather