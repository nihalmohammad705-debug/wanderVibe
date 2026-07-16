// MAIN.JS

// MOBILE MENU
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('open');
        menuToggle.textContent = navbar.classList.contains('open') ? '✕' : '☰';
    });
}

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');
        if (menuToggle) menuToggle.textContent = '☰';
    });
});

// LOADING SCREEN
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 500);
    }
});

// STICKY HEADER
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// BACK TO TOP
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// SEARCH TOGGLE
const searchToggle = document.getElementById('search-toggle');
const searchOverlay = document.getElementById('search-overlay');
const searchClose = document.getElementById('search-close');

// NOTE: searchInput is NOT declared here globally
// It will be used by destinations.js

if (searchToggle) {
    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.toggle('active');
        const searchInput = document.getElementById('search-input');
        if (searchOverlay.classList.contains('active') && searchInput) {
            searchInput.focus();
        }
    });
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (searchOverlay) searchOverlay.classList.remove('active');
    }
});