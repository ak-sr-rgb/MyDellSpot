import React, { useState } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import ParkingSpotList from './ParkingSpotList';

const ParkingSpotBooking = () => {
  const [spots, setSpots] = useState([
    { id: 1, booked: false },
    { id: 2, booked: false },
    { id: 3, booked: false },
    { id: 4, booked: false },
  ]);

  const handleBookSpot = (id) => {
    setSpots((prevSpots) =>
      prevSpots.map((spot) =>
        spot.id === id ? { ...spot, booked: !spot.booked } : spot
      )
    );
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{margin:20}}>
        Parking Spot Booking
      </Typography>
      <ParkingSpotList spots={spots} onBookSpot={handleBookSpot} />
    </Container>
  );
};

export default ParkingSpotBooking;
