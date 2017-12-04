let socketio = require('socket.io');
let Waiting = require('../models/waiting');
let app = require('../app');
let io;

let socketIoInitialize = function(server){
    io = socketio.listen(server);

    io.sockets.on('connection', function(socket){
        console.log('server socket.io 가 연결 되었습니다');

        socket.on('init', function(message){
            Waiting.find({}, function(err, waitings){
                if(err)
                    return console.log('socketHandler # socket init error');
                
                io.sockets.emit('successInit', waitings);
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

let getSocketIo = function(){
    return io;
}

exports.initialize = socketIoInitialize;
exports.getSocketIo = getSocketIo; 