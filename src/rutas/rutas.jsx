import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/peyes/Home";
import ServicesAll from "../components/peyes/ServicesAll";
import Cart from "../components/peyes/Cart";
import ServicesSchool from "../components/peyes/ServicesSchool";
import ServicesTherapies from "../components/peyes/ServicesTherapies";
import Summary from "../components/peyes/Summary";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inicio"/>} />
      <Route path="/inicio" element={<Home/>} />
      <Route path="/servicios" element={<ServicesAll/>} />
      <Route path="/servicios/escolar" element={<ServicesSchool/>} />
      <Route path="/servicios/terapias" element={<ServicesTherapies/>} />
      <Route path="/carrito" element={<Cart/>} />
      <Route path="/carrito/resumen" element={<Summary/>} />
    </Routes>
  );
};

export default Rutas;
