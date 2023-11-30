import _ from "lodash";
import React from "react";
import ChooseByLetter from "../components/games/ChooseByLetter";
import ChooseBySound from "../components/games/ChooseBySound";
import CollectWord from "../components/games/CollectWord";
import MatchLetterWithIpa from "../components/games/MatchLetterWithIpa";

const alphabetGameModes = [
  "ChooseByLetter",
  "ChooseBySound",
  "CollectWord",
  "MatchLetterWithIpa",
];

class AlphabetGame extends React.Component {
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
      case "ChooseByLetter":
        gameComponent = <ChooseByLetter />;
        break;
      case "ChooseBySound":
        gameComponent = <ChooseBySound />;
        break;
      case "CollectWord":
        gameComponent = <CollectWord />;
        break;
      case "MatchLetterWithIpa":
        gameComponent = <MatchLetterWithIpa />;
        break;
      default:
        gameComponent = <h1>Unknown game mode: {mode}</h1>;
    }
    return <>{gameComponent}</>;
  }
}

export default AlphabetGame;
