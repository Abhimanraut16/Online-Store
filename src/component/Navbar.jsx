import React from 'react'
import "./scss/navber/navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={'/'} className="brand">ITTI</Link>
          <div className="search-bar">
            <input type="text" placeholder='Search Products' />
          </div>
          <Link to={'/cart'} className="cart">Cart</Link>
        </div>
        <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div className="items">No Filter</div>
          <div className="items">Mobiles</div>
          <div className="items">Laptops</div>
          <div className="items">Tablets</div>
          <div className="items">{">="}29999</div>
          <div className="items">{">="}49999</div>
          <div className="items">{">="}59999</div>
          <div className="items">{">="}69999</div>

        </div>
      </header>
    </div>
  )
}

export default Navbar