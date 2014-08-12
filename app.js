var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/nightingale');



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/reliefStatus', indexController.reliefStatus);
app.get('/requestMarkers', indexController.requestMarkers);

app.post('/aidSubmit', indexController.aidSubmit);
app.post('/contSubmit', indexController.contSubmit);


var server = app.listen(3430, function() {
	console.log('Express server listening on port ' + server.address().port);
});
