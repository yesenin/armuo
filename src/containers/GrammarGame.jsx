import React from "react";
import MatchWords from "../components/games/MatchWords";
import ComposeSentence from "../components/games/ComposeSentence";
import _ from "lodash";
import Calendar from "../components/games/Calendar";

const alphabetGameModes = [
  "ComposeSentence",
  "MatchWords",
  "Calendar",
  "ChooseNumber",
];

class GrammarGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: _.sample(alphabetGameModes),
    };
  }

  render() {
    const { mode } = this.state;
    let gameComponent = null;
    switch (mode) {
      case "ComposeSentence":
        gameComponent = <ComposeSentence />;
        break;
      case "MatchWords":
        gameComponent = <MatchWords />;
        break;
      case "Calendar":
        gameComponent = <Calendar />;
        break;
      default:
        gameComponent = <h1>Unknown game mode: {mode}</h1>;
    }
    return <>{gameComponent}</>;
  }
}

export default GrammarGame;
