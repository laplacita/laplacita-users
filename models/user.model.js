const moongose = require('mongoose')
const { Schema } = moongose
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  passwod: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  lastSignIn: {
    type: Date
  }
})

module.exports = moongose.model('User', UserSchema)
