import React from 'react';
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.Nav}>
      <p>JuanCruz Genovese</p>
      <nav className={style.Links}>
          <a href="/#about"><p>About,</p></a>
          <a href="/#work"><p>Work,</p></a>
          <a href="/#contact"><p>Contact,</p></a>
          <a href="https://www.instagram.com/independent.software/" target='blank'><p>we as coders</p></a>
      </nav>
    </div>
  )
}

export default NavBar;