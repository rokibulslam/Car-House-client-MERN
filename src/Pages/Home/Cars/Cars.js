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
import './Car.css'
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Cars = () => {
  
  const [allCar, setAllCar] = useState([])
  const { isLoading, setIsLoading } = useAuth();
  
  useEffect(() => {
        setIsLoading(true)
        fetch("https://protected-cliffs-11617.herokuapp.com/product")
          .then((res) => res.json())
          .then((data) => setAllCar(data))
          .catch(() => {})
          .finally(() => setIsLoading(false));
    },[])
  return (
    <div className="explore-bg">
      <div>
        <h1 className="explore-header-bg">More Than 300 Cars Added Daily</h1>
      </div>
      <Container sx={{ pt: 5, pb: 5 }}>
        {isLoading && <CircularProgress />}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {allCar.slice(0, 6)?.map((car) => (
              <Grid
                key={car._id}
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
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="150"
                      image={car.imgURL}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {car.ProductName}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Price:${car.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {car.description.slice(0, 100)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to={`/purchase/${car._id}`}
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
    </div>
  );
};

export default Cars;
