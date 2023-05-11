import { Typography, Box } from "@mui/material";
import icon from "../../assets/icon/icon.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          padding: "10px 0",
          borderTop: "1px solid black",
        }}
      >
        <NavLink
          to="home"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={icon} width={40} alt="" style={{ marginRight: "10px" }} />
          <Typography
            level="body2"
            variant="h5"
            startDecorator={
              <Typography textColor="text.tertiary">by</Typography>
            }
          >
            The Word Waves
          </Typography>
        </NavLink>

        <Typography level="body3" sx={{ ml: "auto" }}>
          Copyright 2022
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
