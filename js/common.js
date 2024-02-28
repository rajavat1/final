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