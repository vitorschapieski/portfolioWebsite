var express = require('express');
var router = express.Router();

/* GET home page. */
var controller = require('../controller/controller')

router.get('/', controller.home);
router.get('/home', controller.home);
router.get('/github', controller.gitHub);
router.get('/linkedin', controller.linkedin);

module.exports = router;
