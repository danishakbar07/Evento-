var express = require('express');
const { validateToken } = require('../helpers/jwt');
const routeHelper = require('../helpers/route-helper');

var router = express.Router();

/* GET home page. */
//router.get('/', helper.getall)

router.post('/',routeHelper.addUser)
router.post('/login',routeHelper.checkuser)
router.get('/feed',validateToken,routeHelper.getUser)
//router.get('/feed',validateToken,routeHelper.getPost)

module.exports = router;
