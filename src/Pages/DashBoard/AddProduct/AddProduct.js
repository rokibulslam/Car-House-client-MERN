import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const handleProductInfo = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrderData = { ...product };
    newOrderData[field] = value;
    setProduct(newOrderData);
  };
    const onSubmitAddProduct = (e) => {
        axios
          .post(
            "https://protected-cliffs-11617.herokuapp.com/product/addProduct",
            product
          )
          .then((res) => {
            if (res.data.insertedId) {
              alert("New Product Added Successfully");
              window.location.reload();
            }
          });
        e.preventDefault()
        console.log(product)
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
            onBlur={handleProductInfo}
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            id="filled-basic"
            label="Price"
            type="number"
            name="price"
            onBlur={handleProductInfo}
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            id="filled-basic"
            label="Description"
            name="description"
            onBlur={handleProductInfo}
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            id="filled-basic"
            label="imgURL"
            name="imgURL"
            onBlur={handleProductInfo}
            variant="filled"
          />
          <TextField
            required
            sx={{ width: "50%", m: 1 }}
            id="filled-basic"
            label="Brand"
            name="brand"
            onBlur={handleProductInfo}
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
