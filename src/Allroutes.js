import React from 'react'
import { Route,Routes } from 'react-router-dom'
// import Consult from './pages/Consult/Consult'
// import Cube from './pages/Cube/Cube'

import Home from './pages/Home/homepage'
// import Impulse from './pages/Impulse/Impulse'


function Allroutes() {
  return (
     <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        {/* <Route path="/consult-page" element={<Consult></Consult>}> </Route>
        <Route path="/impulse-page" element={<Impulse/>}> </Route>
        <Route path="/cube" element={<Cube/>}> </Route> */}

    </Routes>
  )
}

export default Allroutes