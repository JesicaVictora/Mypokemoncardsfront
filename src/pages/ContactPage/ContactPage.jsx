import React from 'react';
import './ContactPage.css';
import TWlogo from "../../assets/img/twitter.png"
import Lklogo from "../../assets/img/linkedin.png"

export function ContactPage (){
    
    return(
    <div className="Contact_container">
      <div className="Contact_content">
        <h1>Mis redes:</h1>
        <div class="Social">
         <a href="https://twitter.com/JessVictora"  target="_blank">
            <img src={TWlogo} alt="twitter"></img>
         </a> 
         <a href="https://www.linkedin.com/in/jesica-victora-1239a75b" target="_blank"> 
           <img src={Lklogo} alt="twitter"></img>
         </a>
        </div>

      </div>
       
      <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

    </div>
  
    );
}