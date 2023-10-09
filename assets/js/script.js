var menuToggle = document.getElementById('menuToggle');
var menuClose = document.getElementById('menuClose');
var ul2 = document.querySelector('.ul_2');

function tugmaC() {
    ul2.style.transform = 'translateX(0)'
    menuClose.style.display = 'block'
}

function tugmaCl() {
    ul2.style.transform = 'translateX(1000px)'
    menuToggle.style.display = 'block'
}