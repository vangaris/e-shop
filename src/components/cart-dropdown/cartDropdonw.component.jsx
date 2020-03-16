import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import './cartDropdown.style.scss'
import { connect } from 'react-redux'

import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton> Go to check out</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown)