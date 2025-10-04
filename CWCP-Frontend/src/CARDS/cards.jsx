import React from "react";
import "./cards.css";
import { useLocation } from "react-router-dom";
import Modbuttons from "../MODERATOR/modbuttons";

const getSeverityColor = (severity) => {
  switch (severity?.toLowerCase()) {
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

const Cards = ({ _id, title, area, comment, status, severity, timestamp, photo, approved }) => {
  const location = useLocation();
  const severityClass = getSeverityColor(severity);

  const handleApprove = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/approve/${_id}`;
      console.log("➡️ Sending PUT request to:", url);

      const res = await fetch(url, { method: "PUT" });

      console.log("⬅️ Response status:", res.status);

      if (res.ok) {
        alert("Post approved successfully!");
        window.location.reload();
      } else {
        const err = await res.json().catch(() => ({}));
        console.error("❌ Backend error:", err);
        alert(`Error: ${err.message || err.errorMessage || "Failed to approve post"}`);
      }
    } catch (err) {
      console.error("⚠️ Network or fetch error:", err);
      alert("An error occurred while approving the post.");
    }
  };

  const handleReject = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/reject/${_id}`, {
        method: "PUT",
      });

      if (res.ok) {
        alert("Post rejected successfully!");
        window.location.reload();
      } else {
        const err = await res.json();
        alert(`Error: ${err.message || "Failed to reject post"}`);
      }
    } catch (err) {
      alert("An error occurred while rejecting the post.");
    }
  };

const renderButtons = () => {
  if (location.pathname === "/dashboard") {
    return (
      <div className="mod-buttons">
        {!approved && (
          <button className="approve-btn" onClick={handleApprove}>
            ✅ Approve
          </button>
        )}
        {approved && (
          <button className="reject-btn" onClick={handleReject}>
            ❌ Reject
          </button>
        )}
      </div>
    );
  }
  return null;
};


  const API_URL_UPLOAD = import.meta.env.VITE_API_URL_UPLOAD;
  const imageSrc = photo ? `${API_URL_UPLOAD}/${photo}` : "https://placehold.co/300x200";

  return (
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
  );
};

export default Cards;
