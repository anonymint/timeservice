'use stricts'

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();
require('dotenv').load();

app.use('/public', express.static(process.cwd() + 'public'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('App server is running on port' + port + '...');
});