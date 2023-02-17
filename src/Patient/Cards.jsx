import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
// import { styled } from "@mui/material/styles";

export default function Cards() {

//  const custCard = styled(Card)({
//     height: "250px",
//     width: "250px",
//     backgroundColor:"whitesmoke"
//  })

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="flex-start"
      marginTop={"20px"}
    >
      <Card sx={{ maxWidth: 250, maxHeight: 250, minWidth: "250px" }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="./assets/logo.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Report 1
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card  sx={{ maxWidth: 250, maxHeight: 250, minWidth: "250px" }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="./assets/logo.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Report 2
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card  sx={{ maxWidth: 250, maxHeight: 250, minWidth: "250px" }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="./assets/logo.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Report 3
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 250, maxHeight: 250, minWidth: "250px" }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="./assets/logo.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Report 4
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
