  const mongoose = require('mongoose');
  const bcrypt = require('bcrypt');
  require('dotenv').config();
  const Admin = require('./models/Admin');

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
