import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Интересы</h3>
      <ul>
        <li className="hobby">
          <i class="fas fa-book"></i>
          <span>Чтение</span>
        </li>
        <li className="hobby">
          <i class="fas fa-plane-departure"></i>
          <span>Путешествие</span>
        </li>
        <li className="hobby">
          <i class="fas fa-laptop-code"></i>
          <span>Программное обеспечение</span>
        </li>
        <li className="hobby">
          <i class="fas fa-swimmer"></i>
          <span>Плавание</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
