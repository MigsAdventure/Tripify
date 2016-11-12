const router = require('express').Router();
const Places = require('../models/Places');

router.get('/', Places.search);

module.exports = router;
