
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
    function Add() {
            var table1 = document.getElementById("insertTable");

        // tr 개체를 얻어와 속성값을 조절한다.
        var tr = document.createElement("tr");
        tr.setAttribute("bgColor", "white"); // 배경색
        tr.setAttribute("height", "40"); // 높이 
        
        var td1 = document.createElement("td");
        td1.setAttribute("width", "10"); // 넓이
        td1.setAttribute("bgColor", "#f1f5fd"); // 배경색
        td1.innerText = document.all.a1.value;

        var td2 = document.createElement("td");
        td2.setAttribute("width", "10"); // 넓이
        td2.innerText = document.all.a2.value;

        var td3 = document.createElement("td");
        td3.setAttribute("width", "50"); // 넓이
        td3.innerText = document.all.a3.value;

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
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        // 입력된값을 넣은 tr 개체를 추가한다.
        table1.appendChild(tr);
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
            //확인 누르면 문자보내기
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

    function Add() {
        var table1 = document.getElementById("insertTable");

    // tr 개체를 얻어와 속성값을 조절한다.
    var tr = document.createElement("tr");
    tr.setAttribute("bgColor", "white"); // 배경색
    tr.setAttribute("height", "40"); // 높이 
    
    var td1 = document.createElement("td");
    td1.setAttribute("width", "10"); // 넓이
    td1.setAttribute("bgColor", "#f1f5fd"); // 배경색
    td1.innerText = document.all.a1.value;

    var td2 = document.createElement("td");
    td2.setAttribute("width", "10"); // 넓이
    td2.innerText = document.all.a2.value;

    var td3 = document.createElement("td");
    td3.setAttribute("width", "50"); // 넓이
    td3.innerText = document.all.a3.value;

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
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    // 입력된값을 넣은 tr 개체를 추가한다.
    table1.appendChild(tr);
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
            //확인 누르면 문자보내기
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

