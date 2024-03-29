import React from "react";
import './Text.css';
// import the Text items component
import TextItem from './text/textListItem.js';


function TextList(props) {
  return (
    <div style= {{margin:10, backgroundColor:'white'}}>
      {props.textItemAll.map((textItem, text) => {
        return <span onClick={() => props.clickHandler(textItem)} key={text}>  
        <span className="text-item">
       <br/>
      Check out: {textItem.sn}
       <br/>
       <TextItem src={textItem.url} />
      <br/>
  
         </span>
        </span>
      })}
      
     </div> 
  ); 
} 

export default TextList;