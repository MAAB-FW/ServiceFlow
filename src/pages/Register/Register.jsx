import React from "react"
import { Helmet } from "react-helmet"
import { FcGoogle } from "react-icons/fc"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast"

const Register = () => {
    const { user, googleSignIn, createUser, updateUserData } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    if (user) return <Navigate to={"/"} replace></Navigate>

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) return toast.error("Invalid email address")

        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password))
            return toast.error("Password needs 1 uppercase, 1 lowercase, min. 6 chars.")

        createUser(email, password)
            .then((r) => {
                console.log(r.user)
                toast.success("Successfully Registered!")
                navigate(location?.state || "/")
                updateUserData(name, photo)
                    .then(() => {
                        console.log("profile info updated")
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            })
            .catch((e) => {
                e
            })
    }

    const handleGoogle = (e) => {
        e.preventDefault()
        googleSignIn()
            .then((r) => {
                console.log(r.user)
                toast.success("Successfully Logged in!")
                navigate(location?.state || "/")
            })
            .catch((e) => {
                console.log(e)
                toast.error("An error occur! Please try again later!")
            })
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
            </Helmet>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    // autoComplete="name"
                                    required
                                    placeholder="Enter Your Full Name"
                                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    // autoComplete="email"
                                    required
                                    placeholder="Enter Your Email Address"
                                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                photo address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="photo"
                                    name="photo"
                                    type="photo"
                                    // autoComplete="photo"
                                    required
                                    placeholder="Enter Your photo URL"
                                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    // autoComplete="current-password"
                                    required
                                    placeholder="Enter Your Password"
                                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Does not have an account?&#160;
                        <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login
                        </Link>
                    </p>
                    <p className="mt-4 text-gray-400 text-center">⸺⸺⸺⸺ or, ⸺⸺⸺⸺</p>
                    <p className="mt-4 flex justify-center text-center text-sm text-gray-500">
                        <button
                            onClick={handleGoogle}
                            className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            <FcGoogle className="text-2xl mr-4" />
                            <span>Log in With Google</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
