import React from "react";
import "./sidebar_left.css";

const Sidebar_Left = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <aside className="sidebar-left">
      <h2>Filters</h2>

      {/* 🔹 Area Filter */}
      <label>Area:</label>
      <select name="area" value={filters?.area || ""} onChange={handleFilterChange}>
        <option value="">All Areas</option>
        <option value="apokon">Apokon</option>
        <option value="bincungan">Bincungan</option>
        <option value="busaon">Busaon</option>
        <option value="canocotan">Canocotan</option>
        <option value="cuambogan">Cuambogan</option>
        <option value="la-filipina">La Filipina</option>
        <option value="liboganon">Liboganon</option>
        <option value="madaum">Madaum</option>
        <option value="magdum">Magdum</option>
        <option value="mankilam">Mankilam</option>
        <option value="new-balamban">New Balamban</option>
        <option value="nueva-fuerza">Nueva Fuerza</option>
        <option value="pagsabangan">Pagsabangan</option>
        <option value="pandapan">Pandapan</option>
        <option value="magugpo-poblacion">Magugpo Poblacion</option>
        <option value="san-agustin">San Agustin</option>
        <option value="san-isidro">San Isidro</option>
        <option value="san-miguel-camp-4">San Miguel (Camp 4)</option>
        <option value="visayan-village">Visayan Village</option>
        <option value="magugpo-east">Magugpo East</option>
        <option value="magugpo-north">Magugpo North</option>
        <option value="magugpo-south">Magugpo South</option>
        <option value="magugpo-west">Magugpo West</option>
      </select>

      {/* 🔹 Severity Filter */}
      <label>Severity:</label>
      <select name="severity" value={filters?.severity || ""} onChange={handleFilterChange}>
        <option value="">All Severity</option>
        <option value="inconvenient">Inconvenient</option>
        <option value="hazard">Hazard</option>
        <option value="life-threatening">Life-Threatening</option>
      </select>

      {/* 🔹 Status Filter */}
      <label>Status:</label>
      <select name="status" value={filters?.status || ""} onChange={handleFilterChange}>
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
    </aside>
  );
};

export default Sidebar_Left;
