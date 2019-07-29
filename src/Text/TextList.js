import React from "react";

// import the Text items component
import TextItem from './text/textListItem.js';

const  url =[`https://i.imgur.com/yt7spvu.jpg`,`https://i.imgur.com/txDR5ZB.jpg`,`https://i.imgur.com/a3EZDHM.jpg`,
`https://i.imgur.com/ppqLWts.jpg`, `https://i.imgur.com/LPvkxA5.jpg`,`https://i.imgur.com/B36KkWl.jpg`];

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
       <img src={url[0]} alt="random 1" className="blue"  style= {{width:'100%', maxWidth:150, height:150}}/>
       <img src={url[1]} alt="random 2" className="blue"  style= {{width:'100%', maxWidth:150, height:150}}/>
       <img src={url[2]} alt="random 3" className="blue"  style= {{width:'100%', maxWidth:150, height:150}}/>
       <img src={url[3]} alt="random 3" className="blue"  style= {{width:'100%', maxWidth:150, height:150}}/>
       <img src={url[4]} alt="random 3" className="blue"  style= {{width:'100%', maxWidth:150, height:150}}/>
       <img src={url[5]} alt="random 3" className="blue"  style= {{width:'100%', maxWidth:150, height:150}}/>

         
         </span>
        </span>
      })}
      
     </div> 
  ); 
} 

export default TextList;