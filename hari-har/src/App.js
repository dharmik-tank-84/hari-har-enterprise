import React from 'react'
import Navbar from './compponents/Navbar'
import Home from './compponents/Home'
import About from './compponents/About'
import Servies from './compponents/Servies'
import Contact from './compponents/Contact'
import Footer from './compponents/Footer'

const App = () => {
    return (
        <>
            <Navbar />
            <Home /> 
            <Servies />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default App
