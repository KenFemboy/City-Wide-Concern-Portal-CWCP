import React from "react";
import "./cards.css";
import { useLocation } from "react-router-dom";

const Cards = ({ title, area, comment, status, severity, timestamp }) => {
    const location = useLocation();

    const renderButtons = () => {
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
                    <p><strong>Severity:</strong> {severity}</p>
                    <p><strong>Timestamp:</strong> {timestamp}</p>
                    <span className="status">{status}</span>
                    {renderButtons()}
                </div>
            </div>
        </div>
    );
};

export default Cards;
