import React from 'react';

const  urlLink =[`https://i.imgur.com/rc2zRnp.jpg`];

class TextItem extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
         text: this.props.text,
          url: this.props.url,
          sn: this.props.sn

        }
    }
    render() {
    const text ="Click Images";
    const sn="";
    const name = "Aimee";
    const lastname = "Ramirez";
    const  banner =[`https://i.imgur.com/wKflYhn.jpg`];
    return (
        <span className="text-container">
    <img src={banner} style= {{width:500, height:200}}/>
                         {sn} 
       <br/>
       <br/> First Name: {name} 
        <br/> Last Name: {lastname} <br/>
    <img className="text-item cart" src={urlLink} style= {{width:100,height:100, borderRadius:50}}/>
    <br/>
    <span className="text-item-value pink" style={{color:'teal', textAlign:'center'}}>
    <br/>
                            {text}
       <br/>
       </span>
        </span>
   );
}
}


    
export default TextItem;