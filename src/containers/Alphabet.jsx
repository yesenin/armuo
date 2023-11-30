import React from "react";

import { ArmenianAlphabet } from "../data/alphabet";
import LetterTile from "../components/LetterTile";

import styles from "./containers.module.css";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Link } from "react-router-dom";

const Alphabet = () => {
  const [font, setFont] = React.useState("arm6");

  const onFontChange = (event) => {
    setFont(event.target.value);
  };

  return (
    <Container>
      <Box className={styles.alphabet_options}>
        <Box>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Font</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={font}
              onChange={onFontChange}
            >
              <FormControlLabel
                value="arm6"
                control={<Radio />}
                label="Serif"
              />
              <FormControlLabel
                value="arm5"
                control={<Radio />}
                label="Sans Serif"
              />
              <FormControlLabel
                value="arm2"
                control={<Radio />}
                label="Handwriting"
              />
              <FormControlLabel
                value="arm1"
                control={<Radio />}
                label="Ancient"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Link to="/game/abc">Train</Link>
      </Box>
      <Box className={styles.alphabet}>
        {ArmenianAlphabet.map((letter) => {
          return (
            <LetterTile letter={letter} key={letter.id} fontClass={font} />
          );
        })}
      </Box>
    </Container>
  );
};

export default Alphabet;
