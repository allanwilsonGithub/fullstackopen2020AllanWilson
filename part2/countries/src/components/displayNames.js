import React from 'react'

function ConditionallyDisplayNames ({ countries, number_of_countries }) {
  if (number_of_countries === 1) {
      DisplayNames (countries)
  } else {
    return (
    <p>Search returned too many countries. Please refine your search</p>
  )
  }
}

const DisplayNames = ({ countries }) => countries.map((entry, i) => {
  return (
      <p key={i}>{entry.name}</p>
         )
})

export default { ConditionallyDisplayNames, DisplayNames }