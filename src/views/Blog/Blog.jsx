import React, { useEffect } from 'react';
import style from "./Blog.module.css";
import Datos from '../../components/Datos/Datos';
import AboutMe2 from '../../components/AboutMe2/AboutMe2';

const Blog = () => {
  useEffect(() => {
 window.scrollTo(0, 0)
  }, [])
  return (
    <div className={style.blogConteiner}>
      <video className={style.Fondo} autoPlay loop muted>
        <source src="/Fondos/FondoBlog.mp4" type="video/mp4"></source>
      </video>
      <div className={style.primeraVista}>
        <Datos/>
        <a href="/"><p className={style.nombre}>Juan Cruz Genovese</p></a>
        <a href="https://www.instagram.com/independent.software/" target='blank'><p className={style.weAsGrowers}>we as coders</p></a>
        <div className={style.presentacionConteiner}>
            <h1 className={style.presentacion}>DO YOU WANT TO WORK WITH ME? <br />OR JUST MAKE A FRIEND...</h1>
        </div>
      </div> 
      <AboutMe2/>
      <div className={style.relleno}> IndependenT dev</div>
    </div>
  )
}

export default Blog