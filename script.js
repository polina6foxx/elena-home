/* ══════════════════════════════════════════════
   ELENA HOME — JavaScript
   ══════════════════════════════════════════════ */

// ── Header scroll behaviour ──────────────────
const header = document.getElementById('header');
const logoImg = document.getElementById('logoImg');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  header.classList.toggle('scrolled', scrolled);
  if (logoImg) {
    logoImg.src = scrolled ? 'images/logoblack.png' : 'images/onlylogo.png';
  }
}, { passive: true });

// ── Mobile nav ───────────────────────────────
const burger   = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

function closeMobileNav() {
  mobileNav.classList.remove('open');
}

// ── Modal ────────────────────────────────────
const modalOverlay = document.getElementById('modalOverlay');

function openModal() {
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape / navigate gallery with arrow keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeProjModal();
  }
  if (projModalEl.classList.contains('open')) {
    if (e.key === 'ArrowLeft') {
      if (pgCurrent > 0) { pgCurrent--; updateProjGallery(true); }
    } else if (e.key === 'ArrowRight') {
      if (pgCurrent < pgImages.length - 1) { pgCurrent++; updateProjGallery(true); }
    }
  }
});

// ── Telegram notify ───────────────────────────
const TG_TOKEN   = '8755399723:AAEaUGKH7KbwNidW9MqqLabXWQdQNeE-_RI';
const TG_CHAT_ID = '467254637';

async function sendToFormspree(formEl) {
  const data = new FormData(formEl);
  const name    = data.get('name')    || '';
  const phone   = data.get('phone')   || '';
  const service = data.get('service') || '';
  const message = data.get('message') || '';

  const lines = ['<b>Новая заявка с сайта 🏠</b>', ''];
  lines.push(`👤 <b>Имя:</b> ${name}`);
  lines.push(`📞 <b>Телефон:</b> ${phone}`);
  if (service) lines.push(`🛠 <b>Услуга:</b> ${service}`);
  if (message) lines.push(`💬 <b>Сообщение:</b> ${message}`);

  try {
    const res  = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ chat_id: TG_CHAT_ID, text: lines.join('\n'), parse_mode: 'HTML' })
    });
    const json = await res.json();
    return json.ok === true;
  } catch {
    return false;
  }
}

// ── Toast ────────────────────────────────────
const toast     = document.getElementById('toast');
const toastText = document.getElementById('toast').querySelector('.toast__text');
const toastIcon = document.getElementById('toast').querySelector('.toast__icon');

function showToast(message, isError = false) {
  toastText.textContent = message;
  toast.classList.toggle('toast--error', isError);
  if (isError) {
    toastIcon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>';
  } else {
    toastIcon.innerHTML = '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>';
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 5000);
}

// ── Form handlers ────────────────────────────
async function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('ctaSubmitBtn');
  const origText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Отправка…';

  const ok = await sendToFormspree(e.target);

  btn.disabled = false;
  btn.textContent = origText;

  if (ok) {
    showToast('Заявка отправлена. Мы свяжемся с вами в ближайшее время');
    e.target.reset();
  } else {
    showToast('Не удалось отправить заявку. Попробуйте ещё раз', true);
  }
}

async function handleModalSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('modalSubmitBtn');
  const origText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Отправка…';

  const ok = await sendToFormspree(e.target);

  btn.disabled = false;
  btn.textContent = origText;

  if (ok) {
    closeModal();
    showToast('Заявка отправлена. Мы свяжемся с вами в ближайшее время');
    e.target.reset();
  } else {
    showToast('Не удалось отправить заявку. Попробуйте ещё раз', true);
  }
}

// ── Project gallery modal ─────────────────────
const projectsData = [
  {
    type: 'Подготовка квартиры под сдачу',
    title: '2-к квартира',
    desc: 'г. Стерлитамак · Декабрь 2024',
    images: ['images/proekt/1/front.jpg','images/proekt/1/two.jpg','images/proekt/1/three.jpg','images/proekt/1/four.jpg']
  },
  {
    type: 'Флиппинг под перепродажу',
    title: 'Студия',
    desc: 'г. Уфа · Июнь 2025',
    images: ['images/proekt/2/front.jpg','images/proekt/2/two.jpg','images/proekt/2/three.jpg']
  },
  {
    type: 'Долгосрочная аренда',
    title: '3-к квартира',
    desc: 'г. Стерлитамак · Октябрь 2025',
    images: ['images/proekt/3/front.jpg','images/proekt/3/two.jpg','images/proekt/3/three.jpg','images/proekt/3/four.jpg','images/proekt/3/five.jpg','images/proekt/3/six.jpg']
  },
  {
    type: 'Долгосрочная аренда',
    title: '2-к квартира',
    desc: 'г. Москва · Январь 2026',
    images: ['images/proekt/4/front.jpg','images/proekt/4/two.jpg','images/proekt/4/three.jpg','images/proekt/4/four.jpg','images/proekt/4/five.jpg','images/proekt/4/six.jpg','images/proekt/4/seven.jpg']
  },
  {
    type: 'Перепродажа',
    title: 'Ремонт под ключ',
    desc: 'г. Темрюк · Ноябрь 2025',
    images: ['images/proekt/5/front.jpg','images/proekt/5/two.jpg','images/proekt/5/three.jpg','images/proekt/5/four.jpg']
  },
  {
    type: 'Посуточная аренда',
    title: 'Упаковка и хоумстейджинг',
    desc: 'г. Краснодар · Январь 2026',
    images: ['images/proekt/6/front.jpg','images/proekt/6/two.jpg']
  }
];

const projModalEl      = document.getElementById('projModal');
const projGalleryTrack = document.getElementById('projGalleryTrack');
const pgPrevBtn        = document.getElementById('pgPrev');
const pgNextBtn        = document.getElementById('pgNext');
const pgCounterEl      = document.getElementById('pgCounter');
let pgCurrent = 0;
let pgImages  = [];

function openProject(n) {
  const proj = projectsData[n];
  pgImages  = proj.images;
  pgCurrent = 0;
  const typeEl = document.getElementById('projModalType');
  typeEl.textContent = proj.type;
  typeEl.style.display = proj.type ? '' : 'none';
  document.getElementById('projModalTitle').textContent = proj.title;
  document.getElementById('projModalDesc').textContent  = proj.desc;
  projGalleryTrack.innerHTML = '';
  projModalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Wait one frame so modal is rendered and has real dimensions
  requestAnimationFrame(() => renderProjGallery());
}

function closeProjModal() {
  projModalEl.classList.remove('open');
  document.body.style.overflow = '';
}

function renderProjGallery() {
  const w = projGalleryTrack.parentElement.offsetWidth;
  if (!w) return;
  projGalleryTrack.innerHTML = '';
  projGalleryTrack.style.width = (pgImages.length * w) + 'px';
  pgImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'proj-gallery__img';
    img.style.width = w + 'px';
    img.draggable = false;
    projGalleryTrack.appendChild(img);
  });
  updateProjGallery(false);
}

function updateProjGallery(animate) {
  const w = projGalleryTrack.parentElement.offsetWidth;
  if (!w) return;
  projGalleryTrack.style.transition = animate ? 'transform 0.42s cubic-bezier(0.4,0,0.2,1)' : 'none';
  projGalleryTrack.style.transform  = `translateX(${-pgCurrent * w}px)`;
  pgCounterEl.textContent = `${pgCurrent + 1} / ${pgImages.length}`;
  pgPrevBtn.style.opacity = pgCurrent === 0 ? '0.3' : '1';
  pgNextBtn.style.opacity = pgCurrent === pgImages.length - 1 ? '0.3' : '1';
}

pgPrevBtn.addEventListener('click', () => {
  if (pgCurrent > 0) { pgCurrent--; updateProjGallery(true); }
});
pgNextBtn.addEventListener('click', () => {
  if (pgCurrent < pgImages.length - 1) { pgCurrent++; updateProjGallery(true); }
});

// Mouse drag in project gallery
(function () {
  const galleryWrap = projGalleryTrack.parentElement;
  let dragStartX = 0;
  let dragging = false;

  galleryWrap.style.cursor = 'grab';

  galleryWrap.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    dragStartX = e.clientX;
    dragging = true;
    galleryWrap.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mouseup', (e) => {
    if (!dragging) return;
    dragging = false;
    galleryWrap.style.cursor = 'grab';
    const delta = e.clientX - dragStartX;
    if (delta < -50 && pgCurrent < pgImages.length - 1) { pgCurrent++; updateProjGallery(true); }
    else if (delta > 50 && pgCurrent > 0) { pgCurrent--; updateProjGallery(true); }
  });

  document.addEventListener('mouseleave', () => {
    if (dragging) { dragging = false; galleryWrap.style.cursor = 'grab'; }
  });
})();

window.addEventListener('resize', () => {
  if (!projModalEl.classList.contains('open')) return;
  const w = projGalleryTrack.parentElement.offsetWidth;
  if (!w) return;
  projGalleryTrack.style.width = (pgImages.length * w) + 'px';
  Array.from(projGalleryTrack.children).forEach(img => { img.style.width = w + 'px'; });
  updateProjGallery(false);
});


// ── Generic carousel factory (infinite loop) ──
function makeCarousel({ trackId, prevId, nextId, dotsId, visibleCount, autoMs }) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const origSlides = Array.from(track.children);
  const total = origSlides.length;
  if (total === 0) return;

  // Clone all slides to both ends for seamless infinite wrapping
  origSlides.forEach(s => track.appendChild(s.cloneNode(true)));
  origSlides.forEach(s => track.insertBefore(s.cloneNode(true), track.firstChild));
  // Layout: [clones 0..total-1] [real 0..total-1] [clones 0..total-1]

  const offset = total; // index of first real slide
  let current = offset;
  let autoTimer = null;

  function cardW() {
    const slides = Array.from(track.children);
    return slides[0] ? slides[0].getBoundingClientRect().width : track.parentElement.offsetWidth / visibleCount;
  }

  function render(animate) {
    track.style.transition = animate ? 'transform 0.55s cubic-bezier(0.4,0,0.2,1)' : 'none';
    track.style.transform = `translateX(${-current * cardW()}px)`;
  }

  // After animation: silently jump from clone zone back to real zone
  track.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return;
    track.style.transition = 'none';
    if (current >= offset + total) {
      current -= total;
      track.style.transform = `translateX(${-current * cardW()}px)`;
    } else if (current < offset) {
      current += total;
      track.style.transform = `translateX(${-current * cardW()}px)`;
    }
  });

  function resetAuto() {
    if (!autoMs) return;
    clearInterval(autoTimer);
    autoTimer = setInterval(() => { current++; render(true); }, autoMs);
  }

  if (prevId) { const el = document.getElementById(prevId); if (el) el.addEventListener('click', () => { current--; render(true); resetAuto(); }); }
  if (nextId) { const el = document.getElementById(nextId); if (el) el.addEventListener('click', () => { current++; render(true); resetAuto(); }); }

  if (dotsId) {
    const dotsEl = document.getElementById(dotsId);
    for (let i = 0; i < total; i++) {
      const btn = document.createElement('button');
      btn.className = 'reviews__dot' + (i === 0 ? ' reviews__dot--active' : '');
      btn.dataset.index = i;
      btn.addEventListener('click', () => { current = offset + i; render(true); resetAuto(); });
      dotsEl.appendChild(btn);
    }
  }

  track.style.cursor = 'default';
  resetAuto();
  window.addEventListener('resize', () => render(false));
}

// ── Portfolio carousel ────────────────────────
makeCarousel({
  trackId:      'portfolioCarousel',
  prevId:       'pcPrev',
  nextId:       'pcNext',
  dotsId:       null,
  visibleCount: 3,
  autoMs:       0,
  mobileSwipe:  true
});

// ── Reviews carousel ─────────────────────────
makeCarousel({
  trackId:      'reviewsCarousel',
  prevId:       'rvPrev',
  nextId:       'rvNext',
  dotsId:       null,
  visibleCount: 3,
  autoMs:       4500
});

// ── Hero Slider ──────────────────────────────
(function () {
  const slides = document.querySelectorAll('.hero__slide');
  const dots   = document.querySelectorAll('.hero__dot');
  if (!slides.length) return;

  let current  = 0;
  let timer    = null;

  function goTo(index) {
    slides[current].classList.remove('hero__slide--active');
    dots[current].classList.remove('hero__dot--active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('hero__slide--active');
    dots[current].classList.add('hero__dot--active');
  }

  function next() { goTo(current + 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, 4000);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(Number(dot.dataset.index));
      startTimer();
    });
  });

  startTimer();
})();

// ── Accordion ────────────────────────────────
function toggleAccordion(btn) {
  const item = btn.closest('.accordion-item');
  const isOpen = item.classList.contains('is-open');
  document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('is-open'));
  if (!isOpen) item.classList.add('is-open');
}

// ── Portfolio filter ──────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
    btn.classList.add('filter-btn--active');

    const filter = btn.dataset.filter;

    portfolioCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.opacity = match ? '1' : '0.25';
      card.style.transform = match ? '' : 'scale(0.97)';
      card.style.pointerEvents = match ? '' : 'none';
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
  });
});

// ── Scroll reveal (lightweight) ───────────────
const observerOpts = { threshold: 0.12 };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOpts);

// Add base styles via JS to avoid FOUC
const revealStyle = document.createElement('style');
revealStyle.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1);
  }
  .reveal.revealed {
    opacity: 1;
    transform: none;
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }
  .reveal-delay-5 { transition-delay: 0.5s; }
`;
document.head.appendChild(revealStyle);

// Mark elements for reveal
document.querySelectorAll(
  '.accordion-item, .portfolio-card, .review-card, .approach__step, .intro-strip__item'
).forEach((el, i) => {
  el.classList.add('reveal', `reveal-delay-${(i % 5) + 1}`);
  revealObserver.observe(el);
});

// ── Phone mask ────────────────────────────────
document.querySelectorAll('input[type="tel"]').forEach(input => {
  input.addEventListener('input', () => {
    let val = input.value.replace(/\D/g, '');
    if (val.startsWith('7') || val.startsWith('8')) val = val.slice(1);
    let masked = '+7';
    if (val.length > 0) masked += ' (' + val.slice(0, 3);
    if (val.length >= 3) masked += ') ' + val.slice(3, 6);
    if (val.length >= 6) masked += '-' + val.slice(6, 8);
    if (val.length >= 8) masked += '-' + val.slice(8, 10);
    input.value = masked;
  });
});
