const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv')
dotenv.config()

const morgan = require('morgan')
app.use(morgan('dev'));

app.use(express.json());
app.use(cors());

app.use(multer({ dest: "./uploads/",
  rename: function (fieldname, filename) {
    return filename;
  },
}));

mongoose.connect(process.env.PRODUCTION_DB, {useUnifiedTopology: true, useNewUrlParser: true}, (err, success) => {
  if (err) { return console.error(err)}
  console.log('Connection Status: Success ✅');
})

const Post = require('./models/Post')
app.post("/api/photo", async (req, res) => {
  var post = new Post({
    img: {
      data: fs.readFileSync(req.files.userPhoto.path),
      contentType: "image/png"
    }
  });
  await newItem.save();
  res.send(post);
});

app.get('/', (req, res, next) => {
  res.send('Hello World!');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening to PORT: ${PORT}`));