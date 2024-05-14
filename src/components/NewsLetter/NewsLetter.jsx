import React from "react"

const NewsLetter = () => {
    return (
        <div className="bg-[#111827] h-96 rounded-3xl text-center flex flex-col gap-10 justify-center my-14 overflow-hidden">
            <div className="flex flex-col gap-2 w-[90%] mx-auto">
                <h2 className="text-base-100 text-2xl md:text-4xl font-bold">Get notified when new service available.</h2>
                <p className="md:text-lg text-[#d1d5db] md:max-w-xl mx-auto">
                    Subscribe to our newsletter and stay in the loop with the latest updates, promotions, and news from
                    ServiceFlow.
                </p>
            </div>
            <div className="relative">
                <div className="flex justify-center gap-4 z-50">
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required=""
                        className="w-1/2 md:w-1/4 py-2 px-4 h-10 bg-[#ffffff0d] border-[rgb(107,114,128)] rounded-md placeholder:text-sm placeholder:text-[rgb(107,114,128)] text-white "
                        placeholder="Enter your email"
                    />
                    <button className="px-4 py-2 bg-white rounded-md font-medium">Notify me</button>
                </div>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute -top-10 pointer-events-none opacity-60 md:opacity-100"
                    aria-hidden="true"
                >
                    <circle
                        cx="512"
                        cy="512"
                        r="512"
                        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                        fillOpacity="0.7"
                    ></circle>
                    <defs>
                        <radialGradient
                            id="759c1415-0410-454c-8f7c-9a820de03641"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(512 512) rotate(90) scale(512)"
                        >
                            <stop stopColor="#7775D6"></stop>
                            <stop offset="1" stopColor="#E935C1" stopOpacity="0"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default NewsLetter
