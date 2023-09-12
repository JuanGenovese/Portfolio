import React from 'react';
import style from "./ElNorteCultiva.module.css";

const ElNorteCultiva = () => {
  return (
    <div className={style.Conteiner}>
      <h1 className={style.Titulo}> EL NORTE CULTIVA</h1>
      <div className={style.proyectoContainer}>
        <div className={style.Data}>
          <p className={style.description}>An e-commerce designed for GrowShops with the aim of being able to provide advice and necessary products for both beginner and expert growers</p>
          <div className={style.info}>
            <p> YEAR </p>
            <span> 2023 </span>
            <p> ROLE </p>
            <span> Full-Stack Dev </span>
          </div>
        </div>
        <div className={style.carrousel}>
          <img src="ElNorteCultiva/Foto1.png" className={style.carrouselImagen}/>
          <img src="ElNorteCultiva/Foto2.png" className={style.carrouselImagen}/>
          <img src="ElNorteCultiva/Foto3.png" className={style.carrouselImagen}/>
          <img src="ElNorteCultiva/Foto4.png" className={style.carrouselImagen}/>
          <img src="ElNorteCultiva/Foto5.png" className={style.carrouselImagen}/>
        </div>
      </div>
        
    </div>
  )
}

export default ElNorteCultiva