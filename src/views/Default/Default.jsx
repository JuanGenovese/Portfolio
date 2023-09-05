import React from 'react';
import style from "./Default.module.css";
import NavBar from '../../components/NavBar/NavBar';
import Datos from '../../components/Datos/Datos';
import Presentacion from '../../components/Presentacion/Presentacion';

const Default = () => {
  return (
    <div className={style.contPrincipal}>
      <NavBar/>
      <Datos/>
      <Presentacion/>
      <div>
        <p> arrow </p>
        <p> Me dedico a aprender</p>
        <h1> JUAN CRUZ GENOVESE</h1>
      </div>
    </div>
  )
}

export default Default;