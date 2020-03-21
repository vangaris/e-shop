import React from 'react'

import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/colection-overview.component'
import Collection from '../collection/collection.component'


import './shopPage.style.scss'

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
)


export default ShopPage