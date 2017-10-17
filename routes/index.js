var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fetch_picture', function(req, res, next){
	if (req.query.random){
		res.render('index', {title : 'todo: get random picture' });
	}else{
		res.render('index', {title : 'todo : picture'});
	}
})

module.exports = router;
