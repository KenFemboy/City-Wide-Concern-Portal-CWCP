import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./main.css";
import Cards from "../CARDS/cards.jsx";
import Form from "../FORM/form.jsx";
import SidebarLeft from "../SIDEBAR-LEFT/sidebar_left.jsx"; // 👈 import your sidebar

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState({ area: "", severity: "", status: "" });
  const location = useLocation();

  // 🔹 Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint =
          location.pathname === "/"
            ? `${import.meta.env.VITE_API_URL}/getApproved`
            : `${import.meta.env.VITE_API_URL}/fetch`;

        const response = await axios.get(endpoint);
        setPosts(response.data);
      } catch (error) {
        console.log("Unable to retrieve data", error);
      }
    };
    fetchData();
  }, [location.pathname]);

  // 🔹 Filtered posts
  const filteredPosts = posts.filter((concern) => {
    const matchesArea =
      !filters.area || concern.area?.toLowerCase() === filters.area.toLowerCase();
    const matchesSeverity =
      !filters.severity ||
      concern.severity?.toLowerCase() === filters.severity.toLowerCase();
    const matchesStatus =
      !filters.status ||
      concern.status?.toLowerCase() === filters.status.toLowerCase();
    return matchesArea && matchesSeverity && matchesStatus;
  });

  const renderButtons = () => {
    if (location.pathname === "/") {
      return <Form />;
    }
    return null;
  };

  return (
    <div className="main-container">
      {/* 🔹 Sidebar with filters */}
      <SidebarLeft filters={filters} setFilters={setFilters} />

      <div className="main">
        {renderButtons()}

        <div className="cards">
          {filteredPosts.length === 0 ? (
            <h1 id="noposts">No concerns found.</h1>
          ) : (
            filteredPosts.map((concern, idx) => (
              <Cards
                key={idx}
                _id={concern._id}
                title={concern.title}
                area={concern.area}
                comment={concern.description}
                status={concern.status || "pending"}
                severity={concern.severity}
                timestamp={concern.timestamp}
                photo={concern.photo}
                approved={concern.approved}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
