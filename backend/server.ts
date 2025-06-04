import express from 'express';
console.log('1. Starting server setup...');

const app = express();
console.log('2. Express app created...');

app.get('/api/test', (req, res) => {
  console.log('3. Route hit!');
  res.json({ message: 'Hello from the backend!' });
});
console.log('4. Route defined...');

app.listen(3001, () => {
  console.log('5. Server is running on http://localhost:5000');
});
console.log('6. Listen called...');