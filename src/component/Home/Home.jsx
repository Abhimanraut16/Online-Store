import React from 'react'
import './home.css'
import Trending from '../Trending/Trending'
import Feature from '../Features/Feature'
import Banner from '../Banner/Banner'
import Brands from '../Brands/Brands'
import slide from '../../image/slide/slid1.jpg'

function Home() {
    return (
        <div>
            <main>
                <div className="slider">
                    <div className="container">
                        <div className="wrapper">
                            <div className="myslider swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="image object-cover">
                                                <img src={slide} alt />
                                            </div>
                                            <div className="text-content flexcol">
                                                <h3>Shoes Fashion</h3>
                                                <h2><span>Come and Get it!</span><br /><span>Brand New Shoes</span></h2>
                                                <a href="#" className="primary-button">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Brands />
                <Trending />
                <Feature />
                <Banner />

            </main>

        </div>
    )
}

export default Home