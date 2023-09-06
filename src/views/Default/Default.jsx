import React from 'react';
import style from "./Default.module.css";
import NavBar from '../../components/NavBar/NavBar';
import Datos from '../../components/Datos/Datos';
import Presentacion from '../../components/Presentacion/Presentacion';
import AboutMe from '../../components/AboutMe/AboutMe';

const Default = () => {
  return (
    <div className={style.contPrincipal}>
      <NavBar/>
      <Datos/>
      <Presentacion/>
      <div className={style.Linea}></div>
      <AboutMe/>
    </div>
  )
}

export default Default;