const STORAGE_KEY = 'bkyshop_orders';

document.addEventListener('DOMContentLoaded', () => {
  initScrollEffects();
  initCounters();
  initSearch();
  initFilters();
  initProductGallery();
  initForms();
  initBackToTop();
  initActiveNav();
});

function getSavedOrders() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const orders = raw ? JSON.parse(raw) : [];
    return Array.isArray(orders) ? orders : [];
  } catch (error) {
    console.error('Impossible de lire les commandes stockées.', error);
    return [];
  }
}

function saveOrderLocally(orderPayload) {
  const orders = getSavedOrders();
  orders.unshift(orderPayload);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

function getOrderPayload(form) {
  const fields = form.querySelectorAll('input, textarea');
  const orderPayload = {
    id: `CMD-${Date.now()}`,
    date: new Date().toLocaleString('fr-FR'),
    produit: form.querySelector('input[readonly]')?.value || 'Produit non renseigné',
    quantite: Number(form.querySelector('input[type="number"][min="1"]')?.value || 1),
    commentaire: form.querySelector('textarea')?.value?.trim() || '',
  };

  fields.forEach((field) => {
    const name = field.getAttribute('placeholder') || field.name || field.type || 'field';
    const value = field.value?.trim() || '';
    if (name && value && !orderPayload[name]) {
      orderPayload[name] = value;
    }
  });

  return orderPayload;
}

async function registerOrder(orderPayload) {
  saveOrderLocally(orderPayload);

  if (window.BKYSHOP_SUPABASE?.saveOrder) {
    try {
      await window.BKYSHOP_SUPABASE.saveOrder(orderPayload);
    } catch (error) {
      console.warn('La commande a bien été stockée localement, mais l’envoi Supabase a échoué.', error);
    }
  }
}

function initScrollEffects() {
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
    });
  }
}

function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const suffix = element.dataset.suffix || '';
    const prefix = element.dataset.prefix || '';
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      element.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
      else element.textContent = `${prefix}${target}${suffix}`;
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
}

function initSearch() {
  const searchInput = document.querySelector('[data-search-input]');
  const searchItems = document.querySelectorAll('[data-search-item]');

  if (!searchInput || !searchItems.length) return;

  searchInput.addEventListener('input', (event) => {
    const term = event.target.value.toLowerCase().trim();

    searchItems.forEach((item) => {
      const content = item.textContent.toLowerCase();
      const visible = content.includes(term);
      item.style.display = visible ? '' : 'none';
    });
  });
}

function initFilters() {
  const filterSelect = document.querySelector('[data-filter-category]');
  const priceSelect = document.querySelector('[data-filter-price]');
  const stockSelect = document.querySelector('[data-filter-stock]');
  const colorSelect = document.querySelector('[data-filter-color]');
  const productCards = document.querySelectorAll('[data-product-card]');

  if (!productCards.length) return;

  const applyFilters = () => {
    const category = filterSelect?.value || 'all';
    const price = priceSelect?.value || 'all';
    const stock = stockSelect?.value || 'all';
    const color = colorSelect?.value || 'all';

    productCards.forEach((card) => {
      const cardCategory = card.dataset.category || '';
      const cardPrice = Number(card.dataset.price || 0);
      const cardStock = card.dataset.stock || 'in-stock';
      const cardColor = card.dataset.color || 'default';

      const byCategory = category === 'all' || cardCategory === category;
      const byPrice = price === 'all'
        || (price === 'under-45000' && cardPrice < 45000)
        || (price === '45000-70000' && cardPrice >= 45000 && cardPrice <= 70000)
        || (price === 'over-70000' && cardPrice > 70000);
      const byStock = stock === 'all' || cardStock === stock;
      const byColor = color === 'all' || cardColor === color;

      card.style.display = byCategory && byPrice && byStock && byColor ? '' : 'none';
    });
  };

  [filterSelect, priceSelect, stockSelect, colorSelect].forEach((control) => {
    control?.addEventListener('change', applyFilters);
  });
}

function initProductGallery() {
  const galleryMain = document.querySelector('[data-gallery-main]');
  const thumbs = document.querySelectorAll('[data-gallery-thumb]');

  if (!galleryMain || !thumbs.length) return;

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      galleryMain.src = thumb.src;
      thumbs.forEach((item) => item.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

function initForms() {
  const forms = document.querySelectorAll('[data-validate-form]');

  forms.forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let valid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          valid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      });

      if (!valid) {
        window.dispatchEvent(new CustomEvent('bkyshop:toast', { detail: { message: 'Veuillez remplir tous les champs.', type: 'warning' } }));
        return;
      }

      const orderPayload = getOrderPayload(form);
      await registerOrder(orderPayload);

      window.dispatchEvent(new CustomEvent('bkyshop:toast', { detail: { message: 'Votre demande a bien été enregistrée.', type: 'success' } }));
      form.reset();
    });
  });
}

function initBackToTop() {
  const btn = document.querySelector('[data-back-to-top]');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('d-none', window.scrollY < 300);
  });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initActiveNav() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const sections = document.querySelectorAll('section[id]');

  const setActive = () => {
    let current = 'accueil';
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top <= 140) current = section.id;
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const isActive = href === `#${current}`;
      link.classList.toggle('active', isActive);
    });
  };

  window.addEventListener('scroll', setActive);
  setActive();
}

window.addEventListener('bkyshop:toast', (event) => {
  const { message, type = 'success' } = event.detail || {};
  const wrapper = document.querySelector('#toast-wrapper');
  const toast = document.createElement('div');
  toast.className = `toast align-items-center text-bg-${type} border-0 show`;
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `<div class="d-flex"><div class="toast-body">${message}</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>`;

  wrapper?.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
});
