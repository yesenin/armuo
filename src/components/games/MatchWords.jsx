import { Box, Grid } from "@mui/material";
import React from "react";
import DuoButton from "../base/DuoButton";
import _ from "lodash";

import styles from "./games.module.css";
import DuoToggle from "../base/DuoToggle";

const words = [
  {
    id: 1,
    arm: "դու",
    eng: "you",
  },
  {
    id: 2,
    arm: "դուք",
    eng: "you",
  },
  {
    id: 3,
    arm: "գրել",
    eng: "to write",
  },
  {
    id: 4,
    arm: "կարդալ",
    eng: "to read",
  },
  {
    id: 5,
    arm: "խմել",
    eng: "to drink",
  },
  {
    id: 6,
    arm: "ուտել",
    eng: "to eat",
  },
];

class MatchWords extends React.Component {
  constructor(props) {
    super(props);

    const roundWords = _.sampleSize(words, 4).map((word, idx) =>
      Object.assign({}, word, { index: idx }),
    );

    this.state = {
      hyWords: _.shuffle(roundWords).map((word) => ({
        id: word.id,
        index: word.index,
        word: word.arm,
      })),
      engWords: _.shuffle(roundWords).map((word) => ({
        id: word.id,
        index: word.index + 100,
        word: word.eng,
      })),
      selectedHy: null,
      selectedEng: null,
    };
  }

  onHyClick = (id) => {
    const {selectedEng, selectedHy} = this.state;
    if (selectedHy === id) {
      this.setState({
        selectedHy: null,
      });
      return;
    }

    this.setState({
      selectedHy: id,
    });

    if (selectedEng !== null) {
      this.checkMatch(id, selectedEng);
    }
  }

  onEngClick = (id) => {
    const {selectedEng, selectedHy} = this.state;

    if (selectedEng === id) {
      this.setState({
        selectedEng: null,
      });
      return;
    }

    this.setState({
      selectedEng: id,
    })

    if (selectedHy !== null) {
      this.checkMatch(selectedHy, id);
    }
  }

  checkMatch = (hy, eng) => {
    if (hy === eng) {
      console.log("MATCH!!!");
    }
    const hyWord = _.find(words, (w) => w.id === hy);
    const engWord = _.find(words, (w) => w.id === eng);

    if (engWord.eng === hyWord.eng )
    {
      console.log("MATCH!!!");
    }
    // check by word
    this.setState({
      selectedHy: null,
      selectedEng: null,
    });
  }

  render() {
    const { hyWords, engWords, selectedHy, selectedEng } = this.state;

    return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box>
              <Grid container spacing={2}>
                {hyWords.map((word, idx) => (
                    <React.Fragment key={word.index}>
                      <Grid item xs={4}></Grid>
                  <Grid item xs={8}>
                    <DuoToggle toggle={selectedHy === word.id} onClick={() => this.onHyClick(word.id)}>
                      <div className={styles.word_option}>{word.word} {word.id}</div>
                    </DuoToggle>
                  </Grid>
                    </React.Fragment>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Grid container spacing={2}>
                {engWords.map((word) => (
                  <Grid item xs={8} key={word.index}>
                    <DuoToggle toggle={selectedEng === word.id} onClick={() => this.onEngClick(word.id)}>
                      <div className={styles.word_option}>{word.word} {word.id}</div>
                    </DuoToggle>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default MatchWords;
