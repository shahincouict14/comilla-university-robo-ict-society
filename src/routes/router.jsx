import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import HowToJoin from "../pages/HowToJoin";
import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path:"/events",
                element:<Events></Events>
            },
            {
                path: "/how-to-join",
                element: <HowToJoin></HowToJoin>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage></NotFoundPage>
    }
])

export default router;