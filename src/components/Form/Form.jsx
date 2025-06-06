import React, { useState } from 'react';
import style from "./Form.module.css";
import emailjs from "@emailjs/browser";

const AboutMe2 = () => {

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_uj8y1b5";
    const templateId = "template_9smpswm";
    const publicKey = "P8vauKQB3tJQY08iS";

    const templateParams = {
        name: name,
        contact: contact,
        subject: subject,
        message:message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Your email was sent successfully! I´ll send you a message A$AP:) ");
        setName("");
        setContact("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        console.log("Error sent email:", error);
      });
  }


  return (
    <div className={style.Conteiner}>
        <div className={style.Background}>
          <form className={style.form} onSubmit={sendEmail}>
            <h2> Send me an email!</h2>
            <input 
              className={style.emailInput} 
              type="email" 
              placeholder='Email'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <input 
              className={style.subjectInput} 
              type="text"  
              placeholder='Topic'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input 
              className={style.subjectInput} 
              type="text" 
              placeholder='You name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea 
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit' onClick={sendEmail}> send </button>
          </form>
        </div>
    </div>
  )
}

export default AboutMe2;