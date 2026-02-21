const request = require('supertest');
const express = require('express');
const authRoutes = require('../src/routes/authRoutes');

// create a fresh app for each test
const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

describe('Auth API', () => {
  it('registers a user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'pass123' });
    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty('email', 'test@example.com');
  });

  it('logs in a user', async () => {
    // first register
    await request(app)
      .post('/api/auth/register')
      .send({ email: 'login@example.com', password: 'password' });

    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'login@example.com', password: 'password' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('rejects invalid login', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'nope@example.com', password: 'password' });
    expect(res.statusCode).toBe(401);
  });
});
