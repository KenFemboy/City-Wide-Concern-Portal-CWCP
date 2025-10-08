import React from 'react'
import { Link } from 'react-router-dom'

const error = () => {
  return (
    <div>
        <h1>Error</h1>
        <Link to="/">Click here to go back</Link>
    </div>
  )
}

export default error