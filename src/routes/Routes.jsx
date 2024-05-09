import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import ErrorPage from "../layout/ErrorPage"
import Home from "../pages/Home/Home"
import AllServices from "../pages/AllServices/AllServices"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import SingleServices from "../pages/SingleServices/SingleServices"
import AddAService from "../pages/AddAService/AddAService"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/all-services",
                element: <AllServices></AllServices>,
            },
            {
                path: "/single-services/:id",
                element: (
                    <PrivateRoute>
                        <SingleServices></SingleServices>
                    </PrivateRoute>
                ),
            },
            {
                path: "/add-a-service",
                element: (
                    <PrivateRoute>
                        <AddAService></AddAService>
                    </PrivateRoute>
                ),
            },
        ],
    },
])

export default router
