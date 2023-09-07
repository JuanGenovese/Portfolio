import React from 'react';
import style from "./AboutMe.module.css"

const AboutMe = () => {
  return (
    <div className={style.ConteinerImagen}>
        <div className={style.ConteinerSombra}>
            <div className={style.escrito}>
                <p>I am a person who goes fast... my terapist told me that it is anxiety (lol).
                 <br /> However, when coupled with my strong drive for personal growth, continuous learning, and resilience, it has propelled me significantly closer to my goals, while also enhancing my overall peace of mind</p>
            </div>
            <div className={style.separador}/>
            <img src="/Face2.jpg" className={style.imagen}/>
        </div>
        
    </div>
  )
}

export default AboutMe