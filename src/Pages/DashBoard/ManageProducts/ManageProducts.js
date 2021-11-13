import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const ManageProducts = () => {
  
  const [products, setProducts] = useState([]);
  const [deletes, setDeletes] = useState("");
  
  useEffect(() => {
    fetch("https://protected-cliffs-11617.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [deletes]);

  const handleDeleteProduct = (id) => {
    axios
      .delete(
        `https://protected-cliffs-11617.herokuapp.com/product/delete/${id}`
      )
      .then((res) => {
        if (res.data.deletedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product has been Deleted",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
      
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        sx={{ color: "error.main" , my: 5}}
        gutterBottom
        variant="h2"
        component="div"
      >
        Manage All Products
      </Typography>
      <Grid container spacing={2}>
        {products?.map((product) => (
          <Grid
            key={product.ProductName}
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
                justifyContent: "flex-end",
                flexDirection: "column",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.imgURL}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.ProductName}
                  </Typography>
                  <Typography
                    sx={{ color: "error.main" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Price:${product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description.slice(0, 100)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  sx={{ marginRight: 2 }}
                  onClick={() => handleDeleteProduct(product._id)}
                  variant="contained"
                >
                  Delete
                </Button>

                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/dashboard/updateProduct/${product._id}`}
                >
                  <Button variant="contained">Update</Button>
                </NavLink>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManageProducts;
