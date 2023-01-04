import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "./HContact.css"
function HContact() {
    const [query,setQuery]=useState("")
    const [email,setemail]=useState("")
    const [cname,setCname]=useState("")
    const [phone,setPhone]=useState("")
    

    function handleinput(e){
    if(e.target.name==="query"){
        setQuery(e.target.value)
    }
    if(e.target.name==="email"){
        setemail(e.target.value)
    }
    if(e.target.name==="cname"){
        setCname(e.target.value)
    }
    if(e.target.name==="phone"){
        setPhone(e.target.value)
    }

    }
    const onsubmit=async()=>{
        
        // const data=new Date().toLocaleDateString()
        // Time:new Date().toLocaleTimeString()}]
        
        
        const resultresp=await axios.post("https://sheetdb.io/api/v1/vebsfk5upa3hw",{
             data:[{Name:cname,
                Email:email,
                Query:query,
                Contact:phone
            }]
               
        })
        console.log(resultresp)
    }

    return (
        <section id='hcontact' className='Home-contact'>
            <div class="hc-container1">
            <img className="rectangle-icon" alt="" src="../rectangle-43@2x.png" />
            </div>
            <div class="hc-container2">
                <div className='hc-container2-child'>
                <div class="hc-title">
                    <h2>Curious? In Doubt ? Need Help</h2>
                    <h2>Get in touch & Let us Help</h2>
                </div>
                <div>
            <div class="form-group">
                <input type="text" class="form-control" onChange={(e)=>handleinput(e)} name="cname" placeholder="Name" />
            </div>
            <div class="form-group">
                <input type="tel" class="form-control" onChange={(e)=>handleinput(e)} name="phone" maxlength="10" pattern="[1-9]{1}[0-9]{9}" placeholder="Phone no." />
            </div>
            
            <div class="form-group">
                <input type="email" class="form-control" onChange={(e)=>handleinput(e)} name="email"   aria-describedby="emailHelp" placeholder="Email" />
               
            </div>
            <div class="form-group">
                <textarea name="query" id="" cols="30" rows="5" placeholder="Write your query.." onChange={(e)=>handleinput(e)} ></textarea>
                
            </div>
           
            
            <button onClick={onsubmit}  class="btn btn-primary book-appointment" id="callback">Book Appointment</button>
        </div>

            
        </div>
            </div>
           
        </section>
    )
}

export default HContact


        //     <div className="heartcare-in-pocket-size-parent">
        //     <div className="heartcare-in-pocket-size">Heartcare in pocket size</div>
        //     <b className="impulse-121">Impulse-12</b>
        //     <div className="portable-ecg-monitor">{`Portable ECG Monitor. `}</div>
        // </div>
        // <div className="group-parent">
        //     <div className="rectangle-parent">
        //         <div className="group-inner" />
        //         
        //     </div>
        //     <div className="component-10">
        //         <div className="send-query">Send Query</div>
        //     </div>
        //     <div className="group-container">
        //         <div className="first-name-parent">
        //             <div className="first-name">First Name*</div>
        //             <div className="rectangle-div" />
        //         </div>
        //         <div className="last-name-parent">
        //             <div className="last-name">Last Name*</div>
        //             <div className="rectangle-div" />
        //         </div>
        //     </div>
        //     <div className="group-wrapper">
        //         <div className="email-id-parent">
        //             <div className="email-id">Email ID*</div>
        //             <div className="group-child2" />
        //         </div>
        //     </div>
        //     <div className="group-frame">
        //         <div className="email-id-parent">
        //             <div className="email-id">Your Query*</div>
        //             <div className="group-child2" />
        //         </div>
        //     </div>
        //     <div className="get-in-touch-let-us-help-parent">
        //         <div className="get-in-touch-let-us-help">{`Get in touch & Let us Help`}</div>
        //         <div className="curious-in-doubt-need-help">
        //             Curious? In Doubt? Need Help?
        //         </div>
        //     </div>
        // </div>