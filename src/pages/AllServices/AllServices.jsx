import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Loading from "../../components/Loading/Loading"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { IoPricetags } from "react-icons/io5"
import EmptyServices from "../../components/EmptyServices/EmptyServices"

const AllServices = () => {
    const [text, setText] = useState("")
    // const [data, setData] = useState([])

    const {
        data = [],
        isPending,
        refetch,
        error,
        isError,
    } = useQuery({
        queryKey: ["services"],
        queryFn: () =>
            axios(`${import.meta.env.VITE_API_URL}/all-services?search=${text}`)
                .then((res) => {
                    // console.log(res.data)
                    return res.data
                })
                .catch((e) => {
                    console.log(e)
                }),
    })
    // console.log(data)

    // useEffect(() => {
    //     axios(`${import.meta.env.VITE_API_URL}/all-services?search=${text}`)
    //         .then((res) => {
    //             // console.log(res.data)
    //             return setData(res.data)
    //         })
    //         .catch((e) => {
    //             console.log(e)
    //         })
    // }, [text])

    const handleSearch = (text) => {
        console.log(text)
        // if (!text) setText(" ")
        refetch()
        setText(text)
    }

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
                <title>All Services</title>
            </Helmet>

            <div>
                <h2 className="text-4xl font-bold text-[#6366f1] text-center">All Services</h2>
                <div className="max-w-md mx-auto my-10">
                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        <input
                            onChange={(e) => handleSearch(e.target.value)}
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search something.."
                        />
                        {/* <button
                            type="submit"
                            className="text-white absolute end-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button> */}
                    </div>
                </div>
                <div className=" flex flex-col gap-6">
                    {data.length > 0 ? (
                        data?.map((card) => (
                            <div
                                key={card._id}
                                className="flex flex-col md:flex-row border hover:border-[#6366f1] rounded-xl md:rounded-xl bg-base-100 shadow-xl"
                            >
                                {/* <figure className="md:w-1/3"> */}
                                <img
                                    className="lg:h-80 md:w-2/5 rounded-t-xl md:rounded-r-none md:rounded-l-xl object-cover w-full"
                                    src={card.imageUrl}
                                />
                                {/* </figure> */}
                                <div className="md:w-3/5 p-6">
                                    <div className="flex gap-5 mb-2 items-center">
                                        <img
                                            className="size-14 border border-accent rounded-full"
                                            src={card.providerImage}
                                            alt=""
                                        />
                                        <div className="flex flex-col gap-2">
                                            <p className="font-semibold">{card.providerName}</p>
                                            <p className="text-gray-500">Service Provider</p>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between">
                                        <h2 className="card-title text-[#010030] text-2xl mb-2">{card.serviceName}</h2>
                                        <p className="flex items-center justify-end gap-3 text-lg text-success">
                                            <IoPricetags />
                                            {card.price}$
                                        </p>
                                    </div>
                                    <p className="text-gray-700 my-4">{card.description.slice(0, 97)}...</p>

                                    <div className="card-actions items-center justify-between">
                                        <p className="font-medium text-gray-500">
                                            <span className="text-[#010030] font-bold">Service Area:</span> {card.serviceArea}
                                        </p>
                                        <Link to={`/single-services/${card._id}`} className="btn bg-[#6366f1] text-white">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <EmptyServices name={{ name: "Services" }}></EmptyServices>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AllServices
