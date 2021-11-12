import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/cycle3.png'


const Banner = () => {
    const bannerBg = {
        background: `url(${bg})`,
        
    }

    return (
      <Box style={bannerBg} sx={{ flexGrow: 1, p: 5 }}>
        <Typography
          style={{ color: "white" }}
          sx={{ fontWeight: 600 }}
          variant="h1"
          gutterBottom
          component="div"
        >
          The B.I.Cycle Shop
        </Typography>
        <Typography
          style={{ color: "white" }}
          sx={{ fontWeight: 600 }}
          variant="h1"
          gutterBottom
          component="div"
        >
          Experience
        </Typography>
        <Typography
          style={{ color: "white" }}
          sx={{ fontWeight: 600 }}
          variant="h3"
          gutterBottom
          component="div"
        >
          We offer a supportive and personal interaction with our <br />
          customers, and strive to provide the most complete and <br />
          positive customer experience available from a bike shop.
        </Typography>
      </Box>
    );
};

export default Banner;