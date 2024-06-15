import React from 'react'
import './feature.css'
import { items } from '../Data'

function Feature() {
    return (
        <div>
            <main>
                <div className="features">
                    <div className="container">
                        <div className="wrapper">
                            <div className="column">
                                <div className="sectop flexitem">
                                    <h2><span className="circle" /><span>Featured products</span></h2>
                                    <div className="second-links">
                                        <a href="#" className="view-all">View All<i className="ri-arrow-right-line" /></a>
                                    </div>
                                </div>
                                <div className="products main flexwrap">
                                    {
                                        items.map((Product) => {
                                            return (

                                                <div className="item">
                                                    <div className="media">
                                                        <div className="thumbnail object-cover">
                                                            <a href="#">
                                                                <img src={Product.image} alt />
                                                            </a>
                                                        </div>
                                                        <div className="hoverable">
                                                            <ul>
                                                                <li className="active"><a href="#"><i className="ri-heart-line" /></a>
                                                                </li>
                                                                <li><a href><i className="ri-eye-line" /></a></li>
                                                                <li><a href><i className="ri-shuffle-line" /></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="discount circle flexcenter"><span>25%</span></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="rating">
                                                            <div className="stars" />
                                                            <span className="mini-text">(1,548)</span>
                                                        </div>
                                                        <h3 className="main-limks"><a href="#">{Product.title}
                                                        </a></h3>
                                                        <div className="price">
                                                            <span className="current">$59.99</span>
                                                            <span className="normal mini-text">$90.99</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Feature