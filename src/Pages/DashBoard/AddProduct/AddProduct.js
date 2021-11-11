import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [orderData, setOrderData] = useState({});

  const handleUserInfo = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrderData = { ...orderData };
    newOrderData[field] = value;
    setOrderData(newOrderData);
  };
    const onSubmitAddProduct = (e) => {
        axios.post("http://localhost:5000/product/addProduct", orderData).then((res) => {
          if (res.data.insertedId) {
            alert("New Product Added Successfully");
            window.location.reload();
          }
        });
        e.preventDefault()
        console.log(orderData)
    }
  return (
    <Box>
      <Container>
        <Typography sx={{ mt: 5 }} variant="h2" component="div" gutterBottom>
          Add A Product
        </Typography>
        <form onSubmit={onSubmitAddProduct}>
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            id="filled-basic"
            label="ProductName"
            name="ProductName"
            onBlur={handleUserInfo}
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            id="filled-basic"
            label="Price"
            type="number"
            name="price"
            onBlur={handleUserInfo}
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            id="filled-basic"
            label="Description"
            name="description"
            onBlur={handleUserInfo}
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            id="filled-basic"
            label="imgURL"
            name="imgURL"
            onBlur={handleUserInfo}
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            id="filled-basic"
            label="Brand"
            name="brand"
            onBlur={handleUserInfo}
            variant="filled"
          />
          <Button sx={{ width: "50%", m: 1 }} type="submit" variant="contained">
            Add Product
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default AddProduct;
