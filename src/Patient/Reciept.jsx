import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const Home = () => {
  return (
    <div>
      <Header />
      <Box component={"div"}
      sx={{
        display: "flex",
        width:"100%",
        // position:"fixed"
      }}>

       <LeftBar/>
       <RightBar/>

      </Box>
    </div>
  );
};

export default Home;
