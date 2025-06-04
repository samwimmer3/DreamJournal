const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:5000');
});