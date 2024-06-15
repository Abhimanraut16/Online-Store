import React from 'react'
import './treding.css'
// import { items } from '../Data'
import sailed from '../../image/products/appare1.jpg'
import { Trads } from '../../image/Products'

function Trending() {
    return (
        <div>
            <div className="trending">
                <div className="container">
                    <div className="wrapper">
                        <div className="sectop flexitem">
                            <h2><span className="circle" /><span>Trending Products</span></h2>
                        </div>
                        <div className="column">
                            <div className="flexwrap">
                                <div className="row products big">
                                    <div className="item">
                                        <div className="offer">
                                            <p>Offer ends at</p>
                                            <ul className="flexcenter">
                                                <li>1</li>
                                                <li>15</li>
                                                <li>27</li>
                                                <li>60</li>
                                            </ul>
                                        </div>
                                        <div className="media">
                                            <div className="thumbnail ">
                                                <a href="#">
                                                    <img src={sailed} alt />
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
                                            <div className="discount circle flexcenter"><span>31%</span></div>
                                        </div>
                                        <div className="content">
                                            <div className="rating">
                                                <div className="stars" />
                                                <span className="mini-text">(2,548)</span>
                                            </div>
                                            <h3 className="main-limks"><a href="#">Happy Sailed Womens Summer
                                                Boho Floral</a></h3>
                                            <div className="price">
                                                <span className="current">$129.99</span>
                                                <span className="normal mini-text">$189.99</span>
                                            </div>
                                            <div className="stock mini-text">
                                                <div className="qty">
                                                    <span>Stock: <strong className="qty-available">107</strong></span>
                                                    <span>Sold: <strong className="qty-sold">3,459</strong></span>
                                                </div>
                                                <div className="bar">
                                                    <div className="available" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row products mini">
                                    {
                                        Trads.map((Product) => {
                                            return (
                                                <>

                                                    <div key={Product.id} className="item">
                                                        <div className="media">
                                                            <div className="thumbnail " >
                                                                <a href="#">
                                                                    <img src={Product.imgSrc}/>
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
                                                            <div className="discount circle flexcenter"><span>32%</span></div>
                                                        </div>
                                                        <div className="content">
                                                            <h3 className="main-limks"><a href="#">
                                                                {
                                                                    Product.title
                                                                }
                                                            </a></h3>
                                                            <div className="rating">
                                                                <div className="stars" />
                                                                <span className="mini-text">(4,548)</span>
                                                            </div>
                                                            <div className="price">
                                                                <span className="current">$ {Product.price}</span>
                                                                <span className="normal mini-text">$289.99</span>
                                                            </div>
                                                            <div className="mini-text">
                                                                <p>3975 sold</p>
                                                                <p>Free Shipping</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending