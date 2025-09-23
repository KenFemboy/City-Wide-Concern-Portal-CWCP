import React from "react";
import './sidebar_left.css'
import Credits from '../Credits/credits.jsx'
import Testlinks from '../Credits/testlinks.jsx'
const sidebar_left = () => {
  return (
    <div className="sidebar_left">
      <div className="sidebar">
        <div className="cwcp-logo">
          <img src="CWCP-LOGO.svg" />
          <h2>City Wide Concern Portal</h2>
        </div>

        {/* filters */}

        <h3>Severity</h3>
        <label><input type="radio" name="severity" /> Inconvenient</label>
        <label><input type="radio" name="severity" /> Hazard</label>
        <label><input type="radio" name="severity" /> Life-Threatening</label>

        {/* status sa concern  */}
        <h3>Status</h3>
        <label><input type="radio" name="status" /> Pending</label>
        <label><input type="radio" name="status" /> In Progress</label>
        <label><input type="radio" name="status" /> Resolved</label>


        {/* area o lugar */}
        <h3>Area</h3>
        <select>
          <option value="">San Miguel</option>
          <option value="">Mankilam</option>
          <option value="">La Filipina</option>
          <option value="">Suaybaguio</option>
          <option value="">Canocotan</option>
          

        </select>


        <br />
        <Credits/>
        <Testlinks/>
      </div>
      
    </div>
  );
};

export default sidebar_left;
