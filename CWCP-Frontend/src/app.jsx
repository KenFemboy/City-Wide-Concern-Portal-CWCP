import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Elements
import Main from "./MAINPAGE/main.jsx";
import SidebarLeft from "./SIDEBAR-LEFT/sidebar_left.jsx";
import Searchbar from "./SEARCHBAR/searchbar.jsx";
import Mod from "./MODERATOR/login.jsx";


function App() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <div id="body">
                        <SidebarLeft />
                        <div id="main">
                            <Searchbar />
                            <Main />
                        </div>
                    </div>
                </>
            ),
        },
        {
            path: "/mod",
            element: <Mod />,
        },
        {
            path: "/dashboard",
            element:
                <>
                    <div id="body">
                        <SidebarLeft />
                        <div id="main">
                            <Searchbar />
                            <Main />
                        </div>
                    </div>
                </>
            ,
        },
    ]);
    return (
        <div>
            <RouterProvider router={route} />
        </div>
    );
}
export default App;
