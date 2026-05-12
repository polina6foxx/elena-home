// Map tab switching
document.querySelectorAll('.map-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.map-view').forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('map-' + btn.dataset.map).classList.add('active');
  });
});

// Region click handlers
document.querySelectorAll('.region-group').forEach(group => {
  group.addEventListener('click', () => {
    const region = group.dataset.region;
    const title = group.getAttribute('title');

    // Determine which panel to update
    const mapView = group.closest('.map-view');
    const panelId = 'panel-' + mapView.id.replace('map-', '');
    const panel = document.getElementById(panelId);

    // Toggle selection highlight
    mapView.querySelectorAll('.region').forEach(r => r.classList.remove('selected'));
    const regionEl = group.querySelector('.region');
    if (regionEl) regionEl.classList.add('selected');

    showRegionWines(region, title, panel);
  });
});

function getColorBadge(wine) {
  if (wine.type === 'шампанское') return { cls: 'badge-champagne', label: 'Шампанское' };
  if (wine.type === 'десертное') return { cls: 'badge-dessert', label: 'Десертное' };
  if (wine.type === 'крепленое') return { cls: 'badge-fortified', label: 'Крепленое' };
  if (wine.type === 'игристое') return { cls: 'badge-sparkling', label: 'Игристое' };
  if (wine.color === 'красное') return { cls: 'badge-red', label: 'Красное' };
  if (wine.color === 'розовое') return { cls: 'badge-rose', label: 'Розовое' };
  if (wine.color === 'янтарное') return { cls: 'badge-amber', label: 'Янтарное' };
  return { cls: 'badge-white', label: 'Белое' };
}

function showRegionWines(region, title, panel) {
  const wines = WINES.filter(w => w.region === region);

  if (!wines.length) {
    panel.innerHTML = `<div class="panel-hint">В этом регионе пока нет позиций в карте</div>`;
    return;
  }

  // Group by color
  const groups = {};
  const order = ['игристое', 'шампанское', 'белое', 'янтарное', 'розовое', 'красное', 'десертное', 'крепленое'];
  wines.forEach(w => {
    const key = w.type === 'тихое' ? w.color : w.type;
    if (!groups[key]) groups[key] = [];
    groups[key].push(w);
  });

  const categoryNames = {
    'игристое': 'Игристые', 'шампанское': 'Шампанское',
    'белое': 'Белые', 'янтарное': 'Янтарные',
    'розовое': 'Розовые', 'красное': 'Красные',
    'десертное': 'Десертные', 'крепленое': 'Крепленые'
  };

  let html = `<div class="panel-region-name">${title}<span class="panel-count">${wines.length} поз.</span></div>`;

  order.forEach(key => {
    if (!groups[key]) return;
    html += `<div class="wine-category">
      <div class="wine-category-title">${categoryNames[key] || key}</div>`;
    groups[key].forEach(wine => {
      const badge = getColorBadge(wine);
      const priceHtml = wine.glassPrice
        ? `<div class="wine-price"><strong>${wine.bottlePrice.toLocaleString('ru')} ₽</strong> / бок. ${wine.glassPrice.toLocaleString('ru')} ₽</div>`
        : `<div class="wine-price"><strong>${wine.bottlePrice.toLocaleString('ru')} ₽</strong></div>`;
      const noteHtml = wine.note ? `<span class="wine-note">${wine.note}</span>` : '';
      html += `
        <div class="wine-card" onclick="openModal(${JSON.stringify(wine).replace(/"/g, '&quot;')})">
          <div class="wine-card-name">${wine.name}</div>
          <div class="wine-card-meta">
            <span class="wine-badge ${badge.cls}">${badge.label}</span>
            ${noteHtml}
            ${priceHtml}
          </div>
        </div>`;
    });
    html += `</div>`;
  });

  panel.innerHTML = html;
}

// Modal
function openModal(wine) {
  const badge = getColorBadge(wine);
  const bottleStr = wine.bottlePrice.toLocaleString('ru') + ' ₽' + (wine.note && wine.note.includes('0.375') ? ' (0.375 л)' : ' (0.75 л)');
  const glassRow = wine.glassPrice
    ? `<div class="modal-row"><span class="label">Бокал 0,15 л</span><span class="value">${wine.glassPrice.toLocaleString('ru')} ₽</span></div>`
    : '';

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-wine-name">${wine.name}</div>
    <div class="modal-region">${wine.regionLabel}</div>
    <div class="modal-row"><span class="label">Категория</span><span class="value"><span class="wine-badge ${badge.cls}">${badge.label}</span></span></div>
    ${wine.color !== wine.type ? `<div class="modal-row"><span class="label">Цвет</span><span class="value">${wine.color.charAt(0).toUpperCase() + wine.color.slice(1)}</span></div>` : ''}
    ${wine.note ? `<div class="modal-row"><span class="label">Примечание</span><span class="value">${wine.note}</span></div>` : ''}
    <div class="modal-row"><span class="label">Бутылка</span><span class="value">${bottleStr}</span></div>
    ${glassRow}
    <div class="modal-price">${wine.bottlePrice.toLocaleString('ru')} ₽</div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── SEARCH ──
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (q.length < 2) { searchResults.classList.remove('visible'); return; }

  const matches = WINES.filter(w =>
    w.name.toLowerCase().includes(q) ||
    w.regionLabel.toLowerCase().includes(q) ||
    w.color.toLowerCase().includes(q) ||
    w.type.toLowerCase().includes(q)
  ).slice(0, 12);

  if (!matches.length) { searchResults.classList.remove('visible'); return; }

  searchResults.innerHTML = matches.map(w => {
    const badge = getColorBadge(w);
    return `<div class="search-item" onclick="openModal(${JSON.stringify(w).replace(/"/g, '&quot;')})">
      <div class="s-name">${highlight(w.name, q)}</div>
      <div class="s-meta">${w.regionLabel} · <span class="wine-badge ${badge.cls}">${badge.label}</span> · ${w.bottlePrice.toLocaleString('ru')} ₽</div>
    </div>`;
  }).join('');

  searchResults.classList.add('visible');
});

function highlight(text, q) {
  const idx = text.toLowerCase().indexOf(q);
  if (idx === -1) return text;
  return text.slice(0, idx) + `<mark style="background:#ffd54f;color:#111;border-radius:2px">${text.slice(idx, idx + q.length)}</mark>` + text.slice(idx + q.length);
}

document.addEventListener('click', e => {
  if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
    searchResults.classList.remove('visible');
  }
});
