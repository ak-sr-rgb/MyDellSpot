import React from 'react';
import { Grid } from '@mui/material';
import ParkingSpot from './ParkingSpot';

const ParkingSpotList = ({ spots, onBookSpot }) => {
  return (
    <Grid container spacing={3}>
      {spots.map((spot) => (
        <Grid item xs={3} key={spot.id}>
          <ParkingSpot spot={spot} onBookSpot={onBookSpot} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ParkingSpotList;
