import React from 'react';


class TextItem extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
         text: this.props.text,
          url: this.props.url
        }
    }
    render() {
    const text ="View Details";
   
    return (
        <span className="text-container">
    <span className="text-item-value pink" style={{color:'grey'}}>
                            {text}
                         
       </span>
        </span>
   );
}
}


    
export default TextItem;