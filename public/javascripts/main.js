
 window.onload = function()
 {
     crtTime();
     setInterval("crtTime()",1000);
     CountWaiting();
 }
    /////////////////////////////////////////
    function crtTime(){
        var now = new Date();
        hours = now.getHours();
        minutes = now.getMinutes();
        seconds = now.getSeconds();

        if (hours > 12){
            hours -= 12;
            ampm = " PM";
        }else{
            ampm = " AM";
        }
        if (hours < 10){
            hours = "0" + hours;
        }
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        
        document.getElementById("crttime").innerHTML = hours + ":" + minutes + ":" + seconds + ampm;
    }
    ////////////////////////////////////////////
function Add(set) {
    var table1 = document.getElementById("insertTable");

    // tr 개체를 얻어와 속성값을 조절한다.
    var tr = document.createElement("tr");
    tr.setAttribute("bgColor", "white"); // 배경색
    tr.setAttribute("height", "40"); // 높이 
    
    var td1 = document.createElement("td");
    td1.setAttribute("width", "7"); // 넓이
    td1.setAttribute("bgColor", "#f1f5fd"); // 배경색
    td1.innerText = set.order;

    var td2 = document.createElement("td");
    td2.setAttribute("width", "7"); // 넓이
    td2.innerText = set.people;

    var td3 = document.createElement("td");
    td3.setAttribute("width", "30"); // 넓이
    td3.innerText = set.phone;

    var td_4 = document.createElement("td");
    td_4.setAttribute("width", "30"); // 넓이
    td_4.innerText = set.menu;

    var td4 = document.createElement("td");
    td4.setAttribute("width", "10"); // 넓이
    var td4child = document.createElement("input");
    td4child.setAttribute("type", "button");
    td4child.setAttribute("class", "btnCall");
    td4child.setAttribute("value", "호출");
    td4child.setAttribute("onclick", "Call(this);");
    td4.append(td4child);

    var td5 = document.createElement("td");
    td5.setAttribute("width", "10"); // 넓이
    var td5child = document.createElement("input");
    td5child.setAttribute("type", "button");
    td5child.setAttribute("class", "btnSeat");
    td5child.setAttribute("value", "착석");
    td5child.setAttribute("onclick", "Seat(this);");
    td5.append(td5child);

    var td6 = document.createElement("td");
    td6.setAttribute("width", "10"); // 넓이
    var td6child = document.createElement("input");
    td6child.setAttribute("type", "button");
    td6child.setAttribute("id", "btnDel");
    td6child.setAttribute("onclick", "Delete(this);");
    td6child.setAttribute("value", "삭제");
    td6.append(td6child);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td_4);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    // 입력된값을 넣은 tr 개체를 추가한다.
    table1.appendChild(tr);

    // var menuTable = document.getElementById("outputTable");
    // var mtr = document.createElement("tr");
    // mtr.setAttribute("bgColor", "white"); // 배경색
    // mtr.setAttribute("height", "40"); // 높이 
    
    // var mtd1 = document.createElement("td");
    // mtd1.setAttribute("width", "10"); // 넓이
    // mtd1.setAttribute("bgColor", "#f1f5fd"); // 배경색
    // mtd1.innerText = set.order;

    // var mtd2 = document.createElement("td");
    // mtd2.setAttribute("width", "10"); // 넓이
    // mtd2.setAttribute("bgColor", "#f1f5fd"); // 배경색
    // mtd2.innerText = set.people;

    // var mtd3 = document.createElement("td");
    // mtd3.setAttribute("width", "80"); // 넓이
    // mtd3.setAttribute("bgColor", "#f1f5fd"); // 배경색
    // mtd3.innerText = set.menu;
    
    // mtr.appendChild(mtd1);
    // mtr.appendChild(mtd2);
    // mtr.appendChild(mtd3);

    // menuTable.appendChild(mtr);y

    CountWaiting();
}

function Call(element)
{
    var table = document.getElementById("insertTable");
    var tr = element.parentElement.parentElement;
    var index = tr.rowIndex;
    var id = table.rows[index].cells[0].textContent;
    var phone = table.rows[index].cells[2].textContent;
    var check = confirm("대기번호 "+id+"번 손님 "+phone+"으로 문자를 보내시겠습니까?");
    
    if(check == true)
    {
         $(function(){
            $.ajax({
                url : '/api/sms',
                method : 'POST',
                data : { 
                    'phone' : '82' + phone.substring(1, phone.length) 
                },
                success :  function(data){
                    if(data.result)
                        console.log('문자전송 완료');
                },
                error : function(error){
                    console.log(error);
                }
            });
        });
    }       
}

function Delete(element)
{
    var tr = element.parentElement.parentElement;
    tr.remove();
    CountWaiting();
}

function CountWaiting()
{
    var table = document.getElementById("insertTable");
    var count = table.rows.length - 1;
    document.getElementById("cntwaiting").innerText = count+"팀";
}

function gotoOutput(element)
{
    var itable = document.getElementById("insertTable");
    var tr = element.parentElement.parentElement;
    var index = tr.rowIndex;
    var id = itable.rows[index].cells[0].textContent;
    var num = itable.rows[index].cells[1].textContent;
    var menu = itable.rows[index].cells[3].textContent;

    var otable = document.getElementById("outputTable");
    //tr 개체를 얻어와 속성값을 조절한다.
    var newtr = document.createElement("tr");
    newtr.setAttribute("bgColor", "white"); // 배경색
    newtr.setAttribute("height", "40"); // 높이

    var td1 = document.createElement("td");
    td1.setAttribute("width", "10"); // 넓이
    td1.setAttribute("bgColor", "#f1f5fd"); // 배경색
    td1.innerText = id;

    var td2 = document.createElement("td");
    td2.setAttribute("width", "10"); // 넓이
    td2.innerText = num;

    var td3 = document.createElement("td");
    td3.setAttribute("width", "80"); // 넓이
    td3.innerText = menu;

    newtr.appendChild(td1);
    newtr.appendChild(td2);
    newtr.appendChild(td3);

    // 입력된값을 넣은 tr 개체를 추가한다.
    otable.appendChild(newtr);
    Delete(element);
}

function Seat(element)
{
    var table1 = document.getElementById("outputTable");
    var count = table1.rows.length - 1;
    if(count >= 16)
    {
        var check = confirm("자리가 이미 다 찼습니다.");
    }
    else
    {
        var btn = document.getElementsByClassName("seatChoice");

        //btn.disabled=true;
        for(var i=0; i<btn.length; i++)
        {
            btn[i].disabled=false;
        }

        gotoOutput(element);
    }
}

function seatChoice(element)
{
    var td = element.parentElement;
    var row = td.parentElement.rowIndex;
    var col = td.cellIndex;
    var table = document.getElementById("seatTable");
    var target = table.rows[row].cells[col];
    target.setAttribute("bgColor", "#4581EF");

    var otable = document.getElementById("outputTable");
    var last = otable.rows.length;
    var id = otable.rows[last-1].cells[0].textContent;
    var menu = otable.rows[last-1].cells[2].textContent;
    
    var content = "<div class='menu'>"+"<p id='id'>"+id+"</p>"+"<p>"+menu+"</p>"+"<input type='button' class='btnFinish' value='종료' onclick='Finish(this);'>";

    target.innerHTML=content;

    var btn = document.getElementsByClassName("seatChoice");

    for(var i=0; i<btn.length; i++)
    {
        btn[i].disabled=true;
    }
}

function Finish(element)
{
    var child = element.parentElement.childNodes;
    child = child[0];
    child = child.childNodes;
    var id = child[0].textContent;
    var table = document.getElementById("outputTable");
    for(var i=1; i<table.rows.length; i++)
    {
        if(table.rows[i].cells[0].textContent == id)
        {
            table.rows[i].remove();
            break;
        }
    }

    var td = element.parentElement;
    td.setAttribute("bgColor","#f2f2f2");
    var row = td.parentElement.rowIndex;
    var col = td.cellIndex;
    td.innerHTML = "<input type='button' class='seatChoice' name='선택' value='선택' disabled='true' onclick='seatChoice(this);'>";
}

$(function(){

    let order = 1;
    let phone, 
        menu,
        people,
        socket;

    function connectToServer(){
        var opt = { 'forceNew' : true };
        var url = 'http://localhost:3000';
        socket = io.connect(url, opt);
    
        socket.on('connect', function(){
            console.log('소켓이 연결 되었 습니다!!');
            
            socket.on('message', function(message){
                message.order = order++;
                Add(message);
            });
            
           
            $('#connectionButton').bind('click', function(e){
                console.log('asdsadas');
                var data = {
                    'phone' : $('#phone').val(),
                    'people' : $('#people').val(),
                    'menu' : $('#menu').val()
                  };
                socket.emit('message', data);
            });
        });
        socket.on('disconnect', function(){
            console.log('소켓 연결이 끊겼습니다');
        });
        
    }

    connectToServer();

    
});
