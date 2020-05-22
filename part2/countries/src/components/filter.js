import React from 'react'

 const Filter = ({ userInput , handleInputChange}) => (
       <div>
          Enter search string  <input
          value={userInput}
          onChange={handleInputChange}
          />
       </div>
  )

  export default Filter