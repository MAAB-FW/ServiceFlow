import React from "react"
import SingleServiceCard from "../SingleServiceCard/SingleServiceCard"

const PopularServices = () => {
    return (
        <div className="my-12">
            <div className="text-center ">
                <h2 className="text-3xl font-bold">Popular Services</h2>
                <p className="mt-3 w-2/3 mx-auto">
                    Explore our most sought-after offerings, designed to cater to your needs with precision and expertise. Benefit
                    from our commitment to quality, reliability, and customer satisfaction.
                </p>
            </div>
            <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                <SingleServiceCard></SingleServiceCard>
                <SingleServiceCard></SingleServiceCard>
                <SingleServiceCard></SingleServiceCard>
            </div>
        </div>
    )
}

export default PopularServices
