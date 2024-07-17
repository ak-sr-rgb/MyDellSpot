import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import LocalParkingIcon from '@mui/icons-material/DirectionsCar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material';
import {
  useNavigate
} from "react-router-dom";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Dell Tech Facilities '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [vehicleType, setVehicleType] = React.useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleChange = (event) => {
    setVehicleType(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LocalParkingIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Vehicle Registration
           
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText="Provide a valid email address for communication purposes."
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Phone number"
              helperText="Provide a valid phone number for communication purposes."
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Vehicle Number"
              id="password"
              helperText="Ensure you have your VIN (Vehicle Identification Number)."
              autoComplete="current-password"
            />
            <FormControl fullWidth style={{ marginTop: 15 }}>
              <InputLabel id="vehicle-type-label">Vehicle Type</InputLabel>
              <Select
                labelId="vehicle-type-label"
                value={vehicleType}
                label="Vehicle Type"
                onChange={handleChange}
              >
                <MenuItem value="car">Car</MenuItem>
                <MenuItem value="bike">Bike</MenuItem>
              </Select>
              <FormHelperText>Select the type of vehicle you are registering.</FormHelperText>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="warning"
              onClick={() =>
                navigate("/")}
              sx={{ mt: 3, mb: 2 }}
            >
              Go Back
            </Button>
            <Grid container>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}