import React, {useEffect, useState} from 'react';
import { API } from '../../shared/consts/api.consts';
import { Gallery } from '../../shared/components/Gallery/Gallery';
import {SearchBar} from '../../shared/components/SearchBar/SearchBar'
import { PopUp } from '../../shared/components/PopUp/PopUp';

export function Card (){
  const [cards, setCards] = useState([]);
  const [cardId,setCardId]= useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const setCard= (card)=>{

    setCardId(card);
    setShowPopUp(true);


  }

  const closePopUp = ()=>{

    setShowPopUp(false);

  }

  const getCards = (filter) =>{
      //axios.get(process.env.REACT_APP_BACK_URL + 'v2/cards').then((res)=> { 

      if(filter){
        
        API.get('v2/cards?q=name:'+filter+'*').then((res)=> { 
          setCards(res.data.data); 
        });  

      }else{

        API.get('v2/cards').then((res)=> { 
          setCards(res.data.data); 
        });  

      }
    
  }
  useEffect(getCards, []); //con los corchetes carga solo 1 vez

 /* useEffect(() => {
    console.log(cards[0]);
  
  }, [cards]);*/

    return(
      <div>
         {showPopUp === true &&
          
          <PopUp cardId={cardId} close={closePopUp} ></PopUp>

         }
        <SearchBar search={getCards}></SearchBar>

        <Gallery cards={cards} setCard={setCard} ></Gallery>

      
     </div>
    );
}