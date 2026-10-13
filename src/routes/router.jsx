import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import HowToJoin from "../pages/HowToJoin";
import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";
import EventDetails from "../pages/EventDetails";
import { eventDetailsLoader } from "../loader/eventDetailsLoader";
import EventDetailsError from "../pages/EventDetailsError";

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
                path:"/events/:id",
                element:<EventDetails></EventDetails>,
                loader:eventDetailsLoader,
                errorElement:<EventDetailsError></EventDetailsError>
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