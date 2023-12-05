import React from "react";

import styles from "./components.module.css";
import DuoButton from "./base/DuoButton";

import cx from "classnames";
import {playNumber, playOrdinalNumber} from "../services/player";

const NumberTile = ({ numberStr, number, arm, ordinal}) => {
  return (
    <DuoButton onClick={() => ordinal ? playOrdinalNumber(number) : playNumber(number)}>
      <div className={styles.letter_tile}>
        <span className={cx(styles.letter_itself, styles.arm6)}>
          <ruby>{numberStr}</ruby>
        </span>
        <span className={styles.add2}>{arm}</span>
      </div>
    </DuoButton>
  );
};

export default NumberTile;

// 5, 13, 16, 18, 22, 24, 26, 32,
