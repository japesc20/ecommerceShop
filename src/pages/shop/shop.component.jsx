import React from "react";
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from './shop.data'

class Collection extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {

        // Calls data to be used from the state
        const {collections} = this.state;

        return(<div className="shop-page">
                {
                    // Maps through data from props being passed in CollectionPreview component
                    collections.map(({ id, ...OtherCollectionProps }) => (
                        <CollectionPreview key={id} {...OtherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Collection;