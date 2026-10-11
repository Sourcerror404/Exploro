// ─── MOCK DATA ───────────────────────────────────────────────────────────────

const MY_POSTS = [
  { id:'p1', thumb:'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400', title:'Velvet Jazz Lounge at midnight ✨', place:'Velvet Jazz Lounge', status:'approved', reach:42300, fireVotes:312, revivalVotes:278, coins:1840, posted:'Oct 8, 2026' },
  { id:'p2', thumb:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400', title:'Hidden sushi spot you NEED to try 🍣', place:'Underground Sushi Bar', status:'approved', reach:28900, fireVotes:198, revivalVotes:241, coins:1410, posted:'Oct 5, 2026' },
  { id:'p3', thumb:'https://images.unsplash.com/photo-1532055745199-a9a3b2b46761?w=400', title:'Jupiter through the lens 🔭', place:'Starlight Observatory', status:'approved', reach:18100, fireVotes:445, revivalVotes:189, coins:1220, posted:'Oct 2, 2026' },
  { id:'p4', thumb:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', title:'Sunrise from the lighthouse 🌅', place:'The Grand Lighthouse', status:'pending', reach:0, fireVotes:0, revivalVotes:0, coins:0, posted:'Oct 10, 2026' },
  { id:'p5', thumb:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400', title:'Morning hike at emerald forest 🌿', place:'Emerald Forest Trail', status:'pending', reach:0, fireVotes:0, revivalVotes:0, coins:0, posted:'Oct 10, 2026' },
  { id:'p6', thumb:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400', title:'Neon nights at cyber cafe', place:'Neon Cyber Cafe', status:'pending', reach:0, fireVotes:0, revivalVotes:0, coins:0, posted:'Oct 9, 2026' },
];

const ACTIVITY = [
  { icon:'heart', color:'var(--revival)', text:'Your post got 50 revival votes!', sub:'Velvet Jazz Lounge post', time:'2h ago' },
  { icon:'flash', color:'var(--gold)', text:'Earned 🪙 320 coins this week', sub:'From engagement on 3 posts', time:'5h ago' },
  { icon:'checkmark-circle', color:'var(--success)', text:'Post approved by admin', sub:'"Jupiter through the lens 🔭"', time:'1d ago' },
  { icon:'trending-up', color:'var(--primary)', text:'Viral alert! 40k reach milestone', sub:'Hidden sushi spot post', time:'2d ago' },
  { icon:'calendar', color:'var(--teal)', text:'Event "Night Photography Walk" approved', sub:'42 people RSVPed so far!', time:'3d ago' },
];

const EARNINGS_HISTORY = [
  { date:'Oct 10', source:'Revival Votes', post:'Velvet Jazz Lounge', coins:'+🪙 250' },
  { date:'Oct 9', source:'Viral Bonus (40k reach)', post:'Hidden Sushi Spot', coins:'+🪙 500' },
  { date:'Oct 8', source:'Fire Votes × 156', post:'Velvet Jazz Lounge', coins:'+🪙 312' },
  { date:'Oct 7', source:'Event Hosting Bonus', post:'Night Photography Walk', coins:'+🪙 390' },
  { date:'Oct 6', source:'Revival Votes', post:'Underground Sushi Bar', coins:'+🪙 605' },
  { date:'Oct 5', source:'Fire Votes × 99', post:'Starlight Observatory', coins:'+🪙 198' },
  { date:'Oct 4', source:'Base Post Reward', post:'Grand Lighthouse', coins:'+🪙 50' },
  { date:'Oct 3', source:'Revival Votes', post:'Emerald Forest Trail', coins:'+🪙 170' },
];

const LEADERBOARD = [
  { rank:1, name:'nova_lens', avatar:'https://i.pravatar.cc/150?img=5', coins:12400, posts:48, reach:'210k', streak:'🔥 28d', isYou:false },
  { rank:2, name:'urban_hikr', avatar:'https://i.pravatar.cc/150?img=68', coins:9800, posts:36, reach:'182k', streak:'🔥 21d', isYou:false },
  { rank:3, name:'astro_ali', avatar:'https://i.pravatar.cc/150?img=12', coins:7650, posts:29, reach:'145k', streak:'🔥 14d', isYou:false },
  { rank:4, name:'maya_explores', avatar:'https://i.pravatar.cc/150?img=47', coins:6200, posts:31, reach:'119k', streak:'🔥 18d', isYou:false },
  { rank:5, name:'chef_kento', avatar:'https://i.pravatar.cc/150?img=33', coins:5100, posts:22, reach:'97k', streak:'🔥 9d', isYou:false },
  { rank:6, name:'you (Alex)', avatar:'https://i.pravatar.cc/150?img=11', coins:4250, posts:24, reach:'89k', streak:'🔥 7d', isYou:true },
];

// ─── INIT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderTopPosts();
  renderActivity();
  renderPostsTable('all');
  renderEarnings();
  renderLeaderboard();
  initEventCarousel();

  document.querySelectorAll('.nav-item[data-page]').forEach(btn => {
    btn.addEventListener('click', () => showPage(btn.dataset.page));
  });
});

let carouselIndex = 0;
function initEventCarousel() {
  const carousel = document.getElementById('event-carousel');
  if (!carousel) return;
  const slides = carousel.querySelectorAll('.event-slide');
  const total = slides.length;
  setInterval(() => {
    carouselIndex = (carouselIndex + 1) % total;
    carousel.style.transform = `translateX(-${carouselIndex * 100}%)`;
  }, 4000);
}

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) { page.style.display = 'block'; page.classList.add('fade-up'); }
  const navBtn = document.querySelector(`[data-page="${name}"]`);
  if (navBtn) navBtn.classList.add('active');
}

// ─── RENDER FUNCTIONS ────────────────────────────────────────────────────────
function renderTopPosts() {
  const top = MY_POSTS.filter(p => p.status === 'approved').slice(0, 4);
  document.getElementById('user-top-posts').innerHTML = top.map(p => `
    <div class="content-card glass-card">
      <img class="content-thumb" src="${p.thumb}" alt="${p.title}">
      <div class="content-card-body">
        <div class="content-title">${p.title}</div>
        <div class="content-meta">
          <span class="content-metric"><ion-icon name="eye-outline"></ion-icon> ${fmtNum(p.reach)}</span>
          <span class="content-metric" style="color:var(--accent)">🔥 ${p.fireVotes}</span>
          <span class="content-metric" style="color:var(--revival)">💜 ${p.revivalVotes}</span>
          <span class="content-metric" style="color:var(--gold)">🪙 ${p.coins}</span>
        </div>
      </div>
    </div>`).join('');
}

function renderActivity() {
  document.getElementById('user-activity').innerHTML = ACTIVITY.map(a => `
    <div class="timeline-item">
      <div class="timeline-line">
        <div class="timeline-dot" style="background:${a.color}"></div>
        <div class="timeline-connector"></div>
      </div>
      <div class="timeline-content">
        <div class="timeline-title">${a.text}</div>
        <div class="timeline-desc">${a.sub}</div>
        <div class="timeline-time">${a.time}</div>
      </div>
    </div>`).join('');
}

function renderPostsTable(filter) {
  const posts = filter === 'all' ? MY_POSTS : MY_POSTS.filter(p => p.status === filter);
  document.getElementById('posts-tbody').innerHTML = posts.map(p => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:12px;">
        <img src="${p.thumb}" style="width:52px;height:36px;border-radius:6px;object-fit:cover;">
        <div><div style="font-weight:600;font-size:13px;">${p.title}</div><div style="font-size:11px;color:var(--text-muted)">${p.place}</div></div>
      </div></td>
      <td>${statusBadge(p.status)}</td>
      <td style="font-weight:600">${p.reach ? fmtNum(p.reach) : '—'}</td>
      <td><span style="color:var(--accent)">🔥${p.fireVotes}</span> <span style="color:var(--revival);margin-left:6px;">💜${p.revivalVotes}</span></td>
      <td style="color:var(--gold);font-weight:700">🪙 ${p.coins}</td>
      <td style="color:var(--text-muted);font-size:13px">${p.posted}</td>
      <td><button class="btn btn-ghost btn-sm">View</button></td>
    </tr>`).join('');
}

function filterPosts(filter, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPostsTable(filter);
}

function renderEarnings() {
  document.getElementById('earnings-tbody').innerHTML = EARNINGS_HISTORY.map(e => `
    <tr>
      <td style="color:var(--text-muted);font-size:13px">${e.date}</td>
      <td style="font-weight:600">${e.source}</td>
      <td style="color:var(--text-secondary);font-size:13px">${e.post}</td>
      <td style="font-weight:700;color:var(--gold);font-size:15px">${e.coins}</td>
    </tr>`).join('');
}

function renderLeaderboard() {
  document.getElementById('leaderboard-tbody').innerHTML = LEADERBOARD.map(l => `
    <tr style="${l.isYou ? 'background:rgba(124,58,237,.15);outline:1px solid rgba(124,58,237,.3);' : ''}">
      <td><span style="font-size:20px;font-weight:900;color:${l.rank<=3?'var(--gold)':'var(--text-muted)'}">${l.rank <= 3 ? ['🥇','🥈','🥉'][l.rank-1] : '#'+l.rank}</span></td>
      <td><div style="display:flex;align-items:center;gap:10px;">
        <img src="${l.avatar}" style="width:36px;height:36px;border-radius:50%;border:2px solid ${l.isYou?'var(--primary)':'transparent'};">
        <span style="font-weight:${l.isYou?700:500}">${l.name} ${l.isYou?'<span class="badge-pill badge-primary" style="margin-left:6px">You</span>':''}</span>
      </div></td>
      <td style="color:var(--gold);font-weight:700;font-size:16px">🪙 ${l.coins.toLocaleString()}</td>
      <td>${l.posts}</td>
      <td style="color:var(--primary-light)">${l.reach}</td>
      <td>${l.streak}</td>
    </tr>`).join('');
}

// ─── ACTIONS ─────────────────────────────────────────────────────────────────
function handlePhotoPreview(input) {
  if (!input.files[0]) return;
  const reader = new FileReader();
  reader.onload = e => {
    const dz = document.getElementById('photo-dropzone');
    dz.style.backgroundImage = `url('${e.target.result}')`;
    dz.style.backgroundSize = 'cover';
    dz.style.backgroundPosition = 'center';
    dz.innerHTML = '<div style="background:rgba(0,0,0,.5);padding:10px 16px;border-radius:10px;font-size:14px;font-weight:600">✅ Photo selected — fill in details below</div>';
  };
  reader.readAsDataURL(input.files[0]);
}

function toggleMoodTag(btn) { btn.style.opacity = btn.style.opacity === '0.4' ? '1' : '0.4'; }

function submitPost() {
  const caption = document.getElementById('photo-caption').value;
  if (!caption) { showToast('Please add a caption', 'error'); return; }
  showToast('Post submitted for review! You\'ll earn coins once approved 🎉', 'success');
  setTimeout(() => { showPage('my-posts'); renderPostsTable('pending'); }, 1200);
}

function submitEvent() {
  showToast('Event created and sent for admin approval! 🎪', 'success');
  setTimeout(() => showPage('overview'), 1200);
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function fmtNum(n) { return n >= 1000 ? (n/1000).toFixed(1)+'k' : String(n); }

function statusBadge(s) {
  const map = { approved:'badge-success', pending:'badge-warning', rejected:'badge-error' };
  const emoji = { approved:'✅', pending:'⏳', rejected:'❌' };
  return `<span class="badge-pill ${map[s]}">${emoji[s]} ${s.charAt(0).toUpperCase()+s.slice(1)}</span>`;
}

function showToast(msg, type='info') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<ion-icon name="${type==='success'?'checkmark-circle':'information-circle'}"></ion-icon> ${msg}`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}
