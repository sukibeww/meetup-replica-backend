const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const morgan = require('morgan')
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


app.get('/', (req, res, next) => {
  res.send('Hello World!');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening to PORT: ${PORT}`));