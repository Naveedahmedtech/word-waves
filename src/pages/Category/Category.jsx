import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

const Category = ({posts, isSuccess}) => {
    const { id } = useParams();

  const findById = posts.find(post => post.id == id);
  
  return (
    <>
      <Card
        className="sm-grid"
        sx={{
          margin: "20px 0",
          width: "100%",
          textDecoration: "none",
        }}
      >
        <CardMedia
          component="img"
          id="card-image"
          sx={{ width: "100%" }}
          image={isSuccess && findById.image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {isSuccess && findById.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="small"
            >
              {isSuccess && findById.pusblished_at}
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              component="div"
            >
              {isSuccess && findById.category}
            </Typography>
            <Typography variant="subtitle1">{isSuccess && findById.description}</Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default Category;
