//manu

var collapse = document.getElementById("collapse");
var navbarCollapse = document.getElementById("navbarCollapse");
collapse.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("collapse")) {

        navbarCollapse.classList.remove("collapse")
    } else {
        navbarCollapse.classList.add("collapse")

    }
})
var pages = document.getElementById("pages");
var pages_manu = document.getElementById("pages_manu");
pages.addEventListener("click", () => {
    if (pages_manu.style.display == "none") {
        pages_manu.style.display = "contents";
    } else {
        pages_manu.style.display = "none"
    }
})
//message 
function sendmail() {
    (function () {
        emailjs.init({
            publicKey: "rMP5ZHaXvphRwf5QB",
        });
    })();
    var useremail = document.getElementById("replyto").value;
    if (!useremail) {
        alert("please enter valid mail")
    } else {
        var toparams = {
            to: "rajavatonline@gmail.com",
            reply_to: useremail,
        };
        var serviceID = "service_29aaoef";
        var templateID = "template_lhlvo75";
        emailjs.send(serviceID, templateID, toparams).then(
            (response) => {
                alert('Your Subscription is SUCCESSFULLY Done!', response.status, response.text);
            },
            (error) => {
                alert('Sonthing Went Wrong!!', error);
            },
        );
        var params = {
            reply_to: "rajavatonline@gmail.com",
            to: useremail,
        };

        emailjs.send("service_kr9amuh", "template_baksib5", params).then(
            (response) => {

            },
            (error) => {

            },
        );
    }
}

//t&c
let openModalBtn = document.getElementById("openModalBtn");
let modal = document.getElementById("myModal");
let closeModalBtn = document.getElementById("closeModalBtn");
let closeModalBtn2 = document.getElementById("closeModalBtn2");
openModalBtn.addEventListener("click", function () {
    modal.style.display = "flex";
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
