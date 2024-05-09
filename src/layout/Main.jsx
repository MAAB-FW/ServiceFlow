import React from "react"
import Navbar from "../components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"

const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto font-roboto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Main
