import React from "react";
import Header from "../Header";
import { Box } from "@mui/material";
import LeftBar from "../LeftBar";
import UploadPageTab from "./UploadPageTab";

const Home = () => {
  return (
    <div>
      <Header />
      <Box
        component={"div"}
        sx={{
          width: "100%",
          // position:"fixed"
          // backgroundColor:"blue"
        }}
      >
        <LeftBar />
        <UploadPageTab/>

      </Box>
    </div>
  );
};

export default Home;
