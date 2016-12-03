var express = require('express');
var router = express.Router();

var Report = require('../models/report.model.js');

router.get('/reports', function(req, res){   //all reports
  Report.find({}, function(err, reports){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      reports: reports
    });
  });
});

router.get('/reports/byuser/:userID', function(req, res){  //all reports by userID
  Report.find({_user: req.params.userID}, function(err, reports){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      reports: reports
    });
  });
});

router.get('/reports/:id', function(req, res){  //single report
  Report.find({_id: req.params.id}, function(err, report){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      report: report
    });
  });
});

router.post('/reports', function(req, res){
  var report = new Report(req.body);
  report.dateSubmit = new Date();

  report.save(function(err){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(201).json({
      msg: 'Report successfully submitted'
    });
  });
});

router.put('/reports/:id', function(req, res){});

router.delete('/reports/:id', function(req, res){});

module.exports = router;
