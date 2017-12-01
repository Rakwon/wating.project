let express = require('express');
let Waiting = require('../models/waiting');
let router = express.Router();

/* GET home page. */
router.post('/queue', function(req, res, next) {

    let waiting = new Waiting({ people : req.body.people, phone : req.body.phone});
    console.log(waiting);
    waiting.save(function(error, savedWaiting){
        if(error)
            return console.log('waiting save error');

        console.log(savedWaiting);
    });
    res.redirect('/');
});

module.exports = router;
