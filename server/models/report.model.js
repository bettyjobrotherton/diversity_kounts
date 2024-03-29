var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user.model.js');

var reportSchema = new Schema ({
  _reporter: [{
    type: Schema.Types.ObjectId,
    required: true
  }],
  dateSubmit: {
    type: Date,
    required: true
  },
  meetingName: {
    type: String
  },
  meetingDateTime: {  //combined meeting date and time
    type: Date,
    required: true
  },
  // meetingTime: {
  //   type: String
  // },
  meetingLocation: { //for the physical street address of meeting being reported
    type: String,
    required: true
  },
  meetingPurpose: {
    type: String,
    required: true  
  },
  meetingType: {
    type: String,
    required: true
  },
  isRoutine: {
    type: Boolean,
    required: true
  },
  isForSpecificGroup: {
    type: Boolean,
    required: true
  },
  specificGroup: {
    type: String,
  },
  host: {
    type: String
  },
  isNonProfit: {
    type: Boolean,
  },
  formedToSupport: {
    type: Boolean,
  },
  supportWho: {
    type: String,
  },
  hasLeader: {
    type: Boolean,
    required: true
  },
  leaderGender: {
    type: String
  },
  isLeaderLatin: {
    type: Boolean
  },
  leaderRace: {
    black: Boolean,
    asian: Boolean,
    white: Boolean,
    native: Boolean,
    other: Boolean,
    na: Boolean
  },
  hasSpeaker: {
    type: Boolean,
    required: true
  },
  speakerGender: {
    type: String
  },
  isSpeakerLatin: {
    type: Boolean
  },
  speakerRace: {
    black: Boolean,
    asian: Boolean,
    white: Boolean,
    native: Boolean,
    other: Boolean,
    na: Boolean
  },
  attendees: {
    type: Number,    //<--should this be required?
    required: true
  },
  femaleAttend: {
    type: Number,
    required: true
  },
  maleAttend: {
    type: Number,
    required: true
  },
  otherGenderAttend: {
    type: Number,
    required: true
  },
  dkGenderAttend: {
    type: Number,
    required: true
  },
  latinAttend: {
    type: Number
  },
  dkLatinAttend: {
    type: Number
  },
  blackAttend: {
    type: Number
  },
  asianAttend: {
    type: Number
  },
  whiteAttend: {
    type: Number
  },
  nativeAttend: {
    type: Number
  },
  otherRaceAttend: {
    type: Number
  },
  dkRaceAttend: {
    type: Number
  },
  comments: {
    type: String
  }
});

var Report = mongoose.model('Report', reportSchema);

module.exports = Report;
