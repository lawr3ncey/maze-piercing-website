// src/components/Sidebar.js
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: 240 }}>
      <List>
        <ListItem button component={Link} to="/admin">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/bookings">
          <ListItemIcon><EventNoteIcon /></ListItemIcon>
          <ListItemText primary="Bookings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
