import React from 'react'

TODO get this working:
const DisplayNames = ({ countries, newFilterString }) => countries.map((entry, i) => {
        if (1 === 1) {
          return (
            <p>Too many matches. Refine your filter</p>
          )}})

const ListNames = ({ countries, newFilterString }) => countries.map((entry, i) => {
        if (entry.name.toLowerCase().includes(newFilterString.toLowerCase()))
          return (
            <p key={i}>{entry.name}</p>
          )
        }
)

export default DisplayNames