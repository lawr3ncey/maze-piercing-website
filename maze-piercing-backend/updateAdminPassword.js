import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Admin from './models/Admin.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const updatePassword = async () => {
  const hashedPassword = await bcrypt.hash('admin', 10);
  await Admin.updateOne(
    { email: 'admin@example.com' },
    { $set: { password: hashedPassword } }
  );
  console.log('Password updated');
  mongoose.disconnect();
};

updatePassword();
