import React from "react"
import { Helmet } from "react-helmet"
import Banner from "../../components/Banner/Banner"
import PopularServices from "../../components/PopularServices/PopularServices"

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
        </div>
    )
}

export default Home
