import React from "react"
import { Helmet } from "react-helmet"
import Banner from "../../components/Banner/Banner"
import PopularServices from "../../components/PopularServices/PopularServices"
import Faq from "../../components/Faq/Faq"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import Support from "../../components/Support/Support"

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <NewsLetter></NewsLetter>
            <Faq></Faq>
            <Support></Support>
        </div>
    )
}

export default Home
