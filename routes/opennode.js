var express = require('express');
var router = express.Router();

const opennodeController = require('../controllers/opennode')

/* GET checkout page */
router.get('/', async (req, res, next) => {
  try {
    amount = process.env.MIN_PAYMENT
    if (req.body.amount < process.env.MIN_PAYMENT) return res.status(500)
    const charge = await opennodeController.createCharge({ amount })
    return res.redirect(`https://checkout.opennode.com/${charge.id}`)
  } catch (err) {
    console.error(err)
  }
})

/* POST callback when invoice paid */
router.post('/callback', async (req, res, next) => {
  try {
    const charge = req.body
    const isValid = await opennodeController.signatureIsValid(charge)

    if (isValid) {
      console.log('Payment received at OpenNode')
    }
  } catch (err) {
    console.error(err)
  }
})

module.exports = router