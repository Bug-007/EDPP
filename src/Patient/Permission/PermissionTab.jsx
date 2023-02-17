import { Box, Tab, Tabs} from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import All from "../Permission/All";
import Approved from "../Permission/Approved"
import Rejected from "../Permission/Rejected"

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box
      // component={"div"}
      sx={{
        display: { xs: "none", md: "flex" },
        flex: "4",
        //   backgroundColor:"blue",
        width: "80vw",
        direction: "column",
        marginLeft: "217px",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Box sx={{position:"fixed",}}>
          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab label="All" />
            <Tab label="Approved" />
            <Tab label="Rejected" />
          </Tabs>
        </Box>

        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && (
            <Box>
              <All></All>
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <Approved/>
            </Box>
          )}
          {tabIndex === 2 && (
            <Box>
              <Rejected/>
            </Box>
          )}
        </Box>
      </Grid>
    </Box>
  );
}

export default App;
