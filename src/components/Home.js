import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      
      <Box display="flex" flexDirection="column" alignItems="center">
      <Typography sx={{ fontFamily: "normal" ,marginTop: 15}} variant="h2">
          Welcome to the Book Store!!</Typography>
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 10, background: "orange " }}
          variant="contained">
          <Typography variant="h5">View All Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;