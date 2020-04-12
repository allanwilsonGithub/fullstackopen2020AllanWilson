import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayNames from './components/displayNames'
import Filter from './components/filter'

const App = () => {
  const [ countries, setCountries] = useState([])

  const [ filteredCountries, setFilteredCountries] = useState([])

  const [ newFilterString, setNewFilterString ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        setFilteredCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
      setNewFilterString(event.target.value)
      setFilteredCountries([])
      console.log('FC: ', filteredCountries)
      updateFilteredCountries()
  }

  const updateFilteredCountries = () => countries.map((entry, i) => {
    if (entry.name.toLowerCase().includes(newFilterString.toLowerCase())){
      setFilteredCountries([...filteredCountries, entry.name.toLowerCase()])
    }
  })
  
  return (
    <div>
      <Filter newFilterString={newFilterString}  handleFilterChange={handleFilterChange} />
      <DisplayNames filteredCountries={filteredCountries} newFilterString={newFilterString}/>
    </div>
  )
}

export default App