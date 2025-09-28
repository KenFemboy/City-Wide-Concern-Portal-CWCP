import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"

import "./main.css"

import Cards from "../CARDS/cards.jsx"
import Form from '../FORM/form.jsx'


const main = () => {
  // const [modal, setModal] = useState(false);

  const [post, setPosts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/fetch`)
        setPosts(response.data)
      }
      catch (error) {
        console.log("Unable to retrieve data", error)
      }
    };
    fetchData();
  }, []);


  const renderButtons = () => {
    const location = useLocation();

    if (location.pathname === "/") {
      return (
        <>
          <Form />
        </>
      );
    }

    return null;
  };
  return (
    <div className='main'>
      {renderButtons()}
      {/* cards */}



      {post.map((concern, idx) => (
        <Cards
          key={idx}
          title={concern.title}
          area={concern.area}
          comment={concern.description}
          status={concern.status || "pending"}
          severity={concern.severity}
          timestamp={concern.timestamp}
          photo={concern.photo}
        />
      ))}


    </div>


  )
}

export default main