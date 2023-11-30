import React from "react";
import Tile from "./base/Tile";

import styles from "./components.module.css";
import DuoButton from "./base/DuoButton";

import cx from "classnames";
import { Box, LinearProgress } from "@mui/material";
import clsx from "clsx";

const LetterTile = ({ letter, fontClass }) => {
  let fontStyle = styles.arm1;
  switch (fontClass) {
    case "arm1":
      fontStyle = styles.arm1;
      break;
    case "arm2":
      fontStyle = styles.arm2;
      break;
    case "arm3":
      fontStyle = styles.arm3;
      break;
    case "arm4":
      fontStyle = styles.arm4;
      break;
    case "arm5":
      fontStyle = styles.arm5;
      break;
    case "arm6":
      fontStyle = styles.arm6;
      break;
    default:
      fontStyle = styles.arm6;
  }

  const audioFolder = "audio";
  const letterText =
    fontClass === "arm1" || letter.small == letter.capital
      ? letter.small
      : `${letter.capital} ${letter.small}`;
  const isHard = letter.hard;
  const isVowel = letter.vowel;
  return (
    <DuoButton
      onClick={() => new Audio(`${audioFolder}/${letter.soundFile}`).play()}
      className={clsx(isVowel && styles.red, isHard && styles.bold)}
    >
      <div className={styles.letter_tile} title={letter.id}>
        <span className={cx(styles.letter_itself, fontStyle)}>
          <ruby>
            {letterText}
            <rt className={styles.letter_rt}>{letter.ipaSound}</rt>
          </ruby>
        </span>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" value={Math.random() * 100} />
        </Box>
      </div>
    </DuoButton>
  );
};

export default LetterTile;

// 5, 13, 16, 18, 22, 24, 26, 32,
