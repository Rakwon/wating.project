let express = require('express');
let Waiting = require('../models/waiting');
let socketHandler = require('../lib/socketHandler');
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

// 파이선에서 대기 입력이 들어 온 경우/
router.get('/waiting', function(req, res, next){

  console.log('[SERVER] : 대기 입력이 들어 왔습니다.');
  
  let io = socketHandler.getSocketIo();
  let id = req.query.id;
  let people = req.query.people;
  let phone = req.query.phone;
  let menu = req.query.menu;

  let wating = new Waiting({
      id : id,
      people : people,
      phone : phone, 
      menu : menu
  });
  
  wating.save(function(error ,wating){
      if(error)
          return console.log(error);

      let msg = {
        'id' : id,
        'people' : people,
        'phone' : phone,
        'menu' : menu
      };

      console.dir(wating);
      io.sockets.emit('successEnqueue', msg);
  });
  
  res.json({'result' : true});
});

module.exports = router;
