import React, {useContext} from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { DataContext } from "../../data/DataProvider";
import Swal from 'sweetalert2';

const CardCategories = ({ id, image, name, price, conditions, description }) => {
const value = useContext(DataContext);
const addCart = value.addCart;

const alert = () =>{
  Swal.fire({
    title: (name),
    text: (description),
    background: '#10E351',
    color: 'black',
    confirmButtonColor: '#1BFFBC',
    confirmButtonText:'Volver',
  })
}

  return (
    <div className="containerServices" >
      <div className="containerService" >
        <div className="containerImgServ">
          <img src={image} alt="imagen fundación" onClick={() => alert()}/>
        </div>
        <div className="descriptionServices">
          <div>
            <p onClick={() => alert()}>{name}</p>
            <p>${price}</p>
            <p className="condition">{conditions}</p>
          </div>
          <div className="containerIcon">
            <AiFillPlusCircle className="iconService" onClick={() => addCart(id)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategories;
