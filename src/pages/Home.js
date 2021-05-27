import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Адель БУАТТА</h1>
          <h2>Front-End Программист</h2>
          <h3>
            React. Redux. TypeScript. 
            <br />
            Css. Bootstraps. Sacc.
            <br />
            GitHub. SEO.
          </h3>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Скачать резюме
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
