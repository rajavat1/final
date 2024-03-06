document.querySelector('.button').classList.add('active');

document.querySelectorAll('.button').forEach(function(button) {
    button.addEventListener('click', function() {
        var siblings = Array.from(button.parentElement.children);
        var position = siblings.indexOf(button);
        console.log(position);

        document.querySelectorAll('.content div').forEach(function(contentDiv) {
            contentDiv.classList.remove('active');
        });
        document.querySelectorAll('.content div')[position].classList.add('active');

        siblings.forEach(function(sibling) {
            sibling.classList.remove('active');
        });
        button.classList.add('active');
    });
});