import { Grid, Paper, Typography, Button, Rating, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import './Review.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://protected-cliffs-11617.herokuapp.com/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    }, [])
    console.log(reviews)
  return (
    <div className="review-bg ">
      <h1 className="text-white">Customer Reviews</h1>
      <Box sx={{ my: 5 }}>
        <Container>
          {/* <Typography sx={{ mt: 5 }} variant="h2" component="div" gutterBottom>
            Customer Reviews
          </Typography> */}
          <Grid container spacing={2}>
            {reviews?.map((review) => (
              <Grid key={review._id} item xs={12} sm={6} md={3}>
                <Paper elevation={3} sx={{ py: 2 }}>
                  <Typography
                    sx={{ color: "error.main", fontWeight: 600 }}
                    variant="h5"
                    gutterBottom
                    component="div"
                  >
                    Reviewed by..
                  </Typography>
                  <Typography
                    sx={{ color: "info.main", fontWeight: 600 }}
                    variant="h5"
                    gutterBottom
                    component="div"
                  >
                    {review.customerName}
                  </Typography>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      readOnly
                      name="simple-controlled"
                      value={review.star}
                    />
                  </Box>

                  <Typography variant="h7" gutterBottom component="div">
                    {review.comment}
                  </Typography>
                  <Typography variant="h6" gutterBottom component="div">
                    {review.date}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Reviews;
