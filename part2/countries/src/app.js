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

  return (
    <div>
      <Filter handleInputChange={handleInputChange} countries={countries}/>
      <DisplayNames countries={countries} />
    </div>
  )
}

export default App