import { Box, Typography } from "@mui/material";
import React from "react";
import {default as bookimg} from "./images/bookimg.jpeg";
const About = () => {
  return (
   
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" >
      <div className="row-1">
        <Typography sx={{ fontFamily: "normal" }} variant="h3"  >
          About us : 
        </Typography>
        
        <p >
        Welcome to Book Store, We are thrilled to present a platform that combines convenience, diversity, and an unparalleled passion for literature. Our online bookstore is dedicated to providing a seamless and delightful reading experience for customers.It is a place where users can store their books accoding to their reading habits.
        </p>
        </div>
        
      </Box>
      <div className="flex items-center justify-center row-2">
          <img src={bookimg} className="w-[400px] h-[400px] object-cover mt-auto" sx={{mt: " 50"}}/>
      </div> 
    </div>
    
  );
};

export default About;
