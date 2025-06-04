import React, { useEffect, useRef } from 'react';
import style from "./Datos.module.css";
import gsap from "gsap";

const Datos = () => {
  const FreelancerRef = useRef(null);
  const LocationRef = useRef(null);

  useEffect(() => {
    const Freelancer = FreelancerRef.current;
    const Location = LocationRef.current;

    const animacion1 = gsap.fromTo(Freelancer, {y: -70}, {y: 0, duration: 0.6, ease: "power1.out"})
    const animacion2 = gsap.fromTo(Location, {y: -90}, {y: 0, duration: 0.8, ease: "power1.out"})

    return () => {
      animacion1.kill()
      animacion2.kill()
    }
  })

  return (
    <div className={style.datosPersonales}>
      <p ref={FreelancerRef}> Currently freelance <br></br> developer</p>
      <p ref={LocationRef}> Based in Argentina <br></br>Córdoba</p>
    </div>
  )
}

export default Datos