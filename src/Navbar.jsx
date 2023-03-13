import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <span>Reduc Toolkit</span>

        <div style={{display:'flex', alignItem:'space-between' , padding:'10px'}} className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/cartCount">Cart item: 0</Link>
        </div>
    </div>
  )
}

export default Navbar