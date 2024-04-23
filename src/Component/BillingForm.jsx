import React from 'react'
import { FaToolbox } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './billingForm.css'

const BillingForm = () => {
  return (
    <div>
        <nav className='Main-Container'>
            <div className='left-NavContainer' >
            <FaToolbox  className='toolConntainer'/>
            <span className='manage-class'>Manage Stock</span>
            </div>
            <div className='right-NavContainer'>
            <FaHeart className='heart-Class'/>
            <FaShoppingCart className='shoppingCart' />
            </div>
        </nav>
    </div>
  )
}

export default BillingForm