// ─── DATA LAYER ──────────────────────────────────────────────────────────────

const PLACES = [
  { id: 'tathva', name: 'Tathva \'26', category: 'attraction', image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=800', rating: 5.0, xp: 1000, location: 'NIT Calicut, Kozhikode, India', tags: ['fest','tech','culture','must visit'], description: 'South India\'s largest techno-management fest at NIT Calicut.', revivalScore: 99, snapCount: 1542, featured: true,
    gallery: [
      { title: 'Concert', url: 'https://images.unsplash.com/photo-1540039155733-d7696d4eb98b?w=800' },
      { title: 'AutoShow', url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800' },
      { title: 'Workshops', url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800' }
    ]
  },
  { id: 'p1', name: 'Underground Sushi Bar', category: 'restaurant', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800', rating: 4.8, xp: 120, location: 'Sector 7, Tokyo District', tags: ['sushi','hidden gem','premium'], description: 'A hidden gem serving the freshest seafood with a modern twist. Only known by word of mouth — now the community is keeping it alive.', revivalScore: 87, snapCount: 234, featured: true },
  { id: 'p2', name: 'The Grand Lighthouse', category: 'attraction', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', rating: 4.8, xp: 150, location: 'Coastal Blvd', tags: ['scenic','historic','needs love'], description: 'A century-old lighthouse with panoramic ocean views. Recently restored thanks to community snaps.', revivalScore: 62, snapCount: 189, featured: true },
  { id: 'p3', name: 'Neon Cyber Cafe', category: 'cafe', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800', rating: 4.6, xp: 50, location: 'Downtown District', tags: ['cyberpunk','coffee','best vibes'], description: 'Experience the future of coffee in our neon-lit cyberpunk themed cafe.', revivalScore: 45, snapCount: 102 },
  { id: 'p4', name: 'Emerald Forest Trail', category: 'nature', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800', rating: 4.7, xp: 100, location: 'West Valley', tags: ['hiking','must visit','fitness'], description: 'Escape the city and reconnect with nature on this beautifully maintained 5-mile trail.', revivalScore: 30, snapCount: 77 },
  { id: 'p5', name: 'Starlight Observatory', category: 'attraction', image: 'https://images.unsplash.com/photo-1532055745199-a9a3b2b46761?w=800', rating: 4.9, xp: 200, location: 'Mount Horizon', tags: ['space','view','best vibes'], description: 'Look through high-powered telescopes and discover the cosmos. Best visited on clear nights.', revivalScore: 71, snapCount: 312 },
  { id: 'p6', name: 'Velvet Jazz Lounge', category: 'nightlife', image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800', rating: 4.5, xp: 80, location: 'Midtown Arts Quarter', tags: ['jazz','cocktails','needs love'], description: 'One of the last remaining jazz lounges in the city. Help keep the music alive by snapping it.', revivalScore: 93, snapCount: 445 },
];

const SNAPS_DATA = [
  { id: 's1', userId: 'u1', username: 'maya_explores', avatar: 'https://i.pravatar.cc/150?img=47', placeId: 'p6', placeName: 'Velvet Jazz Lounge', image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800', caption: 'Found this absolute gem! It\'s been here for 40 years and almost nobody knows about it anymore 🎷', moodTag: '💜 Needs Love', fireVotes: 312, revivalVotes: 278, timeAgo: '2h ago', revivalScore: 93 },
  { id: 's2', userId: 'u2', username: 'chef_kento', avatar: 'https://i.pravatar.cc/150?img=33', placeId: 'p1', placeName: 'Underground Sushi Bar', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800', caption: 'The chef here has been making sushi for 30 years. Business was dying — let\'s bring it back 🍣', moodTag: '🔥 Underrated', fireVotes: 198, revivalVotes: 241, timeAgo: '5h ago', revivalScore: 87 },
  { id: 's3', userId: 'u3', username: 'astro_ali', avatar: 'https://i.pravatar.cc/150?img=12', placeId: 'p5', placeName: 'Starlight Observatory', image: 'https://images.unsplash.com/photo-1532055745199-a9a3b2b46761?w=800', caption: 'Jupiter was so clear tonight! This place needs more visitors to stay open 🔭✨', moodTag: '💎 Hidden Gem', fireVotes: 445, revivalVotes: 189, timeAgo: '1d ago', revivalScore: 71 },
  { id: 's4', userId: 'u4', username: 'urban_hiker', avatar: 'https://i.pravatar.cc/150?img=68', placeId: 'p2', placeName: 'The Grand Lighthouse', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', caption: 'Sunrise from the top 🌅 Barely anyone visits this historic spot anymore. Change that!', moodTag: '🌟 Must Visit', fireVotes: 367, revivalVotes: 156, timeAgo: '2d ago', revivalScore: 62 },
];

const REWARDS_DATA = [
  { id: 'r1', title: '20% Off Sushi Bar', desc: 'Show this reward at Underground Sushi Bar for 20% off your bill.', type: 'discount', icon: '🍣', cost: 200, color: 'rgba(239,68,68,.15)', colorText: 'var(--error)' },
  { id: 'r2', title: 'Free Observatory Entry', desc: 'Redeem one free admission to Starlight Observatory on any weeknight.', type: 'freebie', icon: '🔭', cost: 350, color: 'rgba(124,58,237,.15)', colorText: 'var(--primary-light)' },
  { id: 'r3', title: 'Jazz Lounge VIP Pass', desc: 'Skip the line & get a complimentary drink at Velvet Jazz Lounge.', type: 'experience', icon: '🎷', cost: 500, color: 'rgba(6,182,212,.15)', colorText: 'var(--teal)' },
  { id: 'r4', title: 'Trail Guide Booklet', desc: 'Printed guide to all hidden trails in Emerald Forest. Collector edition.', type: 'voucher', icon: '🌿', cost: 150, color: 'rgba(16,185,129,.15)', colorText: 'var(--success)' },
];

// ─── APP STATE ────────────────────────────────────────────────────────────────
let state = {
  xp: 1250,
  votedSnaps: {}, // { snapId: { fire: bool, revival: bool } }
  userSnaps: [],  // snaps submitted by current user
  selectedPlace: null,
  selectedMoods: [],
  previewDataUrl: null,
  feedFilter: 'trending',
};

// ─── DOM REFS ─────────────────────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function getCatBadgeClass(cat) {
  return `badge-${cat}`;
}

function revivalColor(score) {
  if (score >= 80) return 'var(--revival-color)';
  if (score >= 50) return 'var(--accent)';
  return 'var(--success)';
}

function formatNumber(n) {
  return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n);
}

function timeAgo(ms) {
  const secs = Math.floor((Date.now() - ms) / 1000);
  if (secs < 60) return `${secs}s ago`;
  if (secs < 3600) return `${Math.floor(secs/60)}m ago`;
  if (secs < 86400) return `${Math.floor(secs/3600)}h ago`;
  return `${Math.floor(secs/86400)}d ago`;
}

function gainXP(amount) {
  state.xp += amount;
  $('xp-count').textContent = state.xp.toLocaleString() + ' XP';
  const rewardsCount = $('xp-rewards-count');
  if (rewardsCount) rewardsCount.textContent = state.xp.toLocaleString();

  // floating toast
  const toast = document.createElement('div');
  toast.className = 'xp-float-toast';
  toast.textContent = `+${amount} XP`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1800);
}

// ─── VIEW SWITCHING ───────────────────────────────────────────────────────────
function switchView(viewId) {
  $$('.view').forEach(v => v.classList.remove('active-view'));
  $$('.nav-links a').forEach(a => a.classList.remove('active'));
  const target = $(viewId);
  if (target) {
    target.classList.add('active-view');
    target.classList.remove('fade-in');
    void target.offsetWidth; // force reflow
    target.classList.add('fade-in');
  }
  const link = document.querySelector(`[data-view="${viewId}"]`);
  if (link) link.classList.add('active');

  // Init mini map when switching to snapsnap
  if (viewId === 'view-snapsnap' && typeof window.initSnapMap === 'function') {
    window.initSnapMap();
  }
}

// ─── RENDER: FEATURED GRID ────────────────────────────────────────────────────
function renderFeatured() {
  const grid = $('featured-grid');
  if (!grid) return;
  const featured = PLACES.filter(p => p.featured);
  grid.innerHTML = featured.map(p => `
    <article class="featured-card glass-card" onclick="openModal('${p.id}')">
      <div class="card-image" style="background-image:url('${p.image}')"></div>
      <div class="card-overlay"></div>
      <span class="badge ${getCatBadgeClass(p.category)}">${p.category}</span>
      <div class="card-revival">
        <div class="revival-badge">💜 ${p.revivalScore}% Revival</div>
      </div>
      <div class="card-content">
        <h3>${p.name}</h3>
        <div class="card-meta">
          <span class="rating"><ion-icon name="star"></ion-icon> ${p.rating}</span>
          <span class="xp-pill">+${p.xp} XP</span>
          <span style="color:var(--text-secondary);font-size:12px;">📸 ${p.snapCount}</span>
        </div>
      </div>
    </article>`).join('');
}

// ─── RENDER: NEARBY GRID ──────────────────────────────────────────────────────
function renderNearby(filter = 'all') {
  const list = $('places-list');
  if (!list) return;
  const places = filter === 'all' ? PLACES : PLACES.filter(p => p.category === filter);
  list.innerHTML = places.map(p => `
    <article class="featured-card glass-card place-card" onclick="openModal('${p.id}')">
      <div class="card-image" style="background-image:url('${p.image}')"></div>
      <div class="card-overlay"></div>
      <span class="badge ${getCatBadgeClass(p.category)}">${p.category}</span>
      <div class="card-content">
        <h3>${p.name}</h3>
        <div class="card-meta">
          <span class="rating"><ion-icon name="star"></ion-icon> ${p.rating}</span>
          <span class="xp-pill">+${p.xp} XP</span>
        </div>
      </div>
    </article>`).join('');
}

let leafletMap = null;
let mapMarkers = [];
function renderMap() {
  const mapContainer = $('map-view');
  if (!mapContainer) return;

  if (leafletMap) return;

  leafletMap = L.map('map-view', {
    center: [11.2588, 75.7804],
    zoom: 14,
    minZoom: 12,
    zoomControl: false,
    attributionControl: false
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(leafletMap);

  PLACES.forEach((p, i) => {
    const lat = p.id === 'tathva' ? 11.2588 : (11.2588 + ((i % 3) * 0.008) - 0.004);
    const lon = p.id === 'tathva' ? 75.7804 : (75.7804 + ((i % 4) * 0.008) - 0.004);
    
    const iconHtml = `
      <div style="position:relative; width:40px; height:40px; display:flex; justify-content:center; align-items:center;">
        <div class="marker-pulse"></div>
        <ion-icon name="location" class="map-pin"></ion-icon>
        <span class="marker-label" style="position:absolute; top:-25px;">${p.name}</span>
      </div>`;
      
    const customIcon = L.divIcon({
      className: `map-marker ${p.category}`,
      html: iconHtml,
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });

    const marker = L.marker([lat, lon], { icon: customIcon }).addTo(leafletMap);
    marker.on('click', () => openModal(p.id));
    mapMarkers.push({ marker, place: p });
  });
}

// ─── RENDER: SNAP FEED ────────────────────────────────────────────────────────
function getAllSnaps() {
  const base = [...SNAPS_DATA];
  // Prepend user-submitted snaps
  state.userSnaps.forEach(s => base.unshift(s));
  if (state.feedFilter === 'trending') {
    return base.sort((a, b) => (b.fireVotes + b.revivalVotes) - (a.fireVotes + a.revivalVotes));
  }
  if (state.feedFilter === 'revival') {
    return base.sort((a, b) => b.revivalVotes - a.revivalVotes);
  }
  return base; // recent
}

function renderFeed() {
  const feed = $('snap-feed');
  if (!feed) return;
  const snaps = getAllSnaps();
  feed.innerHTML = snaps.map(snap => buildSnapCard(snap)).join('');
  // Attach vote handlers
  feed.querySelectorAll('.btn-vote').forEach(btn => {
    btn.addEventListener('click', () => handleVote(btn));
  });
}

function buildSnapCard(snap) {
  const votes = state.votedSnaps[snap.id] || {};
  const fireClass = votes.fire ? 'voted' : '';
  const revClass = votes.revival ? 'voted' : '';
  const fireCount = snap.fireVotes + (votes.fire ? 1 : 0);
  const revCount = snap.revivalVotes + (votes.revival ? 1 : 0);
  const score = snap.revivalScore;
  const scoreColor = revivalColor(score);

  return `
    <div class="snap-card" data-snap-id="${snap.id}">
      <div class="snap-card-header">
        <div class="snap-user">
          <img class="snap-avatar" src="${snap.avatar}" alt="${snap.username}">
          <div>
            <div class="snap-username">@${snap.username}</div>
            <div class="snap-time">${snap.timeAgo}</div>
          </div>
        </div>
        <button class="snap-location-tag" onclick="openModal('${snap.placeId}')">
          <ion-icon name="location"></ion-icon> ${snap.placeName}
        </button>
      </div>

      <div class="snap-image-wrapper">
        <img class="snap-image" src="${snap.image}" alt="${snap.placeName}" loading="lazy">
        <div class="snap-image-overlay"></div>
        <div class="snap-mood-tag">${snap.moodTag}</div>
        <div class="revival-bar-wrap">
          <div class="revival-bar-label">
            <span>💜 Revival Score</span>
            <span style="color:${scoreColor}">${score}%</span>
          </div>
          <div class="revival-bar-bg">
            <div class="revival-bar-fill" style="width:${score}%; background: linear-gradient(90deg, var(--revival-color), ${scoreColor});"></div>
          </div>
        </div>
      </div>

      <div class="snap-card-body">
        <p class="snap-caption">${snap.caption}</p>
        <div class="snap-actions">
          <button class="btn-vote fire ${fireClass}" data-snap="${snap.id}" data-type="fire">
            🔥 <span class="vote-count">${formatNumber(fireCount)}</span>
          </button>
          <button class="btn-vote revival ${revClass}" data-snap="${snap.id}" data-type="revival">
            💜 Revive <span class="vote-count">${formatNumber(revCount)}</span>
          </button>
        </div>
      </div>
    </div>`;
}

function handleVote(btn) {
  const snapId = btn.dataset.snap;
  const type = btn.dataset.type;
  if (!state.votedSnaps[snapId]) state.votedSnaps[snapId] = {};

  const already = state.votedSnaps[snapId][type];
  state.votedSnaps[snapId][type] = !already;

  if (!already) {
    gainXP(type === 'revival' ? 5 : 2);
    // Update revival score on place
    if (type === 'revival') {
      const snap = getAllSnaps().find(s => s.id === snapId);
      if (snap) {
        const place = PLACES.find(p => p.id === snap.placeId);
        if (place) place.revivalScore = Math.min(100, place.revivalScore + 1);
      }
    }
  }
  renderFeed();
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
let currentModalPlace = null;
function openModal(placeId) {
  const place = PLACES.find(p => p.id === placeId);
  if (!place) return;
  currentModalPlace = place;

  $('modal-hero').style.backgroundImage = `url('${place.image}')`;
  $('modal-badge').className = `badge ${getCatBadgeClass(place.category)}`;
  $('modal-badge').textContent = place.category;
  $('modal-title').textContent = place.name;
  $('modal-location').textContent = place.location;
  $('modal-xp').textContent = `+${place.xp} XP`;
  $('modal-rating').textContent = `${place.rating} Rating`;
  $('modal-snaps').textContent = `${place.snapCount} Snaps`;
  $('modal-revival').textContent = `${place.revivalScore}% Revival`;
  $('modal-desc').textContent = place.description;
  $('modal-tags').innerHTML = place.tags.map(t => `<span class="tag">#${t}</span>`).join('');

  const galleryEl = $('modal-gallery');
  if (galleryEl) {
    if (place.gallery && place.gallery.length > 0) {
      galleryEl.innerHTML = place.gallery.map(g => `
        <div class="gallery-img-wrapper">
          <img src="${g.url}" alt="${g.title}">
          <div class="gallery-img-label">${g.title}</div>
        </div>
      `).join('');
      galleryEl.style.display = 'flex';
    } else {
      galleryEl.style.display = 'none';
      galleryEl.innerHTML = '';
    }
  }

  // Revival bar in modal
  const meterEl = $('modal-revival-meter');
  meterEl.innerHTML = `
    <div class="revival-bar-label" style="color:#fff; opacity:.9; font-size:12px; font-weight:600; margin-bottom:4px; display:flex; justify-content:space-between;">
      <span>💜 Revival Score</span><span style="color:${revivalColor(place.revivalScore)}">${place.revivalScore}%</span>
    </div>
    <div class="revival-bar-bg"><div class="revival-bar-fill" style="width:${place.revivalScore}%"></div></div>`;

  $('place-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('place-modal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ─── SNAPSNAP UPLOAD FLOW ─────────────────────────────────────────────────────
function initSnapSnap() {
  const fileInput = $('file-input');
  const dropzone = $('dropzone');
  const preview = $('preview-image');
  const placeNameInput = $('place-name-input');
  
  let snapMap = null;
  let snapMarker = null;
  let currentSnapLat = 11.2588;
  let currentSnapLon = 75.7804;
  
  window.initSnapMap = function() {
    if (!snapMap) {
      snapMap = L.map('snap-map', { center: [11.2588, 75.7804], zoom: 14, attributionControl: false, zoomControl: true });
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(snapMap);
      snapMarker = L.marker([11.2588, 75.7804], { draggable: true }).addTo(snapMap);
      
      snapMarker.on('dragend', function () {
        const position = snapMarker.getLatLng();
        currentSnapLat = position.lat;
        currentSnapLon = position.lng;
      });
    }
    setTimeout(() => snapMap.invalidateSize(), 300);
  };

  const submitBtn = $('submit-snap-btn');
  const uploadOverlay = $('upload-overlay');
  const successOverlay = $('success-overlay');
  const newSnapBtn = $('new-snap-btn');

  // Click dropzone
  dropzone.addEventListener('click', () => fileInput.click());

  // Drag-and-drop
  dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.style.borderColor = 'var(--primary)'; });
  dropzone.addEventListener('dragleave', () => { dropzone.style.borderColor = ''; });
  dropzone.addEventListener('drop', e => {
    e.preventDefault();
    dropzone.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) handleFileSelect(file);
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files[0]) handleFileSelect(fileInput.files[0]);
  });

  function handleFileSelect(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      state.previewDataUrl = e.target.result;
      preview.src = e.target.result;
      preview.style.display = 'block';
      const inner = dropzone.querySelector('.dropzone-inner');
      if(inner) inner.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }

  // Mood tags
  $$('.mood-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      const mood = chip.dataset.mood;
      if (state.selectedMoods.includes(mood)) {
        state.selectedMoods = state.selectedMoods.filter(m => m !== mood);
      } else {
        state.selectedMoods.push(mood);
      }
    });
  });

  // Submit snap
  submitBtn.addEventListener('click', () => {
    const typedPlace = placeNameInput.value.trim();
    if (!typedPlace) {
      placeNameInput.focus();
      placeNameInput.style.borderColor = 'var(--error)';
      setTimeout(() => { placeNameInput.style.borderColor = ''; }, 2000);
      return;
    }
    uploadOverlay.style.display = 'flex';

    setTimeout(() => {
      uploadOverlay.style.display = 'none';
      successOverlay.style.display = 'flex';
      gainXP(100);

      // Create new place in PLACES
      const newLat = currentSnapLat;
      const newLon = currentSnapLon;
      const mood = state.selectedMoods.length ? state.selectedMoods[0] : 'must visit';
      const place = {
        id: 'place_' + Date.now(),
        name: typedPlace,
        category: 'attraction',
        image: state.previewDataUrl || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        rating: 5.0,
        xp: 200,
        location: 'Kozhikode',
        tags: ['new', 'community', mood.toLowerCase()],
        description: $('snap-caption').value || 'A brand new discovery added by you!',
        revivalScore: 100,
        snapCount: 1,
        lat: newLat,
        lon: newLon
      };
      PLACES.unshift(place);
      
      // Dynamically add to live map with the uploaded photo as the pin
      if (leafletMap) {
        const iconHtml = `
          <div style="position:relative; width:50px; height:50px; display:flex; justify-content:center; align-items:center;">
            <div class="marker-pulse" style="background:#fff; width:100%; height:100%; top:0; left:0; bottom:0;"></div>
            <img src="${place.image}" style="width:48px; height:48px; border-radius:50%; border:3px solid var(--accent); object-fit:cover; position:relative; z-index:2; box-shadow:0 4px 15px rgba(0,0,0,0.6);">
            <span class="marker-label" style="position:absolute; top:-25px; background:var(--accent); color:#000;">${place.name}</span>
          </div>`;
        const customIcon = L.divIcon({ className: 'map-marker', html: iconHtml, iconSize: [50, 50], iconAnchor: [25, 25] });
        const marker = L.marker([newLat, newLon], { icon: customIcon }).addTo(leafletMap);
        marker.on('click', () => openModal(place.id));
        mapMarkers.push({ marker, place });
      }

      // Add to feed
      const caption = $('snap-caption').value || `Just snapped ${typedPlace}! ✨`;
      const moodLabel = state.selectedMoods.length ? state.selectedMoods[0] : '🌟 Must Visit';

      state.userSnaps.unshift({
        id: `user_${Date.now()}`,
        userId: 'me',
        username: 'you',
        avatar: 'https://i.pravatar.cc/150?img=11',
        placeId: place.id,
        placeName: place.name,
        image: state.previewDataUrl || place.image,
        caption,
        moodTag: moodLabel,
        fireVotes: 0,
        revivalVotes: 0,
        timeAgo: 'Just now',
        revivalScore: place.revivalScore,
      });
    }, 2200);
  });

  // New snap reset
  newSnapBtn.addEventListener('click', () => {
    successOverlay.style.display = 'none';
    preview.style.display = 'none';
    preview.src = '';
    const inner = dropzone.querySelector('.dropzone-inner');
    if(inner) inner.style.display = 'flex';
    $('snap-caption').value = '';
    placeNameInput.value = '';
    state.previewDataUrl = null;
    fileInput.value = '';
    $$('.mood-chip').forEach(c => c.classList.remove('selected'));
  });
}

// ─── RENDER: REWARDS ──────────────────────────────────────────────────────────
function renderRewards() {
  const grid = $('rewards-grid');
  if (!grid) return;
  grid.innerHTML = REWARDS_DATA.map(r => `
    <div class="reward-card">
      <div class="reward-icon" style="background:${r.color}">
        <span style="font-size:26px">${r.icon}</span>
      </div>
      <div class="reward-title">${r.title}</div>
      <div class="reward-desc">${r.desc}</div>
      <div class="reward-footer">
        <div class="reward-cost"><ion-icon name="flash"></ion-icon> ${r.cost} XP</div>
        <button class="btn-redeem" data-cost="${r.cost}" onclick="redeemReward(this, ${r.cost})">
          Redeem
        </button>
      </div>
    </div>`).join('');
}

function redeemReward(btn, cost) {
  if (state.xp < cost) {
    btn.textContent = 'Not enough XP';
    btn.style.color = 'var(--error)';
    setTimeout(() => { btn.textContent = 'Redeem'; btn.style.color = ''; }, 2000);
    return;
  }
  state.xp -= cost;
  $('xp-count').textContent = state.xp.toLocaleString() + ' XP';
  const rewardsCount = $('xp-rewards-count');
  if (rewardsCount) rewardsCount.textContent = state.xp.toLocaleString();
  btn.textContent = '✓ Redeemed!';
  btn.disabled = true;
  btn.style.background = 'var(--success)';
  btn.style.color = '#fff';
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
function initApp() {
  try { renderFeatured(); } catch (e) { console.error('Error in renderFeatured:', e); }
  try { renderNearby(); } catch (e) { console.error('Error in renderNearby:', e); }
  try { renderMap(); } catch (e) { console.error('Error in renderMap:', e); }
  try { renderFeed(); } catch (e) { console.error('Error in renderFeed:', e); }
  try { renderRewards(); } catch (e) { console.error('Error in renderRewards:', e); }
  try { initSnapSnap(); } catch (e) { console.error('Error in initSnapSnap:', e); }

  // Nav tabs
  $$('.nav-links a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      switchView(a.dataset.view);
    });
  });

  // Category chips
  $$('.cat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      $$('.cat-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderNearby(chip.dataset.cat);
    });
  });

  // Feed filters
  $$('.feed-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.feed-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.feedFilter = btn.dataset.filter;
      renderFeed();
    });
  });

  // Map filters
  const mapFilterBtn = $('map-filter-btn');
  const mapFilterDropdown = $('map-filter-dropdown');
  if (mapFilterBtn && mapFilterDropdown) {
    mapFilterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const current = mapFilterDropdown.style.display;
      mapFilterDropdown.style.display = (current === 'none' || !current) ? 'block' : 'none';
    });
    
    document.addEventListener('click', () => {
      mapFilterDropdown.style.display = 'none';
    });

    $$('.filter-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const tag = option.dataset.tag;
        
        // Update active class
        $$('.filter-option').forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // Update button text
        mapFilterBtn.innerHTML = `<ion-icon name="funnel"></ion-icon> ${tag === 'all' ? 'All Vibes' : option.textContent.trim()}`;
        
        // Filter map markers
        mapMarkers.forEach(({ marker, place }) => {
          const el = marker.getElement();
          if (!el) return;
          
          if (tag === 'all') {
            el.classList.remove('marker-filtered-out');
          } else {
            const hasTag = place.tags && place.tags.some(t => t.toLowerCase() === tag.toLowerCase());
            if (hasTag) {
              el.classList.remove('marker-filtered-out');
            } else {
              el.classList.add('marker-filtered-out');
            }
          }
        });
        
        mapFilterDropdown.style.display = 'none';
      });
    });
  }

  // Modal close
  const closeBtn = document.querySelector('.close-modal');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  const placeModal = $('place-modal');
  if (placeModal) {
    placeModal.addEventListener('click', e => { if (e.target === placeModal) closeModal(); });
  }

  // Check-in from modal
  const checkinBtn = $('checkin-btn');
  if (checkinBtn) {
    checkinBtn.addEventListener('click', () => {
      if (!currentModalPlace) return;
      gainXP(currentModalPlace.xp);
      checkinBtn.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon> Checked In!';
      checkinBtn.style.background = 'var(--success)';
      setTimeout(closeModal, 1500);
    });
  }

  // Snap from modal
  const snapFromModalBtn = $('snap-from-modal-btn');
  if (snapFromModalBtn) {
    snapFromModalBtn.addEventListener('click', () => {
      if (currentModalPlace) state.selectedPlace = currentModalPlace;
      closeModal();
      switchView('snapsnap-view');
      if (currentModalPlace) {
        const chip = $('selected-place-chip');
        if (chip) {
          chip.style.display = 'flex';
          chip.innerHTML = `<ion-icon name="location"></ion-icon> ${currentModalPlace.name}`;
        }
      }
    });
  }

  // Search
  const searchInput = $('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      if (!q) { renderNearby(); return; }
      const f = PLACES.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q) || p.tags.some(t => t.includes(q)));
      const list = $('places-list');
      if (!list) return;
      list.innerHTML = f.map(p => `
        <article class="featured-card glass-card place-card" onclick="openModal('${p.id}')">
          <div class="card-image" style="background-image:url('${p.image}')"></div>
          <div class="card-overlay"></div>
          <span class="badge ${getCatBadgeClass(p.category)}">${p.category}</span>
          <div class="card-content"><h3>${p.name}</h3>
            <div class="card-meta"><span class="rating"><ion-icon name="star"></ion-icon> ${p.rating}</span><span class="xp-pill">+${p.xp} XP</span></div>
          </div>
        </article>`).join('');
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// XP float toast style (injected dynamically)
const style = document.createElement('style');
style.textContent = `
.xp-float-toast {
  position: fixed; bottom: 40px; right: 30px; z-index: 9999;
  background: var(--accent); color: #fff; font-weight: 800; font-size: 18px;
  padding: 10px 20px; border-radius: 30px;
  box-shadow: 0 6px 20px rgba(249,115,22,.5);
  animation: toastUp 1.8s ease forwards;
  pointer-events: none;
}
@keyframes toastUp {
  0%   { opacity: 0; transform: translateY(20px); }
  20%  { opacity: 1; transform: translateY(0); }
  80%  { opacity: 1; transform: translateY(-10px); }
  100% { opacity: 0; transform: translateY(-30px); }
}`;
document.head.appendChild(style);
