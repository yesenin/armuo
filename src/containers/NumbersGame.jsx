import _ from "lodash";
import React from "react";
import ChooseNumber from "../components/games/ChooseNumber";
import { useOutletContext } from "react-router";

const alphabetGameModes = ["ChooseNumber"];

const NumberGameFunc = () => {
  const { incrementCorrect, incrementIncorrect } = useOutletContext();
  return (
    <NumbersGame
      incrementCorrect={incrementCorrect}
      incrementIncorrect={incrementIncorrect}
    />
  );
};

class NumbersGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: _.sample(alphabetGameModes),
    };
  }

  render() {
    const { mode } = this.state;
    const { incrementCorrect, incrementIncorrect } = this.props;
    let gameComponent = null;
    switch (mode) {
      case "ChooseNumber":
        gameComponent = (
          <ChooseNumber
            onCorrectAnswer={incrementCorrect}
            onIncorrectAnswer={incrementIncorrect}
          />
        );
        break;
      default:
        gameComponent = <h1>Unknown game mode: {mode}</h1>;
    }
    return <>{gameComponent}</>;
  }
}

export default NumberGameFunc;
