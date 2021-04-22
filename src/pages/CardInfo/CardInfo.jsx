import React, {useEffect, useState} from 'react';
import { API } from '../../shared/consts/api.consts';
import './CardInfo.css';


export function CardInfo (props){
    const [card, setCard] = useState([]);
    const [prices, setPrices]= useState([]);
    const cardId = props.cardId;
    
      
    const getCard = () =>{
        API.get('v2/cards/'+cardId).then((res)=> { 
            
           setCard(res.data.data);

           if(res.data.data.tcgplayer){
            setPrices(res.data.data.tcgplayer.prices);
           };
          
        
         });  
    }
    useEffect(getCard, []); 
/*
    useEffect(() => {
        console.log(card);
        console.log(prices);
      
      }, [card]);*/


      return(
            <div className="card_container">
             { card.images && 
             <div>
                <table class="table">
                    <tr>
                        <td rowspan="8">
                         <img src={card.images.small}></img>
                        </td>
                        <td>
                            <h1> {card.name}</h1>
                        </td>
                    </tr>
                
                    <tr>
                       
                        <td>
                             <p>Set: {card.set.name}</p>
                        </td>
                    </tr>
                    <tr>    
                        <td>
                             <p>Prices:</p>
                        </td>
                    </tr>
                    <tr>  
                    
                    { prices==="" &&  
                        <td>
                            <p>Price not found</p> <br/>
                        </td>
                    }
                    
                    {prices.normal &&  
                        <td>
                            <p>Normal: USD {card.tcgplayer.prices.normal.market}</p> <br/>
                        </td>
                    }
                    { prices['1stEditionHolofoil'] &&  
                        <td>
                            <p>1st Edition Holofoil: USD {card.tcgplayer.prices['1stEditionHolofoil'].market}</p> <br/>
                        </td>
                    }
                    { prices.holofoil &&  
                        <td>
                            <p>Holo Foil: USD {card.tcgplayer.prices.holofoil.market}</p> <br/>
                        </td>
                    }
                    { prices.reverseHolofoil &&  
                        <td>
                            <p>Reverse Holo: USD {card.tcgplayer.prices.reverseHolofoil.market}</p> <br/>
                        </td>
                    }
               
                    
                    
                    </tr>
            
                </table>
                
                <div class="mobile_container">
               
                    <img src={card.images.small}></img>
                        
                    <h1> {card.name}</h1>
                    <br/>
                    <p>Set: {card.set.name}</p>
                       
                    <p>Prices:</p>
                       
                    { prices==="" &&  
                        
                        <p>Price not found</p> 
                   
                    }
                    
                    {prices.normal &&  
                    
                        <p>Normal: USD {card.tcgplayer.prices.normal.market}</p> 
                       
                    }
                    { prices['1stEditionHolofoil'] &&  
                       
                        <p>1st Edition Holofoil: USD {card.tcgplayer.prices['1stEditionHolofoil'].market}</p>
                       
                    }
                    { prices.holofoil &&  
                      
                        <p>Holo Foil: USD {card.tcgplayer.prices.holofoil.market}</p>
                      
                    }
                    { prices.reverseHolofoil &&  
                     
                        <p>Reverse Holo: USD {card.tcgplayer.prices.reverseHolofoil.market}</p> 
                     
                    }
               
                </div>
             </div>
             }
            </div>
      );
  }