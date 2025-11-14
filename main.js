const btns = document.querySelectorAll('.fa-solid');

btns.forEach(btn => {
    btn.addEventListener( "click", () => {
    btn.classList.toggle("fa-toggle-on");
    btn.classList.toggle("fa-toggle-off");

});
});


