function currentTime(){
    var time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    if (h >= 12){
        var ampm = "PM";
    } else {
        h = "0" + h;
        var ampm = "AM";
    }
    if (m < 10){
        m = "0" + m;
    }
    document.getElementById("hour").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("ampm").innerHTML = ampm;
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    dy = days[time.getDay()];
    mo = months[time.getMonth()];
    dt = time.getDate();
    document.getElementById("day").innerHTML = dy;
    document.getElementById("month").innerHTML = mo;
    document.getElementById("date").innerHTML = dt;

}
setInterval(function(){
    currentTime();
}, 1000);