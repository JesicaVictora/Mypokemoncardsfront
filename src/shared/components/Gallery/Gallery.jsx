import React from 'react';
import {Link} from "react-router-dom";
import './Gallery.css';

export function Gallery (props){
 
   /* <Link to={"/card/"+card.id}> */
    return(
  
        <div className="gallery_container">
        {props.elements.map((element, i)=> 
             <div className={props.type}  key={i}>
           

               {props.type == "card" &&
                    <Link onClick={()=>{
                props.setCard(element.id);
                }}> 
                    <img src={element.images.small} alt={element.name} /> 
                    </Link>
               }
             
          
            
               
               {props.type == "set" &&
               <Link  to={`/card/${element.id}`}> 
                    <img src={element.images.logo} alt={element.name} /> 
                </Link>
               }
                
            </div>          
            
        )}
        </div>
        
       
    
    );
}