import React, { Component } from "react";
import ProgressBar from "../Knowledges/ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1.8 },
      { id: 2, value: "Css", xp: 2 },
      { id: 3, value: "Php", xp: 0.7 },
      { id: 4, value: "Python", xp: 0.4 },
    ],
    freamworks: [
      { id: 1, value: "React", xp: 1.4 },
      { id: 2, value: "Bootstraps", xp: 2 },
      { id: 3, value: "Sass", xp: 1.5 },
      { id: 4, value: "Material UI", xp: 0.5 },
    ],
  };

  render() {
    let { languages, freamworks } = this.state;

    return (
      <div className="languagesFreamworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="Языки программирования"
        />
        <ProgressBar
          languages={freamworks}
          className="freamworksDisplay"
          title="Фреймворк"
        />
      </div>
    );
  }
}

export default Languages;
