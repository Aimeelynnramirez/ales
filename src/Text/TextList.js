import React from "react";

// import the Text items component
import TextItem from './text/textListItem.js';

const  url =[`https://i.imgur.com/yt7spvu.jpg`,`https://i.imgur.com/txDR5ZB.jpg`,`https://i.imgur.com/a3EZDHM.jpg`];

function TextList(props) {
  //console.log(props);
  return (
    <div style= {{margin:11, backgroundColor:'#000000', color:'#ffffff'}}>
      {props.textItemAll.map((textItem, index) => {
        return <span onClick={() => props.clickHandler(textItem)} src={index}>  
        <span className="text-item">
        <hr/>
       {textItem.text}
       <hr/>
       {textItem.sn}
       <hr/>
       <TextItem src= {textItem.urlLink}  />
       <img src={url[0]} className="blue" style= {{width:300, height:150}} />
       <img src={url[1]} className="blue" style= {{width:200, height:150}}/>
       <img src={url[2]} className="blue" style= {{width:200, height:150}}/>
          </span>
        </span>
      })}
      
     </div> 
  ); 
} 

export default TextList;