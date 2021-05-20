import React from "react"
import Card from "./Card"
import Sdata from "./Sdata"
import "./index.css"


const ncard = (val ,index) => {
      return ( 
            <Card
            key    = {val.id}
            imgSrc={val.imgSrc}
            title={val.title}
            vname={val.vname}
            link={val.link}
      />    
      );
}


const App =() => ( 
    <>
    <h1 className = "heading-style">Top Five Post On Social Media</h1>
    {Sdata.map(ncard)}      
       
    </>
     
);
export default App;