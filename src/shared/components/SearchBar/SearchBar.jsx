import React from 'react';

export  function SearchBar(props) {

    return(
        <div>
            <input type="text" id="search" placeholder="Search" onChange={()=>{
                const input = document.querySelector('input').value;
                props.search(input)}}></input>
        </div> 
    )

}