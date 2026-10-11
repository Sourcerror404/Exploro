const SNAPS_PENDING = [
  { id:'s1', user:'nova_lens', avatar:'https://i.pravatar.cc/150?img=5', place:'The Grand Lighthouse', image:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', caption:'Sunrise magic from the top 🌅 This place needs more love!', submitted:'2h ago' },
  { id:'s2', user:'urban_hikr', avatar:'https://i.pravatar.cc/150?img=68', place:'Emerald Forest Trail', image:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400', caption:'Morning hike goals 🌿', submitted:'4h ago' },
  { id:'s3', user:'astro_ali', avatar:'https://i.pravatar.cc/150?img=12', place:'Neon Cyber Cafe', image:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400', caption:'Late night coding sessions hit different here ✨', submitted:'6h ago' },
  { id:'s4', user:'chef_kento', avatar:'https://i.pravatar.cc/150?img=33', place:'Underground Sushi Bar', image:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400', caption:'The 30-year family recipe, still going strong 🍣', submitted:'8h ago' },
  { id:'s5', user:'maya_explores', avatar:'https://i.pravatar.cc/150?img=47', place:'Velvet Jazz Lounge', image:'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400', caption:'If you know, you know 🎷', submitted:'10h ago' },
  { id:'s6', user:'luna_shots', avatar:'https://i.pravatar.cc/150?img=22', place:'Starlight Observatory', image:'https://images.unsplash.com/photo-1532055745199-a9a3b2b46761?w=400', caption:'Jupiter ring was so clear tonight!!!', submitted:'12h ago' },
  { id:'s7', user:'road_tripr', avatar:'https://i.pravatar.cc/150?img=41', place:'Botanical Wonder Garden', image:'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400', caption:'Hidden in plain sight, right in the city 🌸', submitted:'14h ago' },
];

const CAMPAIGNS_REVIEW = [
  { id:'cr1', biz:'Velvet Jazz Lounge', owner:'Velvet Owner', type:'reel', name:'Behind The Bar — Staff Spotlight Reel', brief:'Capture the bartenders and musicians in action. Moody, cinematic, 60s vibe. Show why Velvet is a cultural institution.', budget:600, tier:'Pro (🪙500/post)', submitted:'3h ago' },
  { id:'cr2', biz:'Neon Cyber Cafe', owner:'Cyber Owner', type:'photo', name:'Neon After Dark — Photo Campaign', brief:'Capture the neon aesthetic of the cafe at night. Focus on the lighting, the coffee drinks, the laptop culture. Cyberpunk vibes only.', budget:300, tier:'Basic (🪙200/post)', submitted:'1d ago' },
];

const USERS_DATA = [
  { name:'nova_lens', avatar:'https://i.pravatar.cc/150?img=5', role:'Explorer', coins:12400, posts:48, joined:'Mar 2026', status:'active' },
  { name:'urban_hikr', avatar:'https://i.pravatar.cc/150?img=68', role:'Explorer', coins:9800, posts:36, joined:'Apr 2026', status:'active' },
  { name:'astro_ali', avatar:'https://i.pravatar.cc/150?img=12', role:'Explorer', coins:7650, posts:29, joined:'Feb 2026', status:'active' },
  { name:'maya_explores', avatar:'https://i.pravatar.cc/150?img=47', role:'Explorer', coins:6200, posts:31, joined:'May 2026', status:'active' },
  { name:'velvet_biz', avatar:'https://i.pravatar.cc/150?img=60', role:'Business', coins:0, posts:0, joined:'Jan 2026', status:'verified' },
  { name:'spammy_user99', avatar:'https://i.pravatar.cc/150?img=99', role:'Explorer', coins:120, posts:4, joined:'Oct 2026', status:'flagged' },
];

const BUSINESSES_DATA = [
  { name:'Velvet Jazz Lounge', owner:'James Rivera', type:'Nightlife', location:'Midtown Arts Quarter', joined:'Jan 2026', revenue:'$2,840', status:'verified' },
  { name:'Underground Sushi Bar', owner:'Kenji Tanaka', type:'Restaurant', location:'Sector 7', joined:'Mar 2026', revenue:'$1,200', status:'verified' },
  { name:'Neon Cyber Cafe', owner:'Alex Chen', type:'Cafe', location:'Downtown', joined:'Sep 2026', revenue:'$0', status:'pending' },
  { name:'Starlight Tours', owner:'Dr. Amara Singh', type:'Attraction', location:'Mount Horizon', joined:'Oct 2026', revenue:'$0', status:'pending' },
  { name:'Emerald Outdoor Co.', owner:'Sarah Park', type:'Nature', location:'West Valley', joined:'Oct 2026', revenue:'$0', status:'pending' },
];

const PAYOUTS_DATA = [
  { recipient:'nova_lens', type:'User', reason:'Monthly coin redemption', amount:'$124.00', status:'pending' },
  { recipient:'urban_hikr', type:'User', reason:'Viral bonus payout', amount:'$98.00', status:'pending' },
  { recipient:'Velvet Jazz Lounge', type:'Business', reason:'Campaign ROI payout', amount:'$2,840.00', status:'pending' },
  { recipient:'Underground Sushi Bar', type:'Business', reason:'Revival campaign bonus', amount:'$1,200.00', status:'pending' },
  { recipient:'astro_ali', type:'User', reason:'Monthly coin redemption', amount:'$76.50', status:'paid' },
  { recipient:'maya_explores', type:'User', reason:'Event hosting bonus', amount:'$62.00', status:'paid' },
];

const TOP_PLACES = [
  { name:'Velvet Jazz Lounge', snaps:445, revival:93, reach:'284k', status:'Trending 🔥' },
  { name:'Starlight Observatory', snaps:312, revival:71, reach:'145k', status:'Rising 📈' },
  { name:'Underground Sushi Bar', snaps:234, revival:87, reach:'89k', status:'Trending 🔥' },
  { name:'The Grand Lighthouse', snaps:189, revival:62, reach:'78k', status:'Active ✅' },
  { name:'Neon Cyber Cafe', snaps:102, revival:45, reach:'42k', status:'Active ✅' },
];

const ACTIVITY = [
  { icon:'flame', color:'var(--accent)', text:'Velvet Jazz Lounge hit 93% revival', sub:'Community drove it viral 🎷', time:'15m ago' },
  { icon:'cash-outline', color:'var(--success)', text:'$2,840 payout pending for Velvet', sub:'Approved after campaign review', time:'2h ago' },
  { icon:'person-add-outline', color:'var(--primary)', text:'340 new users this week', sub:'Highest weekly growth since launch', time:'5h ago' },
  { icon:'megaphone-outline', color:'var(--teal)', text:'5 campaigns went live today', sub:'Combined budget: $3,000', time:'8h ago' },
];

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderTopPlaces();
  renderActivity();
  renderMod('all');
  renderCampaignReview();
  renderUsers();
  renderBusinesses();
  renderPayouts();

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

// ─── RENDER ──────────────────────────────────────────────────────────────────
function renderTopPlaces() {
  document.getElementById('top-places-tbody').innerHTML = TOP_PLACES.map((p, i) => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:18px;font-weight:900;color:${i<3?'var(--gold)':'var(--text-muted)'}">${i+1}</span>
        <span style="font-weight:600">${p.name}</span>
      </div></td>
      <td style="color:var(--teal);font-weight:700">📸 ${p.snaps}</td>
      <td>
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="flex:1;height:6px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden;min-width:80px;">
            <div style="width:${p.revival}%;height:100%;background:linear-gradient(90deg,#EC4899,#F43F5E);border-radius:3px;"></div>
          </div>
          <span style="font-weight:700;color:#EC4899;font-size:13px">${p.revival}%</span>
        </div>
      </td>
      <td style="color:var(--primary-light);font-weight:600">${p.reach}</td>
      <td>${p.status.includes('Trending') ? '<span class="badge-pill badge-error">'+p.status+'</span>' : '<span class="badge-pill badge-success">'+p.status+'</span>'}</td>
    </tr>`).join('');
}

function renderActivity() {
  document.getElementById('admin-activity').innerHTML = ACTIVITY.map(a => `
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

let activeMod = {};
function renderMod(filter) {
  const list = document.getElementById('mod-list');
  list.innerHTML = SNAPS_PENDING.map(s => {
    const action = activeMod[s.id];
    return `
    <div class="glass-card" style="padding:16px;display:flex;gap:16px;align-items:flex-start;" id="mod-${s.id}">
      <img src="${s.image}" style="width:140px;height:100px;border-radius:10px;object-fit:cover;flex-shrink:0;">
      <div style="flex:1;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <img src="${s.avatar}" style="width:28px;height:28px;border-radius:50%;">
            <span style="font-weight:700;font-size:14px;">@${s.user}</span>
            <span style="font-size:12px;color:var(--text-muted)">→ ${s.place}</span>
          </div>
          <span style="font-size:12px;color:var(--text-muted)">${s.submitted}</span>
        </div>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">"${s.caption}"</p>
        ${action ? `<span class="badge-pill ${action==='approved'?'badge-success':'badge-error'}">${action==='approved'?'✅ Approved':'❌ Rejected'}</span>` : `
        <div style="display:flex;gap:8px;">
          <button class="btn btn-success btn-sm" onclick="moderateSnap('${s.id}','approved')"><ion-icon name="checkmark-outline"></ion-icon> Approve (+100 XP)</button>
          <button class="btn btn-danger btn-sm" onclick="moderateSnap('${s.id}','rejected')"><ion-icon name="close-outline"></ion-icon> Reject</button>
          <button class="btn btn-ghost btn-sm"><ion-icon name="flag-outline"></ion-icon> Flag</button>
        </div>`}
      </div>
    </div>`;
  }).join('');
}

function filterMod(filter, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMod(filter);
}

function moderateSnap(id, action) {
  activeMod[id] = action;
  renderMod('all');
  showToast(`Snap ${action}! ${action==='approved'?'User earned +100 XP 🎉':'Notification sent to user.'}`, action==='approved'?'success':'info');
}

function renderCampaignReview() {
  const typeIcon = { reel:'🎬', photo:'📸', event:'🎪', review:'⭐' };
  document.getElementById('campaign-review-list').innerHTML = CAMPAIGNS_REVIEW.map(c => `
    <div class="glass-card" style="padding:20px;" id="camp-rev-${c.id}">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;">
        <div>
          <div style="font-size:16px;font-weight:700;">${typeIcon[c.type]} ${c.name}</div>
          <div style="font-size:13px;color:var(--text-muted);margin-top:3px;">${c.biz} · Budget: $${c.budget} · Creator Tier: ${c.tier}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">Submitted ${c.submitted}</div>
        </div>
        <span class="badge-pill badge-warning">⏳ Pending</span>
      </div>
      <div style="background:var(--bg-elevated);border-radius:10px;padding:14px;margin-bottom:14px;font-size:13px;color:var(--text-secondary);">
        <strong style="color:var(--text-primary)">Brief:</strong> ${c.brief}
      </div>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-success btn-sm" onclick="approveCampaign('${c.id}')"><ion-icon name="checkmark-outline"></ion-icon> Approve Campaign</button>
        <button class="btn btn-danger btn-sm" onclick="rejectCampaign('${c.id}')"><ion-icon name="close-outline"></ion-icon> Reject</button>
        <button class="btn btn-ghost btn-sm"><ion-icon name="create-outline"></ion-icon> Request Changes</button>
      </div>
    </div>`).join('');
}

function approveCampaign(id) {
  const el = document.getElementById('camp-rev-' + id);
  el.style.opacity = '.6';
  el.innerHTML += '<div style="margin-top:10px;"><span class="badge-pill badge-success">✅ Campaign Approved & Live</span></div>';
  showToast('Campaign approved! Business has been notified 🚀', 'success');
}

function rejectCampaign(id) {
  const el = document.getElementById('camp-rev-' + id);
  el.style.opacity = '.6';
  el.innerHTML += '<div style="margin-top:10px;"><span class="badge-pill badge-error">❌ Campaign Rejected</span></div>';
  showToast('Campaign rejected. Business has been notified.', 'info');
}

function renderUsers() {
  document.getElementById('users-tbody').innerHTML = USERS_DATA.map(u => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:10px;">
        <img src="${u.avatar}" style="width:34px;height:34px;border-radius:50%;border:2px solid var(--glass-border);">
        <span style="font-weight:600">@${u.name}</span>
      </div></td>
      <td><span class="badge-pill ${u.role==='Business'?'badge-warning':'badge-primary'}">${u.role==='Business'?'🏢':'🧭'} ${u.role}</span></td>
      <td style="color:var(--gold);font-weight:700">🪙 ${u.coins.toLocaleString()}</td>
      <td>${u.posts}</td>
      <td style="color:var(--text-muted);font-size:13px">${u.joined}</td>
      <td>${userStatusBadge(u.status)}</td>
      <td><div style="display:flex;gap:6px;">
        <button class="btn btn-ghost btn-sm">View</button>
        ${u.status==='flagged'?'<button class="btn btn-danger btn-sm" onclick="showToast(\'User banned\',\'info\')">Ban</button>':''}
      </div></td>
    </tr>`).join('');
}

function renderBusinesses() {
  document.getElementById('businesses-list').innerHTML = BUSINESSES_DATA.map(b => `
    <div class="glass-card" style="padding:18px;display:flex;gap:16px;align-items:center;">
      <div style="width:48px;height:48px;border-radius:12px;background:rgba(249,115,22,.15);border:1px solid rgba(249,115,22,.3);display:flex;justify-content:center;align-items:center;font-size:22px;flex-shrink:0;"><ion-icon name="business-outline" style="color:var(--accent)"></ion-icon></div>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:16px">${b.name}</div>
        <div style="font-size:13px;color:var(--text-muted);margin-top:2px">${b.owner} · ${b.type} · ${b.location}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:2px">Joined ${b.joined} · Revenue: ${b.revenue}</div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        ${bizStatusBadge(b.status)}
        ${b.status==='pending'?`<button class="btn btn-success btn-sm" onclick="verifyBusiness(this)"><ion-icon name="checkmark-outline"></ion-icon> Verify</button>`:''}
        <button class="btn btn-ghost btn-sm">View</button>
      </div>
    </div>`).join('');
}

function verifyBusiness(btn) {
  btn.parentElement.querySelector('.badge-pill').className = 'badge-pill badge-success';
  btn.parentElement.querySelector('.badge-pill').textContent = '✅ Verified';
  btn.remove();
  showToast('Business verified! They can now run campaigns.', 'success');
}

function renderPayouts() {
  document.getElementById('payouts-tbody').innerHTML = PAYOUTS_DATA.map((p, i) => `
    <tr id="payout-${i}">
      <td style="font-weight:600">${p.recipient}</td>
      <td><span class="badge-pill ${p.type==='Business'?'badge-warning':'badge-primary'}">${p.type}</span></td>
      <td style="font-size:13px;color:var(--text-secondary)">${p.reason}</td>
      <td style="font-weight:700;color:var(--success);font-size:15px">${p.amount}</td>
      <td>${p.status==='pending'?'<span class="badge-pill badge-warning">⏳ Pending</span>':'<span class="badge-pill badge-success">✅ Paid</span>'}</td>
      <td>${p.status==='pending'?`<button class="btn btn-success btn-sm" onclick="approvePayout(${i})">Approve</button>`:'—'}</td>
    </tr>`).join('');
}

function approvePayout(i) {
  const row = document.getElementById('payout-' + i);
  row.cells[4].innerHTML = '<span class="badge-pill badge-success">✅ Paid</span>';
  row.cells[5].innerHTML = '—';
  showToast(`Payout of ${PAYOUTS_DATA[i].amount} approved for ${PAYOUTS_DATA[i].recipient}!`, 'success');
}

function approveAllPayouts() {
  PAYOUTS_DATA.forEach((_, i) => {
    const row = document.getElementById('payout-' + i);
    if (row) {
      row.cells[4].innerHTML = '<span class="badge-pill badge-success">✅ Paid</span>';
      row.cells[5].innerHTML = '—';
    }
  });
  showToast('All pending payouts approved! $12,840 processed. 💸', 'success');
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function userStatusBadge(s) {
  const map = { active:'badge-success', verified:'badge-teal', flagged:'badge-error' };
  const label = { active:'🟢 Active', verified:'✅ Verified', flagged:'🚩 Flagged' };
  return `<span class="badge-pill ${map[s]}">${label[s]}</span>`;
}

function bizStatusBadge(s) {
  if (s === 'verified') return '<span class="badge-pill badge-success">✅ Verified</span>';
  return '<span class="badge-pill badge-warning">⏳ Pending</span>';
}

function showToast(msg, type='info') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<ion-icon name="${type==='success'?'checkmark-circle':type==='error'?'close-circle':'information-circle'}"></ion-icon> ${msg}`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}
