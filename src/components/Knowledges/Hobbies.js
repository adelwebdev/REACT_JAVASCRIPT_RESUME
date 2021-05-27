import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Интересы</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-check-running"></i>
          <span>Чтение</span>
        </li>
        <li className="hobby">
          <i className="fas fa-check-hikking"></i>
          <span>Путешествие</span>
        </li>
        <li className="hobby">
          <i className="fas fa-check-seedling"></i>
          <span>Программное обеспечение</span>
        </li>
        <li className="hobby">
          <i className="fas fa-check-bitcoin"></i>
          <span>Плавание</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
