import React, {useEffect, useState} from 'react';
import { API } from '../../shared/consts/api.consts';
import {Gallery} from '../../shared/components/Gallery/Gallery';
import {SearchBar} from '../../shared/components/SearchBar/SearchBar';


export function Sets (){
  const [sets, setSets] = useState([]);

  const getSets = (filter) =>{
    if (filter){
      API.get('v2/sets?q=name:'+filter+'*').then((res)=> {
        setSets(res.data.data); 
       }); 

    }else{
      API.get('v2/sets').then((res)=> {
        setSets(res.data.data); 
     }); 
    }
      
  }

useEffect(getSets, []); //con los corchetes carga solo 1 vez


    

    return(
      <div>
          <SearchBar search={getSets} ></SearchBar>
          <Gallery elements={sets} type="set"></Gallery>
      </div>
      

    );
}