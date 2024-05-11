import { useQuery } from "@tanstack/react-query"
import React from "react"
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import axios from "axios"
import useAuth from "../../hooks/useAuth"
import Swal from "sweetalert2"
import { Helmet } from "react-helmet"

const BookNowPage = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const { data, isPending, error, isError } = useQuery({
        queryKey: ["services"],
        queryFn: () =>
            axios(`${import.meta.env.VITE_API_URL}/services/${id}`)
                .then((res) => {
                    // console.log(res.data)
                    return res.data
                })
                .catch((e) => {
                    console.log(e)
                }),
    })
    // console.log(data)
    const { imageUrl, serviceName, price, providerName, providerEmail } = data || {}

    if (isPending) return <Loading></Loading>

    if (isError || error)
        return (
            <div className="grid place-content-center bg-white px-4">
                <h1 className="uppercase tracking-widest text-gray-500">Something went wrong</h1>
                <p>{error.message}</p>
            </div>
        )

    const handleBookService = (e) => {
        e.preventDefault()
        const bookedData = {
            serviceId: id,
            serviceName,
            serviceImage: imageUrl,
            providerEmail,
            providerName,
            price,
            userEmail: user?.email,
            userName: user.displayName,
            serviceDate: e.target.serviceDate.value,
            instruction: e.target.instruction.value,
            status: "pending",
        }

        Swal.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Purchase!",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(bookedData)
                axios
                    .post(`${import.meta.env.VITE_API_URL}/all-bookings`, bookedData)
                    .then((res) => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            return Swal.fire({
                                title: "Successfully Purchased!",
                                // text: "Your file has been deleted.",
                                icon: "success",
                            })
                        }
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Book Now</title>
            </Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-xl font-semibold text-gray-700 mb-7 uppercase dark:text-white text-center">Book Service</h2>

                <form onSubmit={handleBookService}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Service ID</label>
                            <input
                                defaultValue={id}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Service Name</label>
                            <input
                                defaultValue={serviceName}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Service Image</label>
                            <input
                                defaultValue={imageUrl}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Provider Email</label>
                            <input
                                defaultValue={providerEmail}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Provider Name</label>
                            <input
                                defaultValue={providerName}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Current User Email</label>
                            <input
                                defaultValue={user?.email}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Current User Name</label>
                            <input
                                defaultValue={user.displayName}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="serviceDate">
                                Service Taking Date
                            </label>
                            <input
                                id="serviceDate"
                                type="date"
                                required
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="instructions">
                                Special Instruction
                            </label>
                            <textarea
                                id="specialInstructions"
                                name="instruction"
                                required
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            ></textarea>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Price</label>
                            <input
                                defaultValue={`${price}$`}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
                                readOnly
                            />
                        </div>
                    </div>
                    <div>
                        {/* <label className="text-gray-700 dark:text-gray-200">Purchase Button</label> */}
                        <button
                            type="submit"
                            className="block w-full px-8 py-2 mt-6 text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Purchase
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default BookNowPage
