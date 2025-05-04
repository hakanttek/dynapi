var oconf = require('../open-config/oconf.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(oconf);
});

module.exports = router;
