import React from 'react'

import './custom-button.style.scss'

const CustomButton = ({ children, isGoogleSignIn, invented, ...otherProps }) => (

    <button className={`${invented ? 'invented' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton