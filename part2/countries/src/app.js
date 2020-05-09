import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayNames from './components/displayNames'
import Filter from './components/filter'

const App = () => {
  const [ countries, setCountries] = useState([])

  const [ newFilterString, setNewFilterString ] = useState('')

  const [ filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewFilterString(event.target.value)
    FilterCountries(countries, newFilterString, filteredCountries, setFilteredCountries)
  }

  const FilterCountries = (countries, newFilterString, filteredCountries, setFilteredCountries) => countries.map((entry, i) => {
    if (entry.name.toLowerCase().includes(newFilterString.toLowerCase())){
        setFilteredCountries(...filteredCountries, entry.name.toLowerCase())
      }
    })

  return (
    <div>
      <Filter newFilterString={newFilterString}  handleInputChange={handleInputChange} />
      <DisplayNames filteredCountries={filteredCountries} />
    </div>
  )
}

export default App