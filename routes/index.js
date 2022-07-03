var express = require('express');
var router = express.Router();

/* GET home page. */
var controller = require('../controller/controller')

router.get('/', controller.home)
router.get('/home', controller.home)

module.exports = router;
