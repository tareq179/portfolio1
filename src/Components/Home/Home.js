import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Navbar from '../Navber/Navbar'
import Prices from '../Prices/Prices'
import Services from '../Services/Services'

function Home() {
    return (
        <div>
            <Banner/>
            <Services/>
            <About/>
            <Prices/>
            <Contact/>
        </div>
    )
}

export default Home
