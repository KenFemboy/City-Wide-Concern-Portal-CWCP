import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const modbuttons = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        alt="CWCP Logo"
        onClick={() => navigate("/mod")}
      >Moderator Login</button>
    </div>
  )
}

export default modbuttons