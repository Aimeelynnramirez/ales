import React from 'react';

const  urlLink =[`https://i.imgur.com/rc2zRnp.jpg`];

class TextItem extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
         text: this.props.text,
          url: this.props.url,
          sn: this.props.sn,
        }
    }
    render() {
    const text ="Click on Group of in Grid";
    const name = "Aimee";
    const lastname = "Ramirez";
    return (
        <span className="text-container">
             First Name: {name} 
        <br/> Last Name: {lastname} <br/>
    <img className="text-item cart" src={urlLink} alt="icon" style= {{width:50,height:50, borderRadius:50}}/>
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