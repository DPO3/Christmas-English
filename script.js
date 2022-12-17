let stars = document.getElementById('stars');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    stars.style.top = value * 0.25 + 'px';
}
)