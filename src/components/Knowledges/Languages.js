import React, { Component } from "react";
import ProgressBar from "../Knowledges/ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1.8 },
      { id: 2, value: "Css", xp: 1.8 },
      { id: 3, value: "PHP", xp: 0.9 },
      { id: 4, value: "Python", xp: 0.9 },
    ],
    freamworks: [
      { id: 1, value: "React", xp: 1.5 },
      { id: 2, value: "Bootstraps", xp: 1.8 },
      { id: 3, value: "Sass", xp: 1.8 },
      { id: 4, value: "Vue.Js", xp: 0.9 },
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
