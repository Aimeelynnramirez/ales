import React, { Component } from 'react';
import './App.css';
import TextList from './Text/TextList.js';


const url ={
  site:[ 'https://www.billboard.com/articles/columns/rock/8523761/meg-dia-frampton-interview-new-album-happysad', 'https://www.stevienicksofficial.com/','http://www.michellebranch.com/','http://www.sevenlions.com/']
  
}
const showImages = {
  images:['https://cdn.pixabay.com/photo/2018/03/16/12/34/wall-3231116_960_720.jpg']
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      pic:[],
      reload:true,
      checked: false
    }
    this.sendForm = this.sendForm.bind(this);
  }

  componentDidMount() {
    const data = [{
       text: '1. Meg and Dia.',
       urlLink:url.site[0],
       key: 1,
       banner:showImages.images[0],
       sn:"Meg & Dia is an American rock band formed in 2004."
     }, {
       text: '2. Stevie Nicks.',
       key: 2,
       urlLink:url.site[1],
       sn:"Stephanie Lynn Nicks (born May 26, 1948) is an American singer and songwriter."
     }, {
       text: '3. Michelle Branch.',
       urlLink:url.site[2],
       key: 3,
       sn:"Michelle Jacquet DeSevren Branch (born July 2, 1983) is an American singer, songwriter, and actress."
  
     },
     {
      text: '4. Seven Lions.',
      urlLink:url.site[3],
      key: 4,
      sn:"Jeff Montalvo (born March 31, 1987), known professionally as Seven Lions, is an American DJ, record producer, instrumentalist and remixer ."
 
    }]
    this.setState({
      pic: data[0],
      items: data
    });
  }
  myClickHandler(selectedItem) {
    console.log('this list item was clicked', selectedItem);
    const items = this.state.items;
    const newItems = items.filter(item => {
      return item.key !== selectedItem.key;
    });
    this.setState({
      items: newItems
    })
  }
  sendForm() {
    window.location.reload();
    this.setState({ reload: !this.state.reload});
  }
  render() {
   const picture =this.state.pic.banner;
    return (
      <div style= {{margin:11, backgroundColor:'#000000', color:'#ffffff'}}>
      <img src={picture} alt="banner"style= {{width:'100%', maxWidth:1000}}/>

     <div className="pink" style= {{ backgroundColor:'teal', color:'#ffffff'}}>
      <span className="header-item">WELCOME</span>
        </div> 
        <TextList textItemAll={this.state.items}
          /* this === App */
          clickHandler={this.myClickHandler.bind(this)} 
        />
         <button type="button" onClick={this.sendForm} style= {{ backgroundColor:'teal', color:'#ffffff'}}>
        {this.state.reload ? 'Reload.' : 'Pending...'}
        </button>
      </div>
    );
  }
}

export default App;
