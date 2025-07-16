import axios from 'axios';
import dayjs from 'dayjs'; // Make sure to install this

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';


function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [monthlyBookings, setMonthlyBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/appointments')
      .then((response) => {
        setBookings(response.data);

        // Step 1: Group bookings by month
        const monthMap = {};

        response.data.forEach((booking) => {
          const month = dayjs(booking.preferredDate).format('MMM'); // e.g. 'Jun'
          monthMap[month] = (monthMap[month] || 0) + 1;
        });

        // Step 2: Convert to chart format
        const formatted = Object.entries(monthMap).map(([month, count]) => ({
          month,
          bookings: count
        }));

        setMonthlyBookings(formatted);
      })
      .catch((error) => console.error('Error fetching bookings:', error));
  }, []);

  return (
    <Box>
      {/* Dashboard Title */}
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Stats Summary */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 2, bgcolor: '#1976d2', color: 'white' }}>
            <Typography variant="h6">Bookings</Typography>
            <Typography variant="h5">{bookings.length}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 2, bgcolor: '#2e7d32', color: 'white' }}>
            <Typography variant="h6">Users</Typography>
            <Typography variant="h5">2,300</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 2, bgcolor: '#ed6c02', color: 'white' }}>
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h5">$34k</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 2, bgcolor: '#9c27b0', color: 'white' }}>
            <Typography variant="h6">Followers</Typography>
            <Typography variant="h5">+91</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box>
        <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>

        {/* Grid of Stat Cards */}
        <Grid container spacing={2} mb={4}>...</Grid>

        {/* Chart Section */}
        <Typography variant="h6" gutterBottom mt={4}>
          Monthly Bookings Overview
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyBookings}>
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="bookings" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>

        {/* Table */}
        <Typography variant="h6" gutterBottom>Recent Bookings</Typography>
        <TableContainer component={Paper}>...</TableContainer>
      </Box>

      <br/>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Piercing Type</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Message</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((b) => (
              <TableRow key={b._id}>
                <TableCell>{b.name}</TableCell>
                <TableCell>{b.email}</TableCell>
                <TableCell>{b.piercingType}</TableCell>
                <TableCell>{b.preferredDate}</TableCell>
                <TableCell>{b.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Dashboard;
