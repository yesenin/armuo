import { Box, Container, Grid, LinearProgress } from "@mui/material";
import React from "react";
import DuoButton from "../base/DuoButton";
import { playNumber } from "../../services/player";
import _ from "lodash";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import styles from "./games.module.css";
import DuoToggle from "../base/DuoToggle";

const makeOptions = (limit, count, except) => {
  const result = [];
  if (except > 10) {
    let a = 0;
    while (a === 0) {
      const candidate = Math.floor(Math.random() * limit) + 1;
      if (candidate % 10 === except % 10 && !except.includes(candidate)) {
        a = candidate;
      }
    }
    result.push(a);
    let b = 0;
    while (b === 0) {
      const candidate = Math.floor(Math.random() * limit) + 1;
      if (
        Math.floor(candidate / 10) === Math.floor(except / 10) &&
        !except.includes(candidate)
      ) {
        b = candidate;
      }
    }
    result.push(b);
  }
  while (result.length < count) {
    const candidate = Math.floor(Math.random() * limit) + 1;
    if (!except.includes(candidate) && !result.includes(candidate)) {
      result.push(candidate);
    }
  }
  return result;
};

class ChooseNumber extends React.Component {
  constructor(props) {
    super(props);

    const target = Math.floor(Math.random() * 99) + 1;
    const options = makeOptions(99, 3, [target]);

    this.state = {
      number: target,
      options: _.shuffle([...options, target]),
      answer: null,
      time: 10,
    };
  }

  setAnswer = (a) => {
    this.setState({
      answer: a,
    });
  };

  checkAnswer = () => {
    const { answer, number } = this.state;
    const { onCorrectAnswer, onIncorrectAnswer } = this.props;
    if (answer === number) {
      onCorrectAnswer && onCorrectAnswer();
    } else {
      onIncorrectAnswer && onIncorrectAnswer();
    }

    this.createNewRound();
  };

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { number } = this.state;
    if (number !== prevState.number) {
      playNumber(number);
    }
  }

  createNewRound = () => {
    const target = Math.floor(Math.random() * 99) + 1;
    const options = makeOptions(99, 3, [target]);
    this.setState({
      number: target,
      options: _.shuffle([...options, target]),
      answer: null,
      time: 10,
    });
  };

  render() {
    const { number, options, answer, time } = this.state;
    return (
      <Container>
        <Box>
          <DuoButton
            className={styles.play_button}
            onClick={() => playNumber(number)}
          >
            <VolumeUpIcon fontSize="large" />
          </DuoButton>
        </Box>
        <Box>
          <Grid container spacing={1}>
            {options.map((n, idx) => (
              <Grid key={idx} item xs={2}>
                <DuoToggle
                  toggle={answer === n}
                  className={styles.option_button}
                  onClick={() => this.setAnswer(n)}
                >
                  {n}
                </DuoToggle>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Grid container>
            <Grid item xs={4}>
              <DuoButton
                className={styles.control_button}
                onClick={() => this.checkAnswer()}
              >
                Check
              </DuoButton>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default ChooseNumber;
