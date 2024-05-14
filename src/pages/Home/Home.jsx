import React from "react"
import { Helmet } from "react-helmet"
import Banner from "../../components/Banner/Banner"
import PopularServices from "../../components/PopularServices/PopularServices"
import Faq from "../../components/Faq/Faq"
import NewsLetter from "../../components/NewsLetter/NewsLetter"

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <Faq></Faq>
            <NewsLetter></NewsLetter>
        </div>
    )
}

export default Home
