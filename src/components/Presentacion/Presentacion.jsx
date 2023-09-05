import React from 'react';
import style from "./Presentacion.module.css"

const Presentacion = () => {
  return (
    <div className={style.conteiner}>
        <div className={style.frontEnd}>
            <img src="/Mifoto.jpg" className={style.imagen}/>
            <h1>DESARROLLADOR <br/>FRONT END</h1>
        </div>
    </div>
    
  )
}

export default Presentacion