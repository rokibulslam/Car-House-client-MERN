import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import './Banner.css'


const Banner = () => {
    // const bannerBg = {
    //     background: `url(${bg})`,
        
    // }

    return (
      <div className="banner">
        <Box style={{paddingTop: '100px', paddingBottom: '300px'}} sx={{}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Container>
                <Typography
                  style={{ color: "white" }}
                  sx={{ fontWeight: 400 }}
                  variant="h1"
                  gutterBottom
                  component="div"
                >
                  The B.I.Cycle Shop
                </Typography>
                <Typography
                  style={{ color: "white" }}
                  sx={{ fontWeight: 400 }}
                  variant="h1"
                  gutterBottom
                  component="div"
                >
                  Experience
                </Typography>
                <Typography
                  style={{ color: "white" }}
                  sx={{ fontWeight: 400 }}
                  variant="h3"
                  gutterBottom
                  component="div"
                >
                  We offer a supportive and personal interaction with our
                  customers, and strive to provide the most complete and
                  positive customer experience available from a bike shop.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Box>
      </div>
    );
};

export default Banner;