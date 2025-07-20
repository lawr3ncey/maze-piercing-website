const mongoose = require('mongoose');
const Admin = require('./models/Admin');
require('dotenv').config();

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
