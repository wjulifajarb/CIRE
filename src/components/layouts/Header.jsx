import React, { useContext } from "react";
import Logo from "../../img/Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { DataContext } from "../../data/DataProvider";
import {Link} from 'react-router-dom';

const Header = () =>{
    const value = useContext(DataContext)
    const[cart] = value.cart
    return(
        <div className="containerHeader">
            <div className="imgTitle">
                <img src={Logo} className="imgHeader" alt="Logo CIRÉ"/>
                <p className="titleHeader">CIRÉ-FuPaís</p>
            </div>
            <div className="totalCart">
                <div className="navHeader">
                    <div>
                    <Link to="/inicio">
                        <p>Inicio</p>
                    </Link>
                    </div>
                    <div>
                    <Link to="/servicios">
                        <p>Servicios</p>
                    </Link>
                    </div>
                </div>
                <Link to="/carrito">
                <FaShoppingCart  className="iconCartHeader"/>
                </Link>
                <span>{cart.length}</span>
            </div>
        </div>
    )
}

export default Header;