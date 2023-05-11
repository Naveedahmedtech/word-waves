import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";
import {
  Layout,
  Home,
  Technology,
  Design,
  Culture,
  Category,
  SignUp,
  SignIn,
  signinLoader,
  ErrorHandling,
  Page404,
} from "./pages/pages";
import "./globalStyles.css";
import { useGetPostsQuery } from "./services/postsApi";
import { Typography, Box, CircularProgress } from "@mui/material";
import { useContext } from "react";
import AuthContext from "./context/AuthProvider";

const App = () => {
  const {
    data: posts,
    isError,
    error,
    isLoading,
    isSuccess,
  } = useGetPostsQuery();

  const { auth } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (isError) console.log(error.error);
  if (error) console.log(error.error);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout posts={posts} isSuccess={isSuccess} />}
        errorElement={<ErrorHandling posts={posts} />}
      >
        <Route index element={<Home posts={posts} isSuccess={isSuccess} />} />
        <Route path="*" element={<Page404 />} />
        <Route
          path="home"
          element={<Home posts={posts} isSuccess={isSuccess} />}
        />
        <Route
          path="technology/:str"
          element={<Technology posts={posts} isSuccess={isSuccess} />}
          loader={async ({ request }) => {
            const pathname = new URL(request.url).pathname;

            if (!auth.username || !user.username) {
              throw redirect(
                `/sign-in?message=Please sign in to see this content of Technology`
              );
            }
            return "in";
          }}
        />
        <Route
          path="design/:str"
          element={<Design posts={posts} isSuccess={isSuccess} />}
          errorElement={<h1>Error</h1>}
          loader={async () => {
            if (!auth.username || !user.username) {
              throw redirect("/sign-in?message=Only admin can see this page");
            } else if (
              (auth.username && auth.username !== "Naveed") ||
              (user.username && user.username !== "Naveed")
            ) {
              throw redirect(
                "/home?message=Only admin can see this page, please logout and login with admin account"
              );
            }
            return "hello";
          }}
        />
        <Route
          path="culture/:str"
          element={<Culture posts={posts} isSuccess={isSuccess} />}
          errorElement={<ErrorHandling posts={posts} />}
        />
        <Route
          path="catagory/:id"
          element={<Category posts={posts} isSuccess={isSuccess} />}
          errorElement={async () => {
            if (!posts) return <h2>Error</h2>;
          }}
        />
        <Route
          path="sign-up"
          element={<SignUp />}
          errorElement={<h1>Error</h1>}
        />
        <Route
          path="sign-in"
          element={<SignIn />}
          errorElement={<h1>Error</h1>}
          loader={signinLoader}
        />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
