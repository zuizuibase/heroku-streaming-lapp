var express = require('express');
var router = express.Router();

require('dotenv').config()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: process.env.LAPP_NAME,
    embed: process.env.VIDEO_EMBED,
    currency: process.env.CURRENCY === '' ? 'sats' : process.env.CURRENCY,
    minPayment: process.env.MIN_PAYMENT
  })
})

module.exports = router;
