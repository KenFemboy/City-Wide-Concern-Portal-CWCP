import React from "react";
import "./cards.css";
import { useLocation } from "react-router-dom";

const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
        case "life threatening":
        case "critical":
            return "card-red";
        case "hazard":
        case "high":
            return "card-yellow";
        case "inconvenient":
        case "medium":
        case "low":
            return "card-grey";
        default:
            return "";
    }
};

const Cards = ({ title, area, comment, status, severity, timestamp }) => {
    const location = useLocation();
    const severityClass = getSeverityColor(severity);

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
            <div className={`card ${severityClass}`}>
                <img src="https://placehold.co/300" alt="Concern" />
                <div className="card-content">
                    <div className="card-header">
                        <h3>{title}</h3>
                        <span className="status">{status}</span>
                    </div>
                    <h5>{area}</h5>
                    <div className="meta">
                        <span>Severity: {severity}</span>
                        <span>Reported: {timestamp}</span>
                    </div>
                    <div className="details">
                        <p><strong>Comment:</strong> {comment}</p>
                        {renderButtons()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
