import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    });

app.post('/submit', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send(`<div>
        <h1>Welcome ${username}!</h1><p>Successful POST Request.</p>
        </div>`);
    });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});