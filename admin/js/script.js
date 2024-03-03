// show or hide sidebar //

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

// Change theme //
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');

    // Add localStorage.setItem to store the theme preference
    const themePreference = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('themePreference', themePreference);
});

// Retrieve the theme preference when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeBtn.querySelector('span:first-child').classList.remove('active');
        themeBtn.querySelector('span:last-child').classList.add('active');
    }
});




//chart

const BTC = document.getElementById("BTC");
const ETH = document.getElementById("ETH");
const USDT = document.getElementById("USDT");
const DOG = document.getElementById("DOG");

const BTC_btn = document.getElementById("BTC_btn");
const ETH_btn = document.getElementById("ETH_btn");
const USDT_btn = document.getElementById("USDT_btn");
const DOG_btn = document.getElementById("DOG_btn");

BTC_btn.addEventListener("click", () => {
    if (BTC.style.display = "none") {
        BTC.style.display = "block";
        ETH.style.display="none";
        USDT.style.display="none";
        DOG.style.display="none";
    }
})
ETH_btn.addEventListener("click", () => {
    if (ETH.style.display = "none") {
        ETH.style.display = "block";
        BTC.style.display="none";
        USDT.style.display="none";
        DOG.style.display="none";
    }
})
USDT_btn.addEventListener("click", () => {
    if (USDT.style.display = "none") {
        USDT.style.display = "block";
        ETH.style.display="none";
        BTC.style.display="none";
        DOG.style.display="none";
    }
})
DOG_btn.addEventListener("click", () => {
    if (DOG.style.display = "none") {
        DOG.style.display = "block";
        ETH.style.display="none";
        USDT.style.display="none";
        BTC.style.display="none";
    }
})

//t&c
let openModalBtn = document.getElementById("openModalBtn");
let modal = document.getElementById("myModal");
let closeModalBtn = document.getElementById("closeModalBtn");
let closeModalBtn2 = document.getElementById("closeModalBtn2");
openModalBtn.addEventListener("click", function () {
    modal.style.display = "flex";
    modal.style.zIndex = 99999999999;
});

closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});
closeModalBtn2.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});