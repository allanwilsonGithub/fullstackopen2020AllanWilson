import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ConditionallyDisplayNames from './components/displayNames'
import Filter from './components/filter'

const App = () => {
  const [ countries, setCountries] = useState([])

  const [ newFilterString, setNewFilterString ] = useState('')

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
  }
  
  const number_of_countries = 2

  return (
    <div>
      <Filter newFilterString={newFilterString}  handleInputChange={handleInputChange} />
      <ConditionallyDisplayNames countries={countries} number_of_countries={number_of_countries}/>
    </div>
  )
}

export default App