var d = new Date();

var countDownDate = new Date("Jan 30, 2019 12:00:00").getTime();


var x = setInterval(function() {

    
    var now = new Date().getTime();
    
    
    var distance = countDownDate - now;
    
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
   
    document.getElementById("demo").innerHTML = d;
    document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo1").innerHTML = "EXPIRED";
    }
}, 1000);
var incrimentTime ="";
var addon = countDownDate;
var incrimentday = countDownDate;
setInterval(function()
    {
        var now = new Date().getTime();       
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var incrimentTime = seconds + 5;
        document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
     + minutes + "m " + incrimentTime + "s ";


}, 5000);

function myFunction() {
    document.getElementById('wrapper').style.cssText = 'background-color: red;'
}
