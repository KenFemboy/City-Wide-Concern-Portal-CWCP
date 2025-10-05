import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Elements
import Main from "./MAINPAGE/main.jsx";

import Searchbar from "./SEARCHBAR/searchbar.jsx";
import Mod from "./MODERATOR/login.jsx";

import Credits from "./Credits/credits.jsx"
import TestLinks from "./Credits/testlinks.jsx"
function App() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <div id="main">
                        <Main />
                    </div>
                    <Credits/>
                    <TestLinks/>
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
                    <div id="main">
                        <Searchbar />
                        <Main />
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
