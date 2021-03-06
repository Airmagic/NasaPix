var express = require('express');
var apod = require('../apod/apodService');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('fetch_picture');
});

router.get('/fetch_picture', function(req, res, next){
	
	console.log('random?' + req.query.random );
	apod(function(err, apod_data){
		
		if (err){
			return res.render('apod_error', {error: err.message, title : "Error"});
		}
		else {
			return res.render('index', {apod : apod_data, title : "APOD for " + apod_data.data });
		}
	}, req.query.random);
});

module.exports = router;
