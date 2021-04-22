import React, {useEffect, useState, useContext} from 'react';
import { API } from '../../shared/consts/api.consts';
import {Gallery} from '../../shared/components/Gallery/Gallery';
import {SearchBar} from '../../shared/components/SearchBar/SearchBar';
import { LoadingContext } from '../../core/Loading/contexts/LoadingContext';

export function Sets (){
  const [sets, setSets] = useState([]);
  const {setIsLoading} = useContext(LoadingContext);

  const getSets = (filter) =>{
    setIsLoading(true);
    if (filter){
      API.get('v2/sets?q=name:'+filter+'*').then((res)=> {
        setSets(res.data.data); 
        setIsLoading(false);
       }); 

    }else{
      API.get('v2/sets').then((res)=> {
        setSets(res.data.data); 
        setIsLoading(false);
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