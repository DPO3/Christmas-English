let stars = document.getElementById('stars');
let moon = document.getElementById('moon')

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    stars.style.top = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';

}
)