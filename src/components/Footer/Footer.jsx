import React from "react"
import { FaFacebook } from "react-icons/fa"
import { GrLinkedin } from "react-icons/gr"
import { Link } from "react-router-dom"
import logo from "/SF.png"

const Footer = () => {
    return (
        <footer className="px-4 relative divide-y bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
            <svg
                className="absolute top-0 left-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="#f3f4f6"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg>

            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="">
                    <div rel="noopener noreferrer" className="flex justify-center lg:justify-start">
                        <Link to={"/"} className="flex">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <img src={logo} alt="" />
                            </div>
                            <span className="self-center text-2xl font-semibold">ServiceFlow</span>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-900 dark:text-gray-50">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Integrations
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-900 dark:text-gray-50">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-gray-900 dark:text-gray-50">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Public API
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">
                                    Guides
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-gray-900 dark:text-gray-50">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1 text-xl">
                                <FaFacebook></FaFacebook>
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1 text-xl">
                                <GrLinkedin></GrLinkedin>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-600 dark:text-gray-400">
                © 2024 Company Co. All rights reserved.
            </div>
        </footer>
        // <footer className="bg-base-200 dark:bg-gray-900">
        //     <div className="container px-6 py-8 mx-auto">
        //         <div className="flex flex-col items-center text-center">
        //             <Link to="/" className="flex items-center font-extrabold text-2xl">
        //                 <img src={logo} className="w-12" alt="" />
        //                 ServiceFlow
        //             </Link>

        //             <div className="flex flex-wrap justify-center mt-6 -mx-4">
        //                 <a
        //                     href="#"
        //                     className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
        //                     aria-label="Reddit"
        //                 >
        //                     Home
        //                 </a>

        //                 <a
        //                     href="#"
        //                     className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
        //                     aria-label="Reddit"
        //                 >
        //                     About
        //                 </a>

        //                 <a
        //                     href="#"
        //                     className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
        //                     aria-label="Reddit"
        //                 >
        //                     Teams
        //                 </a>

        //                 <a
        //                     href="#"
        //                     className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
        //                     aria-label="Reddit"
        //                 >
        //                     Privacy
        //                 </a>

        //                 <a
        //                     href="#"
        //                     className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
        //                     aria-label="Reddit"
        //                 >
        //                     Cookies
        //                 </a>
        //             </div>
        //         </div>

        //         <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        //         <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        //             <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>

        //             <div className="flex -mx-2 mt-6 lg:mt-0">
        //                 <Link className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 text-xl hover:text-blue-500 dark:hover:text-blue-400">
        //                     <FaFacebook />
        //                 </Link>

        //                 <Link className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 text-xl hover:text-blue-500 dark:hover:text-blue-400">
        //                     <GrLinkedin />
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    )
}

export default Footer
