import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/submit', (req, res) => {
    console.log(req.body);
    res.send('POST request to the homepage');
    });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});