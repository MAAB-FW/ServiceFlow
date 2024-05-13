import React from "react"
import { FadeLoader } from "react-spinners"
import PropTypes from "prop-types"

const Loading = ({ status }) => {
    return (
        <div className={`flex justify-center items-center ${status && "h-screen"}`}>
            <FadeLoader className="my-28" color="#6366f1" size={50} />
        </div>
    )
}

export default Loading

Loading.propTypes = {
    status: PropTypes.bool,
}
