import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Car from "../Car/Car";
import Footer from "../Footer/Footer";
import Cars from "../Home/Cars/Cars";
import Navigation from "../Home/Navigation/Navigation";
import Notfound from "../Notfound/Notfond";


const AllCar = () => {
  const [cars, setCars] = useState([]);
  const { isLoading, setIsLoading } = useAuth();
  
  useEffect(() => {
    setIsLoading(true);
    fetch("https://car-house-server.onrender.com/product")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <h1 className="explore-header-bg">Explore Our Exclusive Car</h1>
        <Container>
          {isLoading && <CircularProgress />}
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
