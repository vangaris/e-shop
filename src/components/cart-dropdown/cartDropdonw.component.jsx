import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import './cartDropdown.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'


import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? (cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            ) : (
                    <span className="empty-message"> your cart is empty </span>
                )}
        </div>
        <CustomButton onClick={() => { history.push('/checkout') }}>
            Go to check out
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))