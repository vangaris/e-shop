import React from 'react'
import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className="background-image" />
            <div className='content'>
                <h1 className='title'> {title.toUpperCase()} </h1>
                <span className="subtitle"> test</span>
            </div>
        </div>
    )
}

export default MenuItem