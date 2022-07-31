import React from "react";
// gql
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../graphql/querys";
// react router dom
import { useParams, useNavigate } from "react-router-dom";
// MUI
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
// Sanitize
import sanitize from "sanitize-html";
// component
import ComentForm from "../components/ComentForm";

const BlogsPages = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  const navigate = useNavigate();
  console.log(data);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  const {
    post: { title, author, content, coverPhoto },
  } = data;
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ color: "white" }}>
        <Grid
          item
          xs={12}
          mt={10}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component="h3"
            variant="h5"
            fontWeight={700}
            fontSize={28}
          >
            {title}
          </Typography>
          <KeyboardDoubleArrowLeftRoundedIcon
            onClick={() => navigate(-1)}
            fontSize="large"
          />
        </Grid>
        <Grid
          item
          xs={12}
          mt={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            width="80%"
            style={{ borderRadius: "15px" }}
            src={coverPhoto.url}
            alt={slug}
          />
        </Grid>
        <Grid
          item
          xs={12}
          mt={10}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Avatar
            src={author.avatar.url}
            sx={{ width: "100px", height: "100px" }}
          />
          <Box component="div" sx={{ p: 2 }}>
            <Typography></Typography>
            <Typography component="h3" variant="h6" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography></Typography>
            <Typography component="p" variant="h6" fontWeight={200}>
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          mt={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ fontFamily: "Roboto", lineHeight: "2", fontSize: "18px" }}
            dangerouslySetInnerHTML={{ __html: sanitize(content.html) }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={8}>
          <ComentForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogsPages;
