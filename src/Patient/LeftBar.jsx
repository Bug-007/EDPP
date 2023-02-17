import React from "react";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

const LeftBar = () => {
  const ListItemTextCust = styled(Link)({
    marginLeft: "-10px",
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    fontSize: "18px"
  });

  const ListIcon = styled(ListItemIcon)({
    cursor:"pointer",
    color:"black"
  })

  return (
    <Box
      component={"div"}
      sx={{
        display: { xs: "none", md: "flex" } ,
        flex: "1",
        backgroundColor: "#EEEEEE",
        height: "calc(100vh - 70px)",
        position: "fixed",
      }}
    >
      <List
        sx={{
          marginTop: "50px",
        }}
      >
        <ListItem>
          <ListIcon>
            <CloudUploadOutlinedIcon />
          </ListIcon>
          <ListItemTextCust> Upload</ListItemTextCust>
        </ListItem>
        <ListItem>
          <ListIcon>
            <LibraryBooksOutlinedIcon />
          </ListIcon>
          <ListItemTextCust> Medical History</ListItemTextCust>
        </ListItem>
        <ListItem>
          <ListIcon>
            <ReceiptOutlinedIcon />
          </ListIcon>
          <ListItemTextCust> Medical Receipts</ListItemTextCust>
        </ListItem>
        <ListItem>
          <ListIcon>
            <HowToRegOutlinedIcon />
          </ListIcon>
          <ListItemTextCust> Permissions </ListItemTextCust>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftBar;
