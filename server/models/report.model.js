var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user.model.js');

var reportSchema = new Schema ({
  reporter: [{
    type: Schema.Types.ObjectId,
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
  meetingTime: {
    type: String
  },
  meetingAddress: { //for the physical street address of meeting being reported
    type: String
  },
  meetingCity: {
    type: String,
    required: true
  },
  meetingState: {
    type: String,
    required: true
  },
  meetingZip: {
    type: Number,
    minlength: 5,
    maxlength: 5,
    required: true
  },
  meetingPurpose: {
    type: Boolean, //where true would be civic or professional development
    required: true  //and false would be hobby or personal development
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
    required: true
  },
  host: {
    type: String
  },
  isNonProfit: {
    type: Boolean,
    required: true
  },
  formedToSupport: {
    type: Boolean,
    required: true
  },
  supportWho: {
    type: String,
    required: true
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
    type: String
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
    type: String
  },
  attendees: {
    type: Number,    //<--should this be required?
    required: true
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
