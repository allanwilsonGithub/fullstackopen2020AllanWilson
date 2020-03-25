import React from 'react'

const DisplayNames = ({ countries, newFilterString, filteredNames, setFilteredNames }) => countries.map((entry, i) => {
  if (entry.name.toLowerCase().includes(newFilterString.toLowerCase())){
    setFilteredNames([...filteredNames, entry.name])
    return (
      <p key={i}>{entry.name}</p>
    )
  } else {
    return ""
  }
})

export default DisplayNames