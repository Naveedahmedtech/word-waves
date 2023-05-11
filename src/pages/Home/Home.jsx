import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import banner from "../../assets/images/banner.jpg";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost";
import { useSearchParams } from "react-router-dom";


const Home = ({posts, isSuccess}) => {
  const [msg] = useSearchParams();
  const message = msg.get('message')
  return (
    <main>
      {message && (
        <Typography textAlign="center" className="danger">
          {message}
        </Typography>
      )}
      <Card style={{ margin: "20px 0", width: "100%", boxShadow: "none" }}>
        <CardMedia image={banner} title="green iguana">
          <Box sx={{ padding: "20px" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h2"
                id="sm-heading"
                color="white"
              >
                Title of a longer featured blog post
              </Typography>
              <Typography variant="h5" color="white" id="sm-para">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Box>
        </CardMedia>
      </Card>
      <BlogCard posts={posts} isSuccess={isSuccess} />
      <BlogPost />
    </main>
  );
};

export default Home;
