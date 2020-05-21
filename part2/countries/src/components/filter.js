import React from 'react'

 const Filter = ({ userInput , handleInputChange}) => (
       <div>
          find countries:  <input
          value={userInput}
          onChange={handleInputChange}
          />
       </div>
  )

  export default Filter