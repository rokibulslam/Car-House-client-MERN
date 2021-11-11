import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const date = new Date();
  const currentDate = date.toLocaleDateString();
    
  const [product, setProduct] = useState({});
  const [orderData, setOrderData] = useState({
    customerName: user.displayName,
    email: user?.email, accountMail: user?.email
  });
  console.log(orderData)
  const { ProductName, price, brand, description, imgURL } = product;

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handelOrderField = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrderData = { ...orderData };
    newOrderData[field] = value;
    setOrderData(newOrderData);
    
  };
  const onSubmitOrder = (e) => {
    const order = {
      ...orderData,
      date: currentDate,
      status: "Pending",
      productName: ProductName,
      productPrice: price,
    };
    console.log(order)
    axios.post("http://localhost:5000/orders", order).then((res) => {
      if (res.data.insertedId) {
        alert("New Order Successfully Placed for Approving");
      }
    });
    e.preventDefault()

  };
  return (
    <Box>
      <Typography
        sx={{ textAlign: "start", mt: 5 }}
        variant="h2"
        component="div"
        gutterBottom
      >
        User Name : {user.displayName}
      </Typography>
      <Typography
        sx={{ textAlign: "start", mt: 5 }}
        variant="h2"
        component="div"
        gutterBottom
      >
        User Email: {user.email}
      </Typography>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ m: 5 }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={imgURL}
                    alt="green iguana"
                  />
                  <CardContent sx={{ textAlign: "start" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Name: {ProductName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Brand: {brand}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Price:${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <NavLink style={{ textDecoration: "none" }} to={`/purchase`}>
                    <Button variant="contained">Purchase</Button>
                  </NavLink>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Container>
                <Typography
                  sx={{ mt: 5 }}
                  variant="h2"
                  component="div"
                  gutterBottom
                >
                  Add A Product
                </Typography>
                <form onSubmit={onSubmitOrder}>
                  <TextField
                    // required
                    sx={{ width: "90%", m: 1 }}
                    id="filled-basic"
                    label="Your Name"
                    name="customerName"
                    onBlur={handelOrderField}
                    variant="filled"
                  />
                  <TextField
                    
                    sx={{ width: "90%", m: 1 }}
                    id="filled-basic"
                    label="email"
                    type="email"
                    name="email"
                    onBlur={handelOrderField}
                    variant="filled"
                  />
                  <TextField
                    required
                    sx={{ width: "90%", m: 1 }}
                    id="filled-basic"
                    label="Phone"
                    type="number"
                    name="phone"
                    onBlur={handelOrderField}
                    variant="filled"
                  />
                  <TextField
                    required
                    sx={{ width: "90%", m: 1 }}
                    id="filled-basic"
                    label="Adress"
                    name="adress"
                    onBlur={handelOrderField}
                    variant="filled"
                  />

                  <Button
                    sx={{ width: "90%", m: 1 }}
                    type="submit"
                    variant="contained"
                  >
                    Add Product
                  </Button>
                </form>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Purchase;
