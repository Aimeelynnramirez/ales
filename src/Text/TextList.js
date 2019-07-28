import React from "react";

// import the Text items component
import TextItem from './text/textListItem.js';



function TextList(props) {
  //console.log(props);
  return (
    <div>
      {props.textItemAll.map((textItem, index) => {
        return <span onClick={() => props.clickHandler(textItem)} key={index}>  
        <span className="text-item">
       {textItem.text} 
       <TextItem src= {textItem.urlLink} />
          Last Name:
          {textItem.name}
          </span>
        </span>
      })}
      
     </div> 
  ); 
} 

export default TextList;