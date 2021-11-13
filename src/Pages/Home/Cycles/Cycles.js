import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Cycles = () => {
  
  const [allCycle, setAllCycle] = useState([])
  const { isLoading } = useAuth()
  
  useEffect(() => {
        fetch("http://localhost:5000/product")
          .then((res) => res.json())
          .then((data) => setAllCycle(data))
    },[])
  return (
    <Container>
      {isLoading && <CircularProgress />}
      <Typography sx={{ mt: 5 }} variant="h2" component="div" gutterBottom>
        More than 3,000 cars added daily
      </Typography>
      <Box sx={{ flexGrow: 1, mt: 5, mb: 5 }}>
        <Grid container spacing={4}>
          {allCycle.slice(0, 6)?.map((cycle) => (
            <Grid
              key={cycle.ProductName}
              sx={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
              md={4}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  display: "flex",
                  textAlign: "start",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={cycle.imgURL}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Price:${cycle.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cycle.description.slice(0, 100)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/purchase/${cycle._id}`}
                  >
                    <Button variant="contained">Purchase</Button>
                  </NavLink>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Cycles;
