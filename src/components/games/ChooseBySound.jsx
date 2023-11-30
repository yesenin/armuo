import { Box, Grid } from "@mui/material";
import React from "react";
import Tile from "../base/Tile";
import DuoButton from "../base/DuoButton";

const ChooseBySound = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Tile>
            <span>1</span>
          </Tile>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <DuoButton>A</DuoButton>
              </Grid>
              <Grid item xs={4}>
                <DuoButton>B</DuoButton>
              </Grid>
              <Grid item xs={4}>
                <DuoButton>C</DuoButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChooseBySound;
