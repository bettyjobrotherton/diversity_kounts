var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/user.model.js');

router.get('/users/profile/:userID', function(req, res){});

router.post('/users/signup', function(req, res){
  var user = new User(req.body);

  if(!req.body.email){
    return res.status(400).json({
      msg: 'Bad request - sign up requires email'
    });
  }
  if(!req.body.password){
    return res.status(400).json({
      msg: 'Bad request - sign up requires password'
    });
  }
  if(!req.body.is13OrOlder){
    return res.status(400).json({
      msg: 'Bad request - you must be atleast 13 years old to sign up'
    });
  }
  if(req.body.is13OrOlder !== true){
    return res.status(400).json({
      msg: 'Bad request - you must be atleast 13 years old to sign up'
    });
  }
  user.setPassword(req.body.password);

  user.save(function(err){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(201).json({
      msg: 'Account successfully created'
    });
  });
});

router.post('/users/login', function(req, res){
  passport.authenticate('local', function(err, user, data){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    if(!user){
      return res.status(401).json({
        msg: "The username or password you have provided is incorrect"
      });
    }
    if(!user.validPassword(req.body.password)){
      return res.status(401).json({
        msg: "The username or password you have provided is incorrect"
      });
    }
    return res.status(200).json({
      token: user.generateJwt()
    });
  })(req, res);
});

router.put('/users/profile/:userID', function(req, res){});

module.exports = router;
