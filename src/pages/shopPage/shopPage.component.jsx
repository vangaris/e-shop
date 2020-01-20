import React from 'react'
import shopData from '../../components/collection-preview/shopData'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import './shopPage.style.scss'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collection: shopData
        }
    }

    render() {
        const { collection } = this.state

        return (
            <div className="home-page">

                {collection.map(({ id, ...collectionProps }) => <CollectionPreview key={id} {...collectionProps} />)}

            </div>
        )
    }
}

export default ShopPage