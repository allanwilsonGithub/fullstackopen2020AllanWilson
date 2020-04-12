import React from 'react'

const DisplayNames = ({ filteredCountries }) => filteredCountries.map((entry, i) => {
  return (
      <p key={i}>{entry.name}</p>
         )
})

export default DisplayNames