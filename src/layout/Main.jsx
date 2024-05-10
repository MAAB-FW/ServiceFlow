import React from "react"
import Navbar from "../components/Navbar/Navbar"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../components/Footer/Footer"

const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto font-roboto">
            <Navbar></Navbar>
            <div className="w-[90%] lg:w-[84%] mx-auto my-12">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    )
}

export default Main
