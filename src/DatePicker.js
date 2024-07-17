import React, { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField, Box } from '@mui/material';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ width: '100%', marginTop: 2 }}>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
