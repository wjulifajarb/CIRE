/*Se importan todos los Hooks de react, los iconos, las funciones constantes de los archivos necesarios
 para el funcionamiento de la aplicación web y el archivo donde estarán contenidos los estilos*/

import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { DataContext } from "../../data/DataProvider";
import '../layouts/Navbar.css'

/*Se guarda en una constante el contexto de los datos almacenados en la data
Se guarda en otra constante la funcionalidad de cart y se */

const ButtonCart = () => {
  const value = useContext(DataContext)
  const[cart] = value.cart
    return (
      <div className="menu">
        <div className="totalCart2">
          <FaShoppingCart className="buttonC" />
          <span>{cart.length}</span>
        </div>
        <p className="wordMenu">Carrito</p>
      </div>
    );
}

export default ButtonCart;
