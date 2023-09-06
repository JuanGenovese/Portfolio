import React from 'react';
import style from "./AboutMe.module.css"

const AboutMe = () => {
  return (
    <div className={style.ConteinerImagen}>
        <div className={style.ConteinerSombra}>
            <div className={style.escrito}><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur commodi omnis iusto ex perspiciatis eum similique veritatis molestias vel</p></div>
            <div className={style.separador}/>
            <div className={style.imagen}>
                
            </div>
        </div>
        
    </div>
  )
}

export default AboutMe