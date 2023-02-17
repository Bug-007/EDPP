import React from "react";
import Box from "@mui/material/Box";
import Header from "../Header";
import LeftBar from "../LeftBar";
import PermissionTab from "../Permission/PermissionTab";


const Permission = () => {


  return (
    <Box component={"div"}>
      <Header />
       <LeftBar/>
       <PermissionTab/>
    </Box>
  );
};

export default Permission;
