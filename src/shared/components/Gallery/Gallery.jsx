import React from 'react';
import {Link} from "react-router-dom";
import './Gallery.css';

export function Gallery (props){
 

    return(
  
        <div className="cards_container">
        {props.cards.map((card, i)=> 
             <div className="card"  key={i}>
             <Link to={"/card/"+card.id}> 
                <img src={card.images.small} alt={card.name} /> 
             </Link>
                
            </div>          
            
        )}
        </div>
        
       
    
    );
}