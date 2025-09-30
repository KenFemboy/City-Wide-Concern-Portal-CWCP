import React from "react";
import "./cards.css";
import { useLocation } from "react-router-dom";

const getSeverityColor = (severity) => {
  switch (severity.toLowerCase()) {
    case "life-threatening":
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

const Cards = ({ title, area, comment, status, severity, timestamp, photo }) => {
  const location = useLocation();
  const severityClass = getSeverityColor(severity);

  const renderButtons = () => {
    if (location.pathname === "/dashboard") {
      return (
        <div className="modbuttons">
          <button id="approve">Approve</button>
          <button id="delete">Delete</button>
        </div>
      );
    }
    return null;
  };
  const API_URL_UPLOAD = import.meta.env.VITE_API_URL_UPLOAD;

  const imageSrc = photo
    ? `${API_URL_UPLOAD}/${photo}`
    : "https://placehold.co/300x200"; // fallback

  return (
    <div>
      <div className={`card ${severityClass}`}>
        <img src={imageSrc} alt={title} />
        <div className="card-content">
          <div className="card-header">
            <h3>{title}</h3>
            <span className="status">{status}</span>
          </div>
          <h5>{area}</h5>
          <div className="meta">
            <span>Severity: {severity}</span>
            <span>Reported: {new Date(timestamp).toLocaleString()}</span>
          </div>
          <div className="details">
            <p>
              <strong>Comment:</strong> {comment}
            </p>
            {renderButtons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
