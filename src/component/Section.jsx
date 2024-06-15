import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Shop from './Nav/Shop'
import Women from './Nav/Women'
import Men from './Nav/Men'
import Sports from './Nav/Sports'
// import ProductDetail from './ProductDetail'

function Section() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/women' element={<Women />} />
                <Route path='/men' element={<Men />} />
                <Route path='/sports' element={<Sports />} />
                {/* <Route path='/product/:id' element={<ProductDetail />} /> */}


                {/* <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Sho />} />
      <Route path="/address" element={<Address />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/student" element={<Students />} />
      <Route path="/student-card" element={<Student_card />} />
      <Route path="/view" element={<View />} />

      

      <Route path="/student-all-detail/:stdID" element={<Student_all_detail />} />
      <Route path="/*" element={<Page_not_found />} /> */}
            </Routes>

        </div>
    )
}

export default Section