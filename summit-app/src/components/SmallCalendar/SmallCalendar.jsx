import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import styles from './SmallCalendar.module.css'

const SmallCalendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        // mask='____/__/__'
        className={styles.calendar}
        variant='static'
        orientation='portrait'
        value={value}
        disablePast
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => {
          <TextField {...params} />;
        }}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) >= 0;

          return (
              <PickersDay {...DayComponentProps} />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default SmallCalendar;