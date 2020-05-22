import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayNames from './components/displayNames'
import Filter from './components/filter'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ allCountries, setAllCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        setAllCountries(response.data)
      })
  }, [])

  const handleInputChange = ( event )  => {
      const filteredCountries = allCountries.filter(entry => entry.name.toLowerCase().includes(event.target.value.toLowerCase()))
      setCountries(filteredCountries)
    }

  const renderDisplayArea = ( countries ) => {
    if (countries.length < 11 && countries.length > 1) {
        return (
          <DisplayNames countries={countries} setCountries={setCountries}/>
        )
      } else if (countries.length === 1) {
        return (
          <div>
            <h1>{countries[0].name}</h1>
            <p>Capital: {countries[0].capital}</p>
            <p>Population: {countries[0].population}</p>
            <h3>Languages</h3>
            <ul>
            {countries[0].languages.map((entry, i) => {
                return (
                  <li key={i}>{entry.name}</li>
                  )
                }
              )}
            </ul>
            <img src={countries[0].flag} border='1px' alt="country flag" width="200" height="150"></img>
          </div>
        )
      } else {
      return (
        <p>... Search returns {countries.length} countries . Please refine your search</p>
      )
      }
    }

    
  return (
    <div>
      <h1 style={{ color: '#29701e' }}>Country information search tool</h1>
      <Filter handleInputChange={handleInputChange} countries={countries}/>
      { renderDisplayArea(countries) }
    </div>
  )
}

export default App