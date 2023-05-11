import { Box, Typography } from "@mui/material";
const ErrorHandling = ({ posts }) => {
  if (!posts) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: "black",
          }}
        >
          <Typography variant="h5" className="danger">
            We are sorry, but there are some technical issues right now😥
          </Typography>
          <Typography color="primary">
            Please refresh the page or visit later😊
          </Typography>
        </Box>
      </>
    );
  }
};

export default ErrorHandling;
