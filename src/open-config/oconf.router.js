var oconf = require('../open-config/oconf.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function (req, res, next) {
  res.send(oconf);
});
console.log((oconf?.routes?.crud ?? "") + "/");
for (const entityName in oconf.entities) {
  router.get((oconf?.routes?.crud ?? "") + "/" + entityName, function (req, res, next) {
    res.send(oconf.entities[entityName]);
  });
}

module.exports = router;
