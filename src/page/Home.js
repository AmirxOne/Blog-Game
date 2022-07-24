import React from "react";
// MUI
import { Container, Grid, Typography } from "@mui/material";
// Components
import Programers from "../components/Programers";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h1" variant="h5">
            programers
          </Typography>
          <Programers />
        </Grid>

        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h1" variant="h5">
            Blogs
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
