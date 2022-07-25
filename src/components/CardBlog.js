import React from "react";
// MUI
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const CardBlog = ({ title, slug, coverPhoto, author }) => {
  return (
    <Card sx={{backgroundColor: "rgb(0, 30, 60)", border:"1px solid #5468ff", borderRadius: "15px"}}>
      <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{marginRight:"-5px"}} />}
        title={
          <Typography
            component="p"
            sx={{ fontSize: "14px", color:"#6F7E8C"}}
          >
            {author.name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="276px"
        image={coverPhoto.url}
        alt={slug}
        sx={{objectFit:'cover'}}
      />
      <CardContent>
        <Typography component="h1" variant="h6" sx={{ fontSize: "16px", color:"white"}} >{title}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default CardBlog;
