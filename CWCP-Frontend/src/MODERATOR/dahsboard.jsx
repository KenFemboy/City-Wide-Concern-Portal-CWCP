import React from 'react'

import './dashboard.css'
import Sidebar from '../SIDEBAR-LEFT/sidebar_left.jsx'
import Searchbar from '../SEARCHBAR/searchbar.jsx'
import Main from '../MAINPAGE/main.jsx'
const dahsboard = () => {
  return (
    <div id='dashboardbody'>
        <Sidebar/>
        <p>DAshboard</p>
        <div id='dashboardmain'>
            <Searchbar/> 
            <Main/>
            
        </div>
    </div>
  )
}

export default dahsboard