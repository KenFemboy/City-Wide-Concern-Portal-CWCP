import React from "react";
import "./cards.css";
import { useLocation } from "react-router-dom";
const cards = ({ title, area, comment, status }) => {
    
    
    const renderButtons = () => {
        const location = useLocation();

        if (location.pathname === "/dashboard") {
            return (
                <div className="modbuttons">
                    <button id="approve">
                        Approve
                    </button>
                    <button id="delete">
                        Delete
                    </button>
                </div>

            );
        }

        return null;
    };
    return (
        <div>
            <div className="card">
                <img src="https://placehold.co/150" alt="Concern" />
                <div className="card-content">
                    <h3>{title}</h3>
                    <h5>{area}</h5>
                    <p>{comment}</p>
                    <span className="status">{status}</span>
                    {renderButtons()}
                </div>
                
            </div>
        </div>
    );
};

export default cards;
