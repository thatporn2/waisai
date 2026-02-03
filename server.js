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
app.use(express.static(path.join(__dirname, 'public')));


// ✅ TEST ROUTE (สำคัญมาก)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});


// MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

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
console.log('PUBLIC DIR =', path.join(__dirname, 'public'));
