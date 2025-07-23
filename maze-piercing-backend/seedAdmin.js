import mongoose from 'mongoose';
import Admin from './models/Admin.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  const admin = new Admin({
    email: 'admin@example.com',
    password: 'admin', // plain password — will be hashed by schema hook
  });

  await admin.save();
  console.log('Admin created');
  mongoose.disconnect();
};

createAdmin();
