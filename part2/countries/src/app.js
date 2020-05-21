import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayNames from './components/displayNames'
import Filter from './components/filter'

const App = () => {
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        const allCountries = response.data
      })
  }, [])

  const handleInputChange = ( event )  => {
    console.log('filter: ', event.target.value)
    //if (entry.name.toLowerCase().includes(event.target.value.toLowerCase())){
    //    setCountries([...countries, entry])
    //  }
    }

    //const handleNoteChange = (event) => {
    //  console.log(event.target.value)
    //  setNewNote(event.target.value)
    //}

  return (
    <div>
      <Filter handleInputChange={handleInputChange} countries={countries}/>
      <DisplayNames countries={countries} />
    </div>
  )
}

export default App