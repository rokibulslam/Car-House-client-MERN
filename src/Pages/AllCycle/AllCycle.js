import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Cycle from "../Cycle/Cycle";
import Cycles from "../Home/Cycles/Cycles";
import Navigation from "../Home/Navigation/Navigation";


const AllCycle = () => {
  const [cycles, setCycles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setCycles(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <Typography sx={{ mt: 5 }} variant="h2" component="div" gutterBottom>
          Explore Our Bi-Cycle
        </Typography>
        <Box sx={{ flexGrow: 1, m: 5 }}>
          <Grid container spacing={4}>
            {cycles?.map((cycle) => (
              <Cycle key={cycle.name} cycle={cycle}></Cycle>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default AllCycle;
