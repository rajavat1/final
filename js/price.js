// Select all star elements using an appropriate selector
const stars = document.querySelectorAll(".star");

// Add a click event listener to each star
stars.forEach((star) => {
    star.addEventListener("click", () => {
        if (star.classList.contains("bx-star")) {
            // Change to filled star
            star.classList.remove("bx-star");
            star.classList.add("bxs-star");
            star.style.color = "#FFD700";
        } else {
            // Change to empty star
            star.classList.add("bx-star");
            star.classList.remove("bxs-star");
            star.style.color = "#000";
        }
    });
});
