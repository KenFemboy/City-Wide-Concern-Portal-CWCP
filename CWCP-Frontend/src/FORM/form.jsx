import React, { useState } from "react";
import "./form.css";

const FormModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleModal} className="report-btn">
        Submit Concern
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={toggleModal}>
              ✖
            </button>
            <h2>Submit a New Concern</h2>
            <p className="modal-subtitle">
              Help us improve the community by reporting issues you encounter.
            </p>

            <form className="form-grid">
              {/* Title */}
              <div className="form-group full-width">
                <label htmlFor="title">Concern Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="e.g., Palm Accident"
                />
              </div>

              {/* Timestamp */}
              <div className="form-group">
                <label htmlFor="timestamp">Timestamp</label>
                <input
                  type="datetime-local"
                  id="timestamp"
                  name="timestamp"
                  defaultValue={new Date().toISOString().slice(0, 16)} 
                />
              </div>

              {/* Upload */}
              <div className="form-group">
                <label htmlFor="photo">Upload Photo</label>
                <input type="file" id="photo" name="photo" accept="image/*" />
              </div>

              {/* Area */}
              <div className="form-group">
                <label htmlFor="area">Select Area</label>
                <select id="area" name="area">
                  <option value="">-- Choose an Area --</option>
                  <option value="mankilam">Mankilam</option>
                  <option value="liboganon">Liboganon</option>
                  <option value="madaum">Madaum</option>
                </select>
              </div>

              {/* Severity */}
              <div className="form-group">
                <label htmlFor="severity">Severity</label>
                <select id="severity" name="severity">
                  <option value="">-- Choose Severity --</option>
                  <option value="inconvenient">Inconvenient</option>
                  <option value="hazard">Hazard</option>
                  <option value="life-threatening">Life-Threatening</option>
                </select>
              </div>

              {/* Description */}
              <div className="form-group full-width">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the concern in detail..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  🚀 Submit Concern
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
