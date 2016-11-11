'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {
  res.render('index');
});

exports.default = router;