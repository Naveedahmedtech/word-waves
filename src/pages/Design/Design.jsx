import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
  Grid,
} from "@mui/material";
import ContinueLink from "../../components/Link/ContinueLink";
import { NavLink, useParams } from "react-router-dom";

const Design = ({posts, isSuccess}) => {
  const { str } = useParams();

  const filteredByCategory = posts.filter((post) => post.category === str);
  return (
    <>
      <Typography variant="h4" sx={{ marginTop: "20px" }}>
        Design Blogs
      </Typography>

      <Grid container spacing={2}>
        {isSuccess &&
          filteredByCategory.map((category) => (
            <Grid item xs={12} md={6} lg={6} key={category.id}>
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
                to={`/catagory/${category.id}`}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {category.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="small"
                    >
                      {category.pusblished_at}
                    </Typography>
                    <Typography variant="subtitle1">
                      {category.description.split(" ").slice(0, 10).join(" ")}
                    </Typography>
                    <ContinueLink />
                  </CardContent>
                </Box>

                <CardMedia
                  component="img"
                  id="card-image"
                  sx={{ width: 250 }}
                  image={category.image}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Design;
