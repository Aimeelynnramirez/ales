import React from 'react';


class ShopItem extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
         shop: this.props.shop,
          sn: this.props.sn,
        }
    }
    render() {
    return (
   <span className="shop-container">       
    <span className="shop-item-value pink" style={{color:'teal', textAlign:'center'}}>                      
       </span>
        </span>
   );
}
}


    
export default ShopItem;