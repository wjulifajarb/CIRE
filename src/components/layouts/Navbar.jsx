import React from "react";
import { NavLink } from "react-router-dom";
import ButtonHome from "../buttons/ButtonHome";
import ButtonServices from "../buttons/ButtonServices";
import ButtonCart from "../buttons/ButtonCart";
import './Navbar.css';

const nav =[
  {
    display: (ButtonHome),
    path: "/inicio",
  },
  {
    display: (ButtonServices),
    path: "/servicios",
  },
  {
    display: (ButtonCart),
    path: "/carrito",
  },
];

const Navbar = () =>{
  return(
    <div className="containerNav">
      
      {nav.map((item, index) =>(
        <NavLink
        to={item.path}
        key={index}
        >
        {item.display}
        </NavLink>
      ))}
    </div>
  )
}

export default Navbar;