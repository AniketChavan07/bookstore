import React from 'react'
import Footer from './Footer';
import Section from './Section';
import Dash from './Dash';
import Header from './Header';
import Signup from './Signup';


function Home() {
    return (
        <div>
            <Header />
            <Dash />
            <div className="const">
                <Section />
                
                <Footer />

            </div>

        </div>
    )
}

export default Home
