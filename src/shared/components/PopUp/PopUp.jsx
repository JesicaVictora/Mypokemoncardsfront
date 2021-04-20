import React, {useEffect, useState} from 'react';

import {CardInfo} from '../../../pages/CardInfo/CardInfo'
import './PopUp.css';



export function PopUp (props){
 console.log(props);
    return(
        <div className="popup_container" onClick={()=>{
            props.close();
            }}>

            { props.cardId &&
             

                <CardInfo cardId={props.cardId} ></CardInfo>

            }
          
        </div>
    
    )

}
