const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
  img: {
    data: Buffer,
    contentType: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  comments: {
    type: Array,
    required: false
  }
})

module.exports = mongoose.model('Post', PostSchema);
