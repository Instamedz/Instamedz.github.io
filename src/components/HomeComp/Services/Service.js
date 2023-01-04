import React from 'react'
import "./Service.css"
import data from "./data2"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
function Service() {
  return (
    <section id="services" class="service">
      <div class="service-title">
        <h1>Our Services</h1>
        <div class="underline"></div>
      </div>
      <div class="allcard-container">
      <AiOutlineLeft className='sv-arrow sal'/>
        {
          data.map((item) => (

            // const {imgl,title,text}=item;
            
            
            <div className="card-container">
              
              <a href="">

                <img id="svsmall"  src={item.small} alt=""/>
                <img id="svbig"  src={item.big} alt=""/>
              </a>
              
            </div>
            
            
          ))
        }
      <AiOutlineRight className='sv-arrow sar'/>
      </div>
    </section>
  )
}

export default Service


{/*     <div class="img-card-container">
                
                <img className="photo-child" alt="eye-care" src={item.photo} />
                
              </div>
              <div class="card-container2">
              <div className="card-title">
                  <h3>{item.title}</h3>
              </div>
                <p className="card-text">
                  {item.text}
                </p>
                <button class="explore-card-btn">explore</button>
              </div> */}