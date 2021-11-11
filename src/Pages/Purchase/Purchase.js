import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data =>setProduct(data))
    }, [])
    return (
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} >
              
            </Grid>
            <Grid item xs={4}>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
};

export default Purchase;