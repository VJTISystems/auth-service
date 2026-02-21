const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { jwtSecret = 'secret' } = process.env;

exports.register = async ({ email, password }) => {
  if (!email || !password) throw new Error('Email and password required');
  const existing = await User.findByEmail(email);
  if (existing) throw new Error('User already exists');
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed });
  return { id: user.id, email: user.email };
};

exports.login = async ({ email, password }) => {
  if (!email || !password) throw new Error('Email and password required');
  const user = await User.findByEmail(email);
  if (!user) throw new Error('Invalid credentials');
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid credentials');
  const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, {
    expiresIn: '1h',
  });
  return token;
};
