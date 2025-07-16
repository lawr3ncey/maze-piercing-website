// src/pages/Admin/Bookings.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from '@mui/material';

function Bookings() {
  const [bookings, setBookings] = useState([]);

  // Fetch data every 10 seconds
  useEffect(() => {
    const fetchBookings = () => {
      axios.get('http://localhost:5000/appointments')
        .then(res => setBookings(res.data))
        .catch(err => console.error('Error fetching bookings:', err));
    };

    fetchBookings(); // Initial fetch
    const interval = setInterval(fetchBookings, 10000); // Poll every 10s

    return () => clearInterval(interval); // Cleanup
  }, []);

  // Convert bookings for calendar
  const calendarEvents = bookings.map(b => ({
    title: `${b.name} - ${b.piercingType}`,
    date: b.preferredDate,
  }));

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Bookings
      </Typography>

      {/* Layout: Calendar + Table */}
      <Grid container spacing={4}>
        {/* Calendar */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Calendar View
            </Typography>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={calendarEvents}
              height="auto"
            />
          </Paper>
        </Grid>

        {/* Table */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Booking List
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Email</strong></TableCell>
                    <TableCell><strong>Type</strong></TableCell>
                    <TableCell><strong>Date</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings.map((b) => (
                    <TableRow key={b._id}>
                      <TableCell>{b.name}</TableCell>
                      <TableCell>{b.email}</TableCell>
                      <TableCell>{b.piercingType}</TableCell>
                      <TableCell>{b.preferredDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Bookings;