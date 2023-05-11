import * as React from "react";
import {
  Stack,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavLinks from "./NavLinks";
import SearchResults from "./SearchResults";
import icon from "../../assets/icon/icon.png";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";

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
        (searchRef.current && !searchRef.current.contains(event.target)) ||
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
            <img src={icon} width={40} alt="" style={{ marginRight: "10px" }} />
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


export default HeaderNav
