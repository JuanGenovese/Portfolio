import React, { useEffect, useRef } from 'react';
import style from "./Presentacion.module.css";
import gsap from "gsap";

const Presentacion = () => {
  const FrontEndRef = useRef(null);
  const DeveloperRef = useRef(null);
  const Foto1Ref = useRef(null);
  const NombreRef = useRef(null);
  const LemaImgRef = useRef(null);

  useEffect(() => {

    const FrontEnd = FrontEndRef.current;
    const Developer = DeveloperRef.current;
    const Foto1 = Foto1Ref.current;
    const Nombre = NombreRef.current;
    const LemaImg = LemaImgRef.current;

    const tl = gsap.timeline();

    tl.fromTo(Foto1, {x: -200}, {x:0, duration:0.8, ease:"power1.out"})
      .fromTo(FrontEnd, {opacity:0}, { opacity: 1, duration:0.7, ease:"power1.inOut"})
      .fromTo(Developer, {opacity:0}, { opacity: 1, duration:0.7, ease:"power1.inOut"})
      .fromTo(Nombre, {x: 800}, {x:0, duration:0.8, ease:"power1.inOut"})
      .fromTo(LemaImg, {opacity: 0}, {opacity: 1, duration: 1, ease:"power1.inOut"})


    return () => {
    }
  }, []);

  return (
    <div className={style.conteiner}>
        <div className={style.frontEnd}>
            <img src="FotosPers/Mifoto.jpg" className={style.imagen} ref={Foto1Ref}/>
            <h1 ><span ref={FrontEndRef}>FRONT END</span><br/><span ref={DeveloperRef}>DEVELOPER</span></h1>
        </div>
        <div className={style.nombre}>
          <div className={style.lemaImg} ref={LemaImgRef}>
            <img src='icons/FlechaAbajoBlanca.png' className={style.imagen2}/>
            <p> My job is <br />to learn</p>
          </div>
          <h1 ref={NombreRef}> JUAN CRUZ GENOVESE</h1>
        </div>
    </div>
    
  )
}

export default Presentacion