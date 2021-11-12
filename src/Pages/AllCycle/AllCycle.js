import { Container, Grid } from "@mui/material";
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
        <Box sx={{ flexGrow: 1, m: 5 }}>
          <Grid container spacing={2}>
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
