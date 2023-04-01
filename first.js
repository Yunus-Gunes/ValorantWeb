function GetTime(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    
    document.getElementById("hour").innerText = hour+":";
    document.getElementById("minute").innerText= minute+":";
    document.getElementById("second").innerText = second;
}

setInterval(function(){GetTime();},1000)