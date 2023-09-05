import React from 'react';
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.Nav}>
        <p>JuanCruz Genovese</p>
        <nav className={style.Links}>
            <a href=""><p>Work</p></a>
            <a href=""><p>About</p></a>
            <a href=""><p>Contact</p></a>
            <a href=""><p>Me as grower</p></a>
        </nav>
    </div>
  )
}

export default NavBar;