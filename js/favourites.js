const grid = document.getElementById('favorites-grid');
const emptyState = document.getElementById('favorites-empty');

function renderFavorites() {
    const favorites = JSON.parse(localStorage.getItem('wanderVibe_favorites')) || [];

    if (favorites.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    // Get destinations data
    let destData = [];
    if (typeof destinations !== 'undefined') {
        destData = destinations;
    } else {
        console.warn('Destinations not loaded');
        destData = JSON.parse(localStorage.getItem('wanderVibe_destinations')) || [];
    }

    const favDestinations = destData.filter(d => favorites.includes(d.id));

    if (favDestinations.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (typeof createCard === 'function') {
        grid.innerHTML = favDestinations.map(d => createCard(d)).join('');
    } else {
        // Fallback simple cards
        grid.innerHTML = favDestinations.map(d => `
            <div class="destination-card">
                <div class="card-image">
                    <img src="assets/images/${d.heroImage}" alt="${d.name}" loading="lazy" onerror="this.style.display='none'">
                    <span class="category-badge">${d.category}</span>
                </div>
                <div class="card-body">
                    <h3>${d.name}</h3>
                    <div class="country">📍 ${d.country}</div>
                    <div class="rating">⭐ ${d.rating}</div>
                    <a href="destination.html?id=${d.id}" class="view-btn">View Details →</a>
                </div>
            </div>
        `).join('');
    }
}

renderFavorites();