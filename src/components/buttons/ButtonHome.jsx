import React from "react";
import { AiFillHome } from "react-icons/ai";
import '../layouts/Navbar.css'

const ButtonHome = () => {
    return (
      <div className="containerButton">
        <AiFillHome className="buttonH" />
        <p className="wordMenu">Inicio</p>
      </div>
    );
}

export default ButtonHome;