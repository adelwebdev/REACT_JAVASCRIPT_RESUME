import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Свяжитесь со мной</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Москва</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="+79777261796">
                <span
                  className="clickInput"
                  onClick={() => alert("Номер телефона скопирован!")}
                >
                  +7-977-726-17-96
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="admb34@yandex.ru">
                <span
                  className="clickInput"
                  onClick={() => alert("электронная почта скопирована!")}
                >
                  admb34@yandex.ru
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="http://www.linkedin.com/AlwaysOnTop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Linkedin</h4>
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adelwebdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>GitHub</h4>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Adel55439734"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Twitter</h4>
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/adelwebdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Codepen</h4>
                <i className="fab fa-codepen"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
