import React from 'react';
import style from "./JobPortalX.module.css";

const JobPortalX = () => {
  return (
    <div className={style.Conteiner}>
      <h1 className={style.Titulo}> POKEMONS APP</h1>
      <div className={style.proyectoContainer}>
        <div className={style.Data}>
          <p className={style.description}>A tool to obtain basic information about Pokémons where you can also create your own. This project was part of the final delivery for Henry Bootcamp</p>
          <div className={style.info}>
            <p> YEAR </p>
            <span> 2022 </span>
            <p> ROLE </p>
            <span> Full-Stack Dev </span>
          </div>
        </div>
        <div className={style.carrousel}>
          <img src="PokemonsApp/Foto1.png" className={style.carrouselImagen}/>
          <img src="PokemonsApp/Foto2.png" className={style.carrouselImagen}/>
          <img src="PokemonsApp/Foto3.png" className={style.carrouselImagen}/>
          <img src="PokemonsApp/Foto4.png" className={style.carrouselImagen}/>
        </div>
      </div>
    </div>
  )
}

export default JobPortalX