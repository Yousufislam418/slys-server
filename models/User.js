const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  password: String,
  date: Number
});

const User = mongoose.model('User', userSchema);
module.exports = User;
