const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const corsOptions = {
   origin: 'http://localhost:3000/',
   optionsSuccessStatus: 200
 }

app.use(express.static('dist'));

app.use(express.raw({ type: '*/*', limit: '1mb' }));

const port = process.env.PORT || 3000;
const key = process.env.key;

app.listen(port);

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/dist/index.html");
});

app.get('/bot', (req, res) => {
  res.sendFile(__dirname+"/dist/bot.html");
});

app.get('/init', (req, res) =>{
  res.send(key);
})