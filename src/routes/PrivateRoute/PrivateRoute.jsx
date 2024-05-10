/* eslint-disable react/prop-types */
import React from "react"
import useAuth from "../../hooks/useAuth"
import { Navigate, useLocation } from "react-router-dom"
import Loading from "../../components/Loading/Loading"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) return <Loading></Loading>

    if (!user) return <Navigate to="/login" state={location.pathname} replace></Navigate>

    return <div>{children}</div>
}

export default PrivateRoute
