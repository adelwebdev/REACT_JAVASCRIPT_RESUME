import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Извините, этой страницы не существует!</h3>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span>Дом</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
