import React from 'react';
import { Card, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

const ParkingSpotCard = styled(Card)(({ theme, booked, type }) => ({
  backgroundColor: booked ? '#ffcccb' : '#90ee90',
  border: '2px solid #555',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '8px',
  padding: '10px',
}));

const SpotNumber = styled(Typography)({
  position: 'absolute',
  top: '10px',
  left: '10px',
  fontWeight: 'bold',
});

const BookButton = styled(Button)(({ booked }) => ({
  position: 'absolute',
  bottom: '10px',
  backgroundColor: booked ? '#d32f2f' : '#1976d2',
  '&:hover': {
    backgroundColor: booked ? '#c62828' : '#1565c0',
  },
}));

const ParkingSpot = ({ spot, onBookSpot }) => {
  const Icon = spot.type === 'car' ? DirectionsCarIcon : TwoWheelerIcon;

  return (
    <ParkingSpotCard booked={spot.booked} type={spot.type}>
      <SpotNumber variant="h6">Spot {spot.id}</SpotNumber>
      <Icon style={{ fontSize: 50, marginBottom: '10px' }} />
      <BookButton
        variant="contained"
        booked={spot.booked ? 1 : 0}
        onClick={() => onBookSpot(spot.id)}
      >
        {spot.booked ? 'Unbook' : 'Book'}
      </BookButton>
    </ParkingSpotCard>
  );
};

export default ParkingSpot;
