import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom'; // ⬅️ Updated here
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Menu, MenuItem, Button } from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';

const drawerWidth = 240;

function AdminLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // ⬅️ Added for navigation

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // ⬅️ Clear token
    setAnchorEl(null); // Close menu
    navigate('/admin/login'); // ⬅️ Redirect to login
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1e1e2f',
            color: 'white',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Typography variant="h6" align="center" sx={{ py: 2 }}>
            Admin Panel
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin">
                <ListItemIcon sx={{ color: 'white' }}>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/bookings">
                <ListItemIcon sx={{ color: 'white' }}>
                  <EventNoteIcon />
                </ListItemIcon>
                <ListItemText primary="Bookings" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#f9f9f9',
          minHeight: '100vh',
        }}
      >
        {/* Top Navbar */}
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor: '#333',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6">Maze Admin Panel</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* User Avatar */}
              <IconButton onClick={handleAvatarClick} color="inherit">
                <Avatar sx={{ bgcolor: '#d8b4fe' }}>A</Avatar>
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout} sx={{ color: 'red' }}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Adjust for fixed top bar */}
        <Toolbar />

        {/* Render nested routes */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default AdminLayout;

