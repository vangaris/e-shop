import React from 'react'
import './checkout.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

const CheckoutPage = ({ cartiItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span> Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartiItems.map(item => <h1> {item.name}</h1>)}
        <div>
            <div className="total">TOTAL:{total} </div>
        </div>
    </div>
)

const stateToProps = createStructuredSelector({
    cartiItems: selectCartItems,
    total: selectCartTotal
})

export default connect(stateToProps)(CheckoutPage)