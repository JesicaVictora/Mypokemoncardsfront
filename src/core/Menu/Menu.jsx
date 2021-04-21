import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

export function Menu (){

    return(

        <nav className="menu">
            <NavLink className='menu-item' exact activeClassName="menuactive" to="/">Home</NavLink>
            <NavLink className='menu-item'  activeClassName="menuactive" to="/card">Cards</NavLink>
            <NavLink className='menu-item'  activeClassName="menuactive" to="/sets">Sets</NavLink>
            <NavLink className='menu-item'  activeClassName="menuactive" to="/contact">Contact</NavLink>
        </nav>
        


    );


}