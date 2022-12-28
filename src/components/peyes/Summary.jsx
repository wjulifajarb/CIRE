import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import Whatsapp from "../layouts/Whatsapp";
import "./Summary.css";

const Summary = () => {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const [total] = value.total;

  return (
    <div>
      <div className="containerTitleSR">
        <div className="servReq">
          <p>Servicios requeridos</p>
        </div>
      </div>
      <div className="containerSum">
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
              <div className="summaryCart" key={product.id}>
                <div className="containerImag">
                  <img
                    src={product.image}
                    alt="Imagen fundación"
                    className="imageCart"
                  />
                </div>
                <div className="containerInfo">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <p className="condition">{product.conditions}</p>
                  <div className="subAdd">
                    <p>Cantidad: {product.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="containerTotal">
        <p className="total">Total: ${total}</p>
        <Whatsapp />
        <p className="redWhat">*Seras redireccionado/a a Whatsapp</p>
      </div>
    </div>
  );
};

export default Summary;
