import * as React from "react";
import { CssBaseline, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import HeaderNav from "./HeaderNav";
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
