import React from 'react'

const DisplayNames = ({ countries, displayMode }) => countries.map((entry, i) => {  
  if (displayMode === 1) {
    return (
      <p key={i}>{entry.name}</p>
         )
  } else if (displayMode === 2) {
      return (
        <p key={i}>Too many hits. Please refine your search</p>
           )
  } else if (displayMode === 3) {
    return (
      <p key={i}>Let's do this...</p>
         )
}
  
  
})



export default DisplayNames