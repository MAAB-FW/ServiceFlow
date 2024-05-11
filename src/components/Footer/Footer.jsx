import React from "react"
import { FaFacebook } from "react-icons/fa"
import { GrLinkedin } from "react-icons/gr"
import { Link } from "react-router-dom"
import logo from '/SF.png'

const Footer = () => {
    return (
        <footer className="bg-[#f3f4f6] dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <Link to='/' className="flex items-center font-extrabold text-2xl">
                    <img src={logo} className="w-12" alt="" />
                    ServiceFlow
                    </Link>

                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        <a
                            href="#"
                            className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            Home
                        </a>

                        <a
                            href="#"
                            className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            About
                        </a>

                        <a
                            href="#"
                            className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            Teams
                        </a>

                        <a
                            href="#"
                            className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Reddit"
                        >
                            Cookies
                        </a>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>

                    <div className="flex -mx-2 mt-6 lg:mt-0">

                        <Link
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 text-xl hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            <FaFacebook />
                        </Link>

                        <Link
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 text-xl hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            <GrLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
