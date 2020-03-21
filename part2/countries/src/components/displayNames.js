import React from 'react'


const FilterCountries = ({ countries, newFilterString, filteredCountries}) => countries.map((entry, i) => {
  if (entry.name.toLowerCase().includes(newFilterString.toLowerCase())){
    filteredCountries = [...filteredCountries, entry.name]
    return filteredCountries
  } else {
    return null
  }
  })


const ListNames = ({ countries, newFilterString }) => countries.map((entry, i) => {
  if (entry.name.toLowerCase().includes(newFilterString.toLowerCase())){
    return (
      <p key={i}>{entry.name}</p>
    )
  } else {
    return ""
  }
})

const DisplayNames = ({ countries, newFilterString }) => {
  const FilteredCountries = FilterCountries(countries={countries}, newFilterString={newFilterString})
  console.log('Filtered Countries:', FilteredCountries)
  
}


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