'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var router = (0, _express.Router)();

router.get('/list', function (req, res, next) {
  var list = ['this is a', 'this is b', 'this is c'];

  res.json(list);
});

exports.default = router;