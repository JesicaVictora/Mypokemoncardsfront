import React, {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';

import { API } from '../../shared/consts/api.consts';
import { Gallery } from '../../shared/components/Gallery/Gallery';
import {SearchBar} from '../../shared/components/SearchBar/SearchBar'
import { Modal } from '../../shared/components/Modal/Modal';
import './Card.css';
import { LoadingContext } from '../../core/Loading/contexts/LoadingContext';

export function Card (){

  let {setId} = useParams();
  
  const [cards, setCards] = useState([]);
  const [cardId,setCardId]= useState("");
  const [showModal, setShowModal] = useState(false);
  const {setIsLoading} = useContext(LoadingContext);



  const setCard= (card)=>{

    setCardId(card);
    setShowModal(true);


  }

  const closeModal = ()=>{

    setShowModal(false);

  }

  const getCards = (filter) =>{
      //axios.get(process.env.REACT_APP_BACK_URL + 'v2/cards').then((res)=> { 
      setIsLoading(true);
      if(filter){
        let params = 'name:'+filter+'* ';
          if(setId){
            params +='set.id:'+setId;
          }

        API.get('v2/cards?q='+params).then((res)=> { 
       
          setCards(res.data.data); 
          setIsLoading(false);
        }); 

      }else{
        let querry='';
        if(setId){
          querry ='?q=set.id:'+setId;
        }
        API.get('v2/cards'+querry).then((res)=> { 
          setCards(res.data.data); 
          setIsLoading(false);
        });  

      }
    
  }
  useEffect(getCards, []); //con los corchetes carga solo 1 vez

 /* useEffect(() => {
    console.log(cards[0]);
  
  }, [cards]);*/

    return(
      <div>
        {showModal === true &&
          <div className="Modal_container" onClick={()=>{
            closeModal();
            }}>
                <Modal cardId={cardId} close={closeModal} ></Modal>             
          </div>
        }
          <div>
            
                <SearchBar search={getCards}></SearchBar>

                <Gallery elements={cards} setCard={setCard} type="card"></Gallery>

          
        </div>
     </div>
    );
}