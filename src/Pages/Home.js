import React from 'react'
import AboutUs from '../components/MainPage/AboutUs/About';
import Partners from '../components/MainPage/Partner/Partners';
import Footer from '../components/MainPage/Footer/Footers';
import LandingPage from '../components/MainPage/LandingPage/LandingPage';
import AboutAes from '../components/Company/AboutAesthetix/AboutAes';
import Culture from '../components/Company/Culture/Culture';


const Home = () => {
    return (
        <div>
            {/* <Culture /> */}
            {/* <AboutAes /> */}
            <LandingPage />
            <AboutUs />
            <Partners />
            <Footer />
        </div>
    )
}

export default Home