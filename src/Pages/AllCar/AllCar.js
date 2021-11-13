import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import Footer from "../Footer/Footer";
import Cycles from "../Home/Cycles/Cycles";
import Navigation from "../Home/Navigation/Navigation";
import Notfound from "../Notfound/Notfond";


const AllCar = () => {
  const [cycles, setCycles] = useState([]);
  useEffect(() => {
    fetch("https://protected-cliffs-11617.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setCycles(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <Typography sx={{ mt: 5 }} variant="h2" component="div" gutterBottom>
          Explore Our Exclusive Car
        </Typography>
        <Box sx={{ flexGrow: 1, m: 5 }}>
          <Grid container spacing={4}>
            {cycles?.map((cycle) => (
              <Car key={cycle.name} cycle={cycle}></Car>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AllCar;
