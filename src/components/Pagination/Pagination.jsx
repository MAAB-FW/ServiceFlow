// import axios from "axios"
// import React, { useEffect, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Pagination = (data) => {
    const { currentPage, setCurrentPage, itemPerPage, length } = data
    // const [length, setLength] = useState(0)
    const numberOfPages = Math.ceil(length / itemPerPage)
    const pages = [...Array(numberOfPages).keys()]

    // useEffect(() => {
    //     axios(`${import.meta.env.VITE_API_URL}/pagination-services`)
    //         .then((res) => {
    //             // console.log(res.data.count)
    //             setLength(res.data.count)
    //         })
    //         .catch((e) => {
    //             console.log(e)
    //         })
    // }, [currentPage])

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{currentPage + 1}</span> of{" "}
                        <span className="font-medium">{pages.length} </span>
                        {/* of <span className="font-medium">97</span>  */}
                        results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 0}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                        >
                            <span className="sr-only">Previous</span>
                            <pre></pre>
                            <IoIosArrowBack />
                            {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </button>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {pages.map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                aria-current="page"
                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 
                                ${currentPage === page ? "text-white bg-indigo-600" : "hover:bg-gray-50"}`}
                            >
                                {page + 1}
                            </button>
                        ))}
                        {/* <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                            ...
                        </span> */}
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === pages.length - 1}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                        >
                            <span className="sr-only">Next</span>
                            <IoIosArrowForward />
                            {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination
