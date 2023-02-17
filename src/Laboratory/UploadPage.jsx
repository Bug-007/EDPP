import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import UploadPageTab from "./UploadPageTab";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Button from "@mui/material/Button";

const Search = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "10px",
  marginLeft: "10px",
  width: "65vw",
});

const SearchIconWrapper = styled(Button)({
  color: "black",
  padding: " 0px 10px",
});

const StyledInputBase = styled("input")({
  border: "none",
  borderRadius: "10px",
  height: "40px",
  outline: "none",
  width: "60vw",
});

const searchBar = (
  <Search
    component="input"
    sx={{
      //  justifyContent:"center",
      width: "80%",
      //  background:"blue",
      border: "1px solid black",
      marginTop: "20px",
    }}
  >
    <SearchIconWrapper>
      <SearchRoundedIcon sx={{ fontSize: "30px" }} />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Enter Patient ID"
      inputProps={{ "aria-label": "search" }}
    />
  </Search>
);

const UploadPage = () => {
  return (
    <div>
      <Header />
      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          // position:"fixed"
          // backgroundColor:"blue"
        }}
      >

        { searchBar }
      </Box>

      <UploadPageTab />
    </div>
  );
};

export default UploadPage;
