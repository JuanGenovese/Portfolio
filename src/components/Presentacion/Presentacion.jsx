import React, { useEffect, useRef } from 'react';
import style from "./Presentacion.module.css";
import gsap from "gsap";

const Presentacion = () => {
  const FrontEndRef = useRef(null);
  const DeveloperRef = useRef(null);
  const Foto1Ref = useRef(null);

  useEffect(() => {

    const FrontEnd = FrontEndRef.current;
    const Developer = DeveloperRef.current;
    const Foto1 = Foto1Ref.current;
  });

  return (
    <div className={style.conteiner}>
        <div className={style.frontEnd} >
            <img src="FotosPers/Mifoto.jpg" className={style.imagen} ref={Foto1Ref}/>
            <h1 ><span ref={FrontEndRef}>FRONT END</span><br/><span ref={DeveloperRef}>DEVELOPER</span></h1>
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