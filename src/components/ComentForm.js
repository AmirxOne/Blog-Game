import React, { useState } from "react";
//gql
import { Button, Grid, Typography } from "@mui/material";
// css
import "../index.css";
//gql
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../graphql/mutation";
// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ComentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [bolian, setBolian] = useState(false)
  
  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const clickHandler = () => {
    if (name && email && text) {
      sendComment();
      setBolian(true)
    } else {
      toast.warn("Fill in the Following Fields", { position: "top-center" });
    }
  };
   if(data && bolian) {
    toast.success('Successful, Under Review',{position:"top-center"})
    setBolian(false)
   }

  return (
    <>
      <Grid container sx={{ padding: "20px", marginTop: "30px" }}>
        <Grid item xs={12}>
          <Typography
            component="h3"
            variant="h5"
            marginBottom={2}
            fontWeight={700}
          >
            Send Coment
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            type="text"
            placeholder="Name"
          />
        </Grid>
        <Grid item xs={12}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="text"
            placeholder="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <textarea
            style={{ paddingTop: "20px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input are"
            type="text"
            placeholder="Text"
          />
        </Grid>
        <Grid item xs={12}>
          {loading ? <Button sx={{ marginTop: "10px" }} variant="contained" disabled>Sending ...</Button> : 
          <Button
          sx={{ marginTop: "10px" }}
          variant="contained"
          onClick={clickHandler}
        >
          Send
        </Button>}
        </Grid>
        <ToastContainer />
      </Grid>
    </>
  );
};

export default ComentForm;
