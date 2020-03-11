import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import './cartDropdown.style.scss'

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-item" />
        <CustomButton> Go to check out</CustomButton>
    </div>
)

export default CartDropdown