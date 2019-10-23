const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const session = require('express-session');
const passport = require('passport');
const fs = require('fs');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv')
dotenv.config()

// const morgan = require('morgan')
// app.use(morgan('dev'));

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.PRODUCTION_DB, {useUnifiedTopology: true, useNewUrlParser: true}, (err, success) => {
  if (err) { return console.error(err)}
  console.log('Connection Status: Success ✅');
})

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		// store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.get('/', (req, res, next) => {
  res.send('Hello World!');
})

app.use('/users', require('./routes/users'))
app.use('/posts', require('./routes/posts'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening to PORT: ${PORT}`));