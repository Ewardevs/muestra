import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Biografia from '../components/Biografia'
import Galery from '../components/Galery'
import Videos from '../components/Videos'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import ContactIcon from '../components/ContactIcon'

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Nav/>
            <Hero/>
            <Biografia/>
            <Galery/>
            <Videos/>
            <Cta/>
            <Footer/>
            <ContactIcon />
            
        </div>
    )
}
