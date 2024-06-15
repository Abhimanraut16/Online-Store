import React from 'react'
import './sidemenu.css'

function SIdeMenu() {
    return (
        <div>
            <header>
                <div className="header-main mobile-hide">
                    <div className="container">
                        <div className="wrapper flexitem">
                            <div className="left">
                                <div className="dpt-cat">
                                    <div className="dpt-head">
                                        <div className="main-text">All Departments</div>
                                        <div className="main-text mobile-hide">Total 1059 Products</div>
                                        <a href="#" className="dpt-trigger mobile-hide">
                                            <i className="ri-menu-3-line ri-xl" />
                                        </a>
                                    </div>
                                    <div className="dpt-menu">
                                        <ul className="second-links">
                                            <li className="has-child beauty">
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-bear-smile-line" /></div>
                                                    Beuty
                                                    <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                                                </a>
                                                <ul>
                                                    <li><a href="#">Makeup</a></li>
                                                    <li><a href="#">Skin Care</a></li>
                                                    <li><a href="#">Hair Care</a></li>
                                                    <li><a href="#">Fragrances</a></li>
                                                    <li><a href="#">Foot &amp; Hand Care</a></li>
                                                    <li><a href="#">Tools &amp; Accessories</a></li>
                                                    <li><a href="#">Shave &amp; Hair Removal</a></li>
                                                    <li><a href="#">Personal Care</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-child electronic">
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-bluetooth-connect-line" /></div>
                                                    Electronic
                                                    <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                                                </a>
                                                <ul>
                                                    <li><a href="#">Camera </a></li>
                                                    <li><a href="#">Cell Phones</a></li>
                                                    <li><a href="#">Computers</a></li>
                                                    <li><a href="#">GPS &amp; Navigation</a></li>
                                                    <li><a href="#">Headphones</a></li>
                                                    <li><a href="#">Television</a></li>
                                                    <li><a href="#">Video Projectors</a></li>
                                                    <li><a href="#">wearable Technology</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-child fashion">
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-t-shirt-air-line" /></div>
                                                    Women's Fashion
                                                    <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                                                </a>
                                                <ul>
                                                    <li><a href="#">Clothing</a></li>
                                                    <li><a href="#">Shoes</a></li>
                                                    <li><a href="#">Jewelry</a></li>
                                                    <li><a href="#">Watches</a></li>
                                                    <li><a href="#">Handbags</a></li>
                                                    <li><a href="#">Accessories</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-shirt-line" /></div>
                                                    men's fashion
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-user-5-line" /></div>
                                                    Girl's fashion
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-user-6-line" /></div>
                                                    Boy's Fashion
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-heart-pulse-line" /></div>
                                                    Health &amp; Household
                                                </a>
                                            </li>
                                            <li className="has-child homekit">
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-home-8-line" /></div>
                                                    Home &amp; Kitchen
                                                    <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                                                </a>
                                                <div className="mega">
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4><a href="#">Kitchen &amp; Dining</a></h4>
                                                            <ul>
                                                                <li><a href="#">Kitchen</a></li>
                                                                <li><a href="#">Dining Room</a></li>
                                                                <li><a href="#">Pantry</a></li>
                                                                <li><a href="#">Great Room</a></li>
                                                                <li><a href="#">Breakfast Nook</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="row">
                                                            <h4><a href="#">Living</a></h4>
                                                            <ul>
                                                                <li><a href="#">Living Room</a></li>
                                                                <li><a href="#">Family Room</a></li>
                                                                <li><a href="#">Sunroom</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4><a href="#">Bed &amp; Bath</a></h4>
                                                            <ul>
                                                                <li><a href="#">BedRoom</a></li>
                                                                <li><a href="#">Powder Room</a></li>
                                                                <li><a href="#">Bathroom</a></li>
                                                                <li><a href="#">Storage &amp; closet</a></li>
                                                                <li><a href="#">Baby &amp; Kids</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="row">
                                                            <h4><a href="#">Utility</a></h4>
                                                            <ul>
                                                                <li><a href="#">Laundry</a></li>
                                                                <li><a href="#">Garage</a></li>
                                                                <li><a href="#">Mudroom</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4><a href="#">Outdoor</a></h4>
                                                            <ul>
                                                                <li><a href="#">Landscape</a></li>
                                                                <li><a href="#">Patio</a></li>
                                                                <li><a href="#">Deck</a></li>
                                                                <li><a href="#">Pool</a></li>
                                                                <li><a href="#">Backyard</a></li>
                                                                <li><a href="#">Porch</a></li>
                                                                <li><a href="#">Exterior</a></li>
                                                                <li><a href="#">Outdoor Kitchen</a></li>
                                                                <li><a href="#">Front Yard</a></li>
                                                                <li><a href="#">Driveway</a></li>
                                                                <li><a href="#">Poolhouse</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-android-line" /></div>
                                                    Pet Supplies
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-basketball-line" /></div>
                                                    Sports
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="icon-large"><i className="ri-shield-star-line" /></div>
                                                    Best Seller
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="search-box">
                                    <form action className="search">
                                        <span className="icon-large"><i className="ri-search-line" /></span>
                                        <input type="search" placeholder="Search for products" />
                                        <button type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default SIdeMenu