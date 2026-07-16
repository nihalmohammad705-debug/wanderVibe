// VISITED PAGE

const grid = document.getElementById('visited-grid');
const emptyState = document.getElementById('visited-empty');

function renderVisited() {
    const visited = JSON.parse(localStorage.getItem('wanderVibe_visited')) || [];

    if (visited.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    let destData = [];
    if (typeof destinations !== 'undefined') {
        destData = destinations;
    } else {
        destData = JSON.parse(localStorage.getItem('wanderVibe_destinations')) || [];
    }

    const visitedDestinations = destData.filter(d => visited.includes(d.id));

    if (visitedDestinations.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (typeof createCard === 'function') {
        grid.innerHTML = visitedDestinations.map(d => createCard(d)).join('');
    } else {
        grid.innerHTML = visitedDestinations.map(d => `
            <div class="destination-card">
                <div class="card-image">
                    <img src="assets/images/${d.heroImage}" alt="${d.name}" loading="lazy" onerror="this.style.display='none'">
                    <span class="category-badge">${d.category}</span>
                    <span class="visited-badge" style="position:absolute;bottom:10px;left:10px;padding:4px 14px;border-radius:50px;font-size:12px;font-weight:700;background:var(--secondary);color:#fff;">✅ Visited</span>
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

renderVisited();