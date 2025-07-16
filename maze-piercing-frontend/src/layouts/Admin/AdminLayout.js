// src/layouts/AdminLayout.js
import { Outlet, Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';

const drawerWidth = 240;

function AdminLayout() {
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
          p: 3,
          backgroundColor: '#f9f9f9',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default AdminLayout;
