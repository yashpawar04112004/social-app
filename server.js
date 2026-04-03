require('dotenv').config();
const express = require('express');
const cors = require('cors');
let mongoose;

try {
  mongoose = require('mongoose');
} catch (e) {
  console.log('⚠️ Mongoose not installed, running without database');
  mongoose = null;
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Social App API ✅',
    version: '1.0.0'
  });
});

// Try to use real routes
try {
  const authRoutes = require('./backend/routes/auth');
  const postRoutes = require('./backend/routes/posts');
  
  app.use('/api/auth', authRoutes);
  app.use('/api/posts', postRoutes);
  
  // Connect MongoDB if available
  if (mongoose) {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-app', {
      serverSelectionTimeoutMS: 5000
    })
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.log('⚠️ MongoDB not available, API running in test mode'));
  }
} catch (e) {
  console.log('⚠️ Using test API mode');
  
  // Fallback test endpoints
  app.post('/api/auth/signup', (req, res) => {
    res.json({ message: 'Signup working', token: 'test-token', user: req.body });
  });
  
  app.post('/api/auth/login', (req, res) => {
    res.json({ message: 'Login working', token: 'test-token', user: req.body });
  });
  
  app.get('/api/posts', (req, res) => {
    res.json([{ _id: '1', text: 'Test post', userId: { username: 'Test User' }, likes: [], comments: [] }]);
  });
}

// Error handling
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n✅ Backend Server Running: http://localhost:${PORT}\n`);
});
