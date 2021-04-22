import React from 'react';
import './HomePage.css';


export function HomePage (){
    
    return(
    <div className="Home_container">
      <div className="Home_content">
        <h1>Bienvenidos!</h1>
          <p> Este es un proyecto en construcción aún esta en fase muy beta. 
            Demora bastante tiempo en cargar ya que esta basado en una api gratuita. 
            Tenle paciencia y amor 😊
              </p>

      </div>
       
      <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

    </div>
  
    );
}