import React from 'react';
import style from "./Default.module.css";
import NavBar from '../../components/NavBar/NavBar';
import Datos from '../../components/Datos/Datos';
import Presentacion from '../../components/Presentacion/Presentacion';
import AboutMe from '../../components/AboutMe/AboutMe';
import Work from '../../components/Work/Work'; 
import Contact from '../../components/Contact/Contact';

const Default = () => {
  return (
    <div className={style.contPrincipal}>
      <NavBar/>
      <Datos/>
      <Presentacion/>
      <div id="about" className={style.AboutMeCont}>
        <AboutMe/>
      </div>
      <div id="work" className={style.WorkCont}>
        <Work/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      
    </div>
  )
}

export default Default;