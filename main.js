const btns = document.querySelectorAll('.fa-solid');

btns.forEach(btn => {
    btn.addEventListener( "click", () => {
    btn.classList.toggle("fa-toggle-on");
    btn.classList.toggle("fa-toggle-off");

});
});


const actives = document.querySelectorAll('.btn');

actives.forEach(active => {
    active.addEventListener("click", () =>{
        document.querySelector('.active')?.classList.remove('active');
        active.classList.add('active');
    });
});


const darkMode = document.querySelectorAll('#dark-mode');

darkMode.forEach( darkModes => {
    darkModes.addEventListener("click", () => {
        darkModes.classList.toggle("fa-moon");
        darkModes.classList.toggle("fa-sun");
    })
});