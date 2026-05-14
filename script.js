const landingTexts = {
    0: {
        heading: `Hello World!<br>We Are Kasper We Make Art.`,
        paragraph: `One of the best free website templates by TemplateMo`
    },
    1: {
        heading: `We Create Beautiful Websites<br>And Mobile Apps.`,
        paragraph: ` We are a team of talented designers making websites with Bootstrap.`
    },
    2: {
        heading: `We Help You To<br> Make Your Project`,
        paragraph: `Contact us for a free quote and let us help you to create your dream.`
    }
};
function updateLandingContent(currentIndex) {
    const headingElement = document.querySelector('.landing .content h2');
    const paragraphElement = document.querySelector('.landing .content p');
    const bullets = document.querySelectorAll('.landing .bullets span');

    // Update content based on currentIndex
    headingElement.innerHTML = landingTexts[currentIndex].heading;
    paragraphElement.innerHTML = landingTexts[currentIndex].paragraph;

    // Update active bullet
    bullets.forEach((bullet, index) => {
        if (index === currentIndex) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.fa-search');
    const searchContainer = document.querySelector('.form');

    searchIcon.addEventListener('click', function() {
        // Toggle search icon visibility
        searchIcon.style.display = 'none';

        // Check if input already exists to avoid duplicates
        if (!document.querySelector('.search-input')) {
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = 'Search...';
            searchInput.classList.add('search-input');
            searchContainer.appendChild(searchInput);
            searchInput.focus();

            // Hide input and show icon when clicking outside or pressing Escape
            const nav = document.querySelector('header nav');
            document.addEventListener('click', (event) => {
            // Check if the click was NOT the element and NOT a child of the element
                if (!nav.contains(event.target)) {
                    searchInput.remove();
                    searchIcon.style.display = 'block';
                }
            });
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    searchInput.remove();
                    searchIcon.style.display = 'block';
                }
            });
        }
    });
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    console.log(leftArrow, rightArrow);
    let currentIndex = 1; // Start with the second item as active
    leftArrow.addEventListener('click', function() {
        currentIndex = currentIndex === 0 ? 2 : currentIndex - 1; // Cycle back to last item if at the beginning
        updateLandingContent(currentIndex);
    });
    rightArrow.addEventListener('click', function() {
        currentIndex = currentIndex === 2 ? 0 : currentIndex + 1; // Cycle to first item if at the end
        updateLandingContent(currentIndex);
    });
    const bullets = document.querySelectorAll('.landing .bullets span');
    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', function() {
            currentIndex = index; // Set currentIndex to the clicked bullet's index
            updateLandingContent(currentIndex);
        });
    });
    // Enabling Portfolio Filters
    const filterButtons = document.querySelectorAll('.portfolio .filters div');
    const portfolioItems = document.querySelectorAll('.portfolio .works > div');
    console.log(filterButtons, portfolioItems);
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');
            const filter = this.textContent.toLowerCase();
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});