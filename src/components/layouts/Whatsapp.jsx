import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";

const Whatsapp = () => {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const [total] =value.total 

  const finalizePurchase =() =>{
    let productsWsp = cart.map(product => `- ${product.name},$${product.price},${product.amount}`);
    const productsFormat = productsWsp.join('\n');
    window.location.href ='https://api.whatsapp.com/send?phone=573209066392&text=Me%20interesan%20los%20siguientes%20servicios' +productsFormat+'Total: '+total
  }
  return (
    <div className="buttonPay"><p onClick={() =>finalizePurchase()}>Pagar</p></div>
  )

}

export default Whatsapp