import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import Footer from "../Footer/Footer";
import Cars from "../Home/Cars/Cars";
import Navigation from "../Home/Navigation/Navigation";
import Notfound from "../Notfound/Notfond";


const AllCar = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://protected-cliffs-11617.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <h1 className="explore-header-bg">Explore Our Exclusive Car</h1>
        <Container>
          {/* <Typography sx={{ mt: 5 }} variant="h2" component="div" gutterBottom>
            Explore Our Exclusive Car
          </Typography> */}
          <Box sx={{ flexGrow: 1, m: 5 }}>
            <Grid container spacing={4}>
              {cars?.map((car) => (
                <Car key={car.name} car={car}></Car>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllCar;
