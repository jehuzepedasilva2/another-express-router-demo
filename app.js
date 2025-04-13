const express = require('express');
const userRouter = require('./routes/userRouter');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('hello there!');
});

app.use('/users', userRouter);


app.listen(process.env.PORT, () => {
  console.log('server running...');
});