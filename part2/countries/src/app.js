import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayNames from './components/displayNames'
import Filter from './components/filter'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ allCountries, setAllCountries ] = useState([])
  const [ displayMode, setDisplayMode ] = useState(1)

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
      if (filteredCountries.length < 11 && filteredCountries.length > 1) {
        console.log(filteredCountries.length, ' countries found! continue coding...')
        setCountries(filteredCountries)
        setDisplayMode(1)
      } else if (filteredCountries.length === 1) {
        console.log(filteredCountries.length, " 1 country found. Let's do this...")
        setCountries(filteredCountries)
        setDisplayMode(3)
      } else {
        console.log(filteredCountries.length, ' countries found! Please refine your search')
        setCountries(filteredCountries)
        setDisplayMode(2)
      }
    }


    
  return (
    <div>
      <Filter handleInputChange={handleInputChange} countries={countries}/>
      <DisplayNames countries={countries} displayMode={displayMode}/>
    </div>
  )
}

export default App