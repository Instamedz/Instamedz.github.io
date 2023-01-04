import React from 'react'
import "./appointment1.css"
import {Link, useNavigate} from "react-router-dom"
function AppointService() {

  const navigate=useNavigate()
  function handleclick(){
    console.log("here clicked")
    navigate("/consult-page")
  }
  return (
    <section class="appointment">

      <div className="vector-container1">
        <img className="vector-icon" alt="" src="../eggvector.svg" />
        <img
          className="online-doctor"
          alt=""
          src="../online-doctorrafiki-1@2x.png"
        />
      </div>
      <div class="vector-submain">
      <article className='vector-container2'>
        <div class="vc2">
        <h1>At Your Quick & Easy Service. 24/7</h1>
        <h3>Skip the hospital waiting queue <br />Get Convenient Healthcare. Any Time, Any Place.</h3>
        <ul className='app1-service-list'>
          <li>
            <img className="elstar-alt-icon" alt="" src="../elstaralt.svg" />
            Find the Specialists in your area
          </li>
          <li>
            <img className="elstar-alt-icon" alt="" src="../elstaralt.svg" />
            Book Appointment any time
          </li>
          <li>
            <img className="elstar-alt-icon" alt="" src="../elstaralt.svg" />
            Get Support for the appointment
          </li>
        </ul>
        <button onClick={handleclick} className='book-appointment'>
          Book Appointment
        </button>
        </div>
      </article>

      <div className="vector-container3">
        <img className="frame-item" alt="" src="../group-191.svg" />
      </div>
      </div>





    </section>

  )
}

export default AppointService
