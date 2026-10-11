const CAMPAIGNS = [
  { id:'c1', name:'Jazz Night — Bring Back the Velvet Era', type:'reel', status:'live', reach:142000, posts:18, budget:600, earned:1420, revivalBoost:28, daysLeft:12 },
  { id:'c2', name:'Secret Menu Photo Drop', type:'photo', status:'live', reach:68400, posts:9, budget:300, earned:840, revivalBoost:14, daysLeft:5 },
  { id:'c3', name:'Grand Reopening Event', type:'event', status:'completed', reach:74200, posts:22, budget:1200, earned:580, revivalBoost:18, daysLeft:0 },
  { id:'c4', name:'Friday Cocktail Story Series', type:'photo', status:'review', reach:0, posts:0, budget:300, earned:0, revivalBoost:0, daysLeft:0 },
  { id:'c5', name:'Behind The Bar — Staff Spotlight Reel', type:'reel', status:'review', reach:0, posts:0, budget:600, earned:0, revivalBoost:0, daysLeft:0 },
];

const PLACES_DATA = [
  { name:'Velvet Jazz Lounge', category:'nightlife', address:'42 Arts Quarter Blvd', xp:80, snapCount:445, revivalScore:93, status:'active' },
  { name:'Velvet Rooftop Bar', category:'nightlife', address:'42 Arts Quarter Blvd, Rooftop', xp:100, snapCount:89, revivalScore:56, status:'active' },
];

const REVENUE_HISTORY = [
  { date:'Oct 8', campaign:'Jazz Night Reel', reason:'Viral Bonus — 100k+ reach', amount:'+$500', status:'paid' },
  { date:'Oct 5', campaign:'Secret Menu Photo', reason:'Campaign ROI — 68k reach', amount:'+$420', status:'paid' },
  { date:'Oct 1', campaign:'Grand Reopening', reason:'Event sold out bonus', amount:'+$300', status:'paid' },
  { date:'Sep 28', campaign:'Jazz Night Reel', reason:'Week 1 performance bonus', amount:'+$920', status:'paid' },
  { date:'Sep 20', campaign:'Photo Drop Campaign', reason:'Base campaign delivery', amount:'+$700', status:'paid' },
];

const EST = {
  reel:   { posts:'~12 posts', reach:'~60k–120k', revival:'+15–25%', value:'$1,200–$3,500' },
  photo:  { posts:'~8 posts',  reach:'~30k–70k',  revival:'+8–15%',  value:'$500–$1,800' },
  event:  { posts:'~15 posts', reach:'~50k–90k',  revival:'+12–20%', value:'$800–$2,200' },
  review: { posts:'~5 posts',  reach:'~15k–40k',  revival:'+5–10%',  value:'$300–$900' },
};

document.addEventListener('DOMContentLoaded', () => {
  renderOverviewCampaigns();
  renderCampaignsList();
  renderRevenue();
  renderPlaces();
  updateRevenueEstimate();

  document.querySelectorAll('.nav-item[data-page]').forEach(btn => {
    btn.addEventListener('click', () => showPage(btn.dataset.page));
  });
});

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) { page.style.display = 'block'; page.classList.add('fade-up'); }
  const nav = document.querySelector(`[data-page="${name}"]`);
  if (nav) nav.classList.add('active');
}

function renderOverviewCampaigns() {
  document.getElementById('overview-campaigns').innerHTML = CAMPAIGNS.filter(c => c.status === 'live').map(c => buildCampaignCard(c)).join('');
}

function renderCampaignsList() {
  document.getElementById('campaigns-list').innerHTML = CAMPAIGNS.map(c => buildCampaignCard(c)).join('');
}

function buildCampaignCard(c) {
  const statusMap = { live:'badge-success', review:'badge-warning', completed:'badge-teal' };
  const statusLabel = { live:'🟢 Live', review:'⏳ Under Review', completed:'✅ Completed' };
  const typeIcon = { reel:'🎬', photo:'📸', event:'🎪', review:'⭐' };
  return `
    <div class="glass-card" style="padding:20px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;">
        <div>
          <div style="font-size:16px;font-weight:700;">${typeIcon[c.type]} ${c.name}</div>
          <div style="font-size:13px;color:var(--text-muted);margin-top:3px;">Budget: $${c.budget} · ${c.daysLeft > 0 ? c.daysLeft + ' days left' : 'Ended'}</div>
        </div>
        <span class="badge-pill ${statusMap[c.status]}">${statusLabel[c.status]}</span>
      </div>
      ${c.status !== 'review' ? `
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;text-align:center;background:var(--bg-elevated);border-radius:10px;padding:12px;margin-bottom:14px;">
        <div><div style="font-weight:700;font-size:16px;color:var(--primary-light)">${fmtNum(c.reach)}</div><div style="font-size:11px;color:var(--text-muted);margin-top:2px">Reach</div></div>
        <div><div style="font-weight:700;font-size:16px;color:var(--teal)">${c.posts}</div><div style="font-size:11px;color:var(--text-muted);margin-top:2px">Posts</div></div>
        <div><div style="font-weight:700;font-size:16px;color:#EC4899">+${c.revivalBoost}%</div><div style="font-size:11px;color:var(--text-muted);margin-top:2px">Revival Boost</div></div>
        <div><div style="font-weight:700;font-size:16px;color:var(--success)">$${c.earned}</div><div style="font-size:11px;color:var(--text-muted);margin-top:2px">Earned</div></div>
      </div>` : `<div style="background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.25);border-radius:10px;padding:12px;font-size:13px;color:var(--text-secondary);margin-bottom:14px;">⏳ Campaign under admin review. Approval typically within 24 hours.</div>`}
      <div style="display:flex;gap:10px;">
        <button class="btn btn-ghost btn-sm">📊 Analytics</button>
        ${c.status === 'live' ? '<button class="btn btn-danger btn-sm">⏸ Pause</button>' : ''}
      </div>
    </div>`;
}

function renderRevenue() {
  document.getElementById('revenue-tbody').innerHTML = REVENUE_HISTORY.map(r => `
    <tr>
      <td style="color:var(--text-muted);font-size:13px">${r.date}</td>
      <td style="font-weight:600">${r.campaign}</td>
      <td style="font-size:13px;color:var(--text-secondary)">${r.reason}</td>
      <td style="font-weight:700;color:var(--success);font-size:15px">${r.amount}</td>
      <td><span class="badge-pill badge-success">✅ ${r.status}</span></td>
    </tr>`).join('');
}

function renderPlaces() {
  document.getElementById('places-list').innerHTML = PLACES_DATA.map(p => `
    <div class="glass-card" style="padding:18px;display:flex;gap:20px;align-items:center;">
      <div style="width:48px;height:48px;border-radius:12px;background:rgba(6,182,212,.15);border:1px solid rgba(6,182,212,.3);display:flex;justify-content:center;align-items:center;font-size:22px;flex-shrink:0;">
        <ion-icon name="location-outline" style="color:var(--teal)"></ion-icon>
      </div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:16px">${p.name}</div>
        <div style="font-size:13px;color:var(--text-muted);margin-top:2px">${p.address} · ${p.category}</div>
        <div style="display:flex;gap:12px;margin-top:8px;font-size:13px;">
          <span style="color:var(--gold)">+${p.xp} XP</span>
          <span style="color:var(--teal)">📸 ${p.snapCount} snaps</span>
          <span style="color:#EC4899">💜 ${p.revivalScore}% revival</span>
        </div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-ghost btn-sm">✏️ Edit</button>
        <button class="btn btn-danger btn-sm">Deactivate</button>
      </div>
    </div>`).join('');
}

function updateRevenueEstimate() {
  const type = document.getElementById('camp-type')?.value || 'reel';
  const e = EST[type];
  if (!e) return;
  document.getElementById('est-posts').textContent = e.posts;
  document.getElementById('est-reach-biz').textContent = e.reach;
  document.getElementById('est-revival').textContent = e.revival;
  document.getElementById('est-value').textContent = e.value;
}

function selectTier(tier, el) {
  ['tier-basic','tier-pro','tier-viral'].forEach(id => {
    const t = document.getElementById(id);
    t.style.border = '2px solid var(--glass-border)';
    t.style.background = 'var(--bg-elevated)';
  });
  el.style.border = '2px solid var(--primary)';
  el.style.background = 'var(--primary-glow)';
}

function submitCampaign() {
  const name = document.getElementById('camp-name').value;
  if (!name) { showToast('Please enter a campaign name', 'error'); return; }
  showToast('Campaign submitted for admin review! You\'ll be notified within 24h 🚀', 'success');
  setTimeout(() => showPage('campaigns'), 1200);
}

function fmtNum(n) { return n >= 1000 ? (n/1000).toFixed(1)+'k' : String(n); }

function showToast(msg, type='info') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<ion-icon name="${type==='success'?'checkmark-circle':'information-circle'}"></ion-icon> ${msg}`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}
