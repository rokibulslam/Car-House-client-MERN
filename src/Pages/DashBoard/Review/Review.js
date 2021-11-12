import { Rating, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
    
    const {user} = useAuth()
    const [star, setStar] = React.useState(1)
    const [reviewData, setReviewData] = useState({})
    
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const handleReviewInfo = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData[field] = value;
        setReviewData(newReviewData);
    }
    const onSubmitReview = (e) => {
        const review = {
            ...reviewData,
            date: currentDate,
            star: star,
            customerName: user?.displayName,
        };
        axios.post("http://localhost:5000/review", review).then((res) => {
          if (res.data.insertedId) {
            alert("Reviewed Successfully");
          }
        });
        console.log(review)
        e.preventDefault()
    }

  return (
    <Box>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Give us Rating</Typography>
        <Rating
          name="simple-controlled"
          value={star}
          onChange={(event, newValue) => {
            setStar(newValue);
          }}
        />
      </Box>
      <form onSubmit={onSubmitReview}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
                      justifyContent: "center",
            alignItems: 'center'
          }}
        >
          <TextField
            required
            sx={{ width: "25%", m: 1 }}
            id="filled-basic"
            label="Comment Here"
            name="comment"
            onBlur={handleReviewInfo}
            variant="filled"
          />
          <Button sx={{ width: "25%", m: 1 }} type="submit" variant="contained">
            Add a Review
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Review;
