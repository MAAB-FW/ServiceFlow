import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading/Loading"
// import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import Swal from "sweetalert2"
import toast from "react-hot-toast"
import useSecureAxios from "../../hooks/useSecureAxios"

const UpdateService = () => {
    const { id } = useParams()
    const secureAxios = useSecureAxios()

    const { data, isPending, refetch, error, isError } = useQuery({
        queryKey: ["update-service"],
        queryFn: () =>
            secureAxios(`/services/${id}`)
                .then((res) => {
                    // console.log(res.data)
                    return res.data
                })
                .catch((e) => {
                    console.log(e)
                }),
    })
    // console.log(data)
    const { imageUrl, serviceName, price, serviceArea, description } = data || {}

    if (isPending) return <Loading></Loading>

    if (isError || error)
        return (
            <div className="grid place-content-center bg-base-100 px-4">
                <h1 className="uppercase tracking-widest text-base-content opacity-80">Something went wrong</h1>
                <p>{error.message}</p>
            </div>
        )

    const handleUpdateService = (e) => {
        e.preventDefault()
        const form = e.target
        const imageUrl = form.imageUrl.value
        const serviceName = form.serviceName.value
        const price = form.price.value
        const serviceArea = form.serviceArea.value
        const description = form.description.value

        const singleService = {
            imageUrl,
            serviceName,
            price,
            serviceArea,
            description,
        }
        // console.log(singleService)
        Swal.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update!",
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxios
                    .patch(`/update-service/${id}`, singleService)
                    .then((res) => {
                        // console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            return Swal.fire({
                                title: "Service Updated Successfully!",
                                // text: "You clicked the button!",
                                icon: "success",
                            })
                        }
                    })
                    .catch((e) => {
                        console.log(e)
                        toast.error("An error Occurred!")
                    })
            }
        })
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Service</title>
            </Helmet>

            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-xl font-semibold text-gray-700 mb-7 uppercase dark:text-white text-center">Update Service</h2>

                <form onSubmit={handleUpdateService}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="imageUrl">
                                Image URL of the Service
                            </label>
                            <input
                                id="imageUrl"
                                type="url"
                                defaultValue={imageUrl}
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
                                defaultValue={serviceName}
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
                                defaultValue={price}
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
                                defaultValue={serviceArea}
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
                            defaultValue={description}
                            name="description"
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Update
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default UpdateService
