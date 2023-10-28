import React from 'react';
import style from "./JobPortalX.module.css";

const JobPortalX = () => {
  return (
    <div className={style.Conteiner}>
      <h1 className={style.Titulo}> JOB PORTAL X</h1>
      <div className={style.proyectoContainer}>
        <div className={style.Data}>
          <p className={style.description}>A tool to connect employees with employers and get a job. This project was part of the final delivery for Henry Bootcamp</p>
          <div className={style.info}>
            <p> YEAR </p>
            <span> 2023 </span>
            <p> ROLE </p>
            <span> Front-End Dev </span>
          </div>
        </div>
        <div className={style.carrousel}>
          <img src="JobPortalX/imagen1.png" className={style.carrouselImagen}/>
          <img src="JobPortalX/imagen2.png" className={style.carrouselImagen}/>
          <img src="JobPortalX/imagen3.png" className={style.carrouselImagen}/>
          <img src="JobPortalX/imagen4.png" className={style.carrouselImagen}/>
        </div>
      </div>
    </div>
  )
}

export default JobPortalX