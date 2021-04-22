import React from 'react';

import './SearchBar.css';

export  function SearchBar(props) {

    return(
        <div className="search_bar">
            <input type="text" id="search" placeholder="Search" onChange={()=>{
                const input = document.querySelector('input').value;
                props.search(input)}}></input>
        </div> 
    )

}