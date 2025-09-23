import React from 'react'
import "./main.css"
import Cards from "../CARDS/cards.jsx"
import { useLocation} from 'react-router-dom'
const main = () => {

  const renderButtons = () => {
    const location = useLocation();

    if (location.pathname === "/") {
      return (
        <button className="report-btn">
        Report Concern
      </button>
      );
    }

    return null;
  };
  return (
    <div className='main'>
      {renderButtons()}
      {/* cards */}
      <div className='cards'>
        <Cards title="Palm Accident" area="San Miguel" comment="asjdaslkdlkasjdkasjdlkadj" status="pending" />
      </div>

    </div>
  )
}

export default main