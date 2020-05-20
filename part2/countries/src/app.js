import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayNames from './components/displayNames'
import Filter from './components/filter'

const App = () => {
  const [ countries, setCountries ] = useState([])

  const [ filteredCountries, setFilteredCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        setFilteredCountries(response.data)
      })
  }, [])

  const handleInputChange = (event) => {
    ClearFilterCountries()
    FilterCountries(countries, event.target.value, filteredCountries, setFilteredCountries)
  }

  const ClearFilterCountries = () => {
    setFilteredCountries([])
    }

  const FilterCountries = (countries, filterString, filteredCountries, setFilteredCountries) => countries.map((entry, i) => {
    if (entry.name.toLowerCase().includes(filterString.toLowerCase())){
        setFilteredCountries([...filteredCountries, entry])
      }
    })

  return (
    <div>
      <Filter handleInputChange={handleInputChange} />
      <DisplayNames filteredCountries={filteredCountries} />
    </div>
  )
}

export default App