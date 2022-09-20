import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const cartItems = useSelector((state)=>state.cart)
    return (
        <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between' }}>
            <span>Redux Store</span>
            <div>
                <Link className="navLink" to='/' >Home</Link>
                <Link className="navLink" to='/cart' >Cart</Link>
                <span className="cartCount" > Cart Items : {cartItems.length} </span>
            </div>
        </div>
    )
}

export default Navbar