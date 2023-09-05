import React from 'react';
import style from "./Default.module.css";
import NavBar from '../../components/NavBar/NavBar';
import Datos from '../../components/Datos/Datos';

const Default = () => {
  return (
    <div className={style.contPrincipal}>
      <NavBar/>
      <Datos/>
      <div className={style.frontEnd}>
        <img src="/Mifoto.jpg" className={style.imagen}/>
        <h1>DESARROLLADOR FRONT END</h1>
      </div>
      <div>
        <p> arrow </p>
        <p> Me dedico a aprender</p>
        <h1> JUAN CRUZ GENOVESE</h1>
      </div>
    </div>
  )
}

export default Default;