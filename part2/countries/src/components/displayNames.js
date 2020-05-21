import React from 'react'

const DisplayNames = ({ countries }) => countries.map((entry, i) => {  
  return (
      <p key={i}>{entry.name}</p>
         )
})



export default DisplayNames