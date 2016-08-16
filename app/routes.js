const express     = require('express');
const bodyParser  = require('body-parser');

module.exports = function() {
  let api = express.Router();
  api.use(bodyParser.json());

  api.get('/home', function(req, res) {
    res.send('Hello World');
  });

  api.get('/swag', function(req, res) {
    res.send('Swag city son');
  });

  return api;
}
