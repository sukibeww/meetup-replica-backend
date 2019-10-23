const mongoose = require('mongoose');
const validator = require('validator')
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  },
  posts: {
    type: Array,
    required: false
  }
})

module.exports = mongoose.model('User', UserSchema);