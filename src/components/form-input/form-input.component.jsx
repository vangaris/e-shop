import React from 'react'

import './form-input.style.scss'

const FormInput = ({ label, handleChange, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} required />  {
            label ? (<label className={`${otherProps.value.lenght ? 'shrink' : ''} form-input-label`}> {label} </label>) : null
        }
    </div>
)

export default FormInput