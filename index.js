import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Welcome</h1><p>My first express app</p>");
});

app.get('/about', (req, res) => {
    res.send('<h1>About Me:</h1><p></p>My name is Ahsan Wain and I like to sleep.</p>');
});

app.get('/contact', (req, res) => {
    res.send("<h1>Contact Me:</h1><p>Phone: +92-311-5113005 </p><p>Email: ahsanwain1516@gmail.com</p>");
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});