const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "",
    trim: true
  },
  password: {
    type: String,
    required: true,
    minLength: 7
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: value => {
      if (!validator.isEmail(value)) {
          throw new Error({error: 'Invalid Email address'})
      }
    }
  },
  posts: {
    type: Array,
    required: false,
    default: []
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  },
  tokens: [{
    token: {
        type: String,
        required: true
    }
  }]
});

UserSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const user = this
  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

UserSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the user
  const user = this
  const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

UserSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  const user = await User.findOne({email}).exec()
  if (!user) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  return user
}

// UserSchema.methods.validPassword = function(password){
//   return bcrypt.compareSync(password, this.password);
// };
const User = mongoose.model('User', UserSchema);
module.exports = User;