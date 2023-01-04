import React from 'react'
import "./Footer.css";
import {FaFacebookF ,FaLinkedinIn,FaSellsy,FaWhatsapp} from "react-icons/fa"
import {BsTwitter,BsWhatsapp} from "react-icons/bs"
import {CgFacebook} from "react-icons/cg"
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import {RxCross1} from "react-icons/rx"
import { useState } from 'react';
import UserWindow from '../UserWindow'
const Footer = () => {
  // we can also use single object state
  const [contact,setContact]=useState(false)
  const [overview,setOverview]=useState(false)
  const [product,setProduct]=useState(false)
  const [service,setService]=useState(false)
  const {dynamicWidth}=UserWindow()

  const showlink=(ct,ov,pr,sr)=>{
    
    setContact(ct)
    setOverview(ov)
    setProduct(pr)
    setService(sr)


    
  }

  
  return (
    <footer>
      <div class="ft-container1">
        <img src="./logofooter.svg" alt=""/>
        <div class="social-container">
          <p>follow us on</p>
          <div class="social-icons">
            <CgFacebook/>
            <FaLinkedinIn/>
            <BsTwitter/>
            <BsWhatsapp/>
          </div>
        </div>
        

      </div>
      <div class="ft-container2 list">
        <span>
          <p>Our Services</p>

          <button onClick={()=>showlink(false,false,false,!service)}>
            {service   ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
          
        </span>
        {(service || dynamicWidth >1000) && 
        <ul>
          <li><a href="">Covid Care</a></li>
          <li><a href="">Soul Care</a></li>
          <li><a href="">Heart Care</a></li>
          <li><a href="">Nutri Care</a></li>
          <li><a href="">Dental Care</a></li>
          <li><a href="">Eye Care</a></li>
        </ul>
        }
      </div>
      <div class="ft-container3 list">
        <span>
        <p>Our Products</p>
        <button onClick={()=>showlink(false,false,!product,false)}>{product ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </span>
        {(product || dynamicWidth >1000) &&
        <ul>
        <li><a href="">Covid Care</a></li>
        </ul>}
      </div>
      <div class="ft-container4 list">
        <span>
        <p>Overview</p>
        <button onClick={()=>showlink(false,!overview,false,false)}>{overview ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </span>
        {(overview || dynamicWidth >1000) && 
        <ul>
        <li><a href="">About Us</a></li>
        <li><a href="">Vision & Mission</a></li>
        <li><a href="">Our Team</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Terms of Use</a></li>
        </ul>
        }
      </div>
      <div class="ft-container5 list">
        {/* <img src="./newsletter.png" alt=""/> */}
        <div>
          <span>
          <p>Contact Us</p>
          <button onClick={()=>showlink(!contact,false,false,false)}>{contact ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
          </span>
          {(contact || dynamicWidth >1000) &&
          <ul>
          <li><a href="">Address</a></li>
          <li><a href="">Phone</a></li>
          </ul>}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
