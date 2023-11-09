import React from 'react';
import style from "./Work.module.css";
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div className={style.ConteinerImagen}>
      <h1 className={style.ContainerImagenh1}> Work </h1>
      <div className={style.elNorte}>
        <img src="Fondos/Faso2.jpg" className={style.imagen}/>
        <div className={style.elNorteTexto}>
          <Link to="/ElNorteCultiva" className={style.Link}>
            <h1 className={style.elNorteTextoh1}>
              <span>EL NORTE CULTIVA</span>
              <br/>
              <span>CANNABIS CLUB </span>
            </h1>
            <p className={style.elNorteTextop}> an ecommerce serviced by an AI </p>
          </Link>
        </div>
      </div>
      <div className={style.Pokemon}>
        <img src="Fondos/Portada.jpg" className={style.pokemonImagen}/>
        <div className={style.pokemonTexto}>
          <Link to="/PokemonsApp" className={style.Link}>
            <h1 className={style.pokemonTextoh1}> POKEMONS APP </h1>
            <p className={style.pokemonTextop}> Just a Pokedex</p>
          </Link>
        </div>
      </div>
      <div className={style.jobPortal}>
        <img src="Fondos/FotoJobPortalX.jpg" className={style.jobPortalImagen}/>
        <div className={style.jobPortalTexto}>
          <Link to="/JobPortalX" className={style.Link}>
            <h1 className={style.jobPortalTextoh1}> JOB PORTAL X</h1>
            <p className={style.jobPortalTextop}> A job portal that connects companies with employees</p>
          </Link>   
        </div>
      </div>
    </div>

  )
}

export default Work