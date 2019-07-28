import React from 'react';


class TextItem extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
         text: this.props.text,
          url: this.props.url,
          name: this.props.name

        }
    }
    render() {
    const text ="what is new";
    const name = "Aimee"
    const  urlLink =[`https://i.imgur.com/OcaHPff.png`];
        return (
        <span className="text-container "  >
       <span className="text-item-value pink" style={{color:'pink'}}>
       {text}
       </span>
       <br/>
    <img className="text-item cart" style= {{width:200}} src={urlLink}/>
    <br/> First Name: {name} <br/>
        </span>
   );
}
}


    
export default TextItem;