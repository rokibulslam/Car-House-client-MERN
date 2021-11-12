import { Grid, Paper, Typography, Button, Rating } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
        .then(data=>setReviews(data))
    }, [])
    console.log(reviews)
  return (
    <Box sx={{ m: 5 }}>
      <Grid container spacing={2}>
        {reviews?.map((review) => (
          <Grid key={review._id} item xs={12} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
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
                <Rating readOnly name="simple-controlled" value={review.star} />
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
    </Box>
  );
};

export default Reviews;
