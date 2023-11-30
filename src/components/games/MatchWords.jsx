import { Box, Grid } from "@mui/material";
import React from "react";
import DuoButton from "../base/DuoButton";
import _ from "lodash";

import styles from "./games.module.css";

const words = [

    {
        arm: 'դու',
        eng: 'you'
    },
    {
        arm: 'դուք',
        eng: 'you'
    },
    {
        arm: 'գրել',
        eng: 'to write'
    },
    {
        arm: 'կարդալ',
        eng: 'to read'
    },
    {
        arm: 'խմել',
        eng: 'to drink'
    },
    {
        arm: 'ուտել',
        eng: 'to eat'
    }
];

class MatchWords extends React.Component {
    constructor(props) {
        super(props);

        const roundWords = _.sampleSize(words, 4).map((word, idx) => Object.assign({}, word, { index: idx }));

        this.state = {
            hyWords: _.shuffle(roundWords).map((word) => ({index: word.index, word: word.arm})),
            engWords: _.shuffle(roundWords).map((word) => ({index: word.index, word: word.eng})),
        };
    }

    render() {
        const { hyWords, engWords } = this.state;
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box>
            <Grid container spacing={2}>
                {hyWords.map((word, idx) => (
              <Grid item xs={12} key={word.index}>
                <DuoButton><span className={styles.word_option}>{word.word}</span></DuoButton>
              </Grid>))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Grid container spacing={2}>
            {engWords.map((word) => (
              <Grid item xs={12} key={word.index}>
                <DuoButton><span className={styles.word_option}>{word.word}</span></DuoButton>
              </Grid>))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
    }
};

export default MatchWords;
