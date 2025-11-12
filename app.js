const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// API 1 - Welcome message
app.get('/api/welcome', (req, res) => {
  res.json({ message: 'Welcome to my simple Node.js API 🚀' });
});

// API 2 - About info
app.get('/api/about', (req, res) => {
  res.json({
    app: 'Simple Node.js App',
    version: '1.0.0',
    author: 'Abhishek Jha',
    purpose: 'Demo for Jenkins pipeline deployment'
  });
});

// API 3 - Random quote
app.get('/api/quote', (req, res) => {
  const quotes = [
    'Keep it simple.',
    'Code, build, deploy, repeat.',
    'Automate everything with Jenkins!'
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

// Default route (homepage)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
