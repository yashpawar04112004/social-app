// Quick Test Server
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simple routes
app.get('/', (req, res) => {
  res.json({ status: 'Backend working! ✅' });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API working! ✅' });
});

app.post('/api/auth/signup', (req, res) => {
  const { username, email, password } = req.body;
  res.json({
    message: 'Signup test working',
    token: 'test-token-123',
    user: { username, email }
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  res.json({
    message: 'Login test working',
    token: 'test-token-456',
    user: { email }
  });
});

app.get('/api/posts', (req, res) => {
  res.json([
    {
      _id: '1',
      text: 'Test post',
      userId: { username: 'testuser' },
      likes: [],
      comments: [],
      createdAt: new Date()
    }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Test Server running on http://localhost:${PORT}`);
  console.log(`✅ Try http://localhost:${PORT}/api/test`);
});