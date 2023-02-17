import React from "react";
import Box from "@mui/material/Box";
import Cards from "./Cards";
// import styled from "@emotion/styled";

const TimelLine = () => {
  return (
    <Box component={"div"} sx={{ width: "100%"}}>
      <Box
        component="div"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box
          component={"div"}
          sx={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "30px",
            borderRadius: "10px",
            backgroundColor: "#EEEE",
            width: "200px",
          }}
        >
          Date
        </Box>
      </Box>
      <Cards />
      <Box
        component="div"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box
          component={"div"}
          sx={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "30px",
            borderRadius: "10px",
            backgroundColor: "#EEEE",
            width: "200px",
          }}
        >
          Date
        </Box>
      </Box>
      <Cards />
      <Box
        component="div"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box
          component={"div"}
          sx={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "30px",
            borderRadius: "10px",
            backgroundColor: "#EEEE",
            width: "200px",
          }}
        >
          Date
        </Box>
      </Box>
      <Cards />
    </Box>
  );
};

export default TimelLine;
