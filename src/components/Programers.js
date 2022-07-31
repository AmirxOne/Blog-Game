import React from "react";
// Graph ql
import { GET_AUTHORS_INFO } from "../graphql/querys";
import { useQuery } from "@apollo/client";
// MUI
import { Avatar, Grid, Typography } from "@mui/material";
// react router dom
import { Link } from "react-router-dom";
import Loading from "./Loading";


const Programers = () => {

  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loading/>;

  if (error) return <h1>Error...</h1>;

  return (
    <Grid container spacing={2} sx={{marginTop:"35px", backgroundColor:"#132F4C", borderRadius:"15px" ,paddingBottom:"13px",border:"1px solid rgb(38, 93, 151)"}}>
        {
            data.authors.map(author => 
            <Grid xs={12} item key={author.id}>
                <Link to={`/authors/${author.slug}`} style={{textDecoration:"none" , display:"flex", alignItems:"center" , padding:"8px"}}>
                    <Avatar src={author.avatar.url} sx={{marginRight:"10px"}}/>
                    <Typography component="p" variant="h6" sx={{ fontSize: "14px", color: "#6F7E8C" }}>{author.name}</Typography>
                </Link>
            </Grid>)
        }
    </Grid>
  );
};

export default Programers;
