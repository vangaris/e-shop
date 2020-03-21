import React from 'react'
import './directory.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {sections.map(({ id, ...sectionsProps }) => (
            <MenuItem key={id} {...sectionsProps} />
        ))}
    </div>)

const mapStateToPros = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToPros)(Directory)