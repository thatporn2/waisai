require('dotenv').config();   // 👈 ต้องอยู่บรรทัดบนสุด

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 10000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ TEST ROUTE (สำคัญมาก)
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

console.log("DEBUG MONGO_URI =", process.env.MONGO_URI);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// routes
app.post('/register', async (req, res) => {
  res.json({ message: 'register ok' });
});

app.post('/login', async (req, res) => {
  res.json({ message: 'login ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
