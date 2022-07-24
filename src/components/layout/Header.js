import React from "react";
import { AppBar, Toolbar, Typography , Container } from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            Amir.x.one
          </Typography>
          <SportsEsportsIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
