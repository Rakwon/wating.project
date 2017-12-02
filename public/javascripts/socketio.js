let phone;
let menu;
let people;
let socket;

$(function(){

    $('#connectionButton').bind('click', function(e){
        console.log('connectionBUtton 이 클릭 되었습니다');
        
        phone = $("#phone").val();
        menu = $('#menu').val();
        people = $('#people').val();
        
        console.log(phone);
        console.log(menu);
        console.log(people);
        
        connectToServer();
    });

});

function connectToServer(){
    var opt = { 'forceNew' : true };
    var url = 'http://localhost:3000';
    socket = io.connect(url, opt);

    socket.on('connect', function(){
        console.log('소켓이 연결 되었 습니다');
    });
    socket.on('disconnect', function(){
        console.log('소켓 연결이 끊겼습니다');
    });
}