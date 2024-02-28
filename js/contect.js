function sendmail() {
    (function () {
        emailjs.init({
            publicKey: "wuFDbjHnGGsZYpV62",
        });
    })();

    var user = {
        to: "rajavatonline@gmail.com",
        sendername: document.getElementById("name").value,
        reply_to: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_rsucbhv", "template_u4pekhc", user).then(
        (response) => {
            alert('user message delever || Your message is SUCCESSFULLY deleverd!', response.status, response.text);
        },
        (error) => {
            alert('User || Sonthing Went Wrong!!', error);
        },
    );
    var admin = {
        to: document.getElementById("email").value,
        sendername: document.getElementById("name").value,
        reply_to: "rajavatonline@gmail.com",
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_enhapds", "template_jikry1d", admin).then(
        (response) => {
            alert(' Admin || Your message is SUCCESSFULLY deleverd!', response.status, response.text);

        },
        (error) => {
            alert('Admin|| Sonthing Went Wrong!!', error);

        },
    );
}