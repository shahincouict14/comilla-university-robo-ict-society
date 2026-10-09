import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
        ]
    },
    {
        path:"*",
        element:<NotFoundPage></NotFoundPage>
    }
])

export default router;