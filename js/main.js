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




// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .portfolioCard");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    const filterValue = e.target.dataset.filter;

    filterableCards.forEach(portfolioCard => {
        // Check if either data-name or data-category matches the filter value
        const matchesName = portfolioCard.dataset.name === filterValue;
        const matchesCategory = portfolioCard.dataset.category === filterValue;
        
        // Show the card if it matches either attribute, or if "all" is clicked
        if (matchesName || matchesCategory || filterValue === "all") {
            portfolioCard.classList.replace("hide", "show");
        } else {
            portfolioCard.classList.add("hide");
            portfolioCard.classList.remove("show");
        }
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));
