import React, { useEffect, useRef } from 'react';
import style from "./NavBar.module.css";
import gsap from "gsap"

const NavBar = () => {
  const MenuItem1Ref = useRef(null)
  const MenuItem2Ref = useRef(null)
  const MenuItem3Ref = useRef(null)
  const MenuItem4Ref = useRef(null)
  const JuanCruzRef = useRef(null)

  useEffect(() => {
    const MenuItem1 = MenuItem1Ref.current;
    const MenuItem2 = MenuItem2Ref.current;
    const MenuItem3 = MenuItem3Ref.current;
    const MenuItem4 = MenuItem4Ref.current;
    const JuanCruz = JuanCruzRef.current;

    const animacion1 = gsap.fromTo(MenuItem1, {y:-110}, {y: 0, duration: 1,ease: "power1.out"})
    const animacion2 = gsap.fromTo(MenuItem2, {y:-130}, {y: 0, duration: 1.2,ease: "power1.out"})
    const animacion3 = gsap.fromTo(MenuItem3, {y:-150}, {y: 0, duration: 1.4,ease: "power1.out"})
    const animacion4 = gsap.fromTo(MenuItem4, {y:-170}, {y: 0, duration: 1.6,ease: "power1.out"})
    const animacion5 = gsap.fromTo(JuanCruz, {y: -50}, {y: 0, duration: 0.4, ease: "power1.out"})
    
    return () => {
      animacion1.kill()
      animacion2.kill()
      animacion3.kill()
      animacion4.kill()
      animacion5.kill()
    }
    
  })

  return (
    <div className={style.Nav}>
      <p ref={JuanCruzRef}>JuanCruz Genovese</p>
      <nav className={style.Links}>
        <a href="/#about"><p ref={MenuItem1Ref}>About,</p></a>
        <a href="/#work"><p ref={MenuItem2Ref}>Work,</p></a>
        <a href="/#contact" className={style.contactLink}><p ref={MenuItem3Ref} className={style.contact}>Contact me,</p></a>
        <a href="https://www.instagram.com/weareindependents/" target='blank'><p ref={MenuItem4Ref}>we as coders</p></a>
      </nav>
    </div>
  )
}

export default NavBar;