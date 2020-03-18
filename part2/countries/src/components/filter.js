import React from 'react'

 const Filter = ({ newFilterString , handleFilterChange }) => (
       <div>
          find countries:  <input
          value={newFilterString}
          onChange={handleFilterChange}
          />
       </div>
  )

  export default Filter