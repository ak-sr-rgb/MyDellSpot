import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ParkingSpot = ({ spot, onBookSpot }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Spot {spot.id}
        </Typography>
        <Button
          variant="contained"
          color={spot.booked ? 'secondary' : 'primary'}
          onClick={() => onBookSpot(spot.id)}
        >
          {spot.booked ? 'Unbook' : 'Book'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ParkingSpot;
