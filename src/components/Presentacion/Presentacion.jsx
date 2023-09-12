import React from 'react';
import style from "./Presentacion.module.css"

const Presentacion = () => {
  return (
    <div className={style.conteiner}>
        <div className={style.frontEnd}>
            <img src="FotosPers/Mifoto.jpg" className={style.imagen}/>
            <h1>FRONT END<br/>DEVELOPER</h1>
        </div>
        <div className={style.nombre}>
          <div className={style.lemaImg}>
            <img src='icons/FlechaAbajoBlanca.png' className={style.imagen2}/>
            <p> My job is <br />to learn</p>
          </div>
          <h1> JUAN CRUZ GENOVESE</h1>
        </div>
    </div>
    
  )
}

export default Presentacion