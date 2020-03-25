import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayNames from './components/displayNames'
import Filter from './components/filter'

const App = () => {
  const [ countries, setCountries] = useState([])

  const [ newFilterString, setNewFilterString ] = useState('')

  const [ filteredNames, setFilteredNames ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
      setNewFilterString(event.target.value)
  }

  return (
    <div>
      <Filter newFilterString={newFilterString}  handleFilterChange={handleFilterChange} />
      <DisplayNames countries={countries} newFilterString={newFilterString} filteredNames={filteredNames} setFilteredNames={setFilteredNames}/>
    </div>
  )
}

export default App