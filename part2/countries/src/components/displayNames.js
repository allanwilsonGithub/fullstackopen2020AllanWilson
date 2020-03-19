import React from 'react'

const DisplayNames = ( {countries, newFilterString} ) => {
  const filteredNames = 0
  return ListNames({ countries, newFilterString, filteredNames })
}

const ListNames = ({ countries, newFilterString, filteredNames }) => countries.map((entry, i) => {
  if (entry.name.toLowerCase().includes(newFilterString.toLowerCase()))
    filteredNames = filteredNames+1
    console.log('FilteredNames: ', filteredNames)
    console.log('newFilterString', newFilterString)
    return (
      <p key={i}>{entry.name}</p>
    )
  }
)

export default DisplayNames




/*
function DisplayNames1 ({countries, newFilterString}){
  if (countries.length > 10) {
    return (
      <p>Too many matches. Refine your filter</p>
    )} else {
      return ListNames (countries={countries}, newFilterString={newFilterString})
    }
}
*/