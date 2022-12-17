let stars = document.getElementById('stars');
let moon = document.getElementById('moon')
let behind = document.getElementById('behind')
let front = document.getElementById('front')
let bird1 = document.getElementById('bird1')
let bird2 = document.getElementById('bird2')

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    stars.style.top = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    behind.style.top = value * 0.1 + 'px';
    front.style.top = value * 0.5 + 'px';
    bird1.style.left = value * 0.5 + 'px';
    bird1.style.top = value * 0.5 + 'px';
    bird2.style.top = value * 0.5 + 'px';
    bird2.style.right = value * 0.5 + 'px';
}
)