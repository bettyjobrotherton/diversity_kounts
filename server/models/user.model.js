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
  password: {
    type: String, //this MUST be changed to more secure type
    required: true
  },
  cellAreaCode: {
    type: Number
  },
  cellFirstThree: {
    type: Number
  },
  cellLastFour: {
    type: Number
  },
  dateOfBirth: {
    type: Date
  }
});
