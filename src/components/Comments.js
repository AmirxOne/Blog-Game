import React from "react";
// gql
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENT } from "../graphql/querys";
// MUI
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Loading from "./Loading";

const Comments = ({ slug }) => {
  const { loading, data, error } = useQuery(GET_POST_COMMENT, {
    variables: { slug },
  });

  if (loading) return <Loading/>;
  if (error) return <h>Error...</h>;

  return (
    <Container maxWidth="lg">
      <Typography component="h3" variant="h5" fontWeight={700}>
        Comments
      </Typography>
      <Grid container sx={{ marginTop: "25px" }}>
        {data.comments.map((comment) => (
          <Grid
            item
            xs={12}
            display="flex"
            key={comment.id}
            alignItems="center"
            sx={{
              marginBottom: "10px",
              backgroundColor: "rgb(0, 30, 60)",
              border: "1px solid #5468ff",
              borderRadius: "15px",
              padding: '10px 20px',
            }}
          >
            <Avatar />
            <Box component="span" sx={{ p: 2 }}>
              <Typography sx={{ fontSize: "18px" }} component="h3" variant="h5">
                {comment.name}
              </Typography>
              <Typography sx={{ fontSize: "16px", marginTop:'10px' }} fontWeight={200} component="h3" variant="h5">
                {comment.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Comments;
