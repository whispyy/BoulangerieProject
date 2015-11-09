var server = require('./server');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/BoulangerieProject', function(err) {
  if (err) { throw err; }
});

