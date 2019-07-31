import React from "react";
import  classes from'./Text.css';
// import the Text items component
import TextItem from './text/textListItem.js';

const  url =[`https://i.imgur.com/vJFn35u.png`, `https://i.imgur.com/4nEAfRe.png`, 'https://i.imgur.com/lGypddl.png','https://i.imgur.com/xfZGoNk.png'];

function TextList(props) {
  //console.log(props);
  
  return (
    <div style= {{margin:11, backgroundColor:'#000000', color:'#ffffff'}}>
      {props.textItemAll.map((textItem, text) => {
        return <span onClick={() => props.clickHandler(textItem)} key={text}>  
        <span className="text-item">
        <hr/>
       {textItem.text}
       <hr/>
       {textItem.sn}
       <hr/>
       <TextItem src= {textItem.urlLink}  />
       <img className={classes.TextItem}  style={{height: props.height}} src={url[0]} alt="random 1" />
       <img className="text-item" src={url[1]}  alt="random 2" />
    
         </span>
        </span>
      })}
      
     </div> 
  ); 
} 

export default TextList;