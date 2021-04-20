import React, {useEffect, useState} from 'react';
import { API } from '../../shared/consts/api.consts';
import {useParams} from 'react-router-dom';


export function CardInfo (){
    const [card, setCard] = useState([]);
    const [prices, setPrices]= useState([]);
    const {cardId}=useParams();

      
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
            <div>
             { card.images && 
                <div className="container">
                    
                      <img src={card.images.small}></img>
           
             
                  
                        <h1> {card.name}</h1>
                        <p>Set: {card.set.name}</p>
                        <p>Prices:</p>
                    
                    { prices=="" &&  
                        <div>
                            <p>Price not found</p> <br/>
                        </div>
                    }
                    
                    {prices.normal &&  
                        <div>
                            <p>Normal: USD {card.tcgplayer.prices.normal.market}</p> <br/>
                        </div>
                    }
                    { prices['1stEditionHolofoil'] &&  
                        <div>
                            <p>1st Edition Holofoil: USD {card.tcgplayer.prices['1stEditionHolofoil'].market}</p> <br/>
                        </div>
                    }
                    { prices.holofoil &&  
                        <div>
                            <p>Holo Foil: USD {card.tcgplayer.prices.holofoil.market}</p> <br/>
                        </div>
                    }
                    { prices.reverseHolofoil &&  
                        <div>
                            <p>Reverse Holo: USD {card.tcgplayer.prices.reverseHolofoil.market}</p> <br/>
                        </div>
                    }
               
                    
                    
                       
            
                </div>
                  
             }
            </div>
      );
  }