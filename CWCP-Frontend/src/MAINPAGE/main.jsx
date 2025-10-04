import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./main.css";
import Cards from "../CARDS/cards.jsx";
import Form from "../FORM/form.jsx";

const Main = () => {
  const [post, setPosts] = useState([]);
  const location = useLocation();

useEffect(() => {
  const fetchData = async () => {
    try {
      // 🔹 Decide which API route to call based on current path
      const endpoint =
        location.pathname === "/"
          ? `${import.meta.env.VITE_API_URL}/getApproved` // only approved
          : `${import.meta.env.VITE_API_URL}/fetch`;   // all posts

      const response = await axios.get(endpoint);
      setPosts(response.data);
    } catch (error) {
      console.log("Unable to retrieve data", error);
    }
  };

  fetchData();
}, [location.pathname]); // re-fetch if route changes


  const renderButtons = () => {
    if (location.pathname === "/") {
      return <Form />;
    }
    return null;
  };


const visiblePosts = post;
  return (
    <div className="main">
      {renderButtons()}

      <div className="cards">
        {visiblePosts.length === 0 ? (
          <h1 id="noposts">No concerns found.</h1>
        ) : (
          visiblePosts.map((concern, idx) => (
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
  );
};

export default Main;
