import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"
import { Helmet } from "react-helmet"
import Loading from "../../components/Loading/Loading"
import { Link, useParams } from "react-router-dom"
import { IoPricetags } from "react-icons/io5"

const SingleServices = () => {
    const { id } = useParams()
    const { data, isPending, error, isError } = useQuery({
        queryKey: ["single-services"],
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
    const { imageUrl, serviceName, price, serviceArea, description, providerImage, providerName } = data || {}

    if (isPending) return <Loading></Loading>

    if (isError || error)
        return (
            <div className="grid place-content-center bg-white px-4">
                <h1 className="uppercase tracking-widest text-gray-500">Something went wrong</h1>
                <p>{error.message}</p>
            </div>
        )

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Single Service Details</title>
            </Helmet>
            <div className="my-24 bg-base-100 flex flex-col md:flex-row gap-7">
                <div className="md:w-2/3 border rounded-lg p-7">
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="card-title text-[#010030] text-2xl mb-3">{serviceName}</h2>
                            <p className="flex items-center justify-end gap-3 text-2xl text-success">
                                <IoPricetags />
                                {price}$
                            </p>
                        </div>
                        <div className="flex gap-5 mb-4 items-center">
                            <img className="size-10 border border-accent rounded-full" src={providerImage} alt="" />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">{providerName}</p>
                                {/* <p className="text-gray-500">Service Provider</p> */}
                            </div>
                        </div>
                    </div>
                    <figure className="mb-3">
                        <img className="md:h-80 rounded object-cover w-full" src={imageUrl} />
                    </figure>
                    <p className="text-gray-700">
                        <span className="font-semibold underline">Description:</span> {description}
                    </p>
                </div>
                <div className="md:w-1/3 flex flex-col-reverse md:flex-col gap-8">
                    <div className="flex flex-col items-center p-7 border rounded-lg w-full">
                        <h2 className="font-semibold mb-10">Service Provider Information</h2>
                        <div className="flex flex-col items-center gap-6">
                            <img className="size-40 rounded-full border" src={providerImage} alt="" />
                            <p className="font-semibold">{providerName}</p>
                            <p className="font-medium text-gray-500">
                                <span className="text-[#010030] font-bold">Service Area:</span> {serviceArea}
                            </p>
                        </div>
                    </div>
                    <Link to={`/book-now/${id}`} className="btn btn-success text-white">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleServices
