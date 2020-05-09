import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayNames from './components/displayNames'
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

  return (
    <div>
      <Filter newFilterString={newFilterString}  handleInputChange={handleInputChange} />
      <DisplayNames countries={countries} newFilterString={newFilterString}/>
    </div>
  )
}

export default App