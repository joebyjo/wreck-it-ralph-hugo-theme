const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.main-menu');
toggle.addEventListener('click', function() {
    menu.classList.toggle('open');
    this.textContent = this.textContent === '☰' ? '✕' : '☰';
});