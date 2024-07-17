import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ParkingSpotList from './ParkingSpotList';

const ParkingSpotBooking = () => {
  const [spots, setSpots] = useState([
    { id: 1, booked: false, type: 'car' },
    { id: 2, booked: false, type: 'car' },
    { id: 3, booked: false, type: 'bike' },
    { id: 4, booked: false, type: 'bike' },
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
      <Typography variant="h4" gutterBottom>
        Parking Spot Booking
      </Typography>
      <ParkingSpotList spots={spots} onBookSpot={handleBookSpot} />
    </Container>
  );
};

export default ParkingSpotBooking;
