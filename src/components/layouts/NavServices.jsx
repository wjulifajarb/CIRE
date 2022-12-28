import React from "react";
import { NavLink } from "react-router-dom";
import '../peyes/ServicesAll.css'

const navS = [
  {
    display: "Todos",
    path: "/servicios",
  },
  {
    display: "Escolar",
    path: "/servicios/escolar",
  },
  {
    display: "Terapias",
    path: "/servicios/terapias",
  },
];

const NavServices = () => {
  return (
    <div>
      <div className="containerCategories">
        <div className="categoriesName">
          <p>Categorias</p>
        </div>
      </div>

      <div className="containerNavs">
        {navS.map((item, index) => (
          <NavLink className="navLink" to={item.path} key={index}>
            {item.display}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavServices;
