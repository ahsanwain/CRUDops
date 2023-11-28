import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Welcome</h1><p>My first express app</p>");
});

app.post('/register', (req, res) => {
    res.sendStatus(201);
});

app.put('/users/ahsan', (req, res) => {
    res.sendStatus(200);
});

app.patch('/users/ahsan', (req, res) => {
    res.sendStatus(200);
});

app.delete('/users/ahsan', (req, res) => {
    res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});