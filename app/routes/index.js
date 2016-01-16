'use stricts';

var path = process.cwd();
var Controller = require(path + '/app/controller/timeController.js');
var timeController = new Controller();


module.exports = function(app) {

	app.route('/')
		.get(function(req, res){
			res.sendFile(path + "/public/index.html");
		});

	app.route('/:val')
		.get(function(req, res){
			res.json(timeController.process(req.params.val));
		});

	app.route('/*')
		.get(function(req,res){
			res.redirect('/');
		});
};