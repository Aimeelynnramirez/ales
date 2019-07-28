import React, { Component } from 'react';
import './App.css';
import TextList from './Text/TextList.js';


const url ={
  image: 'https://i.imgur.com/G1f90WT.png',
}
class App extends Component {

  constructor() {
    super();

    this.state = {
      items: [],
      url:[],
      checked: false
    }
  }

  componentDidMount() {
    // make an API call
    const data = [{
     text: 'Icon',
      urlLink:url,
     // key: [],
       name:" Ramirez"
    }]
    this.setState({
      items: data
    });
  }
  myClickHandler(selectedItem) {
   
    console.log(this.state.image, 'this is images');

    console.log('this list item was clicked', selectedItem);
    const items = this.state.items;

    const newItems = items.filter(item => {
      return item.key !== selectedItem.key;
    });

    this.setState({
      items: newItems
    })

  }


  render() {
    return (
      <div>
        
     <div>
            <span className="header-item">WELCOME</span>
        </div> 
        
        <TextList textItemAll={this.state.items} className="pink"  
        
          /* this === App */
          clickHandler={this.myClickHandler.bind(this)}
        
        />
      </div>
    );
  }
}

export default App;