import React from "react";
import { Box, Grid } from "@mui/material";
import Cards from "./Cards";
import TimeLine from "./TimeLine";
import styled from "@emotion/styled";

const HorizontalLine = styled(Box)({
  border: "1px solid black",
  width: "100%",
});

const RightBar = () => {
  return (
    <Box
      component={"div"}
      sx={{
        display: { xs: "none", md: "flex" },
        flex: "4",
        // backgroundColor: "blue",
        direction: "column",
        // height: "100vh",
        marginLeft: "217px",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Box
          component={"span"}
          sx={{
            fontSize: "25px",
            marginTop: "20px",
            marginLeft: "10px",
            width: "100%",
          }}
        >
          Recently Accesed
        </Box>
        <HorizontalLine component={"hr"} />
        <Cards />
        <HorizontalLine component={"hr"} />
        <TimeLine />
      </Grid>
    </Box>
  );
};

export default RightBar;
