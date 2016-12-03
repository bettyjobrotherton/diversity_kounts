var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user.model.js');

var reportSchema = new Schema ({
  _user: [{
    type: String,
    ref: User,
    required: true
  }],
  dateSubmit: {
    type: Date,
    required: true
  },
  meetingDate: {
    type: Date,
    required: true
  },
  meetingAddress: { //for the physical street address of meeting being reported
    type: String
  },
  meetingCity: {
    type: String
  },
  meetingState: {
    type: String
  },
  meetingZip: {
    type: Number,
    minlength: 5,
    maxlength: 5
  },
  meetingPurpose: {
    type: Boolean //where true would be civic or professional development
  },              //and false would be hobby or personal development
  meetingType: {
    type: String
  },
  isRoutine: {
    type: Boolean
  },
  isForSpecificGroup: {
    type: Boolean
  },
  specificGroup: {
    type: String
  },
  host: {
    type: String
  },
  isNonProfit: {
    type: Boolean
  },
  formedToSupport: {
    type: Boolean
  },
  supportWho: {
    type: String
  },
  hasLeader: {
    type: Boolean
  },
  leaderGender: {
    type: String
  },
  isLeaderLatin: {
    type: Boolean
  },
  leaderRace: {
    type: String
  },
  hasSpeaker: {
    type: Boolean
  },
  speakerGender: {
    type: String
  },
  isSpeakerLatin: {
    type: Boolean
  },
  speakerRace: {
    type: String
  },
  attendees: {
    type: Number,    //<--should this be required?
  },
  femaleAttend: {
    type: Number
  },
  maleAttend: {
    type: Number
  },
  otherGenderAttend: {
    type: Number
  },
  dkGenderAttend: {
    type: Number
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
