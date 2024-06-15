import React from 'react'
import './brand.css'
import brand from '../../image/brand logo/acer.png'
import brand1 from '../../image/brand logo/dg.jpg'
import brand2 from '../../image/brand logo/hurley.png'
import brand3 from '../../image/brand logo/samsung.png'
import brand4 from '../../image/brand logo/vivo.png'
import brand5 from '../../image/brand logo/zaera.png'

function Brands() {
    return (
        <div>
            <main>

                <div className="brands">
                    <div className="container">
                        <div className="wrapper flexitem">
                            <div className="item">
                                <a href="#">
                                    <img src={brand} alt height="100px" width="100px" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src={brand1} alt width="100px" height="80px" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src={brand2} alt width="100px" height="70px" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src={brand3} alt=" " width="100px" height="80px" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src={brand4} width="100px" height="70px" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img src={brand5} width="100px" height="70px" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Brands