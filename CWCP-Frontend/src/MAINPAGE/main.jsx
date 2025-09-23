import React from 'react'
import "./main.css"
import Cards from "../CARDS/cards.jsx"
import { BrowserRouter, Link } from 'react-router-dom'
const main = () => {
  return (
    <div className='main'>
      <button  className="report-btn">
        Report Concern
      </button>
      
              
      
      {/* cards */}
      <div className='cards'>
        <Cards title="Palm Accident" area="San Miguel" comment="asjdaslkdlkasjdkasjdlkadj" status="pending"/>
      </div>
      
    </div>
  )
}

export default main