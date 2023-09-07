import React from 'react';
import style from "./Work.module.css";

const Work = () => {
  return (
    <div className={style.ContainerImagen}>
      <h1 className={style.ContainerImagenh1}> Work </h1>
      <div className={style.elNorte}>
        <img src="/Faso2.jpg" className={style.imagen}/>
        <div className={style.elNorteTexto}>
          <h1 className={style.elNorteTextoh1}> EL NORTE CULTIVA <br /> CANNABIS CLUB </h1>
          <p> an ecommerce serviced by an AI </p>
        </div>
      </div>
      <div className={style.Pokemon}>
        <img src="/Portada.jpg" className={style.pokemonImagen}/>
        <div className={style.pokemonTexto}>
          <h1 className={style.pokemonTextoh1}> POKEDEX </h1>
          <p> Just a Pokedex</p>
        </div>
      </div>
    </div>

  )
}

export default Work