import React, { useRef, useState } from "react";
import linkedInLogo from "../assets/linkedIn.png";
import githubLogo from "../assets/github.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const apiKey = process.env.REACT_APP_API_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(
      (result) => {
        console.log(result.text);
        toast.success(
          "Merci pour votre message, je vous réponds dès que possible !",
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          }
        );
        setUsername("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log(error.text);
        toast.error("Le formulaire n'a pas pu être envoyé !", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    );
  };

  return (
    <div className="contact" id="contact">
      <p className="contact__title">Contact</p>

      <div className="contact__social">
        <p>Pour m'écrire :</p>
        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Votre message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Go !</button>
        </form>
      </div>

      <div className="contact__logos">
        <p>Christelle Legros</p>
        <p>64480 USTARITZ</p>
        <p>&#x260E; 06 87 24 54 57</p>

        <div className="contact__logosImg">
          <a
            href="https://www.linkedin.com/in/christelle-legros-b89885110/?originalSubdomain=fr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInLogo} alt="Logo LinkedIn" />
          </a>

          <a
            href="https://github.com/Christelle-Legros?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="Logo Github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
