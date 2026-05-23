/* ── App Module ── */

/* Tab switching */
document.getElementById('tabNav').addEventListener('click', e => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;

  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));

  btn.classList.add('active');
  const tab = btn.dataset.tab;
  document.getElementById('tab-' + tab).classList.add('active');

  /* Lazy-init charts when their tab first becomes visible */
  if (tab === 'overview' && !window._mktChartDone) {
    window._mktChartDone = true;
    initCharts();
  }
  if (tab === 'segments' && !window._segChartDone) {
    window._segChartDone = true;
    initCharts();
  }
  if (tab === 'funding' && !window._fundChartDone) {
    window._fundChartDone = true;
    initCharts();
  }
});

/* ── Build segment bars ── */
function buildSegmentBars() {
  const container = document.getElementById('segBars');
  if (!container) return;

  /* Header row */
  const hdr = document.createElement('div');
  hdr.style.cssText = 'display:grid;grid-template-columns:130px 1fr 80px 70px;gap:12px;font-size:11px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:#888780;margin-bottom:8px;padding-bottom:6px;border-bottom:0.5px solid #d3d1c7;';
  hdr.innerHTML = '<span>Segment</span><span>Market share</span><span style="text-align:right">Share %</span><span style="text-align:center">CAGR</span>';
  container.appendChild(hdr);

  DATA.segments.forEach(seg => {
    const row = document.createElement('div');
    row.className = 'seg-row';
    row.innerHTML = `
      <span class="seg-name">${seg.name}</span>
      <div class="seg-bar-bg">
        <div class="seg-bar" style="width:${seg.share}%;background:${seg.color};"></div>
      </div>
      <span class="seg-share">${seg.share.toFixed(1)}%</span>
      <span class="seg-cagr">${seg.cagr}</span>
    `;
    container.appendChild(row);
  });
}

/* ── Build players grid ── */
function buildPlayers() {
  const grid = document.getElementById('playersGrid');
  if (!grid) return;

  DATA.players.forEach(p => {
    const card = document.createElement('div');
    card.className = 'player-card';

    const factsHtml = p.facts.map(f =>
      `<div class="player-fact"><span>${f.label}</span><strong>${f.value}</strong></div>`
    ).join('');

    card.innerHTML = `
      <div class="player-header">
        <div class="player-name">${p.name}</div>
        <div class="player-val">${p.valuation}</div>
      </div>
      <div><span class="player-cat">${p.category}</span></div>
      <div class="player-facts">${factsHtml}</div>
      <div class="player-insight">${p.insight}</div>
    `;
    grid.appendChild(card);
  });
}

/* ── Build disruption themes ── */
function buildThemes() {
  const list = document.getElementById('themesList');
  if (!list) return;

  const convMap = { high: 'tag-high', medium: 'tag-med', watch: 'tag-watch' };
  const convLabel = { high: 'High conviction', medium: 'Medium conviction', watch: 'Watch' };

  DATA.themes.forEach(t => {
    const card = document.createElement('div');
    card.className = 'theme-card';

    const signals = t.signals.map(s =>
      `<span class="signal-pill">${s}</span>`
    ).join('');

    card.innerHTML = `
      <div class="theme-left">
        <div class="theme-title">${t.title}</div>
        <div class="theme-body">${t.body}</div>
        <div class="theme-signals">${signals}</div>
      </div>
      <div class="theme-meta">
        <span class="horizon-label">Horizon</span>
        <span class="tag tag-med" style="display:inline-block;margin-bottom:6px;">${t.horizon}</span>
        <br/>
        <span class="horizon-label">Conviction</span>
        <span class="tag ${convMap[t.conviction]}" style="display:inline-block;">${convLabel[t.conviction]}</span>
      </div>
    `;
    list.appendChild(card);
  });
}

/* ── Build strategy cards ── */
function buildStrategy() {
  const grid = document.getElementById('stratGrid');
  if (!grid) return;

  DATA.stratQuestions.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'strat-card';
    card.innerHTML = `
      <div class="strat-num">${i + 1}</div>
      <div class="strat-content">
        <div class="strat-q">${s.q}</div>
        <div class="strat-body">${s.body}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── Build risk matrix ── */
function buildRisks() {
  const matrix = document.getElementById('riskMatrix');
  if (!matrix) return;

  DATA.risks.forEach(r => {
    const card = document.createElement('div');
    card.className = `risk-card ${r.level}`;
    card.innerHTML = `
      <div class="risk-title">${r.title}</div>
      <div class="risk-body">${r.body}</div>
      <span class="risk-level ${r.level}">${r.level.charAt(0).toUpperCase() + r.level.slice(1)} risk</span>
    `;
    matrix.appendChild(card);
  });
}

/* ── Chart legends (custom HTML) ── */
function buildLegends() {
  const legends = [
    {
      canvasId: 'mktChart',
      insertAfterId: 'mktChart',
      items: [
        { color: '#185FA5', label: 'Actual market size ($B)' },
        { color: '#1D9E75', label: 'Projected market size ($B)', dashed: true }
      ]
    },
    {
      canvasId: 'segChart',
      insertAfterId: 'segChart',
      items: [
        { color: '#185FA5', label: '2025 revenue ($B)' },
        { color: '#1D9E75', label: '2030 projected revenue ($B)' }
      ]
    },
    {
      canvasId: 'dealChart',
      insertAfterId: 'dealChart',
      items: [
        { color: '#B4B2A9', label: '2015–2020 deal share (%)' },
        { color: '#185FA5', label: '2021–H1 2025 deal share (%)' }
      ]
    },
    {
      canvasId: 'fundChart',
      insertAfterId: 'fundChart',
      items: [
        { color: '#185FA5', label: 'Total funding ($B)' },
        { color: '#1D9E75', label: 'Early-stage ($B)' }
      ]
    }
  ];

  legends.forEach(({ canvasId, insertAfterId, items }) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const legend = document.createElement('div');
    legend.style.cssText = 'display:flex;flex-wrap:wrap;gap:14px;margin-top:10px;font-size:12px;color:#5f5e5a;';
    legend.innerHTML = items.map(item => `
      <span style="display:flex;align-items:center;gap:6px;">
        <span style="
          width:14px;height:8px;border-radius:2px;
          background:${item.color};
          display:inline-block;
          ${item.dashed ? `background:repeating-linear-gradient(90deg,${item.color} 0,${item.color} 4px,transparent 4px,transparent 8px);` : ''}
        "></span>
        ${item.label}
      </span>
    `).join('');
    canvas.closest('.chart-container').appendChild(legend);
  });
}

/* ── Init ── */
function init() {
  buildSegmentBars();
  buildPlayers();
  buildThemes();
  buildStrategy();
  buildRisks();

  /* Init overview charts immediately (it's the default visible tab) */
  initCharts();
  window._mktChartDone = true;
  window._segChartDone = true;
  window._fundChartDone = true;

  buildLegends();
}

document.addEventListener('DOMContentLoaded', init);
