// src/components/StatCard.js
import { Card, CardContent, Typography } from "@mui/material";

const StatCard = ({ title, value, color }) => (
  <Card sx={{ backgroundColor: `${color}.main`, color: "white" }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </CardContent>
  </Card>
);

export default StatCard;
