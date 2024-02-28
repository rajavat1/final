function toggleCollapse(headingId, collapseId, btnId) {
    const heading = document.getElementById(headingId);
    const collapse = document.getElementById(collapseId);
    const btn = heading.getElementsByTagName("button")[0];

    heading.addEventListener("click", () => {
        if (collapse.classList.contains("show")) {
            collapse.classList.remove("show");
            btn.classList.add("collapsed");
        } else {
            collapse.classList.add("show");
            btn.classList.remove("collapsed");
        }
    });
}
toggleCollapse("headingOne", "collapseOne", "btn1");
toggleCollapse("headingTwo", "collapseTwo", "btn2");
toggleCollapse("headingThree", "collapseThree", "btn3");
toggleCollapse("headingFour", "collapseFour", "btn4");
toggleCollapse("headingFive", "collapseFive", "btn5");
toggleCollapse("headingSix", "collapseSix", "btn6");
toggleCollapse("headingSeven", "collapseSeven", "btn7");
toggleCollapse("headingEight", "collapseEight", "btn8");
