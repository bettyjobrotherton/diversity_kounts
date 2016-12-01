var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String
  },
  isLatin: {
    type: Boolean
  },
  race: {
    type: String
  },
  getEmail: {
    type: Boolean,
    required: true
  },
  is13OrOlder: {
    type: Boolean,
    required: true
  },
  hash: {
    type: String
  },
  salt: {
    type: String
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
