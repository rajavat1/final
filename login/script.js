const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function gotosignin() {
    const username = document.getElementById("username").value;
    const useremail = document.getElementById("useremail").value;
    const userpass = document.getElementById("userpass").value;
    const userpassagain = document.getElementById("userpassagain").value;

    if (!username || !useremail || !userpass || !userpassagain) {
        alert("Please fill in all required fields.");
    } else if (!useremail.includes("@")) {
        alert("Please enter a valid email address.");
    }
    else if (userpass !== userpassagain) {
        alert("Passwords do not match. Please re-enter.");
    } else {
        if (container.classList.contains("active")) {
            container.classList.remove("active");
        }
    }
}