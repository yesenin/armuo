import { Container, Grid } from "@mui/material";
import React from "react";
import Tile from "../base/Tile";

const Calendar = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Tile>
            <span>0</span>
          </Tile>
          <Tile>
            <span>2</span>
          </Tile>
          <Tile>
            <span>.</span>
          </Tile>
          <Tile>
            <span>1</span>
          </Tile>
          <Tile>
            <span>2</span>
          </Tile>
        </Grid>
        <Grid item xs={6}>
          <Tile>
            <span>0</span>
          </Tile>
          <Tile>
            <span>2</span>
          </Tile>
          <Tile>
            <span>:</span>
          </Tile>
          <Tile>
            <span>2</span>
          </Tile>
          <Tile>
            <span>8</span>
          </Tile>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calendar;
