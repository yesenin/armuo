import { Box, Grid } from "@mui/material";
import React from "react";
import Tile from "../base/Tile";
import DuoButton from "../base/DuoButton";

const ChooseByLetter = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Tile>
            <span>A</span>
          </Tile>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <DuoButton>1</DuoButton>
              </Grid>
              <Grid item xs={6}>
                <DuoButton>2</DuoButton>
              </Grid>
              <Grid item xs={6}>
                <DuoButton>3</DuoButton>
              </Grid>
              <Grid item xs={6}>
                <DuoButton>4</DuoButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChooseByLetter;
