import React from 'react';

import SHOP_DATA from './shop.component.data';
import CollectionPreview from '../../Componenet/preview-collection.component/preview-collection.component.jsx';

class ShopPage extends React.Component {
    constructor (props) {
        super(props);
        this.state={
          collection:SHOP_DATA
             
        }
    }
    render () {
        const {collections} =this.state;
        
        return <div className = 'shop-page'>
            {
                this.state.collection.map ( ({id,...otherCollectionProps}) => (
                    
                    <CollectionPreview key={id}{...otherCollectionProps}/>
                ))
            }
        </div>
    }
}
export default ShopPage;