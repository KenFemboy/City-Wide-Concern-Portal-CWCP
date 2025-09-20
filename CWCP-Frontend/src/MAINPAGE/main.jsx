import React from 'react'
import "./main.css"
import Cards from "../CARDS/cards.jsx"
const main = () => {
  return (
    <div className='main'>
      {/* <button className="report-btn">
        Report Concern
      </button> */}

      {/* cards */}
      <div className='cards'>
        <Cards/>
        <Cards/>
        <Cards/>
        

   


      </div>
      
    </div>
  )
}

export default main