var express = require('express');
var app = express();
var config = require('./config');

app.get('/test',function(req,res){

});

app.use(express.static('bower_components/'));

app.use(express.static('client/'));

app.listen( config.server.port, function() {
    console.log('Express server listening on port ' + config.server.port);
});
