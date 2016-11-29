var express = require('express');
var router = express.Router();

var User = require('../models/user.model.js');

router.get('/users', function(req, res){
  User.find({}, function(err, users){
    if(err){
      res.status(500).json({
        msg: err   //change to generic error message
      });
    } else{
      res.status(200).json({
        posts: posts
      });
    }
  });
});

router.get();

router.post();

router.put();

router.delete();

module.exports = router;
