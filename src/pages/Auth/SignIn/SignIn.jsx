import { TextField, Box, Typography, Button } from "@mui/material";
import { Link, useNavigate, useLoaderData, useSearchParams } from "react-router-dom";
import { useState, useContext } from "react";

import { useGetUsersQuery } from "../../../services/postsApi";
import AuthContext from "../../../context/AuthProvider";

export const loader = async ({ request }) => {
  const message = new URL(request.url).searchParams.get("message");
  return message
}
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passError, setPassError] = useState(false);
  const { data: users } = useGetUsersQuery();
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const message = useLoaderData();
  const isValidateUser = users?.find((user) => user.username === username);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setUsernameError(true);
      setPassError(false);
    } else if (password.trim() === "") {
      setPassError(true);
      setUsernameError(false);
    } else if (!isValidateUser) {
      setError(true);
      setUsernameError(false);
      setPassError(false);
    } else if (
      isValidateUser.username === username &&
      isValidateUser.confirmedPassword === password
    ) {
      setError(false);
      setUsernameError(false);
      setPassError(false);
      setUsername("");
      setPassword("");
      setAuth({ username, password });
      localStorage.setItem("user", JSON.stringify({ username: username }))
      navigate("/home")
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Box sx={{ margin: "40px 0 80px 0" }}>
        <Typography textAlign="center" mt={11} variant="h3">
          Sign in
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <form method="POST" onSubmit={handleFormSubmit}>
            {message && (
              <Typography textAlign="center" className="danger">
                {message}
              </Typography>
            )}
            {error && (
              <Typography textAlign="center" className="danger">
                Invalid username or password
              </Typography>
            )}
            <TextField
              label="Username"
              name="username"
              sx={{ marginBottom: "20px" }}
              variant="outlined"
              autoComplete="off"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={usernameError | error}
              onKeyDown={() => setUsernameError(false)}
              helperText={usernameError && "Plese enter the username"}
            />

            <TextField
              label="Password"
              name="password"
              sx={{ marginBottom: "20px" }}
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passError | error}
              onKeyDown={() => setPassError(false)}
              helperText={passError && "Plese enter the password "}
            />
            <Button type="submit" fullWidth variant="contained">
              Sign in
            </Button>
          </form>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="secondary" variant="caption">
            Or
          </Typography>
          <Link to="/sign-up">Sign up</Link>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
