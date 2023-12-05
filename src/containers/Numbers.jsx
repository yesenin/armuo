import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";

import styles from "./containers.module.css";
import NumberTile from "../components/NumberTile";
import { Link } from "react-router-dom";

const units = [
  "",
  "մեկ",
  "երկու",
  "երեք",
  "չորս",
  "հինգ",
  "վեց",
  "յոթ",
  "ութ",
  "ինը",
];
const tens = [
  "",
  "տասն",
  "քսան",
  "երեսուն",
  "քառասուն",
  "հիսուն",
  "վաթսուն",
  "յոթանասուն",
  "ութսուն",
  "իննսուն",
];
const hundreds = [
  "",
  "հարյուր",
  "երկու հարյուր",
  "երեք հարյուր",
  "չորս հարյուր",
  "հինգ հարյուր",
  "վեց հարյուր",
  "յոթ հարյուր",
  "ութ հարյուր",
  "ինը հարյուր",
];

const getArmenianWord = (num, level) => {
  let word = "";

  if (num >= 100) {
    word += hundreds[Math.floor(num / 100)] + " ";
    num %= 100;
  }

  if (num >= 10) {
    word += tens[Math.floor(num / 10)] + " ";
    num %= 10;
  }

  if (num > 0) {
    word += units[num] + " ";
  }

  if (level > 0 && word !== "") {
    word += level === 1 ? "հազար" : "միլիոն";
  }

  return word;
};

const getArmenianNumberInWords = (n) => {
  if (n < 0) {
    return "Умный самый?";
  }
  if (n === 0) {
    return "զրո";
  }
  let result = "";
  let level = 0;

  while (n > 0) {
    const chunk = n % 1000;
    if (chunk !== 0) {
      result = getArmenianWord(chunk, level) + " " + result;
    }
    level++;
    n = Math.floor(n / 1000);
  }

  return result.trim();
};

const getArmenianNumberInWordsOrdinal = (n) => {
  if (n < 0) {
    return "Умный самый?";
  }
  if (n === 0) {
    return "զրո";
  }

  if (n === 1) return "առաջին";
  if (n === 2) return "երկրորդ";
  if (n === 3) return "երրորդ";
  if (n === 4) return "չորրորդ";

  return `${getArmenianNumberInWords(n)}երորդ`;
};

const Numbers = () => {
  const [mode, setMode] = useState("quantitative");

  const onModeChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <Container>
      <Box className={styles.alphabet_options}>
        <Box>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Mode</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={mode}
              onChange={onModeChange}
            >
              <FormControlLabel
                value="quantitative"
                control={<Radio />}
                label="Quantitative"
              />
              <FormControlLabel
                value="ordinal"
                control={<Radio />}
                label="Ordinal"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <Link to="/game/123">Train</Link>
        </Box>
      </Box>

      <Box className={styles.alphabet}>
        {_.range(1, 221).map((n) => {
          const arm =
            mode === "ordinal"
              ? getArmenianNumberInWordsOrdinal(n)
              : getArmenianNumberInWords(n);
          return (
            <NumberTile
              numberStr={mode === "ordinal" ? `${n}th` : n}
              number={n}
              key={n}
              arm={arm}
              ordinal={mode === "ordinal"}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default Numbers;
