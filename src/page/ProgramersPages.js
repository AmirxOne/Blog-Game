import React from "react";
// react router dom
import { useParams } from "react-router-dom";
// gql
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../graphql/querys";
// MUI
import { Avatar, Container, Grid, Typography } from "@mui/material";
// sanitizeHtml
import sanitizeHtml from "sanitize-html";
// Components
import CardBlog from "../components/CardBlog";

const ProgramersPages = () => {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  const {
    author: { avatar, description, field, name, post },
  } = data;

  return (
    <Container maxWidth="lg" sx={{ color: "white" }}>
      <Grid container>
        <Grid
          item
          mt={10}
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography mt={4} component="h3" variant="h5">
            {name}{" "}
          </Typography>
          <Typography mt={1} component="h3" variant="h5">
            {field}{" "}
          </Typography>
        </Grid>
        <Grid item mt={4} xs={12}>
          <div
            style={{
              lineHeight: "2.2",
              fontFamily: "Roboto",
              fontSize: "16px",
            }}
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
          ></div>
        </Grid>
        <Grid item mt={4} xs={12}>
          <Typography>Blogs {name}</Typography>
          <Grid container mt={2} spacing={2}>
            {post.map((post,i) => (
              <Grid item xs={12} sm={4} md={3} key={i}>
                <CardBlog title={post.title} slug={post.slug} coverPhoto={post.coverPhoto} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProgramersPages;
