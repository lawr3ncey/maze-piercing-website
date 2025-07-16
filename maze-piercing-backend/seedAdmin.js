const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  await Admin.deleteMany({}); // clear existing admins

  const hashedPassword = await bcrypt.hash('admin', 10);

  const admin = new Admin({
    email: 'admin@example.com',
    password: hashedPassword,
  });

  await admin.save();
  console.log('Admin created');
  mongoose.disconnect();
};

createAdmin();
