import { TextField, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useAddUsersMutation,
  useGetUsersQuery,
} from "../../../services/postsApi";
import { nanoid } from "@reduxjs/toolkit";

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    id: nanoid(),
    username: "",
    password: "",
    confirmedPassword: "",
  });
  const { data: users } = useGetUsersQuery();

  const [addUsers] = useAddUsersMutation();
  const nevigate = useNavigate();
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmedPasswordError, setConfirmedPasswordError] = useState(false);

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const USER_REGEX = /^[a-zA-Z0-9_-]+$/;

  const isValidPassword = PASS_REGEX.test(inputValue.password);
  const isValidUsername = USER_REGEX.test(inputValue.username);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { id, username, password, confirmedPassword } = inputValue;
    if (username.trim() === "") {
      setUserError(true);
      setPasswordError(false);
      setConfirmedPasswordError(false);
    } else if (!isValidUsername) {
      setUserError(true);
      setPasswordError(false);
      setConfirmedPasswordError(false);
    } else if (
      users.some(
        (user) =>
          user.username.toLowerCase() === inputValue.username.toLowerCase()
      )
    ) {
      setUserError(true);
      setPasswordError(false);
      setConfirmedPasswordError(false);
    } else if (password.trim() === "") {
      setPasswordError(true);
      setUserError(false);
    } else if (!isValidPassword) {
      setConfirmedPasswordError(true);
      setPasswordError(true);
      setUserError(false);
    } else if (confirmedPassword.trim() === "") {
      setConfirmedPasswordError(true);
      setPasswordError(false);
      setUserError(false);
    } else if (confirmedPassword !== password) {
      setConfirmedPasswordError(true);
      setPasswordError(false);
      setUserError(false);
    } else {
      setUserError(false);
      setPasswordError(false);
      setConfirmedPasswordError(false);
      addUsers({ id, username, password, confirmedPassword });
      setInputValue({
        id: "",
        username: "",
        password: "",
        confirmedPassword: "",
      });
      return nevigate("/sign-in");
    }
  };

  return (
    <>
      <Box sx={{ margin: "40px 0 80px 0" }}>
        <Typography textAlign="center" mt={11} variant="h3">
          Sign up
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <form method="POST" onSubmit={handleSubmitForm} style={{maxWidth: '500px'}}>
            <TextField
              label="Username"
              name="username"
              value={inputValue.username}
              onChange={handleInputValue}
              sx={{ marginBottom: "20px" }}
              variant="outlined"
              autoComplete="off"
              fullWidth
              error={userError}
              onKeyDown={() => setUserError(false)}
              helperText={
                userError
                  ? inputValue.username.trim() === ""
                    ? "Please enter a username"
                    : users.some(
                        (user) =>
                          user.username.toLowerCase() ===
                          inputValue.username.toLowerCase()
                      )
                    ? "Username already exists"
                    : !isValidUsername
                    ? "Username can't contain whitespaces"
                    : ""
                  : ""
              }
            />

            <TextField
              label="Password"
              name="password"
              value={inputValue.password}
              onChange={handleInputValue}
              sx={{ marginBottom: "20px" }}
              variant="outlined"
              type="password"
              fullWidth
              error={passwordError}
              onKeyDown={() => setPasswordError(false)}
              helperText={
                passwordError
                  ? inputValue.password.trim() === ""
                    ? "Please enter a password"
                    : "Password must contain at least 8 characters, at least one digit, one lowercase letter, and one uppercase letter."
                  : ""
              }
            />

            <TextField
              label="Confirmed Password"
              name="confirmedPassword"
              value={inputValue.confirmedPassword}
              onChange={handleInputValue}
              sx={{ marginBottom: "20px" }}
              variant="outlined"
              type="password"
              fullWidth
              error={confirmedPasswordError}
              onKeyDown={() => setConfirmedPasswordError(false)}
              helperText={
                confirmedPasswordError
                  ? inputValue.confirmedPassword.trim() === ""
                    ? "Please enter a password"
                    : "Password must be same"
                  : ""
              }
            />
            <Button type="submit" fullWidth variant="contained">
              Sign up
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
          <Link to="/sign-in">Sign in</Link>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
