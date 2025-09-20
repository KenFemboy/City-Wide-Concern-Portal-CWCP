import React from 'react'
import './searchbar.css'
const searchbar = () => {
    return (

        <div class="header">
            <h1>City Wide Concern Portal</h1>
            <br/>
            <div class="search-bar">
                <input type="text" placeholder="Search by area, issue, or status..." />
                🔔
            </div>
        </div>

    )
}

export default searchbar