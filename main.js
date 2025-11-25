const btns = document.querySelectorAll('.fa-solid');

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("fa-toggle-on");
        btn.classList.toggle("fa-toggle-off");
    });
});


const actives = document.querySelectorAll('.btn');

actives.forEach(active => {
    active.addEventListener("click", () => {
        document.querySelector('.active')?.classList.remove('active');
        active.classList.add('active');
    });
});


document.getElementById('dark-mode').onclick = () => {

    let body = document.getElementById('light');
    let icon = document.getElementById('sun');
    let title = document.getElementById('title');

    if (body.style.background === 'white') {
        body.style.background = 'hsl(225, 78%, 16%)';
        body.style.color = 'white';
        body.style.transition = '0.5s';
        
        title.style.color = '#fff';

        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');

    }
    else {
        body.style.background = 'white';
        body.style.color = 'hsl(225, 78%, 16%)';
        body.style.transition = '0.5s';
        
        title.style.color = 'hsl(225, 78%, 16%)';

        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    }
}