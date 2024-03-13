
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

//time counter Home
const home_day = document.getElementById('home_day');
const home_hr = document.getElementById('home_hr');
const home_min = document.getElementById('home_min');
const home_sec = document.getElementById('home_sec');

// Set the date we're counting down to
var countDownDate = new Date("march 30, 2024 15:37:25").getTime();

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
    home_sec.innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        home_day.innerHTML = `00`;
        home_hr.innerHTML = `00`;
        home_min.innerHTML = `00`;
        home_sec.innerHTML = `00`;
    }
}, 1000);



//fqa
function toggleCollapse(headingId, collapseId, btnId) {
    const heading = document.getElementById(headingId);
    const collapse = document.getElementById(collapseId);
    const btn = heading.getElementsByTagName("button")[0];

    heading.addEventListener("click", () => {
        if (collapse.classList.contains("show")) {
            collapse.classList.remove("show");
            btn.classList.add("collapsed");
        } else {
            collapse.classList.add("show");
            btn.classList.remove("collapsed");
        }
    });
}
toggleCollapse("headingOne", "collapseOne", "btn1");
toggleCollapse("headingTwo", "collapseTwo", "btn2");
toggleCollapse("headingThree", "collapseThree", "btn3");
toggleCollapse("headingFour", "collapseFour", "btn4");
toggleCollapse("headingFive", "collapseFive", "btn5");
toggleCollapse("headingSix", "collapseSix", "btn6");


// Get the cursor element
const cursor = document.querySelector(".cursor");
const facts = document.querySelector("#facts");

// Add a mousemove event listener to the facts element
facts.addEventListener("mouseenter", (e) => {
    console.log(e);
    facts.addEventListener("mousemove", (e) => {
        // Set the cursor position based on mouse coordinates
        cursor.style.display = "block";
        cursor.style.top = `${e.clientY - 25}px`;
        cursor.style.left = `${e.screenX}px`;
    });
});

// Add a mouseout event listener to reset the cursor position
facts.addEventListener("mouseleave", () => {
    cursor.style.display = 'none';
});

//FACE
const faceButton = document.querySelector('.face-button');
const faceContainer = document.querySelector('.face-container');
const containerCoords = document.querySelector('#emoji_container');
const smile = document.querySelector('#smile');
const mouseCoords = containerCoords.getBoundingClientRect();

smile.addEventListener('mousemove', function (e) {
    const mouseX = e.pageX - containerCoords.offsetLeft;
    const mouseY = e.pageY - containerCoords.offsetTop;

    TweenMax.to(faceButton, 0.3, {
        x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 50,
        y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 50,
        ease: Power4.easeOut
    })
});

smile.addEventListener('mousemove', function (e) {
    const mouseX = e.pageX - containerCoords.offsetLeft;
    const mouseY = e.pageY - containerCoords.offsetTop;

    TweenMax.to(faceContainer, 0.3, {
        x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 25,
        y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 25,
        ease: Power4.easeOut
    })
});

smile.addEventListener('mouseenter', function (e) {
    TweenMax.to(faceButton, 0.3, {
        scale: 0.975
    })
});

smile.addEventListener('mouseleave', function (e) {
    TweenMax.to(faceButton, 0.3, {
        x: 0,
        y: 0,
        scale: 1
    })

    TweenMax.to(faceContainer, 0.3, {
        x: 0,
        y: 0,
        scale: 1
    })
});
