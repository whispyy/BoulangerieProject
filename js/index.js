var server = require('./server');
var mongoose = require('mongoose');

server.start();

mongoose.connect('mongodb://localhost/BoulangerieProject', function(err) {
  if (err) { throw err; }
});