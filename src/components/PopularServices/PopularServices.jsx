import React from "react"
import SingleServiceCard from "../SingleServiceCard/SingleServiceCard"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Loading from "../Loading/Loading"
import EmptyServices from "../../components/EmptyServices/EmptyServices"
import { Link } from "react-router-dom"

const PopularServices = () => {
    const {
        data = [],
        isPending,
        error,
        isError,
    } = useQuery({
        queryKey: ["popular-services"],
        queryFn: () =>
            axios(`${import.meta.env.VITE_API_URL}/all-services`)
                .then((res) => {
                    // console.log(res.data)
                    return res.data
                })
                .catch((e) => {
                    console.log(e)
                }),
    })
    // console.log(data)

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
    }

    shuffleArray(data)

    // if (isPending) return <Loading></Loading>

    if (isError || error)
        return (
            <div className="grid place-content-center bg-base-100 px-4">
                <h1 className="uppercase tracking-widest text-base-content opacity-80">Something went wrong</h1>
                <p>{error.message}</p>
            </div>
        )

    return (
        <div className="md:my-12">
            <div className="text-center ">
                <h2 className="text-3xl font-bold">Popular Services</h2>
                <p className="mt-3 w-[90%] md:w-2/3 mx-auto text-gray-500">
                    Explore our most sought-after offerings, designed to cater to your needs with precision and expertise. Benefit
                    from our commitment to quality, reliability, and customer satisfaction.
                </p>
            </div>
            <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                {isPending ? (
                    <div className="col-span-2">
                        <Loading></Loading>
                    </div>
                ) : data.length > 0 ? (
                    data?.slice(0, 6)?.map((card) => <SingleServiceCard key={card._id} card={card}></SingleServiceCard>)
                ) : (
                    <EmptyServices name={{ name: "Services" }}></EmptyServices>
                )}
            </div>
            <div className="flex justify-center">
                <Link to="/all-services" className="btn btn-info text-white">
                    Show All
                </Link>
            </div>
        </div>
    )
}

export default PopularServices
