import React from 'react';


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
    return (
        <span className="text-container">
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