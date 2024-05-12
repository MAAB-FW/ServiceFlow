import React from "react"
import { Helmet } from "react-helmet"
import useAuth from "../../hooks/useAuth"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Loading from "../../components/Loading/Loading"
import EmptyServices from "../../components/EmptyServices/EmptyServices"
import { IoPricetags } from "react-icons/io5"

const BookedServices = () => {
    const { user } = useAuth()
    const {
        data = [],
        isPending,
        error,
        isError,
    } = useQuery({
        queryKey: ["booked-services"],
        queryFn: () =>
            axios(`${import.meta.env.VITE_API_URL}/all-bookings?email=${user?.email}`)
                .then((res) => {
                    // console.log(res.data)
                    return res.data
                })
                .catch((e) => {
                    console.log(e)
                }),
    })
    console.log(data)

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
                <title>Booked Services</title>
            </Helmet>
            <div>
                <h2 className="text-4xl font-bold text-[#6366f1] text-center">Booked Services</h2>
                <div className=" flex flex-col gap-6 my-10">
                    {data.length > 0 ? (
                        data?.map((card) => (
                            <div
                                key={card._id}
                                className="flex flex-col md:flex-row border rounded-xl md:rounded-xl bg-base-100 shadow-xl"
                            >
                                {/* <figure className="md:w-1/3"> */}
                                <img
                                    className="lg:h-80 md:w-2/5 rounded-t-xl md:rounded-r-none md:rounded-l-xl object-cover w-full"
                                    src={card.serviceImage}
                                />
                                {/* </figure> */}
                                <div className="md:w-3/5 p-6">
                                    <div className="flex gap-5 mb-2 items-center">
                                        <div className="flex flex-col gap-2">
                                            <p className="font-semibold">{card.providerName}</p>
                                            {/* <p className="font-mono">{card.providerEmail}</p> */}
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

                                    <div className="card-actions items-center justify-between">
                                        <p className="text-gray-700 my-4">
                                            <span className="text-[#010030] font-bold">Service Date:</span> {card.serviceDate}
                                        </p>
                                        <p className="font-medium text-gray-500">
                                            <span className="text-[#010030] font-bold">Status:</span> {card.status}
                                        </p>
                                    </div>
                                    <p>
                                        <span className="text-[#010030] font-bold">Instruction:</span> {card.instruction}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <EmptyServices name={{ name: "Bookings" }}></EmptyServices>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BookedServices
