import React from 'react'

const DisplayNames = ({ countries, setCountries }) => countries.map((entry, i) => {
    return (
      <p key={i}>{entry.name} <button onClick={() => setCountries([entry])}>Show</button></p>
         )
}
)



export default DisplayNames