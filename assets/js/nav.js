const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.main-menu');
toggle.addEventListener('click', function () {
    menu.classList.toggle('open');
    this.textContent = this.textContent === '☰' ? '✕' : '☰';
});

document.addEventListener('DOMContentLoaded', function () {
    // active link highlighting based on scroll
    const headings = document.querySelectorAll('.post-content h2, .post-content h3, .post-content h4');
    const tocLinks = document.querySelectorAll('.toc-nav a');

    if (headings.length && tocLinks.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tocLinks.forEach(link => link.classList.remove('active'));
                    const id = entry.target.getAttribute('id');
                    const active = document.querySelector(`.toc-nav a[href="#${id}"]`);
                    if (active) active.classList.add('active');
                }
            });
        }, { rootMargin: '0px 0px -70% 0px' });

        headings.forEach(h => observer.observe(h));
    }
});