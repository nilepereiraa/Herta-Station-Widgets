function currentTime(){
    var time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    // Checks if AM or PM
    if (h >= 12){
        var ampm = "PM";
    } else {
        var ampm = "AM";
    }
    // Converts to 12hr time
    if (h > 12){
        h = h - 12;
    }
    // Adds a 0 if less than 10
    if (m < 10){
        m = "0" + m;
    }
    if (h < 10){
        h = "0" + h;
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