import React from 'react'

const DisplayNames = ( {countries, newFilterString} ) => {
  const filteredNames = 0
  const namesFound =  ListNames({ countries, newFilterString, filteredNames })
  if (filteredNames < 10){             TODO How to get filtered names as a number from ListNames to use here
    return namesFound
  } else {
    return (
      <p>Too many matches. Refine your filter</p>
    )}
}

const ListNames = ({ countries, newFilterString, filteredNames }) => countries.map((entry, i) => {
  if (entry.name.toLowerCase().includes(newFilterString.toLowerCase())){
    filteredNames = filteredNames+1
    console.log('FilteredNames: ', filteredNames)
    console.log('newFilterString', newFilterString)
    return (
      <p key={i}>{entry.name}</p>
    )
  } else {
    return ""
  }
})

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