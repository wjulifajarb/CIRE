import React, { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { DataContext } from "../../data/DataProvider";
import './Cart.css';
import { NavLink } from "react-router-dom";

const Cart = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total] = value.total; 

  const substraction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.amount === 1 ? (item.amount = 1) : (item.amount -= 1);
      }
      setCart([...cart]);
    });
  };

  const addition = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.amount += 1;
      }
      setCart([...cart]);
    });
  };

  const removeProduct = (id) => {
    if (window.confirm("¿Quieres eliminar el servicio?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.amount = 1;
          cart.splice(index, 1);
        }
      });
    }

    setCart([...cart]);
  };


  return (
    <div>
      <div className="containerCart">
        {cart.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Aun no se han añadido servicios
          </p>
        ) : (
          <>
            {cart.map((product) => (
              <div className="cardCart" key={product.id}>
                <div className="containerImag">
                  <img src={product.image} alt="Imagen fundación" className="imageCart"/>
                </div>
                <div className="containerInfo">
                  <div className="trash">
                    <BiTrash  onClick={() => removeProduct(product.id)} />
                  </div>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <p className="condition">{product.conditions}</p>
                  <div className="subAdd">
                    <button onClick={() => substraction(product.id)}>-</button>
                    <p>{product.amount}</p>
                    <button onClick={() => addition(product.id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="containerContinue">
        <NavLink to={'/carrito/resumen'} className="buttonContinue">
            <p>Continuar: ${total}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
