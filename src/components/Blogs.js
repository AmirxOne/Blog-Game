import React from "react";
// Graph ql
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../graphql/querys";
// MUI
import { Grid } from "@mui/material";
// Components
import CardBlog from "./CardBlog";
import Loading from "./Loading";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log(data);

  if (loading) return <Loading/>;
  if (error) return <h1>Error...</h1>;
  return (
    <Grid container spacing={2} sx={{marginTop:"20px"}}>
        {
            data.posts.map(post => <Grid xs={12} sm={4} md={4} item key={post.id}><CardBlog {...post}/></Grid>)
        }
    </Grid>
);
};

export default Blogs;
