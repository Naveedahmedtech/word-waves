import { Box, Typography } from "@mui/material";

const Page404 = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Typography variant="h5" className="danger">
          Sorry! Page Not Found🙄
        </Typography>
      </Box>
    </>
  );
}

export default Page404
