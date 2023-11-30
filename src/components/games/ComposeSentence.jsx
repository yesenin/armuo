import React from "react";
import Tile from "../base/Tile";
import styles from "./games.module.css";
import DuoButton from "../base/DuoButton";
import _ from "lodash";
import { Button, Typography } from "@mui/material";

const lessons = [
  {
    sample: "I'm writing a letter",
    expected: "Ես նամակ եմ գրում:",
    options: [
      "ես",
      "դու",
      "գրում",
      "կարդում",
      "գրել",
      "նամակ",
      "գիրկ",
      "ես",
      "եմ",
    ],
  },
  {
    sample: "I'm reading a book",
    expected: "Ես գիրկ եմ կարդում:",
    options: [
      "ես",
      "դու",
      "գրում",
      "գիրկ",
      "գրել",
      "նամակ",
      "գիրկ",
      "կարդում",
      "եմ",
    ],
  },
  {
    sample: "You are writing a letter",
    expected: "Դու նամակ ես գրում:",
    options: ["ես", "դու", "գրում", "ես", "գրել", "նամակ", "գիրկ", "դու", "եմ"],
  },
  {
    sample: "She is writing a letter",
    expected: "Նա նամակ է գրում:",
    options: ["նա", "դու", "գրում", "ես", "գրել", "նամակ", "գիրկ", "դու", "է"],
  },
];

class ComposeSentence extends React.Component {
  constructor(props) {
    super(props);

    const i = Math.floor(Math.random() * lessons.length);
    const lesson = lessons[i];

    this.state = {
      sample: lesson.sample,
      userSentence: [],
      roundOptions: _.shuffle(lesson.options).map((option, idx) => ({
        word: option,
        index: idx,
      })),
      result: null,
      expected: lesson.expected,
      actual: null,
    };
  }

  moveInUserWord = (userWord) => {
    let { userSentence, roundOptions } = this.state;
    userSentence.push(
      Object.assign({}, userWord, { userIndex: userSentence.length }),
    );
    roundOptions = roundOptions.filter((word) => word !== userWord);
    roundOptions = _.sortBy(roundOptions, "index");
    this.setState({ userSentence, roundOptions });
  };

  moveOutUserWord = (userWord) => {
    let { userSentence, roundOptions } = this.state;
    delete userWord.userIndex;
    roundOptions.push(userWord);
    userSentence = userSentence.filter((word) => word !== userWord);
    roundOptions = _.sortBy(roundOptions, "index");
    this.setState({ userSentence, roundOptions });
  };

  check = () => {
    let { userSentence, expected } = this.state;
    const sentence =
      userSentence
        .map((w) => w.word)
        .join(" ")
        .toLowerCase() + ":";
    this.setState({
      result:
        sentence === expected.toLowerCase() ? "Correct!" : "Incorrect :-/",
      actual: sentence,
    });
  };

  render() {
    const { userSentence, roundOptions, result, sample, expected } = this.state;
    return (
      <div className={styles.compose_container}>
        <div>Compose "{sample}" in Armenian:</div>
        <div className={styles.userSentence_container}>
          <div className={styles.word_options}>
            {userSentence.map((word) => {
              return (
                <DuoButton
                  key={word.index}
                  onClick={() => this.moveOutUserWord(word)}
                >
                  <span className={styles.word_option}>{word.word}</span>
                </DuoButton>
              );
            })}
          </div>
        </div>
        <div className={styles.word_options}>
          {roundOptions.map((option) => {
            return (
              <DuoButton
                key={option.index}
                onClick={() => this.moveInUserWord(option)}
              >
                <span className={styles.word_option}>{option.word}</span>
              </DuoButton>
            );
          })}
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.check()}
          >
            Check
          </Button>
          {result && <Typography variant="h4">Result: {result}</Typography>}
          {result && <Typography variant="h6">Expected: {expected}</Typography>}
          {result && (
            <Typography variant="h6">Actual: {this.state.actual}</Typography>
          )}
        </div>
      </div>
    );
  }
}

export default ComposeSentence;
