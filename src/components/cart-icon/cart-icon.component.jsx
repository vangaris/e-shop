import React from 'react'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'



import { ReactComponent as ShoppingIcon } from '../../assets/original.svg'

import './cart-icon.style.scss'

const CartIcon = ({ toggleCartHidden, cartItemCount }) => (

    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> {cartItemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItemCount: cartItems.reduce((accumulatorQuantity, cartItem) => (
        accumulatorQuantity + cartItem.quantity
    ), 0)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);