/*Ticket System App*/
const tickets = [];
const sumbitTicket = document.getElementById("submitTicket");
const searchTicketButton = document.getElementById("searchTicketButton");
const ticketStatus = document.getElementById("ticketStatus");
const errMsg = document.getElementById("errMsg");
const ticketBoxCenter = document.getElementById("ticketBoxCenter");
const confirmation = document.getElementById("confirmation");
const goBack = document.getElementById("goBack");
const deleteTicket = document.getElementById("deleteTicket");
const closeTicket = document.getElementById("closeTicket");
let objectIndex;

//Object Template
function Ticket(
    ticketNum,
    timeStamp,
    date,
    issue,
    severity,
    employeeId,
    details
) {
    this.ticketNum = ticketNum;
    this.timeStamp = timeStamp;
    this.date = date;
    this.issue = issue;
    this.severity = severity;
    this.employeeId = employeeId;
    this.details = details;
}

sumbitTicket.addEventListener("click", () => {
    //Variables
    const issue = document.getElementById("mainIssue");
    const employeeId = document.getElementById("employeeId");
    const details = document.getElementById("details");
    const severity = document.getElementById("severity");
    let date = new Date();
    let dateString = date.toDateString();
    let time = date.toLocaleTimeString();

    if (
        issue.value === "" ||
        employeeId.value === "" ||
        details.value === "" ||
        severity.value === ""
    ) {
        errMsg.innerText = `Please fill out all fields.`;
        return;
    }

    //Generate ticket number
    const chars = "0123456789";
    const string_length = 10;
    let ticketNum = "";
    for (let i = 0; i < string_length; i++) {
        let rnum = Math.floor(Math.random() * chars.length);
        ticketNum += chars.substring(rnum, rnum + 1);
    }

    //Create Objects
    const ticket = new Ticket(
        ticketNum,
        time,
        dateString,
        issue.value,
        severity.value,
        employeeId.value,
        details.value
    );

    //Add tickets to array
    tickets.push(ticket);

    //Clear fields
    issue.value = "";
    employeeId.value = "";
    details.value = "";
    severity.value = "";
    ticketBoxCenter.style.display = "none";
    confirmation.style.display = "block";
    goBack.style.display = "inline";
    confirmation.innerText = `Thank you. Your ticket number is ${ticketNum}. Please write it down for your records.`;

    console.log(tickets);
});

//Go back button
goBack.addEventListener("click", () => {
    confirmation.innerHTML = "";
    errMsg.innerText = "";
    ticketBoxCenter.style.display = "block";
    confirmation.style.display = "none";
    goBack.style.display = "none";
});

//Search for ticket
searchTicketButton.addEventListener("click", () => {
    const searchTicketInput = document.getElementById("searchTicketInput");
    //Check if ticket number matches
    const result = tickets.find(id => id.ticketNum === searchTicketInput.value);
    const newObject = JSON.stringify(result);
    objectIndex = tickets.indexOf(result);

    if (searchTicketInput.value === "") {
        ticketStatus.innerText = `Please enter a ticket number.`;
        deleteTicket.style.display = "none";
        closeTicket.style.display = "none";
        return;
    }
    if (newObject === undefined) {
        ticketStatus.innerText = `No records found.`;
        closeTicket.style.display = "none";
        deleteTicket.style.display = "none";
        return;
    } else if (newObject !== undefined) {
        let obj = JSON.parse(newObject);
        ticketStatus.innerHTML = `Ticket# ${obj.ticketNum} was created on ${obj.date
            } at ${obj.timeStamp
            }. <br><br> Ticket Status: &#9989; Resolved <br><br> Error ID: ${obj.employeeId
            } <br><br> Issue: ${obj.issue} <br><br> Severity: ${obj.severity
            } <br><br> Details: ${obj.details}`;
    }
    deleteTicket.style.display = "inline";
    closeTicket.style.display = "inline";
});

//Delete ticket
deleteTicket.addEventListener("click", () => {
    const confirmCancel = confirm(`Are you sure you want to delete this ticket?`);
    if (confirmCancel == true) {
        tickets.splice(objectIndex, 1);
    } else {
        return;
    }
    ticketStatus.innerText = `Ticket deleted!`;
    deleteTicket.style.display = "none";
    closeTicket.style.display = "none";
    console.log(tickets);
});

//Close ticket
closeTicket.addEventListener("click", () => {
    ticketStatus.innerHTML = "";
    closeTicket.style.display = "none";
    deleteTicket.style.display = "none";
});
