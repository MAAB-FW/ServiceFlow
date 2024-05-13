import React from "react"
import { Helmet } from "react-helmet"
import EmptyServices from "../../components/EmptyServices/EmptyServices"
import Loading from "../../components/Loading/Loading"
import axios from "axios"
import { useMutation, useQuery } from "@tanstack/react-query"
import useAuth from "../../hooks/useAuth"

const ServiceToDo = () => {
    const { user } = useAuth()
    const {
        data = [],
        isPending,
        refetch,
        error,
        isError,
    } = useQuery({
        queryKey: ["service-to-do"],
        queryFn: () =>
            axios(`${import.meta.env.VITE_API_URL}/all-bookings-s-to-do?email=${user?.email}`)
                .then((res) => {
                    // console.log(res.data)
                    return res.data
                })
                .catch((e) => {
                    console.log(e)
                }),
    })
    // console.log(data)

    const { mutate } = useMutation({
        mutationFn: ({ status, id }) => {
            console.log(status)
            axios
                .patch(`${import.meta.env.VITE_API_URL}/all-bookings-s-to-do/${id}`, { status })
                .then((res) => {
                    console.log(res.data)
                    refetch()
                    // if (res.data.deletedCount > 0) {
                    // }
                })
                .catch((e) => {
                    console.log(e)
                })
        },
    })

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
                <title>Service To Do</title>
            </Helmet>
            <div>
                <h2 className="text-4xl font-bold text-[#6366f1] text-center">Service To Do</h2>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        {/* <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                            Our products
                            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                                Browse a list of Flowbite products designed to help you work and play, stay organized, get
                                answers, keep in touch, grow your business, and more.
                            </p>
                        </caption> */}
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Service name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Service Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    instruction
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data?.map((card) => (
                                    <tr key={card._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {card.serviceName}
                                        </th>
                                        <td className="px-6 py-4">{card.price}</td>
                                        <td className="px-6 py-4">{card.userName}</td>
                                        <td className="px-6 py-4">{card.serviceDate}</td>
                                        <td className="px-6 py-4 ">{card.instruction}</td>
                                        <td className="px-6 py-4 ">
                                            <select
                                                onChange={(e) => {
                                                    // console.log("changed", e.target.value)
                                                    mutate({ status: e.target.value, id: card._id })
                                                }}
                                                name=""
                                                id=""
                                                className={`select select-bordered font-semibold *:font-semibold
                                                ${card.status === "pending" && "text-red-500"}
                                                ${card.status === "working" && "text-yellow-500"}
                                                ${card.status === "completed" && "text-green-500"}`}
                                                defaultValue={card.status}
                                            >
                                                <option className="text-red-500" value="pending">
                                                    pending
                                                </option>
                                                <option className="text-yellow-500" value="working">
                                                    working
                                                </option>
                                                <option className="text-green-500" value="completed">
                                                    completed
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <EmptyServices name={{ name: "Bookings" }}></EmptyServices>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ServiceToDo
