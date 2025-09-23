import React from 'react'
import './cards.css'
const cards = ({ title, area, comment, status }) => {
    return (
        <div>

            <div className="card">
                <img src="https://placehold.co/150" alt="Concern" />
                <div className="card-content">
                    <h3>{title}</h3>
                    <h5>{area}</h5>
                    <p>{comment}</p>
                    <span className="status">{status}</span>
                </div>
            </div>

        </div>







    )
}

export default cards