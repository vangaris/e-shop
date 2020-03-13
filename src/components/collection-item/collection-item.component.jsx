import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import './collection-item.style.scss'
import CustomButton from './../custom-button/custom-button.component'

const CollectionItem = ({ id, name, price, imageUrl, addItem }) => (
    <div className="collection-item">
        <div className='image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="collection-footer">
            <span className='name'> {name}</span>
            <span className="price"> {price}</span>
        </div>
        <CustomButton invented >Add to Cart</CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)