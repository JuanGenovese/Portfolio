import React from 'react';
import style from "./Form.module.css";

const AboutMe2 = () => {
  return (
    <div className={style.Conteiner}>
        <div className={style.Background}>
          <form className={style.form}>
            <h2> Send me an email to talk!</h2>
            <input className={style.emailInput} type="email" placeholder='Email'/>
            <input className={style.subjectInput} type="text" placeholder='Subject'/>
            <textarea placeholder='Drop your message here :)'/>
            <button> send </button>
          </form>
        </div>
    </div>
  )
}

export default AboutMe2;