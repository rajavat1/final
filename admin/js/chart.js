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