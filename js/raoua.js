const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const navBtn = document.getElementById('nav-btn');
const dynamicText = document.getElementById('animated-text');
const portfolioBtns = document.querySelectorAll('.btn-portfolio');
const counters = document.querySelectorAll('.counter');


const removeActiveClass = (arr) => {
    arr.forEach(item => {
        item.classList.remove('active');
    });
};


let prevScrollPos = 0;
window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;
    if (window.scrollY === 0) {
        header.classList.remove('scroll-down');
    } else if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
    } else {
        header.style.top = `-${header.offsetHeight}px`;
        header.classList.add('scroll-down');
    }
    prevScrollPos = currentScrollPos;
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActiveClass(navLinks);
        link.classList.add('active');
        document.getElementById('navbar').classList.remove('active');
    })
});

navBtn.addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('active');
});





