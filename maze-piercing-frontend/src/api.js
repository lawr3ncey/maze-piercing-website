import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Update this to your deployed backend URL later
});

export const bookAppointment = (formData) => API.post('/appointments', formData);
