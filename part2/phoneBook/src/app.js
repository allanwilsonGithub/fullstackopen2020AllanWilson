import React, { useState, useEffect } from 'react'
import DisplayNames from './components/displayNames'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import personsService from './services/persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilterString, setNewFilterString ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
      axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
      event.preventDefault()
      if (typeof (persons.find(x => x.name === newName)) != "undefined") {

      if (window.confirm(`${newName} already exists in the phonebook. Replace old number with new number?`)) {
        const idToUpdate = persons.find(x => x.name === newName).id
        personsService
        .updateExistingPerson(idToUpdate, { name: newName, number: newNumber })
        .then(updatePersonsFromDb)
        setErrorMessage(
        `${newName} was updated in the phonebook`
      )

      } else {
         console.log("You pressed Cancel!")
      }

      } else {
          setPersons([...persons, { name: newName, number: newNumber }])
          personsService
          .updatePersons({ name: newName, number: newNumber })
          .then(updatePersonsFromDb)
          setErrorMessage(
          `${newName} was added to the phonebook`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      }
  }

  const handleFilterChange = (event) => {
      setNewFilterString(event.target.value)
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  const updatePersonsFromDb = () => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response)
      })}

  const Notification = ({ message }) => {
    if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={errorMessage} />

      <Filter newFilterString={newFilterString}  handleFilterChange={handleFilterChange} />

      <h3>Add a new...</h3>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber}
      handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <DisplayNames persons={persons} updatePersonsFromDb={updatePersonsFromDb} newFilterString={newFilterString}/>

    </div>
  )
}

export default App