import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"
import { Helmet } from "react-helmet"
import Loading from "../../components/Loading/Loading"
import EmptyServices from "../../components/EmptyServices/EmptyServices"
import { Link } from "react-router-dom"
import { IoPricetags } from "react-icons/io5"
import useAuth from "../../hooks/useAuth"
import Swal from "sweetalert2"

const ManageServices = () => {
    const { user } = useAuth()
    const {
        data = [],
        isPending,
        refetch,
        error,
        isError,
    } = useQuery({
        queryKey: ["manage-services"],
        queryFn: () =>
            axios(`${import.meta.env.VITE_API_URL}/all-services?email=${user?.email}`)
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
        mutationFn: ({ id }) => {
            axios
                .delete(`${import.meta.env.VITE_API_URL}/delete-service/${id}`)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.deletedCount > 0) {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Service has been deleted.",
                            icon: "success",
                        })
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        },
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                mutate({ id })
            }
        })
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
                <title>Manage Services</title>
            </Helmet>
            <div>
                <h2 className="text-4xl font-bold text-[#6366f1] text-center">Manage Services</h2>
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
                                        <div className="flex gap-6">
                                            <Link to={`/update-service/${card._id}`} className="btn btn-warning text-black">
                                                Update
                                            </Link>
                                            <button onClick={() => handleDelete(card._id)} className="btn btn-error text-white">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <EmptyServices></EmptyServices>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ManageServices
