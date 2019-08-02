import React, { Component } from 'react';
import './App.css';
import TextList from './Text/TextList.js';
import ShopList from './Shop/ShopItem.js';

import placeholder from './placeholder.jpg';


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      imageApi:[],
      itemsDescription:[],
      itemsData:[],
      itemsSn:[],
      bags:[],
      box:[],
      bagData:[],
      reload:true,
      checked: false
    }
    this.getImageFromAPI = this.getImageFromAPI.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.myClicker =this.myClicker.bind(this);
    this.myClickHandler= this.myClickHandler.bind(this);
  }


  componentDidMount() {
    
    
    const data = [{ id:0,
      text:"This is a lovely Pink handbag, created in California(USA), and patterned by a designer in Rhode Island.",
      key: 0,
      sn:'Small Pink Handbag',
      url: `https://i.imgur.com/vJFn35u.png`

    },{
    id:1,
    text:"This is a lovely Brown handbag, created in California(USA), and patterned by a designer in Rhode Island.",
    key:1,
    sn:'Small Brown Handbag.',
    url:'https://i.imgur.com/xfZGoNk.png'

  }
  ,{
    id:2,
    text:"This is a lovely Green handbag, created in California(USA), and patterned by a designer in Rhode Island.",
    key:2,
    sn:'Small Green Handbag.',
    url:'https://i.imgur.com/oES8E3u.png'

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
    },
    {
      id:3,
      shop: 'red',
      key:3,
      sn:'handbag of red',
      urlLink:'https://i.imgur.com/ACzpFAL.png'
    },
    {
      id:4,
      shop: 'plaid',
      key:4,
      sn:'backpack of plaid',
      urlLink:'https://i.imgur.com/MolCyZ2.png'
    }
  ]
    const url ={
      site:[ 'https://www.billboard.com/articles/columns/rock/8523761/meg-dia-frampton-interview-new-album-happysad', 'https://www.stevienicksofficial.com/','http://www.michellebranch.com/','http://www.sevenlions.com/']
      
    }
    this.setState({
      bagData:bagItems,
      items: data,
    });  
  }

  myClickHandler(selectedItem) { 
    const items = this.state.items;
    
    const newItems = items.filter(item => {
      // sn is screenname 
      // text is description
      console.log("item", selectedItem.url);
      return item.key !== selectedItem.key;
    });
    this.setState({
      items: newItems,
      itemsData:selectedItem.url,
      itemsDescription:selectedItem.text,
      itemsSn:selectedItem.sn
      
    })
  }

  myClicker(selectedBag) {
    const bagData = this.state.bagData;

    const newBagItems = bagData.filter(bag => {
      console.log("bag", selectedBag.shop)
      return bag.key !== selectedBag.key 
    });

    this.setState({
      bagData:newBagItems,
      bagPic:selectedBag.urlLink
    })
  }
  getImageFromAPI(selectedBox) {
     fetch('https://aim-application.herokuapp.com/products')
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          this.setState({box:res.products})
          const boxes = this.state.box;
          boxes !== selectedBox;
          console.log("this is api", boxes);
          this.setState({ 
            box: boxes, 
            imageApi:boxes[0].imageLink,
            imageApi1:boxes[1].imageLink,
            imageApi2:boxes[2].imageLink,
            imageApi3:boxes[3].imageLink,
           });
          return boxes;
      })
  }
  sendForm(){
    window.location.reload();
    this.setState({reload: !this.state.reload})
  }
  addDefaultSrc(ev){
    ev.target.src = 'https://i.imgur.com/ONxka1P.png'
  }
  
  render() {
    const getImageApi1 = this.state.imageApi1
    const getImageApi2 = this.state.imageApi2
    const getImageApi3 = this.state.imageApi3
    const getImageApi = this.state.imageApi
    const box =  this.state.box
    const picture = this.state.bagPic
    const description = this.state.itemsDescription
     const names = this.state.itemsSn
     const pictureBelow = this.state.itemsData
    return (
     <div className="App">
      <h1 className="header-item">Welcome.</h1>
      This is length of fetched API data: 
         {box.length}
         {/* refactor this. */}
         <br/>
         <img 
         onError={this.addDefaultSrc} 
         src={getImageApi}/>
         <img src={getImageApi1}/>
         <img src={getImageApi2}/>
         <img src={getImageApi3}/>

         <br/>
       
         <button type="button" onClick={this.getImageFromAPI} >
        {this.state.box ? 'View Images.' : 'Pending...'}
        </button>
        <br/>
        <button type="button" onClick={this.sendForm} >
        {this.state.reload ? 'Hide.' : 'Pending...'}
        </button>
        <br/>
        <p className="image"> 
       Click List to View On Screen in Data.
       </p>
      <ShopList shopItemAll={this.state.bagData}
        clickHandler={this.myClicker} 
        />  
       <img src={picture}/>
       <br/>
       <button type="button" onClick={this.sendForm} >
        {this.state.reload ? 'Back.' : 'Pending...'}
        </button>
       <br/>
       <br/>
       <div className="Apple">
       <TextList  textItemAll={this.state.items} 
          className="text-item"  clickHandler={this.myClickHandler} 
        /><br/>
      <button type="button" onClick={this.sendForm} >
        {this.state.reload ? 'Back.' : 'Pending...'}
        </button>
        <br/>
        Articles: {names}
        <br/>
         <p>{description}</p>
         <img onError={this.addDefaultSrc} src={pictureBelow} />

      
        </div>
      </div>
    );
  }
  
}


export default App;
