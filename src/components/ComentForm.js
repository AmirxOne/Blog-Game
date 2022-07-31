import React, { useState } from "react";
//gql
import { Button } from "@mui/material";
import "../index.css";

const ComentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <div style={{padding:'20px'}}>
        
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="text"
            placeholder="Email"
          />
          <textarea
            style={{ paddingTop: "20px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input are"
            type="text"
            placeholder="Text"
          />
          <Button sx={{marginTop:"10px"}} variant="contained">Contained</Button>
      </div>
    </>
  );
};

export default ComentForm;
