//time counter Tokan
const Tokan_day = document.getElementById('Tokan_day');
const Tokan_hr = document.getElementById('Tokan_hr');
const Tokan_min = document.getElementById('Tokan_min');
const Tokan_sec = document.getElementById('Tokan_sec');

// Set the date we're counting down to
var countDownDate = new Date("june 10, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    Tokan_day.innerHTML = days;
    Tokan_hr.innerHTML = hours;
    Tokan_min.innerHTML = minutes;
    Tokan_sec.innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        Tokan_day.innerHTML = `00`;
        Tokan_hr.innerHTML = `00`;
        Tokan_min.innerHTML = `00`;
        Tokan_sec.innerHTML = `00`;
    }
}, 1000);

