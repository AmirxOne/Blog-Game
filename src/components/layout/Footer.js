import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography component="p" variant="h6" borderTop="1px solid rgba(255, 255, 255, 0.12)" bgcolor="rgb(0, 30, 60)" color="white" padding="15px" textAlign="center" mt={10} fontWeight="bold">
        @2022 Amir.X.One
      </Typography>
    </footer>
  );
};

export default Footer;
