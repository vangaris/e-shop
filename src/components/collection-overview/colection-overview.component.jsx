import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import './colection-overview.component.style.scss'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';


const collectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...collectionProps }) => <CollectionPreview key={id} {...collectionProps} />)}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(collectionOverview)