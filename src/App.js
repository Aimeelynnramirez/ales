import React, { Component } from 'react';
import './App.css';
import TextList from './Text/TextList.js';
import ShopList from './Shop/ShopItem.js';


const url ={
  site:[ 'https://www.billboard.com/articles/columns/rock/8523761/meg-dia-frampton-interview-new-album-happysad', 'https://www.stevienicksofficial.com/','http://www.michellebranch.com/','http://www.sevenlions.com/']
  
}

const showImages = {
  images:['https://upload.wikimedia.org/wikipedia/commons/0/0b/Italian_traffic_signs_-_delineatore_di_curva_d.svg']
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      pic:[],
      itemsData:[],
      bags:[],
      bagData:[],
      reload:true,
      checked: false
    }
    this.sendForm = this.sendForm.bind(this);
    this.myClicker =this.myClicker.bind(this);
    this.myClickHandler= this.myClickHandler.bind(this);
  }

  componentDidMount() {
    const data = [{ id:0,
      shop:"pink",
      key: 0,
      sn:'handbag of pink',
      urlLink: `https://i.imgur.com/vJFn35u.png`

    },{
    id:1,
    shop: 'brown',
    key:1,
    sn:'handbag of brown',
    urlLink:'https://i.imgur.com/xfZGoNk.png'

  }
  ,{
    id:2,
    shop: 'green',
    key:2,
    sn:'handbag of green',
    urlLink:'https://i.imgur.com/oES8E3u.png'

  }]    
    const bagItems = [{
        id:0,
        shop:"pink",
        key: 0,
        sn:'handbag of pink',
        urlLink: `https://i.imgur.com/vJFn35u.png`

      },{
      id:1,
      shop: 'brown',
      key:1,
      sn:'handbag of brown',
      urlLink:'https://i.imgur.com/xfZGoNk.png'

    }
    ,{
      id:2,
      shop: 'green',
      key:2,
      sn:'handbag of green',
      urlLink:'https://i.imgur.com/oES8E3u.png'

    }]
   
    this.setState({
      bagData:bagItems,
      items: data,
    });   
  }

  myClickHandler(selectedItem, i) { 
    const items = this.state.items;

    const newItems = items.filter(item => {
      return item.key !== selectedItem.key;
    });
    this.setState({
      items: newItems,
      itemsData:selectedItem.urlLink

    })
  }
  myClicker(selectedBag) {
    const bagData = this.state.bagData;

    const newBagItems = bagData.filter(bag => {
      console.log("bag", selectedBag.shop)
      return bag.key !== selectedBag.key 
      //now to have if or that 
    });

    this.setState({
      bagData:newBagItems,
      bagPic:selectedBag.urlLink
    })
  }
  sendForm() {
    window.location.reload();
    this.setState({ reload: !this.state.reload});
  }
  render() {
    const picture = this.state.bagPic
  //const picture2= this.state.itemsData
    return (
       <div className="text-item">
      <h1 className="header-item">Welcome</h1>
    
        <div>
        <p className="image"> 
       Click List to View On Screen in Data.
       </p>
      <ShopList shopItemAll={this.state.bagData}
        clickHandler={this.myClicker} 
        />  
       <br/>
       <img src={picture}/>
         </div> 
  
      {/*   <TextList  textItemAll={this.state.items} 
          className="text-item"  clickHandler={this.myClickHandler} 
        />
          <br/>
          <img src={picture2}/> */}
         <button type="button" onClick={this.sendForm} >
        {this.state.reload ? 'Reload.' : 'Pending...'}
        </button>
      </div>
    );
  }
}

export default App;
