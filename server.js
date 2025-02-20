const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const applicationRoutes = require('./routes/applicationRoutes');
const authRoutes = require('./routes/authRoutes'); // Import auth routes

// Create the Express app
const app = express();
const PORT = 5005;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection string for local MongoDB instance
const mongoURI = 'mongodb://localhost:27017/freelancer-hub'; // Use the local URI

// MongoDB connection
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Routes
app.use('/api', applicationRoutes);
app.use('/api/auth', authRoutes); // Add auth routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('Freelancer Hub Backend Running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
