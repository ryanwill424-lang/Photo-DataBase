var express = require('express');
var router = express.Router();

/* GET /photos */
router.get('/', function(req, res) {
  res.send('photos list');
});

module.exports = router;
