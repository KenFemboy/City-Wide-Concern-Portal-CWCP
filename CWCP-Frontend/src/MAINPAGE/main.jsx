import React ,{useState} from 'react'
import "./main.css"
import Cards from "../CARDS/cards.jsx"
import Form from '../FORM/form.jsx'
import { useLocation } from 'react-router-dom'
const main = () => {
  const [modal, setModal] = useState(false);

 

  const renderButtons = () => {
    const location = useLocation();

    if (location.pathname === "/") {
      return (
        <>
        
        <Form/>
       
        </>
      );
    }

    return null;
  };
  return (
    <div className='main'>
      {renderButtons()}
      {/* cards */}
      <div className='cards'>
        <Cards
          title="Palm Accident"
          area="San Miguel"
          comment="asjdaslkdlkasjdkasjdlkadj"
          status="pending"
          severity="High"
          timestamp="2025-09-27 14:32"
        />


        <Cards
          title="Palm Accident"
          area="San Miguel"
          comment="asjdaslkdlkasjdkasjdlkadj"
          status="pending"
          severity="High"
          timestamp="2025-09-27 14:32"
        />

        <Cards
          title="Power Outage"
          area="San Juan"
          comment="No electricity since last night.asdsadasdasdsaddddddddddddd"
          status="pending"
          severity="Critical"
          timestamp="2025-09-27 06:45"
        />
      </div>

    </div>
  )
}

export default main