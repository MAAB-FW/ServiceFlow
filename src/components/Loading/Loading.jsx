import React from "react"
import { PacmanLoader } from "react-spinners"

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center h-full">
                <PacmanLoader className="my-28" color="#6366f1" size={50} />
            </div>
        </div>
    )
}

export default Loading
