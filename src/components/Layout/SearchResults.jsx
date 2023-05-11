import * as React from "react";
import {
  Typography,
  Grid,
  Card,
  Box,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import ContinueLink from "../Link/ContinueLink";
import { NavLink } from "react-router-dom";

const SearchResults = ({ searchByTitle, isSuccess }) => {
  return (
    <>
      <Paper elevation={3} square sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {isSuccess && searchByTitle.length > 0 ? (
            searchByTitle.map((post) => (
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
                  onClick={() => setSearchText("")}
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
            ))
          ) : (
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography className="danger">Not found</Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </>
  );
};

export default SearchResults;
