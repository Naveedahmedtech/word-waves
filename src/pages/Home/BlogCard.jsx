import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
  Grid,
} from "@mui/material";
import ContinueLink from "../../components/Link/ContinueLink";
import { NavLink } from "react-router-dom";

const BlogCard = ({ posts, isSuccess}) => {
  return (
    <>
      <Grid container spacing={2}>
        {isSuccess &&
          posts.slice(0, 2).map((post) => (
            <Grid item xs={12} md={6} lg={6} key={post.id}>
              <Card
                className="sm-grid"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 0",
                  width: "100%",
                  textDecoration: "none",
                }}
                component={NavLink}
                to={`/catagory/${post.id}`}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {post.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="small"
                    >
                      {post.pusblished_at}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      component="div"
                    >
                      {post.category}
                    </Typography>
                    <Typography variant="subtitle1">
                      {post.description.split(" ").slice(0, 10).join(" ")}
                    </Typography>
                    <ContinueLink />
                  </CardContent>
                </Box>

                <CardMedia
                  component="img"
                  id="card-image"
                  sx={{ width: 250 }}
                  image={post.image}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default BlogCard;
