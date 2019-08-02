import React from "react";
//import './../App.css';

// import the Shop items component
import ShopItem from './shop/shopListItem.js';
const list ="Photos:"
/* const  url = ['https://i.imgur.com/lGypddl.png','https://i.imgur.com/xfZGoNk.png']
 */
function ShopList(props) {
  return (
    <div style= {{margin:5, paddingLeft:50, float:'left',backgroundColor:'#ffffff', color:'teal'}}>
       <br/>
       {list}
       <br/>
       ---------------------
      {props.shopItemAll.map((shopItem, shop) => {
        return <span onClick={() => props.clickHandler(shopItem)} key={shop}>  
        <span className="shop-item">
       <br/>
       {shopItem.sn}
       <br/>
       <ShopItem src= {shopItem.urlLink}  />
         </span>
        </span>
      })}
      
     </div> 
  ); 
} 

export default ShopList;