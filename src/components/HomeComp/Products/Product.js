import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Product.css"
function Product() {
  const navigate=useNavigate()
  function handleclick(){
      navigate("/impulse-page")
  }
  return (
    <section  id='products'  className='home-products'>
      <div class="service-title product-title">
        <h1>Our Products</h1>
        <div class="underline"></div>
      </div>
      <div class="prod-mblcontainer">
        <img src="./hasset/hmdevice.svg" alt=""/>
      </div>
      <div className='home-products-main-container'>
        <div class="homep-container1">
          <div class="img-container">
            <img className='stethoscopeimg'  src="./rectangle-41.png" alt=""/>
            <div class="img-footer">
              <img className='img1' src="./heartimpulse.png" alt=""/>
              <p>Impulse-12</p>
              <img  className='img2' src="./doctorcard.png" alt=""/>
            </div>
          </div>
        </div>
        <div class="homep-container2">
          <h3>Portable 12-Channel ECG Machine to monitor your heart health</h3>
          <ul className='app1-service-list'>
          <li>
            <img className="elstar-alt-icon" alt="" src="../heart-vector.svg" />
            Simultaneous Acquisition of all the  12-Channel
          </li>
          <li>
            <img className="elstar-alt-icon" alt="" src="./heart-vector.svg" />
            Low Cost,Portable And Compact
          </li>
          <li>
            <img className="elstar-alt-icon" alt="" src="./heart-vector.svg" />
            Auto Report Interpretation 24*7
          </li>
        </ul>
        <button class="explore-card-btn " onClick={handleclick}>explore</button>

        </div>
      </div>





    </section>




  )
}

export default Product

{/* <se className="care-parent">
<div className="care">
  <div className="our-products1">Our Products</div>
</div>
<div className="card-parent">
  <div className="card" />
  <div className="photo">
    <img className="photo-child" alt="" src="../rectangle-41@2x.png" />
  </div>
  <div className="card-title">
    <div className="card-title-child" />
    <div className="impulse-122">Impulse-12</div>
  </div>
  <div className="portable-12-lead-ecg-machine-t">
    Portable 12-Lead ECG Machine to monitor your heart health with
    convenience
  </div>
  <div className="explore-button">
    <div className="explore">Explore</div>
  </div>
</div>
<div className="card-group">
  <div className="card" />
  <div className="photo">
    <img className="photo-child" alt="" src="../rectangle-411@2x.png" />
  </div>
  <div className="card-title">
    <div className="card-title-child" />
    <div className="prograin1">ProGrain</div>
  </div>
  <div className="portable-12-lead-ecg-machine-t">{`A crossover of Purple & Blue wheat. Rich in essential amino acids, fibers, vitamins and minerals, it is a perfect suppliment`}</div>
  <div className="explore-button">
    <div className="explore">Explore</div>
  </div>
</div>
</section> */}