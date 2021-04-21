import React, {useEffect, useState} from 'react';

import {CardInfo} from '../../../pages/CardInfo/CardInfo'
import './Modal.css';



export function Modal (props){
 console.log(props);
    return(
        <div className="Modal_main" onClick={()=>{
            props.close();
            }}>

            { props.cardId &&
             

                <CardInfo cardId={props.cardId} ></CardInfo>

            }
          
        </div>
    
    )

}
