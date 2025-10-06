import React from "react";
import "./cards.css";
import { useLocation } from "react-router-dom";

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
  const API_URL = import.meta.env.VITE_API_URL;
  const API_URL_UPLOAD = import.meta.env.VITE_API_URL_UPLOAD;
  const imageSrc = photo ? `${API_URL_UPLOAD}/${photo}` : "https://placehold.co/300x200";

  // ✅ APPROVE FUNCTION
  const handleApprove = async () => {
    try {
      const url = `${API_URL}/approve/${_id}`;
      const res = await fetch(url, { method: "PUT" });

      if (res.ok) {
        alert("✅ Post approved successfully!");
      } else {
        const err = await res.json().catch(() => ({}));
        alert(`Error: ${err.message || err.errorMessage || "Failed to approve post"}`);
      }
    } catch (err) {
      console.error("⚠️ Error approving post:", err);
      alert("An error occurred while approving the post.");
    }
  };

  // ❌ REJECT FUNCTION
  const handleReject = async () => {
    try {
      const url = `${API_URL}/reject/${_id}`;
      const res = await fetch(url, { method: "PUT" });

      if (res.ok) {
        alert("❌ Post rejected successfully!");
        
      } else {
        const err = await res.json().catch(() => ({}));
        alert(`Error: ${err.message || err.errorMessage || "Failed to reject post"}`);
      }
    } catch (err) {
      console.error("⚠️ Error rejecting post:", err);
      alert("An error occurred while rejecting the post.");
    }
  };

  // 🗑️ DELETE FUNCTION
  const handleDelete = async () => {
    if (!confirm("⚠️ Are you sure you want to permanently delete this post?")) return;

    try {
      const url = `${API_URL}/delete/${_id}`;
      const res = await fetch(url, { method: "DELETE" });

      if (res.ok) {
        alert("🗑️ Post deleted permanently!");
      } else {
        const err = await res.json().catch(() => ({}));
        alert(`Error: ${err.message || err.errorMessage || "Failed to delete post"}`);
      }
    } catch (err) {
      console.error("⚠️ Error deleting post:", err);
      alert("An error occurred while deleting the post.");
    }
  };

  // 🔄 CHANGE STATUS FUNCTION (optional)
  const handleChangeStatus = async (newStatus) => {
    try {
      const url = `${API_URL}/status/${_id}`;
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        alert(`🔁 Status changed to "${newStatus}"`);
        
      } else {
        const err = await res.json().catch(() => ({}));
        alert(`Error: ${err.message || err.errorMessage || "Failed to update status"}`);
      }
    } catch (err) {
      console.error("⚠️ Error updating status:", err);
      alert("An error occurred while updating the status.");
    }
  };

  // 🔘 CONDITIONAL BUTTONS
  const renderButtons = () => {
    if (location.pathname === "/dashboard") {
      return (
        <div className="mod-buttons">
          {!approved ? (
            <button className="approve-btn" onClick={handleApprove}>
              ✅ Approve
            </button>
          ) : (
            <button className="reject-btn" onClick={handleReject}>
              ❌ Reject
            </button>
          )}
          <button className="delete-btn" onClick={handleDelete}>
            🗑️ Delete
          </button>

          {/* Optional dropdown for changing post status */}
          <select
            className="status-dropdown"
            value={status}
            onChange={(e) => handleChangeStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="ongoing">Ongoing</option>
            <option value="resolved">Resolved</option>
            
          </select>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`card ${severityClass}`}>
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <span className={`status-tag status-${status?.toLowerCase()}`}>{status}</span>
        </div>
        <h5>{area}</h5>
        <div className="meta">
          <span>Severity: {severity}</span>
          <span>Reported: {new Date(timestamp).toLocaleDateString()}</span>
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
