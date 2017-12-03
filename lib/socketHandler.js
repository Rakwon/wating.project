let socketio = require('socket.io');
let Waiting = require('../models/waiting');

let socketIoInitialize = function(server){
    let io = socketio.listen(server);

    io.sockets.on('connection', function(socket){
        console.log('server socket.io 가 연결 되었습니다');

        socket.on('enqueue', function(message){
            console.log('[SERVER] : enqueue 이벤트를 받았습니다');
            console.log(message);

            let wating = new Waiting({
                id : message.id,
                people : message.people,
                phone : message.phone, 
                menu : message.menu
            });
            
            wating.save(function(error ,wating){
                if(error)
                    return console.log(error);

                console.dir(wating);
                io.sockets.emit('successEnqueue', message);
            });
        });

        socket.on('dequeue', function(message){
            console.log('[SERVER] : dequeue 이벤트가 발생');
            console.log(message);
            
            let waiting = Waiting.find({'id' : message.id});
            waiting.remove(function(error){
                if(error)
                    return console.log(error);

                console.log('[SERVER] : %d 가 삭제됨', message.id);
                io.sockets.emit('successDequeue', {'result' : true});
            }); 
        });
    });
};

module.exports = socketIoInitialize;