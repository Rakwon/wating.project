let express = require('express');
let Waiting = require('../models/waiting');
let router = express.Router();

let config = require('../config');
let Nexmo = require('nexmo');
let nexmo = new Nexmo({
  apiKey : config.NEXMO_API_KEY,
  apiSecret : config.NEXMO_SECRET
});

/* GET home page. */
router.post('/sms', function(req, res, next) {
    
    const from = 'Acme Inc'
    const to = req.body.phone;
    const text = '[NOTICE] COME TO THE RESTAURANT!!!\n';
    
    nexmo.message.sendSms(from, to, text)
    res.json({ 'result' : true });
});

module.exports = router;
