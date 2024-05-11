import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import ErrorPage from "../layout/ErrorPage"
import Home from "../pages/Home/Home"
import AllServices from "../pages/AllServices/AllServices"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import SingleServices from "../pages/SingleServices/SingleServices"
import AddAService from "../pages/AddAService/AddAService"
import ManageServices from "../pages/ManageServices/ManageServices"
import BookedServices from "../pages/BookedServices/BookedServices"
import ServiceToDo from "../pages/ServiceToDo/ServiceToDo"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import BookNowPage from "../pages/BookNowPage/BookNowPage"
import UpdateService from "../pages/UpdateService/UpdateService"

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
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
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
                path: "/book-now/:id",
                element: (
                    <PrivateRoute>
                        <BookNowPage></BookNowPage>
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
            {
                path: "/manage-services",
                element: (
                    <PrivateRoute>
                        <ManageServices></ManageServices>
                    </PrivateRoute>
                ),
            },
            {
                path: "/update-service/:id",
                element: (
                    <PrivateRoute>
                        <UpdateService></UpdateService>
                    </PrivateRoute>
                ),
            },
            {
                path: "/booked-services",
                element: (
                    <PrivateRoute>
                        <BookedServices></BookedServices>
                    </PrivateRoute>
                ),
            },
            {
                path: "/service-to-do",
                element: (
                    <PrivateRoute>
                        <ServiceToDo></ServiceToDo>
                    </PrivateRoute>
                ),
            },
        ],
    },
])

export default router
