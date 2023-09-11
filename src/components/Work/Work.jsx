import React from 'react';
import style from "./Work.module.css";

const Work = () => {
  return (
    <div className={style.ContainerImagen}>
      <h1 className={style.ContainerImagenh1}> Work </h1>
      <div className={style.elNorte}>
        <img src="/Faso2.jpg" className={style.imagen}/>
        <div className={style.elNorteTexto}>
          <h1 className={style.elNorteTextoh1}>
            <span>EL NORTE CULTIVA</span>
            <br/>
            <span>CANNABIS CLUB </span>
          </h1>
          <p className={style.elNorteTextop}> an ecommerce serviced by an AI </p>
        </div>
      </div>
      <div className={style.Pokemon}>
        <img src="/Portada.jpg" className={style.pokemonImagen}/>
        <div className={style.pokemonTexto}>
          <h1 className={style.pokemonTextoh1}> POKEMONS APP </h1>
          <p className={style.pokemonTextop}> Just a Pokedex</p>
        </div>
      </div>
      <div className={style.jobPortal}>
        <img src="/FotoJobPortalX.jpg" className={style.jobPortalImagen}/>
        <div className={style.jobPortalTexto}>
          <h1 className={style.jobPortalTextoh1}> JOB PORTAL X</h1>
          <p className={style.jobPortalTextop}> A job portal that connects companies with employees</p>
        </div>
      </div>
    </div>

  )
}

export default Work