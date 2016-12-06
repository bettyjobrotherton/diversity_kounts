var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var signature = process.env.SIGNATURE || require('../../config.js').signature;

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
  },
  reports: {
    type: [Schema.Types.ObjectId]
  }
});

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password){
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function(){
  var expiration = new Date();
  expiration.setDate(expiration.getDate() + 1 );

  return jwt.sign({
    _id: this._id,
    email: this.email,
    exp: parseInt(expiration.getTime() /1000)
  }, signature);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
