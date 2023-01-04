import React from 'react'
import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from 'react'
import "./Navbar.css"
import UserWindow from '../UserWindow'
function Navbar() {
  const [showlink,setShowlink]=useState(false)
  const {dynamicWidth}=UserWindow()
  // console.log(dynamicWidth)
  function menuClick(){
  //   const links = getElementbyClassName('.nav-links')
    // links.classList.toggle("show-links")
  }
  return (
    <nav className="navbar" >
      <div class="nav-center">
        {/* use anchor tag with logo */}
        <div class="nav-container1">
          <Link to="/" className="nav-item nav-logo" id="nav-logo" >
            <img src="./instamedz-nav-logo.png" alt="instalogo" />
          </Link>
          <div class="navc1-child">
            <form>
              <  BsSearch class="s-input-icon" />
              <input type="text" className="input-bar" placeholder="Search ..." />
            </form>
            <button type="button" onClick={()=>setShowlink(!showlink)} id='menu-btn' class="link-btn">
              <AiOutlineMenu />
            </button>
          </div>

        </div>
        {
          (showlink || dynamicWidth > 1200)  && 
        <div class="nav-container2">
          <div class="nav-links">
            <a href="#services" className="nav-item nav-btn">Services</a>
           
            <a href="#products" className="nav-item nav-btn">Products</a>
            <a href="" className="nav-item nav-btn">About</a>
            <a href="" className="nav-item nav-btn">Contact</a>
            {/* <a href="#signin" className="nav-item nav-btn">Signin</a> */}
            <a href='#' className="nav-item nav-btn" id='nav-signin' >
              {/* <Link to="" className="nav-item nav-btn" id='signin-btn'>Signin</Link> */}
              <img className="user-menu-icon" alt="" src="./user-menu.svg" />
            </a>
          </div>
        </div>
        }


      </div>
    </nav>
  )
}

export default Navbar
