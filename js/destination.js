// ============================================================
// DESTINATION DETAIL PAGE
// ============================================================
const urlParams = new URLSearchParams(window.location.search);
const destinationId = parseInt(urlParams.get('id'));
const content = document.getElementById('destination-content');

function renderDestination() {
    const dest = destinations.find(d => d.id === destinationId);

    if (!dest) {
        content.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🗺️</div>
                <h3>Destination Not Found</h3>
                <p>We couldn't find the destination you're looking for.</p>
                <a href="destinations.html" class="btn btn-primary" style="margin-top:16px;">Browse All Destinations</a>
            </div>
        `;
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('wanderVibe_favorites')) || [];
    const visited = JSON.parse(localStorage.getItem('wanderVibe_visited')) || [];
    const isFav = favorites.includes(dest.id);
    const isVisited = visited.includes(dest.id);

    // Build gallery
    let galleryHTML = '';
    if (dest.gallery && dest.gallery.length > 0) {
        galleryHTML = `
            <div class="detail-section">
                <h4>Photo Gallery</h4>
                <div class="detail-gallery">
                    ${dest.gallery.map(img => `
                        <img src="assets/images/${img}" alt="${dest.name}" loading="lazy" onerror="this.style.display='none'">
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Build how to reach
    let reachHTML = '';
    if (dest.howToReach) {
        const parts = [];
        if (dest.howToReach.byAir) parts.push(`By Air : ${dest.howToReach.byAir}`);
        if (dest.howToReach.byTrain) parts.push(`By Train : ${dest.howToReach.byTrain}`);
        if (dest.howToReach.bySea) parts.push(`By Sea : ${dest.howToReach.bySea}`);
        if (dest.howToReach.byRoad) parts.push(`By Road : ${dest.howToReach.byRoad}`);
        if (dest.howToReach.localTransport) parts.push(`Local : ${dest.howToReach.localTransport}`);
        if (parts.length > 0) {
            reachHTML = `
                <div class="detail-section">
                    <h4>How to Reach</h4>
                    ${parts.map(p => `<p>${p}</p>`).join('')}
                </div>
            `;
        }
    }

    // Build cost guide
    let costHTML = '';
    if (dest.costGuide) {
        costHTML = `
            <div class="detail-section">
                <h4>Cost Guide (per day)</h4>
                <ul>
                    <li>Budget : ${dest.costGuide.budget}</li>
                    <li>Mid-Range : ${dest.costGuide.midRange}</li>
                    <li>Luxury : ${dest.costGuide.luxury}</li>
                </ul>
            </div>
        `;
    }

    content.innerHTML = `
        <img src="assets/images/${dest.heroImage}" alt="${dest.name}" class="detail-hero" 
             onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#6C5CE7,#00B894)';">

        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
            <div>
                <h1 class="detail-title">${dest.name}</h1>
                <div class="detail-country">📍 ${dest.country}</div>
                <div class="detail-rating">⭐ ${dest.rating} <span>(${dest.reviews} reviews)</span></div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <span class="category-badge" style="background:var(--primary);color:#fff;padding:6px 18px;border-radius:50px;font-weight:700;font-size:14px;">${dest.category}</span>
                ${isVisited ? '<span class="visited-badge" style="background:var(--secondary);color:#fff;padding:6px 18px;border-radius:50px;font-weight:700;font-size:14px;">✅ Visited</span>' : ''}
            </div>
        </div>

        <p class="detail-description">${dest.fullDescription || dest.description}</p>

        ${dest.history ? `
            <div class="detail-section">
                <h4>History</h4>
                <p>${dest.history}</p>
            </div>
        ` : ''}

        <div class="detail-grid">
            <div>
                <div class="detail-section">
                    <h4>Best Time to Visit</h4>
                    <p>${dest.bestTime}</p>
                    ${dest.peakSeason ? `<p style="font-size:14px;color:var(--text-light);">Peak Season: ${dest.peakSeason}</p>` : ''}
                </div>
                ${dest.weather ? `<div class="detail-section"><h4>Weather</h4><p>${dest.weather}</p></div>` : ''}
                ${dest.language ? `<div class="detail-section"><h4>Language</h4><p>${dest.language}</p></div>` : ''}
                ${dest.currency ? `<div class="detail-section"><h4>Currency</h4><p>${dest.currency}</p></div>` : ''}
                ${dest.timezone ? `<div class="detail-section"><h4>Timezone</h4><p>${dest.timezone}</p></div>` : ''}
            </div>
            <div>
                ${reachHTML}
                ${costHTML}
            </div>
        </div>

        <div class="detail-section">
            <h4>Top Attractions</h4>
            <ul>${dest.attractions.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>

        <div class="detail-section">
            <h4>Local Food</h4>
            <ul>${dest.food.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>

        <div class="detail-section">
            <h4>Travel Tips</h4>
            <ul>${dest.tips.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>

        ${dest.nearby ? `
            <div class="detail-section">
                <h4>Nearby Places</h4>
                <ul>${dest.nearby.map(n => `<li>${n}</li>`).join('')}</ul>
            </div>
        ` : ''}

        ${galleryHTML}

        <div class="detail-actions">
            <button class="btn-visit ${isVisited ? 'visited' : ''}" onclick="toggleVisited(${dest.id}); window.location.reload();">
                ${isVisited ? ' Visited' : ' Mark as Visited'}
            </button>
            <a href="${dest.mapLink}" target="_blank" class="btn-map"> View on Google Maps</a>
            <button class="btn-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite(${dest.id}); window.location.reload();">
                ${isFav ? ' Remove from Favorites' : ' Add to Favorites'}
            </button>
            <a href="destinations.html" class="btn" style="background:var(--bg-alt);color:var(--text);">← Back to All Destinations</a>
        </div>
    `;
}

// ============================================================
// FUNCTIONS
// ============================================================
function toggleFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem('wanderVibe_favorites')) || [];
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('wanderVibe_favorites', JSON.stringify(favorites));
}

function toggleVisited(id) {
    let visited = JSON.parse(localStorage.getItem('wanderVibe_visited')) || [];
    if (visited.includes(id)) {
        visited = visited.filter(v => v !== id);
    } else {
        visited.push(id);
    }
    localStorage.setItem('wanderVibe_visited', JSON.stringify(visited));
}

// ============================================================
// INIT
// ============================================================
renderDestination();

window.toggleFavorite = toggleFavorite;
window.toggleVisited = toggleVisited;