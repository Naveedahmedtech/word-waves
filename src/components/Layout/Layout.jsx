import * as React from "react";
import {
  CssBaseline,
  Container,
  Stack,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Grid,
  Card,
  Box,
  CardContent,
  CardMedia,
  Paper,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import ContinueLink from "../Link/ContinueLink";
import icon from '../../assets/icon/icon.png'

export const loader = async ({ request }) => {
  const message = new URL(request.url).searchParams.get("message");
  return message;
};

const Layout = ({ posts, isSuccess }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <HeaderNav posts={posts} isSuccess={isSuccess} />
        <Outlet />
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Layout;

const HeaderNav = ({ posts, isSuccess }) => {
  const [searchText, setSearchText] = React.useState("");
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const searchRef = React.useRef(null);

  React.useEffect(() => {
    const handleClick = (event) => {
    const link = event.target.closest("div").querySelector("#logo");
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) ||
        link
      ) {
        setSearchText("");
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [searchRef]);
  const handleLogout = () => {
    setAuth({
      username: null,
      password: null,
    });
    if (user) localStorage.removeItem("user");
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const searchByTitle = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchText.toLocaleLowerCase());
  });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div ref={searchRef}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            borderBottom: "1px solid lightGrey",
            padding: "10px",
            margin: "5px 0px",
            flexWrap: "wrap",
          }}
        >
            <NavLink
              id="logo"
              to="home"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={icon} width={40} alt="" style={{marginRight: '10px'}} />
              <Typography variant="h5">The Word Waves</Typography>
            </NavLink>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="standard-basic"
              label="Search by title"
              variant="standard"
              value={searchText}
              onChange={handleSearchInputChange}
              // onBlur={() => setSearchText("")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ marginLeft: "20px" }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {auth.username || user?.username ? (
              <Box sx={{ flexGrow: 0, marginLeft: "20px" }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                    <Typography color="primary">
                      {auth.username || user?.username}
                    </Typography>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={handleLogout}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  style={{ marginLeft: "20px" }}
                  component={NavLink}
                  to="/sign-in"
                >
                  Sign in
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  style={{ marginLeft: "20px" }}
                  component={NavLink}
                  to="/sign-up"
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </Stack>
        {searchText && (
          <SearchResults searchByTitle={searchByTitle} isSuccess={isSuccess} />
        )}
      </div>
      <NavLinks posts={posts} isSuccess={isSuccess} />
    </>
  );
};

const NavLinks = ({ posts, isSuccess }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ margin: "10px 0", flexWrap: "wrap" }}
    >
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <NavLink
          to="home"
          className="links"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", color: "purple" }
              : { color: "gray" }
          }
        >
          <Typography>Home</Typography>
        </NavLink>
        <NavLink
          to={`/Technology/Technology`}
          className="links"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", color: "purple" }
              : { color: "gray" }
          }
        >
          <Typography>Technology</Typography>
        </NavLink>
        <NavLink
          to={`/Design/Design`}
          className="links"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", color: "purple" }
              : { color: "gray" }
          }
        >
          <Typography>Design</Typography>
        </NavLink>
        <NavLink
          to={`/Culture/Culture`}
          className="links"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", color: "purple" }
              : { color: "gray" }
          }
        >
          <Typography>Culture</Typography>
        </NavLink>
      </div>
    </Stack>
  );
};

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
