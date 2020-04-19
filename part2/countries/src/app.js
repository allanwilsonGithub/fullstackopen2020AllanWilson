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

  const handleInputChange = (event) => {
    console.log(event.target.value) 
  //    setFilteredCountries(countries.filter ( country => {
  //      return country.toLowerCase().includes(event.target.value.toLowerCase())
  //      }))
  }


  return (
    <div>
      <Filter newFilterString={newFilterString}  handleInputChange={handleInputChange} />
      <DisplayNames filteredCountries={filteredCountries}/>
    </div>
  )
}

export default App