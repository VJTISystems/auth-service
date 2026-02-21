const express = require('express');
const authRoutes = require('./routes/authRoutes');
const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Auth service is running');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
