import React, { useState } from "react";
import styles from "./containers.module.css";
import { Link, Outlet } from "react-router-dom";
import {Box, Grid, LinearProgress} from "@mui/material";

const skip = () => {
  window.location.reload();
};

const Game = () => {
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);

    const [time, setTime] = useState(10);

    const incrementCorrect = () => {
        setCorrect(correct + 1);
    };

    const a = (t) => {
        setInterval(() => {
            if (time === 0) {
                incrementCorrect();
            }
            t = t - 1;
            setTime(time);
        }, 1000);
    }

    a(time);

  const incrementIncorrect = () => {
    setIncorrect(incorrect + 1);
  };
  return (
    <div className={styles.game}>
      <div className={styles.game_header}>
        <div className={styles.game_table}>
          <span className={styles.correct}>{correct}</span>:
          <span className={styles.incorrect}>{incorrect}</span>
        </div>
          <Box>
              <LinearProgress variant="determinate" value={time * 10} />
          </Box>
      </div>
      <div className={styles.game_content}>
        <Outlet context={{ incrementCorrect, incrementIncorrect }} />
      </div>
      <div className={styles.game_footer}>
          <Grid container spacing={3}>
              <Grid item xs={2} />
              <Grid item xs={2}>
                  <Link to="/">Finish</Link>
                  <span onClick={() => skip()}>Skip</span>
              </Grid>
          </Grid>
      </div>
    </div>
  );
};

export default Game;
