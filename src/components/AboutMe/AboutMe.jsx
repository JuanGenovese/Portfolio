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
                <p>I am a person who goes fast... my terapist told me that it is anxiety (lol).
                <br/> However, when coupled with my strong drive for personal growth, continuous learning, and resilience, it has propelled me significantly closer to my goals, while also enhancing my overall peace of mind</p>
            </div>
            <div className={style.separador}/>
            <img src="FotosPers/Face2.jpg" className={style.imagen}/>
        </div>
        
    </div>
  )
}

export default AboutMe