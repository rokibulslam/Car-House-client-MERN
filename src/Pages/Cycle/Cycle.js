import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia,  Container,  Grid, Typography } from '@mui/material';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Cycle = (props) => {
    
  const { _id, ProductName, price, description, imgURL } = props.cycle;

    return (
      
        <Grid
          sx={{display: "flex", justifyContent: "center" }}
          item
          xs={12}
          md={4}
        >
          <Card
          sx={{
              maxWidth: 345,
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={imgURL}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ProductName}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Price:${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description.slice(0, 100)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <NavLink style={{ textDecoration: "none" }} to={`/purchase/${_id}`}>
                <Button variant="contained">Purchase</Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
      
    );
};

export default Cycle;