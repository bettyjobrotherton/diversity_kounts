var express = require('express');
var router = express.Router();

var Report = require('../models/report.model.js');

router.get('/reports', function(req, res){   //all reports

});

router.get('/reports/byuser/:userID', function(req, res){}); //all reports by userID

router.get('/reports/:id', function(req, res){}); //single report

router.post('/reports', function(req, res){});

router.put('/reports/:id', function(req, res){});

router.delete('/reports/:id', function(req, res){});

module.exports = router;
