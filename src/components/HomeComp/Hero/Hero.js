import React from 'react'
import yogap from "./yoga-person.png"

import "./Hero.css"
import UserWindow from '../../UserWindow'
function Hero() {
    const {dynamicWidth}=UserWindow()

    return (
        <>
            <header className="hero">
                <div class="hero-main-container">
                    {dynamicWidth < 700 ? 
                    <>
                    <img src='./herombl.svg'></img>
                    <a href="#hcontact"  class="btn-container">
                    <button class="hero-book">Book Appointment</button>
                    </a>
                    
                    </>
                    : 
                    <>
                    <div class="hero-container2">
                        <h1>We Exist</h1>
                        <h3>For Your Holistic Well-being</h3>
                        <p>Instamedz will help you find the healthier version of yourself. We concentrate on your diet, health and fitness, as a whole. Entrust us for your multidimensional wellness such as Physical care, Soul care, Nutritional care and Business care.</p>
                        <button class="explore-btn ">Explore</button>
                    </div>
                    <div class="hero-container1">
                        <img src="./Frame 223.svg" alt="yogaperson" />
                    </div></>
                    }
                </div>
            </header>
        </>
    )
}

export default Hero
