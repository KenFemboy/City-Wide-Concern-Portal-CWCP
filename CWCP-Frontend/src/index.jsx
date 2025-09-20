import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Elements
import Main from './MAINPAGE/main.jsx'
import SidebarLeft from './SIDEBAR-LEFT/sidebar_left.jsx'
import Searchbar from './SEARCHBAR/searchbar.jsx'


import Mod from './MODERATOR/login.jsx'



createRoot(document.getElementById('root')).render(
    <>
        <div id='body'>
            <SidebarLeft />

            <div id='main'>
                <Searchbar/>
                <Main />
            </div>
            
        </div>




        {/* <Mod/> */}
    </>


)
