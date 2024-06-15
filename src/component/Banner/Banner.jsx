import React from 'react'
import './banner.css'
import banner1 from '../../image/banner/banner1.jpg'
import banner2 from '../../image/banner/banner2.jpg'

function Banner() {
    return (
        <div>
            <main>
                <div className="banners">
                    <div className="container">
                        <div className="wrapper">
                            <div className="column">
                                <div className="banner flexwrap">
                                    <div className="row">
                                        <div className="item">
                                            <div className="image thumbnail">
                                                <img src={banner1} alt width="400px" />
                                            </div>
                                            <div className="text-content flexcol">
                                                <h3>Brutal Sale</h3>
                                                <h4><span>Get the deal in here</span><br />Best Livi Room Table Flowers</h4>
                                                <a href="#" className="primary-button">Shop Now</a>
                                            </div>
                                            <a href="#" className="over-link" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="item">
                                            <div className="image thumbnail">
                                                <img src={banner2} alt width="400px" />
                                            </div>
                                            <div className="text-content flexcol">
                                                <h3>Brutal Sale</h3>
                                                <h2><span>Discount everyday</span><br />Office Outfit</h2>
                                                <a href="#" className="primary-button">Shop Now</a>
                                            </div>
                                            <a href="#" className="over-link" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Banner