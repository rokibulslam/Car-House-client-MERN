import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Cycle from "../Cycle/Cycle";
import Cycles from "../Home/Cycles/Cycles";


const AllCycle = () => {
  const [cycles, setCycles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setCycles(data));
  }, []);
  return (
    <Container>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {cycles?.map((cycle) => (
              <Cycle key={cycle.name} cycle={cycle}></Cycle>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default AllCycle;
