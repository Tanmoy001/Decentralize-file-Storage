import React from 'react'
import "./homeScreen.css"
import img3 from "../../images/bubble.png"
import img4 from "../../images/background.jpg"
const Homescreen = ({account}) => {
  return (
    
      
      <div className="hero"id='Home'>
       <img src={img4} alt=""id="backgrondimg"/>
       <div className="content">
           <h3>Welcome to the</h3>
           <h1>Decentralized cloud storage<br></br>cloud</h1>
          
      <p>Account :{account?account:"Not connected with metamsk"}</p>
       </div>
     
    
      <div className="bubbles">
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
         <img src={img3} alt=""/>
        
       </div> 
      </div>
    
  );
}

export default Homescreen