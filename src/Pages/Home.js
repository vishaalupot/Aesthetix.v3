import React from 'react'
import AboutUs from '../components/MainPage/AboutUs/About';
import Partners from '../components/MainPage/Partner/Partners';
import Footer from '../components/MainPage/Footer/Footers';
import LandingPage from '../components/MainPage/LandingPage/LandingPage';


const Home = () => {
    return (
        <div>
            <LandingPage />
    <AboutUs />
    <Partners />
    <Footer />
        </div>
    )
}

export default Home