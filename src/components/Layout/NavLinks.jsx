import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

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

export default NavLinks;
