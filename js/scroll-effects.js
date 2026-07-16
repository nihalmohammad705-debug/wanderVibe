// SCROLL EFFECTS - Fade In

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// Observe dynamically added elements
const observerConfig = { childList: true, subtree: true };
const observerCallback = function(mutations) {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.classList && node.classList.contains('fade-in')) {
                observer.observe(node);
            }
        });
    });
};

const gridObserver = new MutationObserver(observerCallback);
const grids = ['destination-grid', 'featured-grid', 'favorites-grid', 'visited-grid'];
grids.forEach(id => {
    const el = document.getElementById(id);
    if (el) gridObserver.observe(el, observerConfig);
});

// STATS COUNTER ANIMATION
const statNumbers = document.querySelectorAll('.stat-number');

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statObserver.observe(stat));

function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 50);
    const stepTime = 40;

    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = current.toLocaleString();
    }, stepTime);
}