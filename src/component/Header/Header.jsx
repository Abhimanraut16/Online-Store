import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <header>
                <div className="header-nav">
                    <div className="container">
                        <div className="wrapper flexitem">
                            <a href="#" className="trigger desktop-hide"><span className="i ri-menu-2-line" /></a>
                            <div className="left flexitem">
                                <div className="logo"><a href="/"><span className="circle" />.Store</a></div>
                                <nav className="mobile-hide">
                                    <ul className="flexitem second-links">
                                        <Link to={'/'}><a to="/">Home</a></Link>
                                        <Link to={'/shop'}><a to="/shop">Shop</a></Link>
                                        <li className="has-child">
                                            
                                            <Link to={'/women'}>Women
                                                <div className="icon-small"><i className="ri-arrow-down-s-line" /></div>
                                            </Link>
                                            <div className="mega">
                                                <div className="container">
                                                    <div className="wrapper">
                                                        <div className="flexcol">
                                                            <div className="row">
                                                                <h4>Women's Clothing</h4>
                                                                <ul>
                                                                    <li><a href="#">Dresses</a></li>
                                                                    <li><a href="#">Tops &amp; Tees</a></li>
                                                                    <li><a href="#">Jackets &amp; Coats</a></li>
                                                                    <li><a href="#">Pants &amp; Capris</a></li>
                                                                    <li><a href="#">Sweaters</a></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="flexcol">
                                                            <div className="row">
                                                                <h4>Jewelry</h4>
                                                                <ul>
                                                                    <li><a href="#">Accessories</a></li>
                                                                    <li><a href="#">Bags &amp; Purses</a></li>
                                                                    <li><a href="#">Necklaces</a></li>
                                                                    <li><a href="#">Rings</a></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="flexcol">
                                                            <div className="row">
                                                                <h4>Beuty</h4>
                                                                <ul>
                                                                    <li><a href="#">Both Accessories</a></li>
                                                                    <li><a href="#">Makeup &amp; Cosmetics</a></li>
                                                                    <li><a href="#">Skin Care</a></li>
                                                                    <li><a href="#">Hair Care</a></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="flexcol">
                                                            <div className="row">
                                                                <h4> Top Brands</h4>
                                                                <ul className="women-brands">
                                                                    <li><a href="#">Nike</a></li>
                                                                    <li><a href="#">Louis Vuitton</a></li>
                                                                    <li><a href="#">Hermes</a></li>
                                                                    <li><a href="#">Gucci</a></li>

                                                                </ul>
                                                                <a href="#" className="view-all">View all Brands <i className="ri-arrow-right-line" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="flexcol products">
                                                            <div className="row">
                                                                <div className="media">
                                                                    <div className="thumbnail object-cover">
                                                                        <a href="#">
                                                                            <img src="image/products/appare4.jpg" alt height="250px" width="200px" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="text-content">
                                                                    <h4>Most Wanted</h4>
                                                                    <a href="#" className="primary-button order">Order</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link to={'/men'}>Men</Link></li>
                                        <li>
                                            <Link to={'/sports'}>Sports
                                                <div className="fly-item"><span>New!</span></div>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="right">
                                <ul className="flexitem second-links">
                                    <li className="mobile-hide"><a href="#">
                                        <div className="icon-large"><i className="ri-heart-line" /></div>
                                        <div className="fly-item"><span className="item-number">0</span></div>
                                    </a></li>
                                    <li><a href="#" className="iscart">
                                        <div className="icon-large">
                                            <i className="ri-shopping-cart-line" />
                                            <div className="fly-item"><span className="item-number">0</span></div>
                                        </div>
                                        <div className="icon-text">
                                            <div className="mini-text">Total</div>
                                            <div className="cart-total">$0.00</div>
                                        </div>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

        </div>
    )
}

export default Header