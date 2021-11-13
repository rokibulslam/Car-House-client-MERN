import { TextField, Typography, Button, Alert, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState('');
    const [admins, setAdmins] = useState([])
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess('true');
        }
        else {
            setSuccess('false');
          }
      });
      console.log(success)
    e.preventDefault();
  };
    useEffect(() => {
        fetch("http://localhost:5000/admins/admin")
          .then((res) => res.json())
          .then((data) => setAdmins(data));
    }, [success])
    
  return (
    <Box>
      <Typography sx={{ m: 5 }} variant="h2" component="div" gutterBottom>
        Make A Admin
      </Typography>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          required
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          onBlur={handleEmailInput}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success === true && (
        <Alert severity="success">Made Admin successfully!</Alert>
      )}
      {!success === false && <Alert severity="error">User Not exist!</Alert>}
      <Container>
        <Box sx={{ m: 5 }}>
          <Grid container spacing={2}>
            {admins?.map((admin) => (
              <Grid key={admin._id} item xs={12} md={3}>
                <Paper elevation={3} sx={{ py: 5 }}>
                  <Typography
                    sx={{ color: "error.main", fontWeight: 600 }}
                    variant="h5"
                    gutterBottom
                    component="div"
                  >
                    ADMIN
                  </Typography>
                  <Typography
                    sx={{ color: "info.main", fontWeight: 600 }}
                    variant="h5"
                    gutterBottom
                    component="div"
                  >
                    {admin.displayName}
                  </Typography>
                  <Typography variant="h6" gutterBottom component="div">
                    {admin.email}
                  </Typography>

                  <Button variant="contained">Remove Admin</Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MakeAdmin;
