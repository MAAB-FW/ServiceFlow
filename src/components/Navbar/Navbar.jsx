import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast"
import Swal from "sweetalert2"

const Navbar = () => {
    const { user, logoutUser, setUser } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        Swal.fire({
            title: "Do you want to log out?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!",
        }).then((result) => {
            if (result.isConfirmed) {
                logoutUser()
                    .then(() => {
                        setUser(null)
                        navigate("/login")
                        toast.success("Successfully logged out!")
                    })
                    .catch((e) => {
                        console.log(e)
                        toast.error("An error Occur!")
                    })
            }
        })
    }

    const dark = () => {
        document.querySelector("html").setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
    }
    const light = () => {
        document.querySelector("html").setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light")
    }

    const localTheme = localStorage.getItem("theme")

    if (localTheme === "dark") dark()

    const handleTheme = (e) => {
        if (e.target.checked) dark()
        else light()
    }

    const navlinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/all-services">Services</NavLink>
            </li>
            <li>
                <details>
                    <summary>Dashboard</summary>
                    <ul className="p-2 w-[170px]">
                        <li>
                            <NavLink to="/add-a-service">Add Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/manage-services">Manage Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/booked-services">Booked-Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service-to-do">Service-To-Do</NavLink>
                        </li>
                    </ul>
                </details>
            </li>
        </>
    )

    return (
        <div className="navbar p-0 bg-base-100 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    ServiceFlow
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navlinks}</ul>
            </div>
            <div className="navbar-end *:flex ">
                <div className="mr-2">
                    <label className="cursor-pointer grid place-items-center">
                        <input
                            onChange={handleTheme}
                            defaultChecked={localTheme === "dark"}
                            type="checkbox"
                            value="synthwave"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                        />
                        <svg
                            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
                {!user ? (
                    <Link to="/login" className="btn">
                        Login
                    </Link>
                ) : (
                    <>
                        <div className="border text-neutral-content text-sm rounded-full w-10 z-50">
                            <span>
                                <img className="rounded-full" src={user.photoURL} alt="img" />
                            </span>
                        </div>
                        <div className="ml-2">
                            <button onClick={handleLogout} className="btn btn-error text-white">
                                Log out
                            </button>
                        </div>
                    </>
                )}
            </div>
            {/* <div className="navbar-end gap-4">
                <Link to="/login" className="btn btn-accent text-white">
                    Login
                </Link>
                <div>
                    <img className="rounded-full" src={"user.photoURL"} alt="img" />
                </div>
                <button className="btn btn-accent text-white">Logout</button>
            </div> */}
        </div>

        // <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        //             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ServiceFlow</span>
        //         </Link>
        //         <button
        //             data-collapse-toggle="navbar-dropdown"
        //             type="button"
        //             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        //             aria-controls="navbar-dropdown"
        //             aria-expanded="false"
        //         >
        //             <span className="sr-only">Open main menu</span>
        //             <svg
        //                 className="w-5 h-5"
        //                 aria-hidden="true"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 17 14"
        //             >
        //                 <path
        //                     stroke="currentColor"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth="2"
        //                     d="M1 1h15M1 7h15M1 13h15"
        //                 />
        //             </svg>
        //         </button>
        //         <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        //             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        //                 <li>
        //                     <a
        //                         href="#"
        //                         className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
        //                         aria-current="page"
        //                     >
        //                         Home
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <button
        //                         id="dropdownNavbarLink"
        //                         data-dropdown-toggle="dropdownNavbar"
        //                         className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
        //                     >
        //                         Dropdown
        //                         <svg
        //                             className="w-2.5 h-2.5 ms-2.5"
        //                             aria-hidden="true"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="none"
        //                             viewBox="0 0 10 6"
        //                         >
        //                             <path
        //                                 stroke="currentColor"
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="m1 1 4 4 4-4"
        //                             />
        //                         </svg>
        //                     </button>
        //                     {/* <!-- Dropdown menu --> */}
        //                     <div
        //                         id="dropdownNavbar"
        //                         className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        //                     >
        //                         <ul
        //                             className="py-2 text-sm text-gray-700 dark:text-gray-400"
        //                             aria-labelledby="dropdownLargeButton"
        //                         >
        //                             <li>
        //                                 <a
        //                                     href="#"
        //                                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        //                                 >
        //                                     Dashboard
        //                                 </a>
        //                             </li>
        //                             <li>
        //                                 <a
        //                                     href="#"
        //                                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        //                                 >
        //                                     Settings
        //                                 </a>
        //                             </li>
        //                             <li>
        //                                 <a
        //                                     href="#"
        //                                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        //                                 >
        //                                     Earnings
        //                                 </a>
        //                             </li>
        //                         </ul>
        //                         <div className="py-1">
        //                             <a
        //                                 href="#"
        //                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        //                             >
        //                                 Sign out
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <a
        //                         href="#"
        //                         className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        //                     >
        //                         Services
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a
        //                         href="#"
        //                         className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        //                     >
        //                         Pricing
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a
        //                         href="#"
        //                         className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        //                     >
        //                         Contact
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar
