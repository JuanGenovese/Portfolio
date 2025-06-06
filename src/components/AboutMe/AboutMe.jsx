import React, { useEffect, useRef }from 'react';
import style from "./AboutMe.module.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger );


const AboutMe = () => {

  const EscritoRef = useRef(null)
  
  useEffect(() => {

    const Escrito = EscritoRef.current

    gsap.to(Escrito, {
      scrollTrigger: {
        trigger: Escrito,
        start: "top 100%",
        end: "bottom 100%",
        //markers: true
      },
      opacity: 1,
      ease:"power1.inOut",
      duration: 0.75
    })

  }, [])

  return (
    <div className={style.ConteinerImagen}>
        <div ref={EscritoRef} className={style.ConteinerSombra}>
            <div className={style.escrito}>
                <p>Over the past two years, I’ve collaborated on projects building responsive, accessible front-end interfaces using React.<br/>My focus is always on understanding the business behind each project and translating it into web experiences that drive results—better conversions, higher user retention, and reduced technical debt</p>
            </div>
            <div className={style.separador}/>
            <img src="FotosPers/Face2.jpg" className={style.imagen}/>
        </div>
        
    </div>
  )
}

export default AboutMe