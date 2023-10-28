import React from 'react';
import style from "./Blog.module.css";
import Datos from '../../components/Datos/Datos';
import AboutMe2 from '../../components/AboutMe2/AboutMe2';

const Blog = () => {
  return (
    <div className={style.blogConteiner}>
        <video className={style.Fondo} autoPlay loop muted>
            <source src="/Fondos/FondoBlog.mp4" type="video/mp4"></source>
        </video>
        <Datos/>
        <a href="/"><p className={style.nombre}>Juan Cruz Genovese</p></a>
        <a href="https://www.instagram.com/independent.software/" target='blank'><p className={style.weAsGrowers}>we as coders</p></a>
        <div className={style.presentacionConteiner}>
            <h1 className={style.presentacion}>I just want to help you</h1>
        </div>
        <AboutMe2/>
        
    </div>
  )
}

export default Blog