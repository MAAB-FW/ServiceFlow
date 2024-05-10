import React from "react"
import { Helmet } from "react-helmet"
import useAuth from "../../hooks/useAuth"
import axios from "axios"
import Swal from "sweetalert2"
import toast from "react-hot-toast"

const AddAService = () => {
    const { user } = useAuth()

    const handleAddAService = (e) => {
        e.preventDefault()
        const form = e.target
        const imageUrl = form.imageUrl.value
        const serviceName = form.serviceName.value
        const price = form.price.value
        const serviceArea = form.serviceArea.value
        const description = form.description.value
        const providerEmail = user.email
        const providerImage = user.photoURL
        const providerName = user.displayName

        const singleService = {
            imageUrl,
            serviceName,
            price,
            serviceArea,
            description,
            providerEmail,
            providerImage,
            providerName,
        }
        // console.log(singleService)
        axios
            .post(`${import.meta.env.VITE_API_URL}/add-a-service`, singleService)
            .then((res) => {
                console.log(res.data)
                form.reset()
                Swal.fire({
                    title: "Service added Successfully!",
                    // text: "You clicked the button!",
                    icon: "success",
                })
            })
            .catch((e) => {
                console.log(e)
                toast.error("An error Occurred!")
            })
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add A Service</title>
            </Helmet>

            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-xl font-semibold text-gray-700 mb-7 uppercase dark:text-white text-center">Add A Service</h2>

                <form onSubmit={handleAddAService}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="imageUrl">
                                Image URL of the Service
                            </label>
                            <input
                                id="imageUrl"
                                type="url"
                                name="imageUrl"
                                required
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="serviceName">
                                Service Name
                            </label>
                            <input
                                id="serviceName"
                                type="text"
                                name="serviceName"
                                required
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="price">
                                Price($)
                            </label>
                            <input
                                id="price"
                                type="number"
                                name="price"
                                required
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="serviceArea">
                                Service Area
                            </label>
                            <input
                                id="serviceArea"
                                type="text"
                                name="serviceArea"
                                required
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Add
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddAService
