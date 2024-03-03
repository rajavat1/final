//loader
window.onload = function () {
    document.querySelector('.spinner-wrapper').style.display="none";
  };

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






//t&c
let openModalBtn = document.getElementById("openModalBtn");
let modal = document.getElementById("myModal");
let closeModalBtn = document.getElementById("closeModalBtn");
let closeModalBtn2 = document.getElementById("closeModalBtn2");
openModalBtn.addEventListener("click", function () {
    modal.style.display = "flex";
    modal.style.zIndex = 9999999;
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