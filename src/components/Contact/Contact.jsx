import React from 'react';
import style from "./Contact.module.css";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className={style.contactConteiner}>
      <h1 className={style.Title}> Contact </h1>
      <Link to="/Blog">
        <p className={style.email}>juancruzgenovese22@gmail.com</p>
      </Link>
    </div>
  )
}

export default Contact