import React from 'react';
import style from "./Default.module.css";
import NavBar from '../../components/NavBar/NavBar';
import Datos from '../../components/Datos/Datos';
import Presentacion from '../../components/Presentacion/Presentacion';
import AboutMe from '../../components/AboutMe/AboutMe';
import Work from '../../components/Work/Work';
import AboutMe2 from '../../components/AboutMe2/AboutMe2';

const Default = () => {
  return (
    <div className={style.contPrincipal}>
      <NavBar/>
      <Datos/>
      <Presentacion/>
      <AboutMe/>
      <Work/>
      <AboutMe2/>
    </div>
  )
}

export default Default;