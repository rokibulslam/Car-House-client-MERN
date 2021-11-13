import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Payment = () => {
    return (
      <Box sx={{mt: 5}}>
        <Container>
          <Typography
            sx={{ color: "success.main" }}
            variant="h1"
            gutterBottom
            component="div"
          >
            Payment Option Comming Soon
          </Typography>
        </Container>
      </Box>
    );
};

export default Payment;