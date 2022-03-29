import React, {useEffect, useState} from "react";


const BencaoAPI = ({title,content}) =>{
	console.log(content)
	return(
	<div className="API">
      <h2>{title}</h2>
      <div className="API_detail">
      	{content.map((item,i)=>{
      		if(i > 1){
      			if(i === 2){
      				return(<h4 key={i} className="API_resource">{item}</h4>)
      			}else{
      				return(<p key={i}>{item}</p>)
      			}
      		}
      	})}
      </div>
    </div> 
	);
}

export default BencaoAPI;