import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sideBar">
      <div className="id">
        <div className="idContent">
          <img src="./media/photo_AB.jpg" alt="it is me" />
          <h3>Адель Буатта</h3>
        </div>
      </div>

      <div className="Navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Дом</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Навыки и умения" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Навыки и умения</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Портфолио" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Портфолио</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Контакт" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Контакт</span>
            </NavLink>
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
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adelwebdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Adel55439734"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/adelwebdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Адель Буатта © - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
