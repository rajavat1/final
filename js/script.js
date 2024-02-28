//Transactions Count
let Today_Transactions_count = document.getElementById('Today_Transactions_count');
let timelag;
let Today_Transactions_count_finishing = 800;
let countSpeed = 2;

for (let i = 0; i <= Today_Transactions_count_finishing; i++) {
    timelag = i * countSpeed;
    setTimeout(() => {
        Today_Transactions_count.innerHTML = i;
    }, timelag);
}
//Monthaly  Count
let Monthaly_Transactions_count = document.getElementById('Monthaly_Transactions_count');
let Monthaly_Transactions_count_finishing = 2500;
countSpeed = 0.8;

for (let i = 0; i <= Monthaly_Transactions_count_finishing; i++) {
    timelag = i * countSpeed;
    setTimeout(() => {
        Monthaly_Transactions_count.innerHTML = i;
    }, timelag);
}
//total Count
let Total_Transactions_count = document.getElementById('Total_Transactions_count');
let Total_Transactions_count_finishing = 3700;
countSpeed = 0.5;

for (let i = 0; i <= Total_Transactions_count_finishing; i++) {
    timelag = i * countSpeed;
    setTimeout(() => {
        Total_Transactions_count.innerHTML = i;
    }, timelag);
}

//time counter

//time count
const home_day = document.getElementById('home_day');
const home_hr = document.getElementById('home_hr');
const home_min = document.getElementById('home_min');
const home_sec = document.getElementById('home_sec');

// Set the date we're counting down to
var countDownDate = new Date("march 10, 2024 15:37:25").getTime();

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
    home_day.innerHTML = days;
    home_hr.innerHTML = hours;
    home_min.innerHTML = minutes;
    home_sec.innerHTML =seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        home_day.innerHTML = `<span>00</span>days`;
        home_hr.innerHTML = `<span>00</span>HRS`;
        home_min.innerHTML = `<span>00</span>MINS`;
        home_sec.innerHTML = `<span>00</span>SECS`;
    }
}, 1000);