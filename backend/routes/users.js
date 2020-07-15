const express = require('express');
const router = express.Router();
const userCrtl = require('../controllers/users');
const bodyParser = require('body-parser');
const urlEncodeParser = bodyParser.urlencoded({extended: false});

router.post('/signup', urlEncodeParser, userCrtl.signup);

router.post('/login', urlEncodeParser, userCrtl.login);

module.exports = router;
