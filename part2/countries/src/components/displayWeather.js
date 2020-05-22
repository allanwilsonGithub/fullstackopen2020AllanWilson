import React from 'react'
import axios from 'axios'

const DisplayWeather = ( city ) => {
    console.log(city)
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
    console.log(REACT_APP_API_KEY)
    axios
        .get(`http://api.weatherstack.com/current?access_key=${REACT_APP_API_KEY}&query=${city}`)
        .then(response => {
          console.log(response.data)
          const currentWeather = response.data
          console.log(currentWeather.current.temperature)
          console.log(currentWeather.current.weather_icons[0])
          console.log(currentWeather.current.wind_speed)
          console.log(currentWeather.current.wind_dir)
          })
          return (
            <div>
            <h3>Weather in { city }</h3>
            </div>
               )

}

export default DisplayWeather