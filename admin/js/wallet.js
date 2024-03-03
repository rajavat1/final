const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const btc_balance = document.getElementById("btc_balance");
const eth_balance = document.getElementById("eth_balance");
const avl_balance = document.getElementById("avl_balance");

card1.addEventListener("click", () => {
    if (btc_balance.style.display = 'none') {
        btc_balance.style.display = 'flex';
        eth_balance.style.display = "none";
        avl_balance.style.display = "none";
    }
})
card2.addEventListener("click", () => {
    if (eth_balance.style.display = 'none') {
        btc_balance.style.display = 'none';
        eth_balance.style.display = "flex";
        avl_balance.style.display = "none";
    }
})
card3.addEventListener("click", () => {
    if (avl_balance.style.display = 'none') {
        btc_balance.style.display = 'none';
        eth_balance.style.display = "none";
        avl_balance.style.display = "flex";
    }
})