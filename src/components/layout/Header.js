import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
// react router dom
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backdropFilter: "blur(20px)", background: "rgba(10, 25, 41, 0.7)" }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            Amir.x.one
          </Typography>
          <Link style={{ textDecoration: "none" }} to="/home">
            <SportsEsportsIcon sx={{ color: "white" }} />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
