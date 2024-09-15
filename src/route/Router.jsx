import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Team from "../pages/Team/Team";
import Contract from "../pages/Contract/Contract";
import About from "../pages/About/About";
import Layouts from "../layouts/Layouts";


// init router 

const router = createBrowserRouter([
   {
    element : <Layouts/>,
    children : [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/team",
            element : <Team/>
        },
        {
            path : "/blog",
            element : <Blog/>
        },
        {
            path : "/contract",
            element : <Contract/>
        },
        {
            path : "/about",
            element : <About/>
        }
    ]
   }
]);


// export default 

export default router;